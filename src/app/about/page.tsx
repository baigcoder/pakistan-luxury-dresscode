import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BRAND } from "@/config/brand";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "The House & Manifesto",
  description:
    "A contemporary Pakistani luxury fashion house translating regional craft, indigenous weaving, and architectural drapery into a quiet global vocabulary.",
};

interface TimelineItem {
  year: string;
  milestone: string;
  description: string;
}

const TIMELINE: TimelineItem[] = [
  {
    year: "2024",
    milestone: "The Genesis at Delhi Gate, Lahore",
    description:
      "NAVA was founded as an independent design atelier within the historic brick fabric of Lahore, initiated with a singular question: How can Pakistan's millenary textile heritage transcend nostalgic reproduction to define a progressive global silhouette?",
  },
  {
    year: "2025",
    milestone: "Craft Provenance Charter & ICH Alignment",
    description:
      "Formalized our artisan covenants with generational master workshops across Sindh (Bhit Shah), Khyber Pakhtunkhwa (Swat Valley), and Punjab. Aligned our sourcing protocols with the National Register of the Intangible Cultural Heritage of Pakistan.",
  },
  {
    year: "2026",
    milestone: "Debut of FORM 01 — NOOR & Global Presentation",
    description:
      "Unveiling the architectural raw silk trench and the unconstructed kurta. Establishing our bespoke salon in Lahore and our studio in Karachi.",
  },
];

const MANIFESTO = [
  {
    numeral: "I",
    title: "The priority of negative space",
    body: "Where conventional wedding couture insists upon filling every square centimeter with synthetic sequins, NAVA honors empty space. By leaving broad fields of handloom raw silk unembellished, we allow the eye to trace the purity of the lapel, the tension of the bias cut, and the natural slub of the yarn.",
  },
  {
    numeral: "II",
    title: "Material provenance as architecture",
    body: "We do not source anonymous polyester satins or synthetic organzas from industrial trading hubs. Every fabric in the NAVA repertoire is traceable to its soil: tussar raw silk from Punjab handlooms, un-dyed alpine wool from Swat, and hand-woven cotton river-washed in the Lower Indus.",
  },
  {
    numeral: "III",
    title: "The dignity of living artisanship",
    body: "Our artisans are not nameless factory hands; they are generational co-creators. We practice transparent pricing, direct craft honorariums, and archive every maker’s lineage in our Master Craft Register.",
  },
];

const CRAFT_PILLARS = [
  {
    region: "Sindh River Basin",
    title: "Vat Fermentation & Ajrak Geometry",
    ichCode: "ICH-BLK-049",
    description:
      "Co-authoring textiles with the Indus River. Fourteen stages of mud resist, acacia wood blocks, camel dung ferment, and wild indigo vats.",
    image: "/images/macro-ajrak.jpg",
    href: "/craft/sindhi-ajrak",
  },
  {
    region: "Walled City, Lahore",
    title: "Architectural Tailoring & Zardozi Restraint",
    ichCode: "ICH-EMB-082",
    description:
      "Draping from the clavicle rather than the frame. Pure silver wires laid with negative space rather than dense bullion coverage.",
    image: "/images/hero-couture.jpg",
    href: "/craft/punjab-zardozi",
  },
  {
    region: "Swat High Valley",
    title: "Indigenous Wool Looms & Pattu Weave",
    ichCode: "ICH-WL-031",
    description:
      "Hand-sheared mountain fleece spun on foot treadles in Khyber Pakhtunkhwa, producing dense, un-dyed, weather-resistant outerwear fabrics.",
    image: "/images/craft-atelier.jpg",
    href: "/craft/swat-weaving",
  },
];

