# Use 3D Gallery on Any Website (Bootstrap-style)

<!-- Author: Molla Samser | rskworld.in | 2026 -->

The **dist** folder contains portable CSS and JS so you can use the same 3D effects on **any website**. All 3D components are **responsive** (Bootstrap-like breakpoints: 576px, 768px, 992px).

---

## Quick start (other website)

1. **Copy** the `dist` folder to your project (or link from your server).
2. **Include** the CSS and JS in your HTML:

```html
<link rel="stylesheet" href="path/to/dist/3d-gallery.css">
<!-- Your content -->
<div class="rsk-3d-gallery">
  <!-- 3D flip cards -->
  <div class="flip-cards">
    <div class="flip-card">
      <div class="flip-inner">
        <div class="flip-front">Front</div>
        <div class="flip-back">Back</div>
      </div>
    </div>
  </div>

  <!-- 3D cube -->
  <div class="cube-scene">
    <div class="cube">
      <div class="cube-face front">1</div>
      <div class="cube-face back">2</div>
      <div class="cube-face right">3</div>
      <div class="cube-face left">4</div>
      <div class="cube-face top">5</div>
      <div class="cube-face bottom">6</div>
    </div>
  </div>

  <!-- 3D tiles -->
  <div class="tiles-grid">
    <div class="tile"><span>1</span></div>
    <div class="tile"><span>2</span></div>
    <div class="tile"><span>3</span></div>
  </div>
</div>

<!-- Optional: theme toggle, back to top -->
<button type="button" data-3d-theme-toggle aria-label="Toggle theme">☀</button>
<button type="button" data-3d-back-to-top aria-label="Back to top">↑</button>

<script src="path/to/dist/3d-gallery.js"></script>
```

3. **Wrap** all 3D content in `<div class="rsk-3d-gallery">` so styles don’t affect the rest of your site.

---

## Data attributes (JS)

| Attribute | Purpose |
|-----------|--------|
| `data-3d-theme-toggle` | Button to switch light/dark (sets `data-theme` on `<html>`) |
| `data-3d-back-to-top` | Button that shows on scroll and scrolls to top |
| `data-3d-customizer-toggle` | Opens customizer panel (if you use customizer HTML) |
| `data-3d-customizer-overlay` | Overlay for customizer |
| `data-3d-customizer-panel` | Customizer panel container |
| `data-3d-customizer-close` | Close button inside panel |

Smooth scroll works for any `<a href="#id">` inside `.rsk-3d-gallery`.

---

## CSS variables (override on your site)

You can override these on `:root` or on `.rsk-3d-gallery` to match your design:

| Variable | Default | Description |
|----------|---------|-------------|
| `--g3d-accent` | #0d6efd | Primary accent |
| `--g3d-accent-light` | #6ea8fe | Lighter accent |
| `--g3d-bg` | #1e293b | Card/surface background |
| `--g3d-bg-elevated` | #334155 | Raised surface |
| `--g3d-text` | #f1f5f9 | Text color |
| `--g3d-perspective` | 1200px | 3D perspective |
| `--g3d-cube-size` | clamp(80px, 18vw, 120px) | Cube edge size |
| `--g3d-card-w` | clamp(110px, 22vw, 140px) | Flip card width |
| `--g3d-card-h` | clamp(140px, 28vw, 180px) | Flip card height |
| `--g3d-duration` | 0.4s | Transition duration |

Light theme: set `data-theme="light"` on `<html>` (or use the theme toggle); the script applies `[data-theme="light"]` variables.

---

## Responsive breakpoints (Bootstrap-like)

- **&lt; 576px** (xs/sm): Smaller cards, cube, tiles; reduced gaps.
- **&lt; 768px** (md): Medium scaling.
- **&lt; 992px** (lg): Optional nav adjustments.
- **prefers-reduced-motion**: Animations disabled when user prefers reduced motion.

---

## Files in this project (full gallery)

- **dist/3d-gallery.css** – Portable CSS (flip, cube, carousel, tiles + responsive). Use on any site.
- **dist/3d-gallery.js** – Standalone JS (theme, back to top, smooth scroll, customizer). Use on any site.
- **css/responsive.css** – Full responsive rules for all pages in this gallery (all 3D types). Include after your styles on the main gallery site.

On the **main gallery site**, include `css/responsive.css` after other CSS so all 3D sections (flip, cube, carousel, tiles, book stack, door, floating, text, frames, accordion, ribbon, isometric, curtain, popout, showcase, etc.) are responsive.

---

**Author (2026):** Molla Samser • [rskworld.in](https://rskworld.in) • help@rskworld.in
