/**
 * NAVA — Collections Dataset
 * Source of truth: 10-CONTENT.md
 */

export interface CollectionItem {
  id: string;
  slug: string;
  title: string;
  code: string;
  season: string;
  description: string;
  materialStory: string;
  provenance: string;
  image: string;
  aspect: string;
  pieceCount: number;
  status: "Available" | "Pre-Order" | "Archive";
}

export const COLLECTIONS: CollectionItem[] = [
  {
    id: "form-01",
    slug: "form-01-noor",
    title: "NOOR",
    code: "FORM 01",
    season: "Spring / Summer 2026",
    description: "Sculptural ivory tailoring crafted from hand-spun raw silk and unbleached cotton twill.",
    materialStory: "Raw mulberry silk, hand-embroidered minimalist linear needlework.",
    provenance: "Punjab Atelier & Lahore Master Tailoring",
    image: "/images/hero-couture.jpg",
    aspect: "4:5",
    pieceCount: 18,
    status: "Available",
  },
  {
    id: "cipher-03",
    slug: "cipher-03-ajrak",
    title: "AJRAK",
    code: "CIPHER 03",
    season: "Craft Capsule 2026",
    description: "Ancient mathematical block printing using natural indigo and madder root vat dyes.",
    materialStory: "Organic Sindhi long-staple cotton, natural mineral mordants.",
    provenance: "Sindh Intangible Cultural Heritage (ICH Reg. Blk-049)",
    image: "/images/macro-ajrak.jpg",
    aspect: "1:1",
    pieceCount: 12,
    status: "Pre-Order",
  },
  {
    id: "veil-04",
    slug: "veil-04-raat",
    title: "RAAT",
    code: "VEIL 04",
    season: "Autumn / Winter 2026",
    description: "Monochrome architectural sherwani cuts, bandgala jackets, and midnight wool outerwear.",
    materialStory: "Highland Swat raw wool, hand-drawn charcoal metallic threads.",
    provenance: "Swat Valley & Lahore Bespoke Atelier",
    image: "/images/hero-men.jpg",
    aspect: "4:5",
    pieceCount: 16,
    status: "Pre-Order",
  },
  {
    id: "edit-02",
    slug: "edit-02-mitti",
    title: "MITTI",
    code: "EDIT 02",
    season: "Resort 2026",
    description: "Earthen terracotta hues, relaxed tunics, and fluid draping rooted in alluvial textures.",
    materialStory: "Natural unbleached khaddar, handloom woven cotton.",
    provenance: "Khyber Pakhtunkhwa & Sindh Craft Clusters",
    image: "/images/lahore-courtyard.jpg",
    aspect: "3:2",
    pieceCount: 14,
    status: "Available",
  },
  {
    id: "line-05",
    slug: "line-05-atelier",
    title: "KASHT",
    code: "LINE 05",
    season: "Artisan Series",
    description: "Documentary limited-run embroideries crafted by hereditary female master artisans.",
    materialStory: "Zardozi metallic thread, archival silk velvet.",
    provenance: "Central Punjab Intangible Craft Register",
    image: "/images/cape-zardozi-crimson.jpg",
    aspect: "4:3",
    pieceCount: 8,
    status: "Archive",
  },
];
