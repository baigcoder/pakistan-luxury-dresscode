import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { JOURNAL_STORIES, getJournalStoryBySlug } from "@/data/journal";
import { PRODUCTS } from "@/data/products";
import { BRAND } from "@/config/brand";
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

const titleCase = (s: string) => s.toLowerCase().replace(/(^|\s)\S/g, (c) => c.toUpperCase());

/** "Headline: Deck" → headline set large, deck set quiet beneath it */
const splitTitle = (title: string) => {
  const at = title.indexOf(":");
  return at === -1 ? [title, ""] : [title.slice(0, at), title.slice(at + 1).trim()];
};

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

  const [headline, deck] = splitTitle(story.title);

  // Related products associated with this article
  const relatedProducts = PRODUCTS.filter((p) => story.relatedProductSlugs?.includes(p.slug));

  // Next and previous article indices
  const currentIndex = JOURNAL_STORIES.findIndex((s) => s.slug === slug);
  const nextStory = JOURNAL_STORIES[(currentIndex + 1) % JOURNAL_STORIES.length];
  const prevStory =
    JOURNAL_STORIES[(currentIndex - 1 + JOURNAL_STORIES.length) % JOURNAL_STORIES.length];

  return (
    <article className={styles.page}>
      {/* ==========================================================================
          Masthead
          ========================================================================== */}
      <header className={styles.masthead}>
        <div className={styles.topNav}>
          <Link href="/journal" className={styles.backLink}>
            <span aria-hidden="true">←</span> The journal
          </Link>
          <span className={styles.topMeta}>
            {story.category} · {story.readTime}
          </span>
        </div>

        <div className={styles.headerContent}>
          <span className={styles.kicker}>
            <em>{String(currentIndex + 1).padStart(2, "0")}</em> {story.category} dispatch
          </span>
          <h1 className={styles.title}>{headline}</h1>
          {deck && <p className={styles.deck}>{deck}</p>}
          {story.subtitle && <p className={styles.standfirst}>{story.subtitle}</p>}

          <div className={styles.byline}>
            <span>
              By <strong>{story.author}</strong>
              {story.authorRole && <> — {story.authorRole}</>}
            </span>
            <time>{story.publishedDate}</time>
          </div>
        </div>
      </header>

      {/* Hero image — full bleed */}
      <div className={styles.heroMedia}>
        <Image
          src={story.image}
          alt={story.title}
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
      </div>

      {/* ==========================================================================
          Longform body
          ========================================================================== */}
      <div className={styles.body}>
        <aside className={styles.rail} aria-label="About this dispatch">
          <dl className={styles.railList}>
            <div>
              <dt>Filed under</dt>
              <dd>{story.category}</dd>
            </div>
            <div>
              <dt>Published</dt>
              <dd>{story.publishedDate}</dd>
            </div>
            <div>
              <dt>Reading time</dt>
              <dd>{story.readTime}</dd>
            </div>
            {story.relatedCollection && (
              <div>
                <dt>Related edition</dt>
                <dd>
                  <Link
                    href={
                      story.relatedCollectionSlug
                        ? `/collections/${story.relatedCollectionSlug}`
                        : "/collections"
                    }
                    className={styles.railLink}
                  >
                    {titleCase(story.relatedCollection)} <span aria-hidden="true">→</span>
                  </Link>
                </dd>
              </div>
            )}
          </dl>
        </aside>

        <div className={styles.column}>
          <p className={styles.lead}>{story.excerpt}</p>

          {story.pullQuote && (
            <blockquote className={styles.pullQuote}>
              <p>&ldquo;{story.pullQuote}&rdquo;</p>
              {story.pullQuoteAttribution && <cite>{story.pullQuoteAttribution}</cite>}
            </blockquote>
          )}

          {story.contentSections.map((section, idx) => (
            <section key={idx} className={styles.textSection}>
              {section.heading && <h2 className={styles.sectionHeading}>{section.heading}</h2>}

              {section.paragraphs.map((p, pIdx) => (
                <p
                  key={pIdx}
                  className={[styles.paragraph, idx === 0 && pIdx === 0 ? styles.dropCap : ""]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {p}
                </p>
              ))}

              {section.inlineImage && (
                <figure className={styles.inlineMedia}>
                  <div className={styles.inlineFrame} data-reveal="clip">
                    <Image
                      src={section.inlineImage}
                      alt={section.imageCaption || "Atelier archival image"}
                      fill
                      sizes="(max-width: 900px) 100vw, 900px"
                      className={styles.inlineImg}
                    />
                  </div>
                  {section.imageCaption && (
                    <figcaption className={styles.caption}>
                      <span>Fig. {String(idx + 1).padStart(2, "0")}</span> {section.imageCaption}
                    </figcaption>
                  )}
                </figure>
              )}
            </section>
          ))}

          <p className={styles.endMark} aria-label="End of dispatch">
            <span aria-hidden="true">✦</span>
          </p>
        </div>
      </div>

      {/* ==========================================================================
          Pieces in this dispatch
          ========================================================================== */}
      {relatedProducts.length > 0 && (
        <section className={styles.related} aria-labelledby="related-heading">
          <header className={styles.sectionHeader}>
            <div>
              <span className={styles.eyebrow} data-reveal>
                <span className={styles.index}>(—)</span> In this dispatch
              </span>
              <h2 id="related-heading" className={styles.relatedTitle} data-reveal="lines">
                <span className="line-mask">
                  <span>The pieces</span>
                </span>
                <span className="line-mask">
                  <span>
                    <em>worn</em>
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
                  <div className={styles.productInfo}>
                    <div className={styles.productTop}>
                      <h3 className={styles.productName}>{prod.name}</h3>
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
          Continue reading
          ========================================================================== */}
      <nav className={styles.pagination} aria-label="More dispatches">
        <Link href={`/journal/${prevStory.slug}`} className={styles.prev}>
          <span className={styles.pageLabel}>
            <span aria-hidden="true">←</span> Previous
          </span>
          <span className={styles.prevTitle}>{splitTitle(prevStory.title)[0]}</span>
        </Link>
        <Link href={`/journal/${nextStory.slug}`} className={styles.next} data-cursor="read">
          <span className={styles.pageLabel}>
            Next dispatch <span aria-hidden="true">→</span>
          </span>
          <span className={styles.nextTitle}>{splitTitle(nextStory.title)[0]}</span>
        </Link>
      </nav>
    </article>
  );
}
