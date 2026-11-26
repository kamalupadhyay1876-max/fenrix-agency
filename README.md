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

The form now posts to `app/api/contact/route.ts`, validates the visitor payload, and returns a clear loading, error, or success state. The endpoint is intentionally credential-free; connect it to Resend or another mail provider by adding a server-side secret when the delivery inbox is ready.

## Production routes

The site includes dedicated `/services`, `/portfolio`, `/about`, `/contact`, `/privacy`, and `/terms` routes, plus generated `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, and a custom 404 experience.

## Responsive behavior

The layout uses 16px mobile gutters, 24px tablet gutters, 32px laptop gutters, and 40px desktop gutters. Bento cards collapse from dense desktop layouts into one-column mobile cards; the process rail becomes vertical and the navbar becomes an animated drawer.
