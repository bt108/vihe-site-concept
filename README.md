# VIHE Site Concept

[![Deploy](https://github.com/bt108/vihe-site-concept/actions/workflows/deploy.yml/badge.svg)](https://github.com/bt108/vihe-site-concept/actions/workflows/deploy.yml)
[![built with Astro 4](https://img.shields.io/badge/built%20with-Astro%204-orange)](https://astro.build)

A static Astro + Tailwind redesign concept for the VIHE website — all copy
and palette in `site/src/config/org.ts`. Not adopted; a demo, not the live
site. For readers browsing the proposed courses, retreats, and resources.

**Live demo:** https://bt108.github.io/vihe-site-concept/
(deployed from `master` via the GitHub Actions workflow)

## 30-second example

Nav copy in `site/src/config/org.ts`:

```ts
nav: [
  { label: 'Home', href: '#' },
  { label: 'Courses', href: '#courses' },
  { label: 'Retreats', href: '#retreats' },
  { label: 'Resources', href: '#resources' },
  { label: 'Seva', href: '#news' },
  { label: 'About', href: '#get-started' },
  { label: 'Contact', href: '#contact' },
],
```

```sh
cd site && npm ci && npm run dev   # preview under /vihe-site-concept/
npm run build                      # static output in site/dist/
```

## Sample output

| Desktop | Mobile |
|---|---|
| ![Desktop render](docs/img/desktop.png) | ![Mobile render](docs/img/mobile.png) |

## Prerequisites

| Tool | Why |
|---|---|
| Node.js 20 | Runs the Astro toolchain (CI pins `node-version: 20`) |
| npm | Installs deps; runs `dev` / `build` / `preview` / `check` |

## Commands

Run from `site/`:

| Command | Effect |
|---|---|
| `npm install` | Install deps (CI uses `npm ci`) |
| `npm run dev` | Preview under `/vihe-site-concept/` |
| `npm run build` | Static build to `site/dist/` |
| `npm run preview` | Serve the `dist/` build locally |
| `npm run check` | Type-check (`astro check`) |

## Project layout

```
site/astro.config.mjs         # static output + /vihe-site-concept/ base
site/src/config/org.ts        # copy, courses, palette (single source of truth)
site/src/components/          # one component per page section
site/src/layouts/Base.astro   # shell: head, nav, mobile-menu script
site/src/pages/index.astro    # the page, composed from components
site/tailwind.config.cjs      # Tailwind wired to the palette
site/public/assets/           # logo + hero photo (+ placeholders/)
site/dist/                    # build output (git-ignored)
.github/workflows/deploy.yml # CI: build dist/, deploy to Pages
docs/img/                     # desktop.png + mobile.png for this README
other-files/                  # local-only reference scrap (git-ignored)
```

## Content model

- All copy + 9-token palette in `org.ts`; component props default to it.
- Tailwind config + CSS vars derive from the palette; no one-off hex.
- Static build → `site/dist/` → GitHub Pages from `master`.
- Scope: no backend; actions link to `#contact`; Winter 2025–26 course data.
