import React from "react";
import styles from "./MetadataRow.module.css";

export interface MetadataRowProps {
  label: string;
  value: React.ReactNode;
  provenance?: boolean;
  className?: string;
}

export const MetadataRow: React.FC<MetadataRowProps> = ({
  label,
  value,
  provenance = false,
  className = "",
}) => {
  return (
    <div className={`${styles.row} ${className}`}>
      <span className={styles.label}>{label}</span>
      <span className={`${styles.value} ${provenance ? styles.provenance : ""}`}>
        {value}
      </span>
    </div>
  );
};
