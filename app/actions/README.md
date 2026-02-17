# Server Actions

## Email de agradecimiento (Nodemailer)

La acción `sendThankYouEmail` envía el correo de agradecimiento bilingüe al usuario. Requiere estas variables en `.env.local`:

```env
MAILER_FROM="Tu nombre <tu-email@gmail.com>"
MAILER_HOST=smtp.gmail.com
MAILER_PORT=587
MAILER_USER=tu-email@gmail.com
MAILER_PASS=contraseña-de-aplicacion
```

- **Gmail:** crear una [Contraseña de aplicación](https://myaccount.google.com/apppasswords) y usarla en `MAILER_PASS`.
- El email que recibes tú con los datos del formulario sigue enviándose por **Mailprex** (`NEXT_PUBLIC_EMAIL_DESTINY`, `NEXT_PUBLIC_MAILPREX_FORM_TOKEN`).

## reCAPTCHA v3 (opcional)

Para activar reCAPTCHA v3 (invisible) en el formulario de contacto:

1. Crea un sitio reCAPTCHA v3 en [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin).
2. Añade en `.env`:
```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=tu_site_key_v3
RECAPTCHA_SECRET_KEY=tu_secret_key
```
3. Si no configuras estas variables, el formulario sigue funcionando sin verificación reCAPTCHA (honeypot, tiempo y rate limit siguen activos).
