# 10 — Content System

## Collection naming examples

Use original names such as:

- FORM 01 — NOOR
- EDIT 02 — MITTI
- CIPHER 03 — AJRAK
- VEIL 04 — RAAT
- LINE 05 — SAHIL

These are placeholders and should be validated for trademark/domain availability before launch.

## Product metadata

```text
COLLECTION
PRODUCT NAME
PRICE
COLOR
FABRIC
ORIGIN / CRAFT
FIT
CARE
```

## Journal categories

- Craft
- House
- Form
- Material
- Places
- People
- Process

## Sample editorial copy

### Hero

THE NEW PAKISTANI SILHOUETTE.

Craft translated into a quieter, more contemporary form.

### Craft

FORM, THEN MEMORY.

### Material

A surface is never only a surface. It records hand, place and time.

### CTA

EXPLORE THE COLLECTION →

## Data model

Product:

```ts
{
  slug,
  name,
  collection,
  category,
  price,
  currency,
  media,
  colors,
  sizes,
  fabric,
  craft,
  origin,
  description,
  care,
  availability,
  relatedProducts
}
```
