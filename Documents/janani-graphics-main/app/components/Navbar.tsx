'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { services } from '../data/services';
import { trackEvent } from '../lib/analytics';
import { Icon } from './Icons';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/#products' },
    { name: 'Materials', href: '/#materials' },
    { name: 'Contact', href: '/#contact' },
  ];

  // On the home page, scroll smoothly to the section; on other pages let the
  // link navigate to the home page section normally.
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const element = document.querySelector(href.replace(/^\//, ''));
    if (element) {
      e.preventDefault();
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      aria-label="Main"
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-line transition-shadow duration-300 ${
        isScrolled ? 'shadow-card' : 'shadow-soft'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/#home" 
            className="flex flex-col z-50 rounded-md whitespace-nowrap"
            onClick={(e) => scrollToSection(e, '/#home')}
          >
            <div className="text-2xl font-bold text-primary">
              Janani Graphics
            </div>
            <span className="text-xs text-muted">
              Labels & Stickers
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const isAboutLink = item.name === 'About';
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => isAboutLink ? undefined : scrollToSection(e, item.href)}
                  className="font-medium text-navy py-2 relative group rounded-sm hover:text-primary transition-colors"
                >
                  {item.name}
                  <span
                    className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"
                  ></span>
                </Link>
              );
            })}
            <div className="relative group">
              <button
                type="button"
                aria-haspopup="true"
                className="inline-flex items-center gap-1 font-medium text-navy py-2 rounded-sm hover:text-primary transition-colors"
              >
                Services
                <Icon name="chevronDown" className="w-4 h-4" />
              </button>
              <div className="absolute left-0 top-full pt-3 hidden group-hover:block group-focus-within:block">
                <ul className="bg-white rounded-lg shadow-card py-2 w-64 border border-line">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/${s.slug}`}
                        className="block px-4 py-2.5 text-navy hover:bg-ivory hover:text-primary transition-colors"
                      >
                        {s.navLabel}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <button 
              className="btn btn-primary"
              onClick={() => {
                trackEvent('click_call', { link_location: 'nav' });
                window.location.href = 'tel:+919840944808';
              }}
            >
              Call Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden z-50 w-11 h-11 inline-flex items-center justify-center rounded-lg text-navy hover:bg-primary-soft transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <Icon name={isMobileMenuOpen ? 'close' : 'menu'} className="w-6 h-6" strokeWidth={2} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'visible max-h-[40rem] opacity-100' : 'invisible max-h-0 opacity-0'
          }`}
        >
          <div className="pb-4 pt-2 mb-3 rounded-lg bg-white border border-line shadow-card">
            {navItems.map((item) => {
              const isAboutLink = item.name === 'About';
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => isAboutLink ? setIsMobileMenuOpen(false) : scrollToSection(e, item.href)}
                  className="block py-3 px-4 rounded text-navy hover:bg-primary-soft hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              );
            })}
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="block py-3 px-4 rounded text-navy hover:bg-primary-soft hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {s.navLabel}
              </Link>
            ))}
            <div className="px-4 mt-3">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="btn btn-primary w-full"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
