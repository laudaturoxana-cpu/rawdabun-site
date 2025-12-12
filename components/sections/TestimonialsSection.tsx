'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';

const testimonials = [
  {
    name: 'Elena P.',
    role: 'Mamă, București',
    quote: 'Andrei a mâncat tortul și a zâmbit exact ca ceilalți copii. Prima dată când nu a trebuit să stea deoparte. Mulțumesc, Andreea!',
    rating: 5,
    avatar: '👩'
  },
  {
    name: 'Mihai A.',
    role: 'Antreprenor, București',
    quote: 'Am comandat pentru aniversarea Elenei. A fost WOW. Toți prietenii au întrebat de unde. Raw da Bun = cadoul perfect.',
    rating: 5,
    avatar: '👨‍💼'
  },
  {
    name: 'Sofia L.',
    role: 'UX Designer, Stockholm/București',
    quote: 'Finally found quality raw vegan in București! Tastes exactly like what I\'d get in Stockholm. Absolutely love it!',
    rating: 5,
    avatar: '👩‍💻'
  }
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section bgColor="white">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-chocolate mb-4">
            Ce spun familiile noastre
          </h2>
          <p className="text-chocolate/70 text-lg">
            Povești reale de la clienți reali
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="h-full">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-peach"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-quote italic text-lg text-chocolate mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-semibold text-chocolate">{testimonial.name}</p>
                    <p className="text-sm text-chocolate/60">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Social proof numbers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="font-heading text-4xl md:text-5xl font-bold text-olive mb-2">500+</div>
            <p className="text-chocolate/70">Familii fericite</p>
          </div>
          <div>
            <div className="font-heading text-4xl md:text-5xl font-bold text-olive mb-2">100%</div>
            <p className="text-chocolate/70">Fără alergeni</p>
          </div>
          <div>
            <div className="font-heading text-4xl md:text-5xl font-bold text-olive mb-2">5★</div>
            <p className="text-chocolate/70">Rating mediu</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
