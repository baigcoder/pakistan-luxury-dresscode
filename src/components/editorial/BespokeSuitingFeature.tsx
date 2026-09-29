"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Scissors, Sparkles, Check, ArrowRight, X } from "lucide-react";
import styles from "./BespokeSuitingFeature.module.css";

interface SuitedPiece {
  id: string;
  slug: string;
  name: string;
  category: "men" | "women" | "gala";
  categoryLabel: string;
  image: string;
  aspect: string;
  price: string;
  fabric: string;
  provenance: string;
  silhouette: string;
  leadTime: string;
  badge: string;
}

const SUITED_PIECES: SuitedPiece[] = [
  {
    id: "suit-01",
    slug: "obsidian-bandgala-architectural-suit",
    name: "Obsidian Bandgala Architectural Suit",
    category: "men",
    categoryLabel: "Men's Tailoring",
    image: "/images/men-architectural-suit.jpg",
    aspect: "3:4",
    price: "Rs. 265,000",
    fabric: "Handloom Highland Raw Wool & Raw Silk Facing",
    provenance: "Lahore Bespoke Atelier",
    silhouette: "Structured bandgala collar with floating canvas shoulder",
    leadTime: "3–4 Weeks Bespoke",
    badge: "New Suited",
  },
  {
    id: "suit-02",
    slug: "ivory-zardozi-raw-silk-pant-suit",
    name: "Ivory Zardozi Raw Silk Pant Suit",
    category: "women",
    categoryLabel: "Women's Suited",
    image: "/images/women-couture-suit.jpg",
    aspect: "3:4",
    price: "Rs. 295,000",
    fabric: "100% Hand-Spun Raw Mulberry Silk",
    provenance: "Punjab Master Needlework",
    silhouette: "Double-breasted belted jacket with wide silk trousers",
    leadTime: "4–5 Weeks Handcraft",
    badge: "Couture Suited",
  },
  {
    id: "suit-03",
    slug: "midnight-emerald-gala-suit",
    name: "Midnight Emerald Silk & Velvet Gala Suit",
    category: "gala",
    categoryLabel: "Black-Tie Gala",
    image: "/images/midnight-velvet-suit.jpg",
    aspect: "3:4",
    price: "Rs. 320,000",
    fabric: "Raw Silk Duppioni & Italian Velvet Shawl Lapels",
    provenance: "Karachi & Lahore Atelier",
    silhouette: "Double-breasted gala jacket with silver poetry cuffs",
    leadTime: "4 Weeks Bespoke",
    badge: "Bespoke Gala",
  },
  {
    id: "suit-04",
    slug: "sandstone-unconstructed-double-breasted-suit",
    name: "Sandstone Unconstructed Double-Breasted Suit",
    category: "men",
    categoryLabel: "Resort Tailoring",
    image: "/images/campaign-mitti-interlude.jpg",
    aspect: "16:9",
    price: "Rs. 210,000",
    fabric: "Indigenous Earthen Flax & Highland Cashmere-Wool",
    provenance: "Swat & Lahore Atelier",
    silhouette: "Relaxed double-breasted drape with unstructured natural shoulder",
    leadTime: "3 Weeks",
    badge: "Mitti Edition",
  },
];

interface CraftHotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  tag: string;
  description: string;
}

const ATELIER_HOTSPOTS: CraftHotspot[] = [
  {
    id: "canvas",
    x: 58,
    y: 42,
    title: "Hand-Basted Floating Canvas",
    tag: "Internal Architecture",
    description:
      "Crafted from natural unbleached horsehair and wool canvas, hand-basted to allow the garment to mold naturally to the client's anatomy without artificial glue.",
  },
  {
    id: "collar",
    x: 48,
    y: 28,
    title: "Mathematical Collar Curve",
    tag: "Architectural Drafting",
    description:
      "Drafted on parabolic curves conceived by systems architect Hassan Baig. Ensures seamless neck hugging without chafing or distortion.",
  },
  {
    id: "shears",
    x: 54,
    y: 72,
    title: "Master Single-Needle Cut",
    tag: "Artisan Heritage",
    description:
      "Every piece is individually cut with heavy vintage brass shears and stitched with silk thread by hereditary master tailors in Old Lahore.",
  },
  {
    id: "swatches",
    x: 18,
    y: 76,
    title: "Indigenous Raw Fiber Swatches",
    tag: "Material Integrity",
    description:
      "Handloom raw mulberry silk from South Punjab, natural indigo dyed twill, and high-altitude Swat valley sheep wool.",
  },
];

