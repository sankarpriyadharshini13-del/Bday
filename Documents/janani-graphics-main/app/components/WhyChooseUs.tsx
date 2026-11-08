// components/WhyChooseUs.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Icon, type IconName } from './Icons';

const WhyChooseUs = () => {
  const reasons: {
    title: string;
    description: string;
    icon: IconName;
    stats: string;
  }[] = [
    {
      title: '18+ Years Experience',
      description: 'Decades of expertise manufacturing premium polycarbonate stickers in Chennai with proven track record',
      icon: 'calendar',
      stats: '18+ Years'
    },
    {
      title: 'Premium Materials',
      description: 'High-quality Polycarbonate, Polyester, and Vinyl materials sourced from trusted global suppliers',
      icon: 'award',
      stats: '100% Quality'
    },
    // ISO Certified Quality item removed (see git history)
    {
      title: 'Fast Delivery',
      description: 'Quick turnaround and committed to meeting deadlines across Chennai and Tamil Nadu',
      icon: 'truck',
      stats: '24-48 Hours'
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored polycarbonate sticker designs for specific industrial and commercial needs',
      icon: 'pencil',
      stats: 'Unlimited Designs'
    },
    {
      title: 'Chennai Based',
      description: 'Located in Anakaputhur, Chennai - serving clients across Tamil Nadu and India',
      icon: 'mapPin',
      stats: '1000+ Clients'
    },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      const navbarHeight = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-ivory border-t border-line">
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
              Why We&apos;re The Best Choice
            </span>
          </div>
          
          <h2 className="section-title text-navy mb-4">
            Why Choose Our <br className="hidden md:block" />
            <span className="text-primary">Polycarbonate Stickers in Chennai</span>
          </h2>
          <p className="section-lead">
            Your trusted partner for premium <strong className="text-navy">polycarbonate stickers</strong> and industrial labeling solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="card card-hover p-8"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              {/* Icon + quiet stat label */}
              <div className="flex items-start justify-between gap-3 mb-5">
                <span className="icon-tile">
                  <Icon name={reason.icon} className="w-6 h-6" />
                </span>
                <span className="chip">{reason.stats}</span>
              </div>

              <h3 className="text-2xl font-bold mb-3 text-navy">
                {reason.title}
              </h3>
              <p className="leading-relaxed text-muted">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="card p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold text-navy mb-8">
              Trusted by Leading Companies in Chennai
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  1000+
                </div>
                <p className="text-navy font-semibold">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  50K+
                </div>
                <p className="text-navy font-semibold">Orders Delivered</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  100%
                </div>
                <p className="text-navy font-semibold">Quality Assured</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  24/7
                </div>
                <p className="text-navy font-semibold">Customer Support</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-12 rounded-xl bg-navy p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Premium Polycarbonate Stickers?
          </h3>
          <p className="text-lg md:text-xl text-white/85 mb-8 max-w-2xl mx-auto">
            Contact us today for custom quotes and fast delivery across Chennai
          </p>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="btn btn-light"
          >
            Get Your Free Quote Now
            <Icon name="arrowRight" className="w-5 h-5" />
          </a>
        </motion.div>

        {/* SEO Hidden Content */}
        <div className="hidden">
          <h4>Why Choose Our Polycarbonate Stickers in Chennai</h4>
          <p>We are the best polycarbonate sticker manufacturer in Chennai with 18+ years experience, ISO certification, premium materials, fast delivery, custom solutions, and local service. Choose us for all your polycarbonate sticker needs in Chennai.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
