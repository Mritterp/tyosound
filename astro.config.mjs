// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages PROJECT-site config (preview phase).
// Preview URL: https://mritterp.github.io/tyosound/
// At launch (Bucket 6) we switch to the custom domain tyosound.com and set base back to '/'.
export default defineConfig({
  site: 'https://mritterp.github.io',
  base: '/tyosound',
});
