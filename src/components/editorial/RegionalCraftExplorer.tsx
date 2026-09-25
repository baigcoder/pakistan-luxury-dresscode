"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./RegionalCraftExplorer.module.css";

interface RegionItem {
  id: string;
  name: string;
  tradition: string;
  materials: string;
  ichRef: string;
  description: string;
  image: string;
  link: string;
}

const REGIONS: RegionItem[] = [
  {
    id: "punjab",
    name: "Punjab",
    tradition: "Raw tussar silk & minimalist Zardozi",
    materials: "Hand-spun mulberry silk yarn, unplated metallic wire",
    ichRef: "ICH Reg. Punjab EMB-082",
    description: "Centuries of court needlework disciplined into quiet architectural clavicle lines and unconstructed tailoring.",
    image: "/images/hero-couture.jpg",
    link: "/craft/punjab-zardozi",
  },
  {
    id: "sindh",
    name: "Sindh",
    tradition: "14-stage riverbed Ajrak & indigo vats",
    materials: "Alluvial river clay, wild indigo, madder root, acacia wood",
    ichRef: "ICH Reg. Sindh BLK-049",
    description: "Astronomical geometric block printing co-authored with the mineral waters of the Lower Indus basin.",
    image: "/images/macro-ajrak.jpg",
    link: "/craft/sindhi-ajrak",
  },
  {
    id: "kpk",
    name: "Khyber Pakhtunkhwa",
    tradition: "Swat highland wool & pit-loom weaving",
    materials: "Un-dyed mountain fleece, hand-spun pashmina",
    ichRef: "ICH Reg. KPK WL-031",
    description: "High-altitude pit-loom weaving yielding dense, weather-resistant outerwear cloths and cloud-soft shawls.",
    image: "/images/hero-men.jpg",
    link: "/craft/swat-weaving",
  },
  {
    id: "balochistan",
    name: "Balochistan",
    tradition: "Desert dune weave & camel fibre",
    materials: "Raw camel fleece, vegetable walnut husks, pomegranate rind",
    ichRef: "ICH Reg. BAL-019",
    description: "Nomadic warp-faced rugs and dense ceremonial wraps coloured solely with desert minerals and wild roots.",
    image: "/images/craft-atelier.jpg",
    link: "/craft",
  },
  {
    id: "kashmir",
    name: "Kashmir",
    tradition: "Archival cashmere & Sozni needlework",
    materials: "Highland mountain capra hircus down, mulberry silk floss",
    ichRef: "ICH Reg. KSH-007",
    description: "Microscopic single-strand needlework so fine that both faces of the textile appear identical.",
    image: "/images/lahore-courtyard.jpg",
    link: "/craft",
  },
  {
    id: "gilgit-baltistan",
    name: "Gilgit-Baltistan",
    tradition: "Alpine pattoo & monastic felt",
    materials: "Natural sheep wool, river-stone wash, goat hair cord",
    ichRef: "ICH Reg. GB-014",
    description: "Heavy woven pattoo fabric fulled in glacial streams to create impenetrable cold-climate tailoring.",
    image: "/images/hero-editorial-dresscode.jpg",
    link: "/craft",
  },
];

const STAGES = [
  {
    id: "macro",
    label: "Macro",
    image: "/images/macro-ajrak.jpg",
    caption: "Natural madder mordants, hand-carved acacia relief and alluvial clay resist.",
  },
  {
    id: "detail",
    label: "Detail",
    image: "/images/craft-atelier.jpg",
    caption: "Needlework registering negative space across an unconstructed raw-silk lapel.",
  },
  {
    id: "garment",
    label: "Garment",
    image: "/images/hero-editorial-dresscode.jpg",
    caption: "The finished silhouette — unconstructed, and free of artificial stiffening.",
  },
] as const;

const pad = (n: number) => String(n).padStart(2, "0");

