'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';

const products = [
  {
    name: 'Tort Zebra cu Afine',
    description: 'Cel mai rapid de preparat, perfect pentru comenzi urgente. Straturi de ciocolată și vanilie, textură cremoasă de vise.',
    price: 'de la 250 RON',
    weight: '(1.5 kg)',
    image: 'https://gomagcdn.ro/domains2/rawdabun.com/files/product/medium/tort-zebra-cu-afine-632018.jpg',
    ingredients: 'Caju, afine, mix de fructe uscate, sirop arțar, ulei de cocos'
  },
  {
    name: 'Tort Caramel Sărat și Ciocolată',
    description: 'Profitabilitatea noastră #1. Combinația perfectă de dulce și sărat care te face să comanzi din nou.',
    price: 'de la 280 RON',
    weight: '(1.5 kg)',
    image: 'https://gomagcdn.ro/domains2/rawdabun.com/files/product/medium/tort-cu-caramel-sarat-si-ciocolata-439828.jpg',
    ingredients: 'Curmale, sirop de arțar, caju, ulei de cocos, migdale, ciocolată crudă'
  },
  {
    name: 'Platou Prăjituri Raw (Mix)',
    description: 'Perfect pentru evenimente: brownie raw, cheesecake mini, energy balls. Toți invitații vor întreba: "De unde?"',
    price: 'de la 150 RON',
    weight: '(10 bucăți)',
    image: 'https://gomagcdn.ro/domains2/rawdabun.com/files/product/medium/monoportii-platou-mixt-860067.jpg',
    ingredients: 'Varietate de nuci, fructe uscate, cacao crudă, siropuri naturale'
  }
];

export default function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section id="produse" bgColor="beige">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-chocolate mb-4">
            Cele mai iubite produse
          </h2>
          <p className="text-chocolate/70 text-lg max-w-2xl mx-auto">
            Fiecare tort e creat cu pasiune, de la zero, special pentru evenimentul tău
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="h-full flex flex-col">
                {/* Product Image */}
                <div className="relative h-64 -mx-6 -mt-6 mb-6 rounded-t-xl overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-olive text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.price}
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex-1 flex flex-col">
                  <h3 className="font-heading text-2xl font-bold text-chocolate mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-olive font-medium mb-3">{product.weight}</p>
                  <p className="text-chocolate/70 mb-4 leading-relaxed flex-1">
                    {product.description}
                  </p>

                  {/* Ingredients */}
                  <div className="mb-4 p-3 bg-beige rounded-lg">
                    <p className="text-xs font-semibold text-chocolate mb-1">Ingrediente principale:</p>
                    <p className="text-xs text-chocolate/70">{product.ingredients}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-mint text-chocolate px-2 py-1 rounded-full">Fără zahăr rafinat</span>
                    <span className="text-xs bg-mint text-chocolate px-2 py-1 rounded-full">Fără gluten</span>
                    <span className="text-xs bg-mint text-chocolate px-2 py-1 rounded-full">100% raw vegan</span>
                  </div>

                  <Button
                    href="https://wa.me/40770816466?text=Bună! Vreau să comand un tort/prăjituri de la Raw da Bun."
                    variant="primary"
                    fullWidth
                  >
                    Comandă acum
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Button href="#contact" variant="secondary">
            Vezi toate produsele
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
