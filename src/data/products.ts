/**
 * NAVA — Products Dataset & Catalog Archive
 * Source of truth: 10-CONTENT.md & 07-PAGES.md
 */

export interface ProductGalleryItem {
  url: string;
  alt: string;
  caption?: string;
  aspect?: string;
}

export interface ProductColorOption {
  name: string;
  hex: string;
  image?: string;
  gallery?: ProductGalleryItem[];
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  collection: string;
  collectionSlug: string;
  category: "women" | "men" | "couture" | "accessories";
  price: number;
  formattedPrice: string;
  currency: "PKR" | "USD" | "GBP" | "EUR";
  image: string;
  aspect: string;
  gallery: ProductGalleryItem[];
  fabric: string;
  craftProvenance: string;
  craftRegion: string;
  silhouette: string;
  sizes: string[];
  colors: ProductColorOption[];
  badge?: string;
  description: string;
  longDescription: string;
  craftDetails: string;
  fitNotes: string;
  careInstructions: string[];
  madeToOrder: boolean;
  leadTime: string;
  editionLimit?: number;
  relatedSlugs: string[];
}

export const PRODUCTS: ProductItem[] = [
  {
    id: "prod-01",
    slug: "sculptural-raw-silk-trench",
    name: "Sculptural Raw Silk Trench",
    collection: "FORM 01 — NOOR",
    collectionSlug: "form-01-noor",
    category: "women",
    price: 185000,
    formattedPrice: "Rs. 185,000",
    currency: "PKR",
    image: "/images/hero-couture.jpg",
    aspect: "4:5",
    gallery: [
      {
        url: "/images/hero-couture.jpg",
        alt: "Full silhouette of the Sculptural Raw Silk Trench in Unbleached Ivory",
        caption: "Unconstructed raw-silk trench, belted at the waist",
      },
      {
        url: "/images/women-ivory-portrait.jpg",
        alt: "Three-quarter view of the trench collar and shoulder in Unbleached Ivory",
        caption: "Soft shoulder and a notched collar in hand-spun raw silk",
      },
      {
        url: "/images/women-ivory-lapel.jpg",
        alt: "Close view of the geometric zardozi linework on the ivory lapel",
        caption: "Linear geometric zardozi needlework along the collar",
      },
    ],
    fabric: "100% Hand-Spun Raw Mulberry Silk & Pure Cotton Lining",
    craftProvenance: "Linear geometric zardozi collar needlework",
    craftRegion: "Lahore Atelier, Punjab",
    silhouette: "Architectural structured lapel & relaxed flared hem",
    sizes: ["Size 01 (UK 6–8)", "Size 02 (UK 10–12)", "Size 03 (UK 14–16)", "Bespoke Made-to-Measure"],
    colors: [
      {
        name: "Unbleached Ivory",
        hex: "#F1EEE8",
        image: "/images/hero-couture.jpg",
        gallery: [
          {
            url: "/images/hero-couture.jpg",
            alt: "Full silhouette of the Sculptural Raw Silk Trench in Unbleached Ivory",
            caption: "Unconstructed raw-silk trench, belted at the waist",
          },
          {
            url: "/images/women-ivory-portrait.jpg",
            alt: "Three-quarter view of the trench collar and shoulder in Unbleached Ivory",
            caption: "Soft shoulder and a notched collar in hand-spun raw silk",
          },
          {
            url: "/images/women-ivory-lapel.jpg",
            alt: "Close view of the geometric zardozi linework on the ivory lapel",
            caption: "Linear geometric zardozi needlework along the collar",
          },
        ],
      },
      {
        name: "Deep Charcoal",
        hex: "#28211D",
        image: "/images/trench-charcoal.jpg",
        gallery: [
          {
            url: "/images/trench-charcoal.jpg",
            alt: "Full silhouette of the Sculptural Raw Silk Trench in Deep Charcoal",
            caption: "Belted trench in Deep Charcoal with a brass buckle",
          },
          {
            url: "/images/women-charcoal-portrait.jpg",
            alt: "Three-quarter view of the trench collar and shoulder in Deep Charcoal",
            caption: "Embroidered notched collar over a structured shoulder",
          },
          {
            url: "/images/women-charcoal-lapel.jpg",
            alt: "Close view of the geometric embroidery on the Deep Charcoal lapel",
            caption: "Ivory geometric needlework traced along the charcoal lapel",
          },
        ],
      },
    ],
    badge: "EDITION 01 OF 25",
    description: "An architectural statement coat combining sharp European tailoring with subtle royal needlework.",
    longDescription:
      "Crafted from raw mulberry silk spun on traditional Punjab handlooms, this trench embodies the dialogue between European tailoring discipline and ancient South Asian textile weight. The lapels feature quiet, unostentatious metallic zardozi geometry hand-stitched by generational court artisans.",
    craftDetails:
      "Every piece requires 48 hours of handloom weaving and 34 hours of hand embroidery. Natural unbleached silk fibers retain their tactile organic texture, producing subtle surface slubs unique to each garment.",
    fitNotes:
      "Architectural tailored shoulder with a soft drop through the chest and waist. Designed to drape with structural grace. Model is 179cm / 5'10.5\" wearing Size 02.",
    careInstructions: [
      "Specialist dry clean only",
      "Store on wide architectural wooden hanger",
      "Gentle steam from reverse side only",
      "Do not spray perfume directly onto metallic zardozi threads",
    ],
    madeToOrder: true,
    leadTime: "3 to 4 weeks atelier production",
    editionLimit: 25,
    relatedSlugs: ["lahore-courtyard-pleated-ensemble", "sindhi-vat-indigo-tunic"],
  },
  {
    id: "prod-02",
    slug: "charcoal-architectural-sherwani",
    name: "Architectural Charcoal Sherwani",
    collection: "VEIL 04 — RAAT",
    collectionSlug: "veil-04-raat",
    category: "men",
    price: 240000,
    formattedPrice: "Rs. 240,000",
    currency: "PKR",
    image: "/images/hero-men.jpg",
    aspect: "4:5",
    gallery: [
      {
        url: "/images/hero-men.jpg",
        alt: "Full silhouette of Architectural Charcoal Sherwani",
        caption: "High mandarin stand collar and structured chest silhouette",
      },
      {
        url: "/images/men-charcoal-portrait.jpg",
        alt: "Three-quarter view of the Architectural Charcoal Sherwani's mandarin collar and shoulder line",
        caption: "High mandarin stand collar over a sharply cut shoulder",
      },
      {
        url: "/images/men-charcoal-placket.jpg",
        alt: "Close view of the tone-on-tone geometric embroidery down the charcoal placket",
        caption: "Tone-on-tone matte charcoal placket hand-needlework",
      },
    ],
    fabric: "Highland Swat Raw Wool & Raw Silk Lining",
    craftProvenance: "Minimalist tone-on-tone placket hand-embroidery",
    craftRegion: "Swat & Lahore Bespoke Studio",
    silhouette: "High mandarin stand collar, structured chest, concealed horn buttons",
    sizes: ["Chest 38 (Small)", "Chest 40 (Medium)", "Chest 42 (Large)", "Bespoke Consultation"],
    colors: [
      {
        name: "Midnight Charcoal",
        hex: "#28211D",
        image: "/images/hero-men.jpg",
        gallery: [
          {
            url: "/images/hero-men.jpg",
            alt: "Full silhouette of Architectural Charcoal Sherwani in Midnight Charcoal",
            caption: "High mandarin stand collar and structured chest silhouette in Midnight Charcoal",
          },
          {
            url: "/images/men-charcoal-portrait.jpg",
            alt: "Three-quarter view of the sherwani's mandarin collar and shoulder line in Midnight Charcoal",
            caption: "High mandarin stand collar over a sharply cut shoulder",
          },
          {
            url: "/images/men-charcoal-placket.jpg",
            alt: "Close view of the tone-on-tone geometric embroidery down the Midnight Charcoal placket",
            caption: "Tone-on-tone matte charcoal placket hand-needlework",
          },
        ],
      },
      {
        name: "Deep Ink",
        hex: "#151311",
        image: "/images/sherwani-deep-ink.jpg",
        gallery: [
          {
            url: "/images/sherwani-deep-ink.jpg",
            alt: "Full silhouette of Architectural Sherwani in Deep Ink",
            caption: "Razor-sharp tailored bandgala silhouette in Deep Ink Swat wool",
          },
          {
            url: "/images/men-ink-portrait.jpg",
            alt: "Three-quarter view of the sherwani's embroidered collar in Deep Ink, beneath a stone arch",
            caption: "Embroidered stand collar in Deep Ink Swat wool",
          },
          {
            url: "/images/men-ink-placket.jpg",
            alt: "Close view of the tone-on-tone geometric embroidery down the Deep Ink placket",
            caption: "Deep jet-black tone-on-tone geometric placket embroidery",
          },
        ],
      },
    ],
    badge: "BESPOKE ONLY",
    description: "Reinterpreting the ceremonial sherwani into a modern minimalist architectural coat.",
    longDescription:
      "A departure from heavy ceremonial ornament, the Architectural Sherwani focuses on sculptural balance, razor-cut canvas chest construction, and Swat highland raw wool. The front placket contains restrained tone-on-tone hand-needlework visible only upon close inspection.",
    craftDetails:
      "Handcrafted using bespoke floating canvas construction that molds to the wearer's physique over time. Sourced directly from Swat Valley wool shepherds.",
    fitNotes:
      "Sharp tailored fit through the chest and waist with a high rear vent for ease of motion. Model is 188cm / 6'2\" wearing size Chest 40.",
    careInstructions: [
      "Specialist dry clean only",
      "Brush gently with horsehair brush after wearing",
      "Keep stored in breathable cotton garment bag",
    ],
    madeToOrder: true,
    leadTime: "4 to 5 weeks bespoke atelier cut",
    editionLimit: 20,
    relatedSlugs: ["sculptural-raw-silk-trench", "swat-pashmina-shawl"],
  },
  {
    id: "prod-03",
    slug: "sindhi-vat-indigo-tunic",
    name: "Vat Indigo Ajrak Tunic",
    collection: "CIPHER 03 — AJRAK",
    collectionSlug: "cipher-03-ajrak",
    category: "women",
    price: 78000,
    formattedPrice: "Rs. 78,000",
    currency: "PKR",
    image: "/images/women-indigo-look.jpg",
    aspect: "1:1",
    gallery: [
      {
        url: "/images/women-indigo-look.jpg",
        alt: "The Vat Indigo Ajrak piece worn over a bias slip on a stone terrace at golden hour",
        caption: "Relaxed vat-indigo layer over a bias slip",
      },
      {
        url: "/images/macro-ajrak.jpg",
        alt: "Extreme macro of the Ajrak block print in natural indigo and madder",
        caption: "Natural indigo and madder root block print on organic cotton",
      },
      {
        url: "/images/hero-campaign-dresscode.jpg",
        alt: "The piece in the SS26 campaign, beside ivory and rust looks",
        caption: "As shot for the SS26 campaign",
      },
    ],
    fabric: "100% Organic Sindhi Long-Staple Cotton",
    craftProvenance: "14-stage block print with natural indigo and madder root",
    craftRegion: "Bhit Shah Atelier, Sindh",
    silhouette: "Relaxed fluid tunic with geometric border cuffs",
    sizes: ["Size 01 (S)", "Size 02 (M)", "Size 03 (L)"],
    colors: [
      {
        name: "Vat Indigo",
        hex: "#263A43",
        image: "/images/women-indigo-look.jpg",
        gallery: [
          {
            url: "/images/women-indigo-look.jpg",
            alt: "The Vat Indigo Ajrak piece worn over a bias slip on a stone terrace at golden hour",
            caption: "Relaxed vat-indigo layer over a bias slip",
          },
          {
            url: "/images/macro-ajrak.jpg",
            alt: "Extreme macro of the Ajrak block print in natural indigo and madder",
            caption: "Natural indigo and madder root block print on organic cotton",
          },
          {
            url: "/images/hero-campaign-dresscode.jpg",
            alt: "The piece in the SS26 campaign, beside ivory and rust looks",
            caption: "As shot for the SS26 campaign",
          },
        ],
      },
      {
        name: "Madder Terracotta",
        hex: "#8C5849",
        image: "/images/women-madder-look.jpg",
        gallery: [
          {
            url: "/images/women-madder-look.jpg",
            alt: "The Ajrak piece in Madder Terracotta, worn as a long coat over a matching suit",
            caption: "Warm madder-root terracotta, cut long and easy",
          },
          {
            url: "/images/macro-ajrak.jpg",
            alt: "Macro detail of the hand-carved Ajrak woodblock relief",
            caption: "Hand-carved acacia woodblock relief detail",
          },
          {
            url: "/images/hero-campaign-dresscode.jpg",
            alt: "The piece in the SS26 campaign, beside ivory and indigo looks",
            caption: "As shot for the SS26 campaign",
          },
        ],
      },
    ],
    badge: "NATURAL DYES",
    description: "Authentic Sindhi block printing disciplined into a relaxed, sculptural everyday luxury tunic.",
    longDescription:
      "A quiet masterpiece of ancient dye chemistry. Made in partnership with master artisan families in Bhit Shah, Sindh, using woodblocks hand-carved from acacia wood. Each textile undergoes 14 distinct washes in local riverbeds, natural indigo baths, and sun-bleaching over 21 days.",
    craftDetails:
      "Registered with Pakistan's National Intangible Cultural Heritage register. Natural dyes produce subtle color evolutions over decades, aging with exceptional depth.",
    fitNotes:
      "Relaxed architectural tunic silhouette with deep side slits. Designed for effortless summer drape.",
    careInstructions: [
      "Hand wash cold separately using mild organic soap",
      "Do not wring; dry flat in shade to preserve natural vegetable dyes",
      "Warm iron on reverse side",
    ],
    madeToOrder: false,
    leadTime: "In Stock & Immediate Dispatch",
    relatedSlugs: ["lahore-courtyard-pleated-ensemble", "sculptural-raw-silk-trench"],
  },
  {
    id: "prod-04",
    slug: "lahore-courtyard-pleated-ensemble",
    name: "Pleated Heritage Trouser Suit",
    collection: "EDIT 02 — MITTI",
    collectionSlug: "edit-02-mitti",
    category: "women",
    price: 145000,
    formattedPrice: "Rs. 145,000",
    currency: "PKR",
    image: "/images/lahore-courtyard.jpg",
    aspect: "3:2",
    gallery: [
      {
        url: "/images/lahore-courtyard.jpg",
        alt: "Full view of the Pleated Heritage Trouser Suit in a Lahore courtyard",
        caption: "Fluid knife-pleated drape in raw sandstone linen",
      },
      {
        url: "/images/women-pleated-bodice.jpg",
        alt: "Close view of the hand-embroidered bodice and bishop sleeves",
        caption: "Hand-embroidered bodice over soft bishop sleeves",
      },
      {
        url: "/images/women-pleated-hem.jpg",
        alt: "The pleated hem in motion across courtyard stone",
        caption: "Hand-stitched deep knife pleats, caught mid-stride",
      },
    ],
    fabric: "Raw Textured Linen & Fine Organic Cotton",
    craftProvenance: "Hand-stitched knife pleats & horn buttons",
    craftRegion: "Lahore Atelier",
    silhouette: "High-waist wide-leg trouser with unconstructed jacket",
    sizes: ["Size 01 (UK 8)", "Size 02 (UK 10)", "Size 03 (UK 12)", "Size 04 (UK 14)"],
    colors: [
      {
        name: "Sandstone Linen",
        hex: "#B7A99D",
        image: "/images/lahore-courtyard.jpg",
        gallery: [
          {
            url: "/images/lahore-courtyard.jpg",
            alt: "Full view of the Pleated Heritage Trouser Suit in a Lahore courtyard",
            caption: "Fluid knife-pleated drape in raw sandstone linen",
          },
          {
            url: "/images/women-pleated-bodice.jpg",
            alt: "Close view of the hand-embroidered bodice and bishop sleeves",
            caption: "Hand-embroidered bodice over soft bishop sleeves",
          },
          {
            url: "/images/women-pleated-hem.jpg",
            alt: "The pleated hem in motion across courtyard stone",
            caption: "Hand-stitched deep knife pleats, caught mid-stride",
          },
        ],
      },
    ],
    badge: "SS26 PRE-ORDER",
    description: "Tailored for high-summer ease, inspired by the historical courtyards of Lahore.",
    longDescription:
      "A fluid two-piece ensemble celebrating unconstructed architectural tailoring. The trousers feature deep knife pleats that release into wide, sweeping legs, paired with a single-button unstructured blazer crafted from breathable raw linen.",
    craftDetails:
      "Tailored with bespoke hand-sewn buttonholes and natural horn buttons. Crafted by single master tailors from start to finish.",
    fitNotes:
      "High-rise trouser sits at natural waistline with generous hem allowance for tailored length adjustment.",
    careInstructions: [
      "Dry clean or gentle hand wash in lukewarm water",
      "Hang dry in shade",
      "Steam iron for crisp pleats",
    ],
    madeToOrder: true,
    leadTime: "2 to 3 weeks atelier production",
    editionLimit: 30,
    relatedSlugs: ["sculptural-raw-silk-trench", "sindhi-vat-indigo-tunic"],
  },
  {
    id: "prod-05",
    slug: "artisan-needlework-cape",
    name: "Royal Zardozi Atelier Cape",
    collection: "LINE 05 — KASHT",
    collectionSlug: "line-05-atelier",
    category: "couture",
    price: 320000,
    formattedPrice: "Rs. 320,000",
    currency: "PKR",
    image: "/images/craft-atelier.jpg",
    aspect: "4:3",
    gallery: [
      {
        url: "/images/craft-atelier.jpg",
        alt: "Artisan needlework in progress",
        caption: "Master artisan creating intricate gold and copper threadwork",
      },
      {
        url: "/images/hero-couture.jpg",
        alt: "Editorial model wearing cape",
        caption: "Dramatic ceremonial drape over minimalist evening gown",
      },
    ],
    fabric: "Deep Crimson Hand-Woven Silk Velvet",
    craftProvenance: "Gold thread metallic embroidery by 4 master needlewomen over 320 hours",
    craftRegion: "Central Punjab Craft Cluster",
    silhouette: "Draped ceremonial evening cape with high stand collar",
    sizes: ["One Size (Custom Length Option)"],
    colors: [
      {
        name: "Royal Madder Crimson",
        hex: "#8C5849",
        image: "/images/craft-atelier.jpg",
        gallery: [
          {
            url: "/images/craft-atelier.jpg",
            alt: "Royal Zardozi Cape in Royal Madder Crimson",
            caption: "Master artisan creating intricate gold and copper threadwork",
          },
          {
            url: "/images/hero-couture.jpg",
            alt: "Editorial model wearing cape",
            caption: "Dramatic ceremonial drape over minimalist evening gown",
          },
        ],
      },
      {
        name: "Obsidian Velvet",
        hex: "#151311",
        image: "/images/trench-charcoal.jpg",
        gallery: [
          {
            url: "/images/trench-charcoal.jpg",
            alt: "Royal Zardozi Cape in Obsidian Velvet",
            caption: "Obsidian silk velvet with coiled gold and copper wire embroidery",
          },
          {
            url: "/images/craft-atelier.jpg",
            alt: "Atelier detail",
            caption: "Gold threadwork in progress at Punjab craft cluster",
          },
        ],
      },
    ],
    badge: "MUSEUM ATELIER",
    description: "A testament to centuries of court embroidery, each piece is individually signed by the artisan.",
    longDescription:
      "Created for high ceremonial occasions and museum archives. 4 hereditary master needlewomen spent 320 consecutive hours hand-embroidering architectural leaf and floral motifs using real gold and copper coiled zardozi wire onto hand-spun silk velvet.",
    craftDetails:
      "Accompanied by a certificate of cultural provenance and master artisan provenance register. Limited strictly to 10 numbered pieces worldwide.",
    fitNotes:
      "Sweeping architectural cape designed to flatter all heights. Features internal silk ties for secure placement.",
    careInstructions: [
      "Specialist archival textile preservation clean only",
      "Keep wrapped in unbleached acid-free muslin cloth",
    ],
    madeToOrder: true,
    leadTime: "6 to 8 weeks private commission",
    editionLimit: 10,
    relatedSlugs: ["sculptural-raw-silk-trench", "charcoal-architectural-sherwani"],
  },
  {
    id: "prod-06",
    slug: "swat-pashmina-shawl",
    name: "Hand-Loomed Swat Pashmina Shawl",
    collection: "VEIL 04 — RAAT",
    collectionSlug: "veil-04-raat",
    category: "accessories",
    price: 65000,
    formattedPrice: "Rs. 65,000",
    currency: "PKR",
    image: "/images/macro-ajrak.jpg",
    aspect: "1:1",
    gallery: [
      {
        url: "/images/macro-ajrak.jpg",
        alt: "Textile weave of pashmina",
        caption: "Ultra-fine highland pashmina twill weave",
      },
    ],
    fabric: "100% High-Altitude Swat Cashmere Pashmina",
    craftProvenance: "Traditional wooden pit-loom twill weave with raw selvedge",
    craftRegion: "Swat Valley, Khyber Pakhtunkhwa",
    silhouette: "Generous 100cm x 220cm wrap with natural feathered fringe",
    sizes: ["Standard 100cm x 220cm"],
    colors: [
      {
        name: "Raw Charcoal",
        hex: "#28211D",
        image: "/images/macro-ajrak.jpg",
        gallery: [
          {
            url: "/images/macro-ajrak.jpg",
            alt: "Hand-Loomed Swat Pashmina in Raw Charcoal",
            caption: "Ultra-fine highland pashmina twill weave in raw charcoal",
          },
        ],
      },
      {
        name: "Natural Taupe",
        hex: "#B7A99D",
        image: "/images/hero-editorial-dresscode.jpg",
        gallery: [
          {
            url: "/images/hero-editorial-dresscode.jpg",
            alt: "Hand-Loomed Swat Pashmina in Natural Taupe",
            caption: "High-altitude undyed natural taupe cashmere cashmere",
          },
        ],
      },
    ],
    badge: "HERITAGE ACCESSORY",
    description: "Cloud-soft hand-spun highland pashmina, loomed in the northern valleys of Pakistan.",
    longDescription:
      "Woven on historical pit-looms in the Swat Valley, this generous shawl uses cashmere harvested ethically from mountain goats during seasonal molting. Finished with untouched natural selvedge edges.",
    craftDetails:
      "Spun so fine that a full 2-meter shawl weighs less than 180 grams while providing extraordinary insulation.",
    fitNotes: "Generous wrap dimension suitable for both men's sherwani draping and women's evening outerwear.",
    careInstructions: [
      "Professional dry clean or hand wash cold in specialized wool soap",
      "Dry flat away from sunlight",
    ],
    madeToOrder: false,
    leadTime: "In Stock & Immediate Dispatch",
    relatedSlugs: ["charcoal-architectural-sherwani", "sculptural-raw-silk-trench"],
  },
];

export const SELECTED_PRODUCTS = PRODUCTS.slice(0, 5);
