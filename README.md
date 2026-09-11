# Gold Mountain Wellness Resort — Next.js Website

A production-oriented Next.js/App Router implementation based on the supplied Gold Mountain strategy, brand identity, page specifications, animation blueprint and QA requirements.

## Stack
- Next.js 16.3.4
- React 19.2.8
- TypeScript
- GSAP 3.15.0 + `@gsap/react` 2.1.2
- Semantic HTML + responsive CSS

## Prerequisites
- Node.js 20.9+ (Node 22 is also suitable)
- npm

## Run locally
```bash
npm install
npm run dev
```

## Production
```bash
npm run typecheck
npm run build
npm run start
```

## Routes
- `/`
- `/wellness`
- `/stay`
- `/experience`
- `/about`
- `/blog`
- `/contact`
- `/book-enquire`
- `/privacy`
- `/terms`

## Brand system
Locked website colours:
- Ivory `#F7F3EA`
- Green `#214D33`
- Gold `#C49A3A`
- Red `#8F2D24`

Typography:
- Primary: Outfit
- Editorial: The Seasons

The architecture-deck blue/neon presentation styling is reference material, not the website palette.

## Environment variables
Copy `.env.example` to `.env.local` and provide only verified client information:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_ENQUIRY_EMAIL`
- `NEXT_PUBLIC_PHONE`

The application intentionally does not invent contact details.

## Source-of-truth implementation
The project includes the supplied PDFs, visual references and source TXT specifications under `public/source/` and `docs/source-specs/` so future updates can be traced to the supplied materials.

The final implementation preserves the core strategy:

`Wellness → Nature → Food → Stay → Experience`

with an enquiry-first conversion model.

## Animation
Implemented selectively using GSAP + ScrollTrigger:
- cinematic hero reveal
- desktop Wellness BODY → MIND → FOOD → LIFESTYLE → ENVIRONMENT sequence
- subtle landscape depth
- experience storytelling rail
- restrained image/button micro-interactions

Desktop pinned choreography is not used on tablet/mobile. Reduced-motion mode removes non-essential movement while preserving all information and controls.

## Assets
`public/images/` contains compressed WebP website assets derived from the supplied source-reference imagery and supplied logos.

`public/fonts/` contains WOFF2 font assets derived from the supplied brand PDF.

Because standalone production photography was not supplied, replace the reference-derived photos with final client-approved originals before public launch.

## Forms / booking model
The site is **enquiry-first**. It does not claim real-time inventory, payment, booking confirmation or automated submission delivery when those integrations are not supplied.

Connect the real backend/contact endpoints at the marked integration points before launch.

## Intentional placeholders
The following remain explicitly client-dependent:
- founder/practitioner details
- verified testimonials/reviews/ratings
- room inventory and amenities
- wellness package details and prices
- verified contact details
- final official address/travel guidance
- privacy policy / terms

No placeholder is presented as confirmed business information.

## QA
See `docs/QA_REPORT.md` and `docs/source-specs/PRE-LAUNCH QA CHECKLIST.txt`.

The implementation pass completed static parsing, route/href, palette, asset and source consistency checks. The container could not complete `npm install` because package-registry/DNS access timed out, so a real Next.js build/server/browser pass must be run in an internet-enabled environment before launch.
