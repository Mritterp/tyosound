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

## Buckets (client waived per-bucket checkpoints for 1-5; DO NOT do bucket 6 without explicit go-live approval)
- **0 — Skeleton + pipeline** ✅ done: Astro scaffold, tokens wired,
  auto-deploy to Pages. Preview: https://mritterp.github.io/tyosound/
- **1 — Data + core primitives** ✅ done: projects.json/equipment.json (real
  Webflow CMS exports, real YouTube IDs), Button/TextLink/Eyebrow/Icon.
  Sampler at /components.
- **2 — Shared shell** ✅ done: NavHeader (onPhoto/light + mobile menu),
  SiteFooter (contact form posts to Formspree — endpoint is a PLACEHOLDER,
  see SiteFooter.astro top comment, client must create a free Formspree
  form and swap the URL).
- **3 — Home page** ✅ done: hero (with redesign-added CTAs), 3-col What We
  Do + live filter, Featured Work single-open accordion (lazy-loaded
  YouTube embeds), recent posts grid (static images, not a live Instagram
  embed — no API creds in scope). Events column copy is PLACEHOLDER —
  needs real client language. project cat (production/post/events) tags
  are illustrative, confirm with client.
- **4 — Equipment page** ✅ done: hero + 8-category price grid from
  equipment.json, verified 2px #1d201f borders / 0 radius / correct order.
- **5 — Editing system:** PAUSED before starting — requires standing up a
  new external service (OAuth proxy for a Decap/Sveltia-style admin UI, or
  an alternative). Needs the client's explicit choice before creating any
  new account/service.
- **6 — Launch:** SEO/meta/structured data, analytics, a11y, DNS cutover.
  DO NOT START without explicit "site approved, go live" from the client.

## Base-path note
Preview is a Pages *project* site, so `astro.config.mjs` sets `base: '/tyosound'`.
At launch (Bucket 6) switch to the custom domain and `base: '/'`. Reference
assets via `import.meta.env.BASE_URL` so the switch is clean.

## Known content gaps (from handoff)
No real logo (placeholder waveform); Space Grotesk via Google Fonts; client logos
are type stand-ins; Featured Work video IDs + service tags not yet supplied.
