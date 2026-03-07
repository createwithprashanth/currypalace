"use client";

import { useState, useEffect, useRef } from "react";
import { Search, ChevronDown, ChevronUp, Download, FileText } from "lucide-react";
import { menuCategories, type MenuCategory } from "@/data/menuData";

export default function Menu() {
  const ref                = useRef<HTMLDivElement>(null);
  const [vis, setVis]      = useState(false);
  const [catId, setCatId]  = useState(menuCategories[0].id);
  const [subOpen, setSubOpen] = useState<Record<string, boolean>>({});
  const [query, setQuery]  = useState("");

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  // Expand all subcats when switching category
  useEffect(() => {
    const cat = menuCategories.find((c) => c.id === catId);
    if (!cat) return;
    const map: Record<string, boolean> = {};
    cat.subcategories.forEach((s) => { map[s.label] = true; });
    setSubOpen(map);
  }, [catId]);

  const toggleSub = (label: string) =>
    setSubOpen((prev) => ({ ...prev, [label]: !prev[label] }));

  const activeCat: MenuCategory =
    menuCategories.find((c) => c.id === catId) ?? menuCategories[0];

  // Filter by search query
  const filteredSubs = query.trim()
    ? activeCat.subcategories
        .map((sub) => ({
          ...sub,
          items: sub.items.filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
          ),
        }))
        .filter((sub) => sub.items.length > 0)
    : activeCat.subcategories;

  return (
    <section id="menu" className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #110602 0%, #1C0A04 100%)" }}>
      {/* Ambient */}
      <div className="absolute top-40 left-0 w-80 h-80 bg-brand-gold/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-brand-brown/15 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className={`text-center mb-12 transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-brand-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">What We Serve</p>
          <h2
            className="text-4xl lg:text-5xl font-bold text-brand-cream section-title"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Menu
          </h2>
          <p className="mt-5 text-brand-cream/55 max-w-xl mx-auto text-sm">
            From hearty Kerala breakfasts to midnight charcoal grills — our kitchen never sleeps.
          </p>

          {/* PDF Download */}
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/curry-palace-menu.pdf"
              download="Curry_Palace_Menu.pdf"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-semibold rounded-full text-sm transition-all duration-300 shadow-gold hover:scale-105 group"
            >
              <Download size={16} className="group-hover:animate-bounce" />
              Download Full Menu PDF
            </a>
            <a
              href="/curry-palace-menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 glass-card hover:border-brand-gold/50 text-brand-cream/80 hover:text-brand-gold font-medium rounded-full text-sm transition-all duration-300 hover:scale-105"
            >
              <FileText size={16} />
              View Menu PDF
            </a>
          </div>
        </div>

        {/* Search */}
        <div className={`max-w-md mx-auto mb-10 transition-all duration-700 delay-100 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold/60" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full glass-card text-brand-cream placeholder-brand-cream/40 text-sm focus:outline-none focus:border-brand-gold/60 transition-all"
            />
          </div>
        </div>

        {/* Category tabs — scrollable */}
        <div className={`mb-10 transition-all duration-700 delay-150 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide snap-x">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setCatId(cat.id); setQuery(""); }}
                className={`shrink-0 snap-start flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  catId === cat.id
                    ? "bg-brand-gold text-brand-dark shadow-gold"
                    : "glass-card text-brand-cream/70 hover:text-brand-gold hover:border-brand-gold/40"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu content */}
        <div className={`space-y-6 transition-all duration-700 delay-200 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {filteredSubs.length === 0 ? (
            <div className="text-center py-16 text-brand-cream/40 text-sm">
              No dishes found matching &ldquo;{query}&rdquo;
            </div>
          ) : (
            filteredSubs.map((sub) => (
              <div key={sub.label} className="glass-card rounded-2xl overflow-hidden">
                {/* Subcategory header */}
                <button
                  onClick={() => toggleSub(sub.label)}
                  className="w-full flex items-center justify-between px-6 py-4 hover:bg-brand-gold/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-6 bg-brand-gold rounded-full" />
                    <h3 className="text-brand-gold font-semibold text-sm tracking-wide">{sub.label}</h3>
                    <span className="text-brand-cream/40 text-xs">({sub.items.length} items)</span>
                  </div>
                  {subOpen[sub.label]
                    ? <ChevronUp size={16} className="text-brand-gold/60" />
                    : <ChevronDown size={16} className="text-brand-gold/60" />
                  }
                </button>

                {/* Items grid */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    subOpen[sub.label] ? "max-h-[9999px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 pb-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {sub.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="menu-item-card flex items-center justify-between px-4 py-3 rounded-xl border border-brand-gold/10 bg-brand-dark/40 hover:bg-brand-gold/5 transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/60 shrink-0 group-hover:bg-brand-gold transition-colors" />
                          <span className="text-brand-cream/85 text-sm group-hover:text-brand-cream transition-colors truncate">
                            {item.name}
                          </span>
                        </div>
                        <span className="shrink-0 ml-3 text-brand-gold font-semibold text-sm">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* VAT note */}
        <p className="text-center text-brand-cream/30 text-xs mt-8">
          * All prices include VAT &nbsp;·&nbsp; ASP = As Per Season &nbsp;·&nbsp; Prices may vary
        </p>
      </div>
    </section>
  );
}
