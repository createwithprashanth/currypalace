"use client";

import { useState } from "react";
import { ShoppingCart, X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLang } from "@/context/LanguageContext";
import { restaurant } from "@/config/restaurant";

export default function OrderCart() {
  const { items, add, remove, clear, count } = useCart();
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  const handleOrder = () => {
    if (items.length === 0) return;
    const lines = items
      .map((i) => `• ${i.qty}x ${i.name} (${i.price})`)
      .join("%0A");
    const msg = `Hello%20Curry%20Palace!%20I%20would%20like%20to%20order%3A%0A${lines}%0A%0APlease%20confirm%20my%20order.`;
    window.open(`https://wa.me/${restaurant.whatsapp}?text=${msg}`, "_blank");
  };

  return (
    <>
      {/* Floating cart button — bottom-left */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open order cart"
        className={`fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-brand-gold hover:bg-brand-gold-light text-brand-dark flex items-center justify-center shadow-gold hover:scale-110 transition-all duration-300 ${
          count === 0 ? "opacity-0 pointer-events-none scale-75" : "opacity-100 scale-100"
        }`}
      >
        <ShoppingCart size={22} />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
            {count > 99 ? "99+" : count}
          </span>
        )}
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 bottom-0 z-[70] w-full sm:w-[400px] bg-[#0F0502] border-l border-brand-gold/20 shadow-2xl flex flex-col transition-all duration-400 ${
          open ? "right-0" : "-right-full sm:-right-[400px]"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-brand-gold/15">
          <div className="flex items-center gap-3">
            <ShoppingCart size={18} className="text-brand-gold" />
            <span className="text-brand-cream font-semibold text-base">{t.cart.title}</span>
            {count > 0 && (
              <span className="text-brand-gold/60 text-sm">
                ({count} {count === 1 ? t.cart.item : t.cart.items})
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {items.length > 0 && (
              <button
                onClick={clear}
                className="flex items-center gap-1.5 text-xs text-brand-cream/40 hover:text-red-400 transition-colors px-2 py-1 rounded-lg hover:bg-red-500/10"
              >
                <Trash2 size={13} />
                {t.cart.clear}
              </button>
            )}
            <button
              onClick={() => setOpen(false)}
              className="p-2 text-brand-cream/50 hover:text-brand-cream transition-colors rounded-lg hover:bg-brand-gold/10"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-center">
              <ShoppingCart size={40} className="text-brand-gold/20" />
              <p className="text-brand-cream/40 text-sm">{t.cart.empty}</p>
              <p className="text-brand-cream/25 text-xs">{t.cart.emptyHint}</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between px-4 py-3 rounded-xl border border-brand-gold/10 bg-brand-dark/50"
              >
                <div className="flex-1 min-w-0 mr-3">
                  <p className="text-brand-cream text-sm font-medium truncate">{item.name}</p>
                  <p className="text-brand-gold text-xs mt-0.5">{item.price}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => remove(item.name)}
                    className="w-7 h-7 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold hover:bg-brand-gold/10 transition-colors"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="text-brand-cream font-semibold text-sm w-5 text-center">
                    {item.qty}
                  </span>
                  <button
                    onClick={() => add(item.name, item.price)}
                    className="w-7 h-7 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold hover:bg-brand-gold/30 transition-colors"
                  >
                    <Plus size={12} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-4 py-4 border-t border-brand-gold/15">
            <button
              onClick={handleOrder}
              className="w-full py-4 bg-[#25d366] hover:bg-[#22c55e] text-white font-bold rounded-full text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-[0_4px_20px_rgba(37,211,102,0.4)]"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t.cart.orderViaWhatsapp}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
