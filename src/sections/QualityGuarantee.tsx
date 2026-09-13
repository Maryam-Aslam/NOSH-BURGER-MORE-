import React from 'react';
import { Flame, PackageCheck, Bike } from 'lucide-react';

export const QualityGuarantee: React.FC = () => {
  const guarantees = [
    {
      icon: Flame,
      title: 'Smashed Live at 450°F',
      desc: '100% fresh beef, smashed hard on high heat to achieve our signature ultra-crispy lace edges.',
    },
    {
      icon: PackageCheck,
      title: 'Thermal Vent Packaging',
      desc: 'Custom engineered boxes release steam so your burgers and fries stay shatter-crisp during delivery.',
    },
    {
      icon: Bike,
      title: '30-Min Express Delivery',
      desc: 'Dedicated late-night fleet delivering piping hot orders across F-6, F-7, G-9, and nearby sectors.',
    },
  ];

  return (
    <section className="py-20 bg-nosh-black border-t border-white/5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {guarantees.map((g, idx) => (
          <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-start">
            <div className="p-3.5 rounded-2xl bg-nosh-orange/10 text-nosh-orange border border-nosh-orange/20 mb-5">
              <g.icon className="w-6 h-6" />
            </div>
            <h3 className="font-black text-xl text-nosh-cream uppercase tracking-tight mb-2">
              {g.title}
            </h3>
            <p className="text-nosh-cream-muted text-xs leading-relaxed">
              {g.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};