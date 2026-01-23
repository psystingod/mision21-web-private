import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// 1. Importar Keystatic
import keystatic from '@keystatic/astro';

import markdoc from '@astrojs/markdoc';

import vercel from '@astrojs/vercel';

export default defineConfig({
  // Pon tu dominio real o placeholder
  site: 'https://mision21.org',

  integrations: [mdx(), sitemap(), react(), // 2. Añadir Keystatic aquí
  keystatic(), markdoc()],

  // 3. Importante: Para que Keystatic funcione bien en producción
  output: 'hybrid',

  adapter: vercel(),
});
