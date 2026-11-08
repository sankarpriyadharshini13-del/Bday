// components/Footer.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { services } from '../data/services';

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Janani Graphics</h3>
            <p className="text-white/80">
              Premium industrial labels and stickers manufacturer with 18+ years of experience.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/#home" className="text-white/80 hover:text-peach transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-white/80 hover:text-peach transition-colors">About</Link></li>
              <li><Link href="/#products" className="text-white/80 hover:text-peach transition-colors">Products</Link></li>
              <li><Link href="/#contact" className="text-white/80 hover:text-peach transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Products</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/${service.slug}`} className="text-white/80 hover:text-peach transition-colors">
                    {service.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Contact</h4>
            <ul className="space-y-2">
              <li className="text-white/80">Anakaputhur, Chennai</li>
              <li className="text-white/80">+91 98409 44808</li>
              <li className="text-white/80">jananilabels@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 mt-8 pt-8 text-center text-white/80 flex flex-col md:flex-row items-center justify-center gap-2">
  <p>&copy; 2025 Janani Graphics. All rights reserved.</p>
  <span className="hidden md:inline">·</span>
  <p>
    Crafted by{" "}
    <a
      href="https://digitalnanban.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-peach transition-colors"
    >
      Digital Nanban
    </a>
  </p>
</div>
      </div>
    </footer>
  );
};

export default Footer;