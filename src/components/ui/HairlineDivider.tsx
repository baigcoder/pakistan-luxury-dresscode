import React from "react";
import styles from "./HairlineDivider.module.css";

export interface HairlineDividerProps {
  orientation?: "horizontal" | "vertical";
  label?: string;
  className?: string;
}

export const HairlineDivider: React.FC<HairlineDividerProps> = ({
  orientation = "horizontal",
  label,
  className = "",
}) => {
  if (label && orientation === "horizontal") {
    return (
      <div className={`${styles.dividerWithLabel} ${className}`}>
        <div className={styles.line} />
        <span className={styles.label}>{label}</span>
        <div className={styles.line} />
      </div>
    );
  }

  return (
    <div
      className={`${styles.divider} ${styles[orientation]} ${className}`}
      role="separator"
      aria-orientation={orientation}
    />
  );
};
