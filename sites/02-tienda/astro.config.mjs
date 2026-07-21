// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Cambia esto por el dominio real del cliente antes de publicar.
  site: 'https://raiz-verde-zeta.vercel.app',
  integrations: [
    // Excluimos las imágenes SVG generadas (/products/*.svg) del sitemap.
    sitemap({ filter: (page) => !page.includes('/products/') }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
