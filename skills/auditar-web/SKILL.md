---
name: auditar-web
description: Audita una web (rendimiento, SEO, accesibilidad y responsive) y devuelve un informe de mejoras priorizado. Úsala cuando el usuario quiera revisar la calidad de un sitio propio o de un posible cliente, ya sea por URL o desde el código del proyecto.
---

# Auditar una web

Produce un **informe de mejoras claro y priorizado**. Sirve tanto para revisar una web ya
publicada (por URL) como el código de un proyecto local. Es también una gran herramienta
de captación: audita la web actual de un negocio y enséñale qué mejorarías.

## 1. Determina el alcance

- ¿Tienes una **URL** en vivo, una **carpeta de proyecto**, o ambas?
- Si hay proyecto local, arranca el dev server / build. Si solo hay URL, usa el navegador.

## 2. Revisa estas 4 dimensiones

### Rendimiento
- Peso y formato de imágenes (¿AVIF/WebP?, ¿dimensiones y `loading="lazy"`?, ¿`fetchpriority` en el hero?).
- JS enviado al cliente (¿hace falta?, ¿bloquea?). Fuentes (¿`preconnect`, `display=swap`?).
- Cache/CDN, tamaño total de la página, número de peticiones.
- Si puedes, corre Lighthouse (`npx lighthouse <url> --only-categories=performance,seo,accessibility,best-practices --output=json`) y resume las puntuaciones.

### SEO
- `<title>` único y descriptivo, `meta description`, `canonical`.
- Open Graph / Twitter card. `robots.txt` y `sitemap`.
- Un solo `<h1>` y jerarquía de encabezados correcta.
- Datos estructurados (JSON-LD) adecuados al tipo de negocio.
- URLs limpias, texto real (no todo en imágenes).

### Accesibilidad (WCAG 2.1 AA)
- Contraste de texto suficiente.
- `alt` en imágenes; `label` en campos de formulario.
- Foco visible y navegación por teclado; orden lógico de tabulación.
- Roles/aria correctos; `lang` en `<html>`; respeto a `prefers-reduced-motion`.
- Objetivos táctiles ≥ 44 px en móvil.

### Responsive / móvil
- Sin scroll horizontal; contenido legible sin zoom.
- Puntos de ruptura correctos (probar 360, 768, 1280).
- Menú y CTAs usables con el pulgar.

## 3. Verifica en el navegador (no solo leas el código)

Usa las herramientas del navegador para comprobar de verdad: consola de errores, red,
CSS computado (contraste), y captura pantallas en móvil y escritorio. Mide, no supongas.

## 4. Entrega el informe

Formato recomendado (Markdown):

```
# Informe de auditoría — <sitio>  (<fecha>)

## Resumen
Nota global y 3 cosas más importantes a arreglar.

## Hallazgos (priorizados)
### 🔴 Críticos
- [Rendimiento] Hero de 2,3 MB sin optimizar → convertir a WebP (~200 KB). Impacto alto, esfuerzo bajo.
### 🟡 Importantes
- [SEO] Falta meta description en 4 páginas.
### 🟢 Menores / pulido
- [A11y] Mejorar contraste del texto gris (#9aa) sobre blanco.

## Quick wins (≤1 h)
Lista de arreglos rápidos de gran impacto.
```

Ordena por **impacto/esfuerzo**. Para cada hallazgo: qué pasa, por qué importa y cómo se
arregla. Si es una web de un posible cliente, cierra con un párrafo comercial honesto.
