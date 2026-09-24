import React from "react";
import { ServicePage } from "@/components/layout/ServicePage";
import type { Metadata } from "next";
import Link from "next/link";
import { HairlineDivider } from "@/components/ui";

export const metadata: Metadata = {
  title: "Worldwide Shipping & Delivery",
  description:
    "Complimentary express insured courier delivery across Pakistan, GCC, United Kingdom, European Union, and North America.",
};

export default function ShippingPage() {
  return (
    <ServicePage>
      <div>
        <span className="metadata">CLIENT CONCIERGE</span>
        <h1 className="display-l" style={{ margin: "8px 0 16px", color: "var(--primary)" }}>
          Worldwide <em>shipping.</em>
        </h1>
        <p className="body-editorial" style={{ color: "var(--muted)", marginBottom: "32px" }}>
          All NAVA garments are packed in archival breathable unbleached cotton garment bags
          and dispatched via fully insured priority air couriers.
        </p>

        <HairlineDivider />

        <div style={{ display: "flex", flexDirection: "column", gap: "32px", marginTop: "32px" }}>
          <section>
            <h2 className="heading-2" style={{ color: "var(--primary)", marginBottom: "8px" }}>
              Domestic Delivery (Pakistan)
            </h2>
            <p className="body-regular" style={{ color: "var(--secondary)", lineHeight: 1.8 }}>
              Complimentary next-day insured courier dispatch across Lahore, Karachi, and
              Islamabad / Rawalpindi. Other regional cities within 2–3 business days. White-glove
              private messenger delivery available for bridal commissions.
            </p>
          </section>

          <section>
            <h2 className="heading-2" style={{ color: "var(--primary)", marginBottom: "8px" }}>
              International Delivery (UK, EU, GCC, US, Canada)
            </h2>
            <p className="body-regular" style={{ color: "var(--secondary)", lineHeight: 1.8 }}>
              Dispatched via DHL Express Worldwide. Transit times are typically 3–5 business
              days. Orders are shipped Delivery Duty Paid (DDP) for United Kingdom, UAE, and
              United States—all import tariffs, customs clearance, and local sales taxes are
              handled transparently by NAVA at checkout.
            </p>
          </section>

          <section>
            <h2 className="heading-2" style={{ color: "var(--primary)", marginBottom: "8px" }}>
              Made-to-Order & Bespoke Timelines
            </h2>
            <p className="body-regular" style={{ color: "var(--secondary)", lineHeight: 1.8 }}>
              Ready-to-wear pieces ship within 24 to 48 hours of order confirmation. Pieces
              crafted to order (such as the Sculptural Raw Silk Trench and Zardozi Cape) require
              their noted atelier lead times (typically 2 to 6 weeks) before courier hand-off.
            </p>
          </section>

          <section>
            <h2 className="heading-2" style={{ color: "var(--primary)", marginBottom: "8px" }}>
              Tracking & Concierge Inquiries
            </h2>
            <p className="body-regular" style={{ color: "var(--secondary)", lineHeight: 1.8 }}>
              Upon atelier handoff, an encrypted tracking link is transmitted via email and SMS.
              For private shipment holds or specific delivery windows, please contact our{" "}
              <Link href="/contact" style={{ color: "var(--accent)", textDecoration: "underline" }}>
                Client Concierge
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </ServicePage>
  );
}
