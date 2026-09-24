import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className={styles.page} aria-labelledby="nf-title">
      <div className={styles.copy}>
        <span className={styles.code}>Error 404</span>
        <h1 id="nf-title" className={styles.title}>
          This page has <em>unravelled.</em>
        </h1>
        <p className={styles.text}>
          The piece or page you were looking for has moved, sold through, or never existed. Let us
          take you somewhere worth seeing.
        </p>
        <div className={styles.actions}>
          <Link href="/" className={styles.primary}>
            <span>Return home</span>
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </Link>
          <Link href="/new" className={styles.link}>
            New arrivals
          </Link>
          <Link href="/collections" className={styles.link}>
            Collections
          </Link>
        </div>
      </div>
      <div className={styles.media}>
        <Image
          src="/images/macro-ajrak.jpg"
          alt="Close detail of hand block-printed Ajrak"
          fill
          sizes="(max-width: 900px) 100vw, 45vw"
          className={styles.image}
        />
      </div>
    </section>
  );
}
