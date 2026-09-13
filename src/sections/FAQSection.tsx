import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What are your delivery hours in Islamabad?',
      a: 'We operate daily from 1:00 PM to 3:00 AM late night. Delivery orders after 2:00 AM are serviced by our express fleet.',
    },
    {
      q: 'Which areas do you deliver to?',
      a: 'We deliver across F-6, F-7, F-8, G-9, G-10, E-11, and surrounding sectors within 25–35 minutes.',
    },
    {
      q: 'Are all sauces freshly prepared in-house?',
      a: 'Yes! Every single sauce—from our signature NOSH sauce to our Atomic Ghost Pepper sauce—is crafted daily.',
    },
    {
      q: 'How does late-night delivery work?',
      a: 'You can order directly through this website. Pick Cash on Delivery or Card, and we dispatch right away.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-nosh-black border-t border-white/5 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full scroll-mt-24">
      <div className="text-center mb-12">
        <span className="text-nosh-orange text-xs font-black tracking-widest uppercase bg-nosh-orange/10 px-3 py-1 rounded-full border border-nosh-orange/20">
          CLEAR ANSWERS
        </span>
        <h2 className="font-black text-3xl sm:text-5xl text-nosh-cream uppercase mt-3">
          FREQUENTLY ASKED <span className="text-nosh-orange">QUESTIONS.</span>
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => {
          const isOpen = openIdx === i;
          return (
            <div key={i} className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
              <button
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center text-nosh-cream font-bold text-base sm:text-lg"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-nosh-orange transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-nosh-cream-muted text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-4"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};