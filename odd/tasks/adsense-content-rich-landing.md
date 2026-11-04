# Enriquecer landing para cumplir políticas de AdSense

## Objetivo
Transformar `corozali-bites` en una landing de restaurante con contenido editorial original y sustancial, para que Google AdSense apruebe el sitio y no lo rechace por "pantallas sin contenido del editor".

## Problema
Hoy el sitio solo muestra un poster semanal y una banda de AdSense. Eso es contenido de poco valor para Google, por lo que el sitio fue rechazado.

## Alcance (Opción B)
- Mantener el poster semanal como hero principal.
- Agregar sección **Nosotros** con historia del local (texto original).
- Agregar sección **Menú** completo organizado por categorías.
- Agregar sección **Ofertas** con historia de posters semanales anteriores.
- Agregar sección **Testimonios** de clientes.
- Agregar sección **Contacto y ubicación**.
- Agregar sección **Redes sociales**.
- Reubicar AdSense dentro del flujo de contenido, nunca aislado en una pantalla vacía.
- Todo debe ser responsive y mantener la identidad visual actual.

## Estrategia de implementación
- Extender `src/data/config.ts` con tipos y datos para menú, ofertas, testimonios, contacto y redes.
- Crear componentes de sección bajo `src/sections/` para no sobrecargar `App.tsx`.
- Reutilizar el componente `Poster` para el hero y para la galería de ofertas pasadas.
- Mantener `AdSense` como componente reutilizable, pero renderizarlo dentro de columnas o entre secciones con contenido real.
- Usar solo React + CSS; no agregar dependencias nuevas.

## Tareas
- [x] 1. Extender tipos y datos en `src/data/config.ts` (menú, ofertas, testimonios, contacto, redes).
- [x] 2. Crear `src/sections/Hero.tsx` con el poster actual y un lema breve.
- [x] 3. Crear `src/sections/About.tsx` con historia del local.
- [x] 4. Crear `src/sections/Menu.tsx` con categorías y tarjetas de productos.
- [x] 5. Crear `src/sections/Offers.tsx` con oferta actual y posters anteriores.
- [x] 6. Crear `src/sections/Testimonials.tsx` con opiniones de clientes.
- [x] 7. Crear `src/sections/Contact.tsx` con dirección, horarios y mapa/ubicación textual.
- [x] 8. Crear `src/sections/Social.tsx` con links a redes.
- [x] 9. Reorganizar `src/App.tsx` para componer todas las secciones y ubicar AdSense entre contenido.
- [x] 10. Ajustar estilos globales y crear `src/sections/Sections.css` para el layout responsive.
- [x] 11. Verificar `npm run build` y `npm run lint`.
- [x] 12. Hacer work-unit commits con Conventional Commit.

## Evidencia
- Rama: `feature/adsense-content-rich-landing`
- Build: `npm run build` OK (sin errores ni advertencias)
- Lint: `npm run lint` OK (oxlint sin salida = 0 problemas)
- Commits:
  - `1d4036a` docs(odd): add adsense content-rich landing task document
  - `46b226b` feat(data): extend config with menu, offers, testimonials, contact and social data
  - `c51493b` feat(sections): add Hero, About, Menu, Offers, Testimonials, Contact and Social sections
  - `0ae84e8` feat(layout): compose rich landing and move AdSense into content flow
- Diff total desde el anterior commit: 995 insertiones, 25 eliminaciones (~1 020 líneas cambiadas)

## Criterios de aceptación
- El sitio tiene al menos 6 secciones de contenido editorial original.
- El anuncio de AdSense no es el único elemento visible en ninguna pantalla.
- El poster semanal sigue siendo el hero principal.
- La build pasa sin errores ni advertencias nuevas.
- El sitio es responsive en móvil y desktop.

## Riesgos
- Si el texto es genérico, Google puede seguir rechazando el sitio.
- En móvil el anuncio puede quedar cerca de elementos interactivos; hay que respetar las políticas de clics accidentales.
- El usuario debe revisar y personalizar los datos (historia, menú, precios, testimonios) para que sean reales.

## Notas
- Los textos de ejemplo deben ser reemplazados por contenido real antes de solicitar la revisión de AdSense.
- No agregar imágenes nuevas de terceros sin permiso; usar el poster existente y texto.
- Mantener el slot de AdSense actual: `8808330165` / `ca-pub-1893344905381073`.
