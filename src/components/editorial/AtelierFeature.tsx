"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AtelierFeature.module.css";

gsap.registerPlugin(ScrollTrigger);

const PRINCIPLES = [
  { k: "Provenance", v: "Every technique traced to its region and registered lineage." },
  { k: "Hand", v: "Embroidery, block and loom work led by master artisans." },
  { k: "Time", v: "Made to order in small editions — never mass-produced." },
];

export const AtelierFeature: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="atelier-heading">
      <div className={styles.grid}>
        <div className={styles.visual}>
          <div className={styles.frame} data-reveal="clip" data-cursor="view">
            <div ref={imageRef} className={styles.parallax}>
              <Image
                src="/images/craft-atelier.jpg"
                alt="A master artisan hand-embroidering gold Zardozi on crimson silk stretched over a wooden frame"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.image}
              />
            </div>
          </div>
          <span className={styles.figcaption}>Fig. 03 — Zardozi frame, Lahore atelier</span>
        </div>

        <div className={styles.copy}>
          <span className={styles.eyebrow} data-reveal>
            <span className={styles.index}>(03)</span> The Atelier
          </span>

          <h2 id="atelier-heading" className={styles.heading} data-reveal="lines">
            <span className="line-mask">
              <span>Made by hand,</span>
            </span>
            <span className="line-mask">
              <span>
                <em>measured</em> in
              </span>
            </span>
            <span className="line-mask">
              <span>hours.</span>
            </span>
          </h2>

          <p className={styles.body} data-reveal>
            Behind each NAVA piece is a lineage — metallic thread couched by hand in Punjab, wooden
            blocks carved and pressed in Sindh, highland wool spun in the north. We work with these
            ateliers directly, and we name them.
          </p>

          <ul className={styles.principles}>
            {PRINCIPLES.map((p, i) => (
              <li key={p.k} className={styles.principle} data-reveal data-reveal-delay={String(i * 100)}>
                <span className={styles.pKey}>{p.k}</span>
                <span className={styles.pVal}>{p.v}</span>
              </li>
            ))}
          </ul>

          <Link href="/craft" className={styles.cta} data-reveal>
            <span>Enter the craft archive</span>
            <span className={styles.ctaArrow} aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
