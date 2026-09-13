import React from 'react';
import { Flame } from 'lucide-react';

interface MarqueeProps {
  text?: string;
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({ className = '' }) => {
  const marqueeItems = [
    'NOSH',
    'SMASH BURGERS',
    'CRISPY CHICKEN',
    'LOADED FRIES',
    'LATE NIGHT',
    'OPEN UNTIL 3AM',
    'ISLAMABAD',
  ];

  return (
    <div
      className={`relative w-full overflow-hidden py-4 md:py-6 bg-nosh-charcoal/90 border-y border-white/10 select-none z-10 ${className}`}
    >
      {/* Subtle edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-nosh-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-nosh-black to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee-infinite flex items-center">
        {/* Render twice for seamless continuous loop */}
        {[0, 1].map((copyIndex) => (
          <div
            key={copyIndex}
            className="flex items-center gap-6 md:gap-10 shrink-0 pr-6 md:pr-10"
          >
            {marqueeItems.map((item, idx) => (
              <div key={`${copyIndex}-${idx}`} className="flex items-center gap-6 md:gap-10">
                <span
                  className={`font-display font-black tracking-tight text-xl md:text-3xl uppercase whitespace-nowrap transition-colors duration-300 ${
                    item === 'NOSH'
                      ? 'text-nosh-orange font-black'
                      : idx % 2 === 0
                      ? 'text-nosh-cream'
                      : 'text-stroke-subtle text-transparent hover:text-nosh-amber'
                  }`}
                >
                  {item}
                </span>

                <span className="flex items-center justify-center text-nosh-amber/70">
                  <Flame className="w-4 h-4 md:w-5 md:h-5 fill-nosh-amber/40" />
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
