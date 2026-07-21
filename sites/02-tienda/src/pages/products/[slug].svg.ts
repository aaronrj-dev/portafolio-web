/**
 * Genera una imagen de producto (SVG) por cada producto del catálogo.
 * Ilustración de marca, cohesiva y sin dependencias externas.
 *
 * Para un cliente real: sustituye estas imágenes por fotografía profesional
 * (guarda las fotos en `public/products/` y apunta `image` en products.ts a ellas).
 */
import type { APIRoute } from "astro";
import { products, type Category } from "../../data/products";

export function getStaticPaths() {
  return products.map((p) => ({ params: { slug: p.slug } }));
}

const tint: Record<Category, { to: string; ink: string }> = {
  rostro: { to: "#dbe8dd", ink: "#2f5540" },
  cuerpo: { to: "#efe6d7", ink: "#7a5a37" },
  cabello: { to: "#e2ebe4", ink: "#2f5540" },
};

/** Divide el nombre en como máximo 2 líneas equilibradas. */
function wrap(name: string): string[] {
  const words = name.split(" ");
  if (words.length <= 2) return [name];
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const GET: APIRoute = ({ params }) => {
  const p = products.find((x) => x.slug === params.slug);
  if (!p) return new Response("Not found", { status: 404 });

  const c = tint[p.category];
  const lines = wrap(p.name);
  const nameSvg = lines
    .map(
      (ln, i) =>
        `<text x="450" y="${past(lines.length, i)}" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="52" font-style="italic" fill="#23271f">${esc(ln)}</text>`
    )
    .join("");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900" role="img" aria-label="${esc(p.name)}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fbfaf6"/>
      <stop offset="100%" stop-color="${c.to}"/>
    </linearGradient>
    <radialGradient id="halo" cx="50%" cy="42%" r="46%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="900" height="900" fill="url(#bg)"/>
  <circle cx="450" cy="380" r="300" fill="url(#halo)"/>

  <!-- Monograma -->
  <text x="60" y="72" font-family="Georgia, serif" font-size="26" font-style="italic" fill="${c.ink}">Raíz Verde</text>

  <!-- Motivo botánico (rama con hojas) -->
  <g transform="translate(450 360)" fill="none" stroke="${c.ink}" stroke-width="4" stroke-linecap="round">
    <path d="M0 150 C 0 40, 0 -40, 0 -150"/>
    ${leaves(c.ink)}
  </g>

  <!-- Nombre + detalle -->
  ${nameSvg}
  <text x="450" y="720" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="24" fill="#565c4f">${esc(p.size)} · ${cap(p.category)}</text>
</svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};

// Posición vertical del nombre según nº de líneas.
function past(total: number, i: number) {
  return total === 1 ? 640 : 620 + i * 62;
}
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** Pares de hojas a lo largo del tallo. */
function leaves(stroke: string) {
  const ys = [-120, -60, 0, 60];
  return ys
    .map(
      (y) => `
    <path d="M0 ${y} C 40 ${y - 14}, 78 ${y - 30}, 92 ${y - 64} C 52 ${y - 44}, 16 ${y - 26}, 0 ${y}" fill="${stroke}" fill-opacity="0.12" stroke="none"/>
    <path d="M0 ${y} C -40 ${y - 14}, -78 ${y - 30}, -92 ${y - 64} C -52 ${y - 44}, -16 ${y - 26}, 0 ${y}" fill="${stroke}" fill-opacity="0.12" stroke="none"/>`
    )
    .join("");
}
