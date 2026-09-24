# 06 — Component Architecture

## Shell

```text
AppShell
├── AnnouncementBar (optional)
├── Header
│   ├── Logo
│   ├── DesktopNav
│   ├── UtilityNav
│   └── MobileMenuTrigger
├── Main
└── Footer
```

## Navigation

```text
MegaMenu
SearchOverlay
CountrySelector
Breadcrumbs
```

## Editorial

```text
HeroCampaign
EditorialSplit
EditorialGrid
ImageReveal
StoryIntro
QuoteBlock
CraftStory
RegionalIndex
```

## Commerce

```text
CollectionHero
ProductGrid
ProductTile
ProductGallery
ProductInfo
SizeSelector
ColorSelector
AddToBag
WishlistButton
QuickView
CartDrawer
CartLine
OrderSummary
```

## Content

```text
JournalIndex
JournalCard
JournalArticle
RelatedCollection
Newsletter
ContactPanel
```

## Motion primitives

```text
FadeIn
RevealUp
ImageClipReveal
ScaleOnScroll
ParallaxImage
HorizontalRail
MagneticButton
CursorLabel
PageTransition
```

## Component rules

- content should be data-driven
- no hard-coded product cards repeated in page files
- all media needs alt text or explicit decorative handling
- interactive components must have keyboard states
