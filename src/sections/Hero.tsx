import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Flame,
  Star,
  Clock,
  Sparkles,
  Layers,
  Moon,
  ChevronDown,
} from 'lucide-react';
import { FloatingBadge } from '../components/FloatingBadge';

interface HeroProps {
  onOrderClick: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderClick, onExploreMenu }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid mouse lag
  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D transforms for burger
  const burgerRotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const burgerRotateY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const burgerTranslateX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const burgerTranslateY = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);

  // Distinct parallax depths for floating badges
  const badge1X = useTransform(smoothX, [-0.5, 0.5], [-28, 28]);
  const badge1Y = useTransform(smoothY, [-0.5, 0.5], [-24, 24]);

  const badge2X = useTransform(smoothX, [-0.5, 0.5], [30, -30]);
  const badge2Y = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);

  const badge3X = useTransform(smoothX, [-0.5, 0.5], [-22, 22]);
  const badge3Y = useTransform(smoothY, [-0.5, 0.5], [26, -26]);

  const badge4X = useTransform(smoothX, [-0.5, 0.5], [25, -25]);
  const badge4Y = useTransform(smoothY, [-0.5, 0.5], [20, -20]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Headline lines for staggered animation
  const headlineWords = [
    { text: 'BURGERS', highlight: false },
    { text: 'THAT', highlight: false },
    { text: 'HIT DIFFERENT.', highlight: true },
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full pt-28 pb-16 md:pt-32 md:pb-24 flex flex-col justify-center overflow-hidden"
    >
      {/* Background Ambience & Lighting */}
      <div className="absolute top-1/4 right-1/4 w-96 md:w-[650px] h-96 md:h-[650px] rounded-full bg-radial-radial-hero opacity-80 blur-3xl pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-nosh-orange/10 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs & Badges */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start text-left z-20">
            {/* Top Brand Pill: Islamabad Late Night Lab */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md mb-6 hover:border-nosh-orange/40 transition-colors"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="font-display text-xs font-black tracking-widest uppercase text-nosh-cream">
                ISLAMABAD'S #1 SMASH LAB
              </span>
              <span className="text-white/20">•</span>
              <span className="text-[11px] font-semibold text-nosh-amber">
                F-7 & BEVERLY
              </span>
            </motion.div>

            {/* Main Headline: Staggered Reveal */}
            <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl tracking-tighter uppercase leading-[0.88] mb-6 select-none">
              {headlineWords.map((item, index) => (
                <span key={item.text} className="block overflow-hidden py-1">
                  <motion.span
                    initial={{ y: '110%', rotate: 2, opacity: 0 }}
                    animate={{ y: '0%', rotate: 0, opacity: 1 }}
                    transition={{
                      duration: 0.85,
                      delay: 0.15 + index * 0.14,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                    className={`block ${
                      item.highlight
                        ? 'bg-gradient-to-r from-nosh-orange via-nosh-amber to-nosh-yellow bg-clip-text text-transparent drop-shadow-sm'
                        : 'text-nosh-cream'
                    }`}
                  >
                    {item.text}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="text-base sm:text-lg md:text-xl text-nosh-cream-muted/90 max-w-xl font-normal leading-relaxed mb-8"
            >
              Premium smash burgers, crispy chicken, loaded fries &amp; late-night cravings.
            </motion.p>

            {/* Action Buttons: ORDER NOW & EXPLORE MENU */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10"
            >
              <button
                onClick={onOrderClick}
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-nosh-orange via-nosh-orange-glow to-nosh-amber text-nosh-black font-display font-black text-sm tracking-wider uppercase shadow-glow-orange hover:shadow-glow-orange-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10">ORDER NOW</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreMenu}
                className="px-8 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.09] text-nosh-cream font-display font-bold text-sm tracking-wider uppercase border border-white/15 hover:border-nosh-amber/50 transition-all hover:scale-105 active:scale-95 backdrop-blur-md flex items-center justify-center gap-2"
              >
                <span>EXPLORE MENU</span>
              </button>
            </motion.div>

            {/* Schedule & Social Proof Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="flex flex-wrap items-center gap-6 sm:gap-8 pt-6 border-t border-white/10 w-full"
            >
              {/* Hours badge */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-nosh-orange/10 border border-nosh-orange/20 flex items-center justify-center text-nosh-orange shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xs uppercase tracking-wider text-nosh-cream">
                    OPEN DAILY
                  </span>
                  <span className="font-display font-black text-sm text-nosh-amber">
                    1 PM — 3 AM
                  </span>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-px bg-white/10" />

              {/* Rating badge */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-nosh-amber/10 border border-nosh-amber/20 flex items-center justify-center text-nosh-amber shrink-0">
                  <Star className="w-5 h-5 fill-nosh-amber" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="font-display font-black text-sm text-nosh-cream">
                      ★ 4.9/5
                    </span>
                  </div>
                  <span className="font-display text-[11px] font-bold text-nosh-muted tracking-wider uppercase">
                    2,000+ RATINGS
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Smash Burger with 3D Parallax & Floating Labels */}
          <div className="lg:col-span-6 xl:col-span-5 relative flex items-center justify-center min-h-[460px] sm:min-h-[540px] md:min-h-[600px] select-none">
            {/* Ambient Radial Glow Behind Burger */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[320px] sm:w-[460px] md:w-[540px] h-[320px] sm:h-[460px] md:h-[540px] rounded-full bg-gradient-to-tr from-nosh-orange/30 via-nosh-amber/20 to-transparent blur-[80px] animate-pulse-glow" />
            </div>

            {/* 3D Burger Container */}
            <motion.div
              style={{
                perspective: 1000,
                x: burgerTranslateX,
                y: burgerTranslateY,
                rotateX: burgerRotateX,
                rotateY: burgerRotateY,
              }}
              className="relative w-full max-w-[460px] sm:max-w-[520px] aspect-square flex items-center justify-center cursor-grab active:cursor-grabbing"
            >
              {/* Scaled/Rotated Entrance + Subtle Floating Oscillation */}
              <motion.div
                initial={{ scale: 0.65, rotate: -8, opacity: 0 }}
                animate={{
                  scale: 1,
                  rotate: 0,
                  opacity: 1,
                }}
                transition={{
                  scale: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
                  rotate: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
                  opacity: { duration: 0.8 },
                }}
                className="relative w-full h-full flex items-center justify-center animate-float-slow"
              >
                {/* Burger Image Container with subtle rim shadow & glow */}
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-nosh-orange to-nosh-amber rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                  <img
                    src="/images/smash-burger-hero.jpg"
                    alt="NOSH Double Smash Burger with melted cheddar and crispy edges"
                    className="relative w-72 sm:w-96 md:w-[440px] h-72 sm:h-96 md:h-[440px] object-cover rounded-3xl shadow-card-dark border border-white/10 hover:border-nosh-orange/30 transition-all duration-500"
                    draggable={false}
                  />

                  {/* Stamp / Badge Overlay on Image Corner */}
                  <div className="absolute bottom-4 right-4 bg-nosh-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-nosh-orange/40 text-[10px] font-black uppercase text-nosh-amber tracking-widest">
                    SMASH LAB • ISLAMABAD
                  </div>
                </div>
              </motion.div>

              {/* 4 Floating Badges with Multi-Layer Parallax Depths */}

              {/* 1. SMASHED (Top-Left) */}
              <motion.div
                style={{ x: badge1X, y: badge1Y }}
                className="absolute -top-4 sm:top-2 -left-2 sm:left-0 z-30"
              >
                <FloatingBadge
                  label="SMASHED"
                  sublabel="Crispy Lacy Edges"
                  icon={<Flame className="w-5 h-5 fill-current" />}
                  delay={0.8}
                  rotation={-4}
                  highlight={true}
                />
              </motion.div>

              {/* 2. CRISPY (Top-Right) */}
              <motion.div
                style={{ x: badge2X, y: badge2Y }}
                className="absolute -top-2 sm:top-4 -right-2 sm:right-0 z-30"
              >
                <FloatingBadge
                  label="CRISPY"
                  sublabel="Double Crunch"
                  icon={<Sparkles className="w-5 h-5" />}
                  delay={0.95}
                  rotation={6}
                />
              </motion.div>

              {/* 3. LOADED (Bottom-Left) */}
              <motion.div
                style={{ x: badge3X, y: badge3Y }}
                className="absolute -bottom-4 sm:bottom-4 -left-2 sm:left-2 z-30"
              >
                <FloatingBadge
                  label="LOADED"
                  sublabel="Molten Real Cheddar"
                  icon={<Layers className="w-5 h-5" />}
                  delay={1.1}
                  rotation={3}
                />
              </motion.div>

              {/* 4. OPEN TILL 3AM (Bottom-Right) */}
              <motion.div
                style={{ x: badge4X, y: badge4Y }}
                className="absolute -bottom-2 sm:bottom-2 -right-2 sm:right-2 z-30"
              >
                <FloatingBadge
                  label="OPEN TILL 3AM"
                  sublabel="Late Night Bites"
                  icon={<Moon className="w-5 h-5 text-nosh-amber" />}
                  delay={1.25}
                  rotation={-3}
                  highlight={true}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-nosh-muted text-xs font-semibold uppercase tracking-widest pointer-events-none"
      >
        <span>SCROLL DOWN</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          <ChevronDown className="w-4 h-4 text-nosh-orange" />
        </motion.div>
      </motion.div>
    </section>
  );
};
