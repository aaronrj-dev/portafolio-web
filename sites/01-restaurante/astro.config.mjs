// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Cambia esto por el dominio real del cliente antes de publicar (afecta al SEO y al sitemap).
  site: 'https://saldemar.example.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
