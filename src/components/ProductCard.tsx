import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye, Plus, Flame } from 'lucide-react';
import type { MenuItem } from '../data/menuData';

interface ProductCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
  onQuickView: (item: MenuItem) => void;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  item,
  onAddToCart,
  onQuickView,
  isFavorite = false,
  onToggleFavorite,
}) => {
  const formattedPrice = Number.isInteger(item.price)
    ? `Rs. ${item.price.toLocaleString()}`
    : `Rs. ${item.price.toFixed(2)}`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-3xl bg-nosh-card/85 border border-white/10 hover:border-nosh-orange/50 p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-nosh-orange/15 overflow-hidden"
    >
      {/* Top Media Container */}
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-4 bg-nosh-black/60 border border-white/5">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-nosh-black/80 via-transparent to-black/30 pointer-events-none" />

        {/* Tag Badge */}
        {item.tag && (
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-nosh-black/80 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-wider text-nosh-amber">
            {item.spicyLevel && item.spicyLevel > 1 && (
              <Flame className="w-3 h-3 text-nosh-orange fill-nosh-orange" />
            )}
            <span>{item.tag}</span>
          </div>
        )}

        {/* Heart / Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite?.(item.id);
          }}
          className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 ${
            isFavorite
              ? 'bg-red-500/20 text-red-500 border border-red-500/40 scale-110 shadow-lg'
              : 'bg-nosh-black/70 text-nosh-cream-muted border border-white/10 hover:text-white hover:scale-105'
          }`}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <motion.div
            key={isFavorite ? 'liked' : 'unliked'}
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            <Heart
              className={`w-4 h-4 ${isFavorite ? 'fill-current text-red-500' : ''}`}
            />
          </motion.div>
        </button>

        {/* Quick View Floating Hover Button (Desktop) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <button
            onClick={() => onQuickView(item)}
            className="pointer-events-auto px-4 py-2 rounded-full bg-nosh-black/90 hover:bg-nosh-orange text-nosh-cream hover:text-nosh-black border border-white/20 text-xs font-display font-black tracking-wider uppercase backdrop-blur-md flex items-center gap-1.5 shadow-xl transition-all hover:scale-105"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>QUICK VIEW</span>
          </button>
        </div>
      </div>

      {/* Info & Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="font-display font-black text-base sm:text-lg text-nosh-cream uppercase tracking-tight group-hover:text-nosh-orange transition-colors line-clamp-1">
              {item.name}
            </h3>
          </div>

          <p className="text-xs text-nosh-cream-muted line-clamp-2 leading-relaxed mb-4">
            {item.description}
          </p>
        </div>

        {/* Price & Action Row */}
        <div className="flex items-center justify-between pt-3 border-t border-white/10 gap-2">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-nosh-muted tracking-wider uppercase">
              PRICE
            </span>
            <span className="font-display font-black text-base sm:text-lg text-nosh-amber leading-tight">
              {formattedPrice}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Quick View Button for Mobile / Small Screens */}
            <button
              onClick={() => onQuickView(item)}
              className="p-2 sm:hidden rounded-xl bg-white/5 border border-white/10 text-nosh-cream hover:bg-white/10"
              aria-label="Quick View"
            >
              <Eye className="w-4 h-4" />
            </button>

            {/* ADD TO CART Button */}
            <button
              onClick={() => onAddToCart(item)}
              className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-gradient-to-r from-nosh-orange to-nosh-amber hover:from-nosh-orange-glow hover:to-nosh-yellow text-nosh-black font-display font-black text-xs uppercase tracking-wider shadow-sm hover:shadow-glow-orange flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>ADD</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
