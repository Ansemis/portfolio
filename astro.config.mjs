// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // L'indirizzo pubblico del sito. Serve alla sitemap e agli
  // indirizzi assoluti nei meta di condivisione.
  site: 'https://ansemis.com',
  integrations: [sitemap()],
});
