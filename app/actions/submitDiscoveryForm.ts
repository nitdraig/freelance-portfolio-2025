"use server";

import { headers } from "next/headers";
import {
  discoveryFormSchema,
  formatDiscoveryBodyForOwner,
} from "@/app/src/lib/contact/schema";
import { validateAntiSpam } from "@/app/src/lib/contact/antiSpam";
import { checkContactRateLimit } from "@/app/src/lib/contact/rateLimit";
import { sendThankYouEmail } from "./sendThankYouEmail";

async function getClientIp(): Promise<string> {
  try {
    const h = await headers();
    const forwarded = h.get("x-forwarded-for");
    if (forwarded) return forwarded.split(",")[0].trim();
    const real = h.get("x-real-ip");
    if (real) return real;
  } catch {
    /* headers unavailable */
  }
  return "unknown";
}

export type SubmitDiscoveryResult =
  | { success: true }
  | {
      success: false;
      error:
        | "spam"
        | "too_fast"
        | "expired"
        | "rate_limit"
        | "validation"
        | "mailprex"
        | "email";
      message?: string;
    };

export async function submitDiscoveryForm(formData: {
  fullname: string;
  email: string;
  necesidad: "desarrollo" | "consultoria" | "auditoria";
  presupuesto: "menos-2k" | "2k-5k" | "5k-15k" | "15k-plus";
  urgencia: "asap" | "2-semanas" | "1-3-meses" | "exploratorio";
  decision: "si" | "no";
  message?: string;
  language: "es" | "en";
  /** Honeypot: must be empty. Bots often fill hidden fields. */
  honeypot?: string;
  /** Second honeypot field — must be empty. */
  honeypotCompany?: string;
  /** Timestamp (ms) when the form was shown to the user. */
  formOpenTimestamp?: number;
}): Promise<SubmitDiscoveryResult> {
  const antiSpam = validateAntiSpam({
    honeypot: formData.honeypot,
    honeypotCompany: formData.honeypotCompany,
    formOpenTimestamp: formData.formOpenTimestamp,
  });

  if (!antiSpam.ok) {
    return { success: false, error: antiSpam.error };
  }

  const ip = await getClientIp();
  const allowed = await checkContactRateLimit(ip, formData.email);
  if (!allowed) {
    return { success: false, error: "rate_limit" };
  }

  const parsed = discoveryFormSchema.safeParse({
    fullname: formData.fullname,
    email: formData.email,
    necesidad: formData.necesidad,
    presupuesto: formData.presupuesto,
    urgencia: formData.urgencia,
    decision: formData.decision,
    message: formData.message ?? "",
  });
  if (!parsed.success) {
    const msg = parsed.error.flatten().fieldErrors;
    const first = Object.values(msg).flat().join(" ") || "Revisa los campos.";
    return { success: false, error: "validation", message: first };
  }

  const data = parsed.data;
  const emailDestiny = process.env.EMAIL_DESTINY?.trim() || "";
  const formToken = process.env.MAILPREX_FORM_TOKEN?.trim() || "";
  const url = "https://api.mailprex.excelso.xyz/email/send";

  if (!emailDestiny || !formToken) {
    return {
      success: false,
      error: "mailprex",
      message: "Configuración de email faltante",
    };
  }

  const bodyForOwner = formatDiscoveryBodyForOwner(data, formData.language);

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullname: data.fullname,
        email: data.email,
        service: data.necesidad,
        message: bodyForOwner,
        phone: "",
        webName: "Portfolio Freelance Discovery",
        emailDestiny,
        formToken,
      }),
    });
    if (!res.ok) {
      const text = await res.text();
      return {
        success: false,
        error: "mailprex",
        message: text || `HTTP ${res.status}`,
      };
    }
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Mailprex error";
    return { success: false, error: "mailprex", message: msg };
  }

  const thankYou = await sendThankYouEmail({
    to: data.email,
    name: data.fullname,
    language: formData.language,
  });
  if (!thankYou.ok) {
    return { success: false, error: "email", message: thankYou.error };
  }

  return { success: true };
}
