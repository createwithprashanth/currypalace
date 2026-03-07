"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, MessageCircle, Instagram, Star, Send } from "lucide-react";
import { restaurant } from "@/config/restaurant";
import { useLang } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const sendWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello ${restaurant.name}!\n\nName: ${form.name}\nPhone: ${form.phone}\n\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/${restaurant.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 gold-divider" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(61,21,7,0.4)_0%,_transparent_70%)] pointer-events-none" />

      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className={`text-center mb-14 transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-brand-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">{t.contact.sectionLabel}</p>
          <h2
            className="text-4xl lg:text-5xl font-bold text-brand-cream section-title"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {t.contact.heading}
          </h2>
          <p className="mt-5 text-brand-cream/55 max-w-xl mx-auto text-sm">
            {t.contact.subtext}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Quick contacts */}
          <div className={`space-y-5 transition-all duration-700 delay-100 ${vis ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <h3 className="text-brand-gold font-semibold text-sm tracking-wide uppercase">{t.contact.quickContact}</h3>

            <a href={`tel:${restaurant.phone}`} className="glass-card flex items-center gap-4 p-5 rounded-2xl hover:border-brand-gold/40 transition-all group">
              <div className="w-12 h-12 rounded-full bg-brand-gold/15 flex items-center justify-center group-hover:bg-brand-gold/30 transition-colors">
                <Phone size={20} className="text-brand-gold" />
              </div>
              <div>
                <p className="text-brand-cream/50 text-xs mb-1">{t.contact.callUs}</p>
                <p className="text-brand-cream font-semibold">{restaurant.phoneDisplay}</p>
              </div>
            </a>

            <a
              href={`https://wa.me/${restaurant.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex items-center gap-4 p-5 rounded-2xl hover:border-[#25d366]/60 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-[#25d366]/15 flex items-center justify-center group-hover:bg-[#25d366]/25 transition-colors">
                <MessageCircle size={20} className="text-[#25d366]" />
              </div>
              <div>
                <p className="text-brand-cream/50 text-xs mb-1">{t.contact.whatsappLabel}</p>
                <p className="text-brand-cream font-semibold">{restaurant.whatsappDisplay}</p>
              </div>
            </a>

            <a
              href={`https://instagram.com/${restaurant.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex items-center gap-4 p-5 rounded-2xl hover:border-pink-500/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                <Instagram size={20} className="text-pink-400" />
              </div>
              <div>
                <p className="text-brand-cream/50 text-xs mb-1">{t.contact.instagramLabel}</p>
                <p className="text-brand-cream font-semibold">@{restaurant.instagram}</p>
              </div>
            </a>

            {/* Reviews */}
            <div className="glass-card p-5 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                {Array.from({ length: Math.floor(restaurant.rating) }).map((_, i) => (
                  <Star key={i} size={16} className="text-brand-gold fill-brand-gold" />
                ))}
                {restaurant.rating % 1 !== 0 && <Star size={16} className="text-brand-gold/40" />}
                <span className="text-brand-cream font-bold ml-1">{restaurant.rating}</span>
              </div>
              <p className="text-brand-cream/55 text-xs">{restaurant.reviewCount} Google Reviews · {t.contact.vatNote}</p>
              <p className="text-brand-cream/40 text-xs mt-1">{restaurant.reviewLocation}</p>
            </div>
          </div>

          {/* WhatsApp order form */}
          <div className={`transition-all duration-700 delay-200 ${vis ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <h3 className="text-brand-gold font-semibold text-sm tracking-wide uppercase mb-5">{t.contact.sendMessage}</h3>
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <div>
                <label className="text-brand-cream/60 text-xs font-medium block mb-2">{t.contact.yourName}</label>
                <input
                  type="text"
                  placeholder={t.contact.namePlaceholder}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-brand-dark/60 border border-brand-gold/20 text-brand-cream placeholder-brand-cream/30 text-sm focus:outline-none focus:border-brand-gold/50 transition-all"
                />
              </div>
              <div>
                <label className="text-brand-cream/60 text-xs font-medium block mb-2">{t.contact.phoneNumber}</label>
                <input
                  type="tel"
                  placeholder="+971 ..."
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-brand-dark/60 border border-brand-gold/20 text-brand-cream placeholder-brand-cream/30 text-sm focus:outline-none focus:border-brand-gold/50 transition-all"
                />
              </div>
              <div>
                <label className="text-brand-cream/60 text-xs font-medium block mb-2">{t.contact.messageOrder}</label>
                <textarea
                  rows={4}
                  placeholder={t.contact.placeholder}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-brand-dark/60 border border-brand-gold/20 text-brand-cream placeholder-brand-cream/30 text-sm focus:outline-none focus:border-brand-gold/50 transition-all resize-none"
                />
              </div>
              <button
                onClick={sendWhatsApp}
                disabled={!form.message.trim()}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#25d366] hover:bg-[#22c55e] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-full text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send size={15} />
                {t.contact.sendViaWhatsapp}
              </button>
              <p className="text-brand-cream/30 text-xs text-center">
                {t.contact.whatsappNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
