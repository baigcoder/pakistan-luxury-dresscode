/**
 * NAVA Luxury Fashion House — Navigation & Sitemap Data
 * Source of truth: 04-SITEMAP.md & 06-COMPONENTS.md
 */

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  hasMegaMenu?: boolean;
  megaMenuData?: {
    featuredTitle: string;
    featuredImage: string;
    featuredLink: string;
    featuredCaption: string;
    columns: {
      heading: string;
      links: { label: string; href: string; badge?: string }[];
    }[];
  };
}

export const MAIN_NAV: NavItem[] = [
  {
    label: "New",
    href: "/new",
    badge: "SS26",
    hasMegaMenu: true,
    megaMenuData: {
      featuredTitle: "FORM 01 — NOOR",
      featuredImage: "/images/hero-couture.jpg",
      featuredLink: "/collections/form-01-noor",
      featuredCaption: "Spring/Summer 2026 Atelier Collection",
      columns: [
        {
          heading: "New Arrivals",
          links: [
            { label: "All New Arrivals", href: "/new" },
            { label: "Atelier Pre-Order", href: "/new?filter=preorder", badge: "Limited" },
            { label: "Runway Edits", href: "/new?filter=runway" },
            { label: "The Silk Trench Series", href: "/new?filter=trench" },
          ],
        },
        {
          heading: "Curated Edits",
          links: [
            { label: "Sculptural Tailoring", href: "/shop?edit=tailoring" },
            { label: "Natural Dye Monochromes", href: "/shop?edit=monochrome" },
            { label: "Lightweight Khaddar", href: "/shop?edit=khaddar" },
          ],
        },
      ],
    },
  },
  {
    label: "Women",
    href: "/shop/women",
    hasMegaMenu: true,
    megaMenuData: {
      featuredTitle: "THE NEW SILHOUETTE",
      featuredImage: "/images/hero-couture.jpg",
      featuredLink: "/shop/women",
      featuredCaption: "Precision-tailored suits & fluid drapery",
      columns: [
        {
          heading: "Garments",
          links: [
            { label: "All Women's Collection", href: "/shop/women" },
            { label: "Tailored Jackets & Coats", href: "/shop/women?cat=outerwear" },
            { label: "Sculptural Trousers", href: "/shop/women?cat=trousers" },
            { label: "Fluid Tunics & Kurta Forms", href: "/shop/women?cat=tunics" },
            { label: "Draped Gowns & Sets", href: "/shop/women?cat=draped" },
          ],
        },
        {
          heading: "Textiles",
          links: [
            { label: "Raw Spun Mulberry Silk", href: "/shop/women?fabric=silk" },
            { label: "Handwoven Cotton Linen", href: "/shop/women?fabric=linen" },
            { label: "Handloom Khaddar", href: "/shop/women?fabric=khaddar" },
          ],
        },
      ],
    },
  },
  {
    label: "Men",
    href: "/shop/men",
    hasMegaMenu: true,
    megaMenuData: {
      featuredTitle: "VEIL 04 — RAAT",
      featuredImage: "/images/lahore-courtyard.jpg",
      featuredLink: "/shop/men",
      featuredCaption: "Modern Sherwani Cuts & Architectural Outerwear",
      columns: [
        {
          heading: "Garments",
          links: [
            { label: "All Men's Collection", href: "/shop/men" },
            { label: "Contemporary Sherwanis", href: "/shop/men?cat=sherwani" },
            { label: "Architectural Bandgala Jackets", href: "/shop/men?cat=bandgala" },
            { label: "Minimalist Kurtas", href: "/shop/men?cat=kurta" },
            { label: "Pleated Trousers", href: "/shop/men?cat=trousers" },
          ],
        },
        {
          heading: "Bespoke",
          links: [
            { label: "Atelier Made-to-Measure", href: "/contact?type=bespoke" },
            { label: "Heritage Wool Overcoats", href: "/shop/men?cat=coats" },
            { label: "Hand-Loomed Shawls", href: "/shop/men?cat=shawls" },
          ],
        },
      ],
    },
  },
  {
    label: "Couture",
    href: "/shop/couture",
    badge: "Atelier",
    hasMegaMenu: true,
    megaMenuData: {
      featuredTitle: "BRIDAL & CEREMONIAL",
      featuredImage: "/images/hero-couture.jpg",
      featuredLink: "/shop/couture",
      featuredCaption: "Months of hand-needlework by master craftsmen",
      columns: [
        {
          heading: "Couture Edits",
          links: [
            { label: "Bridal Archive", href: "/shop/couture?cat=bridal" },
            { label: "Ceremonial Suiting", href: "/shop/couture?cat=ceremonial" },
            { label: "High Zardozi Needlework", href: "/shop/couture?cat=zardozi" },
          ],
        },
        {
          heading: "Private Atelier",
          links: [
            { label: "Book Atelier Consultation", href: "/contact?type=consultation" },
            { label: "Custom Embroidery Archive", href: "/craft" },
            { label: "Couture Process", href: "/journal/couture-discipline" },
          ],
        },
      ],
    },
  },
  {
    label: "Collections",
    href: "/collections",
    hasMegaMenu: true,
    megaMenuData: {
      featuredTitle: "THE DESIGN ARCHIVE",
      featuredImage: "/images/lahore-courtyard.jpg",
      featuredLink: "/collections",
      featuredCaption: "Historical and seasonal architectural volumes",
      columns: [
        {
          heading: "Current & Upcoming",
          links: [
            { label: "FORM 01 — NOOR (SS26)", href: "/collections/form-01-noor" },
            { label: "EDIT 02 — MITTI (Resort)", href: "/collections/edit-02-mitti" },
            { label: "CIPHER 03 — AJRAK (Craft Capsule)", href: "/collections/cipher-03-ajrak" },
            { label: "VEIL 04 — RAAT (AW26)", href: "/collections/veil-04-raat" },
          ],
        },
        {
          heading: "Editorial Archive",
          links: [
            { label: "All Collections Index", href: "/collections" },
            { label: "Lookbook Archive", href: "/collections?view=lookbook" },
          ],
        },
      ],
    },
  },
  {
    label: "Craft",
    href: "/craft",
    badge: "Heritage",
    hasMegaMenu: true,
    megaMenuData: {
      featuredTitle: "SINDHI AJRAK BLOCK PRINT",
      featuredImage: "/images/macro-ajrak.jpg",
      featuredLink: "/craft/sindhi-ajrak",
      featuredCaption: "Natural indigo & madder root vat dyeing in Sindh",
      columns: [
        {
          heading: "Regional Registers",
          links: [
            { label: "Sindh: Ajrak & Natural Dyeing", href: "/craft/sindhi-ajrak" },
            { label: "Punjab: Zardozi & Architectural Line", href: "/craft/punjab-zardozi" },
            { label: "Swat: High-Altitude Wool Weaving", href: "/craft/swat-weaving" },
            { label: "KPK: Charsadda Khaddar Craft", href: "/craft/khaddar" },
          ],
        },
        {
          heading: "The National Register",
          links: [
            { label: "Intangible Cultural Heritage Index", href: "/craft" },
            { label: "Artisan Ateliers & Fair Craft", href: "/about#atelier" },
            { label: "Material Provenance", href: "/craft#materials" },
          ],
        },
      ],
    },
  },
  {
    label: "Journal",
    href: "/journal",
    hasMegaMenu: false,
  },
];