export const BespokeSuitingFeature: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | "men" | "women" | "gala">("all");
  const [activeHotspot, setActiveHotspot] = useState<CraftHotspot>(ATELIER_HOTSPOTS[0]);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [selectedPieceName, setSelectedPieceName] = useState("Obsidian Bandgala Architectural Suit");
  const [consultSubmitted, setConsultSubmitted] = useState(false);

  const filteredPieces =
    activeCategory === "all"
      ? SUITED_PIECES
      : SUITED_PIECES.filter((p) => p.category === activeCategory);

  const openConsultation = (pieceName: string) => {
    setSelectedPieceName(pieceName);
    setConsultSubmitted(false);
    setIsConsultModalOpen(true);
  };

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultSubmitted(true);
  };

  return (
    <section id="suited-archive" className={styles.section} aria-labelledby="suited-heading">
      {/* Editorial Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.eyebrow} data-reveal>
            <span className={styles.index}>(02.5)</span> Atelier Suiting & Bespoke Tailoring
          </span>
          <h2 id="suited-heading" className={styles.title} data-reveal="lines">
            <span className="line-mask">
              <span>The Suited</span>
            </span>
            <span className="line-mask">
              <span>
                <em>Archive</em> <sup className={styles.count}>({SUITED_PIECES.length})</sup>
              </span>
            </span>
          </h2>
        </div>

        <div className={styles.headerRight} data-reveal>
          <p className={styles.headerLede}>
            Where the architectural discipline of British Savile Row meets the ancestral textile
            knowledge of the Indus Basin. Unconstructed shoulders, hand-turned silk facings, and
            living zardozi needlework.
          </p>
          <div className={styles.filterPills} role="tablist" aria-label="Suited categories">
            {(
              [
                { key: "all", label: "All Pieces" },
                { key: "men", label: "Men's Tailoring" },
                { key: "women", label: "Women's Suited" },
                { key: "gala", label: "Black-Tie Gala" },
              ] as const
            ).map((cat) => (
              <button
                key={cat.key}
                role="tab"
                aria-selected={activeCategory === cat.key}
                className={`${styles.filterBtn} ${activeCategory === cat.key ? styles.activeFilter : ""}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Suited Gallery Grid */}
      <div className={styles.grid}>
        {filteredPieces.map((piece, i) => (
          <article
            key={piece.id}
            className={styles.card}
            data-reveal
            data-reveal-delay={String(i * 120)}
          >
            <div className={styles.imageContainer} data-cursor="explore">
              <Link href={`/product/${piece.slug}`} className={styles.imageLink}>
                <Image
                  src={piece.image}
                  alt={piece.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={styles.cardImage}
                />
              </Link>
              <span className={styles.cardBadge}>{piece.badge}</span>
              <span className={styles.cardLeadTime}>{piece.leadTime}</span>

              <div className={styles.imageOverlayAction}>
                <button
                  type="button"
                  className={styles.consultQuickBtn}
                  onClick={() => openConsultation(piece.name)}
                >
                  <Scissors size={13} />
                  <span>Book Fitting</span>
                </button>
              </div>
            </div>

            <div className={styles.cardMeta}>
              <div className={styles.cardTop}>
                <span className={styles.categoryTag}>{piece.categoryLabel}</span>
                <span className={styles.price}>{piece.price}</span>
              </div>
              <h3 className={styles.cardName}>
                <Link href={`/product/${piece.slug}`}>{piece.name}</Link>
              </h3>
              <p className={styles.cardFabric}>{piece.fabric}</p>
              <div className={styles.cardFooter}>
                <span className={styles.provenance}>{piece.provenance}</span>
                <Link href={`/product/${piece.slug}`} className={styles.cardLink}>
                  <span>Explore piece</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Interactive Tailor's Workbench Feature */}
      <div className={styles.workbenchSection}>
        <div className={styles.workbenchHeader}>
          <div>
            <span className={styles.subEyebrow}>Fig. 04 — Master Tailor Workbench</span>
            <h3 className={styles.workbenchTitle}>The Anatomy of a NAVA Bespoke Suit</h3>
          </div>
          <p className={styles.workbenchIntro}>
            Click or tap the artisan pins on our Lahore atelier workbench to inspect the internal
            engineering of our unconstructed garments.
          </p>
        </div>

        <div className={styles.workbenchLayout}>
          <div className={styles.workbenchVisual}>
            <div className={styles.workbenchImageFrame}>
              <Image
                src="/images/atelier-bespoke-tailoring.jpg"
                alt="Master tailor workbench in Lahore atelier showing basted suit jacket, brass shears, and handloom swatches"
                fill
                quality={95}
                sizes="(max-width: 1024px) 100vw, 65vw"
                className={styles.workbenchImage}
              />
              <div className={styles.workbenchScrim} />

              {/* Hotspot Pins */}
              {ATELIER_HOTSPOTS.map((hotspot) => {
                const isActive = activeHotspot.id === hotspot.id;
                return (
                  <button
                    key={hotspot.id}
                    type="button"
                    className={`${styles.hotspotPin} ${isActive ? styles.activeHotspot : ""}`}
                    style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                    onClick={() => setActiveHotspot(hotspot)}
                    aria-label={`Inspect ${hotspot.title}`}
                  >
                    <span className={styles.pinPulse} />
                    <span className={styles.pinDot} />
                  </button>
                );
              })}
            </div>
          </div>

          <div className={styles.workbenchDetails}>
            <div className={styles.activeHotspotCard}>
              <span className={styles.hotspotTag}>{activeHotspot.tag}</span>
              <h4 className={styles.hotspotTitle}>{activeHotspot.title}</h4>
              <p className={styles.hotspotDesc}>{activeHotspot.description}</p>

              <div className={styles.hotspotList}>
                <span className={styles.specLabel}>Artisan Bench Specifications:</span>
                <ul className={styles.specList}>
                  <li>Zero synthetic fusibles or plastic interlinings</li>
                  <li>Pure organic horsehair canvas imported from regional breeders</li>
                  <li>Over 60 hours of single-needle construction per bespoke commission</li>
                </ul>
              </div>

              <div className={styles.workbenchCtaWrap}>
                <button
                  type="button"
                  className={styles.consultPrimaryBtn}
                  onClick={() => openConsultation("Bespoke Atelier Consultation")}
                >
                  <Scissors size={14} />
                  <span>Reserve Tailoring Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bespoke Fitting Modal Drawer */}
      {isConsultModalOpen && (
        <div className={styles.modalBackdrop} onClick={() => setIsConsultModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.modalCloseBtn}
              onClick={() => setIsConsultModalOpen(false)}
              aria-label="Close consultation modal"
            >
              <X size={18} />
            </button>

            {consultSubmitted ? (
              <div className={styles.modalSuccess}>
                <div className={styles.successIcon}>
                  <Check size={28} />
                </div>
                <h3 className={styles.successTitle}>Consultation Registered</h3>
                <p className={styles.successMessage}>
                  Our Head of Bespoke Tailoring in Lahore will review your specifications for{" "}
                  <strong>{selectedPieceName}</strong> and contact you via WhatsApp / email within 24
                  hours to arrange your private measurement concierge.
                </p>
                <button
                  type="button"
                  className={styles.modalCloseActionBtn}
                  onClick={() => setIsConsultModalOpen(false)}
                >
                  Return to Atelier
                </button>
              </div>
            ) : (
              <form className={styles.consultForm} onSubmit={handleConsultSubmit}>
                <div className={styles.modalHeader}>
                  <span className={styles.modalEyebrow}>NAVA Atelier Concierge</span>
                  <h3 className={styles.modalTitle}>Bespoke Suiting Fitting</h3>
                  <p className={styles.modalSub}>
                    Selected Silhouette: <strong>{selectedPieceName}</strong>
                  </p>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="client-name" className={styles.formLabel}>
                      Full Name *
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      placeholder="e.g. Hassan Baig"
                      className={styles.formInput}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="client-email" className={styles.formLabel}>
                      Email Address *
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      required
                      placeholder="e.g. hassan@example.com"
                      className={styles.formInput}
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="client-phone" className={styles.formLabel}>
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="client-phone"
                      type="tel"
                      required
                      placeholder="+92 300 0000000"
                      className={styles.formInput}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="fitting-city" className={styles.formLabel}>
                      Fitting Location
                    </label>
                    <select id="fitting-city" className={styles.formSelect}>
                      <option value="lahore">Lahore Atelier (Delhi Gate Private Studio)</option>
                      <option value="karachi">Karachi Studio (Clifton)</option>
                      <option value="islamabad">Islamabad Private Suite</option>
                      <option value="dubai">Dubai Concierge Fitting</option>
                      <option value="london">London Bespoke Trunk Show</option>
                      <option value="virtual">Virtual Bespoke 3D Measurement</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="fabric-choice" className={styles.formLabel}>
                    Preferred Cloth
                  </label>
                  <select id="fabric-choice" className={styles.formSelect}>
                    <option value="wool">Highland Raw Wool (Obsidian & Ink)</option>
                    <option value="raw-silk">100% Hand-Spun Raw Mulberry Silk (Ivory)</option>
                    <option value="duppioni">Raw Silk Duppioni & Cotton Velvet (Midnight)</option>
                    <option value="linen-wool">Earthen Flax & Cashmere Blend (Sandstone)</option>
                    <option value="swatches">Send Complete Swatch Book First</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="custom-notes" className={styles.formLabel}>
                    Bespoke Notes / Measurement Details
                  </label>
                  <textarea
                    id="custom-notes"
                    rows={3}
                    placeholder="Specific lapel width preferences, wedding/gala date, or bespoke shoulder construction..."
                    className={styles.formTextarea}
                  />
                </div>

                <div className={styles.formActions}>
                  <button type="submit" className={styles.submitBtn}>
                    <Sparkles size={14} />
                    <span>Confirm Consultation Request</span>
                  </button>
                  <span className={styles.formDisclaimer}>
                    Complimentary private concierge. No obligation to purchase.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
