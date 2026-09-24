import React from "react";
import type { Metadata } from "next";
import { CatalogView } from "@/components/commerce/CatalogView";
import { BRAND } from "@/config/brand";

export const metadata: Metadata = {
  title: "Atelier Catalog — Complete Works",
  description:
    "Explore the complete catalog of NAVA contemporary Pakistani luxury tailoring, Sindhi Ajrak block prints, and handcrafted couture.",
};

export default function ShopPage() {
  return <CatalogView initialCategory="all" />;
}
