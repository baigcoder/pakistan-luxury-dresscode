"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { CollectionItem } from "@/data/collections";
import styles from "./CollectionIndexList.module.css";

/**
 * Archive index: large serif rows; on fine pointers the hovered collection's
 * photograph floats beside the cursor. Touch screens get inline thumbnails.
 */
export const CollectionIndexList: React.FC<{ collections: CollectionItem[] }> = ({ collections }) => {
  const [active, setActive] = useState<number | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const preview = previewRef.current;
    if (!wrap || !preview) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const pos = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      target.x = e.clientX - r.left;
      target.y = e.clientY - r.top;
    };

    const tick = () => {
      pos.x += (target.x - pos.x) * 0.12;
      pos.y += (target.y - pos.y) * 0.12;
      preview.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    wrap.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={wrapRef} className={styles.wrap} onMouseLeave={() => setActive(null)}>
      <div className={styles.head} aria-hidden="true">
        <span>No.</span>
        <span>Collection</span>
        <span>Season</span>
        <span>Pieces</span>
        <span>Status</span>
      </div>

      <ol className={[styles.list, active !== null ? styles.hasActive : ""].filter(Boolean).join(" ")}>
        {collections.map((col, i) => (
          <li
            key={col.id}
            className={[styles.item, active === i ? styles.active : ""].filter(Boolean).join(" ")}
            data-reveal
            data-reveal-delay={String(i * 80)}
          >
            <Link
              href={`/collections/${col.slug}`}
              className={styles.row}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <span className={styles.code}>{col.code}</span>
              <span className={styles.titleCell}>
                <span className={styles.thumb}>
                  <Image src={col.image} alt="" fill sizes="96px" className={styles.thumbImg} />
                </span>
                <span className={styles.title}>
                  {col.title.charAt(0) + col.title.slice(1).toLowerCase()}
                </span>
              </span>
              <span className={styles.season}>{col.season}</span>
              <span className={styles.pieces}>{String(col.pieceCount).padStart(2, "0")}</span>
              <span className={styles.status} data-status={col.status}>
                {col.status}
              </span>
            </Link>
          </li>
        ))}
      </ol>

      {/* Floating preview (fine pointers only) */}
      <div ref={previewRef} className={styles.preview} aria-hidden="true">
        <div className={[styles.previewInner, active !== null ? styles.previewOn : ""].filter(Boolean).join(" ")}>
          {collections.map((col, i) => (
            <Image
              key={col.id}
              src={col.image}
              alt=""
              fill
              sizes="340px"
              className={[styles.previewImg, active === i ? styles.previewImgOn : ""].filter(Boolean).join(" ")}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
