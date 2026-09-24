import type { Metadata } from "next";
import { BRAND } from "@/config/brand";

export const metadata: Metadata = {
  // An object title keeps the "%s | NAVA" template flowing to article pages
  title: { default: "The Atelier Journal", template: `%s | ${BRAND.name}` },
  description: "Essays, craft reportage and conversations from the NAVA atelier — on form, material and the hands behind them.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
