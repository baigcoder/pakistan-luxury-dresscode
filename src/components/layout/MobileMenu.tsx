"use client";

import React from "react";
import Link from "next/link";
import { BRAND } from "@/config/brand";
import { MAIN_NAV } from "@/data/navigation";
import { useUI } from "@/context/UIContext";
import { X, ArrowRight, Heart, ShoppingBag, Search } from "lucide-react";
import styles from "./MobileMenu.module.css";

export const MobileMenu: React.FC = () => {
  const {
    isMobileMenuOpen,
    closeMobileMenu,
    openSearch,
    openCart,
    currency,
    setCurrency,
    wishlistCount,
    bagCount,
  } = useUI();

  if (!isMobileMenuOpen) return null;

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      <div className={styles.header}>
        <span className={styles.brandTitle}>{BRAND.name}</span>
        <button
          type="button"
          className={styles.closeButton}
          onClick={closeMobileMenu}
          aria-label="Close navigation"
        >
          <X size={24} />
        </button>
      </div>

      <div className={styles.content}>
        {/* Primary Editorial Category Links */}
        <nav className={styles.primaryNav}>
          <ul className={styles.navList}>
            {MAIN_NAV.map((item, index) => (
              <li key={item.label} className={styles.navItem}>
                <Link
                  href={item.href}
                  className={styles.navLink}
                  onClick={closeMobileMenu}
                >
                  <span className={styles.itemIndex}>0{index + 1}</span>
                  <span className={styles.itemLabel}>{item.label}</span>
                  <ArrowRight size={18} className={styles.itemArrow} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Secondary Utilities & Actions */}
        <div className={styles.secondarySection}>
          <div className={styles.utilityGrid}>
            <button
              type="button"
              className={styles.utilBtn}
              onClick={() => {
                closeMobileMenu();
                openSearch();
              }}
            >
              <Search size={16} />
              <span>Search Catalog</span>
            </button>

            <Link
              href="/wishlist"
              className={styles.utilBtn}
              onClick={closeMobileMenu}
            >
              <Heart size={16} />
              <span>Wishlist ({wishlistCount})</span>
            </Link>

            <button
              type="button"
              className={styles.utilBtn}
              onClick={() => {
                closeMobileMenu();
                openCart();
              }}
            >
              <ShoppingBag size={16} />
              <span>Shopping Bag ({bagCount})</span>
            </button>
          </div>

          {/* Currency Toggle */}
          <div className={styles.currencyRow}>
            <span className={styles.currencyLabel}>Currency:</span>
            <div className={styles.currencyPills}>
              {(["PKR", "USD", "GBP", "EUR"] as const).map((curr) => (
                <button
                  key={curr}
                  type="button"
                  className={[
                    styles.currencyPill,
                    currency === curr ? styles.pillActive : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => setCurrency(curr)}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>

          {/* Cultural Provenance Anchor */}
          <div className={styles.culturalFooter}>
            <p className={styles.culturalStatement}>{BRAND.statement}</p>
            <span className={styles.provenanceNote}>
              LAHORE &bull; KARACHI &bull; WORLDWIDE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
