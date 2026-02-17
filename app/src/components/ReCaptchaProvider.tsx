"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

/** Si no hay key, usamos la test key de Google para que el hook no falle; en servidor no se verifica si RECAPTCHA_SECRET_KEY no está. */
const siteKey =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
  "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

export function ReCaptchaProvider({ children }: { children: React.ReactNode }) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
      {children}
    </GoogleReCaptchaProvider>
  );
}
