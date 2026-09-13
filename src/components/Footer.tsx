import React from 'react';
import { Flame, Phone, MapPin, Clock, Heart } from 'lucide-react';


export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-nosh-black border-t border-white/10 pt-16 pb-12 overflow-hidden text-nosh-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand & Slogan */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" className="inline-flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-nosh-orange to-nosh-amber flex items-center justify-center shadow-glow-orange group-hover:scale-105 transition-transform">
                <Flame className="w-5 h-5 text-nosh-black fill-nosh-black" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl tracking-tighter text-nosh-cream leading-none">
                  NOSH
                </span>
                <span className="font-display text-[10px] tracking-[0.2em] font-bold text-nosh-amber uppercase leading-none mt-1">
                  BURGERS &amp; MORE
                </span>
              </div>
            </a>

            <p className="font-display font-black text-xl text-nosh-cream-muted uppercase tracking-wide">
              “Burgers that hit different.”
            </p>

            <p className="text-xs text-nosh-muted leading-relaxed max-w-sm">
              Twin patties smashed razor thin on sizzling cast iron with caramelized lacy edges. Islamabad’s favorite late-night smash ritual.
            </p>

            {/* Social Icons (Visual Placeholders per prompt) */}
            <div className="pt-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-nosh-muted block mb-2">
                COMMUNITY (VISUAL PLACEHOLDERS)
              </span>
              <div className="flex items-center gap-3">
                {/* Instagram */}
                <div
                  title="Instagram Placeholder"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-nosh-muted hover:text-nosh-orange hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>

                {/* TikTok */}
                <div
                  title="TikTok Placeholder"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-nosh-muted hover:text-nosh-orange hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </div>

                {/* Facebook */}
                <div
                  title="Facebook Placeholder"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-nosh-muted hover:text-nosh-orange hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-black text-xs uppercase tracking-widest text-nosh-amber">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="text-nosh-cream-muted hover:text-nosh-orange transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="text-nosh-cream-muted hover:text-nosh-orange transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-nosh-cream-muted hover:text-nosh-orange transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#popular" className="text-nosh-cream-muted hover:text-nosh-orange transition-colors">
                  Popular
                </a>
              </li>
              <li>
                <a href="#contact" className="text-nosh-cream-muted hover:text-nosh-orange transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Info */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-display font-black text-xs uppercase tracking-widest text-nosh-amber">
              NOSH ISLAMABAD
            </h4>
            <div className="space-y-3 text-xs text-nosh-cream-muted">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-nosh-orange shrink-0 mt-0.5" />
                <div>
                  <a
                    href="tel:+923265550192"
                    className="font-bold text-nosh-cream hover:text-nosh-orange transition-colors text-sm"
                  >
                    +92 326 5550192
                  </a>
                  <p className="text-[11px] text-nosh-muted">Direct late-night hotline</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-nosh-orange shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-nosh-cream text-sm">G-9/4, Islamabad</p>
                  <p className="text-[11px] text-nosh-muted">Taqwa Market, Plot No. 1-B, Flat No. 1</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-nosh-cream text-sm">1 PM – 3 AM Daily</p>
                  <p className="text-[11px] text-emerald-400 font-semibold">Steaming delivery + takeaway</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: © 2026 NOSH (BURGERS & MORE) */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-nosh-muted">
          <p className="font-medium">
            © 2026 NOSH (BURGERS &amp; MORE). All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 font-medium">
            Crafted with <Heart className="w-3.5 h-3.5 text-nosh-orange fill-nosh-orange" /> for late-night smash burger lovers
          </p>
        </div>
      </div>
    </footer>
  );
};