export const RegionalCraftExplorer: React.FC = () => {
  const [stage, setStage] = useState(0);
  const [activeRegion, setActiveRegion] = useState(0);
  const [inView, setInView] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const stageRef = useRef<HTMLDivElement>(null);

  // The stage only advances on its own while it is on screen (never under reduced motion)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = stageRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.35,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const selectStage = (i: number) => {
    setStage(i);
    setAutoplay(false); // a deliberate choice outranks the timer
  };

  const region = REGIONS[activeRegion];

  return (
    <div className={styles.explorerWrap}>
      {/* ==========================================================================
          Part 1 — Material anatomy: macro → detail → garment
          ========================================================================== */}
      <section className={styles.lensSection} aria-labelledby="anatomy-heading">
        <header className={styles.header}>
          <div>
            <span className={styles.eyebrow} data-reveal>
              <span className={styles.index}>(04)</span> Material anatomy
            </span>
            <h2 id="anatomy-heading" className={styles.title} data-reveal="lines">
              <span className="line-mask">
                <span>From fibre</span>
              </span>
              <span className="line-mask">
                <span>
                  to <em>form</em>
                </span>
              </span>
            </h2>
          </div>

          <div className={styles.lensTabs} role="group" aria-label="Stage" data-reveal>
            {STAGES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                className={[styles.lensTab, stage === i ? styles.lensTabActive : ""].filter(Boolean).join(" ")}
                aria-pressed={stage === i}
                onClick={() => selectStage(i)}
              >
                <span className={styles.lensNum}>{pad(i + 1)}</span>
                <span className={styles.lensLabel}>{s.label}</span>
                <span
                  className={styles.lensProgress}
                  data-running={autoplay && inView && stage === i ? "" : undefined}
                  onAnimationEnd={() => setStage((stage + 1) % STAGES.length)}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
        </header>

        <div ref={stageRef} className={styles.stageFrame} data-reveal="clip" data-cursor="view">
          {STAGES.map((s, i) => (
            <Image
              key={s.id}
              src={s.image}
              alt={i === stage ? `${s.label}: ${s.caption}` : ""}
              fill
              sizes="(max-width: 1760px) calc(100vw - 88px), 1672px"
              className={[styles.stageImg, i === stage ? styles.isActive : ""].filter(Boolean).join(" ")}
            />
          ))}
          <div className={styles.stageCaption} aria-live="polite">
            <span className={styles.captionFig}>
              Fig. {pad(stage + 1)} — {STAGES[stage].label}
            </span>
            <span key={stage} className={styles.captionText}>
              {STAGES[stage].caption}
            </span>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          Part 2 — Six regional archives
          ========================================================================== */}
      <section className={styles.regionsSection} aria-labelledby="regions-heading">
        <header className={styles.header}>
          <div>
            <span className={styles.eyebrow} data-reveal>
              <span className={styles.index}>(05)</span> Geographic provenance
            </span>
            <h2 id="regions-heading" className={styles.title} data-reveal="lines">
              <span className="line-mask">
                <span>Six regions,</span>
              </span>
              <span className="line-mask">
                <span>
                  one <em>hand</em>
                </span>
              </span>
            </h2>
          </div>
          <p className={styles.regionsSub} data-reveal>
            Each technique is traced to its territory, its material chemistry and its entry in the
            national register of intangible heritage.
          </p>
        </header>

        <div className={styles.regionsGrid}>
          <ol className={styles.regionsList}>
            {REGIONS.map((r, i) => {
              const isActive = activeRegion === i;
              return (
                <li key={r.id} data-reveal data-reveal-delay={String(i * 70)}>
                  <button
                    type="button"
                    className={[styles.regionItem, isActive ? styles.regionActive : ""].filter(Boolean).join(" ")}
                    aria-pressed={isActive}
                    onMouseEnter={() => setActiveRegion(i)}
                    onFocus={() => setActiveRegion(i)}
                    onClick={() => setActiveRegion(i)}
                  >
                    <span className={styles.regionNumber}>{pad(i + 1)}</span>
                    <span className={styles.regionText}>
                      <span className={styles.regionName}>{r.name}</span>
                      <span className={styles.regionTradition}>{r.tradition}</span>
                    </span>
                    <span className={styles.regionArrow} aria-hidden="true">
                      →
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className={styles.previewPanel}>
            <div className={styles.previewImageFrame} data-reveal="clip" data-cursor="view">
              {REGIONS.map((r, i) => (
                <Image
                  key={r.id}
                  src={r.image}
                  alt={i === activeRegion ? `${r.name} — ${r.tradition}` : ""}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={[styles.previewImg, i === activeRegion ? styles.isActive : ""].filter(Boolean).join(" ")}
                />
              ))}
            </div>

            <div key={region.id} className={styles.previewNarrative} aria-live="polite">
              <div className={styles.previewTop}>
                <span className={styles.previewRef}>{region.ichRef}</span>
                <span className={styles.previewCount}>
                  {pad(activeRegion + 1)} / {pad(REGIONS.length)}
                </span>
              </div>
              <p className={styles.previewDesc}>{region.description}</p>
              <dl className={styles.previewMeta}>
                <dt>Materials</dt>
                <dd>{region.materials}</dd>
              </dl>
              <Link href={region.link} className={styles.previewLink}>
                Explore the {region.name} archive <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
