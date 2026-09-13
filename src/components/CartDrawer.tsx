import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, CheckCircle2, Clock, MapPin, Sparkles } from 'lucide-react';
import type { MenuItem } from '../data/menuData';

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  const [showDemoConfirmation, setShowDemoConfirmation] = useState(false);
  const [orderId, setOrderId] = useState('');

  // Calculate dynamic subtotal
  const subtotal = items.reduce(
    (sum, ci) => sum + ci.item.price * ci.quantity,
    0
  );

  const formattedCurrency = (amount: number) => {
    return Number.isInteger(amount)
      ? `Rs. ${amount.toLocaleString()}`
      : `Rs. ${amount.toFixed(2)}`;
  };

  const handleStartCheckout = () => {
    const randomOrderNum = Math.floor(1000 + Math.random() * 9000);
    setOrderId(`NOSH-${randomOrderNum}`);
    setShowDemoConfirmation(true);
    onCheckout();
  };

  const handleFinishDemo = () => {
    setShowDemoConfirmation(false);
    onClose();
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            />

            {/* Drawer container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 z-50 h-full w-full max-w-md bg-nosh-dark border-l border-white/10 shadow-2xl flex flex-col"
            >
              {/* Header: YOUR ORDER */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-nosh-black/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-nosh-orange/10 border border-nosh-orange/30 flex items-center justify-center text-nosh-orange">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-xl text-nosh-cream tracking-tight">
                      YOUR ORDER
                    </h3>
                    <p className="text-xs text-nosh-muted">
                      {items.reduce((acc, i) => acc + i.quantity, 0)} items selected
                    </p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-nosh-cream transition-colors"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cart Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-8">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-nosh-muted mb-4">
                      <ShoppingBag className="w-8 h-8 opacity-40" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-nosh-cream mb-1">
                      Your bag is empty!
                    </h4>
                    <p className="text-xs text-nosh-muted max-w-xs mb-6">
                      Add a juicy double smash burger, crispy wings, or loaded tender fries to start.
                    </p>
                    <button
                      onClick={onClose}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-nosh-orange to-nosh-amber text-nosh-black text-xs font-black uppercase tracking-wider shadow-glow-orange hover:scale-105 transition-all"
                    >
                      BROWSE MENU
                    </button>
                  </div>
                ) : (
                  items.map(({ item, quantity }) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex gap-4 p-3.5 rounded-2xl bg-nosh-card/80 border border-white/5 hover:border-white/10 transition-colors"
                    >
                      {/* Product Image */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-xl object-cover shrink-0 border border-white/10 bg-nosh-black"
                      />

                      {/* Info */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="font-display font-bold text-sm text-nosh-cream truncate">
                            {item.name}
                          </h4>
                          {/* Remove Button */}
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-nosh-muted hover:text-red-400 transition-colors p-1"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Price & Quantity Controls */}
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-display font-black text-nosh-amber text-sm">
                            {formattedCurrency(item.price * quantity)}
                          </span>

                          <div className="flex items-center gap-2 bg-white/5 rounded-lg p-1 border border-white/10">
                            <button
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="w-6 h-6 rounded flex items-center justify-center text-xs hover:bg-white/10 transition-colors text-nosh-cream"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold w-4 text-center text-nosh-cream">
                              {quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="w-6 h-6 rounded flex items-center justify-center text-xs hover:bg-white/10 transition-colors text-nosh-cream"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Subtotal Calculation & CHECKOUT Footer */}
              {items.length > 0 && (
                <div className="p-6 border-t border-white/10 bg-nosh-black/80 space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-nosh-cream-muted">
                      <span>Subtotal</span>
                      <span className="font-display font-bold text-nosh-cream">
                        {formattedCurrency(subtotal)}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs text-nosh-muted">
                      <span>Delivery (Islamabad &amp; RWP)</span>
                      <span className="text-emerald-400 font-bold">FREE DROP</span>
                    </div>
                    <div className="h-px bg-white/10 my-2" />
                    <div className="flex justify-between text-base font-black font-display text-nosh-cream">
                      <span>TOTAL</span>
                      <span className="text-nosh-orange text-lg">
                        {formattedCurrency(subtotal)}
                      </span>
                    </div>
                  </div>

                  {/* CHECKOUT BUTTON */}
                  <button
                    onClick={handleStartCheckout}
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-nosh-orange via-nosh-orange-glow to-nosh-amber hover:from-nosh-orange-glow hover:to-nosh-yellow text-nosh-black font-display font-black text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-glow-orange hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <span>CHECKOUT • {formattedCurrency(subtotal)}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Stylish Demo Checkout Confirmation Modal */}
      <AnimatePresence>
        {showDemoConfirmation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleFinishDemo}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg rounded-3xl bg-nosh-card border border-nosh-orange/30 p-6 sm:p-8 shadow-2xl shadow-nosh-orange/20 z-10 text-center"
            >
              {/* Close icon */}
              <button
                onClick={handleFinishDemo}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-nosh-cream transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Animated Success Badge */}
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-emerald-500/10">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-nosh-orange/10 border border-nosh-orange/20 text-[10px] font-black tracking-widest text-nosh-orange uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FRONT-END DEMO ORDER CONFIRMED</span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-nosh-cream uppercase tracking-tight mb-2">
                PATTIES ARE SIZZLING!
              </h3>

              <p className="text-xs sm:text-sm text-nosh-cream-muted max-w-sm mx-auto leading-relaxed mb-6">
                Your late-night smash order <span className="text-nosh-amber font-mono font-bold">{orderId}</span> has been dispatched to the NOSH kitchen in G-9/4, Islamabad.
              </p>

              {/* Order Details Breakdown Card */}
              <div className="rounded-2xl bg-black/50 border border-white/10 p-4 text-left space-y-3 mb-6 text-xs">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-nosh-muted">Order ID</span>
                  <span className="font-mono font-bold text-nosh-cream">{orderId}</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-nosh-muted flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-nosh-orange" /> Estimated Delivery
                  </span>
                  <span className="font-bold text-emerald-400">25–35 Mins</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-nosh-muted flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-nosh-orange" /> Delivery Location
                  </span>
                  <span className="font-bold text-nosh-cream">Islamabad &amp; Rawalpindi</span>
                </div>
                <div className="flex items-center justify-between pt-1 font-bold text-sm">
                  <span className="text-nosh-cream font-display">Total (Demo)</span>
                  <span className="text-nosh-orange font-display text-base">
                    {formattedCurrency(subtotal)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleFinishDemo}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-nosh-orange to-nosh-amber text-nosh-black font-display font-black text-xs uppercase tracking-wider shadow-glow-orange hover:scale-105 active:scale-95 transition-all"
              >
                AWESOME, BACK TO NOSH
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
