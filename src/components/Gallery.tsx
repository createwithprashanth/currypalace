"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { restaurant } from "@/config/restaurant";

const images = restaurant.gallery;

// Tile heights create a varied masonry feel within a CSS grid
const heights = [
  "h-40 sm:h-48", "h-52 sm:h-64", "h-40 sm:h-48",
  "h-56 sm:h-72", "h-40 sm:h-52", "h-40 sm:h-48",
  "h-52 sm:h-60", "h-44 sm:h-56", "h-52 sm:h-64",
  "h-40 sm:h-48", "h-56 sm:h-64", "h-44 sm:h-52",
];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis]     = useState(false);
  const [light, setLight] = useState<number | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const prev = useCallback(() =>
    setLight((l) => (l !== null ? (l - 1 + images.length) % images.length : null)), []);
  const next = useCallback(() =>
    setLight((l) => (l !== null ? (l + 1) % images.length : null)), []);

  useEffect(() => {
    if (light === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     setLight(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [light, prev, next]);

  return (
    <section id="gallery" className="py-20 sm:py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(61,21,7,0.3)_0%,_transparent_70%)] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className={`text-center mb-10 sm:mb-14 transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-brand-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">Visual Feast</p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-cream section-title"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Photo Gallery
          </h2>
          <p className="mt-4 text-brand-cream/55 max-w-xl mx-auto text-sm px-2">
            {restaurant.gallerySubheading}
          </p>
        </div>

        {/* Responsive grid */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 transition-all duration-700 delay-150 ${
            vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {images.map((img, i) => (
            <div
              key={img.src}
              onClick={() => setLight(i)}
              className={`relative ${heights[i % heights.length]} rounded-xl overflow-hidden cursor-pointer group border border-brand-gold/10 hover:border-brand-gold/40 transition-all duration-300`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <ZoomIn size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {light !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/96 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={() => setLight(null)}
        >
          <button
            onClick={() => setLight(null)}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <X size={18} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-brand-gold/50 flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            className="relative w-full max-w-2xl sm:max-w-3xl max-h-[80vh] aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[light].src}
              alt={images[light].alt}
              fill
              className="object-contain rounded-lg"
              sizes="(max-width:768px) 100vw, 80vw"
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-brand-gold/50 flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronRight size={20} />
          </button>

          <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/40 text-xs">
            {light + 1} / {images.length}
          </p>
        </div>
      )}
    </section>
  );
}
