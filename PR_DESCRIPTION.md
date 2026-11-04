# Descripción del PR — Pulir landing y preparar entrega para AdSense

## Resumen

Este PR entrega la landing de Corozali Bites lista para revisión de AdSense: contenido editorial en español, SEO básico (meta tags, Open Graph, JSON-LD), mejoras de accesibilidad (skip link, focus visible, landmarks, reduced motion) y documentación de entrega.

## Cambios incluidos

- **SEO en `index.html`**: `lang="es"`, `<title>` optimizado, meta description, robots, Open Graph y JSON-LD de Schema.org tipo `Restaurant`.
- **Accesibilidad**: componente `SkipLink`, contenedor `<main id="main-content" role="main">`, estilos `:focus-visible` consistentes, jerarquía de encabezados corregida (único `h1` en Hero), `aria-label` en el anuncio de AdSense, soporte para `prefers-reduced-motion`, y mejora de contraste/touch targets.
- **Traducción**: `README.md` redactado en español con notas técnicas de Oxlint preservadas en inglés.
- **UI en español**: verificado que todos los textos visibles estén en español.

## Verificación

```bash
npm run build
npm run lint
```

Ambos comandos deben terminar sin errores.

## Notas para el revisor

1. **Datos de ejemplo**: `src/data/config.ts` e `index.html` contienen datos realistas de ejemplo (dirección, teléfono, horarios, URL). Deben reemplazarse por la información real del negocio antes de enviar a AdSense.
2. **Open Graph / JSON-LD**: las URLs usan el placeholder `https://corozalibites.com`. Reemplazar por el dominio real al deployar para que `og:image` y el structured data sean absolutos y válidos.
3. **Imágenes**: `public/images/poster.jpg` es la imagen de Open Graph por defecto; asegurarse de que exista en producción.
4. **AdSense**: se conservan el `client` (`ca-pub-1893344905381073`) y el `slot` (`8808330165`) actuales.

## Estrategia de entrega recomendada

**Recomendación: PR único con `size:exception`.**

Justificación:

- Los cambios son acoplados y dependen del estado actual de la rama `feature/adsense-content-rich-landing`, que ya acumula ~1 026 líneas en 14 archivos.
- Dividir este PR en *chained PRs* forzaría a los revisores a rastrear dependencias entre cambios transversales (p. ej., el `h1` del Hero depende de la estructura de secciones ya existente; el JSON-LD depende de los datos de `config.ts`) sin aportar valor de revisión significativo.
- Las cuatro unidades de trabajo (SEO, accesibilidad, traducción y preparación de PR) están separadas en commits con mensajes de Conventional Commit claros, lo que facilita la revisión a nivel de commit dentro del PR.

Si el equipo prefiere cumplir estrictamente el presupuesto de 400 líneas, la alternativa sería encadenar PRs desde la base de la rama, pero eso retrasaría la entrega de AdSense y aumentaría el riesgo de conflictos. Con los commits bien delimitados, `size:exception` es la opción más pragmática.

## Commits

- `feat(seo): add meta tags, Open Graph and JSON-LD`
- `feat(a11y): add skip link, focus styles and landmarks`
- `docs(readme): translate README to Spanish`
- `docs(pr): prepare PR description and delivery strategy`
- `docs(odd): mark adsense polish and delivery tasks as completed`
