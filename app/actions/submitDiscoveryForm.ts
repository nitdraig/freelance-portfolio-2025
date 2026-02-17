"use server";

import { headers } from "next/headers";
import { discoveryFormSchema, formatDiscoveryBodyForOwner } from "@/app/src/lib/contact/schema";
import { sendThankYouEmail } from "./sendThankYouEmail";

const MIN_FORM_OPEN_SECONDS = 3;
const RATE_LIMIT_MAX_SUBMISSIONS = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hora

const rateLimitMap = new Map<string, number[]>();

function getClientIp(): string {
  try {
    const h = headers();
    const forwarded = h.get("x-forwarded-for");
    if (forwarded) return forwarded.split(",")[0].trim();
    const real = h.get("x-real-ip");
    if (real) return real;
  } catch {
    /* server component */
  }
  return "unknown";
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  let list = rateLimitMap.get(ip) ?? [];
  list = list.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (list.length >= RATE_LIMIT_MAX_SUBMISSIONS) return false;
  list.push(now);
  rateLimitMap.set(ip, list);
  return true;
}

const RECAPTCHA_MIN_SCORE = 0.3;

async function verifyRecaptcha(token: string, remoteip?: string): Promise<{ success: boolean; score?: number }> {
  const secret = process.env.RECAPTCHA_SECRET_KEY?.trim();
  if (!secret) return { success: true };
  const params = new URLSearchParams({ secret, response: token });
  if (remoteip) params.set("remoteip", remoteip);
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    body: params,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });
  const data = (await res.json()) as { success: boolean; score?: number };
  return { success: !!data.success, score: data.score };
}

export type SubmitDiscoveryResult =
  | { success: true }
  | { success: false; error: "spam" | "too_fast" | "rate_limit" | "recaptcha" | "validation" | "mailprex" | "email"; message?: string };

export async function submitDiscoveryForm(formData: {
  fullname: string;
  email: string;
  necesidad: "desarrollo" | "consultoria" | "auditoria";
  presupuesto: "menos-2k" | "2k-5k" | "5k-15k" | "15k-plus";
  urgencia: "asap" | "2-semanas" | "1-3-meses" | "exploratorio";
  decision: "si" | "no";
  message?: string;
  language: "es" | "en";
  /** Honeypot: debe llegar vacío. Si tiene valor, es bot. */
  honeypot?: string;
  /** Timestamp (ms) de cuando se mostró el formulario. Debe haber pasado al menos MIN_FORM_OPEN_SECONDS. */
  formOpenTimestamp?: number;
  /** Token de reCAPTCHA v3 (obligatorio si RECAPTCHA_SECRET_KEY está configurado). */
  recaptchaToken?: string;
}): Promise<SubmitDiscoveryResult> {
  if (formData.honeypot?.trim()) {
    return { success: false, error: "spam" };
  }

  const now = Date.now();
  const openedAt = typeof formData.formOpenTimestamp === "number" ? formData.formOpenTimestamp : 0;
  if (now - openedAt < MIN_FORM_OPEN_SECONDS * 1000) {
    return { success: false, error: "too_fast" };
  }

  const ip = getClientIp();
  if (!checkRateLimit(ip)) {
    return { success: false, error: "rate_limit" };
  }

  const secret = process.env.RECAPTCHA_SECRET_KEY?.trim();
  if (secret) {
    if (!formData.recaptchaToken?.trim()) {
      return { success: false, error: "recaptcha" };
    }
    const recaptcha = await verifyRecaptcha(formData.recaptchaToken.trim(), ip);
    if (!recaptcha.success || (typeof recaptcha.score === "number" && recaptcha.score < RECAPTCHA_MIN_SCORE)) {
      return { success: false, error: "recaptcha" };
    }
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
  const emailDestiny = process.env.NEXT_PUBLIC_EMAIL_DESTINY?.trim() || "";
  const formToken = process.env.NEXT_PUBLIC_MAILPREX_FORM_TOKEN?.trim() || "";
  const url = process.env.NEXT_PUBLIC_MAILPREX_URL || "https://api.mailprex.excelso.xyz/email/send";

  if (!emailDestiny || !formToken) {
    return { success: false, error: "mailprex", message: "Configuración de email faltante" };
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
      return { success: false, error: "mailprex", message: text || `HTTP ${res.status}` };
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
