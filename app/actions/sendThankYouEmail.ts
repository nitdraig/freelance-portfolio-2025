"use server";

import nodemailer from "nodemailer";
import { getThankYouEmailContent } from "@/app/src/lib/email/templates";

export type ThankYouEmailPayload = {
  to: string;
  name: string;
  language: "es" | "en";
};

export async function sendThankYouEmail(payload: ThankYouEmailPayload): Promise<{ ok: boolean; error?: string }> {
  const { to, name, language } = payload;

  const from = process.env.MAILER_FROM;
  const host = process.env.MAILER_HOST;
  const port = Number(process.env.MAILER_PORT) || 587;
  const user = process.env.MAILER_USER;
  const pass = process.env.MAILER_PASS;

  if (!from || !host || !user || !pass) {
    console.error("[sendThankYouEmail] Missing MAILER_* env vars");
    return { ok: false, error: "Email not configured" };
  }

  let transporter: nodemailer.Transporter;
  try {
    transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });
  } catch (e) {
    console.error("[sendThankYouEmail] Transporter error", e);
    return { ok: false, error: "Failed to create mailer" };
  }

  const { subject, text, html } = getThankYouEmailContent(language, name);

  try {
    await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
    });
    return { ok: true };
  } catch (err) {
    console.error("[sendThankYouEmail] Send failed", err);
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Failed to send email",
    };
  }
}
