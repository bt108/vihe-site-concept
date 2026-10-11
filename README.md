# VIHE Site — Redesign Concept (unaccepted)

Concept redesign proposal for the Vrindavan Institute for Higher Education
website. Built while heading the institute's technical department; the
organisation never adopted it, so this stands as a **design and engineering
demo, not the live VIHE site**.

## Stack

- [Astro](https://astro.build/) 4 (static output) + TypeScript
- Tailwind CSS 3 with a 9-token institute palette, Charis SIL typeface
- Zero client-framework JS for content; tiny inline script for the mobile menu

## Run

```sh
cd site
npm install
npm run dev      # local preview
npm run build    # static output in site/dist/
```

## What's demonstrated

- **Token-based theming** — one palette block drives Tailwind config, CSS
  variables, and every section; no one-off hex values in components.
- **Multi-tenant content config** — all copy, courses, contact details, and
  palette live in `site/src/config/org.ts`; re-skinning for another
  organisation means editing that file plus logo/photos, not markup.
- **Responsive by construction** — full-bleed mobile hero, collapsing menu
  with smooth motion and hardened zero-height state, explicit light/dark
  heading treatments per section.
- **Content sections** — hero, courses, retreats, resources, seva (service),
  about, footer with contact block.

## Repo layout

```
site/                 Astro site (the demo)
site/src/config/      org copy/palette config (single source of truth)
site/src/components/  section components, one per page block
site/public/assets/   institute logo + hero photo (VIHE property, used here
                      only to present the concept faithfully)
```

`other-files/` (local only, never committed) holds reference scrap material
and brand sources used during design. It is intentionally git-ignored.

## Status

Incomplete by design: proposal frozen when the institute declined it. No
backend, forms point at `#contact`, course data is Winter 2025–26 sample
copy. Pushed as portfolio evidence of Astro/Tailwind front-end work.
