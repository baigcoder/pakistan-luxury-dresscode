"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./HeroCampaign.module.css";

gsap.registerPlugin(ScrollTrigger);

export const HeroCampaign: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll-away parallax: the photograph drifts slower than the page,
  // the typography lifts and dissolves.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const trigger = {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      };
      gsap.to(mediaRef.current, { yPercent: 18, ease: "none", scrollTrigger: trigger });
      gsap.to(contentRef.current, {
        yPercent: -30,
        opacity: 0,
        ease: "none",
        scrollTrigger: { ...trigger, end: "70% top" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.hero} aria-label="Spring / Summer 2026 campaign">
      <div ref={mediaRef} className={styles.media} data-cursor="view">
        <div className={styles.mediaInner}>
          <Image
            src="/images/hero-editorial-dresscode.jpg"
            alt="NAVA SS26 campaign — three models in an unconstructed raw silk trench, an architectural bandgala and organza drapery"
            fill
            priority
            sizes="100vw"
            className={styles.image}
          />
        </div>
        <div className={styles.scrim} />
      </div>

      <div ref={contentRef} className={styles.content}>
        <div className={styles.topRow}>
          <span className={styles.meta}>
            <span className={styles.metaIndex}>SS26</span> Edition 01 — Noor
          </span>
          <span className={`${styles.meta} ${styles.coords}`}>31.5204° N, 74.3587° E — Lahore</span>
        </div>

        <h1 className={styles.headline}>
          <span className={styles.lineMask}>
            <span className={styles.line}>Form,</span>
          </span>
          <span className={styles.lineMask}>
            <span className={`${styles.line} ${styles.lineIndent}`}>
              <em>redefined</em>
            </span>
          </span>
        </h1>

        <div className={styles.bottomRow}>
          <p className={styles.lede}>
            Contemporary silhouettes shaped by Pakistani craft — raw silk, hand-carved block and
            quiet tailoring, made in Lahore and Karachi.
          </p>

          <div className={styles.ctas}>
            <Link href="/shop" className={styles.primaryCta}>
              <span>Explore the collection</span>
              <span className={styles.ctaArrow} aria-hidden="true">→</span>
            </Link>
            <Link href="/craft" className={styles.secondaryCta}>
              Discover the craft
            </Link>
          </div>

          <div className={styles.scrollCue} aria-hidden="true">
            <span className={styles.scrollLabel}>Scroll</span>
            <span className={styles.scrollTrack}>
              <span className={styles.scrollThumb} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
