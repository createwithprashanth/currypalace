"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Clock, Navigation, MessageCircle } from "lucide-react";

const info = [
  {
    icon: MapPin,
    title: "Address",
    lines: ["Al Zahiyah, Tourist Club Area", "Electra Road, Behind KFC Building", "Abu Dhabi, UAE"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["02 448 4041", "055 189 9500 (WhatsApp)"],
  },
  {
    icon: Clock,
    title: "Hours",
    lines: ["Open 24 Hours", "7 Days a Week", "Including Holidays"],
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
            Conveniently located in the heart of Abu Dhabi — easy to find, impossible to forget.
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
                href="https://maps.app.goo.gl/KLdXXg7ZqBgRAvnT7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-semibold rounded-full text-sm transition-all hover:scale-105"
              >
                <Navigation size={14} /> Get Directions
              </a>
              <a
                href="https://wa.me/971551899500?text=Hi%20Curry%20Palace!%20I%20want%20to%20order."
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.5!2d54.3670!3d24.4960!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e673a21e185f1%3A0x1!2sCurry%20Palace%20Restaurant%2C%20Al%20Zahiyah%2C%20Abu%20Dhabi!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.85)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Curry Palace Restaurant Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
