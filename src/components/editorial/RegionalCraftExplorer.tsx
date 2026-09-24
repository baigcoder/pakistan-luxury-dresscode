"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
    name: "PUNJAB",
    tradition: "RAW TUSSAR SILK & MINIMALIST ZARDOZI",
    materials: "Hand-spun mulberry silk yarn, unplated metallic wire",
    ichRef: "ICH REG. PUNJAB EMB-082",
    description: "Centuries of court needlework disciplined into quiet architectural clavicle lines and unconstructed tailoring.",
    image: "/images/hero-couture.jpg",
    link: "/craft/punjab-zardozi",
  },
  {
    id: "sindh",
    name: "SINDH",
    tradition: "14-STAGE RIVERBED AJRAK & INDIGO VATS",
    materials: "Alluvial river clay, wild indigo, madder root, acacia wood",
    ichRef: "ICH REG. SINDH BLK-049",
    description: "Astronomical geometric block printing co-authored with the mineral waters of the Lower Indus basin.",
    image: "/images/macro-ajrak.jpg",
    link: "/craft/sindhi-ajrak",
  },
  {
    id: "kpk",
    name: "KPK",
    tradition: "SWAT HIGHLAND WOOL & PIT-LOOM WEAVING",
    materials: "Un-dyed mountain fleece, hand-spun pashmina",
    ichRef: "ICH REG. KPK WL-031",
    description: "High-altitude pit-loom weaving yielding dense, weather-resistant outerwear cloths and cloud-soft shawls.",
    image: "/images/hero-men.jpg",
    link: "/craft/swat-weaving",
  },
  {
    id: "balochistan",
    name: "BALOCHISTAN",
    tradition: "DESERT DUNE WEAVE & CAMEL FIBER",
    materials: "Raw camel fleece, vegetable walnut husks, pomegranate rind",
    ichRef: "ICH REG. BAL-019",
    description: "Nomadic warp-faced rugs and dense ceremonial wraps colored solely with desert minerals and wild roots.",
    image: "/images/craft-atelier.jpg",
    link: "/craft",
  },
  {
    id: "kashmir",
    name: "KASHMIR",
    tradition: "ARCHIVAL CASHMERE & SOZNI NEEDLEWORK",
    materials: "Highland mountain capra hircus down, mulberry silk floss",
    ichRef: "ICH REG. KSH-007",
    description: "Microscopic single-strand needlework so fine that both faces of the textile appear identical.",
    image: "/images/lahore-courtyard.jpg",
    link: "/craft",
  },
  {
    id: "gilgit-baltistan",
    name: "GILGIT-BALTISTAN",
    tradition: "ALPINE PATTOO & MONASTIC FELT",
    materials: "Natural sheep wool, river-stone wash, goat hair cord",
    ichRef: "ICH REG. GB-014",
    description: "Heavy woven pattoo fabric fulled in glacial streams to create impenetrable cold-climate tailoring.",
    image: "/images/hero-editorial-dresscode.jpg",
    link: "/craft",
  },
];

