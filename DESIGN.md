---
version: alpha
name: PhD Research Project Design System
description: >
  Design tokens, components, and visual language for a 14-page academic research project website.
  Quality benchmark: leading university research project sites (Oxford, Stanford, Adelaide).
  Reference inspiration for layout/UX only: https://thecombatproject.org/ — but all visual tokens are original.
colors:
  background: "#F9F8F6"
  surface: "#FFFFFF"
  text: "#1A1D24"
  muted: "#5F6B7A"
  border: "#E2E4E9"
  accent: "#2E5A88"
  accentSoft: "#E8F0F8"
  success: "#3A7D5A"
typography:
  display:
    fontFamily: Source Serif 4
    fontWeight: 600
  body:
    fontFamily: Inter
    fontWeight: 400
  mono:
    fontFamily: JetBrains Mono
    fontWeight: 400
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    rounded: "{rounded.md}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    rounded: "{rounded.md}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
---

## Overview

This design system governs a 14-page academic research project website built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS. The site communicates PhD research to researchers, clinicians, practitioners, policymakers, and potential participants.

Visual identity is warm, scholarly, and restrained — plenty of white space, institutional gravitas through type, subtle depth through the elevation system. No stock photos, no flashy animations.

## Colors

Color tokens follow a warm-off-white background with deep scholarly blue accent. All combinations meet WCAG 2.1 AA contrast minimums (4.5:1 for text, 3:1 for large text/UI elements).

| Token | Hex | Tailwind CSS Variable | Usage |
|---|---|---|---|
| `background` | `#F9F8F6` | `--color-bg` | Page background, section alternates |
| `surface` | `#FFFFFF` | `--color-surface` | Cards, raised panels, form fields |
| `text` | `#1A1D24` | `--color-text` | Body text, headings, primary content |
| `muted` | `#5F6B7A` | `--color-muted` | Secondary text, captions, metadata |
| `border` | `#E2E4E9` | `--color-border` | Dividers, card borders, input borders |
| `accent` | `#2E5A88` | `--color-accent` | Primary CTAs, links, active nav, icons |
| `accentSoft` | `#E8F0F8` | `--color-accent-soft` | Highlight backgrounds, badge fills, selected states |
| `success` | `#3A7D5A` | `--color-success` | Positive indicators, completion states |

### Tailwind CSS Variable Mapping

In `globals.css`, define these as CSS custom properties on `:root` and map them in `tailwind.config.ts` under `extend.colors`:

```css
:root {
  --color-bg: #F9F8F6;
  --color-surface: #FFFFFF;
  --color-text: #1A1D24;
  --color-muted: #5F6B7A;
  --color-border: #E2E4E9;
  --color-accent: #2E5A88;
  --color-accent-soft: #E8F0F8;
  --color-success: #3A7D5A;
}
```

## Typography

Three-family system loaded from Google Fonts with `next/font/google`:

| Role | Font | Weights | Usage |
|---|---|---|---|
| Display/Headings | Source Serif 4 | 400, 600, 700 | h1–h4, hero headlines, card titles |
| Body | Inter | 400, 500, 600 | Paragraphs, navigation, labels, buttons, forms |
| Mono | JetBrains Mono | 400, 500 | Citations, DOIs, data tables, code snippets |

### Type Scale

| Level | Size (mobile → desktop) | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| h1 / hero | clamp(2.25rem, 4vw, 3.5rem) | 600 (Source Serif 4) | 1.15 | -0.02em |
| h2 / section title | clamp(1.75rem, 3vw, 2.5rem) | 600 (Source Serif 4) | 1.2 | -0.01em |
| h3 / card title | clamp(1.25rem, 2vw, 1.5rem) | 600 (Source Serif 4) | 1.3 | 0 |
| h4 / subsection | 1.125rem | 600 (Inter) | 1.4 | 0 |
| body-lg (lead) | 1.125rem | 400 (Inter) | 1.6 | 0 |
| body (paragraph) | 1rem | 400 (Inter) | 1.6 | 0 |
| body-sm (caption) | 0.875rem | 400 (Inter) | 1.5 | 0 |
| mono (citation) | 0.8125rem | 400 (JetBrains Mono) | 1.5 | 0 |

## Layout

- **Max content width**: 1280px (`max-w-7xl`), centered with `mx-auto`
- **Page padding**: `px-4 sm:px-6 lg:px-8`
- **Section vertical spacing**: `py-16 md:py-24` for major sections, `py-12 md:py-16` for secondary
- **Grid**: mobile single-column; md 2-column; lg 2–3 column depending on content
- **Gap values**: `gap-6` (md spacing, default for cards), `gap-8` (lg spacing for sections), `gap-12` (xl spacing for major layout breaks)