export const FOOTER_SECTIONS = [
  {
    title: "Client Care",
    links: [
      { label: "Bespoke Atelier Appointments", href: "/contact?type=bespoke" },
      { label: "Worldwide Shipping & Duties", href: "/shipping" },
      { label: "Architectural Size Guide", href: "/size-guide" },
      { label: "Returns & Exchanges", href: "/returns" },
      { label: "Garment Care & Longevity", href: "/care" },
    ],
  },
  {
    title: "The House",
    links: [
      { label: "House Manifesto & Philosophy", href: "/about" },
      { label: "Regional Ateliers & Masters", href: "/about#atelier" },
      { label: "Craft Provenance Register", href: "/craft" },
      { label: "Sell Before We Sew Initiative", href: "/about#preorder" },
      { label: "Press & Editorial Inquiries", href: "/contact?type=press" },
    ],
  },
  {
    title: "Legal & Ethics",
    links: [
      { label: "Fair Artisan Wages Commitment", href: "/about#ethics" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Atelier Service", href: "/terms" },
      { label: "Accessibility Statement", href: "/accessibility" },
    ],
  },
];

export const QUICK_SEARCH_CHIPS = [
  "Raw Silk Trench",
  "Sindhi Ajrak",
  "Sculptural Suit",
  "Charcoal Sherwani",
  "Hand-Spun Khaddar",
  "Bridal Archive",
  "Zardozi Needlework",
];
