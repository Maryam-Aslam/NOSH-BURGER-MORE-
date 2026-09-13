import React, { useState, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../sections/Hero';
import { Marquee } from '../components/Marquee';
import { SignatureBurger } from '../sections/SignatureBurger';
import { SauceLab } from '../sections/SauceLab';
import { MenuSection } from '../sections/MenuSection';
import { ComboSection } from '../sections/ComboSection';
import { QualityGuarantee } from '../sections/QualityGuarantee';
import { TrendingCarousel } from '../sections/TrendingCarousel';
import { LateNightSection } from '../sections/LateNightSection';
import { CustomerSection } from '../sections/CustomerSection';
import { FAQSection } from '../sections/FAQSection';
import { ContactSection } from '../sections/ContactSection';
import { FinalCTA } from '../sections/FinalCTA';
import { CartDrawer } from '../components/CartDrawer';
import type { CartItem } from '../components/CartDrawer';
import { QuickViewModal } from '../components/QuickViewModal';
import { FlyToCartOverlay } from '../components/FlyToCartOverlay';
import type { FlyingItem } from '../components/FlyToCartOverlay';
import { Footer } from '../components/Footer';
import { menuItems } from '../data/menuData';
import type { MenuItem, MenuCategory } from '../data/menuData';

export const HomePage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      item: menuItems[0], // NOSH SMASH (Rs. 680) initially in bag
      quantity: 1,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('ALL');
  const [quickViewItem, setQuickViewItem] = useState<MenuItem | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([
    'nosh-smash-signature',
    'nosh-zing-burger',
    'nosh-signature-tender-fries',
  ]);
  const [flyingItems, setFlyingItems] = useState<FlyingItem[]>([]);

  // Total cart count
  const cartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 65,
      origin: { y: 0.8 },
      colors: ['#FF5500', '#FFAE00', '#FFFFFF', '#FFC837'],
    });
  };

  const triggerFlyAnimation = useCallback((item: MenuItem) => {
    const flyId = `fly-${Date.now()}-${Math.random()}`;
    const newFly: FlyingItem = { id: flyId, item };
    setFlyingItems((prev) => [...prev, newFly]);
    setTimeout(() => {
      setFlyingItems((prev) => prev.filter((f) => f.id !== flyId));
    }, 900);
  }, []);

  const handleAddToCart = useCallback((item: MenuItem, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id
            ? { ...ci, quantity: ci.quantity + quantity }
            : ci
        );
      }
      return [...prev, { item, quantity }];
    });

    triggerFlyAnimation(item);
    triggerConfetti();

    setTimeout(() => setIsCartOpen(true), 600);
  }, [triggerFlyAnimation]);

  const handleQuickView = (item: MenuItem) => {
    setQuickViewItem(item);
    setIsQuickViewOpen(true);
  };

  const handleToggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((ci) => {
          if (ci.item.id === id) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.item.id !== id));
  };

  const handleOrderClick = () => {
    triggerConfetti();
    setIsCartOpen(true);
  };

  const handleExploreMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCheckout = () => {
    triggerConfetti();
    setIsCartOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-nosh-black text-nosh-cream flex flex-col w-full overflow-x-hidden">
      {/* Subtle Grain Overlay */}
      <div className="bg-grain" />

      {/* Sticky Navbar */}
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOrderClick={handleOrderClick}
      />

      {/* Main Content */}
      <main className="flex-1 w-full" id="home">
        {/* 1. Full-screen Hero */}
        <Hero
          onOrderClick={handleOrderClick}
          onExploreMenu={handleExploreMenu}
        />

        {/* 2. Marquee Ticker */}
        <Marquee />

        {/* 3. Late-Night Section (Swapped to 3rd position) */}
        <LateNightSection onOrderClick={handleOrderClick} />

        {/* 4. Signature Burger Editorial Section (Swapped to 4th position) */}
        <SignatureBurger onAddToCart={(item) => handleAddToCart(item, 1)} />

        {/* 5. Trending / Popular Carousel */}
        <TrendingCarousel
          onAddToCart={(item) => handleAddToCart(item, 1)}
          onQuickView={handleQuickView}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
        />

        {/* 6. Complete Menu Section */}
        <MenuSection
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onAddToCart={(item) => handleAddToCart(item, 1)}
          onQuickView={handleQuickView}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
        />

        {/* 7. Combo Section */}
        <ComboSection onAddToCart={handleAddToCart} />

        {/* 8. Quality Guarantee */}
        <QualityGuarantee />

        {/* 9. Interactive Sauce Lab */}
        <SauceLab />

        {/* 10. Customer Reviews */}
        <CustomerSection />

        {/* 11. FAQ Section */}
        <FAQSection />

        {/* 12. Contact & Location */}
        <ContactSection onOrderClick={handleOrderClick} />

        {/* 13. Final CTA */}
        <FinalCTA onOrderClick={handleOrderClick} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Drawers & Modals */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      <QuickViewModal
        isOpen={isQuickViewOpen}
        item={quickViewItem}
        onClose={() => setIsQuickViewOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <FlyToCartOverlay flyingItems={flyingItems} />

      {/* Mobile Bottom Order CTA */}
      <AnimatePresence>
        {!isCartOpen && !isQuickViewOpen && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-30 sm:hidden px-4 pb-4 pt-2 bg-gradient-to-t from-nosh-black via-nosh-black/95 to-transparent"
          >
            <button
              onClick={handleOrderClick}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-nosh-orange via-nosh-orange-glow to-nosh-amber text-nosh-black font-display font-black text-sm tracking-wider uppercase shadow-glow-orange hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span>ORDER NOW</span>
              <ArrowRight className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="ml-1 px-2 py-0.5 rounded-full bg-nosh-black/30 text-xs font-black">
                  {cartCount} in bag
                </span>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};