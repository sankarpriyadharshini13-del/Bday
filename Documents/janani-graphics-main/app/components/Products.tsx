// components/Products.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { altFor } from '../data/imageAlts';
import { Icon, type IconName } from './Icons';

const Products = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isClient, setIsClient] = useState(false);
  
  const images = [
    'brandbird-7', 'brandbird-8',
    'brandbird-9', 'brandbird-10', 'brandbird-11', 'brandbird-12', 'brandbird-1', 'brandbird-2', 'brandbird-3', 'brandbird-4',
    'brandbird-5', 'brandbird-6'
  ];

  useEffect(() => {
    setIsClient(true);
    // Keep the gallery manual for visitors who prefer reduced motion.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const products: {
    title: string;
    href: string;
    description: string;
    icon: IconName;
    features: string[];
  }[] = [
    {
      title: 'Industrial Stickers & Labels',
      href: '/industrial-warning-labels-chennai',
      description: 'Custom-designed polycarbonate stickers for various industrial applications with superior durability and weather resistance.',
      icon: 'factory',
      features: ['Custom designs', 'High durability', 'Various sizes', 'UV resistant'],
    },
    {
      title: 'Caution & Attention Stickers',
      href: '/industrial-warning-labels-chennai',
      description: 'High-visibility polycarbonate warning labels for safety purposes with strong adhesion and long-lasting performance.',
      icon: 'warning',
      features: ['High visibility', 'Weather resistant', 'Strong adhesion', 'Safety compliant'],
    },
    {
      title: 'Polycarbonate Labels',
      href: '/polycarbonate-stickers-chennai',
      description: 'Premium polycarbonate stickers known for excellent resilience and performance in harsh industrial conditions.',
      icon: 'shield',
      features: ['Heat resistant', 'Chemical resistant', 'Long-lasting', 'Scratch proof'],
    },
    {
      title: '3M Adhesive Labels',
      href: '/industrial-warning-labels-chennai',
      description: 'Premium polycarbonate labels with 3M adhesive ensuring strong, reliable bonding on various surfaces in Chennai.',
      icon: 'layers',
      features: ['Strong adhesion', 'Multi-surface', 'Premium quality', 'Temperature stable'],
    },
    {
      title: 'Custom Vinyl & Polyester Labels',
      href: '/polyester-vinyl-labels-chennai',
      description: 'Custom vinyl labels and durable polyester labels for product labelling, asset tags, packaging and branding, printed to your design and supplied as sheets or rolls.',
      icon: 'printer',
      features: ['Waterproof & durable', 'Flexible vinyl', 'Stable polyester', 'Custom printing'],
    },
    {
      title: 'Barcode & Serial Number Labels',
      href: '/barcode-serial-number-labels-chennai',
      description: 'Barcode labels, QR code stickers and serial number stickers for inventory control, asset tracking and equipment traceability.',
      icon: 'barcode',
      features: ['Scannable codes', 'Sequential numbering', 'Durable materials', 'Custom layouts'],
    },
  ];

  const isActive = (index: number) => (isClient && index === currentImage) || (!isClient && index === 0);

  return (
    <section 
      id="products" 
      className="py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-4">
            <span className="eyebrow">
              Premium Product Range
            </span>
          </div>
          
          <h2 className="section-title mb-4 text-navy">
            Our <span className="text-primary">Polycarbonate Stickers</span> Range
          </h2>
          <p className="section-lead">
            Comprehensive range of <strong className="text-navy">polycarbonate stickers in Chennai</strong> for industrial and commercial applications, alongside polyester labels chennai and vinyl labels, barcode and serial number labels, and industrial warning labels
          </p>
          <p className="mt-4 text-muted">
            Need a flexible branding sticker instead of a rigid plate? See our{' '}
            <Link
              href="/polyester-vinyl-labels-chennai"
              className="font-semibold text-primary hover:text-primary-hover hover:underline underline-offset-4 rounded-sm"
            >
              custom vinyl labels in Chennai
            </Link>
            , printed and die-cut to any shape.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:mb-20">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="card card-hover p-6 grid content-start md:row-span-5 md:grid-rows-subgrid md:gap-y-0"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <span className="icon-tile mb-5 justify-self-start">
                <Icon name={product.icon} className="w-6 h-6" />
              </span>

              <h3 className="text-xl font-bold mb-3 text-navy">
                {product.title}
              </h3>
              <p className="mb-5 leading-relaxed text-muted">
                {product.description}
              </p>

              {/* Features */}
              <ul className="space-y-2.5 mb-6">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <Icon name="check" className="w-4 h-4 shrink-0 text-primary" strokeWidth={2.5} />
                    <span className="text-navy">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Link to service page */}
              <Link
                href={product.href}
                className="self-end justify-self-start inline-flex items-center font-semibold text-primary hover:text-primary-hover hover:underline underline-offset-4 rounded-sm"
              >
                Learn more →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Image Gallery Section */}
        <motion.div
          className="rounded-xl border border-line bg-ivory p-5 md:p-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8 md:mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-navy">
              Our <span className="text-primary">Polycarbonate Sticker</span> Gallery
            </h3>
            <p className="text-lg text-muted">
              Browse through our extensive collection of high-quality polycarbonate stickers in Chennai
            </p>
          </div>

          {/* Main Display Image */}
          <div className="relative mb-6">
            <div className="bg-white rounded-xl p-3 border border-line shadow-soft">
              <div className="aspect-video rounded-lg overflow-hidden relative bg-ivory">
                {images.map((img, index) => (
                  <div
                    key={img}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      isActive(index) ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img 
                      src={`/${img}.png`}
                      alt={altFor(img)}
                      className="w-full h-full object-contain p-2"
                      loading='lazy'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3 mb-5">
            {images.map((img, index) => (
              <button
                key={img}
                onClick={() => setCurrentImage(index)}
                className={`aspect-square rounded-lg overflow-hidden bg-white border transition-colors ${
                  isActive(index)
                    ? 'border-primary border-2'
                    : 'border-line hover:border-line-strong'
                }`}
                aria-label={`View ${img} polycarbonate sticker sample`}
                aria-current={isActive(index)}
              >
                <img 
                  src={`/${img}.png`}
                  alt={`${altFor(img)} (thumbnail)`}
                  className="w-full h-full object-contain p-1"
                  loading='lazy'
                />
              </button>
            ))}
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center gap-2" aria-hidden="true">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  isActive(index) ? 'w-8 bg-primary' : 'w-1.5 bg-line-strong'
                }`}
              ></div>
            ))}
          </div>

          {/* Product Types Badge */}
          <div className="mt-8 text-center">
            <div className="inline-flex flex-wrap justify-center gap-2">
              {['Polycarbonate', 'Polyester', 'Vinyl', 'Barcode', 'Warning', 'Serial Number'].map((type, index) => (
                <span key={index} className="chip">
                  {type} Labels
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Products;
