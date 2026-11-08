// components/Materials.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Icon, type IconName } from './Icons';

const comparison: { property: string; values: [string, string, string] }[] = [
  { property: 'Flexibility', values: ['Rigid, best on flat panels', 'Flexible and dimensionally stable', 'Most flexible, conforms to curves'] },
  { property: 'Heat resistance', values: ['Excellent', 'Very good', 'Moderate'] },
  { property: 'Chemical resistance', values: ['Very good', 'Very good', 'Good'] },
  { property: 'Water resistance', values: ['Good', 'Very good', 'Very good'] },
  { property: 'Scratch and abrasion', values: ['Excellent, hard surface', 'Good', 'Moderate'] },
  { property: 'UV and outdoor use', values: ['Good', 'Very good', 'Good, depends on grade'] },
  { property: 'Best for', values: ['Nameplates, control panels, electronics', 'Barcode and serial labels, asset tags, equipment labels', 'Branding, packaging, curved or uneven surfaces'] },
];

const Materials = () => {
  const materials: {
    name: string;
    description: string;
    benefits: string[];
    icon: IconName;
  }[] = [
    {
      name: 'Polycarbonate',
      description: 'A durable and heat-resistant material ideal for industrial applications, instrument panels, and electronics.',
      benefits: [
        'Exceptional heat resistance',
        'Withstands harsh environments',
        'Long-lasting durability',
        'Ideal for electronics',
      ],
      icon: 'thermometer',
    },
    {
      name: 'Polyester',
      description: 'A durable, tear-resistant, and flexible material that is chemical, UV, and water-resistant.',
      benefits: [
        'Chemical resistant',
        'UV resistant',
        'Water resistant',
        'Perfect for outdoor use',
      ],
      icon: 'flask',
    },
    {
      name: 'Vinyl',
      description: 'Known for its flexibility, custom vinyl labels are suitable for a wide variety of surfaces.',
      benefits: [
        'Highly flexible',
        'Indoor & outdoor use',
        'Excellent for branding',
        'Versatile application',
      ],
      icon: 'layers',
    },
  ];

  return (
    <section id="materials" className="py-16 md:py-24 bg-ivory border-t border-line">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-navy mb-4">
            Material Expertise
          </h2>
          <p className="section-lead">
            High-performance materials to meet specific client needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {materials.map((material, index) => (
            <motion.div
              key={index}
              className="card card-hover p-8 grid content-start md:row-span-4 md:grid-rows-subgrid md:gap-y-0"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="icon-tile mb-6 justify-self-start">
                <Icon name={material.icon} className="w-6 h-6" />
              </span>
              <h3 className="text-2xl font-bold text-navy mb-3">
                {material.name}
              </h3>
              <p className="text-muted mb-6 leading-relaxed">
                {material.description}
              </p>
              <ul className="space-y-3">
                {material.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Icon name="check" className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={2.25} />
                    <span className="text-navy">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Side-by-side comparison */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-navy text-center mb-3">
            Polycarbonate, polyester or vinyl: which one?
          </h3>
          <p className="text-lg text-muted text-center max-w-3xl mx-auto mb-8">
            A quick guide to how the three materials compare
          </p>

          <p className="md:hidden text-sm text-muted text-center -mt-4 mb-3">Swipe sideways to compare</p>

          <div
            className="card overflow-x-auto"
            role="region"
            aria-label="Material comparison table"
            tabIndex={0}
          >
            <table className="w-full min-w-[44rem] border-collapse text-left">
              <caption className="sr-only">
                Comparison of polycarbonate, polyester and vinyl label materials
              </caption>
              <thead>
                <tr className="bg-ivory border-b border-line">
                  <th scope="col" className="sticky left-0 bg-ivory px-5 py-4 text-sm font-semibold text-muted">
                    Property
                  </th>
                  {materials.map((material) => (
                    <th key={material.name} scope="col" className="px-5 py-4 text-base font-bold text-navy">
                      {material.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.property} className="border-b border-line last:border-b-0">
                    <th scope="row" className="sticky left-0 bg-white px-5 py-4 text-base font-semibold text-navy align-top">
                      {row.property}
                    </th>
                    {row.values.map((value, index) => (
                      <td key={index} className="px-5 py-4 text-base text-navy align-top">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-muted text-center max-w-3xl mx-auto">
            A general guide only. Performance depends on the grade, the adhesive and where the label is used.
            Tell us where yours will go and we will recommend the right material.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Materials;
