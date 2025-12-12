'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-olive via-chocolate to-olive-dark animate-gradient-slow" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-mint rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-peach rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-beige rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white text-sm font-medium mb-8 shadow-2xl">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-mint"></span>
            </span>
            Laborator Certificat DSV/DSP București
          </div>

          {/* Main Heading with Gradient Text */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-white via-mint to-white bg-clip-text text-transparent animate-gradient-text bg-[length:200%_auto]">
              Fiecare copil merită
            </span>
            <span className="block bg-gradient-to-r from-white via-beige to-white bg-clip-text text-transparent animate-gradient-text bg-[length:200%_auto] animation-delay-1000">
              să sărbătorească
            </span>
            <span className="block bg-gradient-to-r from-mint via-white to-mint bg-clip-text text-transparent animate-gradient-text bg-[length:200%_auto] animation-delay-2000">
              fără să se simtă exclus
            </span>
          </h1>

          {/* Subheading with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-mint to-peach rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-1000" />
              <p className="relative text-xl md:text-2xl text-white/95 leading-relaxed px-8 py-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                Torturi și prăjituri <span className="font-semibold text-mint">raw vegane 100% fără alergeni</span>, create cu pasiune de Andreea pentru fiul ei, Matei — și pentru familia ta.
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                href="#produse"
                variant="primary"
                className="!bg-white !text-chocolate hover:!bg-mint hover:!text-chocolate !shadow-2xl !px-10 !py-5 !text-lg font-semibold"
              >
                🎂 Comandă tortul perfect
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                href="#poveste"
                variant="secondary"
                className="!text-white !border-2 !border-white/30 !bg-white/10 backdrop-blur-md hover:!bg-white hover:!text-chocolate !px-10 !py-5 !text-lg font-semibold"
              >
                💚 Citește povestea noastră
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center gap-8 text-white/90"
          >
            {[
              { icon: '✨', text: '100% Fără Alergeni' },
              { icon: '🏆', text: 'Certificat DSV/DSP' },
              { icon: '❤️', text: 'Făcut cu pasiune' }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 cursor-default"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/80"
        >
          <span className="text-sm mb-2 font-medium">Scroll pentru descoperire</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
