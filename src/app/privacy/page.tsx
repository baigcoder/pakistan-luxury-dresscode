import React from "react";
import { ServicePage } from "@/components/layout/ServicePage";
import type { Metadata } from "next";
import { HairlineDivider } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How NAVA protects client confidentiality, measurements data, and transaction information.",
};

export default function PrivacyPage() {
  return (
    <ServicePage>
      <div>
        <span className="metadata">LEGAL DISCLOSURE</span>
        <h1 className="display-l" style={{ margin: "8px 0 16px", color: "var(--primary)" }}>
          Privacy <em>policy.</em>
        </h1>
        <p className="body-editorial" style={{ color: "var(--muted)", marginBottom: "32px" }}>
          We treat client data with the exact discretion we apply to our couture tailoring.
          Last revised: September 2026.
        </p>

        <HairlineDivider />

        <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginTop: "32px" }}>
          <section>
            <h2 className="heading-3" style={{ color: "var(--primary)", marginBottom: "8px" }}>
              1. Information We Collect
            </h2>
            <p className="body-regular" style={{ color: "var(--secondary)", lineHeight: 1.8 }}>
              We collect information provided directly by clients during atelier consultations,
              bespoke measurement intake, account registration, and order placement. This
              includes names, shipping coordinates, telephone numbers, and tailoring measurements.
            </p>
          </section>

          <section>
            <h2 className="heading-3" style={{ color: "var(--primary)", marginBottom: "8px" }}>
              2. Private Client Confidentiality
            </h2>
            <p className="body-regular" style={{ color: "var(--secondary)", lineHeight: 1.8 }}>
              NAVA does not sell, lease, or monetize client personal data to any third party.
              Information is utilized strictly to fulfill bespoke orders, transmit courier
              dispatch notifications, and coordinate salon appointments.
            </p>
          </section>

          <section>
            <h2 className="heading-3" style={{ color: "var(--primary)", marginBottom: "8px" }}>
              3. Data Retention & Erasure
            </h2>
            <p className="body-regular" style={{ color: "var(--secondary)", lineHeight: 1.8 }}>
              You may request an export or complete erasure of your anatomical profile and order
              history at any time by contacting concierge@nava-atelier.com.
            </p>
          </section>
        </div>
      </div>
    </ServicePage>
  );
}
