/**
 * NAVA — Brand Configuration & Intangible Cultural Heritage Provenance
 * Single source of truth for brand name, positioning, and craft citations.
 * As required by 02-BRAND.md: The codebase must make the brand name a single configuration value.
 */

export const BRAND = {
  name: "NAVA",
  legalName: "NAVA Atelier Ltd.",
  established: "2026",
  origin: "Lahore & Karachi, Pakistan",
  tagline: "CRAFT, REFINED.",
  subTagline: "The New Pakistani Silhouette",
  statement:
    "A contemporary Pakistani luxury fashion house translating regional craft, tailoring, and textile knowledge into modern sculptural silhouettes.",
  attributes: [
    "quiet",
    "precise",
    "tactile",
    "sophisticated",
    "contemporary",
    "culturally grounded",
    "globally legible",
  ],
  culturalProvenance: {
    officialSource:
      "National Heritage and Culture Division — National Register of the Intangible Cultural Heritage of Pakistan",
    sourceUrl:
      "https://heritage.pakistan.gov.pk/SiteImage/Misc/files/ICH%20Pakistan%20Low.pdf",
    keyTraditions: [
      {
        name: "Sindhi Ajrak",
        region: "Sindh",
        technique: "Hand-carved wooden block printing with natural indigo and madder root dyes",
        heritageNote: "Documented in Pakistan's National ICH Register as an ancient mathematical and natural dyeing discipline.",
      },
      {
        name: "Zardozi & Aari Needlework",
        region: "Punjab & Khyber Pakhtunkhwa",
        technique: "Architectural metallic thread and fine hook embroidery",
        heritageNote: "Historical royal atelier craft adapted into contemporary minimalist line forms.",
      },
      {
        name: "Pashmina & Wool Weaving",
        region: "Gilgit-Baltistan & Swat Valley",
        technique: "Hand-spun highland raw wool and twill tapestry weaving",
        heritageNote: "Centuries-old high-altitude textile insulation translated into tailored outerwear.",
      },
    ],
  },
  contact: {
    atelierAddress: "Gulberg III, Lahore / Clifton Block 4, Karachi",
    email: "concierge@nava-atelier.com",
    telephone: "+92 42 3578 0000",
  },
  /** Single source for every address shown on the site — edit real details here */
  locations: [
    {
      city: "Lahore Salon & Atelier",
      address: "Gulberg III",
      area: "Lahore, Pakistan",
      phone: "+92 42 3578 0000",
      email: "concierge@nava-atelier.com",
      hours: "Tuesday – Sunday, 11:00 AM – 7:00 PM (By Private Appointment)",
    },
    {
      city: "Karachi Studio",
      address: "Clifton Block 4",
      area: "Karachi, Pakistan",
      phone: "+92 42 3578 0000",
      email: "concierge@nava-atelier.com",
      hours: "By private appointment",
    },
  ],
  currency: {
    default: "PKR",
    supported: ["PKR", "USD", "GBP", "EUR"],
    symbol: "Rs. ",
  },
} as const;
