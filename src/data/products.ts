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
    id: "prod-suit-01",
    slug: "obsidian-bandgala-architectural-suit",
    name: "Obsidian Bandgala Architectural Suit",
    collection: "ATELIER SUITED — FORM 02",
    collectionSlug: "atelier-suited",
    category: "men",
    price: 265000,
    formattedPrice: "Rs. 265,000",
    currency: "PKR",
    image: "/images/men-architectural-suit.jpg",
    aspect: "3:4",
    gallery: [
      {
        url: "/images/men-architectural-suit.jpg",
        alt: "Obsidian Bandgala Architectural Suit in handloom highland wool with silk facing",
        caption: "High-mandarin bandgala jacket with bespoke horn hardware and hand-stitched placket",
      },
      {
        url: "/images/hero-couture-campaign-2026.jpg",
        alt: "Obsidian architectural suit styled under historic Lahore colonnades",
        caption: "SS26 runway edition paired with tailored raw silk trousers",
      },
      {
        url: "/images/atelier-bespoke-tailoring.jpg",
        alt: "Internal canvas and tailor's basting stitch on the workbench",
        caption: "Natural floating horsehair canvas basted by hand in the Lahore atelier",
      },
    ],
    fabric: "100% Handloom Highland Raw Wool with Pure Raw Silk Facing",
    craftProvenance: "Bespoke single-needle tailoring & hand-rolled horn hardware",
    craftRegion: "Lahore Atelier, Punjab",
    silhouette: "Architectural structured bandgala with unconstructed shoulder drape",
    sizes: ["UK 38 / Small", "UK 40 / Medium", "UK 42 / Large", "UK 44 / XL", "Bespoke Made-to-Measure"],
    colors: [
      {
        name: "Obsidian Charcoal",
        hex: "#1A1A1A",
        image: "/images/men-architectural-suit.jpg",
        gallery: [
          {
            url: "/images/men-architectural-suit.jpg",
            alt: "Obsidian Bandgala Architectural Suit",
            caption: "High-mandarin bandgala jacket with silk facing",
          },
        ],
      },
    ],
    badge: "NEW SUITED",
    description: "An architectural obsidian wool bandgala suit cut with sculptural restraint, hand-finished placket, and matte horn buttons.",
    longDescription: "Engineered as the new Pakistani formal standard, the Obsidian Bandgala combines indigenous highland wool with an unconstructed, floating canvas shoulder. Designed by systems architect Hassan Baig, each suit is drafted to the millimeter and hand-finished by master tailors in our Lahore atelier.",
    craftDetails: "Hand-basted canvas chest piece, hand-turned silk placket facing, horn button fasteners, and blind-stitched hemline.",
    fitNotes: "Structured yet unpadded across the shoulder. Allows natural kinetic movement. Model is 185cm wearing UK 40.",
    careInstructions: [
      "Specialist dry clean only",
      "Store on contoured cedar hanger in provided breathable canvas garment bag",
      "Steam gently; do not press iron directly against raw wool surface",
    ],
    madeToOrder: true,
    leadTime: "3–4 Weeks Bespoke Tailoring",
    editionLimit: 25,
    relatedSlugs: ["ivory-zardozi-raw-silk-pant-suit", "midnight-emerald-gala-suit", "sculptural-raw-silk-trench"],
  },
  {
    id: "prod-suit-02",
    slug: "ivory-zardozi-raw-silk-pant-suit",
    name: "Ivory Zardozi Raw Silk Pant Suit",
    collection: "ATELIER SUITED — FORM 02",
    collectionSlug: "atelier-suited",
    category: "women",
    price: 295000,
    formattedPrice: "Rs. 295,000",
    currency: "PKR",
    image: "/images/women-couture-suit.jpg",
    aspect: "3:4",
    gallery: [
      {
        url: "/images/women-couture-suit.jpg",
        alt: "Ivory Zardozi Raw Silk Pant Suit with double-breasted jacket and wide silk trousers",
        caption: "Double-breasted raw silk tailored blazer with hand-couched geometric gold zardozi peak lapels",
      },
      {
        url: "/images/hero-couture-campaign-2026.jpg",
        alt: "Ivory suit styled with leather belt in historic courtyard",
        caption: "SS26 Campaign presentation framed by antique sandstone arches",
      },
      {
        url: "/images/women-ivory-lapel.jpg",
        alt: "Macro photography of geometric gold zardozi embroidery",
        caption: "Over 45 hours of meticulous geometric needlework by Punjab master craftswomen",
      },
    ],
    fabric: "100% Hand-Spun Raw Mulberry Silk & Pure Handloom Habotai Lining",
    craftProvenance: "Linear Geometric Zardozi Needlework on Peak Lapels",
    craftRegion: "Lahore Atelier, Punjab",
    silhouette: "Sculptural double-breasted blazer with belted waist and fluid wide trousers",
    sizes: ["UK 6", "UK 8", "UK 10", "UK 12", "UK 14", "Bespoke Made-to-Measure"],
    colors: [
      {
        name: "Unbleached Raw Ivory",
        hex: "#F4F1EA",
        image: "/images/women-couture-suit.jpg",
        gallery: [
          {
            url: "/images/women-couture-suit.jpg",
            alt: "Ivory Zardozi Raw Silk Pant Suit",
            caption: "Double-breasted raw silk tailored blazer",
          },
        ],
      },
    ],
    badge: "COUTURE SUITED",
    description: "A commanding double-breasted suit cut from unbleached hand-spun raw silk, framed by geometric zardozi embroidery along the peak lapel.",
    longDescription: "Redefining South Asian power dressing: this two-piece suit pairs the architectural rigor of bespoke British tailoring with the soul of generational Punjab needlework. Spun from indigenous mulberry silk that retains its organic slub, the jacket features floating internal canvasing and hand-beaten gold metallic threadwork along the peaked lapel.",
    craftDetails: "Hand-couched gold metallic zardozi on stiffened silk canvas, hand-bound buttonholes, belted waist cinch with brass hardware, and hand-rolled trouser cuffs.",
    fitNotes: "Structured chest with relaxed drape through wide-leg trousers. Belt allows customized contouring. Model is 178cm wearing UK 8.",
    careInstructions: [
      "Specialist couture dry clean only",
      "Cover embroidered lapels with tissue when traveling",
      "Store in acid-free garment sleeve",
    ],
    madeToOrder: true,
    leadTime: "4–5 Weeks Handcraft",
    editionLimit: 20,
    relatedSlugs: ["obsidian-bandgala-architectural-suit", "sculptural-raw-silk-trench", "midnight-emerald-gala-suit"],
  },
  {
    id: "prod-suit-03",
    slug: "midnight-emerald-gala-suit",
    name: "Midnight Emerald Silk & Velvet Gala Suit",
    collection: "RAAT — EVENING COUTURE",
    collectionSlug: "veil-04-raat",
    category: "men",
    price: 320000,
    formattedPrice: "Rs. 320,000",
    currency: "PKR",
    image: "/images/midnight-velvet-suit.jpg",
    aspect: "3:4",
    gallery: [
      {
        url: "/images/midnight-velvet-suit.jpg",
        alt: "Midnight Emerald Silk & Velvet Gala Suit with shawl lapel and calligraphic cuffs",
        caption: "Double-breasted raw silk duppioni with deep velvet shawl collar and silver Nastaliq poetry cuffs",
      },
      {
        url: "/images/atelier-bespoke-tailoring.jpg",
        alt: "Master tailor basting lapel in the Lahore atelier",
        caption: "Bespoke pattern draft cut individually for each client commission",
      },
    ],
    fabric: "Hand-Loomed Raw Silk Duppioni & Italian Cotton Velvet Shawl Lapels",
    craftProvenance: "Silver Zardozi Nastaliq Calligraphy Micro-Embroidered Cuffs",
    craftRegion: "Lahore & Karachi, Pakistan",
    silhouette: "Double-breasted gala jacket with sculpted waist and bespoke straight trousers",
    sizes: ["UK 38 / Small", "UK 40 / Medium", "UK 42 / Large", "UK 44 / XL", "Bespoke Made-to-Measure"],
    colors: [
      {
        name: "Midnight Emerald",
        hex: "#132321",
        image: "/images/midnight-velvet-suit.jpg",
        gallery: [
          {
            url: "/images/midnight-velvet-suit.jpg",
            alt: "Midnight Emerald Gala Suit",
            caption: "Deep emerald and obsidian raw silk with velvet lapels",
          },
        ],
      },
    ],
    badge: "BESPOKE GALA",
    description: "A modern black-tie evening suit engineered in hand-spun midnight raw silk, finished with velvet shawl lapels and silver-thread calligraphic cuffs.",
    longDescription: "Conceived for discerning formal gatherings across the globe, this gala suit reimagines black tie with poetic South Asian elegance. The deep emerald-midnight silk reflects candlelight with subtle iridescence, while the cuffs are delicately inscribed in silver metallic thread with Faiz Ahmad Faiz verse on dusk and dawn.",
    craftDetails: "Hand-embroidered Nastaliq poetry in silver metallic wire, velvet shawl collar, hand-stitched jetted pockets, and cupro lining.",
    fitNotes: "Tailored slim fit through torso with sharp sleeve pitch. Model is 184cm wearing UK 40.",
    careInstructions: [
      "Specialist dry clean only",
      "Do not steam velvet directly; steam from interior",
      "Hang on contoured wood hanger",
    ],
    madeToOrder: true,
    leadTime: "4 Weeks Bespoke Tailoring",
    editionLimit: 15,
    relatedSlugs: ["obsidian-bandgala-architectural-suit", "ivory-zardozi-raw-silk-pant-suit", "sandstone-unconstructed-double-breasted-suit"],
  },
  {
    id: "prod-suit-04",
    slug: "sandstone-unconstructed-double-breasted-suit",
    name: "Sandstone Unconstructed Double-Breasted Suit",
    collection: "EDIT 02 — MITTI",
    collectionSlug: "edit-02-mitti",
    category: "men",
    price: 210000,
    formattedPrice: "Rs. 210,000",
    currency: "PKR",
    image: "/images/campaign-mitti-interlude.jpg",
    aspect: "16:9",
    gallery: [
      {
        url: "/images/campaign-mitti-interlude.jpg",
        alt: "Sandstone Unconstructed Suit worn in motion through sun-drenched arches",
        caption: "Relaxed double-breasted silhouette cut from hand-spun earthen flax and highland wool",
      },
      {
        url: "/images/atelier-bespoke-tailoring.jpg",
        alt: "Atelier workbench showing shears and tailoring swatches",
        caption: "Master cutting and basting of lightweight floating canvas",
      },
    ],
    fabric: "Indigenous Earthen Flax & Lightweight Himalayan Highland Wool Blend",
    craftProvenance: "Floating Unconstructed Shoulder & Horn Hardware",
    craftRegion: "Swat & Lahore, Pakistan",
    silhouette: "Relaxed double-breasted drape with unstructured natural shoulder",
    sizes: ["UK 38", "UK 40", "UK 42", "UK 44", "Bespoke Made-to-Measure"],
    colors: [
      {
        name: "Warm Sandstone",
        hex: "#C6B299",
        image: "/images/campaign-mitti-interlude.jpg",
        gallery: [
          {
            url: "/images/campaign-mitti-interlude.jpg",
            alt: "Sandstone Unconstructed Double-Breasted Suit",
            caption: "Warm alluvial tones inspired by historic Lahore courtyard lime mortar",
          },
        ],
      },
    ],
    badge: "MITTI SUITED",
    description: "An unhurried warm sandstone double-breasted suit woven from indigenous flax and highland wool, engineered for kinetic movement.",
    longDescription: "Part of the Mitti resort edit, this suit breaks away from rigid formalwear. Without heavy shoulder pads or stiff interlinings, the breathable blend of earthen flax and northern wool moves naturally with the wearer under warm sun or evening breezes.",
    craftDetails: "Unlined back for maximum breathability, horn button closures, patch pockets, and hand-pickstitched lapel margins.",
    fitNotes: "Relaxed tailored cut. Flows effortlessly. Model is 186cm wearing UK 40.",
    careInstructions: [
      "Dry clean or hand steam with mineral water",
      "Embrace natural linen creases as character",
    ],
    madeToOrder: true,
    leadTime: "3 Weeks",
    editionLimit: 30,
    relatedSlugs: ["obsidian-bandgala-architectural-suit", "ivory-zardozi-raw-silk-pant-suit"],
  },
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
    image: "/images/tunic-indigo-ajrak.jpg",
    aspect: "1:1",
    gallery: [
      {
        url: "/images/tunic-indigo-ajrak.jpg",
        alt: "Worn view of Vat Indigo Ajrak Tunic on stone terrace",
        caption: "Sculptural relaxed tunic silhouette with geometric cuffs",
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
        image: "/images/tunic-indigo-ajrak.jpg",
        gallery: [
          {
            url: "/images/tunic-indigo-ajrak.jpg",
            alt: "Worn drape view in Indigo",
            caption: "Sculptural relaxed tunic silhouette with geometric cuffs",
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
    image: "/images/cape-zardozi-crimson.jpg",
    aspect: "4:3",
    gallery: [
      {
        url: "/images/cape-zardozi-crimson.jpg",
        alt: "Royal Zardozi Cape in Royal Madder Crimson",
        caption: "Dramatic ceremonial drape over minimalist evening gown",
      },
      {
        url: "/images/craft-atelier.jpg",
        alt: "Artisan needlework in progress",
        caption: "Master artisan creating intricate gold and copper threadwork on Adda loom",
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
        image: "/images/cape-zardozi-crimson.jpg",
        gallery: [
          {
            url: "/images/cape-zardozi-crimson.jpg",
            alt: "Royal Zardozi Cape in Royal Madder Crimson",
            caption: "Master artisan creating intricate gold and copper threadwork",
          },
          {
            url: "/images/craft-atelier.jpg",
            alt: "Artisan needlework in progress",
            caption: "Master artisan creating intricate gold and copper threadwork on Adda loom",
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
    image: "/images/swat-pashmina.jpg",
    aspect: "1:1",
    gallery: [
      {
        url: "/images/swat-pashmina.jpg",
        alt: "Textile weave of pashmina",
        caption: "Ultra-fine highland pashmina twill weave with natural fringe",
      },
      {
        url: "/images/hero-men.jpg",
        alt: "Draped with architectural sherwani",
        caption: "Highland Swat pashmina draped over midnight wool tailoring",
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
        image: "/images/swat-pashmina.jpg",
        gallery: [
          {
            url: "/images/swat-pashmina.jpg",
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
  {
  id: "prod-07",
  slug: "apsara-zardozi-shamoz-two-piece",
  name: "Apsara Zardozi Shamoz Two-Piece",
  collection: "EDIT 02 — MITTI",
  collectionSlug: "edit-02-mitti",
  category: "women",
  price: 6490,
  formattedPrice: "Rs. 6,490",
  currency: "PKR",
  image: "/images/products/apsara-maroon-front.jpg",
  aspect: "4:5",
  gallery: [
    {
      url: "/images/products/apsara-maroon-front.jpg",
      alt: "Apsara Zardozi Shamoz Two-Piece in Rich Maroon",
      caption: "Full portrait of embellished Shamoz silk kurta in rich wine tone"
    },
    {
      url: "/images/products/apsara-maroon-detail.jpg",
      alt: "Intricate metallic threadwork and botanical motifs on bodice",
      caption: "Close embroidery detail on neckline and scalloped sleeve cuffs"
    }
  ],
  fabric: "Pure Shamoz Silk & Organza Facing",
  craftProvenance: "Delicate floral tilla needlework & thread borders",
  craftRegion: "Lahore Atelier",
  silhouette: "Relaxed longline kurta with scalloped slit neckline and straight trousers",
  sizes: [
    "Small",
    "Medium",
    "Large",
    "XL"
  ],
  colors: [
    {
      name: "Deep Maroon",
      hex: "#4A1521",
      image: "/images/products/apsara-maroon-front.jpg",
      gallery: [
        {
          url: "/images/products/apsara-maroon-front.jpg",
          alt: "Apsara Zardozi Shamoz Two-Piece in Rich Maroon",
          caption: "Full portrait of embellished Shamoz silk kurta in rich wine tone"
        },
        {
          url: "/images/products/apsara-maroon-detail.jpg",
          alt: "Intricate metallic threadwork and botanical motifs on bodice",
          caption: "Close embroidery detail on neckline and scalloped sleeve cuffs"
        }
      ]
    }
  ],
  badge: "READY TO WEAR",
  description: "Lustrous wine-toned shamoz silk accented with intricate heirloom floral embroidery.",
  longDescription: "Crafted from premium shamoz silk that falls with liquid drape, this two-piece ensemble reinterprets traditional court embroidery into an easy evening silhouette. The neckline features delicate metallic tilla stitching complemented by scalloped organza cuffs.",
  craftDetails: "Hand-finished button loops, delicate tilla threadwork, and concealed side pockets.",
  fitNotes: "Relaxed tailored cut with generous side slits for effortless fluidity. Fits true to size.",
  careInstructions: [
    "Specialist dry clean recommended",
    "Gentle steam iron inside out"
  ],
  madeToOrder: false,
  leadTime: "In Stock & Immediate Dispatch",
  relatedSlugs: [
    "mehwar-architectural-border-ensemble",
    "zartasha-botanical-kaftan"
  ]
},
  {
  id: "prod-08",
  slug: "mehwar-architectural-border-ensemble",
  name: "Mehwar Border Silk Ensemble",
  collection: "FORM 01 — NOOR",
  collectionSlug: "form-01-noor",
  category: "women",
  price: 6490,
  formattedPrice: "Rs. 6,490",
  currency: "PKR",
  image: "/images/products/mehwar-emerald-front.jpg",
  aspect: "4:5",
  gallery: [
    {
      url: "/images/products/mehwar-emerald-front.jpg",
      alt: "Mehwar Border Silk Ensemble in Unbleached Ivory and Emerald",
      caption: "Regal ivory silk tunic featuring ornate emerald and ruby border panels"
    },
    {
      url: "/images/products/mehwar-emerald-detail.jpg",
      alt: "Close embroidery and tapestry border detail on Mehwar tunic",
      caption: "Botanical tapestry border running the length of the side silhouette"
    }
  ],
  fabric: "Fine Spun Shamoz Silk & Tapestry Borders",
  craftProvenance: "Architectural Mughal arch borders and floral needlework",
  craftRegion: "Lahore Atelier",
  silhouette: "Regal V-neck kaftan-cut kurta with embellished vertical border panels",
  sizes: [
    "Small",
    "Medium",
    "Large"
  ],
  colors: [
    {
      name: "Ivory & Forest Emerald",
      hex: "#F4EFE6",
      image: "/images/products/mehwar-emerald-front.jpg",
      gallery: [
        {
          url: "/images/products/mehwar-emerald-front.jpg",
          alt: "Mehwar Border Silk Ensemble in Unbleached Ivory and Emerald",
          caption: "Regal ivory silk tunic featuring ornate emerald and ruby border panels"
        },
        {
          url: "/images/products/mehwar-emerald-detail.jpg",
          alt: "Close embroidery and tapestry border detail on Mehwar tunic",
          caption: "Botanical tapestry border running the length of the side silhouette"
        }
      ]
    }
  ],
  badge: "BESTSELLER",
  description: "An architectural ivory silk tunic adorned with heritage tapestry borders down the profile.",
  longDescription: "A dialogue between clean modern line work and intricate Mughal tapestry motifs. Cut from heavy ivory shamoz silk, the garment carries a commanding emerald and ruby border traced with subtle golden tilla highlights.",
  craftDetails: "Paneled border construction with reinforced French seams and hand-stitched hem finishes.",
  fitNotes: "Voluminous straight cut designed to be worn over matching silk cigarette pants.",
  careInstructions: [
    "Dry clean only",
    "Do not iron directly over embellished borders"
  ],
  madeToOrder: false,
  leadTime: "In Stock & Immediate Dispatch",
  relatedSlugs: [
    "apsara-zardozi-shamoz-two-piece",
    "sculptural-raw-silk-trench"
  ]
},
  {
  id: "prod-09",
  slug: "zartasha-botanical-kaftan",
  name: "Zartasha Botanical Silk Kaftan",
  collection: "VEIL 04 — RAAT",
  collectionSlug: "veil-04-raat",
  category: "women",
  price: 4990,
  formattedPrice: "Rs. 4,990",
  currency: "PKR",
  image: "/images/products/zartasha-plum-front.jpg",
  aspect: "4:5",
  gallery: [
    {
      url: "/images/products/zartasha-plum-front.jpg",
      alt: "Zartasha Botanical Silk Kaftan in Midnight Noir",
      caption: "Portrait view of midnight silk kaftan with multi-tonal botanical needlework"
    },
    {
      url: "/images/products/zartasha-plum-detail.jpg",
      alt: "Embroidered keyhole neckline and bell cuffs on Zartasha kaftan",
      caption: "Detail of pastel resham floral embroidery on midnight shamoz silk"
    }
  ],
  fabric: "High-Grade Shamoz Crepe Silk",
  craftProvenance: "Pastel resham floral needlework on midnight silk",
  craftRegion: "Punjab Heritage Cluster",
  silhouette: "Billowing kaftan silhouette with wide bell sleeves and scalloped borders",
  sizes: [
    "Small",
    "Medium",
    "Large"
  ],
  colors: [
    {
      name: "Midnight Noir",
      hex: "#1C1B1F",
      image: "/images/products/zartasha-plum-front.jpg",
      gallery: [
        {
          url: "/images/products/zartasha-plum-front.jpg",
          alt: "Zartasha Botanical Silk Kaftan in Midnight Noir",
          caption: "Portrait view of midnight silk kaftan with multi-tonal botanical needlework"
        },
        {
          url: "/images/products/zartasha-plum-detail.jpg",
          alt: "Embroidered keyhole neckline and bell cuffs on Zartasha kaftan",
          caption: "Detail of pastel resham floral embroidery on midnight shamoz silk"
        }
      ]
    }
  ],
  badge: "EDITORIAL PICK",
  description: "Draped midnight shamoz silk blooming with delicate pastel botanical needlework.",
  longDescription: "Balancing ease and regal evening glamour, the Zartasha kaftan features wide draped sleeves and a notched keyhole neckline highlighted by subtle contrasting piping. Dense floral sprays cascade organically from shoulders to hem.",
  craftDetails: "Hand-finished scalloped cuff borders, delicate thread eyelets, and self-fabric lining.",
  fitNotes: "Fluid oversized fit with effortless drape. Suitable across standard silhouette sizes.",
  careInstructions: [
    "Dry clean only",
    "Store hanging in cool dry wardrobe"
  ],
  madeToOrder: false,
  leadTime: "In Stock & Immediate Dispatch",
  relatedSlugs: [
    "apsara-zardozi-shamoz-two-piece",
    "charcoal-architectural-sherwani"
  ]
},
  {
  id: "prod-10",
  slug: "kashti-cornflower-linen-three-piece",
  name: "Kashti Cornflower Linen Three-Piece",
  collection: "EDIT 02 — MITTI",
  collectionSlug: "edit-02-mitti",
  category: "women",
  price: 4990,
  formattedPrice: "Rs. 4,990",
  currency: "PKR",
  image: "/images/products/kashti-blue-front.jpg",
  aspect: "4:5",
  gallery: [
    {
      url: "/images/products/kashti-blue-front.jpg",
      alt: "Kashti Linen Three-Piece in Cornflower Blue",
      caption: "Full-body portrait of cornflower linen tunic with ivory filigree and chiffon dupatta"
    },
    {
      url: "/images/products/kashti-blue-detail.jpg",
      alt: "Ivory needlework detail on collar and wide sleeves",
      caption: "Close filigree embroidery tracing the neckline, sleeves, and hem"
    }
  ],
  fabric: "Premium Textured Slub Linen & Sheer Chiffon",
  craftProvenance: "Hand-traced ivory filigree needlework and lace border finishes",
  craftRegion: "Multan & Lahore Craft Studios",
  silhouette: "Straight architectural long tunic with wide palazzo trousers and chiffon drape",
  sizes: [
    "Small",
    "Medium",
    "Large",
    "XL"
  ],
  colors: [
    {
      name: "Cornflower Blue",
      hex: "#4A6B8A",
      image: "/images/products/kashti-blue-front.jpg",
      gallery: [
        {
          url: "/images/products/kashti-blue-front.jpg",
          alt: "Kashti Linen Three-Piece in Cornflower Blue",
          caption: "Full-body portrait of cornflower linen tunic with ivory filigree and chiffon dupatta"
        },
        {
          url: "/images/products/kashti-blue-detail.jpg",
          alt: "Ivory needlework detail on collar and wide sleeves",
          caption: "Close filigree embroidery tracing the neckline, sleeves, and hem"
        }
      ]
    }
  ],
  badge: "HIGH SUMMER",
  description: "Breathable textured linen in soothing cornflower blue with ivory filigree borders.",
  longDescription: "A warm-weather essential designed for daytime elegance. The ensemble pairs an unconstructed linen tunic with airy palazzo trousers and a lightweight chiffon dupatta trimmed with scalloped lace.",
  craftDetails: "Breathable slub linen weave, dyed using eco-conscious water-efficient baths.",
  fitNotes: "Easy relaxed fit with room for movement. Model wears Medium.",
  careInstructions: [
    "Gentle hand wash cold or mild dry clean",
    "Medium steam iron"
  ],
  madeToOrder: false,
  leadTime: "In Stock & Immediate Dispatch",
  relatedSlugs: [
    "lahore-courtyard-pleated-ensemble",
    "sindhi-vat-indigo-tunic"
  ]
},
  {
  id: "prod-11",
  slug: "siya-minimalist-mauve-two-piece",
  name: "Siya Minimalist Mauve Two-Piece",
  collection: "EDIT 02 — MITTI",
  collectionSlug: "edit-02-mitti",
  category: "women",
  price: 3590,
  formattedPrice: "Rs. 3,590",
  currency: "PKR",
  image: "/images/products/siya.jpg",
  aspect: "4:5",
  gallery: [
    {
      url: "/images/products/siya.jpg",
      alt: "Siya Minimalist Mauve Two-Piece in Studio",
      caption: "Full studio portrait of mauve tunic with kimono sleeves and culottes"
    },
    {
      url: "/images/products/siya-detail.jpg",
      alt: "Geometric ivory needlework across flared sleeves",
      caption: "Geometric needlework accents on collar placket and flared cuffs"
    }
  ],
  fabric: "100% Breathable Fine Cotton Twill",
  craftProvenance: "Minimalist geometric diamond needlework motifs",
  craftRegion: "Sindh Rural Artisan Cooperative",
  silhouette: "Modern kimono flared-sleeve tunic with cropped culotte trousers",
  sizes: [
    "Small",
    "Medium",
    "Large"
  ],
  colors: [
    {
      name: "Muted Mauve",
      hex: "#8C6D78",
      image: "/images/products/siya.jpg",
      gallery: [
        {
          url: "/images/products/siya.jpg",
          alt: "Siya Minimalist Mauve Two-Piece in Studio",
          caption: "Full studio portrait of mauve tunic with kimono sleeves and culottes"
        },
        {
          url: "/images/products/siya-detail.jpg",
          alt: "Geometric ivory needlework across flared sleeves",
          caption: "Geometric needlework accents on collar placket and flared cuffs"
        }
      ]
    }
  ],
  badge: "ESSENTIAL",
  description: "Restrained everyday luxury featuring wide kimono sleeves and crisp culottes.",
  longDescription: "Embodying NAVA's quiet design ethos, Siya features clean architectural proportions in a dusty mauve cotton twill. Spaced geometric diamond needlework provides subtle textural nuance without visual noise.",
  craftDetails: "Reinforced neckline placket, deep side vents, and tailored cropped hem.",
  fitNotes: "Relaxed modern silhouette with wide drop shoulders. True to size.",
  careInstructions: [
    "Machine wash cold on gentle cycle",
    "Hang dry in shade"
  ],
  madeToOrder: false,
  leadTime: "In Stock & Immediate Dispatch",
  relatedSlugs: [
    "kashti-cornflower-linen-three-piece",
    "khajista-sandstone-palazzo-suit"
  ]
},
  {
  id: "prod-12",
  slug: "khajista-sandstone-palazzo-suit",
  name: "Khajista Sandstone Palazzo Suit",
  collection: "FORM 01 — NOOR",
  collectionSlug: "form-01-noor",
  category: "women",
  price: 4990,
  formattedPrice: "Rs. 4,990",
  currency: "PKR",
  image: "/images/products/khajista.jpg",
  aspect: "4:5",
  gallery: [
    {
      url: "/images/products/khajista.jpg",
      alt: "Khajista Sandstone Palazzo Suit with Mint Filigree",
      caption: "Full studio portrait of sandstone tunic with sage filigree and wide palazzo"
    },
    {
      url: "/images/products/khajista-detail.jpg",
      alt: "Sage mint embroidery detail on neckline and palazzo trousers",
      caption: "Intricate sage threadwork crest down the neckline and palazzo cuffs"
    }
  ],
  fabric: "Fine Raw Cotton Slub & Soft Chiffon Dupatta",
  craftProvenance: "Sage mint floral crest needlework",
  craftRegion: "Lahore Atelier",
  silhouette: "Structured mid-length tunic with sweeping pleat-front palazzo trousers",
  sizes: [
    "Small",
    "Medium",
    "Large",
    "XL"
  ],
  colors: [
    {
      name: "Limestone Sandstone",
      hex: "#DDD4C7",
      image: "/images/products/khajista.jpg",
      gallery: [
        {
          url: "/images/products/khajista.jpg",
          alt: "Khajista Sandstone Palazzo Suit with Mint Filigree",
          caption: "Full studio portrait of sandstone tunic with sage filigree and wide palazzo"
        },
        {
          url: "/images/products/khajista-detail.jpg",
          alt: "Sage mint embroidery detail on neckline and palazzo trousers",
          caption: "Intricate sage threadwork crest down the neckline and palazzo cuffs"
        }
      ]
    }
  ],
  badge: "NEW DROP",
  description: "A refined neutral three-piece with sage mint crest embroidery and sweeping palazzos.",
  longDescription: "Tonal tranquility inspired by the limestone arcades of old Lahore. Tailored from premium unbleached slub cotton, the tunic is embellished with subtle sage-green tilla filigree that extends to the wide palazzo hemlines.",
  craftDetails: "Hand-embossed neckline border, fully finished interior seams, matching chiffon drape.",
  fitNotes: "Structured chest with a generous flare through the waist and wide leg.",
  careInstructions: [
    "Hand wash cold separately",
    "Warm iron on reverse side"
  ],
  madeToOrder: false,
  leadTime: "In Stock & Immediate Dispatch",
  relatedSlugs: [
    "sculptural-raw-silk-trench",
    "siya-minimalist-mauve-two-piece"
  ]
},
  {
  id: "prod-13",
  slug: "bella-floral-botanical-shalwar-suit",
  name: "Bella Botanical Shalwar Suit",
  collection: "EDIT 02 — MITTI",
  collectionSlug: "edit-02-mitti",
  category: "women",
  price: 4790,
  formattedPrice: "Rs. 4,790",
  currency: "PKR",
  image: "/images/products/bella.jpg",
  aspect: "4:5",
  gallery: [
    {
      url: "/images/products/bella.jpg",
      alt: "Bella Botanical Shalwar Suit in Soft Lilac",
      caption: "Full portrait of lilac kurta with botanical organza dupatta and dhoti shalwar"
    },
    {
      url: "/images/products/bella-detail.jpg",
      alt: "Detail of floral resham embroidery and floating organza dupatta",
      caption: "Neckline embroidery and watercolor floral print on sheer organza"
    }
  ],
  fabric: "Fine Lawn Cotton & Printed Sheer Organza",
  craftProvenance: "Mughal floral resham needlework and botanical watercolor organza",
  craftRegion: "Lahore Atelier",
  silhouette: "High-cut contemporary kurta with pleated dhoti shalwar and airy dupatta",
  sizes: [
    "Small",
    "Medium",
    "Large"
  ],
  colors: [
    {
      name: "Soft Lilac",
      hex: "#CBB9CF",
      image: "/images/products/bella.jpg",
      gallery: [
        {
          url: "/images/products/bella.jpg",
          alt: "Bella Botanical Shalwar Suit in Soft Lilac",
          caption: "Full portrait of lilac kurta with botanical organza dupatta and dhoti shalwar"
        },
        {
          url: "/images/products/bella-detail.jpg",
          alt: "Detail of floral resham embroidery and floating organza dupatta",
          caption: "Neckline embroidery and watercolor floral print on sheer organza"
        }
      ]
    }
  ],
  badge: "SUMMER EDIT",
  description: "Pastel lilac cotton lawn paired with heritage dhoti shalwar and floating botanical dupatta.",
  longDescription: "A joyful interpretation of the classic Pakistani shalwar kameez. Delicate floral sprays are embroidered in shades of violet and sage onto smooth lawn cotton, accented by a translucent organza dupatta.",
  craftDetails: "Piped sleeve edges, pleated dhoti drape construction, and buttoned keyhole back.",
  fitNotes: "Generous drape with comfortable elasticated shalwar waistband.",
  careInstructions: [
    "Gentle hand wash cold",
    "Steam iron only; avoid dry heat on organza"
  ],
  madeToOrder: false,
  leadTime: "In Stock & Immediate Dispatch",
  relatedSlugs: [
    "kashti-cornflower-linen-three-piece",
    "siya-minimalist-mauve-two-piece"
  ]
},
  {
  id: "prod-14",
  slug: "zohrab-citrus-schiffli-three-piece",
  name: "Zohrab Citrus Schiffli Three-Piece",
  collection: "FORM 01 — NOOR",
  collectionSlug: "form-01-noor",
  category: "women",
  price: 5750,
  formattedPrice: "Rs. 5,750",
  currency: "PKR",
  image: "/images/products/zohrab.jpg",
  aspect: "4:5",
  gallery: [
    {
      url: "/images/products/zohrab.jpg",
      alt: "Zohrab Citrus Schiffli Kurta Seaside Portrait",
      caption: "Close seaside portrait of citrus schiffli cutwork kurta with ivory lace insert"
    },
    {
      url: "/images/products/zohrab-full.jpg",
      alt: "Full silhouette view of Zohrab Three-Piece",
      caption: "Full-length silhouette with scalloped lace-trimmed pure chiffon dupatta"
    },
    {
      url: "/images/products/zohrab-detail.jpg",
      alt: "Detailed schiffli eyelet lace on neckline and cuffs",
      caption: "Intricate eyelet schiffli cutwork and scalloped border embroidery"
    }
  ],
  fabric: "100% Premium Schiffli Cutwork Lawn & Pure Chiffon",
  craftProvenance: "Precision schiffli eyelet cutwork with Guipure lace border inserts",
  craftRegion: "Karachi & Lahore Studios",
  silhouette: "Crisp straight-cut tunic with scalloped lace hem and tailored cigarette trousers",
  sizes: [
    "Small",
    "Medium",
    "Large"
  ],
  colors: [
    {
      name: "Pale Citron",
      hex: "#E5E0A6",
      image: "/images/products/zohrab.jpg",
      gallery: [
        {
          url: "/images/products/zohrab.jpg",
          alt: "Zohrab Citrus Schiffli Kurta Seaside Portrait",
          caption: "Close seaside portrait of citrus schiffli cutwork kurta with ivory lace insert"
        },
        {
          url: "/images/products/zohrab-full.jpg",
          alt: "Full silhouette view of Zohrab Three-Piece",
          caption: "Full-length silhouette with scalloped lace-trimmed pure chiffon dupatta"
        },
        {
          url: "/images/products/zohrab-detail.jpg",
          alt: "Detailed schiffli eyelet lace on neckline and cuffs",
          caption: "Intricate eyelet schiffli cutwork and scalloped border embroidery"
        }
      ]
    }
  ],
  badge: "LIMITED RUN",
  description: "Sunlit pale citron schiffli lawn with intricate eyelet lace inserts and chiffon drape.",
  longDescription: "Crafted for coastal light and summer soirees, Zohrab showcases all-over schiffli geometric eyelets on breathable combed lawn. Guipure lace outlines the collar and scalloped cuffs for an heirloom finish.",
  craftDetails: "Fine cotton voile underlay, hand-joined lace seams, and weighted chiffon hem.",
  fitNotes: "Structured straight fit. Designed to graze just below the knee over slim trousers.",
  careInstructions: [
    "Hand wash in cold water using delicate detergent",
    "Dry flat in shade"
  ],
  madeToOrder: false,
  leadTime: "In Stock & Immediate Dispatch",
  relatedSlugs: [
    "nayaab-porcelain-blue-schiffli-ensemble",
    "sculptural-raw-silk-trench"
  ]
},
  {
  id: "prod-15",
  slug: "rushfa-blushing-rose-suite",
  name: "Rushfa Blushing Rose Suite",
  collection: "LINE 05 — KASHT",
  collectionSlug: "line-05-atelier",
  category: "women",
  price: 5790,
  formattedPrice: "Rs. 5,790",
  currency: "PKR",
  image: "/images/products/rushfa.jpg",
  aspect: "4:5",
  gallery: [
    {
      url: "/images/products/rushfa.jpg",
      alt: "Rushfa Blushing Rose Kurta Editorial Portrait",
      caption: "Editorial studio portrait of rose silk-cotton kurta with sequined resham needlework"
    },
    {
      url: "/images/products/rushfa-detail.jpg",
      alt: "Fine detail of antique gold tilla and micro-sequin borders",
      caption: "Close-up of shimmering micro-sequins and multi-colored resham vine borders"
    }
  ],
  fabric: "Fine Raw Cotton Lawn & Embroidered Sheer Dupatta",
  craftProvenance: "Micro-sequin and antique gold tilla vine needlework",
  craftRegion: "Central Punjab Craft Cluster",
  silhouette: "Tailored straight tunic with sheer embroidered sleeve cuffs and matching trousers",
  sizes: [
    "Small",
    "Medium",
    "Large"
  ],
  colors: [
    {
      name: "Blushing Rose",
      hex: "#CE9D9C",
      image: "/images/products/rushfa.jpg",
      gallery: [
        {
          url: "/images/products/rushfa.jpg",
          alt: "Rushfa Blushing Rose Kurta Editorial Portrait",
          caption: "Editorial studio portrait of rose silk-cotton kurta with sequined resham needlework"
        },
        {
          url: "/images/products/rushfa-detail.jpg",
          alt: "Fine detail of antique gold tilla and micro-sequin borders",
          caption: "Close-up of shimmering micro-sequins and multi-colored resham vine borders"
        }
      ]
    }
  ],
  badge: "COUTURE READY",
  description: "Subtle shimmering micro-sequins woven into antique floral vines on dusty rose cotton.",
  longDescription: "A tribute to classic Punjabi needlecraft. Muted olive and peach resham embroidery winds gracefully across a dusty rose base, illuminated by microscopic sequins that catch evening candlelight.",
  craftDetails: "Hand-embellished cuff trim, reinforced neck facing, and organza hem insets.",
  fitNotes: "Tailored through the bust and shoulders, falling straight through the body.",
  careInstructions: [
    "Specialist dry clean only",
    "Do not iron directly on sequins"
  ],
  madeToOrder: false,
  leadTime: "In Stock & Immediate Dispatch",
  relatedSlugs: [
    "apsara-zardozi-shamoz-two-piece",
    "artisan-needlework-cape"
  ]
},
  {
  id: "prod-16",
  slug: "nayaab-porcelain-blue-schiffli-ensemble",
  name: "Nayaab Porcelain Blue Schiffli Ensemble",
  collection: "FORM 01 — NOOR",
  collectionSlug: "form-01-noor",
  category: "women",
  price: 5490,
  formattedPrice: "Rs. 5,490",
  currency: "PKR",
  image: "/images/products/nayaab.jpg",
  aspect: "4:5",
  gallery: [
    {
      url: "/images/products/nayaab.jpg",
      alt: "Nayaab Ivory Schiffli Suit with Porcelain Blue Embroidery",
      caption: "Full portrait of ivory schiffli tunic with cobalt needlework and sheer organza dupatta"
    },
    {
      url: "/images/products/nayaab-detail.jpg",
      alt: "Close-up of geometric cutwork lattice and border motifs",
      caption: "Intricate eyelet lattice and scalloped cobalt border motifs"
    }
  ],
  fabric: "Pure Textured Lawn with Schiffli Cutwork & Sheer Organza",
  craftProvenance: "Traditional Multani-inspired floral vines and eyelet schiffli lace",
  craftRegion: "Multan & Lahore Craft Studios",
  silhouette: "Ankle-grazing straight kurta with sheer organza dupatta and tailored culottes",
  sizes: [
    "Small",
    "Medium",
    "Large",
    "XL"
  ],
  colors: [
    {
      name: "Ivory & Porcelain Blue",
      hex: "#F7F7F7",
      image: "/images/products/nayaab.jpg",
      gallery: [
        {
          url: "/images/products/nayaab.jpg",
          alt: "Nayaab Ivory Schiffli Suit with Porcelain Blue Embroidery",
          caption: "Full portrait of ivory schiffli tunic with cobalt needlework and sheer organza dupatta"
        },
        {
          url: "/images/products/nayaab-detail.jpg",
          alt: "Close-up of geometric cutwork lattice and border motifs",
          caption: "Intricate eyelet lattice and scalloped cobalt border motifs"
        }
      ]
    }
  ],
  badge: "NEW DROP",
  description: "Architectural white-on-white schiffli lattice framing striking porcelain blue floral vines.",
  longDescription: "Inspired by the famed blue-and-white ceramics of Multan, Nayaab combines geometric openwork schiffli with saturated cobalt floral embroidery. Completed by an ethereal organza dupatta dotted with floral motifs.",
  craftDetails: "Hand-finished eyelets, delicate border scolloping, and lightweight cotton lining.",
  fitNotes: "Longline architectural cut. Model is 176cm wearing Small.",
  careInstructions: [
    "Gentle hand wash cold",
    "Line dry in shade to preserve crisp cotton texture"
  ],
  madeToOrder: false,
  leadTime: "In Stock & Immediate Dispatch",
  relatedSlugs: [
    "zohrab-citrus-schiffli-three-piece",
    "sculptural-raw-silk-trench"
  ]
}
];

export const SELECTED_PRODUCTS = PRODUCTS.slice(0, 5);
