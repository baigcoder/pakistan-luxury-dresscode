"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./MinimalCursor.module.css";

const LABELS: Record<string, string> = {
  shop: "Shop",
  view: "View",
  play: "Play",
  drag: "Drag",
  explore: "Explore",
  read: "Read",
};

/**
 * An ultra-refined, non-intrusive luxury cursor accent.
 * - Completely disabled on product pages so fine tailoring and fabric can be inspected cleanly
 * - Uses a delicate, ethereal hairline ring (never an opaque disc blocking images)
 * - Dismisses instantly on route change, click, pointerdown, touch, or scroll
 */
export const MinimalCursor: React.FC = () => {
  const [label, setLabel] = useState<string | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Reset cursor immediately when navigating to any page
  useEffect(() => {
    setLabel(null);
  }, [pathname]);

  useEffect(() => {
    // Only enable on desktop devices with a real hovering fine pointer
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Do not run cursor on product detail pages to keep fabric inspection pristine
    if (pathname.startsWith("/product/")) return;

    const pos = { x: -200, y: -200 };
    const target = { x: -200, y: -200 };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor]");
      const next = el ? LABELS[el.dataset.cursor ?? ""] ?? null : null;
      setLabel((prev) => (prev === next ? prev : next));
    };

    const onLeave = () => setLabel(null);
    const onPointerDown = () => setLabel(null);
    const onClick = () => setLabel(null);
    const onScroll = () => setLabel(null);

    const render = () => {
      pos.x += (target.x - pos.x) * 0.22;
      pos.y += (target.y - pos.y) * 0.22;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }
      raf = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("click", onClick, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [pathname]);

  // Never render custom cursor on product detail pages
  if (pathname.startsWith("/product/")) {
    return null;
  }

  return (
    <div ref={cursorRef} className={styles.cursor} aria-hidden="true">
      <span className={[styles.disc, label ? styles.active : ""].filter(Boolean).join(" ")}>
        {label && <span className={styles.label}>{label}</span>}
      </span>
    </div>
  );
};
