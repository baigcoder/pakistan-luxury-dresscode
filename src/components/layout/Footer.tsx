"use client";

import React, { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { BRAND } from "@/config/brand";
import { FOOTER_SECTIONS } from "@/data/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import styles from "./Footer.module.css";

// Below this width the link columns fold into tap-to-open groups
const COMPACT_QUERY = "(max-width: 700px)";

const subscribeCompact = (onChange: () => void) => {
  const mq = window.matchMedia(COMPACT_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
};

export const Footer: React.FC = () => {
  // The server renders the open desktop columns; phones fold them after hydration,
  // well below the fold
  const isCompact = useSyncExternalStore(
    subscribeCompact,
    () => window.matchMedia(COMPACT_QUERY).matches,
    () => false,
  );
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes("@")) setSubscribed(true);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Newsletter */}
        <div className={styles.newsletter}>
          <div>
            <span className={styles.eyebrow}>Atelier dispatches</span>
            <h2 className={styles.newsletterHeading} data-reveal="lines">
              <span className="line-mask">
                <span>Private editions,</span>
              </span>
              <span className="line-mask">
                <span>
                  <em>first.</em>
                </span>
              </span>
            </h2>
          </div>

          <div className={styles.formCol}>
            <p className={styles.formLede}>
              Unreleased capsules, atelier notices and craft stories — a few letters a season, never
              more.
            </p>
            {subscribed ? (
              <p className={styles.success} role="status">
                <Check size={16} /> You&rsquo;re on the list. Welcome to the house.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor="footer-email" className={styles.srOnly}>
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className={styles.input}
                />
                <button type="submit" className={styles.submit}>
                  Subscribe
                  <ArrowUpRight size={14} strokeWidth={1.5} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Links */}
        <div className={styles.body}>
          <div className={styles.brandCol}>
            <p className={styles.statement}>{BRAND.statement}</p>
            <div className={styles.addresses}>
              <span>Lahore atelier</span>
              <span>Karachi studio</span>
              <a href={`mailto:${BRAND.contact.email}`} className={styles.contactLink}>
                {BRAND.contact.email}
              </a>
            </div>
          </div>

          <nav className={styles.navCols} aria-label="Footer">
            {FOOTER_SECTIONS.map((section, i) => {
              const listId = `footer-links-${i}`;
              const isOpen = !isCompact || openSection === section.title;
              return (
                <div key={section.title} className={styles.navCol}>
                  <h3 className={styles.colTitle}>
                    {isCompact ? (
                      <button
                        type="button"
                        className={styles.colToggle}
                        aria-expanded={isOpen}
                        aria-controls={listId}
                        onClick={() => setOpenSection(isOpen ? null : section.title)}
                      >
                        {section.title}
                        <span className={styles.colToggleIcon} aria-hidden="true" />
                      </button>
                    ) : (
                      section.title
                    )}
                  </h3>
                  <ul id={listId} className={styles.linkList} hidden={!isOpen}>
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className={styles.link}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Provenance */}
        <p className={styles.provenance}>
          <span className={styles.provenanceTag}>Cultural provenance</span>
          Craft techniques and motifs across {BRAND.name} are developed with reference to the{" "}
          <a
            href={BRAND.culturalProvenance.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.inlineLink}
          >
            {BRAND.culturalProvenance.officialSource}
          </a>
          .
        </p>

        {/* Legal */}
        <div className={styles.legal}>
          <span>
            &copy; {BRAND.established} {BRAND.legalName}
          </span>
          <div className={styles.legalLinks}>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/accessibility">Accessibility</Link>
          </div>
        </div>
      </div>

      {/* Monumental wordmark */}
      <div className={styles.wordmarkWrap} aria-hidden="true">
        <span className={styles.wordmark}>{BRAND.name}</span>
      </div>
    </footer>
  );
};
