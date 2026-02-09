export async function sendToMailprex(payload: {
  fullname: string;
  email: string;
  service: string;
  message: string;
  webName: string;
  emailDestiny: string;
  formToken: string;
}): Promise<{ ok: boolean; error?: string }> {
  const url =
    process.env.NEXT_PUBLIC_MAILPREX_URL ||
    "https://api.mailprex.excelso.xyz/email/send";
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullname: payload.fullname,
        email: payload.email,
        service: payload.service,
        message: payload.message,
        phone: "",
        webName: payload.webName,
        emailDestiny: payload.emailDestiny,
        formToken: payload.formToken,
      }),
    });
    if (!res.ok) {
      const text = await res.text();
      return {
        ok: false,
        error: `Mailprex ${res.status}: ${text || res.statusText}`,
      };
    }
    return { ok: true };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return { ok: false, error: msg };
  }
}
