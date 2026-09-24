"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useUI } from "@/context/UIContext";
import { BRAND } from "@/config/brand";
import { PRODUCTS } from "@/data/products";
import { COLLECTIONS } from "@/data/collections";
import { CRAFTS } from "@/data/crafts";
import { JOURNAL_STORIES } from "@/data/journal";
import { X, ArrowUpRight } from "lucide-react";
import styles from "./SearchOverlay.module.css";

type EntryType = "Product" | "Collection" | "Craft" | "Journal";

interface SearchEntry {
  type: EntryType;
  title: string;
  subtitle: string;
  href: string;
  image: string;
  haystack: string;
}

const titleCase = (s: string) => s.charAt(0) + s.slice(1).toLowerCase();

/** Built from the real datasets, so links, prices and images never drift */
const SEARCH_INDEX: SearchEntry[] = [
  ...PRODUCTS.map((p) => ({
    type: "Product" as const,
    title: p.name,
    subtitle: `${p.formattedPrice} · ${p.collection}`,
    href: `/product/${p.slug}`,
    image: p.image,
    haystack: [
      p.name,
      p.collection,
      p.category,
      p.fabric,
      p.craftProvenance,
      p.craftRegion,
      p.silhouette,
      p.description,
      p.badge ?? "",
      ...p.colors.map((c) => c.name),
    ].join(" "),
  })),
  ...COLLECTIONS.map((c) => ({
    type: "Collection" as const,
    title: `${c.code} — ${titleCase(c.title)}`,
    subtitle: `${c.season} · ${c.pieceCount} pieces`,
    href: `/collections/${c.slug}`,
    image: c.image,
    haystack: [c.code, c.title, c.season, c.description, c.materialStory, c.provenance].join(" "),
  })),
  ...CRAFTS.map((c) => ({
    type: "Craft" as const,
    title: c.name,
    subtitle: `${c.province} · ${c.regionalOrigin}`,
    href: `/craft/${c.slug}`,
    image: c.heroImage,
    haystack: [c.name, c.province, c.regionalOrigin, c.summary].join(" "),
  })),
  ...JOURNAL_STORIES.map((j) => ({
    type: "Journal" as const,
    title: j.title,
    subtitle: `${j.category} · ${j.readTime}`,
    href: `/journal/${j.slug}`,
    image: j.image,
    haystack: [j.title, j.subtitle ?? "", j.category, j.excerpt].join(" "),
  })),
].map((e) => ({ ...e, haystack: `${e.title} ${e.haystack}`.toLowerCase() }));

const GROUP_ORDER: EntryType[] = ["Collection", "Craft", "Journal"];
const GROUP_LABEL: Record<EntryType, string> = {
  Product: "Pieces",
  Collection: "Collections",
  Craft: "Craft register",
  Journal: "Journal",
};

const tokenize = (q: string) => q.toLowerCase().split(/\s+/).filter(Boolean);

