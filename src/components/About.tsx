"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Award, Utensils, Users, Clock } from "lucide-react";
import { restaurant } from "@/config/restaurant";
import { useLang } from "@/context/LanguageContext";

const statIcons = [Utensils, Clock, Users, Award];

export default function About() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const { heritage } = restaurant;

  return (
    <section id="about" className="py-20 sm:py-24 bg-brand-dark relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-brown/20 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-brand-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">{t.about.ourStory}</p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-cream section-title"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {restaurant.aboutWelcome}
          </h2>
          <p className="mt-5 text-brand-cream/60 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-2">
            {restaurant.aboutIntro}
          </p>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-16 sm:mb-20 transition-all duration-700 delay-150 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {restaurant.aboutStats.map(({ value, label }, i) => {
            const Icon = statIcons[i % statIcons.length];
            return (
              <div key={label} className="glass-card rounded-2xl p-5 sm:p-6 text-center hover:border-brand-gold/50 transition-all duration-300 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 rounded-full bg-brand-gold/15 flex items-center justify-center group-hover:bg-brand-gold/25 transition-colors">
                  <Icon size={20} className="text-brand-gold" />
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-brand-gold" style={{ fontFamily: "'Playfair Display', serif" }}>{value}</p>
                <p className="text-brand-cream/60 text-xs mt-1 tracking-wide">{label}</p>
              </div>
            );
          })}
        </div>

        {/* Two column */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-20">

          {/* Images */}
          <div className={`relative transition-all duration-700 delay-200 ${vis ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative rounded-2xl overflow-hidden h-52 sm:h-64 img-overlay">
                <Image src={restaurant.aboutImages[0].src} alt={restaurant.aboutImages[0].alt} fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-52 sm:h-64 img-overlay">
                <Image src={restaurant.aboutImages[1].src} alt={restaurant.aboutImages[1].alt} fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-40 sm:h-48 img-overlay col-span-2">
                <Image src={restaurant.aboutImages[2].src} alt={restaurant.aboutImages[2].alt} fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 glass-card rounded-2xl px-4 py-3 shadow-gold border border-brand-gold/40">
              <p className="text-brand-gold font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>{t.about.openBadge}</p>
              <p className="text-brand-cream/80 text-xs">{restaurant.hoursShort}</p>
            </div>
          </div>

          {/* Text */}
          <div className={`space-y-5 transition-all duration-700 delay-300 ${vis ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <p
              className="text-2xl sm:text-3xl font-bold text-brand-cream leading-snug"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {restaurant.aboutFlavourHeading.split(",")[0]},{" "}
              <span className="gold-shimmer">{restaurant.aboutFlavourHeading.split(",")[1]?.trim()}</span>
            </p>
            <div className="space-y-4">
              {restaurant.aboutHighlights.map((h, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="shrink-0 mt-1 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-gold/15 flex items-center justify-center group-hover:bg-brand-gold/30 transition-colors">
                    <span className="text-brand-gold text-xs sm:text-sm font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-brand-cream font-semibold text-sm mb-0.5">{h.title}</h3>
                    <p className="text-brand-cream/55 text-sm leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a href={`tel:${restaurant.phone}`} className="flex-1 text-center py-3 px-4 bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-semibold rounded-full text-sm transition-all hover:scale-105">{t.about.callNow}</a>
              <a href={`https://wa.me/${restaurant.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 px-4 bg-[#25d366] hover:bg-[#22c55e] text-white font-semibold rounded-full text-sm transition-all hover:scale-105">{t.about.whatsappOrder}</a>
            </div>
          </div>
        </div>

        {/* ── Heritage / Origin Section ── */}
        <div className={`transition-all duration-700 delay-400 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="gold-divider mb-12" />

          <div className="text-center mb-10">
            <p className="text-brand-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              {heritage.sectionLabel}
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-brand-cream"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {heritage.heading}{" "}
              <span className="gold-shimmer">{heritage.headingHighlight}</span>
            </h2>
            <p className="mt-4 text-brand-cream/55 max-w-2xl mx-auto text-sm leading-relaxed px-2">
              {heritage.description}
            </p>
          </div>

          {/* Featured dishes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {heritage.dishes.map((dish) => (
              <div
                key={dish.name}
                className="glass-card rounded-2xl p-5 border border-brand-gold/10 hover:border-brand-gold/35 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">🍃</span>
                  <div>
                    <h3
                      className="text-brand-gold font-semibold text-sm mb-1 group-hover:text-brand-gold-light transition-colors"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {dish.name}
                    </h3>
                    <p className="text-brand-cream/55 text-xs leading-relaxed">{dish.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Origin strip */}
          <div className="mt-10 glass-card rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="text-5xl sm:text-6xl shrink-0">{heritage.stripIcon}</div>
            <div className="flex-1">
              <h3
                className="text-xl sm:text-2xl font-bold text-brand-cream mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {heritage.stripHeading}
              </h3>
              <p className="text-brand-cream/55 text-sm leading-relaxed">{heritage.stripText}</p>
            </div>
            <div className="flex flex-col gap-2 shrink-0 w-full sm:w-auto">
              <div className="glass-card rounded-xl px-5 py-3 text-center border border-brand-gold/30">
                <p className="text-brand-gold font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>{heritage.origin.label}</p>
                <p className="text-brand-cream/50 text-xs">{heritage.origin.sub}</p>
              </div>
              <div className="glass-card rounded-xl px-5 py-3 text-center border border-brand-gold/30">
                <p className="text-brand-gold font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>{heritage.destination.label}</p>
                <p className="text-brand-cream/50 text-xs">{heritage.destination.sub}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
