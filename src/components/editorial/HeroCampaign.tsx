"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles } from "lucide-react";
import styles from "./HeroCampaign.module.css";

gsap.registerPlugin(ScrollTrigger);

interface CampaignSlide {
  id: string;
  season: string;
  edition: string;
  titlePart1: string;
  titlePart2: string;
  coords: string;
  lede: string;
  desktopImage: string;
  mobileImage: string;
  alt: string;
  ctaText: string;
  ctaHref: string;
  secondaryText: string;
  secondaryHref: string;
  fabricSpec: string;
  artisanSpec: string;
}

const CAMPAIGN_SLIDES: CampaignSlide[] = [
  {
    id: "flagship-ss26",
    season: "SS26",
    edition: "Edition 01 — Noor & Obsidian",
    titlePart1: "Form,",
    titlePart2: "redefined",
    coords: "31.5204° N, 74.3587° E — Lahore",
    lede: "Contemporary silhouettes shaped by Pakistani craft — raw silk, hand-carved block and quiet tailoring, made in Lahore and Karachi.",
    desktopImage: "/images/hero-couture-campaign-2026.jpg",
    mobileImage: "/images/hero-couture-campaign-2026.jpg",
    alt: "NAVA SS26 Campaign — Contemporary Pakistani couture and tailored suiting under historic Lahore arches",
    ctaText: "Explore the collection",
    ctaHref: "/shop",
    secondaryText: "Discover the craft",
    secondaryHref: "/craft",
    fabricSpec: "Hand-Spun Raw Silk & Highland Wool",
    artisanSpec: "Lahore Mughal Colonnade Atelier",
  },
  {
    id: "atelier-suited-men",
    season: "FORM 02",
    edition: "Bespoke Suited — Obsidian Cut",
    titlePart1: "Tailored,",
    titlePart2: "restraint",
    coords: "Bespoke Suiting · Single-Needle Tailoring",
    lede: "Sculptural bandgala suit cut from handloom highland raw wool, floating canvas chest piece, and hand-turned silk placket facing.",
    desktopImage: "/images/men-architectural-suit.jpg",
    mobileImage: "/images/men-architectural-suit.jpg",
    alt: "NAVA Men's Bespoke Obsidian Architectural Bandgala Suit",
    ctaText: "View Obsidian Suit",
    ctaHref: "/product/obsidian-bandgala-architectural-suit",
    secondaryText: "The Suited Archive",
    secondaryHref: "#suited-archive",
    fabricSpec: "Highland Wool & Silk Facing",
    artisanSpec: "Hand-Basted Floating Canvas",
  },
  {
    id: "couture-suited-women",
    season: "EDITION 03",
    edition: "Couture Suited — Ivory Zardozi",
    titlePart1: "Sculptural,",
    titlePart2: "power",
    coords: "45 Hours Punjab Zardozi Needlework",
    lede: "Double-breasted raw silk pant suit with geometric gold zardozi along the peak lapels, cinched with a hand-stitched leather belt.",
    desktopImage: "/images/women-couture-suit.jpg",
    mobileImage: "/images/women-couture-suit.jpg",
    alt: "NAVA Women's Bespoke Ivory Raw Silk Double-Breasted Suit",
    ctaText: "View Ivory Suit",
    ctaHref: "/product/ivory-zardozi-raw-silk-pant-suit",
    secondaryText: "Women's Tailoring",
    secondaryHref: "/shop/women",
    fabricSpec: "100% Hand-Spun Raw Mulberry Silk",
    artisanSpec: "Geometric Gold Zardozi Lapels",
  },
  {
    id: "mitti-motion",
    season: "RESORT",
    edition: "Edit 02 — Mitti in Motion",
    titlePart1: "Texture,",
    titlePart2: "in motion",
    coords: "Alluvial Terracotta & Sandstone Colonnades",
    lede: "Sun-drenched arches of Lahore. Fluid unconstructed double-breasted suiting and raw-silk trench cut for effortless kinetic elegance.",
    desktopImage: "/images/campaign-mitti-interlude.jpg",
    mobileImage: "/images/campaign-mitti-interlude.jpg",
    alt: "NAVA Mitti Resort Campaign — Figures walking through sunlit sandstone arches",
    ctaText: "Explore Mitti Edit",
    ctaHref: "/collections/edit-02-mitti",
    secondaryText: "Regional Archives",
    secondaryHref: "/craft",
    fabricSpec: "Earthen Flax & Northern Wool Blend",
    artisanSpec: "Floating Unconstructed Shoulder",
  },
  {
    id: "raat-gala",
    season: "AW26",
    edition: "Evening Couture — Emerald Gala",
    titlePart1: "Twilight,",
    titlePart2: "poetry",
    coords: "Karachi & Lahore · Black-Tie Gala",
    lede: "Midnight emerald raw-silk evening suit framed with velvet shawl collar and silver-thread Nastaliq poetry inscribed onto the cuffs.",
    desktopImage: "/images/midnight-velvet-suit.jpg",
    mobileImage: "/images/midnight-velvet-suit.jpg",
    alt: "NAVA Midnight Emerald Silk & Velvet Gala Suit with Calligraphic Cuffs",
    ctaText: "View Gala Suit",
    ctaHref: "/product/midnight-emerald-gala-suit",
    secondaryText: "Raat Collection",
    secondaryHref: "/collections/veil-04-raat",
    fabricSpec: "Raw Silk Duppioni & Velvet",
    artisanSpec: "Silver Nastaliq Poetry Cuffs",
  },
];

