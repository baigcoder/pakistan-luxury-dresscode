import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { COLLECTIONS } from "@/data/collections";
import { PRODUCTS } from "@/data/products";
import { BRAND } from "@/config/brand";
import { Badge, Button, HairlineDivider } from "@/components/ui";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
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

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const col = COLLECTIONS.find((c) => c.slug === slug);

  if (!col) {
    notFound();
  }

  // Find products belonging to this collection
  let collectionProducts = PRODUCTS.filter((p) => p.collectionSlug === col.slug);

  // If initial capsule has few items, supplement with related atelier pieces
  if (collectionProducts.length === 0) {
    collectionProducts = PRODUCTS.slice(0, 3);
  }

  return (
    <div className={styles.page}>
      {/* Top Breadcrumb */}
      <div className={styles.topNav}>
        <div className="container-editorial">
          <Link href="/collections" className={styles.backLink}>
            <ArrowLeft size={14} /> BACK TO COLLECTIONS
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container-editorial">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.badgeWrap}>
                <Badge variant="terracotta">{col.code} &bull; {col.season}</Badge>
              </div>

              <h1 className={`${styles.title} display-l`}>
                <em>{col.title.charAt(0) + col.title.slice(1).toLowerCase()}</em>
              </h1>

              <p className={`${styles.description} body-editorial`}>
                {col.description}
              </p>

              <div className={styles.metaBlock}>
                <div className={styles.metaItem}>
                  <span className="metadata">MATERIAL STORY</span>
                  <p className="body-regular" style={{ color: "var(--primary)", marginTop: "4px" }}>
                    {col.materialStory}
                  </p>
                </div>

                <div className={styles.metaItem}>
                  <span className="metadata">CRAFT PROVENANCE</span>
                  <p className="body-regular" style={{ color: "var(--accent)", marginTop: "4px" }}>
                    {col.provenance}
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.heroMediaFrame}>
              <Image
                src={col.image}
                alt={col.title}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.heroImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Interlude Statement */}
      <section className={styles.interludeSection}>
        <div className="container-editorial">
          <div className={styles.interludeInner}>
            <span className="metadata">THE ARCHITECTURAL DISCIPLINE</span>
            <blockquote className={styles.interludeQuote}>
              &ldquo;We construct garments that honor the gravity of the subcontinent.
              No embellishment without structural reason.&rdquo;
            </blockquote>
            <span className="metadata">NAVA ATELIER &bull; CYCLICAL EDIT</span>
          </div>
        </div>
      </section>

      {/* Collection Product Grid */}
      <section className={styles.productsSection}>
        <div className="container-editorial">
          <div className={styles.productsHeader}>
            <div>
              <span className="metadata">COLLECTION PIECES</span>
              <h2 className={`${styles.sectionHeading} heading-2`}>
                Curated Silhouettes
              </h2>
            </div>
            <Link href="/shop" className={styles.allLink}>
              VIEW FULL SHOP &rarr;
            </Link>
          </div>

          <div className={styles.productsGrid}>
            {collectionProducts.map((prod) => (
              <div key={prod.id} className={styles.productCard}>
                <Link href={`/product/${prod.slug}`} className={styles.productLink}>
                  <div className={styles.productFrame}>
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={styles.productImg}
                    />
                    {prod.badge && (
                      <div className={styles.cardBadge}>
                        <Badge variant="terracotta">{prod.badge}</Badge>
                      </div>
                    )}
                  </div>

                  <div className={styles.productDetails}>
                    <span className="metadata">{prod.craftRegion}</span>
                    <h3 className={`${styles.productName} heading-3`}>{prod.name}</h3>
                    <p className={styles.productPrice}>{prod.formattedPrice}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atelier Consultation Footer Banner */}
      <section className={styles.inquirySection}>
        <div className="container-editorial">
          <div className={styles.inquiryBox}>
            <span className="metadata">BESPOKE ATELIER SERVICE</span>
            <h3 className={`${styles.inquiryTitle} heading-2`}>
              Inquire About Custom {col.title} Commissions
            </h3>
            <p className="body-editorial" style={{ color: "var(--muted)", maxWidth: "600px", margin: "8px 0 24px" }}>
              Private orders, bespoke sizing, and archival trunk show appointments are
              coordinated directly by our Lahore client salon.
            </p>
            <Link href="/contact">
              <Button variant="capsule" size="lg">
                REQUEST APPOINTMENT &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
