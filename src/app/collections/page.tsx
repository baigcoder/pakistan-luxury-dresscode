import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { COLLECTIONS } from "@/data/collections";
import { CollectionIndexList } from "@/components/editorial";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Archival Collections & Editions",
  description:
    "Explore the architectural collections of NAVA: FORM 01 NOOR, CIPHER 03 AJRAK, VEIL 04 RAAT, EDIT 02 MITTI, and LINE 05 KASHT.",
};

const titleCase = (s: string) => s.charAt(0) + s.slice(1).toLowerCase();

export default function CollectionsIndexPage() {
  const [featured] = COLLECTIONS;

  return (
    <div className={styles.page}>
      {/* ==========================================================================
          Header
          ========================================================================== */}
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <span className={styles.eyebrow}>The archive</span>
          <span className={styles.meta}>{String(COLLECTIONS.length).padStart(2, "0")} editions catalogued</span>
        </div>

        <h1 className={styles.title}>
          <span className={styles.lineMask}>
            <span className={styles.line}>Collec</span>
          </span>
          <span className={styles.lineMask}>
            <span className={`${styles.line} ${styles.indent}`}>
              <em>tions</em>
              <sup className={styles.count}>({COLLECTIONS.length})</sup>
            </span>
          </span>
        </h1>

        <p className={styles.lede}>
          Each collection is an architectural study — grounded in a single regional craft dialogue, a
          considered drape, and unconstructed luxury.
        </p>
      </header>

      {/* ==========================================================================
          Featured edition
          ========================================================================== */}
      <section className={styles.featured} aria-labelledby="featured-title">
        <Link
          href={`/collections/${featured.slug}`}
          className={styles.featuredMedia}
          data-reveal="clip"
          data-cursor="explore"
          tabIndex={-1}
        >
          <Image
            src={featured.image}
            alt={`${featured.code} — ${titleCase(featured.title)}`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className={styles.featuredImage}
          />
          <span className={styles.featuredBadge}>Current season</span>
        </Link>

        <div className={styles.featuredBody}>
          <span className={styles.eyebrow} data-reveal>
            {featured.code} · {featured.season}
          </span>
          <h2 id="featured-title" className={styles.featuredTitle} data-reveal="lines">
            <span className="line-mask">
              <span>
                <em>{titleCase(featured.title)}</em>
              </span>
            </span>
          </h2>
          <p className={styles.featuredDesc} data-reveal>
            {featured.description}
          </p>

          <dl className={styles.facts} data-reveal>
            <div>
              <dt>Material</dt>
              <dd>{featured.materialStory}</dd>
            </div>
            <div>
              <dt>Provenance</dt>
              <dd>{featured.provenance}</dd>
            </div>
            <div>
              <dt>Edition</dt>
              <dd>{featured.pieceCount} pieces · {featured.status}</dd>
            </div>
          </dl>

          <Link href={`/collections/${featured.slug}`} className={styles.cta} data-reveal>
            <span>Explore {titleCase(featured.title)}</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* ==========================================================================
          Full archive
          ========================================================================== */}
      <section className={styles.archive} aria-labelledby="archive-title">
        <div className={styles.archiveHead}>
          <h2 id="archive-title" className={styles.archiveTitle} data-reveal>
            The complete <em>index</em>
          </h2>
          <p className={styles.archiveNote} data-reveal>
            Hover to preview. Every edition is cut in limited runs; archived collections remain
            available by bespoke commission.
          </p>
        </div>

        <CollectionIndexList collections={COLLECTIONS} />

        <div className={styles.archiveFoot} data-reveal>
          <Link href="/shop" className={styles.textCta}>
            Browse all pieces
          </Link>
          <Link href="/contact" className={styles.textCta}>
            Request an archive commission
          </Link>
        </div>
      </section>
    </div>
  );
}
