import React from "react";
import Link from "next/link";
import { ImageFrame, Badge, Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";
import styles from "./CollectionIntro.module.css";

export const CollectionIntro: React.FC = () => {
  return (
    <section id="collection-intro" className={styles.section} aria-label="Collection Introduction">
      <div className="container-editorial">
        {/* Top Editorial Eyebrow */}
        <div className={styles.topBar}>
          <span className="metadata">02 &bull; MANIFESTO & FORM</span>
          <span className="provenance-tag">CENTRAL PUNJAB & SINDH ATELIERS</span>
        </div>

        {/* Large Statement */}
        <div className={styles.statementRow}>
          <h2 className={`${styles.statement} display-l`}>
            Form, then <em>memory.</em>
          </h2>
          <p className={`${styles.leadText} body-editorial`}>
            A surface is never merely decorative. Across Pakistan&apos;s historic weaving clusters,
            every hand-drawn thread, hand-carved woodblock, and natural indigo vat fermentation
            records centuries of architectural geometry. NAVA strips away excess to let the
            purity of silhouette and the integrity of the artisan emerge.
          </p>
        </div>

        {/* Asymmetrical Image Layout (7:5 Split) */}
        <div className={styles.splitGrid}>
          {/* Dominant Visual (7 columns) */}
          <div className={styles.dominantCol}>
            <ImageFrame
              src="/images/hero-men.jpg"
              alt="Contemporary Pakistani menswear in charcoal sherwani jacket"
              aspectRatio="4:5"
              badge={<Badge variant="dark">VEIL 04 &mdash; RAAT</Badge>}
              caption="ARCHITECTURAL MANDARIN COLLAR WITH RESTRICTED PLACKET NEEDLEWORK"
            />
            <div className={styles.dominantCaption}>
              <h3 className="heading-3">VEIL 04 &mdash; The Midnight Sherwani</h3>
              <p className="body-small">
                Translating the ceremonial court garment into a razor-sharp, minimalist evening coat.
                Cut from highland raw wool spun in Swat.
              </p>
              <div style={{ marginTop: "12px" }}>
                <Button variant="text" href="/collections/veil-04-raat">
                  VIEW COLLECTION EDITORIAL &rarr;
                </Button>
              </div>
            </div>
          </div>

          {/* Secondary Visual Offset (5 columns) */}
          <div className={styles.secondaryCol}>
            <div className={styles.secondaryWrapper}>
              <ImageFrame
                src="/images/craft-atelier.jpg"
                alt="Documentary atelier photography of master needlewoman"
                aspectRatio="4:3"
                badge={<Badge variant="terracotta">ATELIER ARCHIVE</Badge>}
                caption="CENTRAL PUNJAB &mdash; 320 HOURS HAND NEEDLEWORK"
              />
              <div className={styles.craftSnippet}>
                <span className="eyebrow">THE ATELIER DISCIPLINE</span>
                <p className="body-small" style={{ marginTop: "6px" }}>
                  Every embroidery pattern is individually hand-drawn onto unbleached cotton
                  before being transferred to the wooden framing loom. We guarantee living artisan
                  wages and direct craft preservation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
