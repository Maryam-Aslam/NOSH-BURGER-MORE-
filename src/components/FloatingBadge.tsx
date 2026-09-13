import React from 'react';
import { motion } from 'framer-motion';

interface FloatingBadgeProps {
  label: string;
  sublabel?: string;
  icon: React.ReactNode;
  className?: string;
  delay?: number;
  rotation?: number;
  highlight?: boolean;
}

export const FloatingBadge: React.FC<FloatingBadgeProps> = ({
  label,
  sublabel,
  icon,
  className = '',
  delay = 0,
  rotation = 0,
  highlight = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        scale: 1.08,
        rotate: rotation + (rotation >= 0 ? 2 : -2),
        transition: { duration: 0.2 },
      }}
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`absolute z-20 flex items-center gap-3 px-4 py-2.5 rounded-2xl backdrop-blur-xl transition-shadow cursor-default select-none ${
        highlight
          ? 'bg-gradient-to-r from-nosh-orange/30 to-nosh-amber/20 border border-nosh-orange/50 shadow-glow-orange text-white'
          : 'bg-nosh-dark/85 border border-white/10 shadow-2xl text-nosh-cream hover:border-nosh-orange/40'
      } ${className}`}
    >
      <div
        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
          highlight
            ? 'bg-nosh-orange text-white shadow-md shadow-nosh-orange/50'
            : 'bg-white/10 text-nosh-amber'
        }`}
      >
        {icon}
      </div>
      <div className="flex flex-col text-left">
        <span className="font-display font-black tracking-wider text-xs md:text-sm uppercase leading-tight">
          {label}
        </span>
        {sublabel && (
          <span className="text-[10px] text-nosh-muted tracking-wide font-medium">
            {sublabel}
          </span>
        )}
      </div>
    </motion.div>
  );
};
