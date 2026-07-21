# Raíz Verde — Tienda online (demo)

Tienda online de cosmética natural. Forma parte del
[portafolio de Aaron RJ](../../README.md).

> **Marca ficticia.** Raíz Verde es una marca de cosmética artesanal inventada para el
> portafolio. Contenido de ejemplo.

## Qué demuestra

- **Catálogo** por categorías (rostro, cuerpo, cabello) con rejilla responsive.
- **Ficha de producto** con galería, selector de cantidad, valoraciones e ingredientes.
- **Carrito** lateral (drawer) sin recargar: añadir, cambiar cantidad, quitar.
  Persiste en `localStorage` entre páginas y sesiones.
- **Checkout simulado** con resumen del pedido, cálculo de envío gratis desde 35 €,
  validación de formulario y pantalla de confirmación (no procesa pagos reales).
- **Imágenes de producto ilustradas** generadas a medida (SVG), cohesivas y sin
  dependencias externas.
- Prueba social integrada (estrellas + nº de reseñas) en tarjetas y fichas.
- SEO: metadatos por página, datos estructurados `Store` (JSON-LD).

## Stack

- Astro 5 (salida estática) + Tailwind CSS 4.
- Carrito en **JavaScript puro** (`src/scripts/cart.ts`), sin framework ni backend.
- Tipografías: Cormorant Garamond (display) + Inter (texto).

## Desarrollo

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # genera dist/ (incluye /products/*.svg)
pnpm preview
```

## Cómo personalizarlo para un cliente

| Quieres cambiar…              | Edita…                          |
| ----------------------------- | ------------------------------- |
| Productos, precios, categorías| `src/data/products.ts`          |
| Nombre, contacto, envío gratis| `src/data/site.ts`              |
| Ilustraciones de producto     | `src/pages/products/[slug].svg.ts` (o pon fotos reales, ver abajo) |
| Colores y tipografía          | `src/styles/global.css` (`@theme`) |

### Fotografía real de producto

Las imágenes son ilustraciones generadas (brand-neutral) pensadas como *placeholder*
elegante. Para un cliente real:

1. Guarda las fotos en `public/products/` (p. ej. `serum.jpg`).
2. En `products.ts`, borra el bloque que reasigna `p.image` y pon la ruta real en cada
   producto (`image: "/products/serum.jpg"`).

## Integraciones (ver [`../../docs/INTEGRACIONES.md`](../../docs/INTEGRACIONES.md))

- **Pago real** → conectar Stripe (Checkout o Payment Element). El checkout actual es
  una simulación con la misma UX.
- **Newsletter** → el formulario del home apunta a Formspree/Mailchimp (`your-form-id`).
- **Analítica de e-commerce** → eventos `add_to_cart` / `begin_checkout` (documentado).

## Decisiones de diseño

Estilo boutique: mucho blanco, verde salvia como color de marca, tipografía serif
elegante para titulares. Microinteracciones sutiles (hover en producto, drawer animado)
respetando `prefers-reduced-motion`. Ver [`../../docs/INVESTIGACION.md`](../../docs/INVESTIGACION.md).
