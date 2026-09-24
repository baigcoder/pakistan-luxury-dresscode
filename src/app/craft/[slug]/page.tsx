import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CRAFTS } from "@/data/crafts";
import { PRODUCTS } from "@/data/products";
import { BRAND } from "@/config/brand";
import { Badge, Button, HairlineDivider } from "@/components/ui";
import { ExternalLink, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
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

export default async function CraftDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const craft = CRAFTS.find((c) => c.slug === slug);

  if (!craft) {
    notFound();
  }

  // Find products made with this craft
  const relatedProducts = PRODUCTS.filter((p) =>
    craft.relatedProductSlugs.includes(p.slug)
  );

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <div className="container-editorial">
          <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/craft">Craft Register</Link>
            <span>/</span>
            <span className={styles.current}>{craft.name.split(":")[0]}</span>
          </nav>

          <div className={styles.headerMeta}>
            <Badge variant="terracotta">{craft.province}</Badge>
            <span className="provenance-tag">{craft.registrationCode}</span>
          </div>

          <h1 className={`${styles.title} display-l`}>
            {craft.name.split(":")[0]}
            {craft.name.includes(":") && (
              <em className={styles.titleSub}>{craft.name.split(":").slice(1).join(":").trim()}</em>
            )}
          </h1>

          <p className={`${styles.summary} body-editorial`}>
            {craft.summary}
          </p>

          <div className={styles.citationBadge}>
            <ShieldCheck size={16} className={styles.icon} />
            <span>{craft.officialCitation}</span>
          </div>
        </div>
      </div>

      {/* Main Split: Left Images & History, Right Stages */}
      <div className="container-editorial" style={{ paddingTop: "var(--space-4xl)", paddingBottom: "var(--space-5xl)" }}>
        <div className={styles.splitGrid}>
          {/* Left Column: Visual Archive & Historical Context */}
          <div className={styles.leftColumn}>
            <div className={styles.imageFrame}>
              <Image
                src={craft.heroImage}
                alt={craft.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={styles.image}
              />
            </div>

            <div className={styles.historyBlock}>
              <span className="eyebrow">HISTORICAL & CULTURAL PROVENANCE</span>
              <p className="body-regular" style={{ marginTop: "10px", lineHeight: "1.7" }}>
                {craft.historicalContext}
              </p>
            </div>

            {/* Master Artisan Spotlight */}
            <div className={styles.artisanCard}>
              <span className="provenance-tag">MASTER ATELIER VOICES</span>
              <h3 className="heading-3" style={{ margin: "8px 0" }}>
                {craft.artisanMaster.title}
              </h3>
              <span className="metadata">{craft.artisanMaster.atelierLocation}</span>
              <blockquote className={styles.artisanQuote}>
                &ldquo;{craft.artisanMaster.quote}&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Right Column: Process Stages Timeline */}
          <div className={styles.rightColumn}>
            <div className={styles.stagesHeader}>
              <span className="eyebrow">CHRONOLOGICAL METHODOLOGY</span>
              <h2 className="heading-2" style={{ marginTop: "4px" }}>
                Process Stages
              </h2>
            </div>

            <div className={styles.stagesList}>
              {craft.processStages.map((stage) => (
                <div key={stage.step} className={styles.stageItem}>
                  <div className={styles.stepIndicator}>
                    <span className={styles.stepNum}>0{stage.step}</span>
                  </div>

                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{stage.title}</h3>
                    <p className="body-regular" style={{ color: "var(--espresso)", margin: "6px 0" }}>
                      {stage.description}
                    </p>
                    <div className={styles.materialsTag}>
                      <span className="metadata">RAW MATERIALS:</span>
                      <span className="provenance-tag">{stage.materials}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Related Collection Callout */}
            <div className={styles.collectionCallout}>
              <div>
                <span className="metadata">TRANSLATED INTO FASHION</span>
                <h3 className="heading-3">{craft.relatedCollectionTitle}</h3>
                <p className="body-small" style={{ marginTop: "4px" }}>
                  Explore how this ancient regional technique is preserved across our current runway silhouettes.
                </p>
              </div>
              <Button
                variant="capsule"
                size="md"
                href={`/collections/${craft.relatedCollectionSlug}`}
                icon={<ArrowRight size={14} />}
              >
                VIEW LOOKBOOK
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Pieces Grid */}
      {relatedProducts.length > 0 && (
        <section className={styles.relatedSection}>
          <div className="container-max">
            <div className={styles.relatedHeader}>
              <span className="metadata">CRAFT TRANSLATIONS</span>
              <h2 className="heading-2">GARMENTS CRAFTED WITH THIS TECHNIQUE</h2>
            </div>

            <div className={styles.relatedGrid}>
              {relatedProducts.map((prod) => (
                <article key={prod.id} className={styles.productCard}>
                  <Link href={`/product/${prod.slug}`} className={styles.productLink}>
                    <div className={styles.productFrame}>
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        fill
                        sizes="50vw"
                        className={styles.productImg}
                      />
                    </div>
                    <div className={styles.productMeta}>
                      <span className="metadata">{prod.collection}</span>
                      <h3 className={styles.productTitle}>{prod.name}</h3>
                      <span className={styles.productPrice}>{prod.formattedPrice}</span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
