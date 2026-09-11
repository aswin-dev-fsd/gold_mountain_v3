# Implementation notes

## Why some content is intentionally placeholder
The source package explicitly forbids invented prices, availability, testimonials, credentials, room details, package inclusions and medical outcomes. The site therefore uses explicit client placeholders rather than false production claims.

## Brand system
Locked:
- Ivory `#F7F3EA`
- Green `#214D33`
- Gold `#C49A3A`
- Red `#8F2D24`

No blue/neon presentation colours are used in the website.

## Typography
The supplied brand PDF embeds Outfit and The Seasons. The build extracts/ships a merged Outfit Regular subset and The Seasons Regular subset from that supplied PDF. This avoids a third-party font request but may not cover every production glyph/weight. Replace with a licensed full webfont package before launch if required.

## Animation
GSAP + ScrollTrigger is reserved for meaningful scroll choreography. Simple UI interactions use CSS. Motion has a reduced-motion path and a mobile simplification.

## Contact
No verified contact destination was provided. The website never invents one. Set the public environment variables only after client verification.
