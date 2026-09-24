# 08 — Motion & Scroll Specification

## Motion principles

1. slow
2. deliberate
3. editorial
4. spatial
5. reversible
6. never required for comprehension

## Recommended stack

- Lenis for smooth scrolling (optional)
- GSAP + ScrollTrigger for complex scroll choreography
- native CSS transitions for micro-interactions
- Motion/Framer Motion for stateful UI where it simplifies maintenance

## Timing

```text
Micro: 120–220ms
UI:    220–420ms
Image: 600–1100ms
Page:  700–1400ms
```

## Easing

Prefer expo/cubic-bezier easing. Avoid playful bounce.

Example:

```css
cubic-bezier(0.22, 1, 0.36, 1)
```

## Hero entrance

```text
T0       background appears
T+200ms  image scale 1.05 → 1.00
T+450ms  eyebrow fade
T+600ms  heading reveal
T+780ms  CTA reveal
```

## Image reveal

Use clip-path or mask reveal from bottom/side.

## Product hover

```text
scale: 1 → 1.035
metadata: translateY(8px) → 0
opacity: 0.85 → 1
```

## Horizontal rail

Desktop wheel/track → horizontal transform; touch devices use horizontal scroll/drag.

## Page transitions

Use a full-surface color block or image mask only if it materially improves continuity.

## Reduced motion

For `prefers-reduced-motion: reduce`:

- disable smoothing
- remove large transforms
- remove looping video if it is not essential
- keep opacity transitions short
- preserve layout and text hierarchy
