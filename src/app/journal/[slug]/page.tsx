import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { JOURNAL_STORIES, getJournalStoryBySlug } from "@/data/journal";
import { PRODUCTS } from "@/data/products";
import { BRAND } from "@/config/brand";
import { Badge, HairlineDivider, Button } from "@/components/ui";
import { ArrowLeft, ArrowRight, Bookmark, Share2 } from "lucide-react";
import styles from "./page.module.css";

export function generateStaticParams() {
  return JOURNAL_STORIES.map((story) => ({
    slug: story.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = getJournalStoryBySlug(slug);

  if (!story) {
    return { title: "Dispatch Not Found" };
  }

  return {
    title: `${story.title} — The Atelier Journal`,
    description: story.excerpt,
    openGraph: {
      title: `${story.title} | ${BRAND.name} Journal`,
      description: story.excerpt,
      images: [{ url: story.image, width: 1200, height: 800, alt: story.title }],
    },
  };
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getJournalStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  // Related products associated with this article
  const relatedProducts = PRODUCTS.filter((p) =>
    story.relatedProductSlugs?.includes(p.slug)
  );

  // Next and previous article indices
  const currentIndex = JOURNAL_STORIES.findIndex((s) => s.slug === slug);
  const nextStory = JOURNAL_STORIES[(currentIndex + 1) % JOURNAL_STORIES.length];
  const prevStory =
    JOURNAL_STORIES[(currentIndex - 1 + JOURNAL_STORIES.length) % JOURNAL_STORIES.length];

  return (
    <article className={styles.page}>
      {/* Top Breadcrumb & Actions */}
      <div className={styles.topNav}>
        <div className="container-editorial">
          <div className={styles.topNavInner}>
            <Link href="/journal" className={styles.backLink}>
              <ArrowLeft size={14} /> BACK TO DISPATCHES
            </Link>
            <div className={styles.topMeta}>
              <span className="metadata">{story.category}</span>
              <span className="metadata">&bull;</span>
              <span className="metadata">{story.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <header className={styles.articleHeader}>
        <div className="container-editorial">
          <div className={styles.headerContent}>
            <Badge variant="terracotta">{story.category} DISPATCH</Badge>
            <h1 className={`${styles.title} display-l`}>{story.title}</h1>
            {story.subtitle && (
              <p className={`${styles.subtitle} body-editorial`}>{story.subtitle}</p>
            )}

            <div className={styles.authorBar}>
              <div className={styles.authorMeta}>
                <span className={styles.authorName}>{story.author}</span>
                {story.authorRole && (
                  <span className={styles.authorRole}>{story.authorRole}</span>
                )}
              </div>
              <div className={styles.dateStamp}>
                <span className="metadata">{story.publishedDate}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Media Cover */}
      <div className={styles.heroMediaSection}>
        <div className="container-editorial">
          <div className={styles.heroMediaFrame}>
            <Image
              src={story.image}
              alt={story.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>

      {/* Editorial Longform Content Body */}
      <div className={styles.bodySection}>
        <div className="container-editorial">
          <div className={styles.layoutGrid}>
            {/* Left Sticky Rail: Meta & Provenance */}
            <aside className={styles.stickyRail}>
              <div className={styles.railContent}>
                <span className="metadata">INDEX RECORD</span>
                <p className={styles.railCode}>JRN-{story.id.toUpperCase()}</p>

                {story.relatedCollection && (
                  <div className={styles.railBlock}>
                    <span className="metadata">RELATED COLLECTION</span>
                    <Link
                      href={
                        story.relatedCollectionSlug
                          ? `/shop`
                          : "/shop"
                      }
                      className={styles.railLink}
                    >
                      {story.relatedCollection} &rarr;
                    </Link>
                  </div>
                )}

                <div className={styles.railBlock}>
                  <span className="metadata">PUBLISHED</span>
                  <p className="body-metadata" style={{ margin: "4px 0 0", color: "var(--primary)" }}>
                    {story.publishedDate}
                  </p>
                </div>

                <HairlineDivider />

                <div className={styles.railShare}>
                  <span className="metadata">DISPATCH ARCHIVE</span>
                  <p className="body-metadata" style={{ margin: "4px 0 0", color: "var(--muted)" }}>
                    NAVA Atelier Documentation Unit, Lahore.
                  </p>
                </div>
              </div>
            </aside>

            {/* Main Longform Column */}
            <div className={styles.editorialColumn}>
              {/* Excerpt Lead */}
              <p className={styles.leadParagraph}>{story.excerpt}</p>

              {/* Pull Quote */}
              {story.pullQuote && (
                <blockquote className={styles.pullQuote}>
                  <p className={styles.pullQuoteText}>
                    &ldquo;{story.pullQuote}&rdquo;
                  </p>
                  {story.pullQuoteAttribution && (
                    <cite className={styles.pullQuoteCite}>
                      — {story.pullQuoteAttribution}
                    </cite>
                  )}
                </blockquote>
              )}

              {/* Content Sections */}
              {story.contentSections.map((section, idx) => (
                <section key={idx} className={styles.textSection}>
                  {section.heading && (
                    <h2 className={`${styles.sectionHeading} heading-2`}>
                      {section.heading}
                    </h2>
                  )}

                  {section.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className={[
                        styles.paragraph,
                        idx === 0 && pIdx === 0 ? styles.dropCap : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {p}
                    </p>
                  ))}

                  {section.inlineImage && (
                    <figure className={styles.inlineMedia}>
                      <div className={styles.inlineMediaFrame}>
                        <Image
                          src={section.inlineImage}
                          alt={section.imageCaption || "Atelier archival image"}
                          fill
                          sizes="(max-width: 900px) 100vw, 760px"
                          className={styles.inlineImg}
                        />
                      </div>
                      {section.imageCaption && (
                        <figcaption className={styles.mediaCaption}>
                          <span className="metadata">FIG. {idx + 1} &bull;</span>{" "}
                          {section.imageCaption}
                        </figcaption>
                      )}
                    </figure>
                  )}
                </section>
              ))}

              {/* End Mark */}
              <div className={styles.endMark}>
                <span className="metadata">■ ■ ■</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products from this Essay */}
      {relatedProducts.length > 0 && (
        <section className={styles.relatedSection}>
          <div className="container-editorial">
            <div className={styles.relatedHeader}>
              <div>
                <span className="metadata">CONTEMPORARY INTERPRETATIONS</span>
                <h2 className={`${styles.relatedTitle} heading-2`}>
                  Featured Pieces in this Dispatch
                </h2>
              </div>
              <Link href="/shop" className={styles.allLink}>
                VIEW FULL SHOP &rarr;
              </Link>
            </div>

            <div className={styles.relatedGrid}>
              {relatedProducts.map((prod) => (
                <div key={prod.id} className={styles.productCard}>
                  <Link href={`/product/${prod.slug}`} className={styles.productLink}>
                    <div className={styles.productFrame}>
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className={styles.productImg}
                      />
                      <div className={styles.productBadge}>
                        <Badge variant="neutral">{prod.collection}</Badge>
                      </div>
                    </div>
                    <div className={styles.productInfo}>
                      <span className="metadata">{prod.craftProvenance}</span>
                      <h3 className={`${styles.productName} heading-3`}>{prod.name}</h3>
                      <p className={styles.productPrice}>{prod.formattedPrice}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation to Next / Previous Dispatches */}
      <section className={styles.paginationSection}>
        <div className="container-editorial">
          <HairlineDivider />
          <div className={styles.paginationGrid}>
            <Link href={`/journal/${prevStory.slug}`} className={styles.paginationCard}>
              <span className="metadata">&larr; PREVIOUS ESSAY</span>
              <p className={styles.paginationTitle}>{prevStory.title}</p>
            </Link>
            <Link
              href={`/journal/${nextStory.slug}`}
              className={`${styles.paginationCard} ${styles.paginationCardRight}`}
            >
              <span className="metadata">NEXT ESSAY &rarr;</span>
              <p className={styles.paginationTitle}>{nextStory.title}</p>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
