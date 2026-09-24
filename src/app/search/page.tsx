"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/data/products";
import { CRAFTS } from "@/data/crafts";
import { JOURNAL_STORIES } from "@/data/journal";
import { Badge, Button } from "@/components/ui";
import { Search, ArrowRight } from "lucide-react";
import styles from "./page.module.css";

const POPULAR_SEARCHES = ["Raw Silk", "Ajrak", "Indigo", "Sherwani", "Trench", "Pashmina", "Zardozi"];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();

  const matchingProducts = useMemo(() => {
    if (!q) return [];
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.collection.toLowerCase().includes(q) ||
        p.fabric.toLowerCase().includes(q) ||
        p.craftProvenance.toLowerCase().includes(q)
    );
  }, [q]);

  const matchingCrafts = useMemo(() => {
    if (!q) return [];
    return CRAFTS.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.regionalOrigin.toLowerCase().includes(q) ||
        c.summary.toLowerCase().includes(q)
    );
  }, [q]);

  const matchingJournal = useMemo(() => {
    if (!q) return [];
    return JOURNAL_STORIES.filter(
      (j) =>
        j.title.toLowerCase().includes(q) ||
        j.category.toLowerCase().includes(q) ||
        j.excerpt.toLowerCase().includes(q)
    );
  }, [q]);

  const totalResults = matchingProducts.length + matchingCrafts.length + matchingJournal.length;

  return (
    <div className={styles.page}>
      <div className="container-editorial">
        {/* Header Search Box */}
        <div className={styles.searchHeader}>
          <span className="metadata">ATELIER ARCHIVE SEARCH</span>
          <h1 className={`${styles.title} display-l`}>Search the <em>archive.</em></h1>

          <div className={styles.inputWrap}>
            <Search size={22} className={styles.searchIcon} />
            <input
              type="text"
              autoFocus
              placeholder="Search garments, regional crafts, fabrics, or dispatches..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={styles.input}
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className={styles.clearBtn}
              >
                CLEAR
              </button>
            )}
          </div>

          {/* Quick Filter Chips */}
          <div className={styles.popularRow}>
            <span className="metadata">SUGGESTIONS:</span>
            <div className={styles.chips}>
              {POPULAR_SEARCHES.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => setQuery(chip)}
                  className={styles.chip}
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Area */}
        <div className={styles.resultsArea}>
          {q ? (
            <>
              <div className={styles.resultsCount}>
                <span className="metadata">
                  {totalResults} RESULT{totalResults === 1 ? "" : "S"} FOR &ldquo;{query}&rdquo;
                </span>
              </div>

              {totalResults === 0 ? (
                <div className={styles.noResults}>
                  <p className="body-editorial">
                    No archival matches found for &ldquo;{query}&rdquo;.
                  </p>
                  <p className="body-regular" style={{ color: "var(--muted)", margin: "8px 0 24px" }}>
                    Try searching for &ldquo;Raw Silk&rdquo;, &ldquo;Ajrak&rdquo;, or &ldquo;Zardozi&rdquo;.
                  </p>
                  <Link href="/shop">
                    <Button variant="outline">VIEW COMPLETE COLLECTION &rarr;</Button>
                  </Link>
                </div>
              ) : (
                <div className={styles.sectionsStack}>
                  {/* Products */}
                  {matchingProducts.length > 0 && (
                    <section className={styles.resultGroup}>
                      <span className="metadata">PIECES ({matchingProducts.length})</span>
                      <div className={styles.productsGrid}>
                        {matchingProducts.map((prod) => (
                          <Link key={prod.id} href={`/product/${prod.slug}`} className={styles.productCard}>
                            <div className={styles.productFrame}>
                              <Image
                                src={prod.image}
                                alt={prod.name}
                                fill
                                sizes="(max-width: 768px) 100vw, 25vw"
                                className={styles.productImg}
                              />
                            </div>
                            <div className={styles.productMeta}>
                              <span className="metadata">{prod.collection}</span>
                              <h3 className={`${styles.productTitle} heading-3`}>{prod.name}</h3>
                              <p className={styles.productPrice}>{prod.formattedPrice}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Crafts */}
                  {matchingCrafts.length > 0 && (
                    <section className={styles.resultGroup}>
                      <span className="metadata">INTANGIBLE CRAFT HERITAGE ({matchingCrafts.length})</span>
                      <div className={styles.craftsGrid}>
                        {matchingCrafts.map((craft) => (
                          <Link key={craft.slug} href={`/craft/${craft.slug}`} className={styles.craftCard}>
                            <div className={styles.craftFrame}>
                              <Image
                                src={craft.heroImage}
                                alt={craft.name}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className={styles.craftImg}
                              />
                              <div className={styles.craftBadge}>
                                <Badge variant="terracotta">{craft.registrationCode}</Badge>
                              </div>
                            </div>
                            <div className={styles.craftMeta}>
                              <span className="metadata">{craft.regionalOrigin}</span>
                              <h3 className={`${styles.craftTitle} heading-3`}>{craft.name}</h3>
                              <p className="body-regular" style={{ color: "var(--muted)", margin: "4px 0" }}>
                                {craft.summary}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Journal */}
                  {matchingJournal.length > 0 && (
                    <section className={styles.resultGroup}>
                      <span className="metadata">JOURNAL DISPATCHES ({matchingJournal.length})</span>
                      <div className={styles.journalGrid}>
                        {matchingJournal.map((story) => (
                          <Link key={story.id} href={`/journal/${story.slug}`} className={styles.journalCard}>
                            <div className={styles.journalMeta}>
                              <span className="metadata">{story.category} &bull; {story.readTime}</span>
                              <h3 className={`${styles.journalTitle} heading-3`}>{story.title}</h3>
                              <p className="body-regular" style={{ color: "var(--muted)", margin: "4px 0" }}>
                                {story.excerpt}
                              </p>
                              <span className={styles.readLink}>READ ESSAY &rarr;</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </section>
                  )}
                </div>
              )}
            </>
          ) : (
            <div className={styles.initialState}>
              <p className="body-editorial" style={{ color: "var(--muted)" }}>
                Begin typing above to search the NAVA catalog across garments, intangible craft
                records, and editorial essays.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
