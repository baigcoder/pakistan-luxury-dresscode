"use client";

import React, { useState } from "react";
import { BRAND } from "@/config/brand";
import { Button, Badge, HairlineDivider } from "@/components/ui";
import { MapPin, Phone, Mail, Clock, CheckCircle2, Calendar } from "lucide-react";
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
            <span className="metadata">PRIVATE SALON & CONCIERGE</span>
            <span className="metadata">WORLDWIDE ASSISTANCE</span>
          </div>

          <h1 className={`${styles.title} display-l`}>
            Concierge &amp; <em>appointments.</em>
          </h1>

          <p className={`${styles.subhead} body-editorial`}>
            Our ateliers welcome clients for bespoke garment engineering, made-to-measure
            fittings, and private viewings of archived heritage textiles.
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
                <span className="metadata">REQUEST PRIVATE SALON SESSION</span>
                <h2 className={`${styles.formTitle} heading-2`}>
                  Schedule an Appointment
                </h2>
                <p className="body-regular" style={{ color: "var(--muted)", margin: "4px 0 24px" }}>
                  A dedicated atelier concierge will respond within 24 business hours to
                  finalize your appointment itinerary.
                </p>
              </div>

              {submitted ? (
                <div className={styles.successState}>
                  <CheckCircle2 size={48} color="var(--accent)" />
                  <h3 className={`${styles.successTitle} heading-2`}>
                    Appointment Request Received
                  </h3>
                  <p className="body-regular" style={{ color: "var(--secondary)", margin: "8px 0 24px" }}>
                    Thank you, {formData.fullName}. Your inquiry for{" "}
                    <strong>{formData.service}</strong> at our {formData.location} has been
                    registered. Our senior client liaison will contact you directly via{" "}
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
                    SUBMIT ANOTHER INQUIRY
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.fieldRow}>
                    <div className={styles.field}>
                      <label htmlFor="fullName" className={styles.label}>
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        placeholder="e.g. Ayesha Malik"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="email" className={styles.label}>
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="ayesha@domain.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={styles.input}
                      />
                    </div>
                  </div>

                  <div className={styles.fieldRow}>
                    <div className={styles.field}>
                      <label htmlFor="phone" className={styles.label}>
                        Contact Telephone / WhatsApp
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+92 300 0000000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="location" className={styles.label}>
                        Desired Atelier Location
                      </label>
                      <select
                        id="location"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
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
                        Service Nature
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
                        Preferred Date Window
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
                      Special Inquiries or Fit Details (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Please mention silhouette interests, upcoming calendar dates, or measurement specifics..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={styles.textarea}
                    />
                  </div>

                  <div className={styles.submitWrap}>
                    <Button variant="capsule" size="lg" type="submit">
                      TRANSMIT APPOINTMENT REQUEST &rarr;
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Atelier Locations Column */}
            <div className={styles.locationsCol}>
              <span className="metadata">SALON COORDINATES</span>
              <h2 className={`${styles.locationsTitle} heading-2`}>
                Atelier Locations
              </h2>

              <div className={styles.locationsList}>
                {ATELIER_LOCATIONS.map((loc) => (
                  <div key={loc.city} className={styles.locationCard}>
                    <h3 className={`${styles.locationCity} heading-3`}>{loc.city}</h3>
                    <p className={styles.locationAddress}>{loc.address}</p>
                    <p className={styles.locationArea}>{loc.area}</p>

                    <div className={styles.contactDetails}>
                      <div className={styles.contactItem}>
                        <Phone size={14} color="var(--accent)" />
                        <span>{loc.phone}</span>
                      </div>
                      <div className={styles.contactItem}>
                        <Mail size={14} color="var(--accent)" />
                        <span>{loc.email}</span>
                      </div>
                      <div className={styles.contactItem}>
                        <Clock size={14} color="var(--accent)" />
                        <span>{loc.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct WhatsApp Concierge Banner */}
              <div className={styles.conciergeCard}>
                <span className="metadata">INSTANT CONCIERGE</span>
                <h4 className={`${styles.conciergeHead} heading-3`}>
                  Private Client WhatsApp
                </h4>
                <p className="body-regular" style={{ color: "var(--muted)", margin: "4px 0 16px" }}>
                  For immediate styling questions, urgent garment dispatches, or VIP runway
                  acquisitions.
                </p>
                <a
                  href="https://wa.me/924237658900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsAppLink}
                >
                  START WHATSAPP CONVERSATION &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
