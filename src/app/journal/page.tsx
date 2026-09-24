"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { JOURNAL_STORIES } from "@/data/journal";
import { ArrowRight } from "lucide-react";
import styles from "./page.module.css";

const CATEGORIES = ["All", "Form", "Craft", "Places", "Material", "Atelier"] as const;

export default function JournalPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredStories =
    activeCategory === "All"
      ? JOURNAL_STORIES
      : JOURNAL_STORIES.filter(
          (s) => s.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <div className={styles.page}>
      {/* Editorial Header */}
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerTop}>
            <span className={styles.eyebrow}>THE ATELIER JOURNAL &bull; ARCHIVE</span>
            <h1 className={styles.title}>
              The atelier <em>journal</em>
            </h1>
            <p className={styles.subhead}>
              Critical writings on contemporary Pakistani form, textile anthropology,
              riverbed indigo dyeing, and architectural tailoring.
            </p>
          </div>

          {/* Understated Category Chips */}
          <div className={styles.categoryChips}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={[
                  styles.chip,
                  activeCategory === cat ? styles.chipActive : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* ==========================================================================
          Articles Grid (Large Photography, Quiet Typography, No Heavy Card UI)
          ========================================================================== */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.storiesGrid}>
            {filteredStories.map((story) => (
              <article key={story.id} className={styles.storyCard} data-cursor="view">
                <Link href={`/journal/${story.slug}`} className={styles.storyLink}>
                  {/* Category & Date / Reading Time (Above Image) */}
                  <div className={styles.metaAbove}>
                    <span className={styles.categoryTag}>{story.category}</span>
                    <span className={styles.dateTag}>
                      {story.publishedDate} &middot; {story.readTime}
                    </span>
                  </div>

                  {/* Large Photography */}
                  <div className={styles.imageFrame}>
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                      className={styles.image}
                    />
                  </div>

                  {/* Story Content Below Image */}
                  <div className={styles.storyContent}>
                    <h2 className={styles.storyTitle}>{story.title}</h2>
                    <p className={styles.intro}>{story.excerpt}</p>
                    <span className={styles.readMore}>
                      READ DISPATCH &rarr;
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
