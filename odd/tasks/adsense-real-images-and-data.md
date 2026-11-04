# Integrar imágenes reales y datos del negocio

## Objetivo
Reemplazar los placeholders del menú y las ofertas con las imágenes reales que el usuario pasó, y actualizar los datos de contacto, precios e Instagram para reflejar el negocio real.

## Problema
Actualmente el sitio usa:
- Poster genérico `poster.jpg` como hero.
- `posterOld.svg` como placeholder de ofertas pasadas.
- Precios en dólares y teléfono de Puerto Rico, cuando el negocio real usa pesos colombianos y el número 3012631318.
- Link de Instagram genérico.

## Alcance
1. **Copiar y renombrar imágenes reales**
   - Copiar las 7 imágenes desde `/home/pablo-velilla/Documents/personal_projects/apuntes_proyectos/corozali-vites/imgs/` a `public/images/ofertas/`.
   - Renombrar a nombres web-friendly (minúsculas, guiones, sin espacios ni tildes):
     - `oferta-mote-de-queso.jpg`
     - `oferta-sancocho-costilla-carne-salada.jpg`
     - `oferta-arroz-con-pollo.jpg`
     - `oferta-sancocho-punta-gorda.jpg`
     - `oferta-sopas-de-mondongo.jpg`
     - `oferta-pasteles.jpg`
     - `oferta-arroz-apastelado.jpg`
   - Elegir una imagen como poster principal del hero.

2. **Actualizar `src/data/config.ts`**
   - `currentPoster`: usar una de las imágenes reales como poster principal.
   - `previousPosters`: usar las 6 imágenes restantes como ofertas pasadas, con título, descripción y fecha/semana aproximada.
   - `menuCategories`: ajustar/agregar platos para que coincidan con los posters (mote de queso, sancocho, arroz con pollo, pasteles, arroz apastelado, mondongo). Usar precios en pesos colombianos ($22.000 / $25.000 según los posters).
   - `contactInfo.phone`: `3012631318`.
   - `contactInfo.email`: dejar placeholder o ajustar a algo realista si no se sabe.
   - `contactInfo.address`: cambiar a placeholder de Colombia (ej. "Corozal, Sucre, Colombia") y marcar como dato pendiente.
   - `socialLinks`: Instagram → `https://www.instagram.com/corozali/`.

3. **Actualizar `index.html`**
   - JSON-LD: país `CO`, región ajustada, teléfono `+573012631318`, URL de Instagram en `sameAs` si aplica.
   - `og:image` apuntando al nuevo poster principal.

4. **Ajustes de UI si son necesarios**
   - Verificar que las tarjetas de ofertas se vean bien con las nuevas imágenes.
   - Revisar que el hero muestre el poster principal correctamente.

5. **Verificación**
   - `npm run build` y `npm run lint` deben pasar.

## Tareas
- [x] 1. Copiar y renombrar las 7 imágenes a `public/images/ofertas/`.
- [x] 2. Elegir imagen principal para el hero.
- [x] 3. Actualizar `src/data/config.ts` con datos reales (precios COP, teléfono, Instagram, ofertas).
- [x] 4. Actualizar JSON-LD en `index.html`.
- [x] 5. Verificar que `npm run build` y `npm run lint` pasen.
- [x] 6. Hacer work-unit commits con Conventional Commit.

## Evidencia
- Rama: `feature/adsense-content-rich-landing`
- Build: `npm run build` OK
- Lint: `npm run lint` OK
- Commits:
  - `877c500` feat(assets): add real sunday offer posters
  - `4474fe9` feat(data): update menu, contact and offers with real business data
  - `7ca1192` fix(seo): update JSON-LD country, phone and OG image
- Poster principal elegido: `oferta-sancocho-costilla-carne-salada.jpg`

## Criterios de aceptación
- Las 7 imágenes reales están en `public/images/ofertas/` con nombres descriptivos.
- El hero usa una imagen real.
- La galería de ofertas usa imágenes reales.
- El menú tiene precios en pesos colombianos y platos que coinciden con los posters.
- El teléfono de contacto es `3012631318`.
- El link de Instagram apunta a `https://www.instagram.com/corozali/`.
- Build y lint pasan sin errores.

## Riesgos
- Las imágenes originales tienen nombres con espacios; hay que renombrarlas bien.
- No sabemos la dirección real; se usará placeholder y se marcará para revisión.
- Cambiar moneda y ubicación puede afectar JSON-LD; hay que mantener Schema.org válido.

## Notas
- No eliminar `poster.jpg` ni `posterOld.svg` por si se quieren recuperar.
- Los datos de ejemplo restantes (email, dirección exacta) deben reemplazarse por los reales antes de enviar a AdSense.
- Instagram: `https://www.instagram.com/corozali/`.
