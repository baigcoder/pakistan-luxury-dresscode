"use client";

import React, { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ProductItem, PRODUCTS } from "@/data/products";
import { useCommerce } from "@/context/CommerceContext";
import { Badge, Button, HairlineDivider } from "@/components/ui";
import {
  Heart,
  ShoppingBag,
  Check,
  Ruler,
  ChevronDown,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  ZoomIn,
} from "lucide-react";
import { SizeGuideDialog } from "./SizeGuideDialog";
import styles from "./ProductDetailView.module.css";

interface ProductDetailViewProps {
  product: ProductItem;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({ product }) => {
  const { addToBag, toggleWishlist, isInWishlist } = useCommerce();

  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || "");
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || "Standard");
  const [isAdded, setIsAdded] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>("fabric");
  const [showSizeModal, setShowSizeModal] = useState(false);
  const closeSizeGuide = useCallback(() => setShowSizeModal(false), []);
  // One-size pieces (capes, shawls) have no chart to show
  const hasSizeChart = product.category === "women" || product.category === "men";

  const isWishlisted = isInWishlist(product.slug);

  // Active color option
  const activeColorObj = useMemo(() => {
    return product.colors.find((c) => c.name === selectedColor) || product.colors[0];
  }, [product.colors, selectedColor]);

  // Gallery changes dynamically based on selected color variant
  const activeGallery = useMemo(() => {
    if (activeColorObj?.gallery && activeColorObj.gallery.length > 0) {
      return activeColorObj.gallery;
    }
    if (activeColorObj?.image) {
      const rest = product.gallery.filter((g) => g.url !== activeColorObj.image);
      return [
        {
          url: activeColorObj.image,
          alt: `${product.name} in ${activeColorObj.name}`,
          caption: `${product.name} — ${activeColorObj.name}`,
        },
        ...rest,
      ];
    }
    return product.gallery;
  }, [activeColorObj, product.gallery, product.name]);

  const currentMedia = activeGallery[activeMediaIndex] || activeGallery[0] || product.gallery[0];

  const handleAdd = () => {
    addToBag(product, selectedSize, 1, selectedColor);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const toggleAccordion = (key: string) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  // Related products
  const relatedProducts = PRODUCTS.filter(
    (p) => product.relatedSlugs?.includes(p.slug) || (p.category === product.category && p.id !== product.id)
  ).slice(0, 3);

  return (
    <div className={styles.pageWrapper}>
      {/* ==========================================================================
          Main Split: Left Oversized Gallery, Right Purchase Panel
          ========================================================================== */}
      <div className="container-max" style={{ paddingTop: "var(--space-2xl)", paddingBottom: "var(--space-4xl)" }}>
        {/* Breadcrumb row */}
        <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
          <Link href="/">Home</Link>
          <span className={styles.crumbDivider}>/</span>
          <Link href="/shop">Shop</Link>
          <span className={styles.crumbDivider}>/</span>
          <Link href={`/shop/${product.category}`}>{product.category}</Link>
          <span className={styles.crumbDivider}>/</span>
          <span className={styles.crumbCurrent}>{product.name}</span>
        </nav>

        <div className={styles.splitGrid}>
          {/* ==========================================================================
              Left Column: Oversized Multi-Angle Gallery
              ========================================================================== */}
          <div className={styles.galleryColumn}>
            {/* Main Stage Image */}
            <div
              className={`${styles.mainStage} ${isZoomed ? styles.zoomed : ""}`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <Image
                key={`${selectedColor}-${activeMediaIndex}-${currentMedia.url}`}
                src={currentMedia.url}
                alt={currentMedia.alt}
                fill
                priority
                quality={90}
                sizes="(max-width: 1024px) 100vw, 55vw"
                className={styles.stageImage}
              />

              {product.badge && (
                <div className={styles.badgeWrap}>
                  <Badge variant="dark">{product.badge}</Badge>
                </div>
              )}

              <button
                type="button"
                className={styles.zoomBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsZoomed(!isZoomed);
                }}
                aria-label={isZoomed ? "Reset zoom" : "Inspect close-up weave"}
              >
                <ZoomIn size={16} />
                <span>{isZoomed ? "1.0X" : "LENS"}</span>
              </button>
            </div>

            {currentMedia.caption && (
              <div className={styles.mediaCaption}>
                <span className="metadata">{currentMedia.caption}</span>
              </div>
            )}

            {/* Thumbnails Row */}
            {activeGallery.length > 1 && (
              <div className={styles.thumbnailsRow}>
                {activeGallery.map((media, idx) => (
                  <button
                    key={`${selectedColor}-${media.url}-${idx}`}
                    type="button"
                    className={[
                      styles.thumbBtn,
                      activeMediaIndex === idx ? styles.thumbActive : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() => {
                      setActiveMediaIndex(idx);
                      setIsZoomed(false);
                    }}
                    aria-label={`View angle ${idx + 1}`}
                  >
                    <Image
                      src={media.url}
                      alt={media.alt}
                      fill
                      sizes="80px"
                      className={styles.thumbImage}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ==========================================================================
              Right Column: Sticky Acquisition & Provenance Panel
              ========================================================================== */}
          <div className={styles.infoColumn}>
            <div className={styles.stickyPanel}>
              {/* Collection Code & Title */}
              <div className={styles.titleBlock}>
                <span className="metadata">{product.collection}</span>
                <h1 className={`${styles.productTitle} heading-1`}>
                  {product.name}
                </h1>
                <div className={styles.priceRow}>
                  <span className={styles.price}>{product.formattedPrice}</span>
                  <span className={styles.taxNote}>VAT & Duties Included</span>
                </div>
              </div>

              {/* Cultural Provenance Chip */}
              <div className={styles.provenancePill}>
                <span className="provenance-tag">REGIONAL PROVENANCE</span>
                <p className={styles.provenanceText}>
                  {product.craftProvenance} &mdash; <em>{product.craftRegion}</em>
                </p>
              </div>

              <HairlineDivider />

              {/* Color Swatches (if multiple) */}
              {product.colors.length > 0 && (
                <div className={styles.optionSection}>
                  <div className={styles.optionHeader}>
                    <span className="metadata">PALETTE / NATURAL DYE</span>
                    <span className={styles.optionSelected}>{selectedColor}</span>
                  </div>
                  <div className={styles.colorSwatches}>
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        type="button"
                        className={[
                          styles.swatchBtn,
                          selectedColor === color.name ? styles.swatchActive : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        style={{ backgroundColor: color.hex }}
                        onClick={() => {
                          setSelectedColor(color.name);
                          setActiveMediaIndex(0);
                          setIsZoomed(false);
                        }}
                        aria-label={`Select color ${color.name}`}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selector */}
              <div className={styles.optionSection}>
                <div className={styles.optionHeader}>
                  <span className="metadata">ARCHITECTURAL SIZING</span>
                  {hasSizeChart && (
                    <button
                      type="button"
                      className={styles.sizeGuideBtn}
                      onClick={() => setShowSizeModal(true)}
                      aria-haspopup="dialog"
                    >
                      <Ruler size={13} />
                      <span>Size Guide</span>
                    </button>
                  )}
                </div>

                <div className={styles.sizesGrid}>
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      className={[
                        styles.sizeBtn,
                        selectedSize === size ? styles.sizeActive : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Acquisition Action Buttons */}
              <div className={styles.actionBlock}>
                <button
                  type="button"
                  className={[
                    styles.acquireBtn,
                    isAdded ? styles.acquireAdded : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={handleAdd}
                >
                  {isAdded ? (
                    <>
                      <Check size={18} />
                      <span>ADDED TO BAG</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={18} />
                      <span>ACQUIRE PIECE &bull; {product.formattedPrice}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  className={[
                    styles.wishlistToggle,
                    isWishlisted ? styles.wishlisted : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => toggleWishlist(product.slug)}
                  aria-label={isWishlisted ? "Remove from wishlist" : "Save to wishlist"}
                >
                  <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
                </button>
              </div>

              {/* Lead Time & Shipping Notice */}
              <div className={styles.leadTimeNotice}>
                <ShieldCheck size={16} className={styles.noticeIcon} />
                <div>
                  <span className="metadata">{product.leadTime}</span>
                  <p className="body-small" style={{ marginTop: "2px" }}>
                    Complimentary insured atelier delivery worldwide.
                  </p>
                </div>
              </div>

              {/* Editorial Accordions */}
              <div className={styles.accordions}>
                {/* 01. Description & Narrative */}
                <div className={styles.accordionItem}>
                  <button
                    type="button"
                    className={styles.accordionHeader}
                    onClick={() => toggleAccordion("narrative")}
                    aria-expanded={openAccordion === "narrative"}
                  >
                    <span>01. EDITORIAL NARRATIVE</span>
                    <ChevronDown
                      size={16}
                      className={openAccordion === "narrative" ? styles.chevronOpen : ""}
                    />
                  </button>
                  {openAccordion === "narrative" && (
                    <div className={styles.accordionBody}>
                      <p className="body-regular">{product.longDescription}</p>
                    </div>
                  )}
                </div>

                {/* 02. Fiber & Craft Provenance */}
                <div className={styles.accordionItem}>
                  <button
                    type="button"
                    className={styles.accordionHeader}
                    onClick={() => toggleAccordion("fabric")}
                    aria-expanded={openAccordion === "fabric"}
                  >
                    <span>02. FIBER & CRAFT PROVENANCE</span>
                    <ChevronDown
                      size={16}
                      className={openAccordion === "fabric" ? styles.chevronOpen : ""}
                    />
                  </button>
                  {openAccordion === "fabric" && (
                    <div className={styles.accordionBody}>
                      <p className="body-regular">{product.craftDetails}</p>
                      <div style={{ marginTop: "12px" }}>
                        <span className="metadata">COMPOSITION: {product.fabric}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* 03. Silhouette & Fit Notes */}
                <div className={styles.accordionItem}>
                  <button
                    type="button"
                    className={styles.accordionHeader}
                    onClick={() => toggleAccordion("fit")}
                    aria-expanded={openAccordion === "fit"}
                  >
                    <span>03. SILHOUETTE & FIT SPECIFICATIONS</span>
                    <ChevronDown
                      size={16}
                      className={openAccordion === "fit" ? styles.chevronOpen : ""}
                    />
                  </button>
                  {openAccordion === "fit" && (
                    <div className={styles.accordionBody}>
                      <p className="body-regular">{product.fitNotes}</p>
                      <p className="body-small" style={{ marginTop: "8px" }}>
                        Silhouette: {product.silhouette}
                      </p>
                    </div>
                  )}
                </div>

                {/* 04. Garment Care & Longevity */}
                <div className={styles.accordionItem}>
                  <button
                    type="button"
                    className={styles.accordionHeader}
                    onClick={() => toggleAccordion("care")}
                    aria-expanded={openAccordion === "care"}
                  >
                    <span>04. GARMENT CARE & LONGEVITY</span>
                    <ChevronDown
                      size={16}
                      className={openAccordion === "care" ? styles.chevronOpen : ""}
                    />
                  </button>
                  {openAccordion === "care" && (
                    <div className={styles.accordionBody}>
                      <ul className={styles.careList}>
                        {product.careInstructions.map((instruction) => (
                          <li key={instruction} className="body-small">
                            &bull; {instruction}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================================================
          Below-the-Fold Craft Atelier Spotlight
          ========================================================================== */}
      <section className={styles.atelierSpotlight}>
        <div className="container-editorial">
          <div className={styles.spotlightCard}>
            <div className={styles.spotlightContent}>
              <span className="provenance-tag">The master atelier</span>
              <h2 className={`display-m ${styles.spotlightTitle}`} style={{ margin: "8px 0 16px" }}>
                Honouring <em>generational</em> hands.
              </h2>
              <p className="body-editorial" style={{ maxWidth: "560px", color: "var(--espresso)" }}>
                Each NAVA piece is registered with the artisan workshop where it was woven,
                dyed, and hand-stitched. We maintain an uncompromising commitment to fair
                artisan compensation, zero waste, and authentic cultural stewardship.
              </p>
              <div style={{ marginTop: "24px" }}>
                <Button variant="capsule" size="md" href="/craft" icon={<ArrowRight size={14} />}>
                  Read the craft register
                </Button>
              </div>
            </div>

            <div className={styles.spotlightImageWrapper}>
              <Image
                src="/images/craft-atelier.jpg"
                alt="Documentary atelier photography"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className={styles.spotlightImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          Related Pieces Recommendations
          ========================================================================== */}
      {relatedProducts.length > 0 && (
        <section className={styles.relatedSection}>
          <div className="container-max">
            <div className={styles.relatedHeader}>
              <span className="metadata">Coordinating silhouettes</span>
              <h2 className={`heading-2 ${styles.relatedHeading}`}>
                Curated <em>pairings</em>
              </h2>
            </div>

            <div className={styles.relatedGrid}>
              {relatedProducts.map((rel) => (
                <article key={rel.id} className={styles.relatedCard}>
                  <Link href={`/product/${rel.slug}`} className={styles.relatedLink}>
                    <div className={styles.relatedFrame}>
                      <Image
                        src={rel.image}
                        alt={rel.name}
                        fill
                        sizes="33vw"
                        className={styles.relatedImg}
                      />
                    </div>
                    <div className={styles.relatedMeta}>
                      <span className="metadata">{rel.collection}</span>
                      <h3 className={styles.relatedTitle}>{rel.name}</h3>
                      <span className={styles.relatedPrice}>{rel.formattedPrice}</span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <SizeGuideDialog
        open={showSizeModal}
        onClose={closeSizeGuide}
        category={product.category}
        selectedSize={selectedSize}
      />
    </div>
  );
};
