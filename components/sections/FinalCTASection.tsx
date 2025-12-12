'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Button from '../ui/Button';

export default function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=2071')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-olive/95 via-olive/85 to-olive-dark/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
            Gata să creezi amintiri dulci?
          </h2>
          <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed max-w-2xl mx-auto">
            Comandă tortul perfect pentru următoarea ta sărbătoare. Matei și Andreea te așteaptă.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="https://wa.me/40770816466?text=Bună! Aș vrea să comand un tort/prăjituri de la Raw da Bun."
              variant="primary"
              className="!bg-white !text-olive hover:!bg-beige"
            >
              📱 Trimite comandă pe WhatsApp
            </Button>
            <Button
              href="#produse"
              variant="secondary"
              className="!text-white !border-white hover:!bg-white hover:!text-olive"
            >
              Vezi meniul complet
            </Button>
          </div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 grid md:grid-cols-3 gap-8 text-white"
          >
            <div>
              <div className="text-3xl mb-2">📞</div>
              <p className="font-semibold mb-1">Telefon</p>
              <a href="tel:+40770816466" className="hover:text-beige transition-colors">
                0770 816 466
              </a>
            </div>
            <div>
              <div className="text-3xl mb-2">📧</div>
              <p className="font-semibold mb-1">Email</p>
              <a href="mailto:contact@rawdabun.ro" className="hover:text-beige transition-colors">
                contact@rawdabun.ro
              </a>
            </div>
            <div>
              <div className="text-3xl mb-2">📍</div>
              <p className="font-semibold mb-1">Locație</p>
              <p className="text-white/90">București, România</p>
            </div>
          </motion.div>

          {/* Program */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 inline-block bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3"
          >
            <p className="text-white">
              <span className="font-semibold">Program:</span> Luni - Vineri, 09:00 - 18:00
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white/20 rounded-full" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-white/10 rounded-full" />
    </section>
  );
}
