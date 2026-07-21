# Portafolio web — Aaron RJ

Portafolio de desarrollo web freelance: **3 sitios de demostración** que enseñan de
lo que soy capaz, más **herramientas y documentación reutilizables** para producir webs
de cliente rápido y con buen acabado.

- 📧 `aaronrj.webdev@gmail.com`
- 🐙 `github.com/aaronrj-dev`

## Los sitios

| # | Proyecto | Tipo | Marca | Estado |
|---|----------|------|-------|--------|
| 0 | [`sites/00-portafolio`](sites/00-portafolio) | **Web personal / índice** (me presenta y enlaza las demos) | Aaron Rodríguez | ✅ Listo |
| 1 | [`sites/01-restaurante`](sites/01-restaurante) | Restaurante / negocio local | **Sal de Mar** | ✅ Listo |
| 2 | [`sites/02-tienda`](sites/02-tienda) | Tienda online (e-commerce) | **Raíz Verde** | ✅ Listo |
| 3 | [`sites/03-marca-personal`](sites/03-marca-personal) | Landing marca personal | **Clara Ferré** | ✅ Listo |

La web `00` es mi página central (marca personal real); las 1–3 son demos con marcas
ficticias. Cada sitio es un proyecto **Astro** independiente y desplegable por separado.

Puertos de desarrollo: índice `4320`, restaurante `4321`, tienda `4322`, marca `4323`.

## Filosofía de diseño

Elegancia, madurez, profesionalidad y simplicidad. *Menos es más*: espacios en blanco
generosos, tipografía cuidada, paleta contenida y microinteracciones sutiles. Las
decisiones están documentadas en [`docs/INVESTIGACION.md`](docs/INVESTIGACION.md).

## Stack

**Astro 5 + Tailwind CSS 4**, salida estática. Cero JS por defecto → Lighthouse alto,
SEO y velocidad excelentes; componentes reutilizables; se despliega igual en Vercel,
Netlify o Hostinger. (Justificación completa en la investigación.)

## Ver en local

Cada sitio se ejecuta por separado:

```bash
cd sites/01-restaurante
pnpm install
pnpm dev            # http://localhost:4321
```

## Documentación

- [`docs/INVESTIGACION.md`](docs/INVESTIGACION.md) — investigación de tendencias y decisiones (Fase 0).
- [`docs/DESPLIEGUE.md`](docs/DESPLIEGUE.md) — publicar cada web paso a paso (Vercel / Netlify / Hostinger).
- [`docs/INTEGRACIONES.md`](docs/INTEGRACIONES.md) — formularios, pagos, analítica, WhatsApp, mapas.

## Herramientas reutilizables (skills)

En [`skills/`](skills):

- **generar-web-local** — crea una web de negocio local a partir de los datos del cliente.
- **auditar-web** — informe de rendimiento, SEO, accesibilidad y responsive.
- **desplegar-web** — checklist y pasos para publicar.

## Estructura

```
portafolio-web/
├── README.md                  ← este archivo
├── docs/                       INVESTIGACION · DESPLIEGUE · INTEGRACIONES
├── sites/
│   ├── 00-portafolio/          Astro · web personal (índice)
│   ├── 01-restaurante/         Astro · Sal de Mar
│   ├── 02-tienda/              Astro · Raíz Verde
│   └── 03-marca-personal/      Astro · Clara Ferré
└── skills/                     generar-web-local · auditar-web · desplegar-web
```
