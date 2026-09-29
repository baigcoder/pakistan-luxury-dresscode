"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BRAND } from "@/config/brand";
import styles from "./FounderSpotlight.module.css";

gsap.registerPlugin(ScrollTrigger);

const SPEC_POINTS = [
  {
    num: "01",
    label: "Algorithmic Restraint",
    detail: "Treating silhouettes as software architecture — stripping away ornamental excess to let mathematical drape and raw fiber lead.",
  },
  {
    num: "02",
    label: "Modular Cut & Tension",
    detail: "Zero synthetic stiffeners. Raw silk collars, unconstructed shoulders, and cantilevered bias cuts engineered with physical balance.",
  },
  {
    num: "03",
    label: "Intangible Provenance",
    detail: "Direct covenants with multi-generational master ustads across Punjab, Sindh, and Swat, registered under Pakistan's ICH charter.",
  },
];

export const FounderSpotlight: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { yPercent: -6 },
        {
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="founder-spotlight-heading">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Visual Column */}
          <div className={styles.visual}>
            <div className={styles.frame} data-reveal="clip" data-cursor="view">
              <div ref={imageRef} className={styles.parallax}>
                <Image
                  src={BRAND.founder.image}
                  alt={`${BRAND.founder.name} — Founder, Software Engineer & Creative Director of ${BRAND.name}`}
                  fill
                  sizes="(max-width: 900px) 100vw, 46vw"
                  className={styles.image}
                  priority={false}
                />
              </div>
            </div>
            <div className={styles.captionRow}>
              <span className={styles.captionTag}>THE ATELIER DESK</span>
              <span className={styles.captionText}>
                {BRAND.founder.name} &middot; Systems Architecture &middot; Lahore Atelier
              </span>
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className={styles.content}>
            <div className={styles.eyebrowRow}>
              <span className={styles.eyebrow} data-reveal>
                <span className={styles.index}>(04)</span> Creative Direction &middot; Founder
              </span>
              <span className={styles.disciplineTag} data-reveal>
                Software Engineer
              </span>
            </div>

            <h2 id="founder-spotlight-heading" className={styles.heading} data-reveal="lines">
              <span className="line-mask">
                <span>The architecture of</span>
              </span>
              <span className="line-mask">
                <span>
                  <em>code</em> &amp; couture.
                </span>
              </span>
            </h2>

            <blockquote className={styles.quote} data-reveal>
              &ldquo;{BRAND.founder.quote}&rdquo;
            </blockquote>

            <p className={styles.bio} data-reveal>
              Founded by software engineer and creative technologist <strong>{BRAND.founder.name}</strong>,
              NAVA translates the austere minimalism of systems engineering into contemporary South Asian luxury.
              By rejecting superficial ornamentation, each garment becomes an exercise in structural purity—crafted
              from raw tussar silk, river-washed cotton, and hand-sheared Swat wool.
            </p>

            {/* Spec Points */}
            <ul className={styles.specsList}>
              {SPEC_POINTS.map((item, i) => (
                <li key={item.num} className={styles.specItem} data-reveal data-reveal-delay={String(i * 90)}>
                  <div className={styles.specHeader}>
                    <span className={styles.specNum}>{item.num}</span>
                    <span className={styles.specLabel}>{item.label}</span>
                  </div>
                  <p className={styles.specDetail}>{item.detail}</p>
                </li>
              ))}
            </ul>

            <div className={styles.actions} data-reveal>
              <Link href="/about#founder" className={styles.primaryCta}>
                <span>Explore the Founder&apos;s Dossier</span>
                <span className={styles.ctaArrow} aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                href="/journal/the-systems-architect-software-engineering-couture"
                className={styles.secondaryLink}
              >
                Read Founder&apos;s Dispatch <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
