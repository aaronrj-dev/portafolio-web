# Aaron Rodríguez — Web personal (página índice)

Mi web personal: me presenta como desarrollador web y enlaza mis 3 webs de demostración.
Es la página central del [portafolio](../../README.md) y el enlace que comparto con
posibles clientes.

## Secciones

Hero · Sobre mí · Servicios · Cómo trabajo · Stack · Proyectos (las 3 demos) ·
Testimonios · Contacto.

## Stack

Astro 5 (estático) + Tailwind CSS 4. Tipografías: Space Grotesk (display) + Inter (texto).
Estética de desarrollador: neutros pizarra + acento índigo/violeta, hero oscuro con glow.

## Desarrollo

```bash
pnpm install
pnpm dev        # http://localhost:4320
pnpm build
```

## Personalizar

Todo el contenido está en `src/data/site.ts`: textos, servicios, proceso, stack,
proyectos y testimonios. Colores y tipografía en `src/styles/global.css` (`@theme`).

### Cosas a completar antes de publicar

- [ ] **URLs en vivo de los proyectos**: en `src/data/site.ts`, campo `live` de cada
      proyecto (ahora `"#"`). Pon la URL real cuando despliegues cada demo.
- [ ] **LinkedIn**: campo `site.linkedin`.
- [ ] **Formspree**: sustituye `your-form-id` en `src/pages/index.astro` (ver
      [`INTEGRACIONES.md`](../../docs/INTEGRACIONES.md)).
- [ ] **Testimonios reales**: `testimonials` en `src/data/site.ts` son de ejemplo y están
      marcados como "Sustituir por reseña real".
- [ ] **Dominio**: `site:` en `astro.config.mjs`.

## Nota de tono

Cercano y profesional, seguro sin exagerar. Junior sólido y meticuloso — sin usar la
palabra "senior" ni prometer ser "el mejor".
