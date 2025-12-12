'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';

const features = [
  {
    icon: '🏆',
    title: 'Singurul laborator certificat DSV/DSP',
    description: 'Certificări complete: Raw Pastry Chef, Professional Vegan Pastry, plus toate autorizațiile DSV, DSP, mediu. Siguranță garantată pentru copilul tău.'
  },
  {
    icon: '🌱',
    title: '100% fără alergeni și E-uri',
    description: 'Fără zahăr rafinat, fără gluten, fără lactate, fără ou, fără coloranți artificiali. Doar ingrediente pe care le recunoști și le pronunți.'
  },
  {
    icon: '🎨',
    title: 'Făcut de la 0, ca în artă',
    description: 'Nu folosim creme prefabricate. Facem untul de caju, alune, migdale in-house. Fiecare tort e o operă de artă comestibilă.'
  },
  {
    icon: '❤️',
    title: 'Poveste autentică',
    description: 'Creăm pentru Matei. Creăm pentru copilul tău. Fiecare prăjitură e gândită ca și cum ar fi pentru familia noastră.'
  }
];

export default function WhySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section bgColor="white">
      <div ref={ref} className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-4xl font-bold text-chocolate mb-4"
        >
          De ce familiile aleg Raw da Bun?
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-chocolate mb-3">
                {feature.title}
              </h3>
              <p className="text-chocolate/70 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
