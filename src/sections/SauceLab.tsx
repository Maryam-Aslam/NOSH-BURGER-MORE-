import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Droplets, Sparkles } from 'lucide-react';

interface Sauce {
  id: string;
  name: string;
  tagline: string;
  description: string;
  heatLevel: string;
  stars: number;
  color: string;
  glowColor: string;
  gradient: string;
  accentBg: string;
  badge: string;
  image: string;
  ingredients: string[];
}

export const SauceLab: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string>('nosh-sauce');

  const sauces: Sauce[] = [
    {
      id: 'nosh-sauce',
      name: 'NOSH SAUCE',
      tagline: 'The Holy Grail Secret Emulsion',
      description:
        'Our iconic house emulsion blended with sweet minced relish, smoked Spanish paprika, Dijon vinegar, and secret spices.',
      heatLevel: 'Tangy & Creamy',
      stars: 1,
      color: '#FF5500',
      glowColor: 'rgba(255, 85, 0, 0.45)',
      gradient: 'from-[#FF5500]/25 via-[#FF8000]/10 to-transparent',
      accentBg: 'bg-[#FF5500]',
      badge: 'HOUSE ICON',
      image:
        'https://i.pinimg.com/1200x/0f/54/d9/0f54d97cb1c20b54db512a4687ff05d5.jpg',
      ingredients: ['Smoked Paprika', 'Sweet Relish', 'Secret Crema', 'Toasted Garlic'],
    },
    {
      id: 'jalapeno-sauce',
      name: 'JALAPEÑO SAUCE',
      tagline: 'Charred Green Herb Crema',
      description:
        'Fire-blistered green serranos and pickled jalapeños whipped with lime zest, cilantro, and creamy labneh for a crisp zing.',
      heatLevel: 'Zesty Kick',
      stars: 2,
      color: '#10B981',
      glowColor: 'rgba(16, 185, 129, 0.45)',
      gradient: 'from-[#10B981]/25 via-[#059669]/10 to-transparent',
      accentBg: 'bg-[#10B981]',
      badge: 'ZESTY KICK',
      image:
        'https://i.pinimg.com/1200x/02/cf/70/02cf7036edea628d3d73adf7e021d70d.jpg',
      ingredients: ['Charred Serranos', 'Lime Zest', 'Pickled Jalapeños', 'Fresh Cilantro'],
    },
    {
      id: 'atomic-sauce',
      name: 'ATOMIC SAUCE',
      tagline: 'Volcanic Ghost Pepper Heat',
      description:
        'Small-batch ghost pepper & Trinidad scorpion reduction infused with wild honey and roasted chili oil. Serious Islamabad heat.',
      heatLevel: 'Volcanic Fire',
      stars: 3,
      color: '#EF4444',
      glowColor: 'rgba(239, 68, 68, 0.45)',
      gradient: 'from-[#EF4444]/30 via-[#DC2626]/10 to-transparent',
      accentBg: 'bg-[#EF4444]',
      badge: 'EXTREME HEAT',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpFS98i8bfKof92VGqXncakaEqYs2M90Vd_PeYb49_Q&s=10',
      ingredients: ['Ghost Pepper', 'Trinidad Scorpion', 'Wild Honey', 'Roasted Garlic'],
    },
    {
      id: 'bbq-sauce',
      name: 'BBQ SAUCE',
      tagline: 'Hickory Smoked Dark Molasses',
      description:
        'Slow-simmered for 8 hours with blackstrap molasses, charred oak smoke essence, brown sugar, and aged cider vinegar.',
      heatLevel: 'Smoky & Sweet',
      stars: 1,
      color: '#F59E0B',
      glowColor: 'rgba(245, 158, 11, 0.45)',
      gradient: 'from-[#F59E0B]/25 via-[#D97706]/10 to-transparent',
      accentBg: 'bg-[#F59E0B]',
      badge: 'SLOW SMOKED',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNHOVIyc1NyMo3Pi4650rAx-hQkSRmrL-a53q2fitJAQ&s=10',
      ingredients: ['Hickory Smoke', 'Dark Molasses', 'Cider Glaze', 'Brown Sugar'],
    },
  ];

  const activeSauce = sauces.find((s) => s.id === hoveredId) || sauces[0];

  return (
    <section className="relative py-28 md:py-36 bg-nosh-black px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Dynamic Background */}
      <motion.div
        key={activeSauce.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 0.6 }}
        style={{
          background: `radial-gradient(circle at 50% 50%, ${activeSauce.color} 0%, transparent 70%)`,
        }}
        className="absolute inset-0 blur-[140px] pointer-events-none"
      />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-black tracking-widest text-nosh-amber uppercase mb-3"
        >
          <Droplets className="w-3.5 h-3.5 text-nosh-orange" />
          <span>FLAVOR LABORATORY</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-nosh-cream uppercase tracking-tight leading-[0.95]"
        >
          THE SAUCE <span className="text-nosh-orange">MAKES IT.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-nosh-cream-muted max-w-lg mx-auto"
        >
          Crafted in-house daily. Each drip engineered to complement the smash crust.
        </motion.p>
      </div>

      {/* Interactive Expandable Sauce Cards */}
      <div className="flex flex-col lg:flex-row gap-5 relative z-10 min-h-[560px]">
        {sauces.map((sauce) => {
          const isHovered = hoveredId === sauce.id;

          return (
            <motion.div
              key={sauce.id}
              layout
              onMouseEnter={() => setHoveredId(sauce.id)}
              onClick={() => setHoveredId(sauce.id)}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{
                borderColor: isHovered ? sauce.color : 'rgba(255, 255, 255, 0.1)',
                boxShadow: isHovered ? `0 25px 60px -12px ${sauce.glowColor}` : 'none',
              }}
              className={`relative rounded-3xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between cursor-pointer border transition-colors duration-500 ${
                isHovered
                  ? 'lg:flex-[2.8] bg-nosh-card'
                  : 'lg:flex-1 bg-nosh-card/60 hover:bg-nosh-card/90'
              }`}
            >
              {/* Card background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${sauce.gradient} opacity-80 pointer-events-none`}
              />

              {/* Top Row: Icon + Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <div
                  style={{ backgroundColor: sauce.color }}
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-black font-black shadow-lg"
                >
                  <Droplets className="w-6 h-6 fill-black" />
                </div>

                <div className="flex items-center gap-2">
                  <span
                    style={{ color: sauce.color, borderColor: `${sauce.color}40` }}
                    className="px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase border bg-black/40 backdrop-blur-md"
                  >
                    {sauce.badge}
                  </span>
                </div>
              </div>

              {/* High-Impact Hero Sauce Image Container */}
              <div className="relative z-10 my-4 flex items-center justify-center min-h-[220px] sm:min-h-[260px]">
                <AnimatePresence mode="wait">
                  {isHovered ? (
                    <motion.div
                      key={`active-img-${sauce.id}`}
                      initial={{ scale: 0.7, opacity: 0, rotate: -8 }}
                      animate={{ scale: 1, opacity: 1, rotate: -2 }}
                      exit={{ scale: 0.7, opacity: 0, rotate: 5 }}
                      transition={{ duration: 0.45, type: 'spring', damping: 18 }}
                      className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center group"
                    >
                      {/* Concentric Glow Rings */}
                      <div
                        style={{ backgroundColor: sauce.color }}
                        className="absolute inset-2 rounded-3xl blur-2xl opacity-50 animate-pulse"
                      />
                      <div
                        style={{ borderColor: sauce.color }}
                        className="absolute -inset-3 rounded-[32px] border border-dashed opacity-30 animate-[spin_20s_linear_infinite]"
                      />

                      {/* Floating Decorative Particle Dots */}
                      <span
                        style={{ backgroundColor: sauce.color }}
                        className="absolute -top-3 -right-2 w-4 h-4 rounded-full blur-[0.5px] shadow-lg animate-bounce"
                      />
                      <span
                        style={{ backgroundColor: sauce.color }}
                        className="absolute -bottom-2 -left-3 w-5 h-5 rounded-full blur-[0.5px] shadow-lg"
                      />
                      <Sparkles
                        style={{ color: sauce.color }}
                        className="absolute -top-2 left-2 w-5 h-5 animate-pulse"
                      />

                      {/* Frame + Main Image */}
                      <div className="w-full h-full p-2.5 rounded-[28px] bg-black/40 backdrop-blur-md border border-white/20 shadow-2xl relative z-10">
                        <motion.img
                          src={sauce.image}
                          alt={sauce.name}
                          animate={{ y: [0, -8, 0], rotate: [-2, 1, -2] }}
                          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                          className="w-full h-full object-cover rounded-[20px] border shadow-inner"
                          style={{ borderColor: `${sauce.color}60` }}
                        />
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`idle-img-${sauce.id}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl p-1.5 bg-black/40 border border-white/10 opacity-60 grayscale hover:grayscale-0 transition-all duration-300"
                    >
                      <img
                        src={sauce.image}
                        alt={sauce.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Content: Name + Expandable Description */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <h3
                    style={{ color: isHovered ? sauce.color : '#FAF6EE' }}
                    className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight transition-colors"
                  >
                    {sauce.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    {[...Array(3)].map((_, i) => (
                      <Flame
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < sauce.stars ? 'fill-current' : 'opacity-20'
                        }`}
                        style={{ color: i < sauce.stars ? sauce.color : '#888' }}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-xs font-semibold uppercase tracking-wider text-nosh-muted mb-3">
                  {sauce.tagline}
                </p>

                {/* Description and ingredients reveal when card expands */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden space-y-4 pt-2 border-t border-white/10"
                    >
                      <p className="text-xs sm:text-sm text-nosh-cream-muted leading-relaxed">
                        {sauce.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {sauce.ingredients.map((ing) => (
                          <span
                            key={ing}
                            className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-nosh-cream uppercase"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};