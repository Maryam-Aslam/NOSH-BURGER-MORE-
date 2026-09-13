import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Flame, Sparkles, Check } from 'lucide-react';
import type { MenuItem } from '../data/menuData';

interface QuickViewModalProps {
  isOpen: boolean;
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem, quantity: number) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  isOpen,
  item,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  // Reset quantity and added state whenever the selected item changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setQuantity(1);
      setIsAdded(false);
    }
  }, [isOpen, item]);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!item) return null;

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAdd = () => {
    onAddToCart(item, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 600);
  };

  const formattedPrice = (price: number) => {
    return Number.isInteger(price)
      ? `Rs. ${price.toLocaleString()}`
      : `Rs. ${price.toFixed(2)}`;
  };

  const totalPrice = item.price * quantity;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop with rich blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl rounded-[2rem] bg-nosh-card/95 border border-white/15 shadow-2xl shadow-black/80 overflow-hidden z-10 flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-white/20 border border-white/10 flex items-center justify-center text-nosh-cream transition-all hover:scale-105 active:scale-95"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Column: Image Media */}
            <div className="relative md:w-1/2 aspect-video md:aspect-auto min-h-[260px] md:min-h-[420px] bg-nosh-black overflow-hidden flex items-center justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nosh-card via-transparent to-black/30 md:bg-gradient-to-r md:from-transparent md:to-nosh-card/90 pointer-events-none" />

              {/* Tag / Badge */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {item.tag && (
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-nosh-black/80 backdrop-blur-md border border-white/10 text-[11px] font-black uppercase tracking-wider text-nosh-amber">
                    <Sparkles className="w-3.5 h-3.5 text-nosh-amber" />
                    <span>{item.tag}</span>
                  </div>
                )}
                {item.spicyLevel && item.spicyLevel > 1 && (
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 backdrop-blur-md border border-red-500/30 text-[11px] font-black uppercase tracking-wider text-red-400">
                    <Flame className="w-3.5 h-3.5 fill-current" />
                    <span>Level {item.spicyLevel} Heat</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Product Info & Actions */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div className="space-y-4">
                {/* Category & Rating */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black tracking-widest uppercase text-nosh-orange">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-nosh-muted">
                    <span className="text-nosh-amber">★</span>
                    <span>4.9 (2k+ orders)</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-black text-2xl sm:text-3xl text-nosh-cream uppercase tracking-tight leading-tight">
                  {item.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-black text-2xl sm:text-3xl text-nosh-amber">
                    {formattedPrice(item.price)}
                  </span>
                  <span className="text-xs text-nosh-muted uppercase font-bold tracking-wider">
                    Fresh to order
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-nosh-cream-muted leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Ingredients */}
                {item.ingredients && item.ingredients.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <h4 className="text-[11px] font-black uppercase tracking-widest text-nosh-cream">
                      FRESH INGREDIENTS
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {item.ingredients.map((ing) => (
                        <span
                          key={ing}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-medium text-nosh-cream-muted"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Controls */}
              <div className="pt-6 mt-6 border-t border-white/10 space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-black uppercase tracking-widest text-nosh-cream">
                    QUANTITY
                  </span>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-1.5">
                    <button
                      onClick={handleDecrement}
                      disabled={quantity <= 1}
                      className="w-8 h-8 rounded-xl bg-white/5 hover:bg-white/15 disabled:opacity-30 disabled:hover:bg-transparent flex items-center justify-center text-nosh-cream transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-display font-black text-base text-nosh-cream">
                      {quantity}
                    </span>
                    <button
                      onClick={handleIncrement}
                      className="w-8 h-8 rounded-xl bg-white/5 hover:bg-white/15 flex items-center justify-center text-nosh-cream transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Add to Cart CTA */}
                <button
                  onClick={handleAdd}
                  disabled={isAdded}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-nosh-orange via-nosh-orange-glow to-nosh-amber hover:from-nosh-orange-glow hover:to-nosh-yellow text-nosh-black font-display font-black text-sm uppercase tracking-wider shadow-glow-orange hover:shadow-glow-orange-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5"
                >
                  {isAdded ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>ADDED TO BAG!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5" />
                      <span>ADD TO CART • {formattedPrice(totalPrice)}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};