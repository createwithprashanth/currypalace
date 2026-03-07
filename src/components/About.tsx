"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Award, Utensils, Users, Clock } from "lucide-react";

const stats = [
  { icon: Utensils, value: "200+", label: "Menu Items" },
  { icon: Clock,    value: "24/7", label: "Always Open" },
  { icon: Users,    value: "1000+",label: "Happy Guests Daily" },
  { icon: Award,    value: "3.5★", label: "Google Rated" },
];

const keralaDishes = [
  { name: "Thalassery Dum Biriyani", desc: "Fragrant rice cooked Kerala-style with aromatic spices" },
  { name: "Kizhi Porotta",           desc: "Porotta steamed in a banana leaf with masala — iconic Kerala street food" },
  { name: "Appam Pollichath",        desc: "Crisp appam cooked in banana leaf, served with coconut curry" },
  { name: "Puttu Biriyani",          desc: "Steamed rice cake layered with spiced chicken or beef" },
  { name: "Pothi Choru",             desc: "Rice meal wrapped in banana leaf, slow-cooked to perfection" },
  { name: "Pal Porotta",             desc: "Flaky porotta soaked in sweetened milk — a Kerala dessert special" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 sm:py-24 bg-brand-dark relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-brown/20 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-brand-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">Our Story</p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-cream section-title"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Welcome to Curry Palace
          </h2>
          <p className="mt-5 text-brand-cream/60 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-2">
            At Curry Palace, we are devoted to serving exquisite cuisine crafted with the finest ingredients,
            in an environment defined by cleanliness, care, and hospitality — located in the heart of
            Al Zahiyah, Tourist Club Area, Abu Dhabi.
          </p>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-16 sm:mb-20 transition-all duration-700 delay-150 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="glass-card rounded-2xl p-5 sm:p-6 text-center hover:border-brand-gold/50 transition-all duration-300 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 rounded-full bg-brand-gold/15 flex items-center justify-center group-hover:bg-brand-gold/25 transition-colors">
                <Icon size={20} className="text-brand-gold" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-brand-gold" style={{ fontFamily: "'Playfair Display', serif" }}>{value}</p>
              <p className="text-brand-cream/60 text-xs mt-1 tracking-wide">{label}</p>
            </div>
          ))}
        </div>

        {/* Two column */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-20">

          {/* Images */}
          <div className={`relative transition-all duration-700 delay-200 ${vis ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative rounded-2xl overflow-hidden h-52 sm:h-64 img-overlay">
                <Image src="/images/curry_palace00003.jpg" alt="Interior" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-52 sm:h-64 img-overlay">
                <Image src="/images/curry_palace00007.jpg" alt="Dining" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-40 sm:h-48 img-overlay col-span-2">
                <Image src="/images/curry_palace00005.jpg" alt="Restaurant" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 glass-card rounded-2xl px-4 py-3 shadow-gold border border-brand-gold/40">
              <p className="text-brand-gold font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>Open</p>
              <p className="text-brand-cream/80 text-xs">24 Hours · 7 Days</p>
            </div>
          </div>

          {/* Text */}
          <div className={`space-y-5 transition-all duration-700 delay-300 ${vis ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <p
              className="text-2xl sm:text-3xl font-bold text-brand-cream leading-snug"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              A World of Flavours,{" "}
              <span className="gold-shimmer">Awaits You</span>
            </p>
            <div className="space-y-4">
              {[
                { title: "Authentic Kerala Flavours", desc: "Biriyani, Pothi Choru, Kizhi Porotta, Appam — straight from God's Own Country." },
                { title: "Arabic & Chinese Fusion",   desc: "Shawarma, Charcoal Chicken, Fried Rice, Noodles and gourmet Pasta." },
                { title: "Fresh Juices & Desserts",   desc: "Over 50 varieties of fresh juices, Falooda, Crush Milk and signature Mojitos." },
                { title: "Free Home Delivery",        desc: "Quick delivery across Al Zahiyah and surrounding areas — absolutely free." },
              ].map((h, i) => (
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
              <a href="tel:024484041" className="flex-1 text-center py-3 px-4 bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-semibold rounded-full text-sm transition-all hover:scale-105">Call Now</a>
              <a href="https://wa.me/971551899500" target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 px-4 bg-[#25d366] hover:bg-[#22c55e] text-white font-semibold rounded-full text-sm transition-all hover:scale-105">WhatsApp Order</a>
            </div>
          </div>
        </div>

        {/* ── Kerala Heritage Section ── */}
        <div className={`transition-all duration-700 delay-400 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="gold-divider mb-12" />

          <div className="text-center mb-10">
            <p className="text-brand-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              🌴 God&apos;s Own Country
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-brand-cream"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The Heart of{" "}
              <span className="gold-shimmer">Kerala Cuisine</span>
            </h2>
            <p className="mt-4 text-brand-cream/55 max-w-2xl mx-auto text-sm leading-relaxed px-2">
              Kerala — nestled on the lush Malabar Coast of South India — is famed for its vibrant spices,
              coconut-rich gravies, and banana-leaf feasts. Our kitchen brings every recipe with the same love
              and tradition straight from the backwaters.
            </p>
          </div>

          {/* Kerala dish highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {keralaDishes.map((dish) => (
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

          {/* Kerala cultural strip */}
          <div className="mt-10 glass-card rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="text-5xl sm:text-6xl shrink-0">🌴</div>
            <div className="flex-1">
              <h3
                className="text-xl sm:text-2xl font-bold text-brand-cream mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Malabar Coast to Abu Dhabi
              </h3>
              <p className="text-brand-cream/55 text-sm leading-relaxed">
                Our owner, rooted in the rich culinary traditions of Kerala, has brought the authentic tastes of
                the Malabar Coast to Abu Dhabi. Every dish is crafted with hand-ground spices, fresh coconut,
                and recipes passed down through generations — paired with the warmth and hospitality that
                Kerala is world-famous for.
              </p>
            </div>
            <div className="flex flex-col gap-2 shrink-0 w-full sm:w-auto">
              <div className="glass-card rounded-xl px-5 py-3 text-center border border-brand-gold/30">
                <p className="text-brand-gold font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>Kerala</p>
                <p className="text-brand-cream/50 text-xs">God&apos;s Own Country</p>
              </div>
              <div className="glass-card rounded-xl px-5 py-3 text-center border border-brand-gold/30">
                <p className="text-brand-gold font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>Abu Dhabi</p>
                <p className="text-brand-cream/50 text-xs">Our Home</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
