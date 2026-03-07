"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, type Lang, type Translations } from "@/config/restaurant";

type LangCtx = {
  lang:   Lang;
  toggle: () => void;
  t:      Translations;
  isRTL:  boolean;
};

const LanguageContext = createContext<LangCtx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Lazy initializer — reads localStorage only on client, safe for SSR
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    return localStorage.getItem("cp_lang") === "ar" ? "ar" : "en";
  });

  // Sync dir/lang attribute on <html>
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir  = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("cp_lang", lang);
  }, [lang]);

  const toggle = () => setLang((l) => (l === "en" ? "ar" : "en"));
  const t      = translations[lang];
  const isRTL  = lang === "ar";

  return (
    <LanguageContext.Provider value={{ lang, toggle, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
