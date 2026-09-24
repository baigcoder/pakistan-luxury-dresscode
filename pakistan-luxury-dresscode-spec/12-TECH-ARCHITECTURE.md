# 12 — Technical Architecture

## Preferred stack

- Next.js App Router
- React
- TypeScript
- CSS Modules or a single well-structured global CSS layer for visual primitives
- Tailwind only if already established by the project; do not mix multiple styling paradigms without reason
- GSAP for high-value scroll choreography
- Lenis optional
- image delivery through Next/Image or equivalent CDN

## Directory structure

```text
src/
├── app/
│   ├── (site)/
│   ├── collections/
│   ├── product/
│   ├── journal/
│   ├── craft/
│   ├── search/
│   ├── wishlist/
│   ├── cart/
│   └── account/
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── editorial/
│   ├── commerce/
│   ├── motion/
│   └── ui/
├── content/
├── data/
├── lib/
├── hooks/
├── styles/
└── types/
```

## State ownership

- URL state: filters, search query, sorting
- server data: products, collections, articles
- client state: cart drawer, wishlist, menu, search overlay
- local storage: guest bag, wishlist only when appropriate

## Performance rules

- AVIF/WebP where supported
- responsive `sizes`
- preload only the true hero media
- lazy-load below-fold images
- use video poster frames
- avoid shipping GSAP to routes that do not use it if architecture allows
- animate transform/opacity instead of layout properties

## Commerce readiness

Keep a clean boundary between presentation and commerce provider. The UI should not depend directly on vendor-specific API response shapes.
