# Clara Ferré — Landing de marca personal (demo)

Landing page de un profesional (fotógrafa), enfocada a **captar leads**. Forma parte del
[portafolio de Aaron RJ](../../README.md).

> **Marca ficticia.** Clara Ferré es una fotógrafa inventada para el portafolio.

## Qué demuestra

Página única, orientada 100 % a conversión, con la estructura que mejor convierte:

- **Hero** con propuesta de valor específica + CTA dominante ("Reserva tu sesión").
- **Prueba** (barra de datos de confianza).
- **Servicios** con precios orientativos y qué incluye cada uno.
- **Portfolio** con **filtro por categoría** (Todo / Bodas / Retrato / Marca).
- **Sobre mí** para generar cercanía y confianza.
- **Proceso** en 3 pasos (reduce la fricción / dudas).
- **Testimonios** con nombre y contexto.
- **FAQ** que resuelve objeciones antes de la CTA final.
- **Formulario de contacto corto** (menos campos = más conversión), listo para Formspree.
- Botón flotante de WhatsApp.

## Stack

- Astro 5 (salida estática) + Tailwind CSS 4.
- Tipografías: Playfair Display (display editorial) + Inter (texto).
- Una sola página; interacción mínima (filtro de portfolio y FAQ nativa con `<details>`).

## Desarrollo

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build
pnpm preview
```

## Cómo personalizarlo para un cliente

Casi todo vive en `src/data/site.ts`: nombre, rol, propuesta de valor, servicios,
portfolio, testimonios, proceso y FAQ. Las fotos se cambian por las del cliente
(sustituye las URLs de Unsplash por `/…` locales en `public/`).

Colores y tipografía: `src/styles/global.css` (bloque `@theme`).

## Integraciones (ver [`../../docs/INTEGRACIONES.md`](../../docs/INTEGRACIONES.md))

- **Formulario** → Formspree (`your-form-id`) o Resend.
- **WhatsApp** → número real en `site.whatsapp`.
- **Analítica** → seguimiento de la conversión "envío de formulario".

## Decisiones de diseño

Estética editorial de fotografía: la imagen manda, el diseño se aparta. Hueso + tinta
casi negra + un único acento ocre. Un solo objetivo por pantalla y una CTA repetida de
forma coherente. Ver [`../../docs/INVESTIGACION.md`](../../docs/INVESTIGACION.md).
