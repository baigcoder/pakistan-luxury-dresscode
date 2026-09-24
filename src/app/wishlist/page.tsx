"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCommerce } from "@/context/CommerceContext";
import { PRODUCTS, ProductItem } from "@/data/products";
import { ProductCard } from "@/components/commerce/CatalogView";
import { X, ShoppingBag } from "lucide-react";
import styles from "./page.module.css";

export default function WishlistPage() {
  const { wishlist, toggleWishlist, isInWishlist, addToBag, openCartDrawer } = useCommerce();

  const saved = PRODUCTS.filter((p) => wishlist.includes(p.slug));
  const suggestions = PRODUCTS.filter((p) => !wishlist.includes(p.slug)).slice(0, 4);

  // "Move" means it leaves the wishlist and lands in the bag
  const moveToBag = (product: ProductItem) => {
    addToBag(product);
    toggleWishlist(product.slug);
  };

  const moveAllToBag = () => {
    saved.forEach(moveToBag);
    openCartDrawer();
  };

  return (
    <div className={styles.page}>
      {/* ==========================================================================
          Header
          ========================================================================== */}
      <header className={styles.header}>
        <div>
          <span className={styles.eyebrow}>Your wishlist</span>
          <h1 className={styles.title}>
            <span className={styles.lineMask}>
              <span className={styles.line}>
                Saved <em>pieces</em>
              </span>
            </span>
          </h1>
        </div>

        <div className={styles.headerAside}>
          <div className={styles.count} aria-live="polite">
            <span className={styles.countNum}>{String(saved.length).padStart(2, "0")}</span>
            <span className={styles.countLabel}>{saved.length === 1 ? "Piece saved" : "Pieces saved"}</span>
          </div>
          {saved.length > 1 && (
            <button type="button" className={styles.moveAll} onClick={moveAllToBag}>
              <ShoppingBag size={14} strokeWidth={1.5} />
              Move all to bag
            </button>
          )}
        </div>
      </header>

      {saved.length === 0 ? (
        /* ==========================================================================
           Empty
           ========================================================================== */
        <section className={styles.empty} aria-labelledby="empty-title">
          <div className={styles.emptyCopy}>
            <h2 id="empty-title" className={styles.emptyTitle}>
              Nothing saved <em>yet.</em>
            </h2>
            <p className={styles.emptyText}>
              Tap the heart on any piece to keep it here — to revisit, compare, or commission later.
            </p>
            <div className={styles.emptyActions}>
              <Link href="/new" className={styles.primaryCta}>
                <span>Shop new arrivals</span>
                <span className={styles.ctaArrow} aria-hidden="true">
                  →
                </span>
              </Link>
              <Link href="/collections" className={styles.textCta}>
                Explore collections
              </Link>
            </div>
          </div>

          <div className={styles.startWith}>
            <h3 className={styles.sectionLabel}>Start with these</h3>
            <div className={styles.suggestGrid}>
              {suggestions.slice(0, 3).map((p, i) => (
                <ProductCard
                  key={p.id}
                  index={i}
                  product={p}
                  isWishlisted={isInWishlist(p.slug)}
                  onToggleWishlist={() => toggleWishlist(p.slug)}
                />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* ==========================================================================
              Saved grid
              ========================================================================== */}
          <section className={styles.grid} aria-label="Saved pieces">
            {saved.map((product) => (
              <article key={product.id} className={styles.card}>
                <div className={styles.imageFrame}>
                  <Link href={`/product/${product.slug}`} tabIndex={-1} data-cursor="view">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className={styles.image}
                    />
                  </Link>
                  <button
                    type="button"
                    className={styles.removeBtn}
                    onClick={() => toggleWishlist(product.slug)}
                    aria-label={`Remove ${product.name} from wishlist`}
                  >
                    <X size={15} strokeWidth={1.4} />
                  </button>
                  {product.badge && <span className={styles.badge}>{product.badge}</span>}
                </div>

                <div className={styles.meta}>
                  <span className={styles.collection}>{product.collection}</span>
                  <div className={styles.metaTop}>
                    <h2 className={styles.cardTitle}>
                      <Link href={`/product/${product.slug}`}>{product.name}</Link>
                    </h2>
                    <span className={styles.cardPrice}>{product.formattedPrice}</span>
                  </div>
                  <span className={styles.leadTime}>{product.leadTime}</span>

                  <div className={styles.actions}>
                    <button type="button" className={styles.moveBtn} onClick={() => moveToBag(product)}>
                      <ShoppingBag size={13} strokeWidth={1.5} />
                      Move to bag
                    </button>
                    <Link href={`/product/${product.slug}`} className={styles.textCta}>
                      View
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </section>

          {suggestions.length > 0 && (
            <section className={styles.also} aria-labelledby="also-title">
              <h2 id="also-title" className={styles.alsoTitle}>
                You may <em>also like</em>
              </h2>
              <div className={styles.alsoGrid}>
                {suggestions.map((p, i) => (
                  <ProductCard
                    key={p.id}
                    index={i}
                    product={p}
                    isWishlisted={isInWishlist(p.slug)}
                    onToggleWishlist={() => toggleWishlist(p.slug)}
                  />
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}
