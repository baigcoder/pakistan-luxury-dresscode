import React from "react";
import {
  HeroCampaign,
  ArchiveFilm,
  CraftMarquee,
  HomeStatement,
  SelectedPieces,
  HomeCampaignInterlude,
  CategorySplit,
  AtelierFeature,
  RegionalCraftExplorer,
  JournalPreview,
} from "@/components/editorial";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      {/* 01 — Full-bleed campaign */}
      <HeroCampaign />

      {/* 02 — Regional craft ticker */}
      <CraftMarquee />

      {/* 03 — House manifesto, lit word by word on scroll */}
      <HomeStatement />

      {/* 04 — Staggered product gallery */}
      <SelectedPieces />

      {/* 05 — Pinned frame opening to full-bleed */}
      <HomeCampaignInterlude />

      {/* 06 — Women / Men */}
      <CategorySplit />

      {/* 07 — A credited archival campaign film */}
      <ArchiveFilm />

      {/* 08 — The atelier (dark) */}
      <AtelierFeature />

      {/* 09 — Material anatomy & regional archives */}
      <section className={styles.archives}>
        <RegionalCraftExplorer />
      </section>

      {/* 10 — Journal */}
      <JournalPreview />
    </>
  );
}
