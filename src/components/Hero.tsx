"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronDown, Star, Clock, Truck, MapPin } from "lucide-react";

const heroSlides = [
  { img: "/images/hero/hero1_biryani.jpg",         label: "Aromatic Kerala Biriyani" },
  { img: "/images/hero/hero3_curry.jpg",            label: "Kerala Chicken Curry" },
  { img: "/images/hero/hero2_butter_chicken.jpg",   label: "Butter Chicken Special" },
  { img: "/images/hero/hero4_grilled_chicken.jpg",  label: "Charcoal Grilled Chicken" },
  { img: "/images/hero/hero5_dosa.jpg",             label: "South Indian Breakfast" },
];

const badges = [
  { icon: Star,  label: "3.5★ Google",   sub: "127 Reviews" },
  { icon: Clock, label: "Open 24 Hours",  sub: "Every Day" },
  { icon: Truck, label: "Free Delivery",  sub: "Home Delivery" },
  { icon: MapPin,label: "Al Zahiyah",     sub: "Abu Dhabi, UAE" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % heroSlides.length), []);

  useEffect(() => {
    setVisible(true);
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* Background slideshow */}
      {heroSlides.map((slide, i) => (
        <div
          key={slide.img}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={slide.img}
            alt={slide.label}
            fill
            priority={i === 0}
            className={`object-cover transition-transform duration-[8000ms] ${i === current ? "scale-110" : "scale-100"}`}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-brand-dark/95 z-10" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent z-20" />

      {/* Content */}
      <div
        className={`relative z-20 text-center px-4 w-full max-w-5xl mx-auto transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Location pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-gold/40 bg-brand-gold/10 text-brand-gold text-[10px] sm:text-xs font-medium tracking-widest uppercase mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
          <span className="hidden sm:inline">Al Zahiyah · Tourist Club Area · Abu Dhabi, UAE</span>
          <span className="sm:hidden">Al Zahiyah · Abu Dhabi</span>
        </div>

        {/* English name */}
        <h1
          className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span className="text-brand-cream">Curry </span>
          <span className="gold-shimmer">Palace</span>
        </h1>

        {/* Arabic name */}
        <p
          className="text-2xl sm:text-3xl lg:text-4xl text-brand-gold/80 mb-3"
          style={{ fontFamily: "'Noto Naskh Arabic', 'Arabic Typesetting', serif", direction: "rtl" }}
        >
          مطعم كاري بالس
        </p>

        {/* Script tagline */}
        <p
          className="text-lg sm:text-xl lg:text-2xl text-brand-cream/80 mb-2"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          The Palace of Iconic Taste
        </p>

        {/* Kerala identity */}
        <p className="text-brand-gold/60 text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-5">
          ✦ Authentic Kerala Cuisine · Abu Dhabi ✦
        </p>

        <p className="text-brand-cream/60 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed px-2">
          Bringing the rich culinary heritage of Kerala — God&apos;s Own Country — to the heart of Abu Dhabi.
          Biriyani, Kizhi Porotta, Charcoal Chicken, Shawarma, Fresh Juices &amp; more, served 24 hours.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10 px-6 sm:px-0">
          <button
            onClick={() => document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto px-8 py-4 bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-semibold rounded-full transition-all duration-300 shadow-gold hover:scale-105 text-sm tracking-wide"
          >
            Explore Our Menu
          </button>
          <a
            href="https://wa.me/971551899500?text=Hello%20Curry%20Palace!%20I%20would%20like%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-[#25d366] hover:bg-[#22c55e] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 text-sm tracking-wide flex items-center justify-center gap-2"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Order on WhatsApp
          </a>
        </div>

        {/* Slide dots */}
        <div className="flex justify-center gap-2 mb-6">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current ? "w-8 h-2 bg-brand-gold" : "w-2 h-2 bg-brand-cream/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Info badges */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          {badges.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="glass-card rounded-xl px-3 py-3 flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0">
                <Icon size={14} className="text-brand-gold" />
              </div>
              <div className="min-w-0">
                <p className="text-brand-cream text-[11px] sm:text-xs font-semibold leading-tight">{label}</p>
                <p className="text-brand-cream/50 text-[10px]">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-brand-gold/60 hover:text-brand-gold transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={26} />
      </button>
    </section>
  );
}
