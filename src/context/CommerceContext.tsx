"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { ProductItem, PRODUCTS } from "@/data/products";

export interface CartItem {
  product: ProductItem;
  size: string;
  color?: string;
  quantity: number;
}

interface CommerceContextType {
  cart: CartItem[];
  addToBag: (product: ProductItem, size?: string, quantity?: number, color?: string) => void;
  removeFromBag: (productId: string, size: string, color?: string) => void;
  updateQuantity: (productId: string, size: string, newQty: number, color?: string) => void;
  clearBag: () => void;
  bagCount: number;
  bagSubtotal: number;
  formattedSubtotal: string;

  wishlist: string[]; // product slugs
  toggleWishlist: (slug: string) => void;
  isInWishlist: (slug: string) => boolean;

  isCartDrawerOpen: boolean;
  openCartDrawer: () => void;
  closeCartDrawer: () => void;
  toggleCartDrawer: () => void;
}

const CommerceContext = createContext<CommerceContextType | undefined>(undefined);

export const CommerceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Initialize from LocalStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("nava_cart");
      if (savedCart) {
        // Re-resolve stored items against the live catalogue so prices, images and
        // names never go stale, and drop pieces that no longer exist
        const stored: CartItem[] = JSON.parse(savedCart);
        const fresh = stored.flatMap((item) => {
          const product = PRODUCTS.find((p) => p.id === item.product?.id);
          return product ? [{ ...item, product }] : [];
        });
        // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration from storage (unavailable during SSR)
        setCart(fresh);
      } else {
        // Default initial demonstration piece in bag
        setCart([
          {
            product: PRODUCTS[0],
            size: PRODUCTS[0].sizes[0] || "Size 01",
            quantity: 1,
          },
        ]);
      }

      const savedWishlist = localStorage.getItem("nava_wishlist");
      if (savedWishlist) {
        setWishlist(JSON.parse(savedWishlist));
      } else {
        // Default initial wishlist sample
        setWishlist([PRODUCTS[1].slug, PRODUCTS[2].slug]);
      }
    } catch {
      // Fallback
    }
    setIsHydrated(true);
  }, []);

  // Save changes to LocalStorage
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem("nava_cart", JSON.stringify(cart));
      } catch {}
    }
  }, [cart, isHydrated]);

  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem("nava_wishlist", JSON.stringify(wishlist));
      } catch {}
    }
  }, [wishlist, isHydrated]);

  const openCartDrawer = useCallback(() => setIsCartDrawerOpen(true), []);
  const closeCartDrawer = useCallback(() => setIsCartDrawerOpen(false), []);
  const toggleCartDrawer = useCallback(() => setIsCartDrawerOpen((p) => !p), []);

  const addToBag = useCallback((product: ProductItem, size?: string, quantity: number = 1, color?: string) => {
    const chosenSize = size || product.sizes[0] || "Standard";
    const chosenColor = color || product.colors[0]?.name || "";
    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.size === chosenSize && (!chosenColor || item.color === chosenColor)
      );
      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx] = { ...next[existingIdx], quantity: next[existingIdx].quantity + quantity };
        return next;
      }
      return [...prev, { product, size: chosenSize, color: chosenColor, quantity }];
    });
    setIsCartDrawerOpen(true);
  }, []);

  const removeFromBag = useCallback((productId: string, size: string, color?: string) => {
    setCart((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.size === size && (!color || item.color === color)))
    );
  }, []);

  const updateQuantity = useCallback((productId: string, size: string, newQty: number, color?: string) => {
    if (newQty <= 0) {
      removeFromBag(productId, size, color);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.size === size && (!color || item.color === color)
          ? { ...item, quantity: newQty }
          : item
      )
    );
  }, [removeFromBag]);

  const clearBag = useCallback(() => setCart([]), []);

  const toggleWishlist = useCallback((slug: string) => {
    setWishlist((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  }, []);

  const isInWishlist = useCallback(
    (slug: string) => wishlist.includes(slug),
    [wishlist]
  );

  const bagCount = cart.reduce((total, item) => total + item.quantity, 0);
  const bagSubtotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
  const formattedSubtotal = `Rs. ${bagSubtotal.toLocaleString()}`;

  return (
    <CommerceContext.Provider
      value={{
        cart,
        addToBag,
        removeFromBag,
        updateQuantity,
        clearBag,
        bagCount,
        bagSubtotal,
        formattedSubtotal,
        wishlist,
        toggleWishlist,
        isInWishlist,
        isCartDrawerOpen,
        openCartDrawer,
        closeCartDrawer,
        toggleCartDrawer,
      }}
    >
      {children}
    </CommerceContext.Provider>
  );
};

export const useCommerce = () => {
  const context = useContext(CommerceContext);
  if (!context) {
    throw new Error("useCommerce must be used within a CommerceProvider");
  }
  return context;
};
