# Gold Mountain Wellness Resort — Next.js

Production-oriented implementation of the supplied Gold Mountain architecture, brand and animation specifications.

## Stack
- Next.js App Router
- React + TypeScript
- GSAP + ScrollTrigger for justified cinematic interactions
- Local WOFF2 font assets supplied with the source package
- Next Image with responsive AVIF/WebP delivery

## Run
```bash
npm install
npm run dev
```

Production:
```bash
npm run build
npm run start
```

Type check:
```bash
npm run typecheck
```

## Required production configuration
Copy `.env.example` to `.env.local` and supply only client-verified values. `NEXT_PUBLIC_SITE_URL` is required for production canonical URLs, sitemap and robots. `ENQUIRY_WEBHOOK_URL` must point to a real private enquiry destination before the form can acknowledge receipt.

## Brand lock
The website uses only the requested brand palette:
- Ivory `#F7F3EA`
- Green `#214D33`
- Gold `#C49A3A`
- Red `#8F2D24`

Typography direction is Outfit + The Seasons. The supplied font files are preserved. The supplied files are subsets; a fully licensed production webfont package should replace them before launch so all glyphs render consistently.

## Content status
The project deliberately does not fabricate rooms, prices, package inclusions, staff credentials, testimonials, ratings, availability, medical outcomes or legal copy. Visible placeholders mark content dependencies that still require client approval.

## Enquiry model
This is enquiry-first, not a live booking engine. No booking, payment, inventory or availability is claimed. The API endpoint validates the enquiry and forwards it only when `ENQUIRY_WEBHOOK_URL` is configured.

## Source materials
Strategy/brand PDFs are kept under `docs/source-material/` and are not exposed through `public/`.
