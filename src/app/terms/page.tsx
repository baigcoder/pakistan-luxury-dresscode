import React from "react";
import { ServicePage } from "@/components/layout/ServicePage";
import type { Metadata } from "next";
import { HairlineDivider } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms of Atelier Service",
  description: "Terms governing online acquisitions, bespoke commissions, and atelier salon fittings.",
};

export default function TermsPage() {
  return (
    <ServicePage>
      <div>
        <span className="metadata">LEGAL DISCLOSURE</span>
        <h1 className="display-l" style={{ margin: "8px 0 16px", color: "var(--primary)" }}>
          Terms of <em>service.</em>
        </h1>
        <p className="body-editorial" style={{ color: "var(--muted)", marginBottom: "32px" }}>
          Terms governing ready-to-wear purchases, made-to-order commissions, and private salon
          sessions.
        </p>

        <HairlineDivider />

        <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginTop: "32px" }}>
          <section>
            <h2 className="heading-3" style={{ color: "var(--primary)", marginBottom: "8px" }}>
              1. Artisanal Character & Variations
            </h2>
            <p className="body-regular" style={{ color: "var(--secondary)", lineHeight: 1.8 }}>
              Because our garments incorporate handloom tussar silk, hand-carved block prints,
              and botanical vat dyes, minor variations in slub texture, indigo saturation, and
              needlework registration are inherent marks of authenticity rather than defects.
            </p>
          </section>

          <section>
            <h2 className="heading-3" style={{ color: "var(--primary)", marginBottom: "8px" }}>
              2. Bespoke Production Charters
            </h2>
            <p className="body-regular" style={{ color: "var(--secondary)", lineHeight: 1.8 }}>
              Bespoke commissions begin cutting upon receipt of confirmed anatomical measurements
              and payment. Lead times are estimates calibrated to artisan handwork schedules.
            </p>
          </section>

          <section>
            <h2 className="heading-3" style={{ color: "var(--primary)", marginBottom: "8px" }}>
              3. Intellectual Property & Provenance
            </h2>
            <p className="body-regular" style={{ color: "var(--secondary)", lineHeight: 1.8 }}>
              All silhouettes, photography, essays, and pattern adaptations are proprietary to
              NAVA Luxury Atelier (Pvt.) Ltd. Traditional motifs are curated under the guidelines
              of the National Register of the Intangible Cultural Heritage of Pakistan.
            </p>
          </section>
        </div>
      </div>
    </ServicePage>
  );
}
