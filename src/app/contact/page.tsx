"use client";

import React, { useState } from "react";
import { BRAND } from "@/config/brand";
import { Button } from "@/components/ui";
import styles from "./page.module.css";

// Addresses live in the brand config so every page agrees
const ATELIER_LOCATIONS = BRAND.locations;

const SERVICE_TYPES = [
  "Bespoke / Made-to-Measure Tailoring",
  "Bridal & Couture Commission",
  "Ready-to-Wear Private Fitting",
  "Archival Viewing & Textile Research",
  "Press, Editorial & VIP Inquiries",
] as const;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "Lahore Salon & Atelier",
    service: SERVICE_TYPES[0] as (typeof SERVICE_TYPES)[number],
    preferredDate: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      {/* Editorial Header */}
      <section className={styles.header}>
        <div className="container-editorial">
          <div className={styles.headerMeta}>
            <span>Private salon &amp; concierge</span>
            <span>Worldwide assistance</span>
          </div>

          <h1 className={styles.title}>
            <span>Concierge &amp;</span>
            <span className={styles.titleIndent}>
              <em>appointments.</em>
            </span>
          </h1>

          <p className={styles.subhead}>
            Our ateliers welcome clients for bespoke garment engineering, made-to-measure fittings,
            and private viewings of archived heritage textiles.
          </p>
        </div>
      </section>

      {/* Main Grid: Form Left, Locations Right */}
      <section className={styles.mainSection}>
        <div className="container-editorial">
          <div className={styles.contactGrid}>
            {/* Form Column */}
            <div className={styles.formCol}>
              <div className={styles.formHeader}>
                <span className={styles.eyebrow}>
                  <span className={styles.index}>(01)</span> Private salon session
                </span>
                <h2 className={styles.formTitle}>
                  Schedule an <em>appointment</em>
                </h2>
                <p className={styles.formIntro}>
                  A dedicated atelier concierge will respond within 24 business hours to finalize
                  your appointment itinerary.
                </p>
              </div>

              {submitted ? (
                <div className={styles.successState}>
                  <span className={styles.eyebrow}>Request received</span>
                  <h3 className={styles.successTitle}>
                    Thank you, <em>{formData.fullName.split(" ")[0]}.</em>
                  </h3>
                  <p className={styles.successBody}>
                    Your inquiry for <strong>{formData.service}</strong> at our {formData.location}{" "}
                    has been registered. Our senior client liaison will contact you directly via{" "}
                    {formData.email}.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        location: "Lahore Salon & Atelier",
                        service: SERVICE_TYPES[0],
                        preferredDate: "",
                        message: "",
                      });
                    }}
                  >
                    Submit another inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.fieldRow}>
                    <div className={styles.field}>
                      <label htmlFor="fullName" className={styles.label}>
                        Full name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        placeholder="e.g. Ayesha Malik"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="email" className={styles.label}>
                        Email address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="ayesha@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={styles.input}
                      />
                    </div>
                  </div>

                  <div className={styles.fieldRow}>
                    <div className={styles.field}>
                      <label htmlFor="phone" className={styles.label}>
                        Telephone / WhatsApp
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+92 300 0000000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="location" className={styles.label}>
                        Atelier
                      </label>
                      <select
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className={styles.select}
                      >
                        {ATELIER_LOCATIONS.map((loc) => (
                          <option key={loc.city} value={loc.city}>
                            {loc.city}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className={styles.fieldRow}>
                    <div className={styles.field}>
                      <label htmlFor="service" className={styles.label}>
                        Service
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            service: e.target.value as (typeof SERVICE_TYPES)[number],
                          })
                        }
                        className={styles.select}
                      >
                        {SERVICE_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="preferredDate" className={styles.label}>
                        Preferred date
                      </label>
                      <input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredDate: e.target.value })
                        }
                        className={styles.input}
                      />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="message" className={styles.label}>
                      Fit details or special requests (optional)
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Please mention silhouette interests, upcoming calendar dates, or measurement specifics..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={styles.textarea}
                    />
                  </div>

                  <div className={styles.submitWrap}>
                    <Button variant="capsule" size="lg" type="submit">
                      Request appointment &rarr;
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Atelier Locations Column */}
            <div className={styles.locationsCol}>
              <span className={styles.eyebrow}>
                <span className={styles.index}>(02)</span> Salon coordinates
              </span>
              <h2 className={styles.locationsTitle}>
                The <em>ateliers</em>
              </h2>

              <div className={styles.locationsList}>
                {ATELIER_LOCATIONS.map((loc) => (
                  <div key={loc.city} className={styles.locationCard}>
                    <h3 className={styles.locationCity}>{loc.city}</h3>
                    <p className={styles.locationAddress}>
                      {loc.address}, {loc.area}
                    </p>

                    <dl className={styles.contactDetails}>
                      <div>
                        <dt>Telephone</dt>
                        <dd>
                          <a href={`tel:${loc.phone.replace(/\s/g, "")}`}>{loc.phone}</a>
                        </dd>
                      </div>
                      <div>
                        <dt>Email</dt>
                        <dd>
                          <a href={`mailto:${loc.email}`}>{loc.email}</a>
                        </dd>
                      </div>
                      <div>
                        <dt>Hours</dt>
                        <dd>{loc.hours}</dd>
                      </div>
                    </dl>
                  </div>
                ))}
              </div>

              {/* Direct WhatsApp Concierge Banner */}
              <div className={styles.conciergeCard}>
                <span className={styles.conciergeEyebrow}>Instant concierge</span>
                <h3 className={styles.conciergeHead}>
                  Private client <em>WhatsApp</em>
                </h3>
                <p className={styles.conciergeBody}>
                  For immediate styling questions, urgent garment dispatches, or VIP runway
                  acquisitions.
                </p>
                <a
                  href="https://wa.me/924237658900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsAppLink}
                >
                  Start a conversation <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
