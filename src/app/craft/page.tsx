import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CRAFTS } from "@/data/crafts";
import { BRAND } from "@/config/brand";
import { RegionalCraftExplorer } from "@/components/editorial";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Intangible Cultural Heritage & Regional Craft Provenance",
  description:
    "An archival register of documented Pakistani textile traditions, natural indigo vat block printing, and royal court needlework.",
};

/** "Sindhi Ajrak: The 14-Stage Natural Vat Dyeing" → ["Sindhi Ajrak", "The 14-Stage…"] */
const splitName = (name: string) => {
  const [title, ...rest] = name.split(":");
  return { title: title.trim(), subtitle: rest.join(":").trim() };
};

/** "Khurr (Initial Washing & Camel Dung Steeping)" → ["Khurr", "Initial Washing…"] */
const splitStage = (title: string) => {
  const match = title.match(/^(.*?)\s*\((.*)\)$/);
  return match ? { term: match[1], gloss: match[2] } : { term: title, gloss: "" };
};

export default function CraftIndexPage() {
  return (
    <div className={styles.page}>
      {/* ==========================================================================
          Hero
          ========================================================================== */}
      <section className={styles.hero} aria-labelledby="craft-title">
        <div className={styles.heroMedia}>
          <Image
            src="/images/craft-atelier.jpg"
            alt="A master artisan hand-embroidering gold Zardozi on crimson silk in a Lahore atelier"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroScrim} />
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroTop}>
            <span className={styles.heroMeta}>
              <span className={styles.pill}>Register</span> Documented living traditions
            </span>
            <span className={styles.heroMeta}>
              {String(CRAFTS.length).padStart(2, "0")} disciplines · {BRAND.origin}
            </span>
          </div>

          <h1 id="craft-title" className={styles.heroTitle}>
            <span className={styles.lineMask}>
              <span className={styles.line}>Intangible</span>
            </span>
            <span className={styles.lineMask}>
              <span className={`${styles.line} ${styles.indent}`}>
                <em>heritage.</em>
              </span>
            </span>
          </h1>

          <div className={styles.heroBottom}>
            <p className={styles.heroLede}>
              Pakistan holds some of the world&apos;s oldest textile disciplines. Rather than
              flattening them into generic ornament, {BRAND.name} records the region, the hands and the
              materials behind every piece we cut.
            </p>
            <p className={styles.citation}>
              <span className={styles.citationTag}>Official reference</span>
              Developed in alignment with the{" "}
              <a href={BRAND.culturalProvenance.sourceUrl} target="_blank" rel="noopener noreferrer">
                {BRAND.culturalProvenance.officialSource}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          Index
          ========================================================================== */}
      <section className={styles.indexSection} aria-labelledby="craft-index">
        <div className={styles.indexHead}>
          <span className={styles.eyebrow} data-reveal>
            <span className={styles.num}>(01)</span> The register
          </span>
          <h2 id="craft-index" className={styles.indexTitle} data-reveal="lines">
            <span className="line-mask">
              <span>Three disciplines,</span>
            </span>
            <span className="line-mask">
              <span>
                <em>three regions.</em>
              </span>
            </span>
          </h2>
        </div>

        <ol className={styles.indexList}>
          {CRAFTS.map((craft, i) => {
            const { title } = splitName(craft.name);
            return (
              <li key={craft.slug} data-reveal data-reveal-delay={String(i * 100)}>
                <a href={`#${craft.slug}`} className={styles.indexRow}>
                  <span className={styles.indexNum}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.indexName}>{title}</span>
                  <span className={styles.indexMeta}>
                    {craft.province} — {craft.regionalOrigin}
                  </span>
                  <span className={styles.indexArrow} aria-hidden="true">
                    ↓
                  </span>
                </a>
              </li>
            );
          })}
        </ol>
      </section>

      {/* ==========================================================================
          Material anatomy & regional archives
          ========================================================================== */}
      <section className={styles.explorer}>
        <RegionalCraftExplorer />
      </section>

      {/* ==========================================================================
          Chapters
          ========================================================================== */}
      {CRAFTS.map((craft, i) => {
        const { title, subtitle } = splitName(craft.name);
        const reversed = i % 2 === 1;
        return (
          <article
            key={craft.slug}
            id={craft.slug}
            className={[styles.chapter, reversed ? styles.reversed : ""].filter(Boolean).join(" ")}
            aria-labelledby={`${craft.slug}-title`}
          >
            <div className={styles.chapterGrid}>
              <div className={styles.chapterMedia}>
                <Link
                  href={`/craft/${craft.slug}`}
                  className={styles.chapterFrame}
                  data-reveal="clip"
                  data-cursor="explore"
                  tabIndex={-1}
                >
                  <Image
                    src={craft.heroImage}
                    alt={title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={styles.chapterImage}
                  />
                </Link>
                <div className={styles.chapterCaption}>
                  <span>{craft.registrationCode}</span>
                  <span>{craft.regionalOrigin}</span>
                </div>
              </div>

              <div className={styles.chapterBody}>
                <span className={styles.chapterNum} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={styles.eyebrow} data-reveal>
                  {craft.province}
                </span>
                <h2 id={`${craft.slug}-title`} className={styles.chapterTitle} data-reveal>
                  <Link href={`/craft/${craft.slug}`}>{title}</Link>
                </h2>
                {subtitle && (
                  <p className={styles.chapterSubtitle} data-reveal>
                    {subtitle}
                  </p>
                )}

                <p className={styles.summary} data-reveal>
                  {craft.summary}
                </p>
                <p className={styles.context} data-reveal>
                  {craft.historicalContext}
                </p>

                <div className={styles.actions} data-reveal>
                  <Link href={`/craft/${craft.slug}`} className={styles.primaryCta}>
                    <span>
                      Explore {craft.processStages.length} process stages
                    </span>
                    <span className={styles.ctaArrow} aria-hidden="true">
                      →
                    </span>
                  </Link>
                  <Link href={`/collections/${craft.relatedCollectionSlug}`} className={styles.textCta}>
                    View {craft.relatedCollectionTitle}
                  </Link>
                </div>
              </div>
            </div>

            {/* Process timeline */}
            <ol className={styles.stages} aria-label={`${title} process`}>
              {craft.processStages.map((stage, s) => {
                const { term, gloss } = splitStage(stage.title);
                return (
                  <li
                    key={stage.step}
                    className={styles.stage}
                    data-reveal
                    data-reveal-delay={String(s * 90)}
                  >
                    <span className={styles.stageStep}>Stage {String(stage.step).padStart(2, "0")}</span>
                    <h3 className={styles.stageTerm}>{term}</h3>
                    {gloss && <p className={styles.stageGloss}>{gloss}</p>}
                    <p className={styles.stageDesc}>{stage.description}</p>
                    <p className={styles.stageMaterials}>{stage.materials}</p>
                  </li>
                );
              })}
            </ol>

            {/* Artisan's words */}
            <figure className={styles.quote} data-reveal>
              <blockquote>
                <p>&ldquo;{craft.artisanMaster.quote}&rdquo;</p>
              </blockquote>
              <figcaption>
                <span className={styles.quoteName}>{craft.artisanMaster.title}</span>
                <span className={styles.quotePlace}>{craft.artisanMaster.atelierLocation}</span>
              </figcaption>
            </figure>
          </article>
        );
      })}

      {/* ==========================================================================
          Closing
          ========================================================================== */}
      <section className={styles.closing} aria-labelledby="craft-closing">
        <span className={styles.eyebrowDark} data-reveal>
          Wear the provenance
        </span>
        <h2 id="craft-closing" className={styles.closingTitle} data-reveal="lines">
          <span className="line-mask">
            <span>Every piece carries</span>
          </span>
          <span className="line-mask">
            <span>
              <em>its lineage.</em>
            </span>
          </span>
        </h2>
        <div className={styles.closingActions} data-reveal>
          <Link href="/shop" className={styles.closingPrimary}>
            <span>Shop the collection</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              →
            </span>
          </Link>
          <Link href="/contact" className={styles.closingText}>
            Visit the atelier
          </Link>
        </div>
      </section>
    </div>
  );
}
