import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { altFor } from '../data/imageAlts';
import { Icon } from './Icons';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isClient, setIsClient] = useState(false);
  // The most front-facing samples lead the carousel.
  const images = [
    'brandbird-5',
    'brandbird-6',
    'brandbird-1',
    'brandbird-2',
    'brandbird-3',
    'brandbird-4'
  ];

  useEffect(() => {
    setIsClient(true);
    // Keep the carousel manual for visitors who prefer reduced motion.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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

  const isActive = (index: number) => (isClient && index === currentImage) || (!isClient && index === 0);

  return (
    <>
      <section
        id="home"
        className="relative flex items-center pt-28 md:pt-32 pb-16 md:pb-20 bg-ivory"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-6 animate-fadeIn">
              <div className="inline-block">
                <span className="eyebrow">
                  Sticker Manufacturer in Chennai - 18+ Years
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[2.5rem] xl:text-[2.75rem] font-bold leading-tight tracking-tight">
                <span className="text-navy">Premium </span>
                <span className="text-primary">Polycarbonate Stickers</span>{' '}
                <span className="text-navy">in Chennai</span>
              </h1>

              <p className="text-lg md:text-xl leading-relaxed max-w-xl text-navy">
                Premier <strong>sticker manufacturer in Chennai</strong> specializing in <strong>polycarbonate stickers</strong> and custom industrial labels.
                Specialized in Polycarbonate, Polyester, and Vinyl labels for industrial applications.
                Trusted by 1000+ clients across Chennai and Tamil Nadu.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "#contact")}
                  className="btn btn-primary"
                >
                  Request a Quote
                  <Icon name="arrowRight" className="w-5 h-5 shrink-0" />
                </a>
                <a
                  href="#products"
                  onClick={(e) => scrollToSection(e, "#products")}
                  className="btn btn-secondary"
                >
                  View Products →
                </a>
              </div>

              {/* SEO-Rich Feature List */}
              <div className="card p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center text-navy">
                  <span className="w-1 h-6 rounded-full mr-3 shrink-0 bg-primary"></span>
                  Why Choose Our Polycarbonate Stickers in Chennai?
                </h2>
                <ul className="space-y-3 text-navy">
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-5 h-5 mt-0.5 shrink-0 text-primary" strokeWidth={2.25} />
                    <span><strong>18+ years</strong> manufacturing polycarbonate stickers in Chennai</span>
                  </li>
                  {/* ISO Certified item removed (see git history) */}
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-5 h-5 mt-0.5 shrink-0 text-primary" strokeWidth={2.25} />
                    <span><strong>Custom designs</strong> for all industries in Chennai</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-5 h-5 mt-0.5 shrink-0 text-primary" strokeWidth={2.25} />
                    <span><strong>Fast delivery</strong> across Chennai & Tamil Nadu</span>
                  </li>
                </ul>
              </div>

              {/* Stats with SEO keywords */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <div className="card text-center p-4">
                  <h3 className="text-3xl sm:text-4xl font-bold text-primary">18+</h3>
                  <p className="text-sm mt-1 font-semibold text-navy">Years in Chennai</p>
                </div>
                <div className="card text-center p-4">
                  <h3 className="text-3xl sm:text-4xl font-bold text-primary">500+</h3>
                  <p className="text-sm mt-1 font-semibold text-navy">Chennai Clients</p>
                </div>
                <div className="card text-center p-4">
                  <h3 className="text-3xl sm:text-4xl font-bold text-primary">100%</h3>
                  <p className="text-sm mt-1 font-semibold text-navy">Quality Assured</p>
                </div>
              </div>

              {/* Location Keywords */}
              <div className="rounded-lg p-4 bg-white border border-line border-l-[3px] border-l-primary">
                <p className="text-sm text-navy">
                  <strong className="text-primary-hover">Service Areas:</strong> All Chennai areas
                </p>
              </div>
            </div>

            {/* Right Content - Image Showcase */}
            <div className="relative animate-fadeIn w-full max-w-xl mx-auto lg:max-w-none" style={{animationDelay: '0.2s'}}>
              {/* Main Image Display */}
              <div className="relative bg-white rounded-xl p-3 border border-line shadow-card">
                <div className="aspect-square rounded-lg overflow-hidden relative bg-ivory">
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

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-6 gap-2 mt-4">
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
              <div className="flex justify-center gap-2 mt-4" aria-hidden="true">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      isActive(index) ? 'w-8 bg-primary' : 'w-1.5 bg-line-strong'
                    }`}
                  ></div>
                ))}
              </div>

              {/* Product Types - SEO Rich */}
              <div className="mt-6 card p-5">
                <h3 className="font-bold mb-3 text-sm text-navy">
                  Our Products in Chennai:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    ['Polycarbonate Stickers', '/polycarbonate-stickers-chennai'],
                    ['Polyester Labels Chennai', '/polyester-vinyl-labels-chennai'],
                    ['Vinyl Stickers', '/polyester-vinyl-labels-chennai'],
                    ['Barcode Labels', '/barcode-serial-number-labels-chennai'],
                    ['Warning Labels', '/industrial-warning-labels-chennai'],
                    ['Serial Number Stickers', '/barcode-serial-number-labels-chennai'],
                  ].map(([label, href]) => (
                    <Link
                      key={label}
                      href={href}
                      className="chip py-1.5 transition-colors hover:border-primary hover:text-primary-hover"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;
