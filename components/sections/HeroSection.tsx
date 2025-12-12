'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Cake Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://gomagcdn.ro/domains2/rawdabun.com/files/product/medium/tort-unicorn-841068.jpg')",
          }}
        />
        {/* Elegant Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-hunter-green/95 via-deep-chocolate/90 to-hunter-green/95" />

        {/* Subtle Gold Shimmer */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-rose-gold rounded-full mix-blend-overlay filter blur-3xl animate-blob" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000" />
        </div>
      </div>

      {/* Elegant Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Luxury Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-cream/10 backdrop-blur-xl border-2 border-rose-gold/30 text-cream mb-12 shadow-2xl"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-gold"></span>
            </span>
            <span className="font-quote text-lg tracking-wide">Laborator Certificat DSV/DSP • București</span>
          </motion.div>

          {/* Main Elegant Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="font-heading font-light text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 leading-[1.1] tracking-tight"
          >
            <span className="block text-cream drop-shadow-2xl">
              Fiecare copil merită
            </span>
            <span className="block text-rose-gold drop-shadow-2xl font-normal italic">
              să sărbătorească
            </span>
            <span className="block text-cream drop-shadow-2xl">
              fără să se simtă exclus
            </span>
          </motion.h1>

          {/* Elegant Separator Line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "200px", opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="h-[2px] bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto mb-10"
          />

          {/* Refined Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <p className="font-quote text-2xl md:text-3xl text-cream/95 leading-relaxed font-light italic">
              Torturi și prăjituri raw vegane <span className="text-rose-gold font-normal not-italic">100% fără alergeni</span>,
              <br className="hidden md:block" />
              create cu pasiune de Andreea pentru fiul ei, Matei
              <br className="hidden md:block" />
              <span className="text-champagne">— și pentru familia ta.</span>
            </p>
          </motion.div>

          {/* Premium CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                href="#produse"
                variant="primary"
                className="!bg-rose-gold !text-deep-chocolate hover:!bg-gold !shadow-2xl !px-12 !py-6 !text-xl font-heading font-medium !border-2 !border-rose-gold"
              >
                Comandă tortul perfect
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                href="#poveste"
                variant="secondary"
                className="!text-cream !border-2 !border-cream/40 !bg-transparent backdrop-blur-md hover:!bg-cream/10 !px-12 !py-6 !text-xl font-heading font-light"
              >
                Descoperă povestea
              </Button>
            </motion.div>
          </motion.div>

          {/* Elegant Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex flex-wrap justify-center gap-10 text-cream/90"
          >
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                text: '100% Fără Alergeni'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                text: 'Certificat DSV/DSP'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
                text: 'Premium Quality'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col items-center gap-3 cursor-default group"
              >
                <div className="w-16 h-16 rounded-full bg-rose-gold/20 backdrop-blur-md border border-rose-gold/40 flex items-center justify-center text-rose-gold group-hover:bg-rose-gold/30 group-hover:text-gold transition-all duration-300 shadow-xl">
                  {item.icon}
                </div>
                <span className="font-quote text-sm tracking-wider">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2, repeat: Infinity, repeatType: 'reverse', repeatDelay: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-cream/60 gap-2"
        >
          <span className="font-quote text-sm tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-cream/40 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-rose-gold rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
