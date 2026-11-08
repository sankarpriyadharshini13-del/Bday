// components/About.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icon, type IconName } from './Icons';

const About = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  const highlights: { title: string; description: string; icon: IconName }[] = [
    {
      title: 'Manufacturing Hub',
      description: 'State-of-the-art facility in Chennai for polycarbonate sticker production',
      icon: 'factory',
    },
    {
      title: 'Rapid Turnaround',
      description: 'Quick production and delivery of polycarbonate stickers across Chennai',
      icon: 'bolt',
    },
    // Quality / ISO card removed (see git history)
    {
      title: 'Custom Designs',
      description: 'Tailored polycarbonate sticker solutions for every industry',
      icon: 'target',
    },
  ];

  const industries: { icon: IconName; name: string }[] = [
    { icon: 'wrench', name: 'Manufacturing' },
    { icon: 'car', name: 'Automotive' },
    { icon: 'cpu', name: 'Electronics' },
    { icon: 'cog', name: 'Machinery' },
    { icon: 'factory', name: 'Industrial' },
    { icon: 'package', name: 'Logistics' },
  ];

  return (
    <section 
      id="about" 
      className="py-16 md:py-24 bg-ivory"
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
              18+ Years Manufacturing Excellence
            </span>
          </div>
          
          <h2 className="section-title text-navy mb-4">
            About <span className="text-primary">Polycarbonate Stickers</span> Chennai
          </h2>
          <p className="section-lead">
            Leading specialist in <strong className="text-navy">polycarbonate stickers in Chennai</strong> - 
            Manufacturing premium labels and stickers since 2006
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Main Content Card */}
            <div className="card p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center text-navy">
                <span className="w-1 h-10 rounded-full mr-4 shrink-0 bg-primary"></span>
                Chennai&apos;s Premier Polycarbonate Sticker Manufacturer
              </h3>
              <p className="mb-4 leading-relaxed text-lg text-navy">
                We are a specialist <strong>sticker manufacturer in Chennai</strong> with 
                over <strong>18+ years of excellence</strong> in producing high-quality labels and stickers. 
                Based in Anakaputhur, Chennai, we serve diverse industrial and commercial clients across Tamil Nadu.
              </p>
              <p className="mb-4 leading-relaxed text-lg text-navy">
                Our comprehensive range of <strong>polycarbonate stickers in Chennai</strong> includes 
                custom solutions for electronics, automotive, machinery, and equipment labeling. We utilize advanced materials 
                and maintain strict quality standards.
              </p>
              <p className="mb-6 leading-relaxed text-lg text-navy">
                Alongside polycarbonate, we make{' '}
                <Link href="/polyester-vinyl-labels-chennai" className="font-semibold text-primary-hover underline underline-offset-4 hover:text-primary">polyester and vinyl labels</Link>,{' '}
                <Link href="/barcode-serial-number-labels-chennai" className="font-semibold text-primary-hover underline underline-offset-4 hover:text-primary">barcode, QR and serial number labels</Link>{' '}
                and{' '}
                <Link href="/industrial-warning-labels-chennai" className="font-semibold text-primary-hover underline underline-offset-4 hover:text-primary">industrial warning labels</Link>,
                and we help you pick the right material for your surface and conditions.
              </p>

              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-soft border border-line">
                <Icon name="mapPin" className="w-5 h-5 text-primary" />
                <span className="font-semibold text-navy">
                  Anakaputhur, Chennai, Tamil Nadu
                </span>
              </div>
            </div>

            {/* Features List */}
            <div className="card p-6 md:p-8">
              <h4 className="text-xl font-bold mb-5 flex items-center text-navy">
                <span className="w-1 h-6 rounded-full mr-3 shrink-0 bg-primary"></span>
                Why Choose Our Polycarbonate Stickers?
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="check" className="w-5 h-5 mt-1 shrink-0 text-primary" strokeWidth={2.25} />
                  <div>
                    <p className="font-semibold text-navy">Advanced Manufacturing Technology</p>
                    <p className="mt-1 text-muted">State-of-the-art processes for premium polycarbonate stickers</p>
                  </div>
                </div>
                {/* ISO Certified Quality Standards item removed (see git history) */}
                <div className="flex items-start gap-3">
                  <Icon name="check" className="w-5 h-5 mt-1 shrink-0 text-primary" strokeWidth={2.25} />
                  <div>
                    <p className="font-semibold text-navy">Fast Delivery Across Chennai</p>
                    <p className="mt-1 text-muted">Quick turnaround for all polycarbonate sticker orders</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="check" className="w-5 h-5 mt-1 shrink-0 text-primary" strokeWidth={2.25} />
                  <div>
                    <p className="font-semibold text-navy">Custom Design Solutions</p>
                    <p className="mt-1 text-muted">Tailored polycarbonate stickers for your industry needs</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4 md:gap-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {highlights.map((item) => (
              <div
                key={item.title}
                className="card card-hover p-5 md:p-8"
              >
                <span className="icon-tile mb-4">
                  <Icon name={item.icon} className="w-6 h-6" />
                </span>
                <h4 className="font-bold text-lg md:text-xl mb-2 text-navy">{item.title}</h4>
                <p className="leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section - SEO Rich */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="card p-6 md:p-8 text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-primary">18+</div>
            <p className="font-bold text-navy">Years Experience</p>
            <p className="text-sm mt-1 text-muted">Manufacturing in Chennai</p>
          </div>
          <div className="card p-6 md:p-8 text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-primary">500+</div>
            <p className="font-bold text-navy">Happy Clients</p>
            <p className="text-sm mt-1 text-muted">Across Tamil Nadu</p>
          </div>
          <div className="card p-6 md:p-8 text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-primary">10K+</div>
            <p className="font-bold text-navy">Orders Delivered</p>
            <p className="text-sm mt-1 text-muted">Polycarbonate stickers</p>
          </div>
          {/* 100% Quality Assured / ISO Certified stat removed (see git history) */}
        </motion.div>

        {/* Industries Served - SEO Section */}
        <motion.div 
          className="mt-16 card p-6 md:p-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-navy">
              Industries We Serve with <span className="text-primary">Polycarbonate Stickers</span>
            </h3>
            <p className="text-lg text-muted">
              Trusted by leading companies across Chennai for premium labeling solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry) => (
              <div 
                key={industry.name}
                className="p-5 rounded-lg text-center bg-ivory border border-line"
              >
                <span className="icon-tile mb-3 bg-white border border-line">
                  <Icon name={industry.icon} className="w-6 h-6" />
                </span>
                <p className="font-semibold text-navy">{industry.name}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 text-center rounded-xl border border-line bg-primary-soft p-8 md:p-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-2xl md:text-4xl font-bold text-navy mb-4">
            Need Premium Polycarbonate Stickers in Chennai?
          </h3>
          <p className="text-lg md:text-xl text-navy mb-8 max-w-2xl mx-auto">
            Get custom quotes for your polycarbonate sticker requirements. Fast delivery, competitive pricing, and guaranteed quality.
          </p>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="btn btn-primary"
          >
            Request Quote for Polycarbonate Stickers
            <Icon name="arrowRight" className="w-5 h-5 shrink-0" />
          </a>
        </motion.div>

        {/* SEO Hidden Content */}
        <div className="hidden">
          <h4>Polycarbonate Stickers Chennai - Our Services</h4>
          <p>We manufacture the best polycarbonate stickers in Chennai with custom printing, durability testing, and fast delivery. Our polycarbonate stickers are perfect for barcode labels, warning labels, serial number stickers, and brand identity labels in Chennai.</p>
          <p>Contact us for polycarbonate stickers in Chennai - ISO certified manufacturer with 18+ years experience.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
