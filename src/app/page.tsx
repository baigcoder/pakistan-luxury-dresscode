import React from "react";
import {
  HeroCampaign,
  ArchiveFilm,
  CraftMarquee,
  HomeStatement,
  SelectedPieces,
  BespokeSuitingFeature,
  HomeCampaignInterlude,
  CategorySplit,
  AtelierFeature,
  FounderSpotlight,
  RegionalCraftExplorer,
  JournalPreview,
} from "@/components/editorial";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      {/* 01 — Full-bleed campaign with multi-look suited switcher */}
      <HeroCampaign />

      {/* 02 — Regional craft ticker */}
      <CraftMarquee />

      {/* 03 — House manifesto, lit word by word on scroll */}
      <HomeStatement />

      {/* 04 — Staggered product gallery */}
      <SelectedPieces />

      {/* 05 — The Suited Archive: Bespoke Tailoring & Workbench Anatomy */}
      <BespokeSuitingFeature />

      {/* 06 — Pinned frame opening to full-bleed Mitti campaign */}
      <HomeCampaignInterlude />

      {/* 07 — Women / Men bespoke suiting split */}
      <CategorySplit />

      {/* 08 — A credited archival campaign film */}
      <ArchiveFilm />

      {/* 09 — The atelier (dark) */}
      <AtelierFeature />

      {/* 10 — The Founder: Software Engineer & Creative Director */}
      <FounderSpotlight />

      {/* 11 — Material anatomy & regional archives */}
      <section className={styles.archives}>
        <RegionalCraftExplorer />
      </section>

      {/* 12 — Journal */}
      <JournalPreview />
    </>
  );
}
