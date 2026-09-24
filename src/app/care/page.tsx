import React from "react";
import { ServicePage } from "@/components/layout/ServicePage";
import type { Metadata } from "next";
import Link from "next/link";
import { HairlineDivider } from "@/components/ui";

export const metadata: Metadata = {
  title: "Garment Care & Fiber Longevity",
  description: "Preservation protocols for hand-spun raw silk, natural indigo Ajrak cotton, and Swat highland wool.",
};

export default function CarePage() {
  return (
    <ServicePage>
      <div>
        <span className="metadata">TEXTILE PRESERVATION</span>
        <h1 className="display-l" style={{ margin: "8px 0 16px", color: "var(--primary)" }}>
          Care &amp; <em>longevity.</em>
        </h1>
        <p className="body-editorial" style={{ color: "var(--muted)", marginBottom: "32px" }}>
          NAVA garments are made from living natural fibers—pure mulberry raw silk, hand-harvested
          indigo, and un-dyed mountain wool. Cared for thoughtfully, they acquire richness and
          patina across decades.
        </p>

        <HairlineDivider />

        <div style={{ display: "flex", flexDirection: "column", gap: "32px", marginTop: "32px" }}>
          <section>
            <h2 className="heading-2" style={{ color: "var(--primary)", marginBottom: "8px" }}>
              Handloom Raw Silk & Tussar
            </h2>
            <p className="body-regular" style={{ color: "var(--secondary)", lineHeight: 1.8 }}>
              Store on contoured cedar or padded wooden hangers to preserve shoulder structure.
              Never machine wash or wring. Entrust exclusively to luxury ecological dry cleaners
              experienced with untreated raw proteins. Steam from the reverse side at low heat;
              never place a direct hot flat iron on raw silk slubs.
            </p>
          </section>

          <section>
            <h2 className="heading-2" style={{ color: "var(--primary)", marginBottom: "8px" }}>
              Authentic Sindhi Ajrak & Indigo Cotton
            </h2>
            <p className="body-regular" style={{ color: "var(--secondary)", lineHeight: 1.8 }}>
              Natural indigo and madder root are living botanical dyes. For initial launderings,
              hand wash separately in cold water with pH-neutral organic soap. Always dry flat in
              shaded air away from direct desert sun to prevent UV bleaching. Iron damp on reverse.
            </p>
          </section>

          <section>
            <h2 className="heading-2" style={{ color: "var(--primary)", marginBottom: "8px" }}>
              Swat Highland Wool & Cashmere Pashmina
            </h2>
            <p className="body-regular" style={{ color: "var(--secondary)", lineHeight: 1.8 }}>
              Natural wool fibers possess self-cleaning lanolin coatings. Air out coats on a
              balcony or shaded terrace after wearing rather than frequent cleaning. Brush down
              with a natural horsehair bristle brush to release dust. Store during summer months
              with dried lavender and cedar blocks in breathable unbleached muslin bags.
            </p>
          </section>

          <section>
            <h2 className="heading-2" style={{ color: "var(--primary)", marginBottom: "8px" }}>
              Zardozi Gold & Silver Metallic Wire
            </h2>
            <p className="body-regular" style={{ color: "var(--secondary)", lineHeight: 1.8 }}>
              Real bullion wires can tarnish if exposed to synthetic perfumes, hairsprays, or
              humidity. Apply fragrance and cosmetics prior to dressing. If metallic threads
              require realignment, return the garment to our Lahore atelier for archival
              restoration.
            </p>
          </section>
        </div>
      </div>
    </ServicePage>
  );
}
