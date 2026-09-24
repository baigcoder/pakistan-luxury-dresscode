"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./HomeCampaignInterlude.module.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * A pinned frame that opens from a window into a full-bleed photograph
 * as the reader scrolls, with the edit title parting around it.
 */
export const HomeCampaignInterlude: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLSpanElement>(null);
  const rightRef = useRef<HTMLSpanElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(
        { desktop: "(min-width: 901px)", mobile: "(max-width: 900px)" },
        (context) => {
          const { desktop } = context.conditions as { desktop: boolean };
          const startInset = desktop ? "16% 31% 16% 31%" : "22% 12% 22% 12%";

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.8,
            },
          });

          tl.fromTo(
            frameRef.current,
            { clipPath: `inset(${startInset} round 4px)` },
            { clipPath: "inset(0% 0% 0% 0% round 0px)", ease: "power2.inOut", duration: 1 },
            0
          )
            .fromTo(imageRef.current, { scale: 1.3 }, { scale: 1, ease: "power2.inOut", duration: 1 }, 0)
            .to(leftRef.current, { xPercent: -60, opacity: 0, ease: "power2.in", duration: 0.7 }, 0)
            .to(rightRef.current, { xPercent: 60, opacity: 0, ease: "power2.in", duration: 0.7 }, 0)
            .fromTo(
              captionRef.current,
              { opacity: 0, y: 40 },
              { opacity: 1, y: 0, ease: "power2.out", duration: 0.35 },
              0.75
            );
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} aria-label="Edit 02 — Mitti">
      <div className={styles.sticky}>
        <div className={styles.titles} aria-hidden="true">
          <span ref={leftRef} className={styles.titleLeft}>
            Edit 02
          </span>
          <span ref={rightRef} className={styles.titleRight}>
            <em>Mitti</em>
          </span>
        </div>

        <div ref={frameRef} className={styles.frame} data-cursor="explore">
          <div ref={imageRef} className={styles.imageWrap}>
            <Image
              src="/images/lahore-courtyard.jpg"
              alt="NAVA campaign — fluid drapery in raking light across a historic Lahore courtyard"
              fill
              sizes="100vw"
              className={styles.image}
            />
          </div>
          <div className={styles.scrim} />

          <div ref={captionRef} className={styles.caption}>
            <div>
              <span className={styles.tag}>Edit 02 — Mitti</span>
              <p className={styles.headline}>
                Texture becomes <em>language.</em>
              </p>
            </div>
            <div className={styles.captionRight}>
              <p className={styles.note}>
                Raking light across sixteenth-century brickwork. Alluvial tones, unhurried drape.
              </p>
              <Link href="/collections/edit-02-mitti" className={styles.cta}>
                Explore the edit <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