const search = (query: string) => {
  const tokens = tokenize(query);
  if (!tokens.length) return [];
  return SEARCH_INDEX.filter((e) => tokens.every((t) => e.haystack.includes(t)))
    .map((e) => ({
      entry: e,
      // Title hits rank above body-copy hits
      score: tokens.filter((t) => e.title.toLowerCase().includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .map((r) => r.entry);
};

const SUGGESTIONS = [
  "Raw silk",
  "Ajrak",
  "Sherwani",
  "Zardozi",
  "Indigo",
  "Pashmina",
  "Linen",
  "Velvet",
  "Swat",
].filter((s) => search(s).length > 0);

const TRENDING = PRODUCTS.slice(0, 4);

/** Wraps each query token found in `text` in <mark> */
const Highlight: React.FC<{ text: string; tokens: string[] }> = ({ text, tokens }) => {
  if (!tokens.length) return <>{text}</>;
  const pattern = new RegExp(
    `(${tokens.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "gi"
  );
  return (
    <>
      {text.split(pattern).map((part, i) =>
        i % 2 === 1 ? <mark key={i}>{part}</mark> : <React.Fragment key={i}>{part}</React.Fragment>
      )}
    </>
  );
};

export const SearchOverlay: React.FC = () => {
  const { isSearchOpen, closeSearch } = useUI();
  // Mounting the panel only while open resets the query on every open
  return isSearchOpen ? <SearchPanel onClose={closeSearch} /> : null;
};

const SearchPanel: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);

  const tokens = useMemo(() => tokenize(query), [query]);
  const results = useMemo(() => search(query), [query]);
  const products = results.filter((r) => r.type === "Product");
  const groups = GROUP_ORDER.map((type) => ({
    type,
    items: results.filter((r) => r.type === type),
  })).filter((g) => g.items.length > 0);

  // Keyboard order: product cards first, then grouped rows
  const flat = [...products, ...groups.flatMap((g) => g.items)];

  const go = (href: string) => {
    onClose();
    router.push(href);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!flat.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % flat.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i <= 0 ? flat.length - 1 : i - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      go(flat[Math.max(activeIndex, 0)].href);
    }
  };

  const isActive = (entry: SearchEntry) => activeIndex >= 0 && flat[activeIndex] === entry;

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Search the house"
      data-lenis-prevent
    >
      <div className={styles.topBar}>
        <span className={styles.wordmark}>{BRAND.name}</span>
        <span className={styles.topLabel}>Search</span>
        <button type="button" className={styles.closeBtn} onClick={onClose} aria-label="Close search">
          <span className={styles.escKey}>Esc</span>
          <span className={styles.closeCircle}>
            <X size={16} strokeWidth={1.4} />
          </span>
        </button>
      </div>

      <div className={styles.container}>
        <div className={styles.inputWrapper}>
          <input
            type="search"
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(-1);
            }}
            onKeyDown={onKeyDown}
            placeholder="What are you looking for?"
            className={styles.input}
            aria-label="Search pieces, collections, craft and journal"
            aria-controls="search-results"
            aria-autocomplete="list"
          />
          {query ? (
            <button type="button" className={styles.clearBtn} onClick={() => setQuery("")}>
              Clear
            </button>
          ) : null}
          <span className={styles.inputLine} aria-hidden="true" />
        </div>

        <p className={styles.status} role="status" aria-live="polite">
          {query
            ? results.length
              ? `${results.length} ${results.length === 1 ? "result" : "results"} for “${query.trim()}”`
              : ""
            : "Pieces, collections, craft and journal"}
          {results.length > 0 && <span className={styles.hint}>↑ ↓ to browse · Enter to open</span>}
        </p>

        {/* ==========================================================================
            Before typing
            ========================================================================== */}
        {!query && (
          <div className={styles.idle}>
            <section aria-labelledby="search-suggest">
              <h2 id="search-suggest" className={styles.sectionLabel}>
                Suggested
              </h2>
              <ul className={styles.suggestions}>
                {SUGGESTIONS.map((s, i) => (
                  <li key={s} style={{ animationDelay: `${120 + i * 40}ms` }}>
                    <button type="button" className={styles.suggestion} onClick={() => setQuery(s)}>
                      {s}
                      <ArrowUpRight size={16} strokeWidth={1.3} />
                    </button>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="search-trending">
              <h2 id="search-trending" className={styles.sectionLabel}>
                Trending pieces
              </h2>
              <div className={styles.productGrid}>
                {TRENDING.map((p) => (
                  <Link key={p.id} href={`/product/${p.slug}`} className={styles.productCard} onClick={onClose}>
                    <span className={styles.productImage}>
                      <Image src={p.image} alt="" fill sizes="200px" className={styles.img} />
                    </span>
                    <span className={styles.productName}>{p.name}</span>
                    <span className={styles.productMeta}>{p.formattedPrice}</span>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* ==========================================================================
            Results
            ========================================================================== */}
        {query && (
          <div id="search-results" className={styles.results}>
            {results.length === 0 ? (
              <div className={styles.empty}>
                <p className={styles.emptyTitle}>
                  Nothing for <em>“{query.trim()}”</em>
                </p>
                <p className={styles.emptyNote}>Try one of these instead:</p>
                <div className={styles.emptyChips}>
                  {SUGGESTIONS.slice(0, 5).map((s) => (
                    <button key={s} type="button" className={styles.chip} onClick={() => setQuery(s)}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <>
                {products.length > 0 && (
                  <section aria-labelledby="results-pieces">
                    <h2 id="results-pieces" className={styles.sectionLabel}>
                      {GROUP_LABEL.Product} <sup>{products.length}</sup>
                    </h2>
                    <div className={styles.productGrid}>
                      {products.map((p) => (
                        <Link
                          key={p.href}
                          href={p.href}
                          className={[styles.productCard, isActive(p) ? styles.active : ""].filter(Boolean).join(" ")}
                          onClick={onClose}
                        >
                          <span className={styles.productImage}>
                            <Image src={p.image} alt="" fill sizes="200px" className={styles.img} />
                          </span>
                          <span className={styles.productName}>
                            <Highlight text={p.title} tokens={tokens} />
                          </span>
                          <span className={styles.productMeta}>{p.subtitle}</span>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}

                {groups.map((g) => (
                  <section key={g.type} aria-labelledby={`results-${g.type}`} className={styles.group}>
                    <h2 id={`results-${g.type}`} className={styles.sectionLabel}>
                      {GROUP_LABEL[g.type]} <sup>{g.items.length}</sup>
                    </h2>
                    <ul className={styles.rows}>
                      {g.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={[styles.row, isActive(item) ? styles.active : ""].filter(Boolean).join(" ")}
                            onClick={onClose}
                          >
                            <span className={styles.rowThumb}>
                              <Image src={item.image} alt="" fill sizes="64px" className={styles.img} />
                            </span>
                            <span className={styles.rowText}>
                              <span className={styles.rowTitle}>
                                <Highlight text={item.title} tokens={tokens} />
                              </span>
                              <span className={styles.rowSub}>{item.subtitle}</span>
                            </span>
                            <ArrowUpRight size={18} strokeWidth={1.3} className={styles.rowArrow} />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
