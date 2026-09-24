"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCommerce } from "@/context/CommerceContext";
import { PRODUCTS } from "@/data/products";
import { X, Plus, Minus, ShieldCheck, Heart } from "lucide-react";
import styles from "./CartDrawer.module.css";

export const CartDrawer: React.FC = () => {
  const {
    cart,
    wishlist,
    isCartDrawerOpen,
    closeCartDrawer,
    addToBag,
    removeFromBag,
    updateQuantity,
    formattedSubtotal,
    bagCount,
  } = useCommerce();

  // Escape closes; the page behind stays still while the bag is open
  useEffect(() => {
    if (!isCartDrawerOpen) return;
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeCartDrawer();
    window.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isCartDrawerOpen, closeCartDrawer]);

  if (!isCartDrawerOpen) return null;

  const inBag = new Set(cart.map((i) => i.product.id));
  const suggestions = PRODUCTS.filter((p) => !inBag.has(p.id)).slice(0, 3);

  return (
    <div className={styles.overlay} onClick={closeCartDrawer} data-lenis-prevent>
      <div
        className={styles.drawer}
        role="dialog"
        aria-modal="true"
        aria-labelledby="bag-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={styles.header}>
          <h2 id="bag-title" className={styles.title}>
            Your <em>bag</em>
            <sup className={styles.count}>{String(bagCount).padStart(2, "0")}</sup>
          </h2>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={closeCartDrawer}
            aria-label="Close bag"
            autoFocus
          >
            <X size={16} strokeWidth={1.4} />
          </button>
        </div>

        <div className={styles.notice}>
          <ShieldCheck size={14} strokeWidth={1.5} />
          <span>Complimentary insured worldwide delivery</span>
        </div>

        <div className={styles.body}>
          {cart.length === 0 ? (
            /* ==========================================================================
               Empty
               ========================================================================== */
            <div className={styles.empty}>
              <p className={styles.emptyTitle}>
                Your bag is <em>empty.</em>
              </p>
              <p className={styles.emptyText}>
                Pieces you add will wait here while you browse.
              </p>

              {wishlist.length > 0 && (
                <Link href="/wishlist" className={styles.savedLink} onClick={closeCartDrawer}>
                  <Heart size={14} strokeWidth={1.5} />
                  <span>
                    You have {wishlist.length} saved {wishlist.length === 1 ? "piece" : "pieces"}
                  </span>
                  <span aria-hidden="true">→</span>
                </Link>
              )}

              <h3 className={styles.sectionLabel}>Start with these</h3>
              <ul className={styles.suggestList}>
                {suggestions.map((p) => (
                  <li key={p.id} className={styles.suggestItem}>
                    <Link
                      href={`/product/${p.slug}`}
                      className={styles.suggestThumb}
                      onClick={closeCartDrawer}
                      tabIndex={-1}
                    >
                      <Image src={p.image} alt="" fill sizes="64px" className={styles.img} />
                    </Link>
                    <div className={styles.suggestText}>
                      <Link href={`/product/${p.slug}`} className={styles.suggestName} onClick={closeCartDrawer}>
                        {p.name}
                      </Link>
                      <span className={styles.suggestPrice}>{p.formattedPrice}</span>
                    </div>
                    <button
                      type="button"
                      className={styles.addBtn}
                      onClick={() => addToBag(p)}
                      aria-label={`Add ${p.name} to bag`}
                    >
                      <Plus size={14} strokeWidth={1.5} />
                    </button>
                  </li>
                ))}
              </ul>

              <div className={styles.emptyLinks}>
                <Link href="/new" className={styles.textCta} onClick={closeCartDrawer}>
                  New arrivals
                </Link>
                <Link href="/collections" className={styles.textCta} onClick={closeCartDrawer}>
                  Collections
                </Link>
              </div>
            </div>
          ) : (
            /* ==========================================================================
               Items
               ========================================================================== */
            <ul className={styles.items}>
              {cart.map((item) => {
                const itemImg = item.product.colors?.find((c) => c.name === item.color)?.image || item.product.image;
                return (
                  <li key={`${item.product.id}-${item.size}-${item.color || ""}`} className={styles.item}>
                    <Link
                      href={`/product/${item.product.slug}`}
                      className={styles.itemThumb}
                      onClick={closeCartDrawer}
                      tabIndex={-1}
                    >
                      <Image src={itemImg} alt="" fill sizes="96px" className={styles.img} />
                    </Link>

                    <div className={styles.itemInfo}>
                      <div className={styles.itemTop}>
                        <div>
                          <span className={styles.itemCollection}>{item.product.collection}</span>
                          <Link
                            href={`/product/${item.product.slug}`}
                            className={styles.itemName}
                            onClick={closeCartDrawer}
                          >
                            {item.product.name}
                          </Link>
                          <span className={styles.itemSize}>
                            {item.size}{item.color ? ` · ${item.color}` : ""}
                          </span>
                        </div>
                        <button
                          type="button"
                          className={styles.removeBtn}
                          onClick={() => removeFromBag(item.product.id, item.size, item.color)}
                          aria-label={`Remove ${item.product.name} from bag`}
                        >
                          <X size={14} strokeWidth={1.4} />
                        </button>
                      </div>

                      <div className={styles.itemBottom}>
                        <div className={styles.qty} role="group" aria-label={`Quantity of ${item.product.name}`}>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1, item.color)}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span aria-live="polite">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1, item.color)}
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className={styles.itemPrice}>
                          Rs. {(item.product.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.subtotal}>
              <span className={styles.subtotalLabel}>Subtotal</span>
              <span className={styles.subtotalValue}>{formattedSubtotal}</span>
            </div>
            <p className={styles.taxes}>Taxes and duties are calculated at checkout.</p>
            <Link href="/cart" className={styles.checkout} onClick={closeCartDrawer}>
              <span>Proceed to checkout</span>
              <span className={styles.ctaArrow} aria-hidden="true">
                →
              </span>
            </Link>
            <button type="button" className={styles.continue} onClick={closeCartDrawer}>
              Continue browsing
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
