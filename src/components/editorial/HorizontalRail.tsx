"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { COLLECTIONS } from "@/data/collections";
import { ArrowLeft, ArrowRight } from "lucide-react";
import styles from "./HorizontalRail.module.css";

export const HorizontalRail: React.FC = () => {
  const railRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (railRef.current) {
      const scrollAmount = railRef.current.clientWidth * 0.75;
      railRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={styles.section} aria-label="Collections Rail">
      {/* Header with Title & Navigation Controls */}
      <div className={`container-max ${styles.headerContainer}`}>
        <div>
          <span className="metadata">03 &bull; THE DESIGN ARCHIVE</span>
          <h2 className={`${styles.title} heading-1`}>
            CURATED COLLECTIONS
          </h2>
        </div>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.controlBtn}
            onClick={() => scroll("left")}
            aria-label="Scroll collections left"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            className={styles.controlBtn}
            onClick={() => scroll("right")}
            aria-label="Scroll collections right"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Horizontal Rail Track */}
      <div ref={railRef} className={styles.railTrack} tabIndex={0} role="region" aria-label="Collection list">
        {COLLECTIONS.map((col, index) => (
          <article key={col.id} className={styles.card}>
            <Link href={`/collections/${col.slug}`} className={styles.cardLink}>
              {/* Media Image */}
              <div className={styles.imageWrapper}>
                <Image
                  src={col.image}
                  alt={`${col.code} — ${col.title}`}
                  fill
                  sizes="(max-width: 768px) 85vw, 420px"
                  className={styles.image}
                />
                <div className={styles.cardBadge}>
                  <span className={styles.badgeIndex}>0{index + 1}</span>
                  <span className={styles.badgeCode}>{col.code}</span>
                </div>
              </div>

              {/* Metadata */}
              <div className={styles.cardMeta}>
                <div className={styles.cardTitleRow}>
                  <h3 className={styles.cardTitle}>{col.title}</h3>
                  <span className={styles.seasonTag}>{col.season}</span>
                </div>
                <p className={styles.cardDesc}>{col.description}</p>
                <div className={styles.provenanceRow}>
                  <span className="provenance-tag">{col.provenance}</span>
                  <span className="metadata">{col.pieceCount} PIECES</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};
