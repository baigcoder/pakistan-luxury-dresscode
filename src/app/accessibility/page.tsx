import React from "react";
import { ServicePage } from "@/components/layout/ServicePage";
import type { Metadata } from "next";
import { HairlineDivider } from "@/components/ui";

export const metadata: Metadata = {
  title: "Accessibility Commitment",
  description: "NAVA Atelier digital accessibility standards, keyboard navigation, and WCAG 2.1 AA compliance.",
};

export default function AccessibilityPage() {
  return (
    <ServicePage>
      <div>
        <span className="metadata">DIGITAL INCLUSION</span>
        <h1 className="display-l" style={{ margin: "8px 0 16px", color: "var(--primary)" }}>
          Accessibility <em>statement.</em>
        </h1>
        <p className="body-editorial" style={{ color: "var(--muted)", marginBottom: "32px" }}>
          We design our digital editorial flagship with the same rigorous care we apply to our
          physical ateliers.
        </p>

        <HairlineDivider />

        <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginTop: "32px" }}>
          <section>
            <h2 className="heading-3" style={{ color: "var(--primary)", marginBottom: "8px" }}>
              WCAG 2.1 Level AA Standards
            </h2>
            <p className="body-regular" style={{ color: "var(--secondary)", lineHeight: 1.8 }}>
              This platform is engineered to comply with the Web Content Accessibility Guidelines
              (WCAG) 2.1 Level AA. We ensure high-contrast color ratios, semantic HTML elements,
              meaningful image alternative texts, and full keyboard operability for screen readers.
            </p>
          </section>

          <section>
            <h2 className="heading-3" style={{ color: "var(--primary)", marginBottom: "8px" }}>
              Reduced Motion Support
            </h2>
            <p className="body-regular" style={{ color: "var(--secondary)", lineHeight: 1.8 }}>
              All dynamic transitions, parallax effects, and zoom lenses automatically respect
              the user&apos;s system <code style={{ color: "var(--accent)" }}>prefers-reduced-motion</code> preference,
              disabling non-essential motion while preserving functional clarity.
            </p>
          </section>

          <section>
            <h2 className="heading-3" style={{ color: "var(--primary)", marginBottom: "8px" }}>
              Assistance & Feedback
            </h2>
            <p className="body-regular" style={{ color: "var(--secondary)", lineHeight: 1.8 }}>
              If you experience any barrier accessing our collection archives or booking salon
              appointments, please email concierge@nava-atelier.com or call our client concierge
              at +92 42 3765 8900.
            </p>
          </section>
        </div>
      </div>
    </ServicePage>
  );
}
