"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

type Currency = "PKR" | "USD" | "GBP" | "EUR";

interface UIContextType {
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  toggleSearch: () => void;

  isMobileMenuOpen: boolean;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleMobileMenu: () => void;

  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;

  activeMegaMenu: string | null;
  setActiveMegaMenu: (item: string | null) => void;

  currency: Currency;
  setCurrency: (currency: Currency) => void;

  bagCount: number;
  incrementBag: () => void;
  wishlistCount: number;
  toggleWishlistMock: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [currency, setCurrency] = useState<Currency>("PKR");
  const [bagCount, setBagCount] = useState(1); // 1 preview sample
  const [wishlistCount, setWishlistCount] = useState(2); // 2 preview samples

  const openSearch = useCallback(() => {
    setIsSearchOpen(true);
    setIsMobileMenuOpen(false);
    setIsCartOpen(false);
    setActiveMegaMenu(null);
  }, []);

  const closeSearch = useCallback(() => setIsSearchOpen(false), []);
  const toggleSearch = useCallback(() => setIsSearchOpen((prev) => !prev), []);

  const openMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(true);
    setIsSearchOpen(false);
    setIsCartOpen(false);
  }, []);

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
  const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen((prev) => !prev), []);

  const openCart = useCallback(() => {
    setIsCartOpen(true);
    setIsSearchOpen(false);
    setIsMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, []);

  const closeCart = useCallback(() => setIsCartOpen(false), []);
  const toggleCart = useCallback(() => setIsCartOpen((prev) => !prev), []);

  const incrementBag = useCallback(() => setBagCount((prev) => prev + 1), []);
  const toggleWishlistMock = useCallback(() => {
    setWishlistCount((prev) => (prev > 0 ? prev - 1 : 1));
  }, []);

  // Close overlays on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
        setIsMobileMenuOpen(false);
        setIsCartOpen(false);
        setActiveMegaMenu(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when modal/drawer is open
  useEffect(() => {
    if (isSearchOpen || isMobileMenuOpen || isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSearchOpen, isMobileMenuOpen, isCartOpen]);

  return (
    <UIContext.Provider
      value={{
        isSearchOpen,
        openSearch,
        closeSearch,
        toggleSearch,
        isMobileMenuOpen,
        openMobileMenu,
        closeMobileMenu,
        toggleMobileMenu,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        activeMegaMenu,
        setActiveMegaMenu,
        currency,
        setCurrency,
        bagCount,
        incrementBag,
        wishlistCount,
        toggleWishlistMock,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUI must be used within a UIProvider");
  }
  return context;
};
