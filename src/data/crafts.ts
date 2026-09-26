/**
 * NAVA — Regional Craft Provenance & Intangible Heritage Dataset
 * Source of truth: National Register of the Intangible Cultural Heritage of Pakistan
 * https://heritage.pakistan.gov.pk/SiteImage/Misc/files/ICH%20Pakistan%20Low.pdf
 */

export interface ProcessStage {
  step: number;
  title: string;
  description: string;
  materials: string;
}

export interface CraftRecord {
  slug: string;
  name: string;
  regionalOrigin: string;
  province: "Sindh" | "Punjab" | "Khyber Pakhtunkhwa" | "Gilgit-Baltistan";
  registrationCode: string;
  officialCitation: string;
  summary: string;
  historicalContext: string;
  heroImage: string;
  macroImage: string;
  aspect: string;
  processStages: ProcessStage[];
  artisanMaster: {
    title: string;
    atelierLocation: string;
    quote: string;
  };
  relatedCollectionSlug: string;
  relatedCollectionTitle: string;
  relatedProductSlugs: string[];
}

export const CRAFTS: CraftRecord[] = [
  {
    slug: "sindhi-ajrak",
    name: "Sindhi Ajrak: The 14-Stage Natural Vat Dyeing",
    regionalOrigin: "Bhit Shah & Matiari",
    province: "Sindh",
    registrationCode: "ICH REG. SINDH BLK-049",
    officialCitation:
      "Documented in the National Register of the Intangible Cultural Heritage of Pakistan under regional traditional textile disciplines.",
    summary:
      "A mathematical and astronomical block printing discipline that utilizes organic dyes, alluvial river mud, and hand-carved acacia wood blocks.",
    historicalContext:
      "Originating along the Indus River basin, Ajrak is not merely ornamental textile; it is an astronomical calendar and philosophical discipline. The geometric grid represents cosmic harmony, while the blue and red symbolize sky and earth. True Ajrak contains zero synthetic chemicals, relying entirely on microbial vat fermentation.",
    heroImage: "/images/macro-ajrak.jpg",
    macroImage: "/images/hero-couture.jpg",
    aspect: "1:1",
    processStages: [
      {
        step: 1,
        title: "Khurr (Initial Washing & Camel Dung Steeping)",
        description: "Raw unbleached cotton is soaked with camel dung, castor oil, and soda ash to strip raw starches and soften cotton fibers.",
        materials: "Natural alkaline water, organic castor oil",
      },
      {
        step: 2,
        title: "Porh (Block Printing the White Outlines)",
        description: "Master block carvers stamp the primary geometric outlines using a resist paste made of river gum and rice paste.",
        materials: "Acacia arabica carved woodblock, rice starch resist",
      },
      {
        step: 3,
        title: "Nill (Natural Indigo Vat Fermentation)",
        description: "The cloth is submerged into ground vats where Indigofera tinctoria leaves ferment over 18 days, oxidizing into deep blue upon contact with air.",
        materials: "Natural indigo cakes, lime, fermented dates",
      },
      {
        step: 4,
        title: "Majeetha (Alizarin & Madder Root Boil)",
        description: "Boiled in large copper cauldrons with crushed madder roots and tamarind seed flowers to transform earthy mud resists into rich rust terracotta.",
        materials: "Rubia cordifolia (Madder root), copper vat",
      },
    ],
    artisanMaster: {
      title: "Master Ustad Khatri & Generational Dye Masters",
      atelierLocation: "Bhit Shah Atelier, Sindh",
      quote: "When the river rises, the water changes our blue. You cannot hurry an indigo vat; you listen to its breath.",
    },
    relatedCollectionSlug: "cipher-03-ajrak",
    relatedCollectionTitle: "CIPHER 03 — AJRAK",
    relatedProductSlugs: ["sindhi-vat-indigo-tunic", "sculptural-raw-silk-trench"],
  },
  {
    slug: "punjab-zardozi",
    name: "Architectural Zardozi: Royal Court Needlework",
    regionalOrigin: "Old Lahore & Gujranwala",
    province: "Punjab",
    registrationCode: "ICH REG. PUNJAB EMB-018",
    officialCitation:
      "Recognized in historical Mughal atelier archives and preserved under Punjab Traditional Crafts preservation guidelines.",
    summary:
      "Architectural metallic thread embroidery executed on taut wooden slate looms using real coiled gold, copper, and silver bullion.",
    historicalContext:
      "Historically patronized in royal imperial workshops, Zardozi translates literally from Persian as 'gold sewing' (Zar = gold, Dozi = sewing). NAVA strips away historical excessive glitter to focus on architectural clean lines, using matte metallic threads as structural contouring on raw silk and wool.",
    heroImage: "/images/craft-atelier.jpg",
    macroImage: "/images/hero-couture.jpg",
    aspect: "4:3",
    processStages: [
      {
        step: 1,
        title: "Naqsha (Architectural Line Drawing)",
        description: "The geometric motif is drafted by hand on tracing parchment and transferred with powdered chalk onto taut hand-spun silk.",
        materials: "Charcoal powder, vegetable gum, vellum",
      },
      {
        step: 2,
        title: "Adda (Loom Tension Calibrating)",
        description: "Heavy timber slate frames are tensioned to ensure the fabric cannot warp under the weight of metal threadwork.",
        materials: "Solid Sheesham wood loom frame",
      },
      {
        step: 3,
        title: "Gijai & Salma (Bullion Coil Application)",
        description: "Artisans cut microscopic spirals of copper and silver wire, guiding them with fine hooked needles (Aari) thread by thread.",
        materials: "Copper alloy bullion wire, gold leaf thread",
      },
    ],
    artisanMaster: {
      title: "Begum Razia & Master Needlewomen Collective",
      atelierLocation: "Walled City Atelier, Lahore",
      quote: "A machine punches metal into cloth; a hand sculpts metal so it moves with the body like water.",
    },
    relatedCollectionSlug: "form-01-noor",
    relatedCollectionTitle: "FORM 01 — NOOR",
    relatedProductSlugs: ["sculptural-raw-silk-trench", "artisan-needlework-cape"],
  },
  {
    slug: "swat-weaving",
    name: "Highland Swat Pashmina & Wool Weaving",
    regionalOrigin: "Swat Valley & Islampur",
    province: "Khyber Pakhtunkhwa",
    registrationCode: "ICH REG. KPK WLV-031",
    officialCitation:
      "Recorded in the National Register for highland pastoral weaving and pit-loom woolen manufacture.",
    summary:
      "Centuries of thermal insulation wisdom translated from mountain pit-looms into architectural wool overcoats and cloud-weight shawls.",
    historicalContext:
      "The craftsmen of Islampur in the Swat Valley have operated pit-looms since the 14th century. Utilizing naturally colored mountain wool without bleach or synthetic mordants, these textiles possess unmatched durability, natural water repellency, and thermal memory.",
    heroImage: "/images/hero-men.jpg",
    macroImage: "/images/swat-pashmina.jpg",
    aspect: "4:5",
    processStages: [
      {
        step: 1,
        title: "Pastoral Shearing & Fiber Sorting",
        description: "Wool is hand-sheared from high-altitude flocks and sorted by natural fleece shades (charcoal, slate, bone, oatmeal).",
        materials: "Raw mountain fleece",
      },
      {
        step: 2,
        title: "Charkha Spun Weft",
        description: "Women in mountain villages spin the carded fleece on wooden drop spindles, creating high-twist warp threads that resist fraying.",
        materials: "Hand-turned wooden Charkha wheel",
      },
      {
        step: 3,
        title: "Pit-Loom Twill Interlocking",
        description: "Loomed in recessed earthen pit-looms where humidity stays stable, weaving dense diagonal twill patterns with raw selvedges.",
        materials: "Foot-treadle pit loom, hand shuttles",
      },
    ],
    artisanMaster: {
      title: "Master Weaver Sher Muhammad",
      atelierLocation: "Islampur Valley, Swat",
      quote: "Our wool knows the winter. When you wear it, you feel the mountain warmth that has protected our ancestors for generations.",
    },
    relatedCollectionSlug: "veil-04-raat",
    relatedCollectionTitle: "VEIL 04 — RAAT",
    relatedProductSlugs: ["charcoal-architectural-sherwani", "swat-pashmina-shawl"],
  },
];
