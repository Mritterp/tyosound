# TYO Sound — rebuild

Coded rebuild of tyosound.com (audio engineering — Washington D.C. + Baltimore:
Production Sound, Audio Post, Events). Migrating OFF Webflow to a self-owned,
GitHub-hosted static site. The design handoff (tokens + component references)
lives at `C:\Users\Mritt\Downloads\TYO-Sound-handoff\design_handoff_tyosound\`
and the brand rules there are non-negotiable (monochrome #1d201f + white, Space
Grotesk only, square corners, hard rules not shadows, no accent hue, no emoji).

## Decision log (confirmed with client)
1. **Goal:** drive inbound gigs + equipment rentals → SEO and the contact path
   are first-class.
2. **Platform:** fully coded, leaving Webflow. Webflow stays live and untouched
   until launch, then DNS is repointed at the registrar; account deactivated after.
3. **Framework:** Astro (static HTML for SEO, interactive islands for
   accordion/filter/nav). Host: GitHub Pages. Repo: `Mritterp/tyosound` (public).
4. **IA:** the redesign IS the 3-service structure (Production Sound / Audio Post
   / Events) with service-click filtering of Featured Work. Events is promoted.
5. **Content maintenance:** client edits now; a Webflow-CMS-like admin UI is a
   real project goal (built in Bucket 5 over JSON data files — likely Decap/Sveltia).

## Buckets (build one at a time, checkpoint after each)
- **0 — Skeleton + pipeline** ✅ in progress: Astro scaffold, tokens wired,
  auto-deploy to Pages. Preview: https://mritterp.github.io/tyosound/
- **1 — Data + core primitives:** projects/equipment JSON (from Webflow exports),
  Button/TextLink/Eyebrow/Icon.
- **2 — Shared shell:** NavHeader + SiteFooter (+ form backend decision).
- **3 — Home page:** hero, 3-col What We Do + filter, Featured Work accordion,
  recent posts. Needs real YouTube IDs + per-project service tags from client.
- **4 — Equipment page:** hero + category grid from equipment.json.
- **5 — Editing system:** admin UI / CMS-like input over the JSON files.
- **6 — Launch:** SEO/meta/structured data, analytics, a11y, DNS cutover.

## Base-path note
Preview is a Pages *project* site, so `astro.config.mjs` sets `base: '/tyosound'`.
At launch (Bucket 6) switch to the custom domain and `base: '/'`. Reference
assets via `import.meta.env.BASE_URL` so the switch is clean.

## Known content gaps (from handoff)
No real logo (placeholder waveform); Space Grotesk via Google Fonts; client logos
are type stand-ins; Featured Work video IDs + service tags not yet supplied.
