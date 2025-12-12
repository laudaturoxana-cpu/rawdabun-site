'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';

export default function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section id="poveste" bgColor="beige">
      <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-chocolate mb-6">
            Totul a început cu un băiețel trist la o petrecere...
          </h2>

          <div className="space-y-4 text-chocolate/80 text-lg leading-relaxed">
            <p>
              Îți imaginezi? Toți copiii mănâncă prăjituri și tort. Fericirea se citește pe fața tuturor.
            </p>
            <p>
              Dar <strong>Matei</strong>, băiețelul meu de 2 anișori, stă deoparte, trist, fără să înțeleagă de ce el nu are voie.
            </p>
            <p className="font-semibold text-chocolate">
              Multiple alergii alimentare.
            </p>
            <p>
              Din acel moment, m-am simțit responsabilă să îi pregătesc personal prăjituri și torturi cu ingrediente cât mai curate, cât mai naturale — adaptate pentru el, <em>fără compromisuri la gust</em>.
            </p>
            <p>
              Așa a luat naștere <strong>Raw da Bun</strong>, laboratorul de cofetărie raw vegană certificat DSV/DSP.
            </p>
            <p>
              Aici creez aluaturi crocante, texturi cremoase și o explozie de gusturi autentice — fără zahăr rafinat, fără gluten, fără coloranți artificiali, fără E-uri, fără ou și lactate.
            </p>
            <p className="font-semibold text-chocolate">
              Totul pleacă de la zero. Ca în artă.
            </p>
            <p>
              Prin torturile raw vegane mi-am redescoperit pasiunile:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Atenția la detalii</strong> vine din pictura mea</li>
              <li><strong>Creativitatea</strong> din iubirea pentru lucrul manual</li>
              <li><strong>Eleganța</strong> din dansurile de vals</li>
            </ul>
            <p className="mt-6">
              Sunt <strong>Andreea</strong> și sunt fondatoarea Raw da Bun.
            </p>
            <p className="text-xl font-semibold text-olive">
              Și vreau ca fiecare copil să poată sărbători, exact ca Matei.
            </p>
          </div>

          <div className="mt-8">
            <Button href="#produse" variant="primary">
              Descoperă produsele noastre
            </Button>
          </div>
        </motion.div>

        {/* Image - ÎNLOCUIEȘTE CU POZA REALĂ ANDREEA CÂND E DISPONIBILĂ */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl border-4 border-rose-gold/20">
            {/* TODO: ÎNLOCUIEȘTE acest URL cu poza reală Andreea */}
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070"
              alt="Andreea Obrișcă - Fondatoarea Raw da Bun"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-hunter-green/40 via-transparent to-rose-gold/20" />
          </div>

          {/* Elegant Quote Card */}
          <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-rose-gold to-gold text-deep-chocolate p-8 rounded-2xl shadow-2xl max-w-sm border-2 border-cream/50">
            <div className="absolute -top-4 -left-4 text-6xl text-cream/30">"</div>
            <p className="font-quote italic text-xl leading-relaxed relative z-10">
              Fiecare tort e o operă de artă comestibilă, făcută cu iubire pentru familia ta.
            </p>
            <p className="mt-4 font-heading font-semibold text-lg text-right">— Andreea Obrișcă</p>
            <div className="absolute -bottom-4 -right-4 text-6xl text-cream/30 rotate-180">"</div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
