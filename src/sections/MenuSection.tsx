import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Search, Heart, Filter, X } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { CategoriesSection } from './CategoriesSection';
import { allMenuItems, MENU_CATEGORIES } from '../data/menuData';
import type { MenuItem, MenuCategory } from '../data/menuData';

interface MenuSectionProps {
  selectedCategory?: MenuCategory;
  onCategoryChange?: (category: MenuCategory) => void;
  onAddToCart?: (item: MenuItem) => void;
  onQuickView?: (item: MenuItem) => void;
  favorites?: string[];
  onToggleFavorite?: (id: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  selectedCategory = 'ALL',
  onCategoryChange,
  onAddToCart = () => {},
  onQuickView = () => {},
  favorites = [],
  onToggleFavorite = () => {},
}) => {
  const [internalCategory, setInternalCategory] = useState<MenuCategory>(selectedCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSpicyOnly, setShowSpicyOnly] = useState(false);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  // Sync category if controlled externally
  const currentCategory = onCategoryChange ? selectedCategory : internalCategory;

  const handleCategorySelect = (cat: MenuCategory) => {
    if (onCategoryChange) {
      onCategoryChange(cat);
    } else {
      setInternalCategory(cat);
    }
  };

  // Safe items fallback
  const menuItems = allMenuItems || [];

  // Filtered items based on category, search, and modifiers
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category filter
      if (currentCategory !== 'ALL' && item.category !== currentCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name?.toLowerCase().includes(query);
        const matchesDesc = item.description?.toLowerCase().includes(query);
        const matchesIngredients = item.ingredients?.some((ing) =>
          ing.toLowerCase().includes(query)
        );
        if (!matchesName && !matchesDesc && !matchesIngredients) {
          return false;
        }
      }

      // Spicy only filter
      if (showSpicyOnly && (!item.spicyLevel || item.spicyLevel < 2)) {
        return false;
      }

      // Favorites only filter
      const safeFavorites = favorites || [];
      if (showFavoritesOnly && !safeFavorites.includes(item.id)) {
        return false;
      }

      return true;
    });
  }, [currentCategory, searchQuery, showSpicyOnly, showFavoritesOnly, favorites, menuItems]);

  // Counts per category for badge indicators
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { ALL: menuItems.length };
    (MENU_CATEGORIES || []).forEach((cat) => {
      if (cat !== 'ALL') {
        counts[cat] = menuItems.filter((item) => item.category === cat).length;
      }
    });
    return counts;
  }, [menuItems]);

  const safeFavorites = favorites || [];

  return (
    <section
      id="menu"
      className="relative py-12 sm:py-20 md:py-28 lg:py-32 bg-nosh-black px-2 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-nosh-orange/5 blur-[80px] sm:blur-[120px] md:blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-nosh-amber/5 blur-[60px] sm:blur-[100px] md:blur-[120px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-nosh-orange/10 border border-nosh-orange/20 text-[10px] sm:text-xs font-black tracking-widest text-nosh-orange uppercase mb-3 sm:mb-4"
        >
          <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
          <span>FULL CRAVINGS MENU</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-nosh-cream uppercase tracking-tight leading-[0.95]"
        >
          ORDER FRESH. <span className="text-nosh-orange">SMASH HARD.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-3 sm:mt-4 text-xs sm:text-base text-nosh-cream-muted max-w-xl mx-auto leading-relaxed px-2"
        >
          Smashed fresh on screamin' hot iron, seasoned with proprietary NOSH spices, and served with golden sides &amp; handcrafted sauces.
        </motion.p>
      </div>

      {/* Controls Container: Tabs & Search/Filter Bar */}
      <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
        {/* Category Tabs Section */}
        <CategoriesSection
          selectedCategory={currentCategory}
          onCategoryChange={handleCategorySelect}
          categoryCounts={categoryCounts}
        />

        {/* Search & Modifiers Row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 pt-2">
          {/* Search Input */}
          <div className="relative w-full sm:w-72 md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-nosh-muted pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search burgers, dips, fries..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-nosh-cream placeholder:text-nosh-muted focus:outline-none focus:border-nosh-orange/60 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-nosh-muted hover:text-white p-1 rounded-md"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick Modifier Badges */}
          <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowSpicyOnly(!showSpicyOnly)}
                className={`px-3 py-2 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all border whitespace-nowrap shrink-0 ${
                  showSpicyOnly
                    ? 'bg-red-500/20 text-red-400 border-red-500/40 shadow-sm'
                    : 'bg-white/5 text-nosh-muted border-white/10 hover:text-nosh-cream'
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                <span>SPICY ONLY</span>
              </button>

              <button
                onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                className={`px-3 py-2 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all border whitespace-nowrap shrink-0 ${
                  showFavoritesOnly
                    ? 'bg-red-500/20 text-red-400 border-red-500/40 shadow-sm'
                    : 'bg-white/5 text-nosh-muted border-white/10 hover:text-nosh-cream'
                }`}
              >
                <Heart
                  className={`w-3.5 h-3.5 ${
                    showFavoritesOnly ? 'fill-current text-red-500' : ''
                  }`}
                />
                <span>FAVORITES ({safeFavorites.length})</span>
              </button>
            </div>

            <div className="text-[11px] sm:text-xs text-nosh-muted pl-2 shrink-0">
              Showing <span className="text-nosh-cream font-bold">{filteredItems.length}</span> items
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Product Cards: 2 Columns on Phone (grid-cols-2) */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-6 min-h-[360px]"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              <ProductCard
                item={item}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
                isFavorite={safeFavorites.includes(item.id)}
                onToggleFavorite={onToggleFavorite}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12 sm:py-20 px-4 rounded-3xl bg-white/[0.02] border border-white/10 max-w-lg mx-auto my-6"
        >
          <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-white/5 flex items-center justify-center text-nosh-muted mx-auto mb-4">
            <Filter className="w-6 sm:w-8 h-6 sm:h-8 opacity-40" />
          </div>
          <h3 className="font-display font-bold text-lg sm:text-xl text-nosh-cream mb-2">
            No cravings match your filters
          </h3>
          <p className="text-xs text-nosh-cream-muted mb-6 max-w-xs sm:max-w-none mx-auto">
            Try resetting your search term, switching categories, or clearing active filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setShowSpicyOnly(false);
              setShowFavoritesOnly(false);
              handleCategorySelect('ALL');
            }}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-nosh-orange to-nosh-amber text-nosh-black font-display font-black text-xs uppercase tracking-wider shadow-glow-orange active:scale-95 transition-transform"
          >
            Reset Filters
          </button>
        </motion.div>
      )}
    </section>
  );
};