export const HeroCampaign: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentSlide = CAMPAIGN_SLIDES[currentIndex];

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % CAMPAIGN_SLIDES.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + CAMPAIGN_SLIDES.length) % CAMPAIGN_SLIDES.length);
  }, []);

  // Autoplay timer
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      goToNext();
    }, 7000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [goToNext, isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "ArrowLeft") {
        goToPrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  // Scroll-away parallax
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
    <section
      ref={sectionRef}
      className={styles.hero}
      aria-label="NAVA Haute Couture & Suited Campaign"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Media Cross-fader */}
      <div ref={mediaRef} className={styles.media} data-cursor="view">
        {CAMPAIGN_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              className={`${styles.slideMedia} ${isActive ? styles.activeSlide : styles.inactiveSlide}`}
              aria-hidden={!isActive}
            >
              <div className={styles.desktopMedia}>
                <Image
                  src={slide.desktopImage}
                  alt={slide.alt}
                  fill
                  priority={idx <= 1}
                  quality={95}
                  sizes="(min-width: 769px) 100vw, 1px"
                  className={styles.desktopImage}
                />
              </div>
              <div className={styles.mobileMedia}>
                <Image
                  src={slide.mobileImage}
                  alt={slide.alt}
                  fill
                  priority={idx <= 1}
                  quality={95}
                  sizes="(max-width: 768px) 100vw, 1px"
                  className={styles.mobileImage}
                />
              </div>
            </div>
          );
        })}
        <div className={styles.scrim} />
      </div>

      {/* Floating Bespoke Craft Badge */}
      <div className={styles.floatingBadge} aria-hidden="true">
        <Sparkles size={11} className={styles.badgeSparkle} />
        <div className={styles.badgeText}>
          <span className={styles.badgeFabric}>{currentSlide.fabricSpec}</span>
          <span className={styles.badgeDivider}>·</span>
          <span className={styles.badgeArtisan}>{currentSlide.artisanSpec}</span>
        </div>
      </div>

      {/* Hero Content Overlay */}
      <div ref={contentRef} className={styles.content}>
        <div className={styles.topRow}>
          <span className={styles.meta}>
            <span className={styles.metaIndex}>{currentSlide.season}</span> {currentSlide.edition}
          </span>
          <span className={`${styles.meta} ${styles.coords}`}>{currentSlide.coords}</span>
        </div>

        <div className={styles.headlineWrapper}>
          <h1 key={currentSlide.id} className={styles.headline}>
            <span className={styles.lineMask}>
              <span className={styles.line}>{currentSlide.titlePart1}</span>
            </span>
            <span className={styles.lineMask}>
              <span className={`${styles.line} ${styles.lineIndent}`}>
                <em>{currentSlide.titlePart2}</em>
              </span>
            </span>
          </h1>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.ledeGroup}>
            <p className={styles.lede}>{currentSlide.lede}</p>

            <div className={styles.ctas}>
              <Link href={currentSlide.ctaHref} className={styles.primaryCta}>
                <span>{currentSlide.ctaText}</span>
                <span className={styles.ctaArrow} aria-hidden="true">→</span>
              </Link>
              <Link href={currentSlide.secondaryHref} className={styles.secondaryCta}>
                {currentSlide.secondaryText}
              </Link>
            </div>
          </div>

          {/* Interactive Slide Switcher Selector */}
          <div className={styles.sliderControls}>
            <div className={styles.sliderNav}>
              <button
                type="button"
                className={styles.navArrowBtn}
                onClick={goToPrev}
                aria-label="Previous campaign look"
              >
                <ChevronLeft size={16} />
              </button>

              <div className={styles.pillsList} role="tablist" aria-label="Campaign Edits">
                {CAMPAIGN_SLIDES.map((slide, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={slide.id}
                      role="tab"
                      aria-selected={isActive}
                      className={`${styles.pillBtn} ${isActive ? styles.activePill : ""}`}
                      onClick={() => setCurrentIndex(idx)}
                    >
                      <span className={styles.pillIndex}>0{idx + 1}</span>
                      <span className={styles.pillLabel}>{slide.season}</span>
                      {isActive && <span className={styles.pillGlow} />}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                className={styles.navArrowBtn}
                onClick={goToNext}
                aria-label="Next campaign look"
              >
                <ChevronRight size={16} />
              </button>

              <button
                type="button"
                className={styles.playPauseBtn}
                onClick={() => setIsPaused(!isPaused)}
                aria-label={isPaused ? "Resume campaign loop" : "Pause campaign loop"}
                title={isPaused ? "Play" : "Pause"}
              >
                {isPaused ? <Play size={12} /> : <Pause size={12} />}
              </button>
            </div>
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
