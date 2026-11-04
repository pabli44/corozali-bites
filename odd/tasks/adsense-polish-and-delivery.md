# Pulir landing y preparar entrega para AdSense

## Objetivo
Pulir la landing de `corozali-bites` con SEO, accesibilidad y textos en español, y preparar la entrega para revisión de AdSense.

## Problema
La landing ya tiene contenido editorial, pero aún le falta:
- SEO básico para que Google indexe y entienda el sitio.
- Mejoras de accesibilidad (navegación por teclado, focus, landmarks, skip link).
- Textos del proyecto (README, atributos HTML) en español.
- Decisión y preparación de la estrategia de PR (la rama actual tiene ~1 026 líneas cambiadas).

## Alcance
1. **SEO básico**
   - Cambiar `<html lang="en">` a `<html lang="es">`.
   - Agregar `<meta name="description">` con descripción del restaurante.
   - Agregar Open Graph (`og:title`, `og:description`, `og:type`, `og:url`, `og:image`).
   - Agregar JSON-LD de `Restaurant` o `LocalBusiness` con datos reales del `config.ts`.
   - Agregar `<meta name="robots" content="index, follow">`.
   - Optimizar `<title>`.

2. **Accesibilidad y detalles de UI**
   - Agregar skip link para saltar al contenido principal.
   - Mejorar estilos de `:focus-visible` en links y botones.
   - Verificar jerarquía de encabezados (`h1` → `h2` → `h3`).
   - Agregar `aria-label` y `aria-current` donde falte.
   - Respetar `prefers-reduced-motion`.
   - Asegurar que el anuncio de AdSense tenga `aria-label="Publicidad"` y no sea confundido con contenido.

3. **Traducir textos del proyecto al español**
   - Traducir `README.md` al español (mantener notas técnicas en inglés si es necesario, pero la introducción y uso en español).
   - Verificar que todos los textos visibles de la UI estén en español.
   - Asegurar que `index.html` tenga `lang="es"`.

4. **Preparar PR**
   - Decidir estrategia de entrega: PR único con `size:exception` o chained PRs.
   - Crear descripción de PR con cambios, verificación y notas para el revisor.
   - Si es chained PR, definir cortes y dependencias.

## Tareas
- [x] 1. Actualizar `index.html` con SEO (lang, meta tags, Open Graph, JSON-LD).
- [x] 2. Mejorar accesibilidad en CSS y componentes (skip link, focus, landmarks, reduced motion).
- [x] 3. Traducir `README.md` al español.
- [x] 4. Verificar que toda la UI visible esté en español.
- [x] 5. Preparar descripción de PR y decidir estrategia de entrega.
- [x] 6. Verificar `npm run build` y `npm run lint`.
- [x] 7. Hacer work-unit commits con Conventional Commit.

## Evidencia
- Rama: `feature/adsense-content-rich-landing`
- Build: `npm run build` OK
- Lint: `npm run lint` OK

## Criterios de aceptación
- `index.html` tiene `lang="es"`, meta description, Open Graph y JSON-LD válido.
- Hay un skip link funcional y estilos de focus visibles.
- `README.md` está en español.
- Todos los textos visibles de la UI están en español.
- La build y el lint pasan sin errores.
- Hay un archivo o nota con la descripción del PR y la estrategia elegida.

## Riesgos
- El diff ya es grande; agregar más cambios puede complicar la revisión.
- Open Graph necesita una URL absoluta y una imagen; puede requerir ajustes al deployar.
- JSON-LD debe actualizarse cuando el usuario reemplace los datos de ejemplo.

## Notas
- No agregar dependencias nuevas.
- Mantener el slot de AdSense actual: `8808330165` / `ca-pub-1893344905381073`.
- Las imágenes reales del menú se agregarán en una iteración posterior cuando el usuario las pase.
