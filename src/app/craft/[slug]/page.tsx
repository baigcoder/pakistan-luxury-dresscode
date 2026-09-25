import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CRAFTS } from "@/data/crafts";
import { PRODUCTS } from "@/data/products";
import { BRAND } from "@/config/brand";
import styles from "./page.module.css";

export function generateStaticParams() {
  return CRAFTS.map((craft) => ({
    slug: craft.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const craft = CRAFTS.find((c) => c.slug === slug);

  if (!craft) {
    return { title: "Craft Archive Not Found" };
  }

  return {
    title: `${craft.name} — Intangible Craft Register`,
    description: craft.summary,
    openGraph: {
      title: `${craft.name} | ${BRAND.name}`,
      description: craft.summary,
      images: [{ url: craft.heroImage, width: 1200, height: 1200, alt: craft.name }],
    },
  };
}

const pad = (n: number) => String(n).padStart(2, "0");
const titleCase = (s: string) => s.toLowerCase().replace(/(^|\s)\S/g, (c) => c.toUpperCase());

/** "Khurr (Initial Washing)" → ["Khurr", "Initial Washing"] */
const splitStage = (title: string) => {
  const m = title.match(/^(.*?)\s*\((.*)\)\s*$/);
  return m ? [m[1], m[2]] : [title, ""];
};

export default async function CraftDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = CRAFTS.findIndex((c) => c.slug === slug);
  const craft = CRAFTS[index];

  if (!craft) {
    notFound();
  }

  const [name, subtitle = ""] = craft.name.split(/:\s*/, 2);
  const next = CRAFTS[(index + 1) % CRAFTS.length];
  const nextName = next.name.split(":")[0];

  // Find products made with this craft
  const relatedProducts = PRODUCTS.filter((p) => craft.relatedProductSlugs.includes(p.slug));

  const register = [
    { k: "Province", v: craft.province },
    { k: "Origin", v: craft.regionalOrigin },
    { k: "Register", v: craft.registrationCode.replace(/^ICH REG\.\s*/, "") },
    { k: "Atelier", v: craft.artisanMaster.atelierLocation },
  ];

  return (
    <div className={styles.page}>
      {/* ==========================================================================
          Hero — an archival document: record on the left, the cloth on the right
          ========================================================================== */}
      <section className={styles.hero} aria-labelledby="craft-title">
        <div className={styles.heroCopy}>
          <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
            <Link href="/craft">Craft register</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{name}</span>
          </nav>

          <div className={styles.heroBody}>
            <span className={styles.heroIndex}>
              <em>{pad(index + 1)}</em> {craft.registrationCode}
            </span>
            <h1 id="craft-title" className={styles.title}>
              {name}
            </h1>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>

          <div className={styles.heroFoot}>
            <p className={styles.summary}>{craft.summary}</p>
            <p className={styles.citation}>{craft.officialCitation}</p>
          </div>
        </div>

        <div className={styles.heroMedia}>
          <Image
            src={craft.heroImage}
            alt={`${name} — ${craft.summary}`}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
            className={styles.heroImg}
          />
        </div>
      </section>

      {/* ==========================================================================
          Register strip + provenance
          ========================================================================== */}
      <section className={styles.provenance} aria-labelledby="provenance-heading">
        <dl className={styles.register}>
          {register.map((r, i) => (
            <div
              key={r.k}
              className={styles.registerItem}
              data-reveal
              data-reveal-delay={String(i * 90)}
            >
              <dt>{r.k}</dt>
              <dd>{r.v}</dd>
            </div>
          ))}
        </dl>

        <div className={styles.provenanceGrid}>
          <span id="provenance-heading" className={styles.eyebrow} data-reveal>
            <span className={styles.index}>(01)</span> Provenance
          </span>
          <p className={styles.provenanceText} data-reveal>
            {craft.historicalContext}
          </p>
        </div>
      </section>

      {/* ==========================================================================
          Process — sticky macro study beside the stages
          ========================================================================== */}
      <section className={styles.process} aria-labelledby="process-heading">
        <header className={styles.sectionHeader}>
          <div>
            <span className={styles.eyebrow} data-reveal>
              <span className={styles.index}>(02)</span> The process
            </span>
            <h2 id="process-heading" className={styles.sectionTitle} data-reveal="lines">
              <span className="line-mask">
                <span>The hand,</span>
              </span>
              <span className="line-mask">
                <span>
                  in <em>stages</em>
                </span>
              </span>
            </h2>
          </div>
        </header>

        <div className={styles.processGrid}>
          <figure className={styles.processFigure}>
            <div className={styles.processFrame} data-reveal="clip" data-cursor="view">
              <Image
                src={craft.macroImage}
                alt={`${name} — a study from the atelier`}
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                className={styles.processImg}
              />
            </div>
            <figcaption className={styles.figcaption}>Fig. 02 — {craft.regionalOrigin}</figcaption>
          </figure>

          <ol className={styles.stages}>
            {craft.processStages.map((stage, i) => {
              const [stageName, stageGloss] = splitStage(stage.title);
              return (
                <li
                  key={stage.step}
                  className={styles.stage}
                  data-reveal
                  data-reveal-delay={String(Math.min(i, 3) * 80)}
                >
                  <span className={styles.stageNum}>{pad(stage.step)}</span>
                  <div className={styles.stageBody}>
                    <h3 className={styles.stageTitle}>
                      {stageName}
                      {stageGloss && <span className={styles.stageGloss}>{stageGloss}</span>}
                    </h3>
                    <p className={styles.stageText}>{stage.description}</p>
                    <p className={styles.stageMaterials}>
                      <span>Materials</span> {stage.materials}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ==========================================================================
          Master voice (dark)
          ========================================================================== */}
      <section className={styles.voice} aria-labelledby="voice-heading">
        <div className={styles.voiceInner}>
          <span className={styles.voiceEyebrow} data-reveal>
            <span className={styles.voiceIndex}>(03)</span> Master atelier voices
          </span>
          <blockquote className={styles.voiceQuote} data-reveal>
            &ldquo;{craft.artisanMaster.quote}&rdquo;
          </blockquote>
          <p className={styles.voiceCite} data-reveal>
            <span id="voice-heading" className={styles.voiceName}>
              {craft.artisanMaster.title}
            </span>
            <span>{craft.artisanMaster.atelierLocation}</span>
          </p>
        </div>

        <Link
          href={`/collections/${craft.relatedCollectionSlug}`}
          className={styles.translated}
          data-cursor="explore"
        >
          <span className={styles.translatedLabel}>Translated into fashion</span>
          <span className={styles.translatedTitle}>
            {titleCase(craft.relatedCollectionTitle)} <span aria-hidden="true">→</span>
          </span>
        </Link>
      </section>

      {/* ==========================================================================
          Garments in this technique
          ========================================================================== */}
      {relatedProducts.length > 0 && (
        <section className={styles.related} aria-labelledby="related-heading">
          <header className={styles.sectionHeader}>
            <div>
              <span className={styles.eyebrow} data-reveal>
                <span className={styles.index}>(04)</span> Craft translations
              </span>
              <h2 id="related-heading" className={styles.sectionTitle} data-reveal="lines">
                <span className="line-mask">
                  <span>Worn in</span>
                </span>
                <span className="line-mask">
                  <span>
                    the <em>house</em>
                  </span>
                </span>
              </h2>
            </div>
            <Link href="/shop" className={styles.textLink} data-reveal>
              All works <span aria-hidden="true">→</span>
            </Link>
          </header>

          <div className={styles.relatedGrid}>
            {relatedProducts.map((prod, i) => (
              <article
                key={prod.id}
                className={styles.productCard}
                data-reveal
                data-reveal-delay={String(i * 110)}
              >
                <Link
                  href={`/product/${prod.slug}`}
                  className={styles.productLink}
                  data-cursor="shop"
                >
                  <div className={styles.productFrame}>
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 33vw"
                      className={styles.productImg}
                    />
                  </div>
                  <div className={styles.productMeta}>
                    <div className={styles.productTop}>
                      <h3 className={styles.productTitle}>{prod.name}</h3>
                      <span className={styles.productPrice}>{prod.formattedPrice}</span>
                    </div>
                    <span className={styles.productCollection}>{titleCase(prod.collection)}</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* ==========================================================================
          Next discipline
          ========================================================================== */}
      {next.slug !== craft.slug && (
        <Link href={`/craft/${next.slug}`} className={styles.next} data-cursor="explore">
          <span className={styles.nextLabel}>Next in the register — {next.province}</span>
          <span className={styles.nextTitle}>
            {nextName} <span aria-hidden="true">→</span>
          </span>
        </Link>
      )}
    </div>
  );
}
