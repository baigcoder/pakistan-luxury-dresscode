import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account",
  description: "Manage your NAVA orders, fittings, measurements and saved pieces.",
  robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
