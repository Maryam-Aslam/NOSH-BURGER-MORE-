import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Flame, Plus, Eye, Heart, Sparkles } from 'lucide-react';
import { allMenuItems } from '../data/menuData';
import type { MenuItem } from '../data/menuData';

interface TrendingCarouselProps {
  onAddToCart: (item: MenuItem) => void;
  onQuickView: (item: MenuItem) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export const TrendingCarousel: React.FC<TrendingCarouselProps> = ({
  onAddToCart,
  onQuickView,
  favorites,
  onToggleFavorite,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);
  const dragRef = useRef(false);
  const hasDraggedRef = useRef(false);

  // Exact 6 products required by prompt:
  // - Nosh Signature Tender Fries — Rs. 670
  // - Shroomer Smash Burger — Rs. 680
  // - Peach Iced Tea — Rs. 220
  // - Nosh Zing Burger — Rs. 650
  // - Flamin Zing Burger — Rs. 650
  // - Nosh Smash Burger — Rs. 680
  const trendingProductIds = [
    'nosh-signature-tender-fries',
    'shroomer-smash',
    'peach-iced-tea',
    'nosh-zing-burger',
    'flamin-zing-burger',
    'nosh-smash-signature',
  ];

  const trendingProducts: MenuItem[] = trendingProductIds
    .map((id) => allMenuItems.find((item) => item.id === id))
    .filter(Boolean) as MenuItem[];

  const checkScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [checkScroll]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 360; // Card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    dragRef.current = true;
    hasDraggedRef.current = false;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftStart(scrollContainerRef.current.scrollLeft);
    e.preventDefault();
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!dragRef.current || !scrollContainerRef.current) return;
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) hasDraggedRef.current = true;
    scrollContainerRef.current.scrollLeft = scrollLeftStart - walk;
  }, [startX, scrollLeftStart]);

  const handleMouseUp = useCallback(() => {
    dragRef.current = false;
    setIsDragging(false);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  // Touch drag handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    dragRef.current = true;
    hasDraggedRef.current = false;
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftStart(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!dragRef.current || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    if (Math.abs(walk) > 5) hasDraggedRef.current = true;
    scrollContainerRef.current.scrollLeft = scrollLeftStart - walk;
  };

  const handleTouchEnd = () => {
    dragRef.current = false;
  };

  return (
    <section
      id="popular"
      className="relative py-24 md:py-32 bg-nosh-dark/90 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full bg-nosh-orange/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header with Title and Left/Right Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-nosh-orange/10 border border-nosh-orange/20 text-xs font-black tracking-widest text-nosh-orange uppercase mb-3"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>COMMUNITY FAVORITES</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-nosh-cream uppercase tracking-tight"
            >
              THE ONES <span className="text-nosh-orange">EVERYONE WANTS.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-3 text-sm sm:text-base text-nosh-cream-muted max-w-lg leading-relaxed"
            >
              Islamabad's most-ordered smash patties, dirty loaded sides, and thirst-quenching iced teas.{' '}
              <span className="text-nosh-orange/70">Drag or use arrows to explore.</span>
            </motion.p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-white/5 border border-white/10 flex items-center justify-center text-nosh-cream transition-all hover:scale-105 active:scale-95 shadow-lg"
              aria-label="Previous trending items"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-nosh-orange hover:text-nosh-black disabled:opacity-30 disabled:hover:bg-white/5 disabled:hover:text-nosh-cream border border-white/10 flex items-center justify-center text-nosh-cream transition-all hover:scale-105 active:scale-95 shadow-lg"
              aria-label="Next trending items"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Horizontal Draggable / Snap-Scrolling Container */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className={`flex gap-6 overflow-x-auto pb-8 pt-2 no-scrollbar snap-x snap-mandatory select-none ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
        >
          {trendingProducts.map((item, index) => {
            const isFav = favorites.includes(item.id);
            const formattedPrice = Number.isInteger(item.price)
              ? `Rs. ${item.price.toLocaleString()}`
              : `Rs. ${item.price.toFixed(2)}`;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="snap-start shrink-0 w-[290px] sm:w-[330px] rounded-3xl bg-nosh-card/90 border border-white/10 hover:border-nosh-orange/50 p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-nosh-orange/15 group relative overflow-hidden"
              >
                {/* Image Media with Zoom */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-4 bg-nosh-black border border-white/5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nosh-black/80 via-transparent to-black/30 pointer-events-none" />

                  {/* Rank Badge */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-3 py-1 rounded-xl bg-nosh-black/85 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-wider text-nosh-amber">
                    <Flame className="w-3 h-3 text-nosh-orange fill-nosh-orange" />
                    <span>RANK #{index + 1}</span>
                  </div>

                  {/* Favorite Button */}
                  <button
                    onMouseDown={(e) => e.stopPropagation()}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!hasDraggedRef.current) onToggleFavorite(item.id);
                    }}
                    className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center transition-all ${
                      isFav
                        ? 'bg-red-500/20 text-red-500 border border-red-500/40'
                        : 'bg-nosh-black/70 text-nosh-cream-muted border border-white/10 hover:text-white hover:scale-105'
                    }`}
                    aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
                  >
                    <Heart className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
                  </button>

                  {/* Quick View Button Hover Trigger */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <button
                      onMouseDown={(e) => e.stopPropagation()}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!hasDraggedRef.current) onQuickView(item);
                      }}
                      className="pointer-events-auto px-4 py-2 rounded-full bg-nosh-black/90 hover:bg-nosh-orange text-nosh-cream hover:text-nosh-black border border-white/20 text-xs font-display font-black tracking-wider uppercase backdrop-blur-md flex items-center gap-1.5 shadow-xl transition-all hover:scale-105"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>QUICK VIEW</span>
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-nosh-orange uppercase tracking-widest block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-display font-black text-lg text-nosh-cream uppercase tracking-tight group-hover:text-nosh-orange transition-colors line-clamp-1 mb-1.5">
                      {item.name}
                    </h3>
                    <p className="text-xs text-nosh-cream-muted line-clamp-2 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Price & Add to Cart */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/10 gap-2">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-nosh-muted tracking-wider uppercase">
                        PRICE
                      </span>
                      <span className="font-display font-black text-lg text-nosh-amber">
                        {formattedPrice}
                      </span>
                    </div>

                    <button
                      onMouseDown={(e) => e.stopPropagation()}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!hasDraggedRef.current) onAddToCart(item);
                      }}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-nosh-orange to-nosh-amber hover:from-nosh-orange-glow hover:to-nosh-yellow text-nosh-black font-display font-black text-xs uppercase tracking-wider shadow-sm hover:shadow-glow-orange flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>ADD</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Drag hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-[11px] font-bold tracking-widest text-nosh-muted uppercase mt-2"
        >
          ← DRAG TO EXPLORE →
        </motion.p>
      </div>
    </section>
  );
};
