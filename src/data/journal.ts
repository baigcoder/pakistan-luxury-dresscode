/**
 * NAVA — Journal Stories Dataset
 * Source of truth: 10-CONTENT.md & 07-PAGES.md
 */

export interface JournalContentSection {
  heading?: string;
  paragraphs: string[];
  inlineImage?: string;
  imageCaption?: string;
}

export interface JournalArticleItem {
  id: string;
  slug: string;
  category: "Craft" | "Form" | "Material" | "Atelier" | "Places";
  title: string;
  subtitle?: string;
  excerpt: string;
  readTime: string;
  publishedDate: string;
  image: string;
  aspect: string;
  author: string;
  authorRole?: string;
  pullQuote?: string;
  pullQuoteAttribution?: string;
  relatedCollection?: string;
  relatedCollectionSlug?: string;
  relatedProductSlugs?: string[];
  contentSections: JournalContentSection[];
}

export const JOURNAL_STORIES: JournalArticleItem[] = [
  {
    id: "journal-01",
    slug: "architecture-of-restraint",
    category: "Form",
    title: "The Architecture of Restraint: Defining the New Pakistani Silhouette",
    subtitle: "A critique of superficial ornamentation and the case for negative space in contemporary subcontinent tailoring.",
    excerpt:
      "Why true luxury lies in negative space, unconstructed shoulders, and letting the raw fiber speak louder than ornamentation.",
    readTime: "5 MIN READ",
    publishedDate: "SEPTEMBER 2026",
    image: "/images/hero-couture.jpg",
    aspect: "4:5",
    author: "Creative Direction Atelier",
    authorRole: "Head of Design, NAVA",
    pullQuote: "We stripped away the decorative distraction until only the structural spine and the breath of the silk remained.",
    pullQuoteAttribution: "NAVA Manifesto on Form, 2026",
    relatedCollection: "FORM 01 — NOOR",
    relatedCollectionSlug: "form-01-noor",
    relatedProductSlugs: ["sculptural-raw-silk-trench", "draped-organza-column-gown"],
    contentSections: [
      {
        heading: "I. The Weight of Excess",
        paragraphs: [
          "For decades, the standard vocabulary of South Asian luxury has been calibrated to density: how densely an organza can be frosted in metallic wire, how heavily an ensemble can drag against the body, how loudly a surface can declare its monetary expense.",
          "Yet when one studies the historical drapery of the Indus Basin—the unstitched lengths of hand-spun cotton that responded to the dry desert winds of Sindh and the monastic purity of Gandharan folds—one discovers an entirely different lineage: one founded on balance, kinetic grace, and structural repose."
        ]
      },
      {
        heading: "II. Unconstructed Geometry",
        paragraphs: [
          "At NAVA, our exploration of the contemporary silhouette begins with subtraction. Rather than layering padding and horsehair canvas to forge an artificial posture, we engineer garments that fall from the natural clavicle line with architectural precision.",
          "The Sculptural Raw Silk Trench embodies this exact dialogue. Spun from indigenous handloom tussar silk in South Punjab, its collar stands without interlining, relying strictly on the natural tensile weight of the woven yarn."
        ],
        inlineImage: "/images/hero-men.jpg",
        imageCaption: "Architectural line studies: unconstructed shoulders and balanced proportions photographed in the Lahore atelier."
      },
      {
        heading: "III. The Luxury of Negative Space",
        paragraphs: [
          "Negative space is not empty; it is the chamber through which the garment breathes. By deliberately leaving panels unembellished, we allow the viewer's eye to perceive the micro-variations of raw slub, the deep absorption of light, and the clean edge of a hand-rolled hem.",
          "This is not minimalism in the Western corporate sense. It is an intentional austerity that honors the dignity of the artisan's foundational weave before any decorative intervention occurs."
        ]
      }
    ]
  },
  {
    id: "journal-02",
    slug: "river-and-vat-ajrak-masters",
    category: "Craft",
    title: "Vat Fermentation & The River: Inside the 14 Stages of Sindhi Ajrak",
    subtitle: "Following master block-printers along the Lower Indus basin as they invoke clay, indigo, and mineral waters.",
    excerpt:
      "An archival exploration into the ancient riverbed clay, indigo vats, and generational block carvers of Sindh documented in the National Register.",
    readTime: "8 MIN READ",
    publishedDate: "AUGUST 2026",
    image: "/images/macro-ajrak.jpg",
    aspect: "1:1",
    author: "Regional Craft Archivist",
    authorRole: "Senior Researcher, Textile Anthropology",
    pullQuote: "The river is not a water source; it is a co-author. Without its specific mineral salinity, the madder root refuses its crimson soul.",
    pullQuoteAttribution: "Ustad Ghulam Rasool, 6th Generation Master Printer",
    relatedCollection: "CIPHER 03 — AJRAK",
    relatedCollectionSlug: "cipher-03-ajrak",
    relatedProductSlugs: ["indigo-ajrak-architectural-kurta"],
    contentSections: [
      {
        heading: "I. Khumb: The Steam of Cleansing",
        paragraphs: [
          "The journey of authentic Ajrak begins not with color, but with fire and water. In the village of Bhit Shah, raw unbleached cotton is coiled over a copper cauldron known as the Khumb.",
          "For seventy-two hours, continuous steam permeates the fibers, loosening natural pectin and seed husks. Only when the fabric achieves total softness can it drink the river."
        ]
      },
      {
        heading: "II. Saaj & The Carved Acacia",
        paragraphs: [
          "Every wooden block (pore) is hand-chiseled from mature Acacia nilotica (Babul) wood by carvers whose families have calibrated compass points for three centuries. The geometric tessellations reflect astronomical charts and Quranic architectural geometry.",
          "The printer works without rulers or guidelines. His hand registers the wood against the damp textile by tactile muscle memory alone, striking the wood twice with the heel of his palm to imprint the Kiryana resist paste."
        ],
        inlineImage: "/images/craft-atelier.jpg",
        imageCaption: "Carved babul wood blocks resting in resist clay (Gharo) at the Bhit Shah river station."
      },
      {
        heading: "III. The Alizarin Bloom",
        paragraphs: [
          "When the dyed cloth is dipped into copper vats heated over tamarisk wood, the red madder root (Manjishtha) reacts with the alum mordant embedded in the resist print. Suddenly, in a matter of seconds, the muted earthen brown erupts into an intense brick red.",
          "Registered under BLK-049 in the National Register of the Intangible Cultural Heritage of Pakistan, this living chemistry cannot be synthesized in an industrial autoclave. It belongs to the soil."
        ]
      }
    ]
  },
  {
    id: "journal-03",
    slug: "heritage-courtyards-and-light",
    category: "Places",
    title: "Raking Light Across Old Lahore: A Conversation with Our Tailors",
    subtitle: "Photographing our resort collection amongst 16th-century arched brickwork, observing how shadow sharpens modern drapery.",
    excerpt:
      "Photographing our resort collection amongst 16th-century arched brickwork, observing how shadow sharpens modern drapery.",
    readTime: "4 MIN READ",
    publishedDate: "JULY 2026",
    image: "/images/lahore-courtyard.jpg",
    aspect: "3:2",
    author: "Photography Direction",
    authorRole: "Editorial Visual Lead",
    pullQuote: "Shadow in the Punjab courtyard is not the absence of light; it is an architectural material with its own geometric mass.",
    pullQuoteAttribution: "Atelier Field Notes, Walled City",
    relatedCollection: "EDIT 02 — MITTI",
    relatedCollectionSlug: "edit-02-mitti",
    relatedProductSlugs: ["chanderi-silk-pleated-cape", "zardozi-thread-embroidered-sherwani"],
    contentSections: [
      {
        heading: "I. The Geometry of Brick",
        paragraphs: [
          "In the dense alleyways behind the Delhi Gate of Lahore, sunlight arrives not in sweeping washes, but in razor-sharp blades cut by Mughal brick vaults and timber jharokas.",
          "When we brought our tailoring team into this space, we observed something profound: modern unembellished silhouettes do not compete with heritage architecture; they clarify it."
        ]
      },
      {
        heading: "II. Draped against Dust and Lime",
        paragraphs: [
          "The warm terra-cotta hues of aged lime mortar echo our palette precisely. The natural slub of hand-spun raw silk absorbs the warm evening illumination, revealing the quiet contour of each seam.",
          "Our master cutter, who has worked in the Walled City for four decades, pointed out that the traditional angrakha overlap was originally cut to shelter the wearer from northern winds while creating clean vertical drape. Everything has a purpose."
        ]
      }
    ]
  }
];

export function getJournalStoryBySlug(slug: string): JournalArticleItem | undefined {
  return JOURNAL_STORIES.find((s) => s.slug === slug);
}
