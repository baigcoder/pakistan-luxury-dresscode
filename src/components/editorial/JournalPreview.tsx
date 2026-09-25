import React from "react";
import Link from "next/link";
import Image from "next/image";
import { JOURNAL_STORIES } from "@/data/journal";
import styles from "./JournalPreview.module.css";

/** "Headline: Deck" → headline set large, deck set quiet beneath it */
const splitTitle = (title: string) => {
  const at = title.indexOf(":");
  return at === -1 ? [title, ""] : [title.slice(0, at), title.slice(at + 1).trim()];
};

export const JournalPreview: React.FC = () => {
  const stories = JOURNAL_STORIES.slice(0, 3);

  return (
    <section className={styles.section} aria-labelledby="journal-heading">
      <header className={styles.header}>
        <div>
          <span className={styles.eyebrow} data-reveal>
            <span className={styles.index}>(06)</span> The journal
          </span>
          <h2 id="journal-heading" className={styles.title} data-reveal="lines">
            <span className="line-mask">
              <span>Notes from</span>
            </span>
            <span className="line-mask">
              <span>
                the <em>atelier</em>
              </span>
            </span>
          </h2>
        </div>
        <Link href="/journal" className={styles.viewAll} data-reveal>
          All dispatches <span aria-hidden="true">→</span>
        </Link>
      </header>

      <div className={styles.grid}>
        {stories.map((story, i) => {
          const [headline, deck] = splitTitle(story.title);
          const isLead = i === 0;
          return (
            <article
              key={story.id}
              className={[styles.card, isLead ? styles.lead : ""].filter(Boolean).join(" ")}
              data-reveal
              data-reveal-delay={String(i * 120)}
            >
              <Link href={`/journal/${story.slug}`} className={styles.cardLink} data-cursor="read">
                <div className={styles.imageFrame}>
                  <Image
                    src={story.image}
                    alt=""
                    fill
                    sizes={isLead ? "(max-width: 900px) 100vw, 55vw" : "(max-width: 900px) 100vw, 20vw"}
                    className={styles.image}
                  />
                </div>

                <div className={styles.meta}>
                  <div className={styles.dateRow}>
                    <span className={styles.category}>{story.category}</span>
                    <span>{story.publishedDate}</span>
                    <span className={styles.readTime}>{story.readTime}</span>
                  </div>

                  <h3 className={styles.storyTitle}>
                    {headline}
                    {deck && <span className={styles.deck}>{deck}</span>}
                  </h3>

                  {isLead && <p className={styles.excerpt}>{story.excerpt}</p>}

                  <span className={styles.readMore}>
                    Read <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};
