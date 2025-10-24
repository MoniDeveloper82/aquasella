# Aquasella — Sitio web del festival

Repositorio del frontend del festival Aquasella. Contiene la UI (React + Vite), datos de artistas y páginas informativas (FAQ, legal, cookies, etc.).

## Estructura principal

- `index.tsx` — router (createHashRouter) y rutas de la app.
- `App.tsx` — layout principal (Header, Footer, Outlet).
- `components/` — componentes reutilizables (Hero, VideoHero, InfoSection, HomeTicketsSection, etc.).
- `pages/` — páginas principales (`Home.tsx`, `Artists.tsx`, `Info.tsx`, `Tickets.tsx`, y páginas legales en `pages/`).
- `public/` — activos estáticos (imágenes en `public/img`, vídeos en `public/videos`).
- `data/` — datos usados por la app (`artists.ts`, `faqs.ts`).

## Rutas importantes

- `/#/` — Home
- `/#/artistas` — Lista de artistas (con filtro por día)
- `/#/info` — Información útil (cards y FAQ)
- `/#/tickets` — Entradas
- `/#/services/camping` — Página de camping
- `/#/services/how-to-get-there` — Cómo llegar
- `/#/services/allowed-items` — Objetos permitidos/prohibidos
- `/#/privacy` — Política de Privacidad
- `/#/cookies` — Política de Cookies
- `/#/legal` — Aviso Legal / Condiciones Generales

> Nota: la app usa `createHashRouter`, por eso las rutas van con `/#/ruta`.

## Cómo ejecutar (desarrollo)

Requisitos: Node.js (recomendado >=16) y npm.

En PowerShell:

```powershell
npm install
npm run dev
```

El servidor de desarrollo de Vite arrancará y mostrará una URL local (normalmente `http://localhost:5173`).

## Añadir / actualizar artistas

- Coloca las imágenes en `public/img/`.
- Edita `data/artists.ts` para añadir o modificar objetos `Artist` y usa rutas relativas `/img/nombre.jpg`.
- Los valores válidos para `day` son: `Jue`, `Vie`, `Sáb`, `Dom`.

## Notas importantes

- Evita añadir ficheros muy grandes al repositorio (p. ej. vídeos >100 MB). Para archivos grandes usa Git LFS o hospédalos externamente y referencia la URL en `VideoHero`.
- Si haces pushes y el servidor remoto rechaza por archivos grandes, puedes usar Git LFS o eliminar el archivo del historial.

## Contacto

Para preguntas sobre el proyecto o contenido, contacta en `info.aquasella@gmail.com`.

---

Si quieres que añada instrucciones de build/producción o pasos de despliegue, lo incorporo.
