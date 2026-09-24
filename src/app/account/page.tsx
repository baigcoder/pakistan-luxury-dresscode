"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BRAND } from "@/config/brand";
import { Button, Badge, HairlineDivider } from "@/components/ui";
import { User, Package, Calendar, Ruler, Heart, CheckCircle2 } from "lucide-react";
import styles from "./page.module.css";

interface Measurements {
  chest: string;
  waist: string;
  hip: string;
  shoulder: string;
  sleeve: string;
  inseam: string;
  notes: string;
}

const DEFAULT_MEASUREMENTS: Measurements = {
  chest: "39.5 inches",
  waist: "32.0 inches",
  hip: "40.0 inches",
  shoulder: "18.2 inches",
  sleeve: "34.0 inches",
  inseam: "31.5 inches",
  notes: "Prefers unpadded shoulders and 2cm extra break on wide-leg trousers.",
};

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<"orders" | "measurements" | "appointments">("orders");
  const [measurements, setMeasurements] = useState<Measurements>(DEFAULT_MEASUREMENTS);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Read saved measurements after mount (localStorage is unavailable during SSR)
  useEffect(() => {
    try {
      const stored = localStorage.getItem("nava_client_measurements");
      if (stored) {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration from storage
        setMeasurements(JSON.parse(stored));
      }
    } catch {
      // LocalStorage fallback
    }
  }, []);

  const handleSaveMeasurements = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      localStorage.setItem("nava_client_measurements", JSON.stringify(measurements));
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 3000);
    } catch {
      // Ignore
    }
  };

  return (
    <div className={styles.page}>
      <div className="container-editorial">
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerMeta}>
            <span className="metadata">PRIVATE CLIENT SALON</span>
            <span className="metadata">MEMBER NO. NV-2026-489</span>
          </div>

          <h1 className={`${styles.title} display-l`}>
            Client <em>archive.</em>
          </h1>

          <p className={`${styles.subhead} body-editorial`}>
            Manage your bespoke commissions, private atelier fitting appointments, and
            recorded tailor measurements.
          </p>
        </header>

        {/* Client Navigation Tabs */}
        <div className={styles.tabsBar}>
          <button
            type="button"
            className={[styles.tabBtn, activeTab === "orders" ? styles.tabActive : ""].filter(Boolean).join(" ")}
            onClick={() => setActiveTab("orders")}
          >
            <Package size={16} /> COMMISSIONS & ORDERS
          </button>
          <button
            type="button"
            className={[styles.tabBtn, activeTab === "measurements" ? styles.tabActive : ""].filter(Boolean).join(" ")}
            onClick={() => setActiveTab("measurements")}
          >
            <Ruler size={16} /> BESPOKE MEASUREMENTS
          </button>
          <button
            type="button"
            className={[styles.tabBtn, activeTab === "appointments" ? styles.tabActive : ""].filter(Boolean).join(" ")}
            onClick={() => setActiveTab("appointments")}
          >
            <Calendar size={16} /> SALON SESSIONS
          </button>
        </div>

        {/* Tab 1: Orders */}
        {activeTab === "orders" && (
          <section className={styles.tabContent}>
            <div className={styles.orderCard}>
              <div className={styles.orderTop}>
                <div>
                  <span className="metadata">COMMISSION ID: NV-94812</span>
                  <h3 className={`${styles.orderTitle} heading-3`}>
                    Sculptural Raw Silk Trench &bull; FORM 01 NOOR
                  </h3>
                </div>
                <Badge variant="terracotta">ATELIER WEAVING IN PROGRESS</Badge>
              </div>

              <HairlineDivider />

              <div className={styles.orderSpecs}>
                <div className={styles.specItem}>
                  <span className="metadata">SPECIFICATION</span>
                  <p className="body-regular" style={{ color: "var(--primary)" }}>Size 02 (UK 10–12) &bull; Unbleached Ivory</p>
                </div>
                <div className={styles.specItem}>
                  <span className="metadata">DISPATCH TIMELINE</span>
                  <p className="body-regular" style={{ color: "var(--primary)" }}>Estimated Oct 14, 2026</p>
                </div>
                <div className={styles.specItem}>
                  <span className="metadata">CRAFT PROVENANCE</span>
                  <p className="body-regular" style={{ color: "var(--accent)" }}>Master Ustad Ghulam Rasool Handloom</p>
                </div>
              </div>
            </div>

            <div className={styles.orderCard}>
              <div className={styles.orderTop}>
                <div>
                  <span className="metadata">COMMISSION ID: NV-88301</span>
                  <h3 className={`${styles.orderTitle} heading-3`}>
                    Vat Indigo Ajrak Tunic &bull; CIPHER 03 AJRAK
                  </h3>
                </div>
                <Badge variant="neutral">DELIVERED TO RESIDENCE</Badge>
              </div>

              <HairlineDivider />

              <div className={styles.orderSpecs}>
                <div className={styles.specItem}>
                  <span className="metadata">SPECIFICATION</span>
                  <p className="body-regular" style={{ color: "var(--primary)" }}>Size 02 &bull; Vat Indigo & Madder</p>
                </div>
                <div className={styles.specItem}>
                  <span className="metadata">ACQUISITION DATE</span>
                  <p className="body-regular" style={{ color: "var(--primary)" }}>August 22, 2026</p>
                </div>
                <div className={styles.specItem}>
                  <span className="metadata">ICH REGISTER</span>
                  <p className="body-regular" style={{ color: "var(--accent)" }}>Registered Sindh Artisanship</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Tab 2: Measurements Profile */}
        {activeTab === "measurements" && (
          <section className={styles.tabContent}>
            <div className={styles.measurementsBox}>
              <div className={styles.measurementsHeader}>
                <div>
                  <span className="metadata">RECORDED ANATOMICAL PROFILE</span>
                  <h3 className={`${styles.boxTitle} heading-2`}>Bespoke Tailoring Record</h3>
                </div>
                {savedSuccess && (
                  <div className={styles.savedBanner}>
                    <CheckCircle2 size={16} color="var(--accent)" />
                    <span>Profile Synchronized</span>
                  </div>
                )}
              </div>

              <p className="body-regular" style={{ color: "var(--muted)", margin: "4px 0 24px" }}>
                These measurements are referenced directly by our master cutters in Lahore when
                drafting bespoke patterns for your commissions.
              </p>

              <form onSubmit={handleSaveMeasurements} className={styles.measureForm}>
                <div className={styles.measureGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Chest / Bust</label>
                    <input
                      type="text"
                      value={measurements.chest}
                      onChange={(e) => setMeasurements({ ...measurements, chest: e.target.value })}
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Natural Waist</label>
                    <input
                      type="text"
                      value={measurements.waist}
                      onChange={(e) => setMeasurements({ ...measurements, waist: e.target.value })}
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Low Hip</label>
                    <input
                      type="text"
                      value={measurements.hip}
                      onChange={(e) => setMeasurements({ ...measurements, hip: e.target.value })}
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Across Shoulder</label>
                    <input
                      type="text"
                      value={measurements.shoulder}
                      onChange={(e) => setMeasurements({ ...measurements, shoulder: e.target.value })}
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Crown to Sleeve Cuff</label>
                    <input
                      type="text"
                      value={measurements.sleeve}
                      onChange={(e) => setMeasurements({ ...measurements, sleeve: e.target.value })}
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Trouser Inseam</label>
                    <input
                      type="text"
                      value={measurements.inseam}
                      onChange={(e) => setMeasurements({ ...measurements, inseam: e.target.value })}
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.formGroup} style={{ marginTop: "16px" }}>
                  <label className={styles.label}>Drape & Posture Nuances</label>
                  <textarea
                    rows={3}
                    value={measurements.notes}
                    onChange={(e) => setMeasurements({ ...measurements, notes: e.target.value })}
                    className={styles.textarea}
                  />
                </div>

                <div className={styles.saveWrap}>
                  <Button variant="capsule" type="submit">
                    SAVE TAILORING PROFILE
                  </Button>
                </div>
              </form>
            </div>
          </section>
        )}

        {/* Tab 3: Appointments */}
        {activeTab === "appointments" && (
          <section className={styles.tabContent}>
            <div className={styles.appointmentCard}>
              <div className={styles.apptTop}>
                <div>
                  <span className="metadata">UPCOMING SALON SESSION</span>
                  <h3 className={`${styles.apptTitle} heading-3`}>
                    Made-to-Measure Fitting & Fabric Selection
                  </h3>
                  <p className="body-regular" style={{ color: "var(--muted)", margin: "4px 0" }}>
                    Lahore Salon & Atelier &bull; 24-A Shahi Guzargah, Delhi Gate
                  </p>
                </div>
                <Badge variant="terracotta">CONFIRMED</Badge>
              </div>

              <div className={styles.apptDetails}>
                <div className={styles.apptRow}>
                  <span className="metadata">DATE & TIME:</span>
                  <span className="body-regular" style={{ color: "var(--primary)" }}>Friday, October 9, 2026 at 3:00 PM PKT</span>
                </div>
                <div className={styles.apptRow}>
                  <span className="metadata">HOST CONCIERGE:</span>
                  <span className="body-regular" style={{ color: "var(--primary)" }}>Senior Cutter Master Tariq Butt</span>
                </div>
              </div>
            </div>

            <div className={styles.requestNewWrap}>
              <p className="body-editorial" style={{ color: "var(--muted)" }}>
                Require an additional salon fitting or a private viewing in Lahore or Karachi?
              </p>
              <Link href="/contact">
                <Button variant="outline">SCHEDULE NEW APPOINTMENT &rarr;</Button>
              </Link>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
