# 3D Transform Gallery

<!--
  Author Details (Year 2026):
  - Founder: Molla Samser
  - Website: https://rskworld.in
  - Email: help@rskworld.in | support@rskworld.in
  - Phone: +91 93305 39277
  - Address: Nutanhat, Mongolkote, Purba Burdwan, West Bengal, India, 713147
  - Follow: Facebook, Twitter, Instagram, LinkedIn, GitHub @ rskworld
-->

Pure CSS 3D transformations and animations with a **Bootstrap 5–style replica** UI (same look and structure as Bootstrap: navbar, container, row/col grid, cards, buttons). **100% customizable** via the in-app Customizer (gear icon) or CSS variables. No Bootstrap dependency—all replica CSS is custom.

## 100% Customization

- **Customizer panel** (gear icon, bottom-left): accent color (6 presets), animation speed (0.5x–2x), border radius (0–24px), theme (Auto/Light/Dark). Settings persist in `localStorage`.
- **CSS variables**: Override colors, spacing, radius, typography, animation speed. See **[CUSTOMIZE.md](CUSTOMIZE.md)** for the full list.

## Features

- **3D transformations** – Flip cards, cube, carousel, book stack, door, floating cards, accordion stack
- **Perspective effects** – Depth on cards, tiles, frames, text, ribbon
- **Interactive animations** – Hover and transition effects, floating, rotating
- **Hover effects** – Tilt, scale, flip, fold on cards and panels
- **Visual effects** – Gradients, shadows, smooth transitions
- **Theme toggle** – Dark / light mode (saved in localStorage)
- **Sticky nav** – Quick jump to sections, smooth scroll
- **Back to top** – Button appears on scroll
- **3D text** – Perspective text with hover
- **3D frames** – Photo-style frames with tilt
- **3D ribbon** – Bent banner
- **Flip clock digit** – Hover to flip
- **Parallax layers** – Depth layers
- **Cylinder rings** – Rotating ring carousel
- **Experiments page** – Bent panel, rotating text, card reveal, folding card, stacked layers
- **Unique Showcase** – Isometric grid, 3D curtain reveal, pop-out button, peek card, perspective tunnel, slot reel, tumbling dice, layered depth title, card deck spread, floating orb, **3D badge**, **photo stack**, **flip counter**
- **UI** – Hero header, section badges, footer links, skip link, consistent spacing

## Project Files

| File / Folder            | Purpose |
|--------------------------|--------|
| `index.html`             | Main gallery: all sections + customizer |
| `gallery.html`           | More: pyramid, card fan, prism, flip clock, parallax, cylinder |
| `experiments.html`       | Experiments: bent panel, rotating text, card reveal, folding card, stacked layers |
| `showcase.html`          | Unique showcase: 13 demos including badge, photo stack, flip counter |
| `styles.css`             | Main 3D and layout styles |
| `css/variables.css`      | Design tokens, colors, theme variables |
| `css/bootstrap-replica.css` | **Bootstrap 5 replica**: grid (container, row, col-*), navbar, cards, buttons, jumbotron, footer, --bs-* variables |
| `css/theme.css`          | **100% customizable**: layout, radius, spacing, typography, anim speed |
| `css/components.css`     | Nav, buttons, back-to-top, theme toggle |
| `css/ui.css`             | Hero, section badges, footer, skip link |
| `css/gallery-extra.css`  | Gallery page: pyramid, fan, prism, flip clock, parallax, cylinder |
| `css/experiments.css`    | Experiments page styles |
| `css/showcase.css`       | Unique showcase styles (+ badge, photo stack, flip counter) |
| `css/customizer.css`     | Customizer panel styles |
| `main.js`                | Theme toggle, back-to-top, smooth scroll, active nav |
| `js/utils.js`            | Optional helpers |
| `js/customizer.js`       | **Customizer logic**: accent, speed, radius, theme, save/load |
| `config.json`            | Project and author metadata |
| `css/responsive.css`     | **Responsive** rules for all 3D sections (Bootstrap-like breakpoints) |
| `dist/3d-gallery.css`    | **Portable CSS** for other websites (scoped under `.rsk-3d-gallery`) |
| `dist/3d-gallery.js`     | **Portable JS** for other websites (theme, back to top, smooth scroll) |
| `CUSTOMIZE.md`           | **Full list of CSS variables** for 100% customization |
| `USAGE.md`               | **Use on any website**: copy-paste HTML, data attributes, variables |
| `CHANGELOG.md`           | **Version history** |
| `CONTRIBUTING.md`        | **How to contribute** |
| `LICENSE.md`             | **MIT license** |
| `README.md`              | This file |

## Technologies

- CSS3
- 3D Transforms
- Perspective
- Animations
- Visual Effects
- Interactive Design
- Vanilla JS (theme, scroll)

## Difficulty

Advanced

## Responsive (Bootstrap-like)

All 3D effects are **responsive**. Breakpoints: **576px** (sm), **768px** (md), **992px** (lg). `css/responsive.css` is included on every page; it scales flip cards, cube, carousel, tiles, and all showcase/gallery sections for mobile and tablet. Supports **prefers-reduced-motion** for accessibility.

## Use on Other Websites

Portable CSS and JS in the **dist** folder work on any site (Bootstrap-style):

- **dist/3d-gallery.css** – Scoped under `.rsk-3d-gallery`; includes flip cards, cube, carousel, tiles + responsive.
- **dist/3d-gallery.js** – Standalone: theme toggle (`data-3d-theme-toggle`), back to top (`data-3d-back-to-top`), smooth scroll, optional customizer.

Wrap your content in `<div class="rsk-3d-gallery">` and include the two files. See **[USAGE.md](USAGE.md)** for copy-paste HTML and data attributes.

## Usage

Open `index.html`, `gallery.html`, `experiments.html`, or `showcase.html` in a modern browser. No build step or server required.

## Author (2026)

**Molla Samser**  
- Website: [rskworld.in](https://rskworld.in)  
- Email: help@rskworld.in | support@rskworld.in  
- Phone: +91 93305 39277  
- Address: Nutanhat, Mongolkote, Purba Burdwan, West Bengal, India, 713147  

© 2026 rskworld.in
