# 18 — Antigravity Master Prompt

You are an expert creative developer and digital art director.

Build a production-grade ORIGINAL Pakistani luxury fashion house website using this specification directory as the source of truth.

REFERENCE:
https://dribbble.com/shots/26385479-Dresscode-Fashion-Tech-Website

The reference is used to understand editorial hierarchy, whitespace, image-first composition, restrained navigation, warm neutral palette and motion language.

DO NOT copy:
- Dresscode name
- Eloqwnt name
- logos
- photography
- text
- product names
- proprietary assets
- exact code
- exact brand identity

Create a distinct Pakistani fashion identity.

========================================
READ FIRST — DO NOT CODE
========================================

Read these files in order:

1. README.md
2. 01-REFERENCE-ANALYSIS.md
3. 02-BRAND.md
4. 03-PRD.md
5. 04-SITEMAP.md
6. 05-DESIGN-SYSTEM.md
7. 06-COMPONENTS.md
8. 07-PAGES.md
9. 08-ANIMATION.md
10. 09-INTERACTIONS.md
11. 10-CONTENT.md
12. 11-ASSET-PROMPTS.md
13. 12-TECH-ARCHITECTURE.md
14. 13-SEO-ACCESSIBILITY-PERFORMANCE.md
15. 14-TASKS.md
16. 15-RULES.md
17. 16-MEMORY.md
18. 17-QA-CHECKLIST.md

After reading, inspect the existing repository, package.json, routes, components and styling architecture.

Then produce a concise implementation plan showing:

- current stack
- architecture changes
- route map
- component tree
- data strategy
- animation strategy
- asset requirements
- performance risks

DO NOT IMPLEMENT UNTIL THE PLAN IS REVIEWED.

========================================
ART DIRECTION
========================================

Build the site as a fashion editorial experience that happens to include ecommerce.

PRIMARY EXPERIENCE:

- oversized fashion imagery
- quiet navigation
- restrained warm neutrals
- premium editorial typography
- asymmetrical layouts
- subtle image movement
- tactile textile storytelling
- contemporary Pakistani cultural grounding

Avoid:

- generic clothing-store templates
- bright gradients
- glassmorphism
- giant rounded cards
- excessive shadows
- bouncy motion
- “ethnic” decoration without cultural provenance

========================================
HOME
========================================

Create:

Hero
Collection intro
Horizontal editorial collection rail
Craft macro
Full-bleed campaign
Selected products
Journal preview
Newsletter/footer

Hero should feel cinematic but remain fast.

Use clean negative space around typography.

========================================
PAKISTANI CULTURAL DIRECTION
========================================

Use regional craft as a serious design and storytelling system.

Where relevant, reference documented traditions such as Sindh Ajrak/block printing and other regional textile techniques. Do not merge all regions into one visual shorthand.

Source reference:
https://heritage.pakistan.gov.pk/SiteImage/Misc/files/ICH%20Pakistan%20Low.pdf

Use craft through:

- material close-ups
- artisan process
- provenance metadata
- regional editorial stories
- controlled pattern use

========================================
MOTION
========================================

Use GSAP/ScrollTrigger where it creates clear value.

Motion language:

slow
smooth
editorial
spatial
quiet

Preferred effects:

- image clip reveal
- image scale
- parallax
- blur-to-sharp
- text rise
- tracking changes
- horizontal rail
- subtle cursor labels

Support prefers-reduced-motion.

========================================
COMMERCE
========================================

Build:

- collection pages
- category pages
- filters
- search
- product detail
- size selector
- add to bag
- wishlist
- cart drawer
- account shell

Keep the commerce UI visually quiet.

========================================
RESPONSIVE
========================================

Design mobile as an intentional composition, not a collapsed desktop page.

Desktop:
12-column editorial grid.

Mobile:
1–2 column layouts,
horizontal swipe rails,
full-screen menu,
sticky purchase controls where appropriate.

========================================
QUALITY BAR
========================================

The website should feel like a high-budget international fashion house while remaining unmistakably Pakistani in its craft storytelling and visual provenance.

It must be:

- production-ready
- responsive
- accessible
- SEO-friendly
- performant
- maintainable
- original

After every major implementation phase, run the application, inspect the console, test desktop/mobile, and fix errors before continuing.
