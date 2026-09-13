import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ShoppingBag, Sparkles, CheckCircle2, Flame } from 'lucide-react';
import { signatureNoshSmash } from '../data/menuData';
import type { MenuItem } from '../data/menuData';

interface SignatureBurgerProps {
  onAddToCart: (item: MenuItem) => void;
}

export const SignatureBurger: React.FC<SignatureBurgerProps> = ({ onAddToCart }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-200, 200], [8, -8]);
  const rotateY = useTransform(smoothX, [-200, 200], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const ingredients = [
    {
      id: 'bun',
      title: 'TOASTED BUN',
      detail: 'Golden butter-glazed artisanal brioche',
      position: 'top-6 left-0 lg:-left-16',
      lineAlign: 'left',
      delay: 0.3,
      color: 'text-nosh-amber',
      dot: 'bg-nosh-amber',
    },
    {
      id: 'sauce',
      title: 'SPECIAL SAUCE',
      detail: 'House secret emulsion with smoky paprika & relish',
      position: 'top-40 right-0 lg:-right-16',
      lineAlign: 'right',
      delay: 0.45,
      color: 'text-nosh-orange',
      dot: 'bg-nosh-orange',
    },
    {
      id: 'cheese',
      title: 'MELTED CHEESE',
      detail: 'Double real American cheddar blankets',
      position: 'bottom-40 left-0 lg:-left-16',
      lineAlign: 'left',
      delay: 0.6,
      color: 'text-yellow-400',
      dot: 'bg-yellow-400',
    },
    {
      id: 'beef',
      title: 'JUICY BEEF',
      detail: 'Twin patties smashed razor thin with lacy crust',
      position: 'bottom-8 right-0 lg:-right-16',
      lineAlign: 'right',
      delay: 0.75,
      color: 'text-red-400',
      dot: 'bg-red-400',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-28 md:py-40 bg-nosh-dark/95 px-4 sm:px-6 lg:px-8 overflow-hidden border-y border-white/5 scroll-mt-24"
    >
      {/* Deep ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-nosh-orange/20 blur-[160px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-nosh-amber/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Editorial Top Tag */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-nosh-orange/10 border border-nosh-orange/30 text-xs font-black tracking-widest text-nosh-orange uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>EDITORIAL SPOTLIGHT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-5xl sm:text-7xl md:text-8xl text-nosh-cream uppercase tracking-tight leading-[0.88]"
          >
            NOSH <span className="text-nosh-orange">SMASH</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-3 mt-4"
          >
            <span className="font-display font-black text-3xl sm:text-4xl text-nosh-amber">
              Rs. 680
            </span>
            <span className="text-white/20">•</span>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              BEST VALUE HERO
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-5 text-base sm:text-lg text-nosh-cream-muted max-w-xl mx-auto font-normal leading-relaxed"
          >
            Juicy beef patties, special NOSH sauce, buttered toasted bun, ketchup, pickles and cheese.
          </motion.p>
        </div>

        {/* Central Stage: Giant Burger + Interactive Ingredient Pointers */}
        <div
          className="relative max-w-5xl mx-auto min-h-[560px] sm:min-h-[680px] md:min-h-[780px] flex items-center justify-center my-4"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Animated Central Burger */}
          <motion.div
            initial={{ scale: 0.6, rotate: -8, opacity: 0, y: 40 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ rotateX, rotateY, transformPerspective: 1200 }}
            className="relative z-10 w-80 sm:w-[440px] md:w-[560px] lg:w-[620px] aspect-square flex items-center justify-center select-none"
          >
            <div className="relative group w-full h-full">
              {/* Multi-layer backlight halo */}
              <div className="absolute -inset-10 bg-nosh-orange/25 rounded-full blur-[80px] animate-pulse-glow pointer-events-none" />
              <div className="absolute -inset-4 bg-gradient-to-br from-nosh-orange/30 to-nosh-amber/20 rounded-full blur-[40px] opacity-60 pointer-events-none" />

              {/* Floating rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-3 rounded-full border border-nosh-orange/15 border-dashed pointer-events-none"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-7 rounded-full border border-nosh-amber/10 border-dashed pointer-events-none"
              />

              {/* Main burger image */}
              <motion.img
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                src="/images/smash-burger-hero.jpg"
                alt="NOSH SMASH Signature Double Patty Burger"
                className="w-full h-full object-cover rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)] border border-white/10 group-hover:border-nosh-orange/50 transition-colors duration-700"
                draggable={false}
              />

              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* LIVE badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-nosh-black/90 backdrop-blur-xl border border-nosh-orange/40 shadow-glow-orange">
                <Flame className="w-3.5 h-3.5 text-nosh-orange fill-nosh-orange" />
                <span className="text-[10px] font-black tracking-widest text-nosh-orange uppercase">SMASHED FRESH</span>
              </div>
            </div>
          </motion.div>

          {/* Ingredient Labels */}
          {ingredients.map((ingr) => (
            <motion.div
              key={ingr.id}
              initial={{ opacity: 0, x: ingr.lineAlign === 'left' ? -40 : 40, scale: 0.85 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: ingr.delay, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.07, y: -3 }}
              className={`absolute z-20 ${ingr.position} max-w-[200px] sm:max-w-[240px] p-4 rounded-2xl bg-nosh-black/90 backdrop-blur-xl border border-white/10 hover:border-nosh-orange/50 shadow-2xl transition-all cursor-default`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`w-2 h-2 rounded-full ${ingr.dot} animate-ping`} />
                <h4 className={`font-display font-black text-xs sm:text-sm uppercase tracking-wider ${ingr.color}`}>
                  {ingr.title}
                </h4>
              </div>
              <p className="text-[11px] sm:text-xs text-nosh-cream-muted leading-snug">
                {ingr.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-4"
        >
          <button
            onClick={() => onAddToCart(signatureNoshSmash)}
            className="group w-full sm:w-auto px-12 py-5 rounded-full bg-gradient-to-r from-nosh-orange via-nosh-orange-glow to-nosh-amber hover:from-nosh-orange-glow hover:to-nosh-yellow text-nosh-black font-display font-black text-sm sm:text-base tracking-wider uppercase shadow-glow-orange hover:shadow-glow-orange-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
          >
            <ShoppingBag className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>ADD TO CART — RS. 680</span>
          </button>

          <div className="flex items-center gap-6 text-xs text-nosh-muted">
            <span className="flex items-center gap-1.5 text-nosh-cream">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              100% Prime Beef
            </span>
            <span className="flex items-center gap-1.5 text-nosh-cream">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Fresh Brioche Bun
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};