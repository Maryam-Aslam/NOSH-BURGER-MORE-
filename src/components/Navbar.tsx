import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Flame, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOrderClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOrderClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('HOME');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth Scroll Helper
  const scrollToSection = (href: string, linkName: string) => {
    setActiveLink(linkName);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-nosh-black/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5'
            : 'bg-transparent py-5 md:py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => scrollToSection('#home', 'HOME')}
            className="group flex items-center gap-2.5 focus:outline-none text-left"
            aria-label="NOSH Burgers Homepage"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-nosh-orange to-nosh-amber flex items-center justify-center shadow-glow-orange group-hover:scale-105 transition-transform">
              <Flame className="w-5 h-5 text-nosh-black fill-nosh-black" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-2xl md:text-3xl tracking-tighter text-nosh-cream leading-none">
                  NOSH
                </span>
                <span className="w-2 h-2 rounded-full bg-nosh-orange animate-pulse" />
              </div>
              <span className="font-display text-[9px] md:text-[10px] tracking-[0.2em] font-bold text-nosh-amber uppercase leading-none">
                BURGERS & MORE
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.04] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {siteConfig.navLinks.map((link) => {
              const isActive = activeLink.toUpperCase() === link.name.toUpperCase();
              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href, link.name)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-1.5 ${
                    isActive
                      ? 'text-nosh-cream'
                      : 'text-nosh-muted hover:text-nosh-cream'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                  {link.badge && (
                    <span className="relative z-10 px-1.5 py-0.5 text-[9px] font-black rounded bg-nosh-orange text-white">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions: Cart + ORDER NOW + Mobile Toggle */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Shopping Bag Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-nosh-cream transition-all hover:scale-105 active:scale-95"
              aria-label={`View Cart (${cartCount} items)`}
            >
              <ShoppingBag className="w-5 h-5 text-nosh-cream" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-tr from-nosh-orange to-nosh-amber text-nosh-black font-display font-black text-[11px] rounded-full flex items-center justify-center shadow-glow-orange"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>

            {/* ORDER NOW CTA button */}
            <button
              onClick={onOrderClick}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-nosh-orange to-nosh-amber hover:from-nosh-orange-glow hover:to-nosh-yellow text-nosh-black font-display font-black text-xs md:text-sm tracking-wider uppercase shadow-glow-orange hover:shadow-glow-orange-lg hover:scale-105 active:scale-95 transition-all"
            >
              <span>ORDER NOW</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Animated Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-nosh-cream hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-nosh-cream rounded-full transition-all duration-300 ${
                    mobileMenuOpen
                      ? 'rotate-45 translate-y-1.5 bg-nosh-orange'
                      : ''
                  }`}
                />
                <span
                  className={`w-3/4 h-0.5 bg-nosh-cream rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-nosh-cream rounded-full transition-all duration-300 ${
                    mobileMenuOpen
                      ? '-rotate-45 -translate-y-2 bg-nosh-orange'
                      : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Animated Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[70px] z-30 bg-nosh-black/95 backdrop-blur-2xl border-b border-white/10 lg:hidden flex flex-col p-6 overflow-y-auto"
          >
            {/* Nav links */}
            <div className="flex flex-col gap-4 py-4">
              {siteConfig.navLinks.map((link, idx) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => {
                    scrollToSection(link.href, link.name);
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between py-3 border-b border-white/5 text-lg font-display font-black tracking-wider uppercase text-nosh-cream hover:text-nosh-orange transition-colors text-left"
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="px-2 py-0.5 text-xs font-bold rounded-md bg-nosh-orange text-white">
                      {link.badge}
                    </span>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Order Now CTA */}
            <div className="mt-auto pt-6 space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOrderClick();
                }}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-nosh-orange to-nosh-amber text-nosh-black font-display font-black text-sm tracking-wider uppercase shadow-glow-orange flex items-center justify-center gap-2"
              >
                <span>ORDER NOW</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                <div className="flex items-center justify-center gap-2 text-emerald-400 text-xs font-bold tracking-wider uppercase mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>{siteConfig.hours.display}</span>
                </div>
                <p className="text-[11px] text-nosh-muted">
                  Islamabad late night smash cravings delivered fast.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};