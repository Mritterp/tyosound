// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Bucket 6 DNS cutover: now targeting the real custom domain (apex,
// tyosound.com primary per client decision 2026-07-04) instead of the
// GitHub Pages project-site preview URL. Every canonical/OG/sitemap URL
// derives from `site` + `base` (via Astro.site + import.meta.env.BASE_URL),
// so this was the only code-side change needed. The public/CNAME file is
// what tells GitHub Pages to answer for this domain — DNS itself (at the
// registrar) is a separate, client-side step; see docs/EDITING.md or the
// launch conversation for the exact records.
export default defineConfig({
  site: 'https://tyosound.com',
  base: '/',
  integrations: [
    sitemap({
      // /components is an internal dev reference (the primitives sampler),
      // not real site content — keep it out of search engines' sitemap.
      filter: (page) => !page.includes('/components'),
    }),
  ],
});