const COVENANT = [
  {
    figure: "100%",
    label: "of embroidery and block printing commissioned directly from craft families",
  },
  { figure: "2.5×", label: "regional market piece-rates, with health cover for master ustads" },
  { figure: "5%", label: "of net proceeds invested in regional apprentice schools" },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* ==========================================================================
          Hero
          ========================================================================== */}
      <section className={styles.hero} aria-labelledby="about-title">
        <div className={styles.eyebrowRow}>
          <span>The house of {BRAND.name}</span>
          <span>Lahore · Est. 2024</span>
        </div>

        <h1 id="about-title" className={styles.title}>
          <span className={styles.titleLine}>Form, then</span>
          <span className={`${styles.titleLine} ${styles.titleIndent}`}>
            <em>memory.</em>
          </span>
        </h1>

        <p className={styles.lead}>
          We reject the dogma that South Asian luxury must be measured in kilograms of bullion wire.
          We build quiet, structural garments where raw fiber, mathematical drape, and generational
          artisan hands lead every cut.
        </p>
      </section>

      <figure className={styles.banner}>
        <div className={styles.bannerFrame}>
          <Image
            src="/images/lahore-courtyard.jpg"
            alt="NAVA atelier courtyard in Old Lahore"
            fill
            priority
            quality={90}
            sizes="100vw"
            className={styles.bannerImg}
          />
        </div>
        <figcaption className={styles.bannerCaption}>
          <span>Fig. 01 — Lahore atelier courtyard</span>
          Raking morning light across sixteenth-century brickwork, where our drapery is tested.
        </figcaption>
      </figure>

      {/* ==========================================================================
          (01) Manifesto
          ========================================================================== */}
      <section className={styles.section} aria-labelledby="manifesto-heading">
        <header className={styles.sectionHeader}>
          <div>
            <span className={styles.eyebrow} data-reveal>
              <span className={styles.index}>(01)</span> The manifesto
            </span>
            <h2 id="manifesto-heading" className={styles.sectionTitle} data-reveal="lines">
              <span className="line-mask">
                <span>The new Pakistani</span>
              </span>
              <span className="line-mask">
                <span>
                  <em>silhouette</em>
                </span>
              </span>
            </h2>
          </div>
          <p className={styles.headerQuote} data-reveal>
            &ldquo;A surface is never only a surface. It records hand, place, and time.&rdquo;
          </p>
        </header>

        <ol className={styles.manifesto}>
          {MANIFESTO.map((m, i) => (
            <li
              key={m.numeral}
              className={styles.manifestoItem}
              data-reveal
              data-reveal-delay={String(i * 100)}
            >
              <span className={styles.numeral}>{m.numeral}</span>
              <h3 className={styles.manifestoTitle}>{m.title}</h3>
              <p className={styles.manifestoBody}>{m.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ==========================================================================
          (02) Chronology
          ========================================================================== */}
      <section className={styles.section} aria-labelledby="timeline-heading">
        <header className={styles.sectionHeader}>
          <div>
            <span className={styles.eyebrow} data-reveal>
              <span className={styles.index}>(02)</span> Chronology
            </span>
            <h2 id="timeline-heading" className={styles.sectionTitle} data-reveal="lines">
              <span className="line-mask">
                <span>The atelier,</span>
              </span>
              <span className="line-mask">
                <span>
                  <em>so far</em>
                </span>
              </span>
            </h2>
          </div>
        </header>

        <ol className={styles.timeline}>
          {TIMELINE.map((item, i) => (
            <li
              key={item.year}
              className={styles.timelineRow}
              data-reveal
              data-reveal-delay={String(i * 100)}
            >
              <span className={styles.year}>{item.year}</span>
              <div>
                <h3 className={styles.milestone}>{item.milestone}</h3>
                <p className={styles.milestoneBody}>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ==========================================================================
          (03) Founder & Creative Direction: The Systems Architect
          ========================================================================== */}
      <section id="founder" className={styles.section} aria-labelledby="founder-heading">
        <header className={styles.sectionHeader}>
          <div>
            <span className={styles.eyebrow} data-reveal>
              <span className={styles.index}>(03)</span> The founder &amp; creative direction
            </span>
            <h2 id="founder-heading" className={styles.sectionTitle} data-reveal="lines">
              <span className="line-mask">
                <span>The systems</span>
              </span>
              <span className="line-mask">
                <span>
                  <em>architect</em>
                </span>
              </span>
            </h2>
          </div>
          <p className={styles.headerQuote} data-reveal>
            &ldquo;Software architecture and couture share a single truth: structural integrity needs no disguise.&rdquo;
          </p>
        </header>

        <div className={styles.founderGrid}>
          <div className={styles.founderVisual} data-reveal>
            <div className={styles.founderFrame}>
              <Image
                src={BRAND.founder.image}
                alt="Hassan Baig, Founder and Creative Director of NAVA, at his atelier desk with engineering laptop, fashion sketches, and tailoring patterns"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                className={styles.founderImg}
                priority
              />
            </div>
            <figcaption className={styles.founderCaption}>
              <span>Fig. 02 — The Founder&apos;s Workstation</span>
              {BRAND.founder.name} at the Lahore atelier desk: bridging software engineering, pattern drafting, and handloom raw silk.
            </figcaption>
          </div>

          <div className={styles.founderBio} data-reveal>
            <div className={styles.founderPillRow}>
              <span className={styles.founderBadge}>{BRAND.founder.role}</span>
              <span className={styles.founderBadge}>Software Engineer</span>
              <span className={styles.founderBadge}>Creative Technologist</span>
            </div>

            <h3 className={styles.founderName}>{BRAND.founder.name}</h3>
            <p className={styles.founderRoleSubtitle}>
              {BRAND.founder.discipline} &middot; {BRAND.founder.location}
            </p>

            <div className={styles.founderStory}>
              <p>
                Trained in software engineering and systems architecture, Hassan Baig founded NAVA
                out of a profound dissatisfaction with the superficial excesses of contemporary
                South Asian luxury. Where the conventional wedding couture industry measures prestige
                through kilograms of synthetic bullion wire, machine-stamped sequins, and stifling
                layers, Baig brought the radical discipline of software engineering to the cutting table:
                treating garments not as ornamental canvases, but as precision structural systems.
              </p>
              <p>
                &ldquo;In high-performance software, simplicity is the hardest achievement,&rdquo;
                reflects Baig. &ldquo;Every superfluous line of code introduces latency and system fragility.
                I approached the architectural raw silk trench and unconstructed kurta with that exact
                algorithmic mindset. By removing synthetic interlinings and eliminating cosmetic distractions,
                we allow the mathematical poise of the shoulder line, the natural tension of hand-spun raw silk,
                and the quiet presence of negative space to command the silhouette.&rdquo;
              </p>
              <p>
                Under Baig&apos;s creative stewardship, NAVA unifies computational precision with sacred
                lineage. Sourcing directly from generational master workshops across Lahore, Bhit Shah,
                and Swat, each edition is treated as an immutable release—transparently priced, culturally
                honored, and registered under Pakistan&apos;s Intangible Cultural Heritage charter.
              </p>
            </div>

            {/* Engineering & Atelier Spec Sheet */}
            <div className={styles.founderSpecs}>
              <div className={styles.specItem}>
                <span className={styles.specKey}>Discipline</span>
                <span className={styles.specVal}>Software Engineering &amp; Systems Architecture</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specKey}>Design Philosophy</span>
                <span className={styles.specVal}>Structural Negative Space &middot; Zero Synthetic Crutches</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specKey}>Heritage Covenants</span>
                <span className={styles.specVal}>100% Direct Generational Artisan Lineage</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specKey}>Atelier Bases</span>
                <span className={styles.specVal}>Lahore (Walled City / Gulberg) &middot; Karachi</span>
              </div>
            </div>

            <div className={styles.founderActions}>
              <Link href="/journal/the-systems-architect-software-engineering-couture" className={styles.founderCta}>
                <span>Read Hassan&apos;s Dispatch</span>
                <span className={styles.founderCtaArrow} aria-hidden="true">&rarr;</span>
              </Link>
              <Link href="/contact" className={styles.textLink}>
                Request a Private Consultation <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          (04) Regional anchors
          ========================================================================== */}
      <section className={styles.section} aria-labelledby="anchors-heading">
        <header className={styles.sectionHeader}>
          <div>
            <span className={styles.eyebrow} data-reveal>
              <span className={styles.index}>(04)</span> Geography &amp; lineage
            </span>
            <h2 id="anchors-heading" className={styles.sectionTitle} data-reveal="lines">
              <span className="line-mask">
                <span>Three regional</span>
              </span>
              <span className="line-mask">
                <span>
                  <em>anchors</em>
                </span>
              </span>
            </h2>
          </div>
          <Link href="/craft" className={styles.textLink} data-reveal>
            The craft register <span aria-hidden="true">→</span>
          </Link>
        </header>

        <div className={styles.pillars}>
          {CRAFT_PILLARS.map((pillar, i) => (
            <article
              key={pillar.ichCode}
              className={styles.pillar}
              data-reveal
              data-reveal-delay={String(i * 110)}
            >
              <Link href={pillar.href} className={styles.pillarLink} data-cursor="explore">
                <div className={styles.pillarFrame}>
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    className={styles.pillarImg}
                  />
                </div>
                <div className={styles.pillarMeta}>
                  <div className={styles.pillarTop}>
                    <span>{pillar.region}</span>
                    <span className={styles.pillarCode}>{pillar.ichCode}</span>
                  </div>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <p className={styles.pillarBody}>{pillar.description}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ==========================================================================
          (05) Covenant (dark)
          ========================================================================== */}
      <section className={styles.covenant} aria-labelledby="covenant-heading">
        <div className={styles.covenantInner}>
          <header className={styles.covenantHeader}>
            <span className={styles.covenantEyebrow} data-reveal>
              <span className={styles.covenantIndex}>(05)</span> Ethical sourcing &amp; cultural
              equity
            </span>
            <h2 id="covenant-heading" className={styles.covenantTitle} data-reveal="lines">
              <span className="line-mask">
                <span>The atelier</span>
              </span>
              <span className="line-mask">
                <span>
                  <em>covenant</em>
                </span>
              </span>
            </h2>
          </header>

          <dl className={styles.figures}>
            {COVENANT.map((c, i) => (
              <div
                key={c.figure}
                className={styles.figure}
                data-reveal
                data-reveal-delay={String(i * 120)}
              >
                <dt>{c.figure}</dt>
                <dd>{c.label}</dd>
              </div>
            ))}
          </dl>

          <ul className={styles.points} data-reveal>
            <li>Zero synthetic polyester</li>
            <li>Natural dye integrity</li>
            <li>Full artisan attribution</li>
          </ul>
        </div>
      </section>

      {/* ==========================================================================
          Salon invitation
          ========================================================================== */}
      <section className={styles.invite} aria-labelledby="invite-heading">
        <span className={styles.eyebrow} data-reveal>
          Private commissions
        </span>
        <h2 id="invite-heading" className={styles.inviteTitle} data-reveal="lines">
          <span className="line-mask">
            <span>Experience the garments</span>
          </span>
          <span className="line-mask">
            <span>
              in <em>person</em>
            </span>
          </span>
        </h2>
        <p className={styles.inviteBody} data-reveal>
          Our private salon in Old Lahore accommodates appointments for made-to-measure tailoring,
          bridal commissions, and archival viewings.
        </p>
        <div className={styles.inviteActions} data-reveal>
          <Link href="/contact" className={styles.cta}>
            <span>Request an appointment</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              →
            </span>
          </Link>
          <Link href="/shop" className={styles.textLink}>
            Ready-to-wear <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
