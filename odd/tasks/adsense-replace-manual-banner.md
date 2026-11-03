# Reemplazar banner manual por Google AdSense

## Objetivo
Quitar el componente `AdBanner` manual y mostrar publicidad de Google AdSense en una posición que no tape el poster semanal.

## Problema
Hoy hay un recuadro flotante (`AdBanner`) con una imagen estática de publicidad. El usuario quiere delegar la publicidad a Google AdSense y asegurarse de que los anuncios no cubran la imagen principal del poster.

## Alcance
- Eliminar `AdBanner.tsx`, `AdBanner.css` y su uso en `App.tsx`.
- Agregar el script de AdSense (`ca-pub-1893344905381073`) en `index.html`.
- Crear un componente `AdSense` que renderice un slot de anuncio.
- Reorganizar el layout para que el anuncio ocupe una banda inferior fuera del área del poster.
- Verificar que la app compila y el poster sigue visible.

## Estrategia de layout
El poster actual usa `position: fixed; inset: 0` y `object-fit: contain`, lo que ocupa todo el viewport. Cualquier anuncio posicionado encima taparía el poster o las bandas negras. La solución es:
- Cambiar `.poster-hero` para que ocupe `100vh - ad-banner-height`.
- Colocar el slot de AdSense en una barra inferior fija de ~90px.
- Así el anuncio queda debajo del poster, nunca encima de la imagen.

## Tareas
- [x] 1. Crear rama `feature/adsense-integration` desde `trunk`.
- [x] 2. Eliminar `src/components/AdBanner.tsx` y `src/components/AdBanner.css`.
- [x] 3. Quitar la importación y uso de `AdBanner` en `src/App.tsx`.
- [x] 4. Agregar script de AdSense en `index.html` (async, crossorigin anonymous).
- [x] 5. Crear `src/components/AdSense.tsx` con un slot responsive (`<ins class="adsbygoogle">`).
- [x] 6. Ajustar `src/components/Poster.css` para que el poster ocupe el viewport menos la barra de anuncios.
- [x] 7. Ajustar `src/App.tsx` para incluir `AdSense` en la banda inferior.
- [x] 8. Limpiar la configuración de publicidad manual en `src/data/config.ts`.
- [x] 9. Verificar `npm run build` y `npm run lint`.
- [ ] 10. Hacer work-unit commit con Conventional Commit.

## Criterios de aceptación
- `AdBanner` ya no existe en el repo.
- El script de AdSense está en `index.html` con el cliente correcto.
- Hay un componente `AdSense` renderizando un slot.
- El poster se ve completo sin ser tapado por publicidad.
- La build pasa sin errores ni advertencias nuevas.

## Riesgos
- Google AdSense puede rechazar el sitio si no cumple sus políticas (contenido insuficiente, clics accidentales, etc.).
- En pantallas pequeñas la barra inferior puede ocupar espacio visible; hay que probar en móvil.
- AdSense necesita tiempo para empezar a servir anuncios; mientras tanto se verá un espacio vacío.

## Notas
- No se elimina `src/data/config.ts` completamente porque `currentPoster` sigue usándose.
- Se conserva `public/images/ad-placeholder.svg` por si se quiere revertir; se puede borrar después si no se usa.
