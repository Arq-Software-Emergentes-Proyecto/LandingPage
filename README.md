# BuildingFex — Landing page

Página de presentación de **BuildingFex**, la plataforma de gestión de condominios y edificios
(cobranzas, áreas comunes, incidencias, comunicados y asistente de IA).

Hecha con **Vue 3 + Vite**, el mismo stack y estilo visual de la plataforma
(Montserrat + Inter, azul corporativo `#1e3a8a`).

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
```

## Configuración

| Variable | Uso | Por defecto |
|---|---|---|
| `VITE_APP_URL` | URL de la plataforma a la que llevan los botones (solo `https`) | `https://fronted-seven-opal.vercel.app` |

Copia `.env.example` a `.env` si necesitas cambiarla. El archivo `.env` no se sube al repositorio.

## Precios

Los planes están en `src/data/plans.js` y deben coincidir con el catálogo de la plataforma
(backend `Billing/Domain/Model/SubscriptionPlans.cs` y frontend `src/billing/domain/subscriptionPlans.js`).

## Seguridad

- Sitio estático: no tiene formularios, no guarda datos de usuarios ni llama a ninguna API.
- Sin `v-html` ni HTML dinámico; los textos traducidos se muestran siempre como texto plano.
- La URL de la plataforma se valida (solo `https`) antes de usarla en los enlaces.
- `vercel.json` envía cabeceras de seguridad: Content-Security-Policy, HSTS, `X-Frame-Options: DENY`,
  `X-Content-Type-Options`, `Referrer-Policy` y `Permissions-Policy`.
- Sin source maps en producción y sin secretos en el código.

## Despliegue

Importa el repositorio en Vercel: la configuración ya está en `vercel.json`.