export const RegionalCraftExplorer: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<RegionItem>(REGIONS[0]);
  const [lensStage, setLensStage] = useState<"macro" | "detail" | "garment">("macro");
  const containerRef = useRef<HTMLDivElement>(null);
  const stageFrameRef = useRef<HTMLDivElement>(null);

  const lensImages = {
    macro: "/images/macro-ajrak.jpg",
    detail: "/images/craft-atelier.jpg",
    garment: "/images/hero-editorial-dresscode.jpg",
  };

  const lensCaptions = {
    macro: "01 / MACRO — Extreme close-up of natural madder root mordants, hand-carved acacia pore relief, and alluvial clay resist.",
    detail: "02 / DETAIL — Hand-needlework registering negative space across unconstructed raw silk lapels in the Lahore atelier.",
    garment: "03 / GARMENT — The completed architectural silhouette draped in natural space, unconstructed and free from artificial stiffening.",
  };

  // ScrollTrigger orchestration for lens transition
  useEffect(() => {
    let ctx: { revert: () => void } | undefined;
    let isCancelled = false;

    const initScrollTrigger = async () => {
      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        if (isCancelled) return;
        gsap.registerPlugin(ScrollTrigger);

        if (containerRef.current && stageFrameRef.current) {
          ctx = gsap.context(() => {
            ScrollTrigger.create({
              trigger: stageFrameRef.current,
              start: "top 75%",
              end: "bottom 25%",
              onEnter: () => setLensStage("macro"),
              onLeaveBack: () => setLensStage("macro"),
            });
          }, containerRef);
        }
      } catch {
        // Fallback gracefully if gsap fails to initialize
      }
    };

    initScrollTrigger();

    return () => {
      isCancelled = true;
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div className={styles.explorerWrap} ref={containerRef}>
      {/* ==========================================================================
          Part 1: The 3-Stage Macro -> Detail -> Garment Visual Journey
          ========================================================================== */}
      <section className={styles.lensSection}>
        <div className={styles.lensHeader}>
          <div>
            <span className={styles.eyebrow}>MATERIAL TRANSFORMATION</span>
            <h2 className={styles.lensTitle}>THE THREE-STAGE ANATOMY</h2>
          </div>

          {/* Lens Stage Selector */}
          <div className={styles.lensTabs}>
            {(["macro", "detail", "garment"] as const).map((stage) => (
              <button
                key={stage}
                type="button"
                className={[
                  styles.lensTab,
                  lensStage === stage ? styles.lensTabActive : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => setLensStage(stage)}
              >
                {stage.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Large Visual Stage Frame */}
        <div className={styles.stageFrame} ref={stageFrameRef} data-cursor="view">
          <Image
            src={lensImages[lensStage]}
            alt={lensCaptions[lensStage]}
            fill
            sizes="(max-width: 1500px) calc(100vw - 64px), 1500px"
            className={styles.stageImg}
          />
          <div className={styles.stageCaption}>
            <span className={styles.captionText}>{lensCaptions[lensStage]}</span>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          Part 2: Interactive Regional Story
          ========================================================================== */}
      <section className={styles.regionsSection}>
        <div className={styles.regionsHeader}>
          <span className={styles.eyebrow}>GEOGRAPHIC PROVENANCE</span>
          <h2 className={styles.regionsTitle}>SIX REGIONAL ARCHIVES</h2>
          <p className={styles.regionsSub}>
            Hover any territory below to observe its documented craft lineage, material chemistry,
            and National ICH index code.
          </p>
        </div>

        <div className={styles.regionsGrid}>
          {/* Left: Region List */}
          <div className={styles.regionsList}>
            {REGIONS.map((region) => {
              const isActive = activeRegion.id === region.id;
              return (
                <div
                  key={region.id}
                  className={[
                    styles.regionItem,
                    isActive ? styles.regionActive : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onMouseEnter={() => setActiveRegion(region)}
                  onClick={() => setActiveRegion(region)}
                >
                  <div className={styles.regionItemTop}>
                    <span className={styles.regionNumber}>{region.ichRef.split(" ")[2] || "ICH"}</span>
                    <h3 className={styles.regionName}>{region.name}</h3>
                  </div>
                  <p className={styles.regionTradition}>{region.tradition}</p>
                </div>
              );
            })}
          </div>

          {/* Right: Dynamic Photographic Preview */}
          <div className={styles.previewPanel}>
            <div className={styles.previewImageFrame} data-cursor="view">
              <Image
                src={activeRegion.image}
                alt={activeRegion.tradition}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={styles.previewImg}
              />
              <div className={styles.previewBadge}>
                <span>{activeRegion.ichRef}</span>
              </div>
            </div>

            <div className={styles.previewNarrative}>
              <span className={styles.previewMaterials}>
                MATERIALS: {activeRegion.materials}
              </span>
              <p className={styles.previewDesc}>{activeRegion.description}</p>
              <Link href={activeRegion.link} className={styles.previewLink}>
                <span>EXPLORE REGIONAL ARCHIVE</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
