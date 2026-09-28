import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Market Notes — Ready-to-Wear Price Edit",
  description:
    "A dated, linked snapshot of selected Preet Pret ready-to-wear listings and prices. Products and photographs remain with their original seller.",
};

const PRICE_CHECKED = "29 September 2026";

const REFERENCES = [
  {
    name: "Sassy 3pc",
    edit: "New arrivals",
    price: "Rs. 5,490",
    was: "Rs. 9,990",
    href: "https://preetpret.pk/products/sassy-3pc",
  },
  {
    name: "Aroha 2PC",
    edit: "New arrivals",
    price: "Rs. 4,490",
    was: "Rs. 8,990",
    href: "https://preetpret.pk/products/aroha-2pc",
  },
  {
    name: "Mehwar 2PC",
    edit: "New arrivals",
    price: "Rs. 6,490",
    was: "Rs. 12,999",
    href: "https://preetpret.pk/products/mehwar-2pc",
  },
  {
    name: "Aive 3PC",
    edit: "Winter 26",
    price: "Rs. 3,592",
    was: "Rs. 7,199",
    href: "https://preetpret.pk/products/aive-3pc",
  },
  {
    name: "Simran 3pc",
    edit: "Best sellers",
    price: "Rs. 3,499",
    was: "Rs. 8,500",
    href: "https://preetpret.pk/products/simran-3pc",
  },
  {
    name: "Melvin 2pc",
    edit: "Best sellers",
    price: "Rs. 2,850",
    was: "Rs. 5,500",
    href: "https://preetpret.pk/products/melvin-2pc",
  },
];

export default function MarketNotesPage() {
  return (
    <main className={styles.page}>
      <header className={styles.masthead}>
        <Link href="/journal" className={styles.backLink}>
          <span aria-hidden="true">←</span> The journal
        </Link>
        <span className={styles.issue}>NAVA · MARKET FILE 01</span>
      </header>

      <section className={styles.hero} aria-labelledby="market-title">
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Retail landscape · Pakistan</span>
          <h1 id="market-title">
            Ready-to-wear,
            <br />
            <em>at a glance.</em>
          </h1>
          <p className={styles.intro}>
            A considered snapshot of Preet Pret’s accessible two- and three-piece
            edits: what is on offer, and where each piece belongs in the market.
          </p>
          <a className={styles.sourceLink} href="https://preetpret.pk/" target="_blank" rel="noreferrer">
            Visit Preet Pret <span aria-hidden="true">↗</span>
          </a>
          <span className={styles.checked}>Prices checked {PRICE_CHECKED}</span>
        </div>
        <figure className={styles.heroImageWrap}>
          <Image
            src="/images/hero-campaign-dresscode.jpg"
            alt="NAVA Spring/Summer campaign, photographed in a Lahore courtyard"
            fill
            priority
            quality={90}
            sizes="(max-width: 760px) 100vw, 52vw"
            className={styles.heroImage}
          />
          <figcaption>NAVA house campaign · Lahore</figcaption>
        </figure>
      </section>

      <section className={styles.note} aria-label="Source and product disclosure">
        <span className={styles.noteMark} aria-hidden="true">✳</span>
        <p>
          <strong>Independent retail reference.</strong> These pieces are sold by
          Preet Pret, not by NAVA. Prices and availability may change. Product
          photography remains with its publisher; follow a listing to view the
          seller’s original images and details.
        </p>
      </section>

      <section className={styles.listings} aria-labelledby="listings-title">
        <div className={styles.sectionHead}>
          <div>
            <span className={styles.eyebrow}>Six selected listings</span>
            <h2 id="listings-title">The <em>price edit</em></h2>
          </div>
          <p>PKR · online listing prices</p>
        </div>

        <div className={styles.grid}>
          {REFERENCES.map((item, index) => (
            <article className={styles.card} key={item.name}>
              <div className={styles.cardTop}>
                <span className={styles.cardIndex}>{String(index + 1).padStart(2, "0")}</span>
                <span className={styles.sourceTag}>PREET PRET</span>
              </div>
              <span className={styles.collection}>{item.edit}</span>
              <h3>{item.name}</h3>
              <div className={styles.priceLine}>
                <strong>{item.price}</strong>
                <del>{item.was}</del>
              </div>
              <a href={item.href} target="_blank" rel="noreferrer" className={styles.productLink}>
                Original image &amp; listing <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <div>
          <span className={styles.eyebrow}>Source</span>
          <p>Preet Pret product listings · checked {PRICE_CHECKED}</p>
        </div>
        <a href="https://preetpret.pk/" target="_blank" rel="noreferrer">
          Browse the full collection <span aria-hidden="true">↗</span>
        </a>
      </footer>
    </main>
  );
}
