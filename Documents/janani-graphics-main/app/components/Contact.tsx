// components/Contact.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { trackEvent } from '../lib/analytics';
import { Icon, type IconName } from './Icons';

const InfoIcon = ({ name }: { name: IconName }) => (
  <span className="icon-tile">
    <Icon name={name} className="w-6 h-6" />
  </span>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
        company: formData.company,
        requirements: formData.message,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      trackEvent('generate_lead', { form_location: 'contact_form' });
      alert('Thank you! We will contact you soon for your label and sticker requirements.');
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      trackEvent('form_submit_error', { form_location: 'contact_form' });
      alert('Failed to send message. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const fields = [
    { id: 'contact-name', name: 'name', label: 'Full Name *', type: 'text', placeholder: 'Enter your name', required: true },
    { id: 'contact-email', name: 'email', label: 'Email Address *', type: 'email', placeholder: 'your.email@example.com', required: true },
    { id: 'contact-phone', name: 'phone', label: 'Phone Number *', type: 'tel', placeholder: '+91 XXXXX XXXXX', required: true },
    { id: 'contact-company', name: 'company', label: 'Company Name', type: 'text', placeholder: 'Your company name (optional)', required: false },
  ] as const;

  return (
    <section 
      id="contact" 
      className="py-16 md:py-24 bg-ivory border-t border-line"
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
              Get In Touch
            </span>
          </div>
          
          <h2 className="section-title text-navy mb-4">
            Contact Us for <span className="text-primary">Polycarbonate Stickers</span>
          </h2>
          <p className="section-lead">
            Request a quote for <strong className="text-navy">polycarbonate stickers in Chennai</strong> or discuss your labeling requirements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Header Card */}
            <div className="card p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 flex items-center text-navy">
                <span className="w-1 h-9 rounded-full mr-4 shrink-0 bg-primary"></span>
                Contact Information
              </h3>
              <p className="text-lg text-muted">
                Reach out to Chennai&apos;s leading polycarbonate sticker manufacturer
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {/* Location */}
              <div className="card card-hover p-5">
                <div className="flex items-start gap-4">
                  <InfoIcon name="mapPin" />
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-navy">Our Location</h4>
                    <p className="text-muted">
                      Anakaputhur, Chennai<br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="card card-hover p-5">
                <div className="flex items-start gap-4">
                  <InfoIcon name="phone" />
                  <a href="tel:+919840944808" className="block rounded-sm">
                    <h4 className="font-bold text-lg mb-1 text-navy">Call Us</h4>
                    <p className="text-lg font-semibold text-primary">
                      +91 98409 44808
                    </p>
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="card card-hover p-5">
                <div className="flex items-start gap-4">
                  <InfoIcon name="mail" />
                  <a href="mailto:jananilabels@gmail.com" className="block rounded-sm">
                    <h4 className="font-bold text-lg mb-1 text-navy">Email Us</h4>
                    <p className="text-muted">
                      jananilabels@gmail.com
                    </p>
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="card card-hover p-5">
                <div className="flex items-start gap-4">
                  <InfoIcon name="clock" />
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-navy">Business Hours</h4>
                    <p className="text-muted">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm mt-1 text-muted">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="card p-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-lg bg-ivory border border-line">
                  <div className="text-3xl font-bold mb-1 text-primary">24-48h</div>
                  <p className="text-sm font-semibold text-navy">Quick Delivery</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-ivory border border-line">
                  <div className="text-3xl font-bold mb-1 text-primary">18+</div>
                  <p className="text-sm font-semibold text-navy">Years Experience</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="card shadow-card p-6 md:p-10">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 text-navy">
                  Request a Quote
                </h3>
                <p className="text-muted">
                  Fill out the form below for label and sticker quotes
                </p>
              </div>

              <div className="space-y-5">
                {fields.map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block font-semibold mb-2 text-sm text-navy">
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="field"
                      required={field.required}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="contact-message" className="block font-semibold mb-2 text-sm text-navy">
                    Your Requirements *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your label or sticker requirements (material, size, quantity)..."
                    className="field resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="btn btn-primary w-full text-lg py-3.5"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Icon name="arrowRight" className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-sm text-center text-muted">
                  We&apos;ll respond within 24 hours with a custom quote for your labels and stickers
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SEO Hidden Content */}
        <div className="hidden">
          <h4>Contact Polycarbonate Stickers Chennai</h4>
          <p>Contact us for polycarbonate stickers in Chennai. We are located in Anakaputhur, Chennai. Call us at +91 98409 44808 or email jananilabels@gmail.com for quotes on polycarbonate stickers, polyester labels, and vinyl stickers in Chennai.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
