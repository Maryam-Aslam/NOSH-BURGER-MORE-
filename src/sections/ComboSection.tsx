import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Check, ShoppingBag, Sparkles } from 'lucide-react';
import type { MenuItem } from '../data/menuData';

interface ComboSectionProps {
  onAddToCart?: (item: MenuItem, quantity?: number) => void;
}

interface ComboOption {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'burger' | 'side' | 'drink';
}

const BURGERS: ComboOption[] = [
  { id: 'c-smash', name: 'Nosh Smash', price: 680, category: 'burger', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400' },
  { id: 'c-zing', name: 'Nosh Zing', price: 650, category: 'burger', image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&q=80&w=400' },
];

const SIDES: ComboOption[] = [
  { id: 'c-fries', name: 'Tender Fries', price: 250, category: 'side', image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&q=80&w=400' },
  { id: 'c-rings', name: 'Onion Rings', price: 280, category: 'side', image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&q=80&w=400' },
];

const DRINKS: ComboOption[] = [
  { id: 'c-cola', name: 'Chilled Cola', price: 120, category: 'drink', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400' },
  { id: 'c-shake', name: 'Monster Shake', price: 350, category: 'drink', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=400' },
];

export const ComboSection: React.FC<ComboSectionProps> = ({ onAddToCart }) => {
  const [selectedBurger, setSelectedBurger] = useState<ComboOption>(BURGERS[0]);
  const [selectedSide, setSelectedSide] = useState<ComboOption>(SIDES[0]);
  const [selectedDrink, setSelectedDrink] = useState<ComboOption>(DRINKS[0]);

  // Calculate total combo price with a 15% discount for combo build
  const rawTotal = selectedBurger.price + selectedSide.price + selectedDrink.price;
  const comboPrice = Math.round(rawTotal * 0.85);

  const handleAddComboToCart = () => {
    const customComboItem: MenuItem = {
      id: `combo-${Date.now()}`,
      name: `COMBO: ${selectedBurger.name} + ${selectedSide.name}`,
      price: comboPrice,
      category: 'Burgers',
      image: selectedBurger.image,
      description: `Custom Combo includes ${selectedBurger.name}, ${selectedSide.name}, and ${selectedDrink.name}.`,
      badge: 'SAVER COMBO',
    };

    if (onAddToCart) {
      onAddToCart(customComboItem, 1);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 text-nosh-orange text-xs font-black uppercase tracking-widest mb-2">
            <Sparkles className="w-4 h-4" />
            <span>BUILD & SAVE 15%</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-nosh-cream uppercase tracking-tight">
            THE NOSH COMBO BOX
          </h2>
        </div>
        
        {/* Social Share / Instagram Icon Replacement */}
        <div className="flex items-center gap-2 text-nosh-cream-muted text-xs font-bold">
          <span>TAG US YOUR COMBO</span>
          <svg
            className="w-5 h-5 text-nosh-orange"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Step Selection Grid */}
        <div className="lg:col-span-2 space-y-8">
          {/* Step 1: Burger */}
          <div>
            <h3 className="text-sm font-black text-nosh-amber uppercase tracking-wider mb-3">
              1. CHOOSE YOUR MAIN
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {BURGERS.map((burger) => (
                <button
                  key={burger.id}
                  onClick={() => setSelectedBurger(burger)}
                  className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                    selectedBurger.id === burger.id
                      ? 'border-nosh-orange bg-nosh-orange/10'
                      : 'border-white/10 bg-white/5 hover:border-white/20'
                  }`}
                >
                  <img src={burger.image} alt={burger.name} className="w-12 h-12 rounded-xl object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm text-nosh-cream truncate">{burger.name}</p>
                    <p className="text-xs text-nosh-cream-muted">Rs. {burger.price}</p>
                  </div>
                  {selectedBurger.id === burger.id && <Check className="w-4 h-4 text-nosh-orange shrink-0" />}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Side */}
          <div>
            <h3 className="text-sm font-black text-nosh-amber uppercase tracking-wider mb-3">
              2. CHOOSE YOUR SIDE
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {SIDES.map((side) => (
                <button
                  key={side.id}
                  onClick={() => setSelectedSide(side)}
                  className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                    selectedSide.id === side.id
                      ? 'border-nosh-orange bg-nosh-orange/10'
                      : 'border-white/10 bg-white/5 hover:border-white/20'
                  }`}
                >
                  <img src={side.image} alt={side.name} className="w-12 h-12 rounded-xl object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm text-nosh-cream truncate">{side.name}</p>
                    <p className="text-xs text-nosh-cream-muted">Rs. {side.price}</p>
                  </div>
                  {selectedSide.id === side.id && <Check className="w-4 h-4 text-nosh-orange shrink-0" />}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Drink */}
          <div>
            <h3 className="text-sm font-black text-nosh-amber uppercase tracking-wider mb-3">
              3. CHOOSE YOUR DRINK
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {DRINKS.map((drink) => (
                <button
                  key={drink.id}
                  onClick={() => setSelectedDrink(drink)}
                  className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                    selectedDrink.id === drink.id
                      ? 'border-nosh-orange bg-nosh-orange/10'
                      : 'border-white/10 bg-white/5 hover:border-white/20'
                  }`}
                >
                  <img src={drink.image} alt={drink.name} className="w-12 h-12 rounded-xl object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm text-nosh-cream truncate">{drink.name}</p>
                    <p className="text-xs text-nosh-cream-muted">Rs. {drink.price}</p>
                  </div>
                  {selectedDrink.id === drink.id && <Check className="w-4 h-4 text-nosh-orange shrink-0" />}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Combo Summary Box */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sticky top-24">
          <h3 className="text-lg font-black text-nosh-cream uppercase mb-4 flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-nosh-orange" />
            YOUR COMBO SUMMARY
          </h3>

          <div className="space-y-3 border-b border-white/10 pb-4 mb-4 text-sm">
            <div className="flex justify-between text-nosh-cream-muted">
              <span>{selectedBurger.name}</span>
              <span>Rs. {selectedBurger.price}</span>
            </div>
            <div className="flex justify-between text-nosh-cream-muted">
              <span>{selectedSide.name}</span>
              <span>Rs. {selectedSide.price}</span>
            </div>
            <div className="flex justify-between text-nosh-cream-muted">
              <span>{selectedDrink.name}</span>
              <span>Rs. {selectedDrink.price}</span>
            </div>
          </div>

          <div className="flex justify-between items-baseline mb-6">
            <div>
              <span className="text-xs text-nosh-cream-muted block line-through">Rs. {rawTotal}</span>
              <span className="text-2xl font-black text-nosh-orange">Rs. {comboPrice}</span>
            </div>
            <span className="bg-nosh-orange/20 text-nosh-orange text-xs font-black px-2.5 py-1 rounded-full uppercase">
              Save 15%
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAddComboToCart}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-nosh-orange to-nosh-amber text-nosh-black font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-glow-orange"
          >
            <Plus className="w-4 h-4" />
            <span>ADD COMBO TO BAG</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};