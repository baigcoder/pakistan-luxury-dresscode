"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./HomeStatement.module.css";

gsap.registerPlugin(ScrollTrigger);

type Segment = { text: string; em?: boolean };

const MANIFESTO: Segment[] = [
  { text: "NAVA is a Pakistani house of form. We translate six regional crafts —" },
  { text: "Ajrak", em: true },
  { text: "from the Indus," },
  { text: "Zardozi", em: true },
  { text: "from Punjab," },
  { text: "highland wool", em: true },
  { text: "from the north — into silhouettes that are quiet, precise, and made to be kept." },
];

const STATS = [
  { value: "06", label: "Regional archives" },
  { value: "14", label: "Stages of Ajrak" },
  { value: "02", label: "Ateliers — Lahore & Karachi" },
];

export const HomeStatement: React.FC = () => {
  const textRef = useRef<HTMLParagraphElement>(null);

  // Words light up as the paragraph travels through the viewport
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const words = textRef.current?.querySelectorAll(`.${styles.word}`);
    if (!words?.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: 0.14 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.08,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 82%",
            end: "bottom 48%",
            scrub: 0.6,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} aria-labelledby="house-statement">
      <div className={styles.grid}>
        <aside className={styles.aside}>
          <span className={styles.eyebrow} data-reveal>
            <span className={styles.index}>(01)</span> The House
          </span>

          <figure className={styles.figure} data-reveal="clip">
            <div className={styles.figureImage}>
              <Image
                src="/images/trench-charcoal.jpg"
                alt="A charcoal wool coat with hand-embroidered lapels, worn in a stone courtyard"
                fill
                sizes="(max-width: 900px) 60vw, 22vw"
                className={styles.img}
              />
            </div>
            <figcaption className={styles.caption}>Fig. 01 — Embroidered wool, Lahore</figcaption>
          </figure>
        </aside>

        <div className={styles.body}>
          <h2 id="house-statement" className={styles.srOnly}>
            The House
          </h2>
          <p ref={textRef} className={styles.statement}>
            {MANIFESTO.map((seg, i) => {
              const words = seg.text.split(" ");
              return (
                <React.Fragment key={i}>
                  {words.map((w, j) => (
                    <span
                      key={j}
                      className={[styles.word, seg.em ? styles.em : ""].filter(Boolean).join(" ")}
                    >
                      {w}{" "}
                    </span>
                  ))}
                </React.Fragment>
              );
            })}
          </p>

          <div className={styles.footer}>
            <dl className={styles.stats}>
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={styles.stat}
                  data-reveal
                  data-reveal-delay={String(i * 120)}
                >
                  <dt className={styles.statLabel}>{s.label}</dt>
                  <dd className={styles.statValue}>{s.value}</dd>
                </div>
              ))}
            </dl>

            <Link href="/about" className={styles.link} data-reveal>
              Read the manifesto <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
