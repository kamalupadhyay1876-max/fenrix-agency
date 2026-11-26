# Fenrix Agency — Implementation Plan

## Product
A premium, conversion-focused AI automation and digital marketing agency website for Fenrix Agency. The visual direction is inspired by the dark, spacious, glow-led architecture of modern Framer/SaaS sites such as the supplied Striv AI reference, while using original Fenrix copy and CSS-built visuals.

## Design
- **Design movement:** dark luxury SaaS with editorial typography and instrument-panel UI.
- **Core principles:** dramatic hierarchy, calm whitespace, tactile cards, and purposeful motion.
- **Color philosophy:** near-black canvas keeps attention on the message; electric indigo and cyan glows signal technology without becoming loud.
- **Layout paradigm:** a centered 1280px frame with offset bento cards and full-bleed glow fields; content alternates between split layouts and dense proof bands.
- **Signature elements:** orb-and-grid hero visual, numbered process rail, and violet/cyan edge glows on interactive cards.
- **Interaction philosophy:** motion confirms hierarchy and state; no animation should block reading or form completion.
- **Animation:** 700ms reveal easing, 180–240ms hover states, CSS marquee, reduced-motion fallback, and a single mobile menu transition.
- **Typography:** Geist/Inter-style sans stack with tight display sizing; body copy uses relaxed line-height.
- **Brand essence:** Fenrix turns repetitive growth work into measurable systems for ambitious businesses. Personality: precise, energetic, pragmatic.
- **Brand voice:** direct and outcome-led. Example lines: “Build a growth system that keeps working.” and “Less busywork. More momentum.”
- **Wordmark:** Fenrix wordmark with an angular F-mark made from two offset bars.
- **Signature color:** electric indigo `#6d5dfc`, supported by cyan `#55d6ff`.

## Frontend architecture
- Next.js App Router + TypeScript.
- `app/page.tsx` composes sections from `components/` and `data/site.ts`.
- `components/interactive.tsx` owns client-only menu, FAQ and contact form behavior.
- `app/globals.css` owns tokens, responsive layout, glow layers, motion and accessibility fallback.
- `public/manus-routes.json` declares the home route for Preview and publication.
- No database in v1. Contact form is an interactive front-end handoff with mailto fallback; server can later connect to Resend without changing the section API.

## Responsive contract
- Mobile `<768px`: 16px gutters, one-column flow, 48px hero type, drawer navigation, stacked CTAs and vertical process.
- Tablet `768–1023px`: 24px gutters, two-column bento/grid where useful, 72px hero type.
- Laptop `1024–1439px`: 32px gutters, split hero and three-column proof grids.
- Desktop `1440px+`: max-width 1280px, 40px outer gutters, 92px display type, 4-column proof grid.

## Project structure
- `app/`: route shell, metadata, home page, global styles.
- `components/`: logo, section heading, visual dashboard, interactive client sections, reusable cards.
- `data/`: editable Fenrix content and contact details.
- `public/`: route manifest and future uploaded assets.
- Root config: package, TypeScript, Next, README, `.cursor/rules.md`.
