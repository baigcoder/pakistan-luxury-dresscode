import React from "react";
import { ServicePage } from "@/components/layout/ServicePage";
import type { Metadata } from "next";
import Link from "next/link";
import { HairlineDivider } from "@/components/ui";
import { WOMEN_SIZES, MEN_SIZES } from "@/data/sizeGuide";

export const metadata: Metadata = {
  title: "Architectural Size Guide",
  description: "Comprehensive size conversions and anatomical measuring guidelines for NAVA unconstructed luxury garments.",
};


export default function SizeGuidePage() {
  return (
    <ServicePage>
      <div>
        <span className="metadata">TAILORING REFERENCE</span>
        <h1 className="display-l" style={{ margin: "8px 0 16px", color: "var(--primary)" }}>
          Size &amp; <em>proportion.</em>
        </h1>
        <p className="body-editorial" style={{ color: "var(--muted)", marginBottom: "32px" }}>
          NAVA silhouettes are drafted with relaxed, architectural proportions to drape with
          structural poise. Consult the conversion matrices below or record your bespoke
          profile in the client salon.
        </p>

        <HairlineDivider />

        {/* Women's Table */}
        <section style={{ marginTop: "32px", marginBottom: "48px" }}>
          <h2 className="heading-2" style={{ color: "var(--primary)", marginBottom: "16px" }}>
            Women&rsquo;s Silhouette Measurements
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontFamily: "var(--font-grotesk)", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)", color: "var(--primary)" }}>
                  <th style={{ padding: "12px 8px" }}>NAVA SCALE</th>
                  <th style={{ padding: "12px 8px" }}>UK</th>
                  <th style={{ padding: "12px 8px" }}>US</th>
                  <th style={{ padding: "12px 8px" }}>EU</th>
                  <th style={{ padding: "12px 8px" }}>BUST</th>
                  <th style={{ padding: "12px 8px" }}>WAIST</th>
                  <th style={{ padding: "12px 8px" }}>HIP</th>
                </tr>
              </thead>
              <tbody>
                {WOMEN_SIZES.map((row) => (
                  <tr key={row.size} style={{ borderBottom: "1px solid var(--border)", color: "var(--secondary)" }}>
                    <td style={{ padding: "12px 8px", fontWeight: 600, color: "var(--primary)" }}>{row.size}</td>
                    <td style={{ padding: "12px 8px" }}>{row.uk}</td>
                    <td style={{ padding: "12px 8px" }}>{row.us}</td>
                    <td style={{ padding: "12px 8px" }}>{row.eu}</td>
                    <td style={{ padding: "12px 8px" }}>{row.bust}</td>
                    <td style={{ padding: "12px 8px" }}>{row.waist}</td>
                    <td style={{ padding: "12px 8px" }}>{row.hip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Men's Table */}
        <section style={{ marginBottom: "48px" }}>
          <h2 className="heading-2" style={{ color: "var(--primary)", marginBottom: "16px" }}>
            Men&rsquo;s Tailoring & Sherwani Measurements
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontFamily: "var(--font-grotesk)", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)", color: "var(--primary)" }}>
                  <th style={{ padding: "12px 8px" }}>CHEST SIZE</th>
                  <th style={{ padding: "12px 8px" }}>US / UK</th>
                  <th style={{ padding: "12px 8px" }}>EU</th>
                  <th style={{ padding: "12px 8px" }}>CHEST</th>
                  <th style={{ padding: "12px 8px" }}>WAIST</th>
                  <th style={{ padding: "12px 8px" }}>SHOULDER</th>
                </tr>
              </thead>
              <tbody>
                {MEN_SIZES.map((row) => (
                  <tr key={row.size} style={{ borderBottom: "1px solid var(--border)", color: "var(--secondary)" }}>
                    <td style={{ padding: "12px 8px", fontWeight: 600, color: "var(--primary)" }}>{row.size}</td>
                    <td style={{ padding: "12px 8px" }}>{row.usUk}</td>
                    <td style={{ padding: "12px 8px" }}>{row.eu}</td>
                    <td style={{ padding: "12px 8px" }}>{row.chest}</td>
                    <td style={{ padding: "12px 8px" }}>{row.waist}</td>
                    <td style={{ padding: "12px 8px" }}>{row.shoulder}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Bespoke link */}
        <div style={{ padding: "24px", backgroundColor: "var(--surface-subtle)", borderRadius: "var(--radius-sm)", border: "1px solid var(--border)" }}>
          <span className="metadata">MADE-TO-MEASURE SALON</span>
          <h3 className="heading-3" style={{ margin: "4px 0 8px", color: "var(--primary)" }}>
            Custom Proportions & Clavicle Draping
          </h3>
          <p className="body-regular" style={{ color: "var(--muted)", marginBottom: "16px" }}>
            If your measurements span across sizes or you require bespoke sleeve, inseam, or
            collar stance modifications, save your profile in the client salon or book an in-person
            measurement session.
          </p>
          <Link href="/account" style={{ color: "var(--accent)", fontFamily: "var(--font-grotesk)", fontSize: "var(--text-metadata)", letterSpacing: "0.12em", fontWeight: 500, textDecoration: "none" }}>
            OPEN CLIENT MEASUREMENT PROFILE &rarr;
          </Link>
        </div>
      </div>
    </ServicePage>
  );
}
