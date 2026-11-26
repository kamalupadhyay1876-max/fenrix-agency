# Fenrix Agency

Premium dark-mode AI automation and digital growth website built with Next.js, TypeScript, CSS motion, and reusable data-driven sections.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Edit the content

Most business copy, services, proof points, testimonials, FAQs, email, and phone live in `data/site.ts`. Visual tokens and responsive rules live in `app/globals.css`.

## Contact form

The form currently provides a polished front-end success state so the site works without external credentials. To connect submissions to email later, replace the submit handler in `components/interactive.tsx` with a Next.js route calling Resend.

## Responsive behavior

The layout uses 16px mobile gutters, 24px tablet gutters, 32px laptop gutters, and 40px desktop gutters. Bento cards collapse from dense desktop layouts into one-column mobile cards; the process rail becomes vertical and the navbar becomes an animated drawer.
