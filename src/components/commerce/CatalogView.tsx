"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS, ProductItem } from "@/data/products";
import { useCommerce } from "@/context/CommerceContext";
import { SlidersHorizontal, X, Heart } from "lucide-react";
import styles from "./CatalogView.module.css";

type Category = "women" | "men" | "couture" | "accessories" | "all";
type Sort = "featured" | "price-asc" | "price-desc";

interface CatalogViewProps {
  initialCategory?: Category;
}

const CATEGORIES: { slug: Category; label: string; href: string }[] = [
  { slug: "all", label: "All works", href: "/shop" },
  { slug: "women", label: "Women", href: "/shop/women" },
  { slug: "men", label: "Men", href: "/shop/men" },
  { slug: "couture", label: "Couture", href: "/shop/couture" },
  { slug: "accessories", label: "Accessories", href: "/shop/accessories" },
];

/** Art direction per category */
const CATEGORY_DETAILS: Record<
  Category,
  { title: string; italic?: string; lede: string; image: string; imageAlt: string; position?: string }
> = {
  all: {
    title: "All",
    italic: "works",
    lede: "Contemporary silhouettes shaped by Pakistani craft and modern design — every piece in the house, in one place.",
    image: "/images/hero-campaign-dresscode.jpg",
    imageAlt: "Three NAVA looks in natural light",
    position: "center 30%",
  },
  women: {
    title: "Women",
    lede: "A restrained collection shaped by regional craft and modern construction — raw silk, organza, and Ajrak cut with quiet precision.",
    image: "/images/hero-couture.jpg",
    imageAlt: "Ivory tailored suit with geometric Zardozi lapels",
    position: "center 20%",
  },
  men: {
    title: "Men",
    lede: "Architectural tailoring, cut with restraint. Sherwani and bandgala in highland wool, finished by hand in Lahore and Swat.",
    image: "/images/hero-men.jpg",
    imageAlt: "Charcoal architectural sherwani in highland Swat wool",
    position: "center 20%",
  },
  couture: {
    title: "Couture",
    lede: "Hereditary needlework and ceremonial silhouettes — commissioned, embroidered and finished by master artisans.",
    image: "/images/craft-atelier.jpg",
    imageAlt: "A master artisan hand-embroidering Zardozi on crimson silk",
    position: "65% center",
  },
  accessories: {
    title: "Accessories",
    lede: "Hand-loomed pashmina and tactile regional accents, woven on wooden pit-looms in the Swat valley.",
    image: "/images/macro-ajrak.jpg",
    imageAlt: "Close detail of hand block-printed Ajrak",
  },
};

/** Bespoke invitation shown beneath each category */
const BESPOKE: Partial<Record<Category, { title: string; italic: string; body: string; cta: string }>> = {
  men: {
    title: "Bespoke",
    italic: "tailoring",
    body: "Sherwani and bandgala cut to your measurements in our Lahore atelier — fabric, fall and finish chosen with a master tailor.",
    cta: "Book a fitting",
  },
  women: {
    title: "Made to",
    italic: "measure",
    body: "Most pieces can be cut to your measurements. Visit the atelier or arrange a private consultation.",
    cta: "Arrange a consultation",
  },
  couture: {
    title: "Couture",
    italic: "commissions",
    body: "Ceremonial pieces are commissioned one at a time, from first sketch to final hand-finish.",
    cta: "Begin a commission",
  },
};

const CRAFT_OPTIONS = ["Sindh", "Zardozi", "Swat", "Knife Pleats"];
const FABRIC_OPTIONS = ["Silk", "Wool", "Cotton", "Linen", "Velvet", "Cashmere"];

const matchesCraft = (p: ProductItem, craft: string) =>
  craft === "all" ||
  p.craftProvenance.toLowerCase().includes(craft.toLowerCase()) ||
  p.craftRegion.toLowerCase().includes(craft.toLowerCase());

const matchesFabric = (p: ProductItem, fabric: string) =>
  fabric === "all" || p.fabric.toLowerCase().includes(fabric.toLowerCase());

