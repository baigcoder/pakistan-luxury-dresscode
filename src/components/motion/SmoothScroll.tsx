"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useUI } from "@/context/UIContext";
import { useCommerce } from "@/context/CommerceContext";

gsap.registerPlugin(ScrollTrigger);

/**
 * Inertial page scrolling (Lenis) driven by GSAP's ticker so ScrollTrigger
 * scrubs stay perfectly in sync. Disabled for reduced-motion users.
 */
export const SmoothScroll: React.FC = () => {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();
  const { isSearchOpen, isMobileMenuOpen } = useUI();
  const { isCartDrawerOpen } = useCommerce();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      anchors: true,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Freeze page scroll while an overlay owns the screen
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    if (isSearchOpen || isMobileMenuOpen || isCartDrawerOpen) lenis.stop();
    else lenis.start();
  }, [isSearchOpen, isMobileMenuOpen, isCartDrawerOpen]);

  // New route: start at the top and re-measure triggers once layout settles
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true, force: true });
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 400);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return null;
};
