import React from "react";
import styles from "./CraftMarquee.module.css";

// Mirrors the six regional archives in RegionalCraftExplorer
const CRAFTS = [
  { craft: "Zardozi", region: "Punjab" },
  { craft: "Ajrak", region: "Sindh" },
  { craft: "Pit-loom wool", region: "Swat" },
  { craft: "Desert weave", region: "Balochistan" },
  { craft: "Sozni", region: "Kashmir" },
  { craft: "Pattoo", region: "Gilgit-Baltistan" },
];

const Sequence: React.FC<{ hidden?: boolean }> = ({ hidden }) => (
  <ul className={styles.sequence} aria-hidden={hidden || undefined}>
    {CRAFTS.map(({ craft, region }) => (
      <li key={craft} className={styles.item}>
        <span className={styles.craft}>{craft}</span>
        <span className={styles.region}>{region}</span>
        <svg className={styles.star} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0 L13.6 10.4 L24 12 L13.6 13.6 L12 24 L10.4 13.6 L0 12 L10.4 10.4 Z" />
        </svg>
      </li>
    ))}
  </ul>
);

export const CraftMarquee: React.FC = () => (
  <section className={styles.marquee} aria-label="Regional crafts of the house">
    <div className={styles.track}>
      <Sequence />
      <Sequence hidden />
    </div>
  </section>
);
