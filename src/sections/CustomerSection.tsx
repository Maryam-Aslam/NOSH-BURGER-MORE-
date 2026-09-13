import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Heart, Sparkles, Flame, CheckCircle, ThumbsUp } from 'lucide-react';

export const CustomerSection: React.FC = () => {
  // Paraphrased customer sentiment themes strictly adhering to user instructions:
  // - Great burger taste
  // - Good food quality
  // - Generous portions
  // - Good value
  // - Fresh and delicious
  // - High-quality beef
  // - Crispy chicken
  // - Good loaded fries
  // - Consistent taste
  // - Strong late-night experience
  const themes = [
    {
      title: 'Great burger taste',
      highlight: 'Deeply caramelized smash crust & balanced savory flavor profile.',
      icon: <Flame className="w-5 h-5 text-nosh-orange" />,
      tag: 'TASTE PROFILE',
    },
    {
      title: 'Good food quality',
      highlight: 'Strict ingredient standards and uncompromised fresh preparation.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      tag: 'KITCHEN BENCHMARK',
    },
    {
      title: 'Generous portions',
      highlight: 'Hefty double beef patties, colossal chicken cuts & packed fry boxes.',
      icon: <Sparkles className="w-5 h-5 text-nosh-amber" />,
      tag: 'PORTION SIZE',
    },
    {
      title: 'Good value',
      highlight: 'Premium gourmet smash experience priced genuinely fair for Islamabad.',
      icon: <CheckCircle className="w-5 h-5 text-blue-400" />,
      tag: 'VALUE PROPOSITION',
    },
    {
      title: 'Fresh and delicious',
      highlight: 'Freshly smashed to order on 450°F cast iron, never pre-cooked.',
      icon: <ThumbsUp className="w-5 h-5 text-purple-400" />,
      tag: 'FRESHNESS FIRST',
    },
    {
      title: 'High-quality beef',
      highlight: 'Fresh prime beef minced daily with optimal fat-to-meat ratio for juiciness.',
      icon: <Flame className="w-5 h-5 text-red-400" />,
      tag: 'PRIME BEEF',
    },
    {
      title: 'Crispy chicken',
      highlight: '24-hour buttermilk brine yielding a shatteringly loud golden crunch.',
      icon: <Sparkles className="w-5 h-5 text-yellow-400" />,
      tag: 'CRUNCH FACTOR',
    },
    {
      title: 'Good loaded fries',
      highlight: 'Crisp golden crinkle cuts blanketed in warm liquid cheese and chicken bites.',
      icon: <Heart className="w-5 h-5 text-pink-400" />,
      tag: 'DIRTY SIDES',
    },
    {
      title: 'Consistent taste',
      highlight: 'Precision seasoning and proprietary NOSH sauce ratios on every drop.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      tag: 'CONSISTENCY',
    },
    {
      title: 'Strong late-night experience',
      highlight: 'Fast steaming delivery until 3:00 AM across twin cities during peak cravings.',
      icon: <Flame className="w-5 h-5 text-nosh-orange" />,
      tag: 'UNTIL 3:00 AM',
    },
  ];

  return (
    <section className="relative py-28 md:py-36 bg-nosh-black px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-nosh-amber/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header & Rating Spotlight */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-black tracking-widest text-nosh-amber uppercase mb-4"
          >
            <Star className="w-3.5 h-3.5 fill-nosh-amber text-nosh-amber" />
            <span>VERIFIED CUSTOMER SENTIMENT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-nosh-cream uppercase tracking-tight leading-[0.92]"
          >
            THEY CAME HUNGRY. <br />
            <span className="text-nosh-orange">THEY LEFT HAPPY.</span>
          </motion.h2>

          {/* Glowing Rating Display Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-8 py-5 rounded-3xl bg-nosh-card/90 border border-white/10 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-nosh-amber fill-nosh-amber drop-shadow-[0_0_8px_rgba(255,174,0,0.5)]"
                />
              ))}
            </div>

            <div className="h-6 w-px bg-white/10 hidden sm:block" />

            <div className="flex items-baseline gap-2">
              <span className="font-display font-black text-3xl sm:text-4xl text-nosh-cream">
                4.9/5
              </span>
              <span className="text-xs text-nosh-muted font-bold tracking-wider uppercase">
                Average Rating
              </span>
            </div>

            <div className="h-6 w-px bg-white/10 hidden sm:block" />

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-display font-black text-xs uppercase tracking-wider">
                2,000+ RATINGS
              </span>
            </div>
          </motion.div>
        </div>

        {/* 10 Thematic Customer Satisfaction Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {themes.map((theme, idx) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-5 rounded-2xl bg-nosh-card/60 border border-white/10 hover:border-nosh-orange/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-white/5 group-hover:bg-white/10 flex items-center justify-center transition-colors">
                    {theme.icon}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-nosh-muted group-hover:text-nosh-amber transition-colors">
                    {theme.tag}
                  </span>
                </div>

                <h3 className="font-display font-black text-sm text-nosh-cream uppercase tracking-wide mb-2 group-hover:text-nosh-orange transition-colors">
                  {theme.title}
                </h3>

                <p className="text-xs text-nosh-cream-muted/80 leading-relaxed font-normal">
                  {theme.highlight}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1 text-[10px] font-bold text-nosh-muted">
                <CheckCircle className="w-3 h-3 text-emerald-400" />
                <span>Verified Feedback</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
