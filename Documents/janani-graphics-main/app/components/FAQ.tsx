// components/FAQ.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icons';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What are polycarbonate stickers and how do they differ from polyester labels?",
      answer: "Polycarbonate stickers are high-performance adhesive labels made from polycarbonate plastic, a durable thermoplastic material. Unlike polyester labels, polycarbonate stickers can withstand extreme temperatures (-40°C to +120°C), harsh chemicals, and UV exposure without degrading. They maintain their print quality and adhesion for 7-10+ years in industrial environments, making them the preferred choice for critical labeling applications in Chennai's manufacturing sector.",
      keywords: "polycarbonate stickers, polyester labels, difference, durability"
    },
    {
      question: "Are you a direct sticker manufacturer in Chennai for custom and industrial orders?",
      answer: "Yes, Janani Labels is a direct sticker manufacturer in Chennai based in Anakaputhur. With over 18 years of manufacturing experience, we produce custom polycarbonate stickers, vinyl decals, polyester labels, and 3M adhesive stickers for machinery, automotive, electronics, and industrial equipment. Dealing directly with us guarantees competitive factory pricing, custom die-cut shapes, and quick turnaround.",
      keywords: "sticker manufacturer chennai, custom sticker manufacturer, industrial stickers chennai"
    },
    {
      question: "Why should I choose Janani Labels for polycarbonate stickers in Chennai?",
      answer: "Janani Labels (formerly known as Janani Graphics) is the leading polycarbonate sticker manufacturer in Chennai with 18+ years of experience. We offer: custom designs for all industries, 3M adhesive technology for superior bonding, fast delivery across Chennai and Tamil Nadu, and competitive pricing for bulk orders. Our polycarbonate stickers are trusted by 1000+ clients including automotive, electronics, and machinery industries across the region.",
      keywords: "Janani Labels, Janani Graphics, polycarbonate stickers Chennai, manufacturer"
    },
    {
      question: "What are the typical applications for polycarbonate stickers in Chennai?",
      answer: "Polycarbonate stickers in Chennai are widely used for: equipment identification labels, safety and warning labels, barcode and serial number stickers, automotive component labeling, electronic device identification, machinery nameplates, asset tracking tags, and brand identity labels. They're ideal for any application requiring durability, weather resistance, and long-term performance in harsh industrial conditions.",
      keywords: "polycarbonate stickers applications, industrial labels, warning labels, barcode labels"
    },
    {
      question: "How long do polycarbonate stickers last compared to vinyl stickers?",
      answer: "Polycarbonate stickers typically last 7-10 years or more in harsh conditions, while vinyl stickers usually last 3-5 years. Polycarbonate maintains its color and adhesion in extreme temperatures, chemicals, and UV exposure, whereas vinyl can fade, yellow, or peel over time. For industrial applications in Chennai where durability is critical, polycarbonate stickers offer superior longevity and cost-effectiveness over their lifespan.",
      keywords: "polycarbonate stickers durability, vs vinyl stickers, longevity"
    },
    {
      question: "Can polycarbonate stickers be customized for my specific needs?",
      answer: "Yes! Janani Labels offers fully customized polycarbonate stickers in any size, shape, color, and design. We handle custom printing for logos, barcodes, text, warnings, and specifications. Our design team can create solutions for: equipment identification, branding, compliance labeling, and specialized industrial applications. Custom orders are processed quickly with fast delivery across Chennai and Tamil Nadu.",
      keywords: "custom polycarbonate stickers, customization, design, Chennai"
    },
    {
      question: "What temperature range can polycarbonate stickers withstand?",
      answer: "Polycarbonate stickers manufactured by Janani Labels are designed to withstand temperatures from -40°C to +120°C, making them suitable for extreme environments. This temperature range covers: cold storage applications, high-heat industrial equipment, outdoor exposure in Chennai's tropical climate, and both freezing and hot conditions. This exceptional temperature stability makes them ideal for automotive, electronics, and heavy machinery labeling.",
      keywords: "polycarbonate stickers temperature, -40 to +120, heat resistance, cold"
    },
    {
      question: "Are Janani Labels' polycarbonate stickers chemical resistant?",
      answer: "Yes, our polycarbonate stickers are highly resistant to oils, solvents, alcohols, and harsh industrial chemicals. They maintain their integrity and adhesion even when exposed to: cleaning agents, automotive fluids, industrial oils, and chemical processing environments. This chemical resistance combined with 3M adhesive technology ensures that labels remain readable and firmly bonded in the most demanding industrial applications across Chennai.",
      keywords: "chemical resistant stickers, polycarbonate, industrial chemicals, oil resistant"
    },
    {
      question: "Do you offer fast delivery for polycarbonate sticker orders in Chennai?",
      answer: "Absolutely! Janani Labels commits to fast turnaround times on all polycarbonate sticker orders. We typically deliver within 24-48 hours for standard orders across all areas of Chennai and Tamil Nadu. Our manufacturing facility in Anakaputhur is strategically located to provide quick delivery to clients throughout the region. Rush orders are also available for urgent requirements.",
      keywords: "fast delivery, polycarbonate stickers Chennai, 24 hours, quick turnaround"
    },
    {
      question: "What makes 3M adhesive on polycarbonate stickers superior?",
      answer: "3M adhesive technology provides superior bonding performance compared to standard adhesives. It creates permanent, waterproof bonds on various surfaces including metal, plastic, powder-coated, and composite materials. 3M adhesive maintains its holding strength through temperature fluctuations, moisture exposure, and vibration, ensuring labels remain firmly attached for the entire lifespan of your equipment. This is why Janani Labels exclusively uses 3M technology for all polycarbonate sticker production.",
      keywords: "3M adhesive, polycarbonate stickers, superior bonding, permanent adhesion"
    },
    {
      question: "How do I order polycarbonate stickers from Janani Labels in Chennai?",
      answer: "Ordering is simple! Contact Janani Labels at +91 98409 44808 or email jananilabels@gmail.com with your requirements. Share your design, quantity, size specifications, and delivery timeline. Our team will provide a custom quote, discuss any design adjustments, and proceed with manufacturing. You can also request a quote through our website's contact form. We serve all areas of Chennai and Tamil Nadu with professional service and competitive pricing.",
      keywords: "order polycarbonate stickers, contact Janani Labels, quote, Chennai"
    },
    {
      question: "Do you make polyester and vinyl labels as well as polycarbonate stickers?",
      answer: "Yes. Janani Labels makes polyester labels chennai and vinyl stickers in Chennai, printed to your design and cut to the size you need. Polyester labels resist moisture, abrasion and many chemicals and are popular for asset tags and product labels. Vinyl stickers are flexible and conform to curved surfaces, which suits branding, packaging and outdoor use. Tell us where the label will be used and we will help you choose between polyester, vinyl and polycarbonate.",
      keywords: "polyester labels chennai, vinyl stickers, Chennai, custom printing"
    },
    {
      question: "Which material should I choose: polycarbonate, polyester or vinyl?",
      answer: "Polycarbonate is a rigid, tough film that suits nameplates and control-panel overlays on equipment. Polyester is flexible and dimensionally stable and resists moisture and many chemicals, so it suits asset tags, barcode labels and product labels. Vinyl is the most flexible and conforms to curved or uneven surfaces, so it suits branding, packaging and outdoor stickers. The right choice depends on the surface, the conditions and how long the label has to last, so tell us where it will be used and we will recommend a material.",
      keywords: "polycarbonate vs polyester, vinyl, material choice, labels"
    },
    {
      question: "Can you print barcode, QR code and serial number labels in Chennai?",
      answer: "Yes. Janani Labels prints barcode labels, QR code stickers and serial number stickers in Chennai for inventory control, asset tracking and equipment traceability. Codes are printed in high contrast so they scan reliably, and sequential numbering and custom layouts are supported, so each unit can have its own unique number. You can choose polyester, vinyl or polycarbonate depending on how much wear and heat the label will see.",
      keywords: "barcode labels, QR code stickers, serial number stickers, Chennai"
    },
    {
      question: "Do you make industrial warning and caution labels?",
      answer: "Yes. We make high-visibility warning labels, caution stickers and equipment identification labels in Chennai, printed to your wording, symbols and colour scheme. They are fitted with 3M adhesive for a firm bond on metal, plastic and powder-coated surfaces, and the material ranges from polyester to polycarbonate so the label suits the conditions it will face.",
      keywords: "warning labels, caution stickers, industrial labels, Chennai"
    },
    {
      question: "Does Janani Graphics still operate? What's the relationship with Janani Labels?",
      answer: "Janani Graphics is now operating as Janani Labels, our dedicated polycarbonate sticker manufacturing division in Chennai. We maintain the same quality standards, expertise, and customer service that Janani Graphics was known for, with 18+ years of manufacturing excellence. Whether you search for 'Janani Graphics' or 'Janani Labels,' you'll find the same professional polycarbonate sticker solutions for industrial applications in Chennai.",
      keywords: "Janani Graphics, Janani Labels, same company, polycarbonate stickers"
    }
  ];

  return (
    <section 
      className="py-16 md:py-24 bg-white"
    >
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
            Frequently Asked Questions
          </h2>
          <p className="section-lead">
            Everything you need to know about <strong className="text-navy">polycarbonate stickers in Chennai</strong> from <strong className="text-navy">Janani Labels</strong>
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="card overflow-hidden"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 md:px-8 py-5 text-left hover:bg-ivory transition-colors flex items-center justify-between gap-4"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-bold text-navy">
                  {faq.question}
                </h3>
                <span
                  className="flex-shrink-0 text-primary transition-transform duration-200"
                  style={{
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  <Icon name="chevronDown" className="w-6 h-6" strokeWidth={2} />
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <motion.div
                  id={`faq-answer-${index}`}
                  className="px-5 md:px-8 pt-4 pb-6 border-t border-line"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="text-lg leading-relaxed mb-4 text-muted">
                    {faq.answer}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {faq.keywords.split(', ').map((keyword, idx) => (
                      <span key={idx} className="chip">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          className="mt-14 rounded-xl border border-line bg-primary-soft p-8 md:p-10 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Still have questions about polycarbonate stickers?
          </h3>
          <p className="text-navy text-lg mb-6 max-w-2xl mx-auto">
            Contact Janani Labels directly for expert advice on polycarbonate sticker solutions tailored to your needs
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Us Now
            <Icon name="arrowRight" className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* FAQ Schema for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  );
};

export default FAQ;