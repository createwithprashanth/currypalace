"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Download } from "lucide-react";

const navLinks = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Menu",     href: "#menu" },
  { label: "Gallery",  href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const [active,   setActive]   = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-brand-dark/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.6)] border-b border-brand-gold/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo — English + Arabic */}
          <button onClick={() => scrollTo("#home")} className="flex flex-col leading-none text-left">
            <span
              className="text-lg sm:text-xl lg:text-2xl font-bold text-brand-gold leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Curry Palace
            </span>
            <span
              className="text-[11px] sm:text-xs text-brand-cream/60 leading-tight"
              style={{ fontFamily: "'Noto Naskh Arabic', serif", direction: "rtl" }}
            >
              مطعم كاري بالس
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className={`px-4 py-2 text-sm font-medium tracking-wide rounded-full transition-all duration-300 ${
                  active === href
                    ? "text-brand-gold bg-brand-gold/10"
                    : "text-brand-cream/80 hover:text-brand-gold hover:bg-brand-gold/10"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="/curry-palace-menu.pdf"
              download="Curry_Palace_Menu.pdf"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-brand-gold border border-brand-gold/40 hover:bg-brand-gold/10 rounded-full transition-all duration-300"
            >
              <Download size={13} />
              Menu PDF
            </a>
            <a
              href="tel:024484041"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-brand-dark bg-brand-gold hover:bg-brand-gold-light rounded-full transition-all duration-300 shadow-gold"
            >
              <Phone size={14} />
              02 448 4041
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-brand-gold"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-brand-dark/98 backdrop-blur-md border-t border-brand-gold/20 px-4 pt-3 pb-5 space-y-1">
          {navLinks.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                active === href
                  ? "text-brand-gold bg-brand-gold/10"
                  : "text-brand-cream/80 hover:text-brand-gold hover:bg-brand-gold/10"
              }`}
            >
              {label}
            </button>
          ))}
          <div className="pt-3 grid grid-cols-2 gap-3">
            <a
              href="tel:024484041"
              className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-brand-dark bg-brand-gold rounded-xl"
            >
              <Phone size={14} /> Call Now
            </a>
            <a
              href="https://wa.me/971551899500"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#25d366] rounded-xl"
            >
              WhatsApp
            </a>
          </div>
          <a
            href="/curry-palace-menu.pdf"
            download="Curry_Palace_Menu.pdf"
            className="mt-2 flex items-center justify-center gap-2 py-3 text-sm font-semibold text-brand-gold border border-brand-gold/40 rounded-xl hover:bg-brand-gold/10 transition-colors"
          >
            <Download size={14} /> Download Menu PDF
          </a>
        </div>
      </div>
    </header>
  );
}
