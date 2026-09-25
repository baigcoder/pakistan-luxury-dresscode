import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { COLLECTIONS } from "@/data/collections";
import { PRODUCTS } from "@/data/products";
import { BRAND } from "@/config/brand";
import styles from "./page.module.css";

export function generateStaticParams() {
  return COLLECTIONS.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const col = COLLECTIONS.find((c) => c.slug === slug);

  if (!col) {
    return { title: "Collection Not Found" };
  }

  return {
    title: `${col.code} ${col.title} — ${col.season}`,
    description: col.description,
    openGraph: {
      title: `${col.code} ${col.title} | ${BRAND.name}`,
      description: col.description,
      images: [{ url: col.image, width: 1200, height: 900, alt: col.title }],
    },
  };
}

const titleCase = (s: string) => s.toLowerCase().replace(/(^|\s)\S/g, (c) => c.toUpperCase());
const pad = (n: number) => String(n).padStart(2, "0");

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = COLLECTIONS.findIndex((c) => c.slug === slug);
  const col = COLLECTIONS[index];

  if (!col) {
    notFound();
  }

  const name = titleCase(col.title);
  const next = COLLECTIONS[(index + 1) % COLLECTIONS.length];

  // The edition's own pieces, filled out to a full row with pairings from the house
  const ownProducts = PRODUCTS.filter((p) => p.collectionSlug === col.slug);
  const pairings = PRODUCTS.filter((p) => p.collectionSlug !== col.slug).slice(
    0,
    Math.max(0, 3 - ownProducts.length),
  );
  const collectionProducts = [...ownProducts, ...pairings];

  const specs = [
    { k: "Edition", v: titleCase(col.code) },
    { k: "Season", v: col.season },
    { k: "Pieces", v: pad(col.pieceCount) },
    { k: "Status", v: col.status },
  ];

  return (
    <div className={styles.page}>
      {/* ==========================================================================
          Campaign hero — full bleed, the edition name at display scale
          ========================================================================== */}
      <section className={styles.hero} aria-labelledby="collection-title">
        <div className={styles.heroMedia}>
          <Image
            src={col.image}
            alt={`${name} — ${col.description}`}
            fill
            priority
            quality={90}
            sizes="100vw"
            className={styles.heroImg}
          />
        </div>
        <div className={styles.heroScrim} />

        <div className={styles.heroInner}>
          <div className={styles.heroTop}>
            <Link href="/collections" className={styles.backLink}>
              <span aria-hidden="true">←</span> The archive
            </Link>
            <span className={styles.heroMeta}>
              <span className={styles.heroIndex}>{pad(index + 1)}</span>
              {col.code} — {col.season}
            </span>
          </div>

          <h1 id="collection-title" className={styles.heroTitle}>
            <em>{name}</em>
          </h1>

          <div className={styles.heroFoot}>
            <p className={styles.heroLede}>{col.description}</p>
            <a href="#pieces" className={styles.heroScroll}>
              View the pieces <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          Specification strip + material notes
          ========================================================================== */}
      <section className={styles.specSection}>
        <dl className={styles.specs}>
          {specs.map((s, i) => (
            <div key={s.k} className={styles.spec} data-reveal data-reveal-delay={String(i * 90)}>
              <dt>{s.k}</dt>
              <dd>{s.v}</dd>
            </div>
          ))}
        </dl>

        <div className={styles.notes}>
          <p className={styles.notesLead} data-reveal>
            {name} begins with its material:{" "}
            <em>{col.materialStory.replace(/\.$/, "").toLowerCase()}</em>.
          </p>
          <div className={styles.notesAside} data-reveal>
            <dl className={styles.notesMeta}>
              <div>
                <dt>Provenance</dt>
                <dd>{col.provenance}</dd>
              </div>
              <div>
                <dt>In this edition</dt>
                <dd>
                  {ownProducts.length} {ownProducts.length === 1 ? "piece" : "pieces"} online · the
                  full run of {col.pieceCount} by appointment
                </dd>
              </div>
            </dl>
            <a href="#commission-heading" className={styles.textLink}>
              Commission a piece <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          Pull quote
          ========================================================================== */}
      <section className={styles.quoteSection} aria-label="The architectural discipline">
        <blockquote className={styles.quote} data-reveal="lines">
          <span className="line-mask">
            <span>&ldquo;No embellishment</span>
          </span>
          <span className="line-mask">
            <span>
              without <em>structural</em>
            </span>
          </span>
          <span className="line-mask">
            <span>reason.&rdquo;</span>
          </span>
        </blockquote>
        <p className={styles.quoteCite} data-reveal>
          The architectural discipline — {BRAND.name} atelier
        </p>
      </section>

      {/* ==========================================================================
          The pieces
          ========================================================================== */}
      <section id="pieces" className={styles.productsSection} aria-labelledby="pieces-heading">
        <header className={styles.sectionHeader}>
          <div>
            <span className={styles.eyebrow} data-reveal>
              <span className={styles.index}>(01)</span> The pieces
            </span>
            <h2 id="pieces-heading" className={styles.sectionTitle} data-reveal="lines">
              <span className="line-mask">
                <span>Curated</span>
              </span>
              <span className="line-mask">
                <span>
                  <em>silhouettes</em>
                </span>
              </span>
            </h2>
          </div>
          <Link href="/shop" className={styles.textLink} data-reveal>
            All works <span aria-hidden="true">→</span>
          </Link>
        </header>

        <div className={styles.productsGrid}>
          {collectionProducts.map((prod, i) => {
            const isPairing = i >= ownProducts.length;
            return (
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
                    <span className={styles.productNum}>
                      {isPairing ? "Pairs with" : pad(i + 1)}
                    </span>
                    {prod.badge && <span className={styles.productBadge}>{prod.badge}</span>}
                  </div>

                  <div className={styles.productDetails}>
                    <div className={styles.productTop}>
                      <h3 className={styles.productName}>{prod.name}</h3>
                      <span className={styles.productPrice}>{prod.formattedPrice}</span>
                    </div>
                    <span className={styles.productRegion}>
                      {isPairing ? titleCase(prod.collection) : prod.craftRegion}
                    </span>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* ==========================================================================
          Commission close (dark) + next edition
          ========================================================================== */}
      <section className={styles.commission} aria-labelledby="commission-heading">
        <div className={styles.commissionInner}>
          <div>
            <span className={styles.commissionEyebrow} data-reveal>
              Bespoke atelier service
            </span>
            <h2 id="commission-heading" className={styles.commissionTitle} data-reveal="lines">
              <span className="line-mask">
                <span>Commission</span>
              </span>
              <span className="line-mask">
                <span>
                  your own <em>{name}</em>
                </span>
              </span>
            </h2>
          </div>
          <div className={styles.commissionCopy}>
            <p data-reveal>
              Private orders, bespoke sizing and archival trunk-show appointments are coordinated
              directly by our Lahore client salon.
            </p>
            <Link href="/contact" className={styles.cta} data-reveal>
              <span>Request an appointment</span>
              <span className={styles.ctaArrow} aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>

        {next && next.slug !== col.slug && (
          <Link href={`/collections/${next.slug}`} className={styles.next} data-cursor="explore">
            <span className={styles.nextLabel}>Next edition — {next.code}</span>
            <span className={styles.nextTitle}>
              {titleCase(next.title)} <span aria-hidden="true">→</span>
            </span>
          </Link>
        )}
      </section>
    </div>
  );
}
