"use client";

import { useEffect } from "react";
import { BRAND } from "@/config/brand";
import { INTRO_STORAGE_KEY } from "./introScript";
import styles from "./IntroCurtain.module.css";

/**
 * First-visit title curtain. The whole sequence is pure CSS, so it can never
 * get stuck; JS only records that it has played for this session.
 */
export const IntroCurtain: React.FC = () => {
  useEffect(() => {
    try {
      sessionStorage.setItem(INTRO_STORAGE_KEY, "1");
    } catch {
      /* storage unavailable — the intro simply plays again */
    }
  }, []);

  return (
    <div className={styles.curtain} data-intro-curtain aria-hidden="true">
      <div className={styles.center}>
        <div className={styles.wordmark}>
          {BRAND.name.split("").map((char, i) => (
            <span key={i} className={styles.letterMask}>
              <span className={styles.letter} style={{ animationDelay: `${120 + i * 70}ms` }}>
                {char}
              </span>
            </span>
          ))}
        </div>
        <div className={styles.rule}>
          <span className={styles.ruleFill} />
        </div>
        <p className={styles.caption}>
          <span>Lahore</span>
          <span className={styles.dot} />
          <span>Karachi</span>
          <span className={styles.dot} />
          <span>Est. {BRAND.established}</span>
        </p>
      </div>
    </div>
  );
};
