"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type CartItem = { name: string; price: string; qty: number };

type CartCtx = {
  items: CartItem[];
  add:   (name: string, price: string) => void;
  remove:(name: string) => void;
  clear: () => void;
  count: number;
};

const CartContext = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const add = (name: string, price: string) =>
    setItems((prev) => {
      const existing = prev.find((i) => i.name === name);
      return existing
        ? prev.map((i) => (i.name === name ? { ...i, qty: i.qty + 1 } : i))
        : [...prev, { name, price, qty: 1 }];
    });

  const remove = (name: string) =>
    setItems((prev) => {
      const existing = prev.find((i) => i.name === name);
      if (!existing) return prev;
      if (existing.qty === 1) return prev.filter((i) => i.name !== name);
      return prev.map((i) => (i.name === name ? { ...i, qty: i.qty - 1 } : i));
    });

  const clear = () => setItems([]);

  const count = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <CartContext.Provider value={{ items, add, remove, clear, count }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
