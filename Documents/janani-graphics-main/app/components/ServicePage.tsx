// components/ServicePage.tsx
import React from 'react';
import Link from 'next/link';
import Navbar from './Navbar';
import Contact from './Contact';
import Footer from './Footer';
import { AREAS_SERVED, SITE_URL, services, type ServiceConfig } from '../data/services';
import { Icon } from './Icons';

const JsonLd = ({ data }: { data: object }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

const ServicePage = ({ service }: { service: ServiceConfig }) => {
  const url = `${SITE_URL}/${service.slug}`;
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <main className="min-h-screen bg-white">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.h1,
          serviceType: service.kicker,
          description: service.metaDescription,
          url,
          image: `${SITE_URL}/${service.image}.png`,
          provider: { '@type': 'LocalBusiness', '@id': SITE_URL, name: 'Janani Labels' },
          areaServed: AREAS_SERVED.map((name) => ({ '@type': 'Place', name })),
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: service.navLabel, item: url },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: service.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        }}
      />

      <Navbar />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-14 md:pb-16 bg-ivory">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm mb-6 text-muted">
            <Link href="/" className="font-medium text-primary-hover hover:underline underline-offset-2">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span>{service.navLabel}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="space-y-6">
              <span className="eyebrow">
                {service.kicker}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-navy">
                {service.h1}
              </h1>
              {service.intro.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-navy">
                  {p}
                </p>
              ))}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a href="#contact" className="btn btn-primary">
                  Get a Quote
                </a>
                <a href="tel:+919840944808" className="btn btn-secondary">
                  Call +91 98409 44808
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-3 border border-line shadow-card">
              <img
                src={`/${service.image}.png`}
                alt={service.imageAlt}
                className="w-full aspect-square rounded-lg object-contain bg-ivory p-2"
                width={800}
                height={800}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-14 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-navy">
            Why choose Janani Labels for {service.navLabel.toLowerCase()} in Chennai
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((b) => (
              <div key={b.title} className="card card-hover p-6">
                <span className="icon-tile mb-4">
                  <Icon name="check" className="w-6 h-6" strokeWidth={2} />
                </span>
                <h3 className="text-xl font-bold mb-2 text-navy">
                  {b.title}
                </h3>
                <p className="leading-relaxed text-muted">
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keyword sections (only rendered when a service defines them) */}
      {service.spotlights?.length ? (
        <section className="pb-14 md:pb-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-10">
            {service.spotlights.map((spotlight) => (
              <div key={spotlight.heading}>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-navy">
                  {spotlight.heading}
                </h2>
                <p className="leading-relaxed text-navy">{spotlight.body}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Use cases + areas */} 
      <section className="py-14 md:py-16 bg-ivory border-y border-line">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 md:gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-navy">
              Typical uses
            </h2>
            <ul className="flex flex-wrap gap-2.5">
              {service.useCases.map((u) => (
                <li key={u} className="chip">
                  {u}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-navy">
              Areas we serve
            </h2>
            <p className="leading-relaxed mb-4 text-navy">
              Our unit is in Anakaputhur, Chennai. We supply {service.navLabel.toLowerCase()} to customers in{' '}
              {AREAS_SERVED.slice(1).join(', ')} and across Chennai and Tamil Nadu.
            </p>
            <p className="text-navy">
              Anakaputhur, Chennai – 600070 ·{' '}
              <a href="tel:+919840944808" className="font-semibold text-primary-hover hover:underline underline-offset-2">
                +91 98409 44808
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-navy">
            {service.navLabel} in Chennai: common questions
          </h2>
          <div className="space-y-3">
            {service.faqs.map((faq) => (
              <details key={faq.question} className="card p-5 md:p-6 group">
                <summary className="text-lg font-bold cursor-pointer text-navy marker:text-primary">
                  {faq.question}
                </summary>
                <p className="mt-3 leading-relaxed text-muted">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="pb-14 md:pb-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-navy">
            Our other labels and stickers
          </h2>
          <ul className="flex flex-wrap justify-center gap-3">
            {others.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="btn btn-secondary">
                  {s.navLabel} Chennai
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
};

export default ServicePage;
