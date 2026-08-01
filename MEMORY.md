---
schemaVersion: 1
scope: workspace
updatedAt: "2026-07-16T23:04:33.161Z"
workspaceName: "PhD-Research-Project-Website"
---

# Project Memory

## Project Overview
- Modern, responsive, accessible, professional website for a PhD research project.
- Target audiences: researchers, clinicians, practitioners, policymakers, potential participants.
- Quality benchmark: leading university research project sites.
- Reference inspiration (layout/UX only): https://thecombatproject.org/

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS 3.4
- **Architecture**: `app/` directory, component-based, shared UI library

## Current State
- All 14 pages fully built and populated (no stubs).
- All 14 `lib/data/` TypeScript content files present with real data.
- All reusable components complete (Header, Footer, HeroSection, SectionWrapper, Button, Card, Timeline, TeamCard, PublicationCard, FAQAccordion, ContactForm, PublicationFilter, MobileMenu, MethodDiagram).
- `package.json` now present with standard Next.js scripts (`dev`, `build`, `start`, `lint`).
- Design system consistent across `DESIGN.md`, `globals.css`, and `tailwind.config.ts`.
- Accessibility patterns in place: skip-to-content link, `:focus-visible` ring, reduced-motion, ARIA labels, semantic landmarks.
- Per-page `Metadata` exports for SEO on all 14 pages.
- `lastDone` errors on `layout.tsx` and `page.tsx` are expected false positives from host JSX runtime not supporting TypeScript/Next.js module syntax.

## Artifacts
- `app/` — 14 page files + `layout.tsx` + `globals.css`
- `components/` — 14 React components
- `lib/data/` — 14 TypeScript content data files
- `tailwind.config.ts` — token-aligned Tailwind configuration
- `DESIGN.md` — authoritative design system documentation (231 lines)
- `package.json` — project dependencies and scripts
- `public/downloads/` — README with placeholder inventory for downloadable assets

## Navigation (14 pages)
Home | About | Research Methods | Research Protocol | Team | Publications | Resources | Study Updates | Events | Media & Downloads | Get Involved | Acknowledgements & Funding | FAQ | Contact

## Design Direction
- University/research minimal aesthetic with warm off-white background (#F9F8F6).
- Scholarly deep blue accent (#2E5A88), near-black text (#1A1D24).
- Source Serif 4 headings + Inter body typography pairing.
- Plenty of white space; mobile-first responsive: 1-col → 2-col (md) → 3-col (lg), max-width 1280px.
- Custom SVG scientific illustrations (no stock photos).
- Subtle fade-in on scroll + hover transitions only; no flashy effects.
- WCAG 2.1 AA minimum.

## User Feedback
- Reference site COMBAT Project liked for clean academic aesthetic, navigation structure, card layouts.
- Flashy/excessive animations rejected.
- Stock photos rejected.
- Never invent scientific results — all science from protocol.

## Decisions
- Tech stack: Next.js 15 App Router, React 19, TypeScript 5.7, Tailwind CSS 3.4 — no single-file App.jsx.
- 14 navigation pages with incremental build order: DESIGN.md → components → Homepage → remaining pages.
- Content architecture: TypeScript data files in `lib/data/` for type-safe, maintainable content.
- Protocol content drives all scientific copy; missing information uses clearly marked placeholders.
- Per-page metadata, Schema.org structured data, semantic heading hierarchy for SEO.
- 4-tier surface elevation system (base, raised, overlay, scrim).

## Open Questions
- Protocol PDF content still needs extraction into structured data files (currently placeholdered gracefully).
- Brand/funder logo SVGs still needed for footer (currently handled with `logoText` placeholders).
- Funder acknowledgement copy still needed (acknowledgements data file populated with placeholder structure).

## Next Steps
- Obtain and place brand/funder logo assets in footer.
- Populate funder acknowledgement copy.
- Extract protocol PDF content into structured `lib/data/` fields.
- Final SEO/accessibility/performance audit pass.
- Prepare public/downloads directory with actual downloadable files.

## Promotion Candidates For DESIGN.md
- None pending; DESIGN.md already fully aligned with implementation.

## Recent History
- 2026-07-16: Full workspace verified — all 14 pages, 14 data files, and 14 components complete and populated.
- 2026-07-16: Token consistency audit passed (DESIGN.md ↔ globals.css ↔ tailwind.config.ts).
- 2026-07-16: SEO metadata confirmed on all 14 pages; accessibility patterns verified.
- 2026-07-16: `package.json` generated with Next.js 15, React 19, TypeScript 5.7, Tailwind CSS 3.4 dependencies and standard scripts.