"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/data/products";
import { useCommerce } from "@/context/CommerceContext";
import { Heart } from "lucide-react";
import styles from "./SelectedPieces.module.css";

// Four pieces that carry the house silhouette
const GALLERY_PIECES = PRODUCTS.slice(0, 4);

export const SelectedPieces: React.FC = () => {
  const { isInWishlist, toggleWishlist } = useCommerce();

  return (
    <section className={styles.section} aria-labelledby="selected-pieces">
      <header className={styles.header}>
        <div>
          <span className={styles.eyebrow} data-reveal>
            <span className={styles.index}>(02)</span> Spring / Summer 2026
          </span>
          <h2 id="selected-pieces" className={styles.title} data-reveal="lines">
            <span className="line-mask">
              <span>Selected</span>
            </span>
            <span className="line-mask">
              <span>
                <em>pieces</em> <sup className={styles.count}>({GALLERY_PIECES.length})</sup>
              </span>
            </span>
          </h2>
        </div>
        <Link href="/shop" className={styles.viewAll} data-reveal>
          View all works <span aria-hidden="true">→</span>
        </Link>
      </header>

      <div className={styles.grid}>
        {GALLERY_PIECES.map((prod, i) => {
          const saved = isInWishlist(prod.slug);
          const alt = prod.gallery.find((g) => g.url !== prod.image);

          return (
            <article
              key={prod.id}
              className={styles.item}
              data-reveal
              data-reveal-delay={String(i * 110)}
            >
              <div className={styles.imageWrap} data-cursor="shop">
                <Link href={`/product/${prod.slug}`} className={styles.imageLink} tabIndex={-1}>
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className={styles.image}
                  />
                  {alt && (
                    <Image
                      src={alt.url}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className={`${styles.image} ${styles.imageAlt}`}
                    />
                  )}
                </Link>

                <span className={styles.number}>{String(i + 1).padStart(2, "0")}</span>

                <button
                  type="button"
                  className={[styles.wishlistBtn, saved ? styles.wishlisted : ""]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => toggleWishlist(prod.slug)}
                  aria-label={saved ? `Remove ${prod.name} from wishlist` : `Save ${prod.name} to wishlist`}
                  aria-pressed={saved}
                >
                  <Heart size={14} strokeWidth={1.4} fill={saved ? "currentColor" : "none"} />
                </button>

                <span className={styles.quick} aria-hidden="true">
                  {prod.leadTime}
                </span>
              </div>

              <div className={styles.meta}>
                <div className={styles.metaTop}>
                  <h3 className={styles.name}>
                    <Link href={`/product/${prod.slug}`}>{prod.name}</Link>
                  </h3>
                  <span className={styles.price}>{prod.formattedPrice}</span>
                </div>
                <span className={styles.detail}>
                  {prod.collection.split("—")[0].trim()} · {prod.craftRegion}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
