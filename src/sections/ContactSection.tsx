import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, ArrowUpRight, Navigation, Sparkles, ShoppingBag } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface ContactSectionProps {
  onOrderClick: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOrderClick }) => {
  const handleGetDirections = () => {
    window.open(
      'https://www.google.com/maps/search/?api=1&query=Taqwa+Market+G-9/4+Islamabad+Pakistan',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      id="contact"
      className="relative py-28 md:py-36 bg-nosh-dark px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] rounded-full bg-nosh-orange/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Details, Hours & Action Buttons */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-nosh-orange/10 border border-nosh-orange/20 text-xs font-black tracking-widest text-nosh-orange uppercase mb-4"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>ISLAMABAD HEADQUARTERS</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display font-black text-4xl sm:text-6xl text-nosh-cream uppercase tracking-tight leading-[0.92]"
              >
                COME GET <br />
                <span className="text-nosh-orange">YOUR NOSH.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-display font-black text-xl sm:text-2xl text-nosh-amber uppercase tracking-wider mt-3"
              >
                NOSH (BURGERS &amp; MORE)
              </motion.p>
            </div>

            {/* Address & Timings Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="space-y-4"
            >
              {/* Address Details */}
              <div className="p-5 rounded-2xl bg-nosh-card/80 border border-white/10 flex items-start gap-4 shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-nosh-orange/10 border border-nosh-orange/30 flex items-center justify-center text-nosh-orange shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-black uppercase tracking-widest text-nosh-muted">
                    LOCATION &amp; KITCHEN
                  </h4>
                  <p className="font-display font-bold text-sm sm:text-base text-nosh-cream leading-relaxed">
                    First Floor, Flat No. 1, Plot No. 1-B, <br />
                    Taqwa Market, G-9/4, <br />
                    Islamabad, Pakistan
                  </p>
                </div>
              </div>

              {/* Phone & Timings */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-nosh-card/80 border border-white/10 flex items-start gap-4 shadow-lg">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-nosh-muted">
                      DIRECT HOTLINE
                    </h4>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                      className="font-display font-black text-sm sm:text-base text-nosh-cream hover:text-nosh-orange transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                    <p className="text-[11px] text-nosh-muted mt-0.5">Call for fast drop</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-nosh-card/80 border border-white/10 flex items-start gap-4 shadow-lg">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-nosh-muted">
                      OPERATING HOURS
                    </h4>
                    <p className="font-display font-bold text-sm sm:text-base text-nosh-cream">
                      1 PM – 3 AM Daily
                    </p>
                    <p className="text-[11px] text-emerald-400 font-bold mt-0.5">
                      Delivery + Takeaway
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Three Prompt-Specified Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* CALL NOSH */}
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                className="flex-1 min-w-[160px] py-4 px-6 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 text-nosh-cream font-display font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-md"
              >
                <Phone className="w-4 h-4 text-nosh-orange" />
                <span>CALL NOSH</span>
              </a>

              {/* GET DIRECTIONS */}
              <button
                onClick={handleGetDirections}
                className="flex-1 min-w-[160px] py-4 px-6 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 text-nosh-cream font-display font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-md"
              >
                <Navigation className="w-4 h-4 text-nosh-amber" />
                <span>GET DIRECTIONS</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </button>

              {/* ORDER ONLINE */}
              <button
                onClick={onOrderClick}
                className="w-full sm:w-auto flex-1 min-w-[180px] py-4 px-6 rounded-2xl bg-gradient-to-r from-nosh-orange via-nosh-orange-glow to-nosh-amber text-nosh-black font-display font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-glow-orange hover:scale-105 active:scale-95 transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>ORDER ONLINE</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Custom Stylized Map Visual Placeholder */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl bg-nosh-card/90 border border-white/10 p-6 sm:p-8 overflow-hidden shadow-2xl min-h-[440px] flex flex-col justify-between"
            >
              {/* Stylized Dark Map Grid Graphics */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#mapGrid)" />
                  {/* Stylized Sector Roadways */}
                  <path d="M-50,150 Q180,240 450,120 T800,280" fill="none" stroke="#FF5500" strokeWidth="2.5" opacity="0.4" />
                  <path d="M120,-50 L280,600" fill="none" stroke="#FFAE00" strokeWidth="2" opacity="0.3" />
                  <path d="M-20,380 L600,260" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.2" />
                  <circle cx="340" cy="220" r="70" fill="none" stroke="#FF5500" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                </svg>
              </div>

              {/* Map Top Bar */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-widest text-nosh-cream">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>KITCHEN LIVE IN G-9/4</span>
                </div>
                <span className="text-[10px] font-mono text-nosh-muted">
                  33.6938° N, 73.0243° E
                </span>
              </div>

              {/* Central Map Pin Beacon */}
              <div className="relative z-10 my-12 flex flex-col items-center justify-center text-center">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-nosh-orange/30 blur-xl animate-pulse-glow" />
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-nosh-orange to-nosh-amber text-nosh-black flex items-center justify-center shadow-glow-orange">
                    <MapPin className="w-8 h-8 fill-nosh-black" />
                  </div>
                </div>

                <h3 className="font-display font-black text-xl text-nosh-cream uppercase tracking-tight mt-4">
                  TAQWA MARKET, G-9/4
                </h3>
                <p className="text-xs text-nosh-cream-muted max-w-xs mt-1">
                  Plot No. 1-B, Flat No. 1, First Floor, Islamabad
                </p>
                <span className="mt-3 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
                  Serving Islamabad &amp; Rawalpindi Daily
                </span>
              </div>

              {/* Map Footer Card */}
              <div className="relative z-10 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-nosh-muted block">
                    Average Delivery Time
                  </span>
                  <span className="font-display font-black text-sm text-nosh-amber">
                    25 – 35 MINS TWIN CITIES
                  </span>
                </div>

                <button
                  onClick={handleGetDirections}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-nosh-cream text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  <span>OPEN MAPS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
