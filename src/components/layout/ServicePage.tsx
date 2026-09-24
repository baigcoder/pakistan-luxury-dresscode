"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND } from "@/config/brand";
import styles from "./ServicePage.module.css";

const SERVICE_LINKS = [
  { href: "/size-guide", label: "Size guide" },
  { href: "/care", label: "Care & longevity" },
  { href: "/shipping", label: "Shipping" },
  { href: "/returns", label: "Returns & exchanges" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms of service" },
  { href: "/accessibility", label: "Accessibility" },
];

/** Shared frame for client-service pages: sticky section menu + reading column */
export const ServicePage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className={styles.page}>
      <aside className={styles.aside}>
        <div className={styles.sticky}>
          <span className={styles.label}>Client services</span>
          <nav aria-label="Client services">
            <ul className={styles.nav}>
              {SERVICE_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={[styles.navLink, active ? styles.active : ""].filter(Boolean).join(" ")}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className={styles.concierge}>
            <span className={styles.label}>Concierge</span>
            <p>Questions about an order, a fitting or a piece?</p>
            <a href={`mailto:${BRAND.contact.email}`} className={styles.contactLink}>
              {BRAND.contact.email}
            </a>
            <Link href="/contact" className={styles.contactLink}>
              Book an appointment →
            </Link>
          </div>
        </div>
      </aside>

      <article className={styles.content}>{children}</article>
    </div>
  );
};