export const CatalogView: React.FC<CatalogViewProps> = ({ initialCategory = "all" }) => {
  const { toggleWishlist, isInWishlist } = useCommerce();

  const activeCategory = initialCategory;
  const [selectedCraft, setSelectedCraft] = useState("all");
  const [selectedFabric, setSelectedFabric] = useState("all");
  const [sortBy, setSortBy] = useState<Sort>("featured");
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const details = CATEGORY_DETAILS[activeCategory];
  const bespoke = BESPOKE[activeCategory];

  const inCategory = useMemo(
    () => PRODUCTS.filter((p) => activeCategory === "all" || p.category === activeCategory),
    [activeCategory]
  );

  const filteredProducts = useMemo(() => {
    const list = inCategory.filter(
      (p) => matchesCraft(p, selectedCraft) && matchesFabric(p, selectedFabric)
    );
    if (sortBy === "price-asc") return [...list].sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") return [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [inCategory, selectedCraft, selectedFabric, sortBy]);

  // Faceted counts: only offer choices that return something in this category
  const craftCounts = useMemo(
    () =>
      Object.fromEntries(
        CRAFT_OPTIONS.map((c) => [
          c,
          inCategory.filter((p) => matchesCraft(p, c) && matchesFabric(p, selectedFabric)).length,
        ])
      ),
    [inCategory, selectedFabric]
  );
  const fabricCounts = useMemo(
    () =>
      Object.fromEntries(
        FABRIC_OPTIONS.map((f) => [
          f,
          inCategory.filter((p) => matchesFabric(p, f) && matchesCraft(p, selectedCraft)).length,
        ])
      ),
    [inCategory, selectedCraft]
  );

  const quickChips = CRAFT_OPTIONS.filter((c) => craftCounts[c] > 0);
  const showFilters = inCategory.length > 1;

  const categoryCounts = useMemo(
    () =>
      Object.fromEntries(
        CATEGORIES.map((c) => [
          c.slug,
          c.slug === "all" ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === c.slug).length,
        ])
      ),
    []
  );

  // The category's own detail photography: every gallery view (all colours) that is
  // not already a card's lead image, one product at a time so no piece fills the row
  const inDetail = useMemo(() => {
    if (activeCategory === "all") return [];
    const leads = new Set(inCategory.map((p) => p.image));
    const seen = new Set<string>();
    const perProduct = inCategory.map((product) =>
      [product.gallery, ...product.colors.map((c) => c.gallery ?? [])]
        .flat()
        .filter((g) => !leads.has(g.url) && !seen.has(g.url) && seen.add(g.url))
        .map((view) => ({ product, view }))
    );
    const views: { product: ProductItem; view: ProductItem["gallery"][number] }[] = [];
    for (let i = 0; views.length < LOOKBOOK_SIZE && perProduct.some((l) => l[i]); i++) {
      for (const list of perProduct) if (list[i] && views.length < LOOKBOOK_SIZE) views.push(list[i]);
    }
    return views;
  }, [activeCategory, inCategory]);

  // Pieces from elsewhere in the house, for sparse categories without enough of their own
  const alsoFromAtelier = useMemo(
    () =>
      activeCategory === "all" || inDetail.length >= LOOKBOOK_SIZE
        ? []
        : PRODUCTS.filter((p) => p.category !== activeCategory).slice(0, 4),
    [activeCategory, inDetail]
  );

  const activeFilterCount = (selectedCraft !== "all" ? 1 : 0) + (selectedFabric !== "all" ? 1 : 0);

  const resetFilters = () => {
    setSelectedCraft("all");
    setSelectedFabric("all");
  };

  // Drawer: Escape to close, freeze the page behind it
  useEffect(() => {
    if (!isFilterDrawerOpen) return;
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsFilterDrawerOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isFilterDrawerOpen]);

  const single = filteredProducts.length === 1 ? filteredProducts[0] : null;

  return (
    <div className={styles.catalogWrapper}>
      {/* ==========================================================================
          Category hero
          ========================================================================== */}
      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <nav className={styles.crumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            {activeCategory === "all" ? <span>Shop</span> : <Link href="/shop">Shop</Link>}
          </nav>

          <h1 className={styles.heroTitle}>
            <span className={styles.lineMask}>
              <span className={styles.line}>
                {details.italic ? details.title : <em>{details.title}</em>}
              </span>
            </span>
            {details.italic && (
              <span className={styles.lineMask}>
                <span className={`${styles.line} ${styles.lineIndent}`}>
                  <em>{details.italic}</em>
                </span>
              </span>
            )}
          </h1>

          <div className={styles.heroFoot}>
            <p className={styles.heroLede}>{details.lede}</p>
            <div className={styles.heroCount}>
              <span className={styles.heroCountNum}>{String(inCategory.length).padStart(2, "0")}</span>
              <span className={styles.heroCountLabel}>
                {inCategory.length === 1 ? "Piece" : "Pieces"} · SS26
              </span>
            </div>
          </div>
        </div>

        <div className={styles.heroMedia}>
          <Image
            src={details.image}
            alt={details.imageAlt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 45vw"
            className={styles.heroImage}
            style={{ objectPosition: details.position ?? "center" }}
          />
        </div>
      </header>

      {/* ==========================================================================
          Category tabs + controls
          ========================================================================== */}
      <div className={styles.controlsBar}>
        <div className={styles.controlsInner}>
          <nav className={styles.categoryTabs} aria-label="Categories">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={cat.href}
                className={[styles.categoryTab, activeCategory === cat.slug ? styles.tabActive : ""]
                  .filter(Boolean)
                  .join(" ")}
                aria-current={activeCategory === cat.slug ? "page" : undefined}
              >
                {cat.label}
                <sup>{String(categoryCounts[cat.slug]).padStart(2, "0")}</sup>
              </Link>
            ))}
          </nav>

          {showFilters && (
            <div className={styles.controlsRight}>
              <div className={styles.quickChips}>
                {quickChips.map((craft) => (
                  <button
                    key={craft}
                    type="button"
                    className={[styles.quickChip, selectedCraft === craft ? styles.chipActive : ""]
                      .filter(Boolean)
                      .join(" ")}
                    aria-pressed={selectedCraft === craft}
                    onClick={() => setSelectedCraft(selectedCraft === craft ? "all" : craft)}
                  >
                    {craft}
                  </button>
                ))}
              </div>

              <button
                type="button"
                className={styles.filterToggleBtn}
                onClick={() => setIsFilterDrawerOpen(true)}
                aria-haspopup="dialog"
              >
                <SlidersHorizontal size={13} strokeWidth={1.5} />
                <span>Filter</span>
                {activeFilterCount > 0 && <span className={styles.filterCountBadge}>{activeFilterCount}</span>}
              </button>

              <label className={styles.sortWrap}>
                <span className={styles.srOnly}>Sort pieces</span>
                <select
                  className={styles.sortSelect}
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as Sort)}
                >
                  <option value="featured">Sort: Featured</option>
                  <option value="price-asc">Price: Low to high</option>
                  <option value="price-desc">Price: High to low</option>
                </select>
              </label>
            </div>
          )}
        </div>
      </div>

      {activeFilterCount > 0 && (
        <div className={styles.activeFiltersRow}>
          <span className={styles.activeFilterLabel}>
            {filteredProducts.length} of {inCategory.length}
          </span>
          {selectedCraft !== "all" && (
            <button type="button" className={styles.activeChip} onClick={() => setSelectedCraft("all")}>
              {selectedCraft} <X size={11} />
            </button>
          )}
          {selectedFabric !== "all" && (
            <button type="button" className={styles.activeChip} onClick={() => setSelectedFabric("all")}>
              {selectedFabric} <X size={11} />
            </button>
          )}
          <button type="button" className={styles.resetAllBtn} onClick={resetFilters}>
            Clear all
          </button>
        </div>
      )}

      {/* ==========================================================================
          Products
          ========================================================================== */}
      <section className={styles.gridSection} aria-label="Pieces">
        {filteredProducts.length === 0 ? (
          <div className={styles.emptyState}>
            <p className={styles.emptyTitle}>
              No pieces match <em>these filters.</em>
            </p>
            <button type="button" className={styles.textCta} onClick={resetFilters}>
              Clear all filters
            </button>
          </div>
        ) : single ? (
          <FeaturedPiece
            product={single}
            isWishlisted={isInWishlist(single.slug)}
            onToggleWishlist={() => toggleWishlist(single.slug)}
          />
        ) : (
          <div
            className={[styles.galleryGrid, filteredProducts.length <= 3 ? styles.gridSparse : ""]
              .filter(Boolean)
              .join(" ")}
          >
            {filteredProducts.map((product, i) => (
              <ProductCard
                key={product.id}
                index={i}
                product={product}
                isWishlisted={isInWishlist(product.slug)}
                onToggleWishlist={() => toggleWishlist(product.slug)}
              />
            ))}
            {/* Fill an incomplete last row (4-column layout) with an editorial tile */}
            {filteredProducts.length > 3 && filteredProducts.length % 4 !== 0 && (
              <EditorialTile span={4 - (filteredProducts.length % 4)} />
            )}
          </div>
        )}
      </section>

      {/* ==========================================================================
          Bespoke band
          ========================================================================== */}
      {bespoke && (
        <section className={styles.bespoke} aria-labelledby="bespoke-title">
          <div className={styles.bespokeInner}>
            <h2 id="bespoke-title" className={styles.bespokeTitle} data-reveal="lines">
              <span className="line-mask">
                <span>{bespoke.title}</span>
              </span>
              <span className="line-mask">
                <span>
                  <em>{bespoke.italic}</em>
                </span>
              </span>
            </h2>
            <div className={styles.bespokeBody} data-reveal>
              <p>{bespoke.body}</p>
              <div className={styles.bespokeActions}>
                <Link href="/contact" className={styles.bespokeCta}>
                  <span>{bespoke.cta}</span>
                  <span className={styles.ctaArrow} aria-hidden="true">
                    →
                  </span>
                </Link>
                <Link href="/size-guide" className={styles.bespokeLink}>
                  Size guide
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ==========================================================================
          The pieces, in detail — the category's own photography
          ========================================================================== */}
      {inDetail.length >= LOOKBOOK_SIZE && (
        <section className={styles.also} aria-labelledby="detail-title">
          <div className={styles.alsoHead}>
            <h2 id="detail-title" className={styles.alsoTitle} data-reveal>
              The pieces, <em>in detail</em>
            </h2>
            <Link href="/shop" className={styles.textCta} data-reveal>
              View all works
            </Link>
          </div>
          <div className={styles.galleryGrid}>
            {inDetail.map(({ product, view }, i) => (
              <figure
                key={view.url}
                className={styles.productCard}
                data-reveal
                data-reveal-delay={String((i % 4) * 90)}
              >
                <div className={styles.cardImageFrame} data-cursor="view">
                  <Link
                    href={`/product/${product.slug}`}
                    className={styles.cardImageLink}
                    aria-label={`${product.name} — ${view.caption}`}
                  >
                    <Image
                      src={view.url}
                      alt={view.alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className={styles.cardImage}
                    />
                  </Link>
                </div>
                <figcaption className={styles.cardMeta}>
                  <span className={styles.cardTitle}>{view.caption}</span>
                  <span className={styles.cardMetaLine}>{product.name}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* ==========================================================================
          Also from the atelier
          ========================================================================== */}
      {alsoFromAtelier.length > 0 && (
        <section className={styles.also} aria-labelledby="also-title">
          <div className={styles.alsoHead}>
            <h2 id="also-title" className={styles.alsoTitle} data-reveal>
              Also from <em>the atelier</em>
            </h2>
            <Link href="/shop" className={styles.textCta} data-reveal>
              View all works
            </Link>
          </div>
          <div className={styles.galleryGrid}>
            {alsoFromAtelier.map((product, i) => (
              <ProductCard
                key={product.id}
                index={i}
                product={product}
                isWishlisted={isInWishlist(product.slug)}
                onToggleWishlist={() => toggleWishlist(product.slug)}
              />
            ))}
          </div>
        </section>
      )}

      {activeCategory === "all" && <ShopByCategory counts={categoryCounts} />}

      {/* ==========================================================================
          Filter drawer
          ========================================================================== */}
      {isFilterDrawerOpen && (
        <div className={styles.filterOverlay} onClick={() => setIsFilterDrawerOpen(false)} data-lenis-prevent>
          <div
            className={styles.filterDrawer}
            role="dialog"
            aria-modal="true"
            aria-labelledby="filter-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.filterHeader}>
              <h2 id="filter-title" className={styles.drawerTitle}>
                Refine <em>pieces</em>
              </h2>
              <button
                type="button"
                className={styles.filterClose}
                onClick={() => setIsFilterDrawerOpen(false)}
                aria-label="Close filters"
                autoFocus
              >
                <X size={18} strokeWidth={1.4} />
              </button>
            </div>

            <div className={styles.filterBody}>
              <FilterGroup
                title="Craft technique"
                allLabel="All techniques"
                options={CRAFT_OPTIONS}
                counts={craftCounts}
                selected={selectedCraft}
                onSelect={setSelectedCraft}
              />
              <FilterGroup
                title="Fabric"
                allLabel="All fabrics"
                options={FABRIC_OPTIONS}
                counts={fabricCounts}
                selected={selectedFabric}
                onSelect={setSelectedFabric}
              />
            </div>

            <div className={styles.filterFooter}>
              <button type="button" className={styles.resetDrawerBtn} onClick={resetFilters}>
                Reset
              </button>
              <button type="button" className={styles.applyBtn} onClick={() => setIsFilterDrawerOpen(false)}>
                View {filteredProducts.length} {filteredProducts.length === 1 ? "piece" : "pieces"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* ==========================================================================
   Filter group
   ========================================================================== */
const FilterGroup: React.FC<{
  title: string;
  allLabel: string;
  options: string[];
  counts: Record<string, number>;
  selected: string;
  onSelect: (v: string) => void;
}> = ({ title, allLabel, options, counts, selected, onSelect }) => (
  <fieldset className={styles.filterSection}>
    <legend className={styles.filterSectionTitle}>{title}</legend>
    <div className={styles.filterOptions}>
      {["all", ...options].map((opt) => {
        const count = opt === "all" ? null : counts[opt];
        const disabled = count === 0 && selected !== opt;
        return (
          <button
            key={opt}
            type="button"
            disabled={disabled}
            aria-pressed={selected === opt}
            className={[styles.filterOptionBtn, selected === opt ? styles.optionActive : ""]
              .filter(Boolean)
              .join(" ")}
            onClick={() => onSelect(opt)}
          >
            {opt === "all" ? allLabel : opt}
            {count !== null && <span className={styles.optionCount}>{count}</span>}
          </button>
        );
      })}
    </div>
  </fieldset>
);

/* ==========================================================================
   Single-piece editorial spread
   ========================================================================== */
const FeaturedPiece: React.FC<{
  product: ProductItem;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
}> = ({ product, isWishlisted, onToggleWishlist }) => {
  const detail = product.gallery.find((g) => g.url !== product.image);

  return (
    <article className={styles.featured}>
      <Link
        href={`/product/${product.slug}`}
        className={styles.featuredMain}
        data-cursor="shop"
        data-reveal="clip"
        tabIndex={-1}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          className={styles.featuredImage}
        />
        {product.badge && <span className={styles.cardBadge}>{product.badge}</span>}
      </Link>

      <div className={styles.featuredBody}>
        <span className={styles.featuredEyebrow} data-reveal>
          {product.collection}
        </span>
        <h2 className={styles.featuredTitle} data-reveal>
          <Link href={`/product/${product.slug}`}>{product.name}</Link>
        </h2>
        <p className={styles.featuredPrice} data-reveal>
          {product.formattedPrice}
        </p>
        <p className={styles.featuredDesc} data-reveal>
          {product.description}
        </p>

        <dl className={styles.featuredFacts} data-reveal>
          <div>
            <dt>Fabric</dt>
            <dd>{product.fabric}</dd>
          </div>
          <div>
            <dt>Craft</dt>
            <dd>{product.craftProvenance}</dd>
          </div>
          <div>
            <dt>Atelier</dt>
            <dd>{product.craftRegion}</dd>
          </div>
          <div>
            <dt>Lead time</dt>
            <dd>{product.leadTime}</dd>
          </div>
        </dl>

        <div className={styles.featuredActions} data-reveal>
          <Link href={`/product/${product.slug}`} className={styles.bespokeCta}>
            <span>View the piece</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              →
            </span>
          </Link>
          <button
            type="button"
            className={[styles.featuredWish, isWishlisted ? styles.wishlistActive : ""].filter(Boolean).join(" ")}
            onClick={onToggleWishlist}
            aria-pressed={isWishlisted}
            aria-label={isWishlisted ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
          >
            <Heart size={16} strokeWidth={1.4} fill={isWishlisted ? "currentColor" : "none"} />
          </button>
        </div>

        {detail && (
          <Link href={`/product/${product.slug}`} className={styles.featuredDetail} data-reveal="clip" tabIndex={-1}>
            <Image src={detail.url} alt={detail.alt} fill sizes="240px" className={styles.featuredImage} />
          </Link>
        )}
      </div>
    </article>
  );
};

/* ==========================================================================
   Product card
   ========================================================================== */
interface ProductCardProps {
  product: ProductItem;
  index: number;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
}

const LOOKBOOK_SIZE = 4;

export const ProductCard: React.FC<ProductCardProps> = ({ product, index, isWishlisted, onToggleWishlist }) => {
  const alt = product.gallery.find((g) => g.url !== product.image);

  return (
    <article className={styles.productCard} data-reveal data-reveal-delay={String((index % 4) * 90)}>
      <div className={styles.cardImageFrame} data-cursor="shop">
        <Link href={`/product/${product.slug}`} className={styles.cardImageLink} tabIndex={-1}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
            className={styles.cardImage}
          />
          {alt && (
            <Image
              src={alt.url}
              alt=""
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
              className={`${styles.cardImage} ${styles.cardImageAlt}`}
            />
          )}
        </Link>

        {product.badge && <span className={styles.cardBadge}>{product.badge}</span>}

        <button
          type="button"
          className={[styles.wishlistBtn, isWishlisted ? styles.wishlistActive : ""].filter(Boolean).join(" ")}
          onClick={onToggleWishlist}
          aria-pressed={isWishlisted}
          aria-label={isWishlisted ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
        >
          <Heart size={14} strokeWidth={1.4} fill={isWishlisted ? "currentColor" : "none"} />
        </button>
      </div>

      <div className={styles.cardMeta}>
        <div className={styles.cardTop}>
          <h3 className={styles.cardTitle}>
            <Link href={`/product/${product.slug}`}>{product.name}</Link>
          </h3>
          <span className={styles.cardPrice}>{product.formattedPrice}</span>
        </div>
        <span className={styles.cardMetaLine}>
          {product.collection.split("—")[0].trim()} · {product.fabric.split("&")[0].trim()}
        </span>
      </div>
    </article>
  );
};

/* ==========================================================================
   Editorial tile — fills the empty end of a grid row
   ========================================================================== */
const EditorialTile: React.FC<{ span: number }> = ({ span }) => (
  <Link
    href="/craft"
    className={styles.editorialTile}
    style={{ "--span": span } as React.CSSProperties}
    data-cursor="explore"
    data-reveal
  >
    <Image
      src="/images/craft-atelier.jpg"
      alt="A master artisan hand-embroidering Zardozi on crimson silk"
      fill
      sizes="(max-width: 1024px) 100vw, 50vw"
      className={styles.editorialImage}
    />
    <span className={styles.editorialScrim} />
    <span className={styles.editorialCopy}>
      <span className={styles.editorialEyebrow}>The atelier</span>
      <span className={styles.editorialTitle}>
        Every piece carries <em>its lineage.</em>
      </span>
      <span className={styles.editorialLink}>Discover the craft →</span>
    </span>
  </Link>
);

/* ==========================================================================
   Shop by category — closes the full catalogue
   ========================================================================== */
const ShopByCategory: React.FC<{ counts: Record<string, number> }> = ({ counts }) => (
  <section className={styles.categories} aria-labelledby="by-category">
    <h2 id="by-category" className={styles.alsoTitle} data-reveal>
      Shop by <em>category</em>
    </h2>
    <div className={styles.categoryGrid}>
      {CATEGORIES.filter((c) => c.slug !== "all").map((c, i) => (
        <Link
          key={c.slug}
          href={c.href}
          className={styles.categoryTile}
          data-cursor="explore"
          data-reveal
          data-reveal-delay={String(i * 90)}
        >
          <Image
            src={CATEGORY_DETAILS[c.slug].image}
            alt=""
            fill
            sizes="(max-width: 900px) 50vw, 25vw"
            className={styles.categoryImage}
            style={{ objectPosition: CATEGORY_DETAILS[c.slug].position ?? "center" }}
          />
          <span className={styles.categoryScrim} />
          <span className={styles.categoryLabel}>
            {c.label}
            <sup>{String(counts[c.slug]).padStart(2, "0")}</sup>
          </span>
        </Link>
      ))}
    </div>
  </section>
);
