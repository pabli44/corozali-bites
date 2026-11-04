# Corozali Bites

Landing page de Corozali Bites, un emprendimiento de comida latina/caribeña en Corozal, Puerto Rico. Construida con Vite, React y TypeScript.

## Requisitos

- Node.js 20 o superior
- npm (incluido con Node.js)

## Instalación

Clona el repositorio e instala las dependencias:

```bash
npm install
```

## Scripts disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con Vite |
| `npm run build` | Compila TypeScript y genera la versión de producción en `dist/` |
| `npm run lint` | Ejecuta Oxlint sobre el código fuente |
| `npm run preview` | Previsualiza la versión de producción localmente |

## Configuración del negocio

Los datos visibles del sitio (menú, horarios, contacto, redes sociales) viven en `src/data/config.ts`. Son datos de ejemplo realistas pensados para la revisión de AdSense; debes reemplazarlos por la información real del negocio antes de publicar.

## SEO y accesibilidad

- `index.html` usa `lang="es"`, meta descripción, Open Graph y JSON-LD de Schema.org (`Restaurant`).
- Reemplaza las URLs placeholder (`https://corozalibites.com`) por el dominio real al deployar.
- El contenido principal está envuelto en `<main>` con `id="main-content"` e incluye un *skip link* para navegación por teclado.

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## Licencia

Proyecto privado. Todos los derechos reservados.
