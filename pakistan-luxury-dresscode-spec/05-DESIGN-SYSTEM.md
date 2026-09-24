# 05 — Design System

## Reference palette

Published by the Dribbble shot:

```text
#CDCCCC
#171210
#605652
#C2AAA4
#4A342D
#A36153
#B58677
```

## Original Pakistani adaptation

```css
:root {
  --paper: #F1EEE8;
  --ink: #151311;
  --espresso: #28211D;
  --taupe: #B7A99D;
  --terracotta: #8C5849;
  --copper: #B77A5B;
  --indigo: #263A43;
  --muted: #7A716B;
  --line: rgba(21, 19, 17, 0.16);
  --line-dark: rgba(241, 238, 232, 0.18);
}
```

## Typography

Use a display serif and a neutral grotesk sans.

Suggested open-font pairing:

- Display: Cormorant Garamond
- UI/Body: Inter

The implementation must support swapping to licensed commercial typefaces later without redesigning the layout.

## Type scale

```text
Display XL: clamp(4rem, 10vw, 11rem)
Display L:  clamp(3rem, 7vw, 8rem)
H1:         clamp(2.5rem, 5vw, 5.5rem)
H2:         clamp(2rem, 3.5vw, 4rem)
H3:         clamp(1.3rem, 2vw, 2rem)
Body:       0.95rem – 1.05rem
Micro:      0.62rem – 0.72rem
```

## Layout

Desktop: 12-column grid.

Common gutters:

```text
Desktop: 32–48px
Tablet:  24–32px
Mobile:  16–20px
```

Use full-bleed image sections selectively.

## Image ratios

- Hero: 16:9 or viewport-height cinematic crop
- Campaign: 4:5
- Product: 3:4
- Editorial: 4:3 / 3:2
- Texture macro: 1:1 or 4:5

## Borders

1px hairlines. Avoid heavy card borders.

## Radius

Default: 0–6px. The visual language should remain architectural rather than soft-card oriented.

## Shadows

Rare. Prefer tonal contrast and image depth over large box-shadows.

## Buttons

Primary: small capsule or rectangular button depending on context.

Use high contrast but low visual weight.
