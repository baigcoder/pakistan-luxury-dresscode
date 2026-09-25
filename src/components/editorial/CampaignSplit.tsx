import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge, Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";
import styles from "./CampaignSplit.module.css";

export const CampaignSplit: React.FC = () => {
  return (
    <section className={styles.section} aria-label="Campaign Panoramic Interlude">
      <div className={styles.panoramicContainer}>
        <Image
          src="/images/lahore-courtyard.jpg"
          alt="High fashion editorial within Lahore heritage courtyard"
          fill
          quality={90}
          sizes="100vw"
          className={styles.image}
        />
        <div className={styles.scrim} />

        {/* Text Anchor Overlay */}
        <div className={`container-max ${styles.contentContainer}`}>
          <div className={styles.textAnchor}>
            <div className={styles.anchorBadge}>
              <Badge variant="terracotta">EDIT 02 &mdash; MITTI</Badge>
              <span className="metadata" style={{ color: "var(--paper)" }}>
                ARCHITECTURAL HERITAGE &bull; RESORT 2026
              </span>
            </div>

            <h2 className={`${styles.headline} display-m`}>
              THE COURTYARD AND THE SHADOW.
            </h2>

            <p className={styles.description}>
              Captured among the 16th-century arched brickwork of Lahore. The fluid pleats
              of unconstructed raw linen contrast against the aged sandstone masonry.
            </p>

            <div className={styles.ctaGroup}>
              <Button
                variant="capsule"
                size="md"
                href="/collections/edit-02-mitti"
                icon={<ArrowRight size={14} />}
              >
                DISCOVER RESORT LOOKBOOK
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
