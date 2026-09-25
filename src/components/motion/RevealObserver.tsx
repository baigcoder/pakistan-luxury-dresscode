"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Reveals any `[data-reveal]` element as it enters the viewport.
 * Optional `data-reveal-delay="120"` staggers siblings (ms).
 * Watches the DOM so content rendered after navigation is picked up too.
 */
export const RevealObserver: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("reveal-ready");

    // Observed box → the reveal elements it stands in for
    const watched = new Map<Element, HTMLElement[]>();

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          watched.get(entry.target)?.forEach((el) => el.classList.add("is-revealed"));
          watched.delete(entry.target);
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    const scan = () => {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not(.is-revealed):not([data-reveal-bound])")
        .forEach((el) => {
          const delay = el.dataset.revealDelay;
          if (delay) el.style.setProperty("--reveal-delay", `${delay}ms`);
          el.setAttribute("data-reveal-bound", "");
          // A clip reveal starts at inset(100%), which leaves it no visible area for
          // IntersectionObserver to see, so watch its parent's box instead
          const target = el.dataset.reveal === "clip" ? el.parentElement ?? el : el;
          const group = watched.get(target);
          if (group) group.push(el);
          else {
            watched.set(target, [el]);
            io.observe(target);
          }
        });
    };

    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io.disconnect();
      watched.clear();
      document
        .querySelectorAll("[data-reveal-bound]")
        .forEach((el) => el.removeAttribute("data-reveal-bound"));
    };
  }, [pathname]);

  return null;
};
