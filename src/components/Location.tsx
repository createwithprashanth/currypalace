"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Clock, Navigation, MessageCircle } from "lucide-react";
import { restaurant } from "@/config/restaurant";

const info = [
  {
    icon: MapPin,
    title: "Address",
    lines: [restaurant.address.line1, restaurant.address.line2, restaurant.address.city],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: [restaurant.phoneDisplay, `${restaurant.whatsappDisplay} (WhatsApp)`],
  },
  {
    icon: Clock,
    title: "Hours",
    lines: restaurant.hoursLines,
  },
];

export default function Location() {
  const ref        = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="location" className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #1C0A04 0%, #110602 100%)" }}>
      <div className="absolute top-0 inset-x-0 gold-divider" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className={`text-center mb-14 transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-brand-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">Find Us</p>
          <h2
            className="text-4xl lg:text-5xl font-bold text-brand-cream section-title"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Location
          </h2>
          <p className="mt-5 text-brand-cream/55 max-w-xl mx-auto text-sm">
            {restaurant.locationSubtext}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* Info cards */}
          <div className={`lg:col-span-2 space-y-4 transition-all duration-700 delay-100 ${vis ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            {info.map(({ icon: Icon, title, lines }) => (
              <div key={title} className="glass-card rounded-2xl p-5 flex gap-4 hover:border-brand-gold/40 transition-all duration-300 group">
                <div className="shrink-0 w-11 h-11 rounded-full bg-brand-gold/15 flex items-center justify-center group-hover:bg-brand-gold/25 transition-colors">
                  <Icon size={18} className="text-brand-gold" />
                </div>
                <div>
                  <p className="text-brand-gold text-xs font-semibold tracking-wide uppercase mb-1">{title}</p>
                  {lines.map((l, i) => (
                    <p key={i} className="text-brand-cream/75 text-sm">{l}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Action buttons */}
            <div className="flex gap-3 pt-2">
              <a
                href={restaurant.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-semibold rounded-full text-sm transition-all hover:scale-105"
              >
                <Navigation size={14} /> Get Directions
              </a>
              <a
                href={`https://wa.me/${restaurant.whatsapp}?text=${restaurant.whatsappLocationMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25d366] hover:bg-[#22c55e] text-white font-semibold rounded-full text-sm transition-all hover:scale-105"
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
            </div>
          </div>

          {/* Map embed */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${vis ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="relative h-[420px] rounded-2xl overflow-hidden border border-brand-gold/20 shadow-gold">
              <iframe
                src={restaurant.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.85)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={restaurant.mapsTitle}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
