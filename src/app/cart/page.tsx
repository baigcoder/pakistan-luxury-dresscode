"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCommerce } from "@/context/CommerceContext";
import { BRAND } from "@/config/brand";
import { Button, HairlineDivider } from "@/components/ui";
import {
  ShoppingBag,
  Plus,
  Minus,
  X,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  PhoneCall,
} from "lucide-react";
import styles from "./page.module.css";

export default function CartPage() {
  const { cart, removeFromBag, updateQuantity, formattedSubtotal, bagSubtotal, bagCount } =
    useCommerce();

  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [shippingMethod, setShippingMethod] = useState("complimentary");

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutComplete(true);
  };

  if (checkoutComplete) {
    return (
      <div className={styles.page}>
        <div className="container-editorial">
          <div className={styles.successCard}>
            <CheckCircle size={56} className={styles.successIcon} />
            <span className="provenance-tag">ACQUISITION INITIATED</span>
            <h1 className="heading-1" style={{ margin: "12px 0 16px" }}>
              Thank You for Your Patronage.
            </h1>
            <p className="body-editorial" style={{ maxWidth: "600px", color: "var(--espresso)" }}>
              Your order has been registered with the {BRAND.name} Atelier. Our private concierge
              team will contact you within 24 hours to confirm your measurements, production schedule,
              and insured courier dispatch details.
            </p>
            <div style={{ marginTop: "32px" }}>
              <Button variant="capsule" size="md" href="/" icon={<ArrowRight size={14} />}>
                RETURN TO ATELIER HOME
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className="container-max">
        {/* Header */}
        <div className={styles.header}>
          <div>
            <span className="metadata">ACQUISITION BAG</span>
            <h1 className={`${styles.title} display-l`}>Your atelier <em>bag</em></h1>
          </div>
          <span className="metadata">
            {bagCount} {bagCount === 1 ? "PIECE" : "PIECES"}
          </span>
        </div>

        {cart.length === 0 ? (
          <div className={styles.emptyState}>
            <ShoppingBag size={44} className={styles.emptyIcon} />
            <h2 className="heading-2">Your Bag is Empty</h2>
            <p className="body-regular" style={{ color: "var(--muted)", maxWidth: "420px", margin: "12px 0 24px" }}>
              No pieces have been selected yet. Browse our current collections and pre-orders.
            </p>
            <Button variant="capsule" size="md" href="/shop" icon={<ArrowRight size={14} />}>
              EXPLORE CATALOG
            </Button>
          </div>
        ) : (
          <div className={styles.splitLayout}>
            {/* Left: Bag Items */}
            <div className={styles.itemsColumn}>
              <div className={styles.itemsList}>
                {cart.map((item) => (
                  <div key={`${item.product.id}-${item.size}`} className={styles.cartItem}>
                    <div className={styles.itemImageWrapper}>
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        sizes="120px"
                        className={styles.itemImage}
                      />
                    </div>

                    <div className={styles.itemDetails}>
                      <div className={styles.itemTop}>
                        <div>
                          <span className="metadata">{item.product.collection}</span>
                          <h3 className={styles.itemName}>
                            <Link href={`/product/${item.product.slug}`}>
                              {item.product.name}
                            </Link>
                          </h3>
                          <span className={styles.itemSpec}>SIZE: {item.size}</span>
                          <span className={styles.itemFabric}>{item.product.fabric.split("&")[0]}</span>
                        </div>

                        <button
                          type="button"
                          className={styles.removeBtn}
                          onClick={() => removeFromBag(item.product.id, item.size)}
                          aria-label={`Remove ${item.product.name}`}
                        >
                          <X size={16} />
                        </button>
                      </div>

                      <div className={styles.itemBottom}>
                        <div className={styles.qtyControl}>
                          <button
                            type="button"
                            className={styles.qtyBtn}
                            onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className={styles.qtyNum}>{item.quantity}</span>
                          <button
                            type="button"
                            className={styles.qtyBtn}
                            onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>

                        <span className={styles.itemTotal}>
                          Rs. {(item.product.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bespoke Care Notice */}
              <div className={styles.bespokeNotice}>
                <ShieldCheck size={20} className={styles.noticeIcon} />
                <div>
                  <h4 className="heading-4">Handcrafted Upon Order</h4>
                  <p className="body-small" style={{ marginTop: "4px" }}>
                    Each garment is hand-inspected and prepared by our master tailoring house in Lahore.
                    Enjoy complimentary insured delivery and 14-day archival exchange.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Order Summary Card */}
            <div className={styles.summaryColumn}>
              <div className={styles.summaryCard}>
                <h2 className="heading-3">Order Summary</h2>

                <div className={styles.summaryRows}>
                  <div className={styles.summaryRow}>
                    <span>Subtotal</span>
                    <span className="font-mono">{formattedSubtotal}</span>
                  </div>

                  <div className={styles.summaryRow}>
                    <span>Worldwide Insured Shipping</span>
                    <span style={{ color: "var(--terracotta)" }}>COMPLIMENTARY</span>
                  </div>

                  <div className={styles.summaryRow}>
                    <span>Estimated Duties & Taxes</span>
                    <span>Included</span>
                  </div>

                  <HairlineDivider />

                  <div className={styles.totalRow}>
                    <span className="heading-3">Estimated Total</span>
                    <span className={styles.totalPrice}>{formattedSubtotal}</span>
                  </div>
                </div>

                <form onSubmit={handleCheckout} className={styles.checkoutForm}>
                  <div className={styles.inputStack}>
                    <input
                      type="text"
                      placeholder="Full Name / Patron Name"
                      required
                      className={styles.formInput}
                    />
                    <input
                      type="email"
                      placeholder="Email for Atelier Receipt"
                      required
                      className={styles.formInput}
                    />
                    <input
                      type="text"
                      placeholder="Shipping Address & Country"
                      required
                      className={styles.formInput}
                    />
                  </div>

                  <button type="submit" className={styles.submitOrderBtn}>
                    <span>CONFIRM ATELIER ACQUISITION</span>
                    <ArrowRight size={14} />
                  </button>
                </form>

                <div className={styles.conciergeSupport}>
                  <PhoneCall size={14} />
                  <span className="metadata">
                    NEED ASSISTANCE? CALL {BRAND.contact.telephone}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
