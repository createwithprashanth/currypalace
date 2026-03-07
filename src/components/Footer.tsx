"use client";

import { Phone, MapPin, Clock, Instagram, Download } from "lucide-react";
import { restaurant } from "@/config/restaurant";

const navLinks = ["Home", "About", "Menu", "Gallery", "Location", "Contact"];

const scrollTo = (id: string) =>
  document.querySelector(`#${id.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" });

export default function Footer() {
  return (
    <footer className="bg-[#0A0301] border-t border-brand-gold/15 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3
              className="text-3xl font-bold text-brand-gold mb-0.5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {restaurant.name}
            </h3>
            {restaurant.nameSecondary && (
              <p
                className="text-xl text-brand-gold/70 mb-1"
                style={{ fontFamily: "'Noto Naskh Arabic', serif", direction: "rtl" }}
              >
                {restaurant.nameSecondary}
              </p>
            )}
            <p className="text-brand-cream/35 text-[10px] tracking-[0.25em] uppercase mb-3">Restaurant · {restaurant.address.city}</p>
            <p
              className="text-brand-gold/60 text-base mb-4"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              {restaurant.tagline}
            </p>
            <p className="text-brand-cream/40 text-xs leading-relaxed mb-3">
              {restaurant.footerDesc}
            </p>
            <p className="text-brand-gold/50 text-xs tracking-wide">{restaurant.footerOrigin}</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-5">Navigate</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="text-brand-cream/55 hover:text-brand-gold text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-gold/40 group-hover:bg-brand-gold transition-colors" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-5">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={13} className="text-brand-gold/60 mt-0.5 shrink-0" />
                <span className="text-brand-cream/55 text-xs leading-relaxed">
                  {restaurant.address.line1}<br />{restaurant.address.line2}<br />{restaurant.address.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={13} className="text-brand-gold/60 shrink-0" />
                <a href={`tel:${restaurant.phone}`} className="text-brand-cream/55 hover:text-brand-gold text-xs transition-colors">{restaurant.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-[#25d366]/70 shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <a href={`https://wa.me/${restaurant.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-brand-cream/55 hover:text-[#25d366] text-xs transition-colors">{restaurant.whatsappDisplay}</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={13} className="text-brand-gold/60 shrink-0" />
                <span className="text-brand-cream/55 text-xs">{restaurant.hoursShort}</span>
              </li>
            </ul>
          </div>

          {/* Social + CTA */}
          <div>
            <h4 className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-5">Follow Us</h4>
            <a
              href={`https://instagram.com/${restaurant.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-pink-500/30 text-pink-400 text-xs hover:bg-pink-500/10 transition-all mb-6"
            >
              <Instagram size={14} /> @{restaurant.instagram}
            </a>
            <div className="space-y-2">
              <a
                href={`https://wa.me/${restaurant.whatsapp}?text=${restaurant.whatsappOrderMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#25d366] hover:bg-[#22c55e] text-white font-semibold rounded-full text-sm transition-all hover:scale-[1.02]"
              >
                Order via WhatsApp
              </a>
              <a
                href={`tel:${restaurant.phone}`}
                className="flex items-center justify-center gap-2 w-full py-3 bg-brand-gold/15 hover:bg-brand-gold/25 text-brand-gold font-semibold rounded-full text-sm transition-all border border-brand-gold/30 hover:scale-[1.02]"
              >
                <Phone size={13} /> Call Now
              </a>
              <a
                href={restaurant.menuPdf}
                download={restaurant.menuPdfFilename}
                className="flex items-center justify-center gap-2 w-full py-3 bg-brand-gold/10 hover:bg-brand-gold/20 text-brand-gold/80 hover:text-brand-gold font-medium rounded-full text-sm transition-all border border-brand-gold/20 hover:scale-[1.02]"
              >
                <Download size={13} /> Download Menu PDF
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="gold-divider mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-brand-cream/25 text-xs text-center sm:text-left">
          <p>© {new Date().getFullYear()} {restaurant.name} Restaurant · {restaurant.address.line1}, {restaurant.address.city}</p>
          <p className="text-brand-cream/20">{restaurant.footerBottomNote}</p>
        </div>
      </div>
    </footer>
  );
}
