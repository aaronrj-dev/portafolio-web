# Despliegue — paso a paso

Cómo publicar las webs del portafolio. Las tres son proyectos **Astro con salida
estática**, así que se despliegan igual (Vercel, Netlify o Hostinger). Aquí van los pasos
concretos. Para la guía genérica reutilizable, ver la skill [`desplegar-web`](../skills/desplegar-web/SKILL.md).

## Requisitos

- Node 20+ y `pnpm` instalados.
- Cuenta en la plataforma elegida (Vercel recomendado).
- Repos en `github.com/aaronrj-dev/…` (uno por web, o un monorepo).

## Antes de nada: compila en local

```bash
cd portafolio-web/sites/01-restaurante   # o 02-tienda / 03-marca-personal
pnpm install
pnpm build       # debe terminar sin errores
pnpm preview     # revisa en http://localhost:4321
```

Antes de publicar, abre `astro.config.mjs` y pon el **dominio final** en `site:`
(afecta a canonical, Open Graph y sitemap).

---

## Opción A — Vercel (recomendada)

### Con Git (ideal: auto-deploy)

1. Sube cada web a un repo de GitHub.
2. En [vercel.com](https://vercel.com) → **Add New… → Project** → importa el repo.
3. Framework preset: **Astro** (lo detecta solo). Build: `astro build`. Output: `dist`.
   - Si el repo es un **monorepo** (las 3 webs juntas), pon el *Root Directory* del
     proyecto en `sites/01-restaurante` (y crea un proyecto Vercel por web).
4. **Deploy**. Cada push a `main` publica; cada PR genera una preview.

### Con la CLI (rápido, sin Git)

```bash
npm i -g vercel
vercel login
cd portafolio-web/sites/01-restaurante
vercel          # preview
vercel --prod   # producción
```

### Dominio

Project → **Settings → Domains** → añade el dominio y configura los DNS (A/CNAME) según
te indique Vercel. El SSL es automático.

---

## Opción B — Netlify

- **Build command**: `astro build` · **Publish directory**: `dist`.
- Por Git: New site from Git → elige repo → deploy.
- Por CLI: `npm i -g netlify-cli` → `netlify deploy` → `netlify deploy --prod`.

---

## Opción C — Hostinger (hosting estático)

Útil si el cliente ya tiene hosting ahí.

1. `pnpm build` → se genera `dist/`.
2. hPanel → **Administrador de archivos** → entra en `public_html`.
3. Sube **el contenido de `dist/`** (los archivos, no la carpeta) a `public_html`.
   `index.html` debe quedar en la raíz.
4. **SSL**: hPanel → SSL → instala el certificado gratuito y fuerza HTTPS.

> En hosting estático no hay build automático: hay que **resubir `dist/`** en cada cambio.
> Si el cliente edita contenido a menudo, mejor Vercel/Netlify con Git.

---

## Notas por web

| Web | Rutas generadas | Ojo con |
|-----|-----------------|---------|
| 01 · Restaurante | 1 página | Poner el ID de Formspree y el iframe real de Google Maps. |
| 02 · Tienda | Home, /tienda, 8 fichas, /checkout, 8 SVG de producto | El checkout es **simulado**; conectar Stripe para cobros reales (ver INTEGRACIONES). |
| 03 · Marca personal | 1 página | Poner el ID de Formspree y sustituir fotos por las reales del cliente. |

## Checklist final (tras publicar)

- [ ] Carga por HTTPS, consola sin errores.
- [ ] Bien en móvil y escritorio.
- [ ] Formulario enviado de prueba y recibido.
- [ ] WhatsApp, mapa y redes funcionan.
- [ ] Open Graph correcto (probar al compartir el enlace).
- [ ] Analítica registrando visitas.
- [ ] `sitemap.xml` enviado a Google Search Console.
