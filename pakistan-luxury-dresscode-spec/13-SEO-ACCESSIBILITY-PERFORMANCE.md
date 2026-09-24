# 13 — SEO, Accessibility & Performance

## SEO

Every route must define:

- title
- description
- canonical
- Open Graph image
- social metadata

Use structured data for:

- Product
- BreadcrumbList
- Article
- Organization

## Accessibility

- semantic headings
- visible keyboard focus
- Escape closes modal/overlay
- focus management for drawers and dialogs
- reduced motion support
- descriptive alt text for meaningful images
- decorative images marked appropriately
- adequate contrast
- controls with accessible names

## Performance budgets

Targets:

- LCP < 2.5s on a good mobile connection
- CLS < 0.1
- INP < 200ms target

For hero video:

- short duration
- compressed MP4/WebM where useful
- poster frame
- no audio autoplay
- fallback image

## Responsive breakpoints

Use content-driven breakpoints rather than device-specific hardcoding. Validate at roughly:

- 375px
- 430px
- 768px
- 1024px
- 1280px
- 1440px+
