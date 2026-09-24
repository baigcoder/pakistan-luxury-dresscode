"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { X } from "lucide-react";
import { WOMEN_SIZES, MEN_SIZES } from "@/data/sizeGuide";
import styles from "./SizeGuideDialog.module.css";

type Unit = "cm" | "in";

interface SizeGuideDialogProps {
  open: boolean;
  onClose: () => void;
  /** Chooses the chart; women's is used for anything that isn't menswear */
  category: string;
  /** The product's currently selected size label, e.g. "Size 02 (UK 10–12)" */
  selectedSize?: string;
}

/** "82–86 cm" → "32.5–34 in" (rounded to the nearest half inch) */
const toUnit = (value: string, unit: Unit) => {
  if (unit === "cm") return value;
  return value
    .replace(/[\d.]+/g, (n) => String(Math.round((parseFloat(n) / 2.54) * 2) / 2))
    .replace("cm", "in");
};

const MEASURE_TIPS = [
  { k: "Bust / Chest", v: "Around the fullest part, tape level under the arms." },
  { k: "Waist", v: "Around the natural waistline, the narrowest point of the torso." },
  { k: "Hip", v: "Around the fullest part of the hips, feet together." },
];

export const SizeGuideDialog: React.FC<SizeGuideDialogProps> = ({
  open,
  onClose,
  category,
  selectedSize,
}) => {
  const [unit, setUnit] = useState<Unit>("cm");
  const closeRef = useRef<HTMLButtonElement>(null);
  const isMen = category === "men";

  // Lock the page, trap Escape, and hand focus back to the trigger on close
  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      root.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  const isSelected = (rowSize: string) => Boolean(selectedSize?.startsWith(rowSize));

  return createPortal(
    // data-lenis-prevent: let the panel scroll natively instead of the page
    <div className={styles.overlay} onClick={onClose} data-lenis-prevent>
      <div
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby="size-guide-title"
        onClick={(e) => e.stopPropagation()}
      >
        <header className={styles.header}>
          <div>
            <span className={styles.eyebrow}>{isMen ? "Menswear" : "Womenswear"} · Tailoring reference</span>
            <h2 id="size-guide-title" className={styles.title}>
              Size <em>guide</em>
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Close size guide"
          >
            <X size={18} strokeWidth={1.4} />
          </button>
        </header>

        <div className={styles.toolbar}>
          <p className={styles.lede}>Body measurements. Our cuts allow generous, unconstructed ease.</p>
          <div className={styles.unitToggle} role="group" aria-label="Measurement unit">
            {(["cm", "in"] as const).map((u) => (
              <button
                key={u}
                type="button"
                className={unit === u ? styles.unitActive : undefined}
                aria-pressed={unit === u}
                onClick={() => setUnit(u)}
              >
                {u}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.tableWrap}>
          {isMen ? (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Size</th>
                  <th>US / UK</th>
                  <th>EU</th>
                  <th>Chest</th>
                  <th>Waist</th>
                  <th>Shoulder</th>
                </tr>
              </thead>
              <tbody>
                {MEN_SIZES.map((row) => (
                  <tr key={row.size} className={isSelected(row.size) ? styles.selected : undefined}>
                    <th scope="row">{row.size}</th>
                    <td>{row.usUk}</td>
                    <td>{row.eu}</td>
                    <td>{toUnit(row.chest, unit)}</td>
                    <td>{toUnit(row.waist, unit)}</td>
                    <td>{toUnit(row.shoulder, unit)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Size</th>
                  <th>UK</th>
                  <th>US</th>
                  <th>EU</th>
                  <th>Bust</th>
                  <th>Waist</th>
                  <th>Hip</th>
                </tr>
              </thead>
              <tbody>
                {WOMEN_SIZES.map((row) => (
                  <tr key={row.size} className={isSelected(row.size) ? styles.selected : undefined}>
                    <th scope="row">{row.size}</th>
                    <td>{row.uk.replace("UK ", "")}</td>
                    <td>{row.us.replace("US ", "")}</td>
                    <td>{row.eu.replace("EU ", "")}</td>
                    <td>{toUnit(row.bust, unit)}</td>
                    <td>{toUnit(row.waist, unit)}</td>
                    <td>{toUnit(row.hip, unit)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <section className={styles.measure} aria-labelledby="how-to-measure">
          <h3 id="how-to-measure" className={styles.subhead}>
            How to measure
          </h3>
          <ul className={styles.tips}>
            {MEASURE_TIPS.filter((t) => !isMen || t.k !== "Hip").map((t) => (
              <li key={t.k}>
                <span className={styles.tipKey}>{t.k}</span>
                <span className={styles.tipVal}>{t.v}</span>
              </li>
            ))}
          </ul>
        </section>

        <aside className={styles.bespoke}>
          <p>
            Between sizes, or want it cut to you? Our atelier offers <em>bespoke made-to-measure</em>{" "}
            on most pieces.
          </p>
          <div className={styles.links}>
            <Link href="/contact" className={styles.link} onClick={onClose}>
              Book a fitting
            </Link>
            <Link href="/size-guide" className={styles.link} onClick={onClose}>
              Full size guide
            </Link>
          </div>
        </aside>
      </div>
    </div>,
    document.body
  );
};