### Responsive Breakpoints (Tailwind defaults)

- `sm`: 640px — stacked → beginning of horizontal layouts
- `md`: 768px — 2-column grids, larger type
- `lg`: 1024px — 3-column grids, full navigation visible
- `xl`: 1280px — max-width container, refined spacing

## Elevation &amp; Depth

Four-tier surface elevation system using lightness deltas and layered box-shadows. No heavy drop-shadows — depth is subtle and scholarly.

| Tier | Background | Shadow | Usage |
|---|---|---|---|
| Base | `#F9F8F6` | none | Page background |
| Raised | `#FFFFFF` | `0 1px 3px rgba(26,29,36,0.06)` | Cards, content panels |
| Overlay | `#FFFFFF` | `0 4px 16px rgba(26,29,36,0.10)` | Dropdowns, modals, tooltips |
| Scrim | `rgba(26,29,36,0.50)` | none + `backdrop-filter: blur(4px)` | Full-page overlays, mobile menu backdrop |

### Border Style

- Default: `1px solid var(--color-border)` (`#E2E4E9`)
- Focus ring: `2px solid var(--color-accent)` with `2px` offset
- Cards: border + raised shadow; optional `border-accent-soft` for highlighted cards

## Shapes

| Token | Value | Tailwind | Usage |
|---|---|---|---|
| `rounded-sm` | 4px | `rounded-sm` | Inline code, small badges, input fields |
| `rounded-md` | 8px | `rounded-md` (custom) | Buttons, form elements, small cards |
| `rounded-lg` | 12px | `rounded-lg` (custom) | Cards, panels, images |
| `rounded-xl` | 16px | `rounded-xl` (custom) | Large feature cards, hero image containers |

## Components

### Button Variants

```tsx
// Primary — filled accent, white text
<Button variant="primary">Primary Action</Button>

// Secondary — outlined accent, transparent fill
<Button variant="secondary">Secondary Action</Button>

// Ghost — no border, accent text, for minimal contexts
<Button variant="ghost">Learn More</Button>

// All support: size (sm | md | lg), disabled state, href (renders as <a>), iconLeading/iconTrailing
```

### Card

Standard content card with raised surface, border, subtle shadow. Used for: publication cards, team cards, resource cards, feature highlights.

### SectionWrapper

Consistent section container: `py-16 md:py-24`, optional `id` for anchor linking, optional `bg` alternation (background vs surface), semantic `<section>` element.

### Header / Footer

Sticky header with skip-to-content link, logo/name area, desktop nav links, mobile hamburger → slide-in drawer. Footer with 3-column link grid, institutional logos, copyright.

### Timeline

Vertical timeline for research phases, milestones, or Delphi rounds. Connector line with nodes, alternating or same-side content. Used on Methods, Protocol, Events pages.

### FAQ Accordion

Expandable Q&amp;A panels with smooth height transition (max-height approach). Question visible, answer revealed on click. Supports keyboard activation, ARIA `aria-expanded`.

### Team Card / Publication Card

Specialized card variants with consistent layout: photo/monogram area, name/title, metadata row, optional link row.

## Animation Principles

- Subtle only: `opacity` + `transform: translateY(4px)` on scroll reveal (Intersection Observer)
- Hover: `transform: translateY(-2px)` + shadow increase on cards; color shift on links
- Transition duration: `150ms` for micro-interactions, `300ms` for card hover, `500ms` for accordion open
- Respect `prefers-reduced-motion`: disable all animations
- No parallax, no scroll-jacking, no autoplay carousels

## Do's and Don'ts

### Do
- Use semantic `<section>`, `<nav>`, `<main>`, `<article>` landmarks
- Provide `aria-label` on nav regions, icon-only buttons, and form controls
- Keep headings in logical descending order (h1 → h2 → h3 → h4)
- Use `next/font/google` for all three typefaces with `subset: ['latin']`
- Add `skip-to-content` link as first focusable element
- Include Schema.org `ResearchProject` structured data on homepage
- Write descriptive alt text for all SVG diagrams and illustrations
- Use `loading="lazy"` on below-fold images
- Prefer static generation (`generateMetadata`, no `'use client'` unless interactive)

### Don't
- Never use stock photography
- Never invent research findings, project details, or scientific results
- Never copy COMBAT Project wording, branding, images, or code
- Don't use `#000000` pure black for text — use `#1A1D24`
- Don't center-align body paragraphs (headings only)
- Don't animate layout-affecting properties (width, height, top, left)
- Don't exceed 3 levels of heading nesting within a single section
- Don't hide focus indicators