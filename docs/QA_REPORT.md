# Gold Mountain Wellness Resort — QA Report

## Audit status
Implementation pass completed against the supplied final implementation task, architecture/animation blueprint, brand identity direction, and page-specific source specifications.

## Verified source/implementation corrections
- Exact brand palette is locked to `#F7F3EA`, `#214D33`, `#C49A3A`, `#8F2D24`.
- Website does not use the blue/neon strategy-deck presentation palette.
- Website typography direction is Outfit + The Seasons; no Garet Sans/Aileron substitution is used.
- The brand PDF's literal `-60%` tracking is not implemented; readable responsive values from the supplied Design Tokens spec are used.
- Global navigation is Home / Wellness / Stay / Experience / About / Blog / Contact with a global Book / Enquire CTA.
- Homepage canonical flow is implemented: Hero → Wellness → Location → Dining → Resort → Experience → Stay → Trust → Blog → Book/Enquire.
- Stay taxonomy is separated into Short Stay / Wellness Stay / Monthly Stay / Wellness Package.
- Rooms, package-duration placeholders, monthly stay CTA, amenities, FAQs and pre-arrival guidance are represented without inventing unavailable property facts.
- Experience page includes the five specified experiences and a discovery rail.
- Blog has the six canonical categories and an article-template route; draft articles remain clearly marked and noindexed.
- About includes purpose, founder/practitioner placeholders, philosophy and location.
- Contact and Book / Enquire use an enquiry-first model and do not claim live booking, availability, payments or booking confirmation.
- Enquiry API includes input validation, date/guest checks, JSON/content-size checks, honeypot handling, basic rate limiting and an 8-second upstream timeout.
- Exact success copy is returned only after the configured enquiry webhook accepts the submission.
- Source PDFs are kept under `docs/source-material/`, not `public/`.
- Next.js `priority` image prop has been removed in favour of the current `preload` approach.
- Tablet header breakpoint was widened so the intermediate viewport cannot lose both full navigation and mobile navigation.
- Mobile navigation supports Escape, focus return, focus trapping and body scroll locking.
- Breadcrumb navigation is available on non-hero pages and draft article/legal pages.
- Dining uses a reusable story-rail treatment; Experience and Walk the Resort use desktop horizontal storytelling with mobile vertical fallbacks.
- Choose Your Journey uses an accessible click/tap disclosure pattern rather than hover-only interaction.
- Five-pillar wellness content remains available without animation; reduced-motion users receive a readable sequential fallback.
- GSAP/ScrollTrigger usage is scoped with React cleanup and limited to meaningful cinematic interactions.
- Reduced-motion behavior disables large parallax/scrubbing and decorative looping while preserving content and functionality.
- Buttons, rail controls and focus states meet the source target-size direction; color is not the sole information cue.
- International enquiry process is explicitly explained on Stay and Contact pages without inventing travel arrangements.
- Footer contains navigation, address/map link, direct-contact placeholders, social-link placeholders, privacy and terms links.

## Automated checks completed
- TypeScript/TSX syntax transpilation: PASS (33 files).
- Production structure audit: PASS.
- Internal route/href audit: PASS.
- Static source/palette/legacy typography audit: PASS.
- Asset audit: PASS.
- Local image references: PASS.
- Runtime font declaration/file presence audit: PASS for the two declared font files.

## Brand colour contrast checks
- Green on Ivory: 8.72:1.
- Ivory on Green: 8.72:1.
- Red on Ivory: 7.38:1.
- Ivory on Red: 7.38:1.
- Gold on Green: 3.69:1; used only as an accent/non-body text colour.
- Gold on Ivory: 2.36:1; not used for normal readable text.

## Important source dependency that cannot be safely fabricated
The supplied font assets are extracted/subset files rather than a complete licensed production webfont package. The current files have limited glyph coverage. They are retained only because they are the supplied source assets, with a system fallback in CSS. A complete licensed Outfit + The Seasons webfont package must replace them before public launch if full glyph coverage is required. The Seasons is commercially licensed for self-hosted web usage by its foundry/licensing providers; a license must be obtained for the actual production domain.

## Runtime/build limitation in this environment
The container has no usable package-registry/DNS access. `npm install` was attempted and timed out, and an offline installation could not populate the missing dependency tree. Therefore a real Next.js production build, running browser session, browser console audit, real Core Web Vitals measurement, Safari/iOS device verification and Chrome/Android device verification could not be completed here. No failure was hidden or suppressed.

The final project is prepared for an internet-enabled Node 20.9+ environment:

```bash
npm install
npm run typecheck
npm run audit
npm run build
npm run start
```

For production, set `NEXT_PUBLIC_SITE_URL`. The prebuild gate fails a production build if this is missing so canonical URLs, sitemap and robots cannot silently point to localhost.

## Pre-launch client inputs still required
- Full licensed Outfit + The Seasons webfont files (or approved webfont-service setup).
- Final approved property photography, including dining/food, actual rooms and actual resort spaces.
- Verified WhatsApp, email and phone details.
- Client/official verification of the published address and official getting-here guidance.
- Confirmed room names, capacities, amenities, availability process and prices if they will be published.
- Confirmed wellness package names, inclusions, durations and prices.
- Founder/practitioner names, biographies and credentials.
- Genuine guest stories/reviews/ratings.
- Final blog articles, authorship and publication dates.
- Final privacy policy and terms & conditions.
- Production enquiry webhook/destination.
- Confirmed social-profile URLs.

## External verification used
Current official Next.js documentation was checked for the current Image API (`preload` replacing deprecated `priority` usage in Next 16), and current W3C/GSAP guidance was used for accessibility and scroll animation decisions.
