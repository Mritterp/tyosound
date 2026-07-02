// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages PROJECT-site config (preview phase).
// Preview URL: https://mritterp.github.io/tyosound/
// At launch (Bucket 6 DNS cutover) we switch `site` to https://tyosound.com
// and `base` back to '/' — every canonical/OG/sitemap URL derives from these
// two values (via Astro.site + import.meta.env.BASE_URL), so that single
// edit is the whole migration for URLs.
export default defineConfig({
  site: 'https://mritterp.github.io',
  base: '/tyosound',
  integrations: [
    sitemap({
      // /components is an internal dev reference (the primitives sampler),
      // not real site content — keep it out of search engines' sitemap.
      filter: (page) => !page.includes('/components'),
    }),
  ],
});
