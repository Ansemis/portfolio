// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // L'indirizzo pubblico del sito. Serve alla sitemap e agli
  // indirizzi assoluti nei meta di condivisione.
  site: 'https://ansemis.com',
  integrations: [
    sitemap({
      // /grazie e' la pagina che si vede dopo aver mandato il form:
      // fuori dalla sitemap, cosi' nessuno ci arriva da una ricerca
      // trovando scritto "messaggio ricevuto" senza aver scritto niente.
      filter: (pagina) => !pagina.endsWith('/grazie/'),
    }),
  ],
});
