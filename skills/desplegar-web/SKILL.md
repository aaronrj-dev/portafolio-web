---
name: desplegar-web
description: Publica un proyecto web estático (Astro/HTML) en Vercel, Netlify o Hostinger, con pasos concretos y una checklist previa y posterior al despliegue. Úsala cuando el usuario quiera poner una web en producción o conectar un dominio.
---

# Desplegar una web

Guía el despliegue de un sitio **estático** (por defecto los del portafolio: Astro con
`output: static`). Elige la plataforma según el caso y sigue la checklist.

## 0. Checklist ANTES de desplegar

- [ ] `pnpm build` termina sin errores y `dist/` se genera.
- [ ] `pnpm preview` se ve correcto (consola limpia, imágenes, formularios).
- [ ] `astro.config.mjs` tiene el `site:` con el **dominio final** (afecta a canonical/OG/sitemap).
- [ ] Integraciones con su ID real puesto o claramente marcadas como pendientes
      (Formspree `your-form-id`, WhatsApp, Maps, Analytics). Ver `INTEGRACIONES.md`.
- [ ] Sin secretos en el repo; `.env` en `.gitignore`.
- [ ] Favicon, `robots.txt` y metadatos revisados.

## 1. Elegir plataforma

| Plataforma | Cuándo | Notas |
|-----------|--------|-------|
| **Vercel** | Por defecto. Deploy desde Git, previews por PR, dominios fáciles. | Detecta Astro solo. |
| **Netlify** | Alternativa equivalente a Vercel. | Igual de simple. |
| **Hostinger** | El cliente ya paga hosting ahí / quiere todo en un sitio. | Subir `dist/` por File Manager o FTP. |

## 2A. Vercel (recomendado)

```bash
# Una vez:
npm i -g vercel
vercel login

# En la carpeta del proyecto:
vercel            # primer deploy (preview) — detecta Astro
vercel --prod     # a producción
```

O por Git: sube el repo a GitHub (`github.com/aaronrj-dev/…`), en vercel.com → "Add New
Project" → importa el repo. Framework: **Astro**. Build: `astro build`. Output: `dist`.
Cada push a `main` despliega solo; cada PR genera una preview.

**Dominio**: Project → Settings → Domains → añade el dominio y apunta los DNS
(A/CNAME) según indique Vercel.

## 2B. Netlify

- Build command: `astro build` · Publish directory: `dist`.
- CLI: `npm i -g netlify-cli` → `netlify deploy` (preview) → `netlify deploy --prod`.

## 2C. Hostinger (hosting estático clásico)

1. `pnpm build` → genera `dist/`.
2. hPanel → **Administrador de archivos** → carpeta `public_html`.
3. Sube **el contenido** de `dist/` (no la carpeta) ahí. (O por FTP con FileZilla.)
4. Verifica que `index.html` queda en la raíz de `public_html`.
5. Dominio y SSL: hPanel → SSL (Let's Encrypt gratuito) → forzar HTTPS.

> Nota: en hosting estático no hay build automático; hay que resubir `dist/` en cada
> cambio. Si el cliente actualizará contenido a menudo, mejor Vercel/Netlify con Git.

## 3. Checklist DESPUÉS de desplegar

- [ ] La web carga por HTTPS y sin errores de consola en producción.
- [ ] Se ve bien en móvil real y escritorio.
- [ ] Formulario de contacto **enviado de prueba** y recibido.
- [ ] WhatsApp, mapa y enlaces a redes funcionan.
- [ ] Meta/OG correctos (probar con el depurador de enlaces de una red social).
- [ ] Analítica registrando visitas.
- [ ] Dominio con www y sin www resolviendo; redirección elegida.
- [ ] Enviar `sitemap.xml` a Google Search Console.

## 4. Entrega al cliente

Pásale: URL final, cómo pedir cambios, y qué integraciones quedaron activas. Si mantienes
tú el sitio, deja anotado el flujo de actualización (push a Git o resubida de `dist/`).
