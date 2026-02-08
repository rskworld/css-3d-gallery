# 100% Customization Guide

<!--
  Author: Molla Samser | rskworld.in | 2026
  - Website: https://rskworld.in
  - Email: help@rskworld.in | support@rskworld.in
  - Phone: +91 93305 39277
  - Address: Nutanhat, Mongolkote, Purba Burdwan, West Bengal, India, 713147
-->

This project is **100% customizable** via the in-app **Customizer** (gear icon) or by overriding CSS variables in your own stylesheet.

## Customizer Panel (UI)

- **Accent color** – Blue, Green, Purple, Orange, Pink, Teal (saved to `localStorage`)
- **Animation speed** – 0.5x to 2x (multiplier for all transitions/animations)
- **Border radius** – 0px to 24px (controls card/button roundness)
- **Theme** – Auto (system), Light, Dark
- **Reset** – Restore all defaults

Settings apply immediately and persist across pages.

## CSS Variables You Can Override

Load your CSS **after** the project styles and set these on `:root` or `html`:

### Colors (variables.css / customizer)

| Variable | Description |
|----------|-------------|
| `--accent` | Primary accent color |
| `--accent-light` | Lighter accent (links, highlights) |
| `--accent-dim` | Translucent accent (backgrounds) |
| `--shadow-accent` | Accent glow in shadows |
| `--bg-dark` | Page background |
| `--bg-card` | Card/panel background |
| `--bg-elevated` | Raised surface background |
| `--text` | Primary text color |
| `--text-muted` | Secondary text |
| `--border` | Border color |
| `--shadow` | Generic shadow color |

### Layout (theme.css)

| Variable | Description |
|----------|-------------|
| `--page-max-width` | Max width of main content (e.g. 1100px) |
| `--section-gap` | Gap between sections (e.g. 4rem) |
| `--section-padding` | Padding inside sections |
| `--nav-padding` | Nav bar padding |
| `--header-padding` | Header padding |
| `--footer-padding` | Footer padding |

### Border radius (theme.css)

| Variable | Description |
|----------|-------------|
| `--radius-sm` | Small radius (buttons, badges) |
| `--radius-md` | Medium (cards, inputs) |
| `--radius-lg` | Large (sections, modals) |
| `--radius-xl` | Extra large |
| `--radius-full` | Pill/circle (9999px) |

### Spacing (theme.css)

| Variable | Description |
|----------|-------------|
| `--space-xs` to `--space-2xl` | 0.25rem to 3rem scale |

### Typography (theme.css)

| Variable | Description |
|----------|-------------|
| `--font-sans` | Font family |
| `--font-title-scale` | Main title size (e.g. clamp(1.75rem, 4vw, 2.5rem)) |
| `--font-section-title` | Section heading size |
| `--font-body`, `--font-small`, `--font-tiny` | Body and small text |
| `--line-height`, `--letter-spacing` | Text metrics |

### Animation (theme.css + customizer)

| Variable | Description |
|----------|-------------|
| `--anim-speed` | Global speed multiplier (1 = normal) |
| `--duration-fast` | Short transitions (set by theme.css from --anim-speed) |
| `--duration-normal` | Default transition length |
| `--duration-slow` | Long transitions |
| `--ease-out-back`, `--ease-in-out`, `--ease-elastic` | Easing (variables.css) |

### 3D / Perspective (variables.css)

| Variable | Description |
|----------|-------------|
| `--perspective` | Default perspective (e.g. 1200px) |
| `--cube-size`, `--card-width`, `--card-height` | Sizes for 3D elements |

## Example: Custom Override

```css
/* Load after project CSS */
:root {
  --accent: #059669;
  --accent-light: #34d399;
  --anim-speed: 0.8;
  --radius-md: 16px;
  --font-sans: 'Inter', sans-serif;
}
```

## Theme (light/dark)

- Use `data-theme="light"` or `data-theme="dark"` on `<html>` to force a theme.
- Variables in `variables.css` under `[data-theme="light"]` define the light palette.

---

**Author (2026):** Molla Samser • [rskworld.in](https://rskworld.in) • help@rskworld.in
