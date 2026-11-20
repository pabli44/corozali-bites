# Corozali Bites — Cumplimiento AdSense

## Objective
Dejar el sitio listo para la revisión de Google AdSense: privacidad, `ads.txt`, script de
AdSense y banner de cookies.

## Changes made
- `index.html` — carga el script oficial de AdSense (`ca-pub-1893344905381073`).
- `public/ads.txt` — línea de publisher autorizado para Google.
- `public/privacidad.html` — política de privacidad/cookies en español, con datos reales
  del negocio y enlaces a configuración de anuncios de Google.
- `public/terminos.html` — términos y condiciones del sitio.
- `public/robots.txt` — permite crawlers y apunta al sitemap.
- `public/sitemap.xml` — URLs indexables del sitio.
- `src/components/CookieBanner.tsx` + `.css` — banner inferior con "Aceptar",
  "Solo necesarias" y enlace a política. Guarda preferencia en `localStorage`.
- `src/components/AdSense.tsx` — respeta `cookieConsent === 'denied'` y no carga/pushea
  el slot en ese caso.
- `src/App.tsx` + `src/App.css` — footer con enlaces a privacidad, términos y cookies.

## Verification
- `npm run lint` — pass.
- `npm run build` — pass.
- `dist/ads.txt`, `dist/privacidad.html`, `dist/terminos.html`, `dist/robots.txt` y
  `dist/sitemap.xml` generados correctamente.

## Manual next steps
1. Verificar propiedad del dominio en la cuenta de AdSense.
2. Registrar el sitio en **Google Search Console** y enviar el sitemap
   (`https://corozali-bites.vercel.app/sitemap.xml`).
3. Crear/reclamar el perfil de **Google Business** con el mismo NAP (nombre,
   dirección, teléfono) de la web.
4. Si se usa dominio personalizado, actualizar URL canónica en `index.html`,
   `privacidad.html`, `terminos.html`, `robots.txt` y `sitemap.xml`.
5. Esperar re-crawl de AdSense para validar `ads.txt` y política.

## Notes
- Email y ubicación del negocio ya fueron corregidos previamente en `config.ts` e
  `index.html`.
- Historia "Corozal + Alicia" actualizada en `config.ts`.
- Las imágenes son originales del negocio (confirmado por el usuario).
