"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./ImageFrame.module.css";

export type AspectRatio = "16:9" | "4:5" | "3:4" | "1:1" | "3:2" | "4:3" | "auto";

export interface ImageFrameProps {
  src: string;
  alt: string;
  aspectRatio?: AspectRatio;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  caption?: string;
  badge?: React.ReactNode;
  hoverZoom?: boolean;
  className?: string;
  imageClassName?: string;
  border?: boolean;
}

export const ImageFrame: React.FC<ImageFrameProps> = ({
  src,
  alt,
  aspectRatio = "4:5",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  caption,
  badge,
  hoverZoom = true,
  className = "",
  imageClassName = "",
  border = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectClass =
    aspectRatio !== "auto" ? styles[`ratio_${aspectRatio.replace(":", "_")}`] : "";

  return (
    <figure
      className={[
        styles.frame,
        aspectClass,
        border ? styles.withBorder : "",
        hoverZoom ? styles.hoverZoom : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.imageContainer}>
        {/* Subtle shimmer skeleton until loaded */}
        <div
          className={`${styles.skeleton} ${isLoaded ? styles.loaded : ""}`}
          aria-hidden="true"
        />

        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          onLoad={() => setIsLoaded(true)}
          className={[
            styles.image,
            isLoaded ? styles.imageLoaded : "",
            imageClassName,
          ]
            .filter(Boolean)
            .join(" ")}
        />

        {badge && <div className={styles.badgeWrapper}>{badge}</div>}
      </div>

      {caption && (
        <figcaption className={styles.caption}>
          <span className={styles.captionLine} />
          <span className={styles.captionText}>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
};
