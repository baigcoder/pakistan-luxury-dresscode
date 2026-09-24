import React from "react";
import styles from "./Badge.module.css";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "neutral" | "terracotta" | "indigo" | "dark" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "neutral",
  size = "md",
  className = "",
}) => {
  const combinedClasses = [
    styles.badge,
    styles[variant],
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={combinedClasses}>{children}</span>;
};
