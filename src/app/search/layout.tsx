import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search",
  description: "Search NAVA pieces, collections, craft traditions and journal stories.",
  robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
