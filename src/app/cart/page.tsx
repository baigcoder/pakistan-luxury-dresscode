"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCommerce } from "@/context/CommerceContext";
import { BRAND } from "@/config/brand";
import { Plus, Minus, X } from "lucide-react";
import styles from "./page.module.css";

const titleCase = (s: string) => s.toLowerCase().replace(/(^|\s)\S/g, (c) => c.toUpperCase());

export default function CartPage() {
  const { cart, removeFromBag, updateQuantity, formattedSubtotal, bagCount } = useCommerce();

  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutComplete(true);
  };

  if (checkoutComplete) {
    return (
      <div className={styles.page}>
        <div className={styles.success}>
          <span className={styles.eyebrow}>Acquisition initiated</span>
          <h1 className={styles.successTitle}>
            Thank you for your <em>patronage.</em>
          </h1>
          <p className={styles.successBody}>
            Your order has been registered with the {BRAND.name} atelier. Our private concierge team
            will contact you within 24 hours to confirm your measurements, production schedule, and
            insured courier dispatch details.
          </p>
          <Link href="/" className={styles.textLink}>
            Return to the house <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <span className={styles.eyebrow}>Acquisition bag</span>
          <h1 className={styles.title}>
            Your atelier <em>bag</em>
          </h1>
        </div>
        <span className={styles.count}>
          <span className={styles.countNum}>{String(bagCount).padStart(2, "0")}</span>
          {bagCount === 1 ? "Piece" : "Pieces"}
        </span>
      </header>

      {cart.length === 0 ? (
        <div className={styles.empty}>
          <p className={styles.emptyTitle}>
            Nothing selected <em>yet.</em>
          </p>
          <p className={styles.emptyBody}>
            Browse the current editions and pre-orders — every piece is made in small runs.
          </p>
          <Link href="/shop" className={styles.cta}>
            <span>Explore the catalogue</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      ) : (
        <div className={styles.split}>
          {/* Items */}
          <div className={styles.itemsColumn}>
            <ul className={styles.items}>
              {cart.map((item) => {
                const itemImg =
                  item.product.colors?.find((c) => c.name === item.color)?.image ||
                  item.product.image;
                return (
                  <li
                    key={`${item.product.id}-${item.size}-${item.color || ""}`}
                    className={styles.item}
                  >
                    <Link
                      href={`/product/${item.product.slug}`}
                      className={styles.itemFrame}
                      tabIndex={-1}
                    >
                      <Image
                        src={itemImg}
                        alt={item.product.name}
                        fill
                        sizes="(max-width: 600px) 110px, 180px"
                        className={styles.itemImage}
                      />
                    </Link>

                    <div className={styles.itemBody}>
                      <div className={styles.itemTop}>
                        <div>
                          <span className={styles.itemCollection}>
                            {titleCase(item.product.collection)}
                          </span>
                          <h2 className={styles.itemName}>
                            <Link href={`/product/${item.product.slug}`}>{item.product.name}</Link>
                          </h2>
                        </div>
                        <button
                          type="button"
                          className={styles.removeBtn}
                          onClick={() => removeFromBag(item.product.id, item.size, item.color)}
                          aria-label={`Remove ${item.product.name}`}
                        >
                          <X size={16} strokeWidth={1.4} />
                        </button>
                      </div>

                      <dl className={styles.itemSpecs}>
                        <div>
                          <dt>Size</dt>
                          <dd>{item.size}</dd>
                        </div>
                        {item.color && (
                          <div>
                            <dt>Palette</dt>
                            <dd>{item.color}</dd>
                          </div>
                        )}
                        <div>
                          <dt>Cloth</dt>
                          <dd>{item.product.fabric.split("&")[0].trim()}</dd>
                        </div>
                      </dl>

                      <div className={styles.itemBottom}>
                        <div className={styles.qty} role="group" aria-label="Quantity">
                          <button
                            type="button"
                            className={styles.qtyBtn}
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.size,
                                item.quantity - 1,
                                item.color,
                              )
                            }
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} strokeWidth={1.4} />
                          </button>
                          <span className={styles.qtyNum} aria-live="polite">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            className={styles.qtyBtn}
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.size,
                                item.quantity + 1,
                                item.color,
                              )
                            }
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} strokeWidth={1.4} />
                          </button>
                        </div>

                        <span className={styles.itemTotal}>
                          Rs. {(item.product.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <p className={styles.notice}>
              <span>Handcrafted upon order</span>
              Each garment is hand-inspected and prepared by our master tailoring house in Lahore,
              with complimentary insured delivery and a 14-day archival exchange.
            </p>
          </div>

          {/* Summary + checkout */}
          <aside className={styles.summary} aria-labelledby="summary-heading">
            <h2 id="summary-heading" className={styles.summaryTitle}>
              Order <em>summary</em>
            </h2>

            <dl className={styles.rows}>
              <div>
                <dt>Subtotal</dt>
                <dd>{formattedSubtotal}</dd>
              </div>
              <div>
                <dt>Worldwide insured shipping</dt>
                <dd className={styles.accent}>Complimentary</dd>
              </div>
              <div>
                <dt>Estimated duties &amp; taxes</dt>
                <dd>Included</dd>
              </div>
            </dl>

            <div className={styles.total}>
              <span>Estimated total</span>
              <span className={styles.totalPrice}>{formattedSubtotal}</span>
            </div>

            <form onSubmit={handleCheckout} className={styles.form}>
              <label className={styles.field}>
                <span>Full name</span>
                <input type="text" name="name" autoComplete="name" required />
              </label>
              <label className={styles.field}>
                <span>Email for your receipt</span>
                <input type="email" name="email" autoComplete="email" required />
              </label>
              <label className={styles.field}>
                <span>Shipping address &amp; country</span>
                <input type="text" name="address" autoComplete="street-address" required />
              </label>

              <button type="submit" className={styles.submit}>
                <span>Confirm acquisition</span>
                <span className={styles.ctaArrow} aria-hidden="true">
                  →
                </span>
              </button>
            </form>

            <p className={styles.support}>
              Need assistance? Call{" "}
              <a href={`tel:${BRAND.contact.telephone.replace(/\s/g, "")}`}>
                {BRAND.contact.telephone}
              </a>
            </p>
          </aside>
        </div>
      )}
    </div>
  );
}
