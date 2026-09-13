import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, ArrowRight } from 'lucide-react';

interface LateNightSectionProps {
  onOrderClick: () => void;
}

export const LateNightSection: React.FC<LateNightSectionProps> = ({ onOrderClick }) => {
  const [seconds, setSeconds] = useState(0);

  // Gentle ticking effect for the seconds display
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev + 1) % 60);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="late-night" className="relative py-28 md:py-36 bg-nosh-black px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Moving Ambient Aurora / Glow in background */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [-20, 20, -20],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-gradient-to-b from-purple-600/30 via-nosh-orange/20 to-transparent blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative rounded-[2.5rem] bg-gradient-to-b from-nosh-card/90 via-nosh-charcoal/95 to-nosh-black border border-white/10 p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl">
          {/* Subtle noise/grain texture inside card */}
          <div className="absolute inset-0 bg-grain opacity-50 pointer-events-none" />

          {/* Background image slice on the LEFT side with dark fade */}
          <div className="absolute left-0 top-0 bottom-0 w-full lg:w-1/2 overflow-hidden opacity-20 lg:opacity-30 pointer-events-none">
            <img
              src="/images/image-10.jpg"
              alt="Late night smash burger feast"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-nosh-card via-nosh-card/80 to-transparent" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Digital Clock (previously Right) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[340px] p-8 rounded-3xl bg-nosh-black/90 border border-purple-500/30 shadow-2xl backdrop-blur-2xl flex flex-col items-center text-center"
              >
                {/* Glowing neon halo behind clock */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/20 via-nosh-orange/10 to-transparent blur-xl pointer-events-none" />

                <div className="flex items-center gap-2 text-xs font-black tracking-widest text-emerald-400 uppercase mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>KITCHEN IS SIZZLING NOW</span>
                </div>

                {/* Big Animated 03:00 AM Display */}
                <div className="relative py-4 select-none">
                  <div className="font-display font-black text-6xl sm:text-7xl text-nosh-cream tracking-tight flex items-center justify-center">
                    <span>03</span>
                    <motion.span
                      animate={{ opacity: [1, 0.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="text-nosh-orange mx-1"
                    >
                      :
                    </motion.span>
                    <span>00</span>
                    <span className="text-xl sm:text-2xl text-nosh-amber ml-2 self-start font-black">
                      AM
                    </span>
                  </div>

                  <div className="text-[11px] font-mono text-purple-300/80 mt-1 uppercase tracking-widest">
                    CLOSING TICK • {String(59 - seconds).padStart(2, '0')}s
                  </div>
                </div>

                {/* Details under clock */}
                <div className="w-full pt-5 mt-3 border-t border-white/10 space-y-2 text-left">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-nosh-muted">Delivery Zones</span>
                    <span className="font-bold text-nosh-cream">Islamabad &amp; RWP</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-nosh-muted">Avg Midnight Drop</span>
                    <span className="font-bold text-emerald-400">25–35 MINS</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-nosh-muted">Hot Food Guarantee</span>
                    <span className="font-bold text-nosh-amber">100% STEAMING</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Content & CTA (previously Left) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-black tracking-widest text-purple-300 uppercase mb-6"
              >
                <Moon className="w-3.5 h-3.5 text-purple-400 fill-purple-400" />
                <span>ISLAMABAD MIDNIGHT FUEL</span>
              </motion.div>

              {/* Headlines */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-nosh-cream uppercase tracking-tight leading-[0.92] mb-3"
              >
                CRAVINGS <br />
                <span className="text-stroke-subtle text-transparent hover:text-purple-400 transition-colors">
                  DON'T SLEEP.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-display font-black text-2xl sm:text-3xl text-nosh-orange uppercase tracking-wide mb-6"
              >
                WE'RE OPEN UNTIL 3AM.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-sm sm:text-base text-nosh-cream-muted max-w-lg mb-8 leading-relaxed"
              >
                Whether you're pulling an all-nighter, cruising through Blue Area, or craving smash burgers at 2 AM, NOSH has your back.
              </motion.p>

              {/* Action Button: ORDER FOR LATE NIGHT */}
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                onClick={onOrderClick}
                className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-nosh-orange via-nosh-orange-glow to-nosh-amber hover:from-nosh-orange-glow hover:to-nosh-yellow text-nosh-black font-display font-black text-sm tracking-wider uppercase shadow-glow-orange hover:shadow-glow-orange-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group"
              >
                <span>ORDER FOR LATE NIGHT</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};