import React from "react";
import { ServicePage } from "@/components/layout/ServicePage";
import type { Metadata } from "next";
import Link from "next/link";
import { HairlineDivider } from "@/components/ui";

export const metadata: Metadata = {
  title: "Returns & Exchanges",
  description: "Guidelines on complimentary 14-day returns for ready-to-wear pieces and bespoke alterations policy.",
};

export default function ReturnsPage() {
  return (
    <ServicePage>
      <div>
        <span className="metadata">CLIENT CONCIERGE</span>
        <h1 className="display-l" style={{ margin: "8px 0 16px", color: "var(--primary)" }}>
          Returns &amp; <em>exchanges.</em>
        </h1>
        <p className="body-editorial" style={{ color: "var(--muted)", marginBottom: "32px" }}>
          We hold our craftsmanship to an exacting standard. If a ready-to-wear piece does not
          resonate with your wardrobe, our concierge facilitates seamless returns.
        </p>

        <HairlineDivider />

        <div style={{ display: "flex", flexDirection: "column", gap: "32px", marginTop: "32px" }}>
          <section>
            <h2 className="heading-2" style={{ color: "var(--primary)", marginBottom: "8px" }}>
              Ready-to-Wear 14-Day Return Window
            </h2>
            <p className="body-regular" style={{ color: "var(--secondary)", lineHeight: 1.8 }}>
              In-stock ready-to-wear garments may be returned or exchanged within 14 days of
              delivery receipt. Garments must be unworn, undamaged, with original security tags,
              wooden hanger, and unbleached cotton garment bag intact.
            </p>
          </section>

          <section>
            <h2 className="heading-2" style={{ color: "var(--primary)", marginBottom: "8px" }}>
              Bespoke & Made-to-Measure Alterations
            </h2>
            <p className="body-regular" style={{ color: "var(--secondary)", lineHeight: 1.8 }}>
              Because bespoke and made-to-order commissions are cut specifically to your personal
              anatomical specifications, they cannot be returned for refund. However, NAVA
              provides two rounds of complimentary fitting alterations at our Lahore atelier or
              Karachi studio to guarantee flawless drape.
            </p>
          </section>

          <section>
            <h2 className="heading-2" style={{ color: "var(--primary)", marginBottom: "8px" }}>
              Initiating a Return
            </h2>
            <p className="body-regular" style={{ color: "var(--secondary)", lineHeight: 1.8 }}>
              To schedule a complimentary insured courier pick-up, submit a request via our{" "}
              <Link href="/contact" style={{ color: "var(--accent)", textDecoration: "underline" }}>
                Concierge Portal
              </Link>{" "}
              or message your private client liaison directly.
            </p>
          </section>
        </div>
      </div>
    </ServicePage>
  );
}
