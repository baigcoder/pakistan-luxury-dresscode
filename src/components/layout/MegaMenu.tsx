"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { MAIN_NAV } from "@/data/navigation";
import { useUI } from "@/context/UIContext";
import { ArrowRight } from "lucide-react";
import styles from "./MegaMenu.module.css";

export const MegaMenu: React.FC = () => {
  const { activeMegaMenu, setActiveMegaMenu } = useUI();
  const menuRef = useRef<HTMLDivElement>(null);

  const activeItem = MAIN_NAV.find((item) => item.label === activeMegaMenu);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActiveMegaMenu(null);
      }
    };

    if (activeMegaMenu) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [activeMegaMenu, setActiveMegaMenu]);

  if (!activeItem || !activeItem.megaMenuData) {
    return null;
  }

  const { featuredTitle, featuredImage, featuredLink, featuredCaption, columns } =
    activeItem.megaMenuData;

  return (
    <div
      ref={menuRef}
      className={styles.overlay}
      onMouseLeave={() => setActiveMegaMenu(null)}
      role="region"
      aria-label={`${activeItem.label} Submenu`}
    >
      <div className={`container-max ${styles.innerContainer}`}>
        <div className={styles.grid}>
          {/* Category Columns */}
          <div className={styles.columnsWrapper}>
            {columns.map((col) => (
              <div key={col.heading} className={styles.column}>
                <h3 className={styles.columnHeading}>{col.heading}</h3>
                <ul className={styles.linkList}>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={styles.link}
                        onClick={() => setActiveMegaMenu(null)}
                      >
                        <span>{link.label}</span>
                        {link.badge && (
                          <span className={styles.itemBadge}>{link.badge}</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Campaign Spotlight */}
          <div className={styles.featuredSpotlight}>
            <Link
              href={featuredLink}
              className={styles.featuredCard}
              onClick={() => setActiveMegaMenu(null)}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={featuredImage}
                  alt={featuredTitle}
                  fill
                  sizes="320px"
                  className={styles.featuredImage}
                />
              </div>
              <div className={styles.featuredMeta}>
                <div className={styles.featuredHeader}>
                  <span className={styles.featuredEyebrow}>SPOTLIGHT</span>
                  <span className={styles.featuredTitle}>{featuredTitle}</span>
                </div>
                <p className={styles.featuredCaption}>{featuredCaption}</p>
                <span className={styles.ctaLink}>
                  EXPLORE EDITORIAL <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
