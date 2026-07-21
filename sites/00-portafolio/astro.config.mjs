// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Cambia esto por tu dominio final (p. ej. https://aaronrj.dev).
  site: 'https://aaronrj.example.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
