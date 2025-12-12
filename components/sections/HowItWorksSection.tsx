'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Section from '../ui/Section';

const steps = [
  {
    number: '1',
    title: 'Alege',
    description: 'Navighează produsele noastre sau contactează-ne pe WhatsApp pentru personalizare.',
  },
  {
    number: '2',
    title: 'Comandă',
    description: 'Plasează comanda cu minimum 24-48h înainte (torturile raw au nevoie de timp pentru a se stabiliza și a căpăta gustul perfect).',
  },
  {
    number: '3',
    title: 'Savurează',
    description: 'Livrăm la ușa ta, ambalat elegant. Păstrare: frigider 5-7 zile.',
  }
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section bgColor="beige">
      <div ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-light text-chocolate mb-4">
            Simplu. Rapid. Delicios.
          </h2>
          <div className="w-24 h-[2px] bg-rose-gold mx-auto mb-4" />
          <p className="font-quote text-xl text-chocolate/70 italic">
            Trei pași pentru tortul perfect
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Clean Number Circle - NO overlapping icons */}
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-rose-gold to-gold rounded-full flex items-center justify-center shadow-xl mb-4 border-4 border-cream">
                  <span className="font-heading text-4xl font-bold text-deep-chocolate">
                    {step.number}
                  </span>
                </div>

                {/* Connector line on mobile - AFTER circle to avoid overlap */}
                {index < steps.length - 1 && (
                  <div className="md:hidden w-0.5 h-16 bg-rose-gold/30 my-4" />
                )}
              </div>

              {/* Content */}
              <div className="text-center px-4">
                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-chocolate mb-4">
                  {step.title}
                </h3>
                <p className="text-chocolate/70 leading-relaxed text-base md:text-lg">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline line - desktop only - BEHIND circles */}
        <div className="hidden md:block absolute top-[280px] left-1/4 right-1/4 h-0.5 bg-rose-gold/20 -z-10" />

        {/* Additional Premium Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 md:mt-20"
        >
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
            {/* Livrare Card */}
            <div className="bg-gradient-to-br from-white to-champagne rounded-xl p-6 md:p-8 shadow-lg border border-rose-gold/20 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-rose-gold to-gold rounded-lg flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-deep-chocolate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-heading text-base md:text-lg font-semibold text-chocolate mb-1.5">
                    Livrare în București
                  </h4>
                  <p className="text-xs md:text-sm text-chocolate/70 leading-relaxed">
                    Livrare: 25 RON · <span className="font-semibold text-rose-gold">Gratuit</span> peste 200 RON
                  </p>
                </div>
              </div>
            </div>

            {/* Păstrare Card */}
            <div className="bg-gradient-to-br from-white to-champagne rounded-xl p-6 md:p-8 shadow-lg border border-rose-gold/20 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-rose-gold to-gold rounded-lg flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-deep-chocolate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-heading text-base md:text-lg font-semibold text-chocolate mb-1.5">
                    Păstrare optimă
                  </h4>
                  <p className="text-xs md:text-sm text-chocolate/70 leading-relaxed">
                    Frigider: <span className="font-semibold">5-7 zile</span> · Congelator: <span className="font-semibold">până la 3 luni</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
