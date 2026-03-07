"use client";

import { ReactNode } from "react";
import { CartProvider }     from "@/context/CartContext";
import { LanguageProvider } from "@/context/LanguageContext";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </CartProvider>
  );
}
