'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Section from '../ui/Section';

const steps = [
  {
    number: '01',
    title: 'Alege',
    description: 'Navighează produsele noastre sau contactează-ne pe WhatsApp pentru personalizare.',
    icon: '🛍️'
  },
  {
    number: '02',
    title: 'Comandă',
    description: 'Plasează comanda cu minimum 24-48h înainte (torturile raw au nevoie de timp pentru a se stabiliza și a căpăta gustul perfect).',
    icon: '📝'
  },
  {
    number: '03',
    title: 'Savurează',
    description: 'Livrăm la ușa ta, ambalat elegant. Păstrare: frigider 5-7 zile.',
    icon: '🎉'
  }
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section bgColor="beige">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-chocolate mb-4">
            Simplu. Rapid. Delicios.
          </h2>
          <p className="text-chocolate/70 text-lg">
            Trei pași pentru tortul perfect
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line - desktop only */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-olive/20" />

          <div className="grid md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step number circle */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-olive rounded-full flex items-center justify-center shadow-lg relative z-10">
                      <span className="font-heading text-2xl font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                    {/* Icon badge */}
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border-4 border-beige">
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="font-heading text-2xl font-bold text-chocolate mb-3">
                    {step.title}
                  </h3>
                  <p className="text-chocolate/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile timeline connector */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-8">
                    <svg className="w-6 h-6 text-olive" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-white rounded-xl p-8 shadow-sm"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl">🚚</div>
              <div>
                <h4 className="font-semibold text-chocolate mb-1">Livrare în București</h4>
                <p className="text-sm text-chocolate/70">Livrare: 25 RON. Gratuit pentru comenzi peste 200 RON.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">❄️</div>
              <div>
                <h4 className="font-semibold text-chocolate mb-1">Păstrare optimă</h4>
                <p className="text-sm text-chocolate/70">Frigider: 5-7 zile. Congelator: până la 3 luni.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
