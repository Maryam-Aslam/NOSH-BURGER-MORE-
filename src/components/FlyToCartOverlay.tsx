import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { MenuItem } from '../data/menuData';

export interface FlyingItem {
  id: string;
  item: MenuItem;
}

interface FlyToCartOverlayProps {
  flyingItems: FlyingItem[];
}

export const FlyToCartOverlay: React.FC<FlyToCartOverlayProps> = ({ flyingItems }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      <AnimatePresence>
        {flyingItems.map(({ id, item }) => (
          <motion.div
            key={id}
            initial={{
              opacity: 1,
              scale: 0.6,
              x: '50vw',
              y: '60vh',
            }}
            animate={{
              opacity: [1, 1, 0],
              scale: [0.6, 1.1, 0.2],
              x: ['50vw', '75vw', 'calc(100vw - 60px)'],
              y: ['60vh', '25vh', '25px'],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute flex items-center gap-2 p-2 rounded-2xl bg-nosh-black/90 border border-nosh-orange/60 shadow-glow-orange backdrop-blur-md"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-10 h-10 rounded-xl object-cover border border-white/20"
            />
            <div className="pr-2">
              <p className="font-display font-black text-[11px] text-nosh-cream whitespace-nowrap">
                +1 {item.name}
              </p>
              <p className="text-[9px] font-bold text-nosh-amber">
                FLYING TO BAG
              </p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
