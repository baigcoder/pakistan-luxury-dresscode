"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { UIProvider } from "@/context/UIContext";
import { CommerceProvider } from "@/context/CommerceContext";
import { Header } from "./Header";
import { MobileMenu } from "./MobileMenu";
import { SearchOverlay } from "./SearchOverlay";
import { CartDrawer } from "@/components/commerce/CartDrawer";
import { MinimalCursor } from "@/components/ui";
import { SmoothScroll, RevealObserver } from "@/components/motion";
import { Footer } from "./Footer";
import styles from "./AppShell.module.css";

export const AppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // The home page opens on a full-bleed hero that sits beneath the header
  const isHome = usePathname() === "/";

  return (
    <CommerceProvider>
      <UIProvider>
        <SmoothScroll />
        <RevealObserver />

        <div className={styles.shell}>
          <a href="#main-content" className={styles.skipToContent}>
            Skip to main content
          </a>

          <Header />
          <MobileMenu />
          <SearchOverlay />
          <CartDrawer />

          <main
            id="main-content"
            className={[styles.main, isHome ? "" : styles.offset].filter(Boolean).join(" ")}
          >
            {children}
          </main>

          <Footer />
          <MinimalCursor />
        </div>
      </UIProvider>
    </CommerceProvider>
  );
};
