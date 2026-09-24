# NAVA — Pakistan Luxury Dresscode

> **“Craft, Refined. Form with Memory.”**  
> A contemporary Pakistani luxury fashion house translating regional craft, tailoring, and ancestral textile knowledge into modern, globally legible silhouettes.

[![Next.js](https://img.shields.io/badge/Next.js-16.3.6-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Turbopack](https://img.shields.io/badge/Turbopack-Enabled-000000?style=flat-square&logo=vercel)](https://turbo.build/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-Private-darkred?style=flat-square)](#license)

---

## ✦ Overview

**NAVA** is an architectural luxury ready-to-wear and couture e-commerce platform built for the contemporary Pakistani silhouette. Rather than flattening distinct regional traditions into generic motifs, NAVA celebrates documented textile provenance across Sindh, Punjab, Balochistan, Khyber Pakhtunkhwa, and the northern valleys—refining indigenous craft through minimalist tailoring, disciplined typography, and cinematic motion.

Built using **Next.js 16 (App Router)** and **React 19**, the platform compiles **44 static and SSG routes** with zero runtime compilation delays, delivering a seamless editorial-to-commerce experience.

---

## ✦ Key Features

- **Architectural Editorial Layouts**: Asymmetrical 12-column grid system, 1px hairlines, and generous negative space reminiscent of modern luxury publications.
- **Regional Craft Explorer**: Dedicated cultural documentation honoring living traditions:
  - *Sindhi Ajrak* — 16-stage natural dye vat printing and carved wooden block motifs.
  - *Punjab Zardozi* — Architectural metallic couching and heritage threadwork.
  - *Swat Valley Weaving* — Indigenous high-altitude wool warp and weft loomcraft.
- **Complete Commerce System**:
  - Client-side Cart Drawer with live item incrementation, order notes, and luxury gift wrapping options.
  - Interactive Wishlist persistence across sessions.
  - Dynamic Product Detail Views with size guide modal, fabric provenance metadata, and multi-angle galleries.
  - Category-filtered catalog (Women, Men, Couture, Accessories) with sorting and instant search.
- **Motion & Micro-interactions**:
  - Kinetic page transitions and Intro Curtain orchestration with GSAP.
  - Smooth inertia scrolling powered by Lenis.
  - Interactive minimal cursor physics and subtle viewport reveal observers.
- **Accessibility & SEO**:
  - Fully dynamic `sitemap.xml` and `robots.txt`.
  - Comprehensive OpenGraph and Twitter Card metadata.
  - ARIA-compliant dialogue states, accessible form controls, and keyboard navigation.

---

## ✦ Design System & Palette

The visual identity is anchored in natural earth pigments, mineral dyes, and unbleached parchment:

| Token | Hex | Role / Inspiration |
| :--- | :--- | :--- |
| `--paper` | `#F1EEE8` | Archival unbleached linen & light parchment |
| `--ink` | `#151311` | Carbon mineral black, crisp hairline rules, text |
| `--espresso` | `#28211D` | Deep rich walnut, tonal editorial darks |
| `--taupe` | `#B7A99D` | Raw tussar silk, neutral tailoring surfaces |
| `--terracotta` | `#8C5849` | Fired Indus Valley clay, warm earthen accents |
| `--copper` | `#B77A5B` | Tarnished zardozi metallic wire highlights |
| `--indigo` | `#263A43` | Deep fermented Sindhi vat-indigo dye |

### Typography
- **Display Serif**: *Cormorant Garamond* — confident, architectural, poetic.
- **UI / Body Sans**: *Inter* — neutral, legible grotesk engineered for digital commerce.

---

## ✦ Architecture & Project Structure

```text
pakistan-luxury-dresscode/
├── .claude/                     # Workspace configurations
├── public/                      # Static assets & campaign photography
│   └── images/                  # High-resolution editorial campaign media
├── src/
│   ├── app/                     # Next.js App Router (44 static routes)
│   │   ├── (site)/              # Core marketing & editorial views
│   │   ├── about/               # Atelier philosophy & manifesto
│   │   ├── account/             # Client portal & order history
│   │   ├── care/                # Fabric care & garment preservation
│   │   ├── cart/                # Checkout & shopping bag
│   │   ├── collections/         # Collection index & [slug] dynamic editorial
│   │   ├── contact/             # Private appointments & concierge
│   │   ├── craft/               # Heritage archive & regional [slug] dossiers
│   │   ├── journal/             # Cultural chronicles & [slug] essays
│   │   ├── product/             # Commerce [slug] product detail pages
│   │   ├── search/              # Real-time catalog search
│   │   ├── shop/                # Ready-to-wear & couture category indexes
│   │   └── wishlist/            # Curated client saved items
│   ├── components/
│   │   ├── commerce/            # CartDrawer, CatalogView, ProductDetailView
│   │   ├── editorial/           # CraftExplorer, HeroCampaign, EditorialRail
│   │   ├── layout/              # AppShell, Header, Footer, MegaMenu
│   │   ├── motion/              # IntroCurtain, SmoothScroll, RevealObserver
│   │   └── ui/                  # Button, Badge, HairlineDivider, ImageFrame
│   ├── context/                 # Commerce & UI global state providers
│   ├── data/                    # Structured catalog, craft, & journal datasets
│   └── styles/                  # CSS tokens, typography, grid, and reset
├── next.config.ts               # Next.js configuration
├── tsconfig.json                # Strict TypeScript configuration
└── vercel.json                  # Production Vercel deployment spec
```

---

## ✦ Getting Started

### Prerequisites
- **Node.js**: `v18.17.0` or higher
- **npm**, **yarn**, or **pnpm**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/baigcoder/pakistan-luxury-dresscode.git
   cd pakistan-luxury-dresscode
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or port `3001` if `3000` is occupied) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Start production server**:
   ```bash
   npm run start
   ```

---

## ✦ Deployment

### Vercel (Recommended)

This repository includes a turnkey [`vercel.json`](./vercel.json) configured with Next.js Turbopack, route optimization, and hardened HTTP response headers:

1. Import this repository directly into [Vercel](https://vercel.com/new).
2. Framework preset will automatically detect **Next.js**.
3. No environment variables required for standard catalog preview.
4. Click **Deploy**.

---

## ✦ Brand Ethos

> *“We do not replicate history; we continue its conversation through restraint, precision, and architectural balance.”*

Developed for **NAVA Atelier** © 2026. All rights reserved.
