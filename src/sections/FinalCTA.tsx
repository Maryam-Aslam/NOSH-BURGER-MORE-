import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Flame } from 'lucide-react';

interface FinalCTAProps {
  onOrderClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOrderClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position tracking for subtle 3D parallax float
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const burgerX = useTransform(smoothX, [-300, 300], [-25, 25]);
  const burgerY = useTransform(smoothY, [-300, 300], [-20, 20]);

  const friesX = useTransform(smoothX, [-300, 300], [30, -30]);
  const friesY = useTransform(smoothY, [-300, 300], [25, -25]);

  const chickenX = useTransform(smoothX, [-300, 300], [-20, 20]);
  const chickenY = useTransform(smoothY, [-300, 300], [30, -30]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative py-32 md:py-44 bg-nosh-black px-4 sm:px-6 lg:px-8 overflow-hidden text-center border-t border-white/5"
    >
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-gradient-to-r from-nosh-orange/20 via-nosh-amber/15 to-transparent blur-[160px] pointer-events-none" />

      {/* Floating Food Imagery with Cursor Parallax */}
      {/* 1. Floating Burger (Top Left) */}
      <motion.div
        style={{ x: burgerX, y: burgerY }}
        animate={{
          y: isHovered ? undefined : [0, -14, 0],
          rotate: [-3, 3, -3],
        }}
        transition={{
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="hidden md:block absolute top-12 left-8 lg:left-24 w-44 lg:w-56 aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 pointer-events-none z-0"
      >
        <img
          src="/images/smash-burger-hero.jpg"
          alt="Floating Smash Burger"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-nosh-black/80 via-transparent to-black/20" />
      </motion.div>

      {/* 2. Floating Loaded Fries (Bottom Right) */}
      <motion.div
        style={{ x: friesX, y: friesY }}
        animate={{
          y: isHovered ? undefined : [0, 16, 0],
          rotate: [4, -3, 4],
        }}
        transition={{
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="hidden md:block absolute bottom-12 right-8 lg:right-24 w-48 lg:w-60 aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 pointer-events-none z-0"
      >
        <img
          src="/images/loaded-fries.jpg"
          alt="Floating Loaded Fries"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-nosh-black/80 via-transparent to-black/20" />
      </motion.div>

      {/* 3. Floating Crispy Chicken (Top Right) */}
      <motion.div
        style={{ x: chickenX, y: chickenY }}
        animate={{
          y: isHovered ? undefined : [0, -10, 0],
          rotate: [2, -4, 2],
        }}
        transition={{
          y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 6.5, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="hidden lg:block absolute top-16 right-16 w-36 aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 pointer-events-none z-0 opacity-80"
      >
        <img
          src="/images/crispy-chicken.jpg"
          alt="Floating Crispy Chicken"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-nosh-black/70 via-transparent to-black/20" />
      </motion.div>

      {/* Center Content */}
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-nosh-orange/10 border border-nosh-orange/30 text-xs font-black tracking-widest text-nosh-orange uppercase mb-6"
        >
          <Flame className="w-4 h-4 fill-nosh-orange text-nosh-orange" />
          <span>ISLAMABAD’S MIDNIGHT SENSATION</span>
        </motion.div>

        {/* Prompt-Specified Headlines */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-5xl sm:text-7xl md:text-8xl text-nosh-cream uppercase tracking-tight leading-[0.9] mb-4"
        >
          YOUR CRAVING <br />
          <span className="text-stroke-subtle text-transparent hover:text-nosh-orange transition-colors">
            CALLED.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-nosh-orange uppercase tracking-tight mb-10"
        >
          “ANSWER IT.”
        </motion.p>

        {/* ORDER NOW → Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="inline-block"
        >
          <button
            onClick={onOrderClick}
            className="group px-10 sm:px-14 py-5 sm:py-6 rounded-full bg-gradient-to-r from-nosh-orange via-nosh-orange-glow to-nosh-amber hover:from-nosh-orange-glow hover:to-nosh-yellow text-nosh-black font-display font-black text-base sm:text-xl tracking-wider uppercase shadow-glow-orange hover:shadow-glow-orange-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 mx-auto"
          >
            <span>ORDER NOW</span>
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-xs text-nosh-muted uppercase tracking-widest font-bold mt-6"
        >
          Delivery until 3:00 AM • Smashed fresh in G-9/4, Islamabad
        </motion.p>
      </div>
    </section>
  );
};
