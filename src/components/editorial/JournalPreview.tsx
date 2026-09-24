"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { JOURNAL_STORIES } from "@/data/journal";
import { ArrowRight } from "lucide-react";
import styles from "./JournalPreview.module.css";

export const JournalPreview: React.FC = () => {
  return (
    <section className={styles.section} aria-label="Journal & Editorial Essays">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.eyebrow}>THE ATELIER ARCHIVE</span>
            <h2 className={styles.title}>EDITORIAL DISPATCHES</h2>
          </div>

          <Link href="/journal" className={styles.viewAllLink}>
            <span>READ ALL DISPATCHES</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className={styles.grid}>
          {JOURNAL_STORIES.slice(0, 3).map((story) => (
            <article key={story.id} className={styles.card} data-cursor="view">
              <Link href={`/journal/${story.slug}`} className={styles.cardLink}>
                <div className={styles.imageFrame}>
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={styles.image}
                  />
                  <div className={styles.categoryBadge}>
                    <span>{story.category}</span>
                  </div>
                </div>

                <div className={styles.meta}>
                  <div className={styles.dateRow}>
                    <span className={styles.storyDate}>{story.publishedDate}</span>
                    <span className={styles.readTime}>{story.readTime}</span>
                  </div>

                  <h3 className={styles.storyTitle}>{story.title}</h3>

                  <p className={styles.excerpt}>{story.excerpt}</p>

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
  );
};
