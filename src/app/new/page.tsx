import React from "react";
import type { Metadata } from "next";
import { NewArrivalsView } from "@/components/commerce/NewArrivalsView";

export const metadata: Metadata = {
  title: "New Arrivals — The Latest Silhouettes",
  description:
    "Discover the latest contemporary Pakistani luxury silhouettes, unconstructed trench coats, and limited artisan pieces.",
};

export default function NewArrivalsPage() {
  return <NewArrivalsView />;
}
