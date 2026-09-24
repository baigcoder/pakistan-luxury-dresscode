"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND } from "@/config/brand";
import { MAIN_NAV } from "@/data/navigation";
import { useUI } from "@/context/UIContext";
import { useCommerce } from "@/context/CommerceContext";
import { MegaMenu } from "./MegaMenu";
import styles from "./Header.module.css";

const NAV_LABELS = ["New", "Women", "Men", "Collections", "Craft", "Journal"];
const NAV_LINKS = MAIN_NAV.filter((item) => NAV_LABELS.includes(item.label));

const HIDE_AFTER = 240;

export const Header: React.FC = () => {
  const pathname = usePathname();
  const {
    openSearch,
    toggleMobileMenu,
    isMobileMenuOpen,
    currency,
    setCurrency,
    activeMegaMenu,
    setActiveMegaMenu,
  } = useUI();
  const { bagCount, wishlist, openCartDrawer } = useCommerce();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const lastY = useRef(0);

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      // On the home page the header stays transparent across the full-bleed hero
      const threshold = isHome ? window.innerHeight - 120 : 8;
      setIsScrolled(y > threshold);
      const delta = y - lastY.current;
      if (y <= HIDE_AFTER) setIsHidden(false);
      else if (delta > 4) setIsHidden(true);
      else if (delta < -4) setIsHidden(false);
      if (Math.abs(delta) > 4 || y <= HIDE_AFTER) lastY.current = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const menuOpen = Boolean(activeMegaMenu) || currencyOpen;
  const hidden = isHidden && !menuOpen && !isMobileMenuOpen;
  const solid = isScrolled || menuOpen || !isHome;

  // Let sticky page elements (filters, rails) follow the header in and out
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--header-offset",
      hidden ? "0px" : "var(--nav-height)"
    );
  }, [hidden]);

  return (
    <header
      className={[
        styles.header,
        solid ? styles.solid : styles.overlay,
        hidden ? styles.hidden : "",
      ]
        .filter(Boolean)
        .join(" ")}
      onMouseLeave={() => setActiveMegaMenu(null)}
    >
      <div className={styles.inner}>
        {/* Left: primary navigation */}
        <nav className={styles.leftNav} aria-label="Main navigation">
          <ul className={styles.navList}>
            {NAV_LINKS.map((item) => {
              const isActive =
                item.href === "/" ? isHome : pathname.startsWith(item.href);
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={[
                      styles.navLink,
                      isActive || activeMegaMenu === item.label ? styles.navLinkActive : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onMouseEnter={() =>
                      setActiveMegaMenu(item.megaMenuData ? item.label : null)
                    }
                    onFocus={() =>
                      setActiveMegaMenu(item.megaMenuData ? item.label : null)
                    }
                    onClick={() => setActiveMegaMenu(null)}
                    aria-expanded={item.megaMenuData ? activeMegaMenu === item.label : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className={`${styles.textBtn} ${styles.mobileOnly}`}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <span className={styles.burger} data-open={isMobileMenuOpen} aria-hidden="true">
            <span />
            <span />
          </span>
          {isMobileMenuOpen ? "Close" : "Menu"}
        </button>

        {/* Centre: wordmark */}
        <Link href="/" className={styles.wordmark} aria-label={`${BRAND.name} — home`}>
          {BRAND.name}
        </Link>

        {/* Right: utilities */}
        <div className={styles.rightActions}>
          <div className={styles.currencyWrap}>
            <button
              type="button"
              className={styles.textBtn}
              onClick={() => setCurrencyOpen(!currencyOpen)}
              aria-label={`Currency: ${currency}`}
              aria-expanded={currencyOpen}
            >
              {currency}
            </button>
            {currencyOpen && (
              <div className={styles.currencyDropdown}>
                {(["PKR", "USD", "GBP", "EUR"] as const).map((curr) => (
                  <button
                    key={curr}
                    type="button"
                    className={[
                      styles.currencyItem,
                      currency === curr ? styles.currencyActive : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() => {
                      setCurrency(curr);
                      setCurrencyOpen(false);
                    }}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button type="button" className={styles.textBtn} onClick={openSearch}>
            Search
          </button>

          <Link
            href="/wishlist"
            className={styles.textBtn}
            aria-label={`Wishlist, ${wishlist.length} saved`}
          >
            Wishlist
            {wishlist.length > 0 && <sup className={styles.count}>{wishlist.length}</sup>}
          </Link>

          <button
            type="button"
            className={styles.textBtn}
            onClick={openCartDrawer}
            aria-label={`Shopping bag, ${bagCount} items`}
          >
            Bag<sup className={styles.count}>{bagCount}</sup>
          </button>
        </div>

        <button
          type="button"
          className={`${styles.textBtn} ${styles.mobileOnly} ${styles.mobileBag}`}
          onClick={openCartDrawer}
          aria-label={`Shopping bag, ${bagCount} items`}
        >
          Bag<sup className={styles.count}>{bagCount}</sup>
        </button>
      </div>

      <MegaMenu />
    </header>
  );
};
