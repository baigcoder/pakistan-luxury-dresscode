import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./CategorySplit.module.css";

const PANELS = [
  {
    label: "Women",
    href: "/shop/women",
    image: "/images/women-couture-suit.jpg",
    alt: "Ivory tailored raw silk double-breasted suit with geometric Zardozi peak lapels",
    note: "Sculptural tailoring, raw silk, zardozi needlework",
  },
  {
    label: "Men",
    href: "/shop/men",
    image: "/images/men-architectural-suit.jpg",
    alt: "Obsidian architectural bandgala suit in handloom highland wool",
    note: "Bandgala, architectural suiting, highland wool",
  },
];

export const CategorySplit: React.FC = () => (
  <section className={styles.split} aria-label="Shop by category">
    {PANELS.map((p, i) => (
      <Link key={p.label} href={p.href} className={styles.panel} data-cursor="explore">
        <div className={styles.media} data-reveal="clip" data-reveal-delay={String(i * 140)}>
          <Image src={p.image} alt={p.alt} fill quality={95} sizes="(max-width: 800px) 100vw, 60vw" className={styles.image} />
        </div>
        <div className={styles.scrim} />
        <div className={styles.content}>
          <span className={styles.index}>0{i + 1}</span>
          <h2 className={styles.label}>{p.label}</h2>
          <div className={styles.footer}>
            <span className={styles.note}>{p.note}</span>
            <span className={styles.cta}>
              Shop {p.label.toLowerCase()} <span aria-hidden="true">→</span>
            </span>
          </div>
        </div>
      </Link>
    ))}
  </section>
);
