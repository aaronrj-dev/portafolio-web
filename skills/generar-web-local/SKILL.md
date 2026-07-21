---
name: generar-web-local
description: Genera una web profesional de negocio local (restaurante, tienda, servicios, etc.) a partir de los datos del cliente — nombre, sector, colores y secciones. Crea un proyecto Astro + Tailwind estático, rápido, accesible y con buen SEO, siguiendo el sistema de diseño del portafolio. Úsala cuando el usuario quiera arrancar una web de cliente desde cero.
---

# Generar web de negocio local

Tu tarea es montar una web **estática, elegante y lista para desplegar** para un negocio
local, siguiendo las convenciones probadas del portafolio (Astro 5 + Tailwind CSS 4).

## 1. Recoge los datos (pregunta solo lo que falte)

Datos mínimos del cliente:
- **Nombre** del negocio y **sector** (restaurante, cafetería, peluquería, clínica, tienda, gimnasio, servicio profesional…).
- **Tono** de marca (cálido, elegante, moderno, cercano…).
- **Color** de marca principal (o déjalo a tu criterio según el sector).
- **Secciones** deseadas. Por defecto según el sector:
  - *Restaurante/local*: hero, carta/servicios, galería, sobre nosotros, ubicación+mapa, reservas.
  - *Tienda*: hero, catálogo, ficha de producto, carrito, checkout.
  - *Servicio/marca personal*: hero, servicios, portfolio/testimonios, sobre mí, contacto.
- **Contacto**: email, teléfono, WhatsApp, dirección, redes.

Si el cliente no da fotos, usa imágenes de stock coherentes (Unsplash) **y verifica en el
navegador que cargan y encajan**; si no encajan, usa ilustraciones SVG generadas (como en
la tienda del portafolio). Nunca dejes imágenes rotas o fuera de contexto.

## 2. Scaffolding

Crea la carpeta del proyecto y estos ficheros (copia la estructura de
`portafolio-web/sites/01-restaurante` como referencia):

```
mi-cliente/
├── package.json          # astro + @tailwindcss/vite + tailwindcss; scripts dev/build/preview
├── astro.config.mjs      # plugin tailwindcss(); site: 'https://…'
├── tsconfig.json         # extends astro/tsconfigs/strict
├── src/
│   ├── styles/global.css # @import "tailwindcss"; bloque @theme con tokens de marca
│   ├── data/site.ts      # TODO el contenido editable (fuente única)
│   ├── layouts/BaseLayout.astro   # <head> SEO, fuentes, JSON-LD, skip-link, reveal
│   ├── components/        # Header, Footer, WhatsAppButton, y los que hagan falta
│   └── pages/index.astro  # composición de secciones
└── public/               # favicon.svg, robots.txt
```

Instala con `pnpm install` (añade `pnpm.onlyBuiltDependencies: ["esbuild","sharp"]`).

## 3. Reglas de diseño (no negociables)

- **Menos es más**: espacio en blanco generoso, paleta contenida (1 color de marca + 1
  acento + neutros), tipografía cuidada (una serif de display + una sans legible de Google Fonts).
- **Mobile-first** y responsive real. **Accesible**: contraste AA, foco visible,
  HTML semántico, `alt`, navegación por teclado, `prefers-reduced-motion`.
- **SEO**: `<title>`, meta description, canonical, Open Graph y JSON-LD adecuado al sector
  (`Restaurant`, `Store`, `ProfessionalService`, `LocalBusiness`…).
- **Microinteracciones sutiles**: aparición al hacer scroll (patrón `.reveal` +
  IntersectionObserver), hover suave. Nada estridente.
- Contenido realista de relleno coherente con la marca (nunca "lorem ipsum").

## 4. Integraciones (dejar preparadas, no inventar credenciales)

- Formulario → Formspree (`action="https://formspree.io/f/your-form-id"`).
- WhatsApp → `https://wa.me/<intl>` con mensaje predefinido.
- Google Maps → iframe de "insertar mapa".
- Analítica → hueco listo para Google Analytics / Plausible.
Documenta en un breve README del proyecto cómo activar cada una (ver `INTEGRACIONES.md`).

## 5. Verifica antes de entregar

1. `pnpm build` sin errores.
2. Arranca el dev server y **revisa en el navegador**: consola sin errores, imágenes que
   cargan, layout en móvil y escritorio, formularios y enlaces.
3. Corrige lo que falle y vuelve a comprobar.

## 6. Entrega

Escribe un `README.md` del proyecto (qué es, cómo verlo, cómo personalizarlo, qué
integraciones activar) y resume al usuario: qué has creado, cómo verlo en local y el
siguiente paso para publicar (deriva a la skill `desplegar-web`).
