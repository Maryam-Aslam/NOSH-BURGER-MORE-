import React from 'react';
import { motion } from 'framer-motion';
import { MENU_CATEGORIES } from '../data/menuData';
import type { MenuCategory } from '../data/menuData';

interface CategoriesSectionProps {
  selectedCategory?: MenuCategory;
  onCategoryChange?: (category: MenuCategory) => void;
  categoryCounts?: Record<string, number>;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  selectedCategory = 'ALL',
  onCategoryChange = () => {},
  categoryCounts = {},
}) => {
  return (
    <div className="w-full flex justify-center overflow-x-auto pb-2 scrollbar-none no-scrollbar">
      <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/[0.04] p-1.5 rounded-2xl border border-white/10 backdrop-blur-xl w-max max-w-full">
        {(MENU_CATEGORIES || []).map((category) => {
          const isActive = selectedCategory === category;
          const count = categoryCounts?.[category] ?? 0;

          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`relative px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-black tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 sm:gap-2 select-none whitespace-nowrap shrink-0 ${
                isActive
                  ? 'text-nosh-black shadow-md'
                  : 'text-nosh-cream-muted hover:text-nosh-cream hover:bg-white/5'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeCategoryPill"
                  className="absolute inset-0 bg-gradient-to-r from-nosh-orange to-nosh-amber rounded-xl shadow-glow-orange"
                  transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                />
              )}
              <span className="relative z-10">{category}</span>
              <span
                className={`relative z-10 px-1.5 py-0.5 rounded text-[10px] font-bold ${
                  isActive
                    ? 'bg-black/20 text-nosh-black'
                    : 'bg-white/10 text-nosh-muted'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};