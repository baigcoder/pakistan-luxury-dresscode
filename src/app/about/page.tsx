import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BRAND } from "@/config/brand";
import { Badge, Button, HairlineDivider } from "@/components/ui";
import { ArrowRight, ShieldCheck, Sparkles, Compass } from "lucide-react";
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

const CRAFT_PILLARS = [
  {
    region: "Sindh River Basin",
    title: "Vat Fermentation & Ajrak Geometry",
    ichCode: "ICH-BLK-049",
    description:
      "Co-authoring textiles with the Indus River. Fourteen stages of mud resist, acacia wood blocks, camel dung ferment, and wild indigo vats.",
    image: "/images/macro-ajrak.jpg",
  },
  {
    region: "Walled City, Lahore",
    title: "Architectural Tailoring & Zardozi Restraint",
    ichCode: "ICH-EMB-082",
    description:
      "Draping from the clavicle rather than the frame. Pure silver wires laid with negative space rather than dense bullion coverage.",
    image: "/images/hero-couture.jpg",
  },
  {
    region: "Swat High Valley",
    title: "Indigenous Wool Looms & Pattu Weave",
    ichCode: "ICH-WL-031",
    description:
      "Hand-sheared mountain fleece spun on foot treadles in Khyber Pakhtunkhwa, producing dense, un-dyed, weather-resistant outerwear fabrics.",
    image: "/images/craft-atelier.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Editorial Header */}
      <section className={styles.heroHeader}>
        <div className="container-editorial">
          <div className={styles.eyebrowRow}>
            <span className="metadata">THE HOUSE OF {BRAND.name}</span>
            <span className="metadata">LAHORE &bull; EST. 2024</span>
          </div>

          <h1 className={`${styles.mainTitle} display-xl`}>
            Form, then <em>memory.</em>
          </h1>

          <p className={`${styles.leadIntro} body-editorial`}>
            We reject the dogma that South Asian luxury must be measured in kilograms
            of bullion wire. We build quiet, structural garments where raw fiber,
            mathematical drape, and generational artisan hands lead every cut.
          </p>
        </div>
      </section>

      {/* Cinematic Studio Image Banner */}
      <section className={styles.bannerSection}>
        <div className="container-editorial">
          <div className={styles.bannerFrame}>
            <Image
              src="/images/lahore-courtyard.jpg"
              alt="NAVA Atelier courtyard in Old Lahore"
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className={styles.bannerImg}
            />
            <div className={styles.bannerCaption}>
              <span className="metadata">FIG. 01 &bull; LAHORE ATELIER COURTYARD</span>
              <p className="body-metadata" style={{ margin: "2px 0 0", color: "var(--surface)" }}>
                Raking morning light across 16th-century brickwork where our drapery is tested.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* House Manifesto */}
      <section className={styles.manifestoSection}>
        <div className="container-editorial">
          <div className={styles.manifestoGrid}>
            <div className={styles.manifestoLeft}>
              <span className="metadata">THE HOUSE MANIFESTO</span>
              <h2 className={`${styles.manifestoHeading} heading-1`}>
                The New Pakistani Silhouette.
              </h2>
              <p className={styles.manifestoQuote}>
                &ldquo;A surface is never only a surface. It records hand, place, and time.&rdquo;
              </p>
            </div>

            <div className={styles.manifestoRight}>
              <div className={styles.pillarItem}>
                <h3 className={`${styles.pillarTitle} heading-3`}>I. The Priority of Negative Space</h3>
                <p className="body-regular" style={{ color: "var(--secondary)", lineHeight: 1.8 }}>
                  Where conventional wedding couture insists upon filling every square centimeter
                  with synthetic sequins, NAVA honors empty space. By leaving broad fields of
                  handloom raw silk unembellished, we allow the eye to trace the purity of the
                  lapel, the tension of the bias cut, and the natural slub of the yarn.
                </p>
              </div>

              <div className={styles.pillarItem}>
                <h3 className={`${styles.pillarTitle} heading-3`}>II. Material Provenance as Architecture</h3>
                <p className="body-regular" style={{ color: "var(--secondary)", lineHeight: 1.8 }}>
                  We do not source anonymous polyester satins or synthetic organzas from
                  industrial trading hubs. Every fabric in the NAVA repertoire is traceable to
                  its soil: tussar raw silk from Punjab handlooms, un-dyed alpine wool from Swat,
                  and hand-woven cotton river-washed in the Lower Indus.
                </p>
              </div>

              <div className={styles.pillarItem}>
                <h3 className={`${styles.pillarTitle} heading-3`}>III. The Dignity of Living Artisanship</h3>
                <p className="body-regular" style={{ color: "var(--secondary)", lineHeight: 1.8 }}>
                  Our artisans are not nameless factory hands; they are generational co-creators.
                  We practice transparent pricing, direct craft honorariums, and archive every
                  maker&rsquo;s lineage in our Master Craft Register.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atelier Timeline */}
      <section className={styles.timelineSection}>
        <div className="container-editorial">
          <div className={styles.timelineHeader}>
            <span className="metadata">CHRONOLOGY</span>
            <h2 className={`${styles.sectionTitle} heading-1`}>The Atelier Timeline</h2>
          </div>

          <div className={styles.timelineList}>
            {TIMELINE.map((item, idx) => (
              <div key={idx} className={styles.timelineRow}>
                <div className={styles.timelineYear}>
                  <span className={styles.yearNumber}>{item.year}</span>
                </div>
                <div className={styles.timelineContent}>
                  <h3 className={`${styles.milestoneTitle} heading-3`}>{item.milestone}</h3>
                  <p className="body-regular" style={{ color: "var(--muted)", margin: "8px 0 0" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Craft Pillars */}
      <section className={styles.craftPillarsSection}>
        <div className="container-editorial">
          <div className={styles.craftPillarsHeader}>
            <div>
              <span className="metadata">GEOGRAPHY & LINEAGE</span>
              <h2 className={`${styles.sectionTitle} heading-1`}>Three Regional Anchors</h2>
            </div>
            <Link href="/craft" className={styles.exploreLink}>
              EXPLORE CRAFT ARCHIVE &rarr;
            </Link>
          </div>

          <div className={styles.pillarsGrid}>
            {CRAFT_PILLARS.map((pillar, idx) => (
              <div key={idx} className={styles.pillarCard}>
                <div className={styles.pillarImageFrame}>
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={styles.pillarImg}
                  />
                  <div className={styles.pillarBadge}>
                    <Badge variant="terracotta">{pillar.ichCode}</Badge>
                  </div>
                </div>
                <div className={styles.pillarMeta}>
                  <span className="metadata">{pillar.region}</span>
                  <h3 className={`${styles.pillarHeading} heading-3`}>{pillar.title}</h3>
                  <p className="body-regular" style={{ color: "var(--muted)", marginTop: "6px" }}>
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethical Commitment Box */}
      <section className={styles.commitmentSection}>
        <div className="container-editorial">
          <div className={styles.commitmentBox}>
            <div className={styles.commitmentIcon}>
              <ShieldCheck size={36} color="var(--accent)" />
            </div>
            <div className={styles.commitmentText}>
              <span className="metadata">ETHICAL SOURCING & CULTURAL EQUITY</span>
              <h3 className={`${styles.commitmentTitle} heading-2`}>
                The NAVA Atelier Covenant
              </h3>
              <p className="body-regular" style={{ color: "var(--secondary)", margin: "8px 0 16px" }}>
                We certify that 100% of our embroidery and block printing is commissioned
                directly from independent generational craft families. We pay 2.5x above
                regional market piece-rates, provide health care coverage for master ustads, and
                invest 5% of net proceeds into regional apprentice schools.
              </p>
              <div className={styles.commitmentPoints}>
                <span className="metadata">&bull; ZERO SYNTHETIC POLYESTER</span>
                <span className="metadata">&bull; NATURAL DYE INTEGRITY</span>
                <span className="metadata">&bull; FULL ARTISAN ATTRIBUTION</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bespoke Salon Invitation / Contact CTA */}
      <section className={styles.ctaSection}>
        <div className="container-editorial">
          <div className={styles.ctaInner}>
            <span className="metadata">PRIVATE COMMISSIONS</span>
            <h2 className={`${styles.ctaTitle} heading-1`}>
              Experience the Garments in Person.
            </h2>
            <p className={`${styles.ctaSub} body-editorial`}>
              Our private salon in Old Lahore accommodates appointments for made-to-measure
              tailoring, bridal commissions, and archival viewings.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact">
                <Button variant="capsule" size="lg">
                  REQUEST BESPOKE APPOINTMENT &rarr;
                </Button>
              </Link>
              <Link href="/shop">
                <Button variant="outline" size="lg">
                  VIEW READY-TO-WEAR &rarr;
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
