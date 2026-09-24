"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/data/products";
import { COLLECTIONS } from "@/data/collections";
import { useCommerce } from "@/context/CommerceContext";
import { ProductCard } from "./CatalogView";
import styles from "./NewArrivalsView.module.css";

const titleCase = (s: string) => s.charAt(0) + s.slice(1).toLowerCase();

/**
 * New arrivals, organised as "drops": one section per live (non-archive)
 * collection, each with its pieces. Grouping is data-driven, so new
 * products land in the right drop automatically.
 */
export const NewArrivalsView: React.FC = () => {
  const { isInWishlist, toggleWishlist } = useCommerce();

  const drops = useMemo(
    () =>
      COLLECTIONS.filter((c) => c.status !== "Archive")
        .map((collection) => ({
          collection,
          pieces: PRODUCTS.filter((p) => p.collectionSlug === collection.slug),
        }))
        .filter((d) => d.pieces.length > 0),
    []
  );

  const pieceCount = drops.reduce((n, d) => n + d.pieces.length, 0);
  const limited = drops.flatMap((d) => d.pieces).filter((p) => p.editionLimit);

  return (
    <div className={styles.page}>
      {/* ==========================================================================
          Hero
          ========================================================================== */}
      <header className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/images/hero-editorial-dresscode.jpg"
            alt="NAVA SS26 campaign — three models in raw silk, bandgala and organza"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroScrim} />
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroTop}>
            <span className={styles.pill}>Just landed</span>
            <span>Season 2026</span>
          </div>

          <h1 className={styles.heroTitle}>
            <span className={styles.lineMask}>
              <span className={styles.line}>New</span>
            </span>
            <span className={styles.lineMask}>
              <span className={`${styles.line} ${styles.indent}`}>
                <em>arrivals</em>
              </span>
            </span>
          </h1>

          <div className={styles.heroBottom}>
            <p className={styles.heroLede}>
              The latest silhouettes from the atelier — released edition by edition, in limited runs.
            </p>
            <dl className={styles.heroStats}>
              <div>
                <dt>Pieces</dt>
                <dd>{String(pieceCount).padStart(2, "0")}</dd>
              </div>
              <div>
                <dt>Editions</dt>
                <dd>{String(drops.length).padStart(2, "0")}</dd>
              </div>
            </dl>
          </div>
        </div>
      </header>

      {/* ==========================================================================
          Edition index
          ========================================================================== */}
      <nav className={styles.index} aria-label="Editions in this release">
        <span className={styles.indexLabel}>In this release</span>
        <ol className={styles.indexList}>
          {drops.map(({ collection, pieces }) => (
            <li key={collection.slug}>
              <a href={`#drop-${collection.slug}`} className={styles.indexLink}>
                <span className={styles.indexCode}>{collection.code}</span>
                <span className={styles.indexName}>{titleCase(collection.title)}</span>
                <sup>{String(pieces.length).padStart(2, "0")}</sup>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* ==========================================================================
          Drops
          ========================================================================== */}
      {drops.map(({ collection, pieces }, i) => (
        <section
          key={collection.slug}
          id={`drop-${collection.slug}`}
          className={styles.drop}
          aria-labelledby={`drop-title-${collection.slug}`}
        >
          <aside className={styles.dropAside}>
            <div className={styles.dropSticky}>
              <span className={styles.dropNum} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={styles.dropCode} data-reveal>
                {collection.code} · {collection.season}
              </span>
              <h2 id={`drop-title-${collection.slug}`} className={styles.dropTitle} data-reveal>
                <em>{titleCase(collection.title)}</em>
              </h2>
              <span className={styles.status} data-status={collection.status} data-reveal>
                {collection.status}
              </span>
              <p className={styles.dropDesc} data-reveal>
                {collection.description}
              </p>
              <Link href={`/collections/${collection.slug}`} className={styles.textCta} data-reveal>
                Explore {titleCase(collection.title)}
              </Link>
            </div>
          </aside>

          <div className={styles.dropGrid}>
            {pieces.map((product, p) => (
              <ProductCard
                key={product.id}
                index={p}
                product={product}
                isWishlisted={isInWishlist(product.slug)}
                onToggleWishlist={() => toggleWishlist(product.slug)}
              />
            ))}
          </div>
        </section>
      ))}

      {/* ==========================================================================
          Limited editions
          ========================================================================== */}
      {limited.length > 0 && (
        <section className={styles.limited} aria-labelledby="limited-title">
          <div className={styles.limitedInner}>
            <div className={styles.limitedHead}>
              <span className={styles.eyebrowDark} data-reveal>
                Numbered pieces
              </span>
              <h2 id="limited-title" className={styles.limitedTitle} data-reveal="lines">
                <span className="line-mask">
                  <span>Limited</span>
                </span>
                <span className="line-mask">
                  <span>
                    <em>editions</em>
                  </span>
                </span>
              </h2>
              <p className={styles.limitedNote} data-reveal>
                Cut once, in small numbered runs. When an edition closes, it is not remade.
              </p>
            </div>

            <ul className={styles.limitedList}>
              {limited.map((p, i) => (
                <li key={p.id} data-reveal data-reveal-delay={String(i * 90)}>
                  <Link href={`/product/${p.slug}`} className={styles.limitedRow}>
                    <span className={styles.limitedThumb}>
                      <Image src={p.image} alt="" fill sizes="72px" className={styles.limitedImg} />
                    </span>
                    <span className={styles.limitedName}>{p.name}</span>
                    <span className={styles.limitedEdition}>Edition of {p.editionLimit}</span>
                    <span className={styles.limitedPrice}>{p.formattedPrice}</span>
                    <span className={styles.limitedArrow} aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ==========================================================================
          Closing
          ========================================================================== */}
      <section className={styles.closing}>
        <p className={styles.closingText} data-reveal>
          Looking for something <em>earlier?</em>
        </p>
        <div className={styles.closingLinks} data-reveal>
          <Link href="/shop" className={styles.textCta}>
            Shop all works
          </Link>
          <Link href="/collections" className={styles.textCta}>
            The collections archive
          </Link>
        </div>
      </section>
    </div>
  );
};
