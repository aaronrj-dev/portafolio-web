# Sal de Mar — Web de restaurante (demo)

Sitio de demostración de un restaurante/negocio local. Forma parte del
[portafolio de Aaron RJ](../../README.md).

> **Marca ficticia.** Sal de Mar es un bistró marinero inventado para el portafolio.
> Todo el contenido (textos, carta, fotos) es de ejemplo.

## Qué demuestra

- Hero visual a pantalla completa con doble CTA (reservar / ver carta).
- Carta estructurada por secciones, fácil de editar.
- Galería tipo revista con imagen destacada.
- Sección "Nosotros" con storytelling y datos de confianza.
- Prueba social (reseñas) integrada antes de la CTA.
- Ubicación con **Google Maps** incrustado + horario.
- **Formulario de reservas** listo para Formspree.
- **Botón flotante de WhatsApp** y enlaces sociales.

## Stack

- [Astro 5](https://astro.build) — salida estática, cero JS por defecto.
- [Tailwind CSS 4](https://tailwindcss.com) — vía `@tailwindcss/vite`.
- Tipografías: Fraunces (display) + Inter (texto), servidas por Google Fonts.

## Desarrollo

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # genera dist/
pnpm preview    # sirve dist/ en local
```

## Cómo personalizarlo para un cliente

Todo el contenido está centralizado; **no hace falta tocar el marcado**:

| Quieres cambiar…            | Edita…                     |
| --------------------------- | -------------------------- |
| Nombre, contacto, horario   | `src/data/site.ts`         |
| La carta                    | `src/data/menu.ts`         |
| Fotos y reseñas             | `src/data/content.ts`      |
| Colores y tipografía        | `src/styles/global.css` (bloque `@theme`) |

## Integraciones a activar

Ver [`../../docs/INTEGRACIONES.md`](../../docs/INTEGRACIONES.md):

- **Formulario de reservas** → sustituye `your-form-id` en `src/pages/index.astro`
  por tu ID de [Formspree](https://formspree.io).
- **Google Maps** → cambia `site.address.embed` por la URL "Insertar mapa" real.
- **WhatsApp** → cambia `site.whatsapp` por el número real (formato internacional sin `+`).
- **Analítica** → ver INTEGRACIONES.md (Google Analytics / Plausible).

## Decisiones de diseño

Recogidas en [`../../docs/INVESTIGACION.md`](../../docs/INVESTIGACION.md). En resumen:
paleta cálida arena + acento marino y coral; tipografía serif con carácter para
titulares y sans legible para el cuerpo; hero fotográfico a pantalla completa;
microinteracciones sutiles (aparición al hacer scroll, hover) siempre respetando
`prefers-reduced-motion`; accesibilidad AA y SEO local con datos estructurados
`Restaurant` (JSON-LD).
