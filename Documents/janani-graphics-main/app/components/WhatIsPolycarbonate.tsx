// components/WhatIsPolycarbonate.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Icon, type IconName } from './Icons';

const keyProperties = [
  {
    title: 'Temperature Resistance',
    text: 'Withstands -40°C to +120°C, perfect for extreme industrial environments',
  },
  {
    title: 'Chemical Resistance',
    text: 'Resists oils, solvents, and harsh industrial chemicals without degradation',
  },
  {
    title: 'UV Stability',
    text: 'Maintains color and print clarity for years without fading or yellowing',
  },
  {
    title: 'Superior Adhesion',
    text: '3M adhesive technology ensures permanent bonding to metal, plastic, and composites',
  },
];

const features: { icon: IconName; title: string; text: string }[] = [
  { icon: 'shield', title: 'Durability', text: 'Lasts 7-10+ years in harsh industrial conditions' },
  { icon: 'thermometer', title: 'Temperature', text: 'Range: -40°C to +120°C' },
  { icon: 'flask', title: 'Chemical Resistant', text: 'Resists oils, solvents, acids' },
  { icon: 'sun', title: 'UV Stable', text: 'No fading or degradation' },
  { icon: 'printer', title: 'Print Quality', text: 'High-resolution custom designs' },
  { icon: 'ruler', title: 'Customizable', text: 'Any size, shape, color available' },
];

const applications: { icon: IconName; title: string; text: string }[] = [
  { icon: 'factory', title: 'Industrial Equipment', text: 'Equipment identification labels, serial numbers, and nameplate labels for machinery' },
  { icon: 'warning', title: 'Safety & Warning Labels', text: 'High-visibility warning labels, hazard warnings, and safety compliance labels' },
  { icon: 'car', title: 'Automotive Labels', text: 'Engine labels, component identification, and specification plates for vehicles' },
  { icon: 'package', title: 'Barcode & Serial Labels', text: 'Inventory management, tracking, and asset identification stickers' },
  { icon: 'cpu', title: 'Electronics Labels', text: 'Component identification, warranty labels, and certification labels' },
  { icon: 'wrench', title: 'Tool & Equipment Tags', text: 'Asset tags for tools, equipment identification, and maintenance labels' },
];

const WhatIsPolycarbonate = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-navy mb-4">
            What Are <span className="text-primary">Polycarbonate Stickers</span>?
          </h2>
          <p className="section-lead">
            Understand the material, properties, and why polycarbonate stickers are the preferred choice for industrial applications in Chennai
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-14">
          {/* Left: Definition and Overview */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="card p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center text-navy">
                <span className="w-1 h-8 rounded-full mr-4 shrink-0 bg-primary"></span>
                Material Definition
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-muted">
                Polycarbonate stickers are durable adhesive labels manufactured from polycarbonate plastic, a high-performance thermoplastic material known for its exceptional strength and durability. These stickers are engineered to withstand extreme temperature conditions, harsh chemicals, and prolonged ultraviolet (UV) exposure, making them ideal for demanding industrial and commercial applications.
              </p>
              <p className="text-lg leading-relaxed text-muted">
                Unlike standard labels made from paper or basic vinyl, polycarbonate stickers maintain their integrity and appearance for 7-10 years or more, even in harsh environments. This longevity makes them the preferred choice for equipment labeling, safety warnings, and identification tags in Chennai&apos;s manufacturing sectors.
              </p>
            </div>

            {/* Key Properties */}
            <div className="card p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center text-navy">
                <span className="w-1 h-8 rounded-full mr-4 shrink-0 bg-primary"></span>
                Key Properties of Polycarbonate Stickers
              </h3>
              
              <div className="space-y-5">
                {keyProperties.map((property) => (
                  <div key={property.title} className="flex items-start gap-4">
                    <Icon name="check" className="w-5 h-5 mt-1 shrink-0 text-primary" strokeWidth={2.25} />
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-navy">{property.title}</h4>
                      <p className="text-muted">{property.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Visual Features */}
          <motion.div
            className="grid grid-cols-2 gap-4 content-start"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {features.map((feature) => (
              <div key={feature.title} className="card card-hover p-5 md:p-6">
                <span className="icon-tile mb-4">
                  <Icon name={feature.icon} className="w-6 h-6" />
                </span>
                <h4 className="font-bold text-lg mb-2 text-navy">{feature.title}</h4>
                <p className="leading-relaxed text-muted">{feature.text}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Applications Section */}
        <motion.div
          className="rounded-xl border border-line bg-ivory p-6 md:p-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-center text-navy">
              Common Applications of <span className="text-primary">Polycarbonate Stickers in Chennai</span>
            </h3>
            <p className="text-lg text-center mb-8 text-muted">
              Polycarbonate stickers are used across various industries for critical labeling needs
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {applications.map((application) => (
                <div key={application.title} className="card flex items-start gap-4 p-5">
                  <span className="icon-tile">
                    <Icon name={application.icon} className="w-6 h-6" />
                  </span>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-navy">{application.title}</h4>
                    <p className="text-muted">{application.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Why Polycarbonate Section */}
        <motion.div
          className="mt-14 rounded-xl border border-line p-6 md:p-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-navy">
              Why Choose <span className="text-primary">Polycarbonate Over Other Materials</span>?
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Maximum Durability',
                  text: "Polycarbonate stickers maintain their integrity for 7-10 years without degradation. Unlike polyester, they won't yellow or become brittle in harsh conditions.",
                },
                {
                  title: 'Superior Adhesion',
                  text: 'With 3M adhesive technology, polycarbonate stickers bond permanently to metal, plastic, and composite surfaces without peeling or lifting over time.',
                },
                {
                  title: 'Professional Appearance',
                  text: 'Polycarbonate stickers maintain their glossy finish and print clarity over time, giving equipment a professional, well-maintained appearance.',
                },
              ].map((reason, index) => (
                <div key={reason.title} className="card p-6">
                  <h4 className="font-bold text-lg mb-3 flex items-center text-navy">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full mr-3 shrink-0 bg-primary-soft text-primary-hover text-base">{index + 1}</span>
                    {reason.title}
                  </h4>
                  <p className="text-muted">{reason.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsPolycarbonate;
