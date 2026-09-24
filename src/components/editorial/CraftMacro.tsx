"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Badge, MetadataRow } from "@/components/ui";
import { ZoomIn, ZoomOut, ArrowRight, ExternalLink } from "lucide-react";
import styles from "./CraftMacro.module.css";

export const CraftMacro: React.FC = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section className={styles.section} aria-label="Craft Macro & Provenance">
      <div className="container-editorial">
        {/* Section Header */}
        <div className={styles.header}>
          <div>
            <span className="metadata">04 &bull; INTANGIBLE CULTURAL HERITAGE</span>
            <h2 className={`${styles.title} display-l`}>
              The surface as <em>archive.</em>
            </h2>
          </div>
          <span className="provenance-tag">SINDH ICH REGISTRATION &bull; BLK-049</span>
        </div>

        {/* Macro Stage Grid: Left Interactive Macro, Right Provenance Story */}
        <div className={styles.stageGrid}>
          {/* Left: Extreme Close-Up Material Lens */}
          <div className={styles.lensWrapper}>
            <div className={`${styles.lensFrame} ${isZoomed ? styles.lensZoomed : ""}`}>
              <Image
                src="/images/macro-ajrak.jpg"
                alt="Museum-grade extreme macro of Sindhi Ajrak natural block print"
                fill
                sizes="(max-width: 1024px) 100vw, 65vw"
                className={styles.macroImage}
              />
              <button
                type="button"
                className={styles.zoomToggle}
                onClick={() => setIsZoomed(!isZoomed)}
                aria-label={isZoomed ? "Reset zoom" : "Inspect textile weave"}
              >
                {isZoomed ? <ZoomOut size={16} /> : <ZoomIn size={16} />}
                <span>{isZoomed ? "1.0X OVERVIEW" : "1.5X MATERIAL LENS"}</span>
              </button>
            </div>
            <div className={styles.lensCaption}>
              <span className="metadata">NATURAL FIBER DETAIL &bull; ORGANIC SINDHI COTTON</span>
              <span className="metadata">14 STAGES OF NATURAL VAT FERMENTATION</span>
            </div>
          </div>

          {/* Right: Provenance Metadata & Atelier Story */}
          <div className={styles.provenancePanel}>
            <div className={styles.panelHeader}>
              <Badge variant="indigo">SINDHI AJRAK</Badge>
              <h3 className="heading-2" style={{ marginTop: "12px" }}>
                Vat Indigo, Madder & The Riverbed
              </h3>
              <p className="body-editorial" style={{ marginTop: "12px" }}>
                Ajrak is not merely a pattern; it is a mathematical discipline dating back
                millennia. Carved from local acacia wood blocks, each geometric impression
                resists chemical shortcuts, relying on river washing, sun bleaching, and
                fermented natural indigo vats.
              </p>
            </div>

            {/* Micro Provenance Breakdown */}
            <div className={styles.metadataCard}>
              <MetadataRow
                label="REGIONAL REGISTRATION"
                value="Sindh Intangible Cultural Heritage"
                provenance
              />
              <MetadataRow label="NATURAL COLORANTS" value="Indigofera Tinctoria & Rubia Cordifolia" />
              <MetadataRow label="MORDANT PROCESS" value="Alluvial River Clay & Natural Mineral Alum" />
              <MetadataRow label="ATELIER STRIKES" value="Approximately 2,400 Hand Block Impressions" />
              <MetadataRow label="CURATOR NOTE" value="Preserving hereditary artisan families in Bhit Shah" />
            </div>

            <div className={styles.actionRow}>
              <Button
                variant="capsule"
                size="md"
                href="/craft/sindhi-ajrak"
                icon={<ArrowRight size={14} />}
              >
                EXPLORE CRAFT REGISTER
              </Button>
              <a
                href="https://heritage.pakistan.gov.pk/SiteImage/Misc/files/ICH%20Pakistan%20Low.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.citationLink}
              >
                <span>National ICH Register</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
