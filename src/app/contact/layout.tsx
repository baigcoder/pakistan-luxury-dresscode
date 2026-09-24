import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Appointments",
  description: "Book a private fitting, arrange an atelier visit, or reach the NAVA concierge in Lahore and Karachi.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
