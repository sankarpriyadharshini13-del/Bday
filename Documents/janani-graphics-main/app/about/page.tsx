import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import { Icon } from '../components/Icons';

export const metadata: Metadata = {
  title: 'About Us | Label Manufacturer in Chennai – Janani Labels',
  description: 'Janani Labels is a trusted label manufacturer in Chennai with 18+ years experience. Custom polycarbonate, polyester, vinyl & barcode labels. 3M adhesive. Call +91 98409 44808.',
  openGraph: {
    title: 'About Us | Label Manufacturer in Chennai – Janani Labels',
    description: 'Janani Labels is a trusted label manufacturer in Chennai with 18+ years experience. Custom polycarbonate, polyester, vinyl & barcode labels. 3M adhesive. Call +91 98409 44808.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-36 md:pb-16 bg-gradient-to-b from-ivory to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4">
              About <span className="text-primary">Janani Labels</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted mb-6">
              Trusted Label Manufacturer in Chennai with 18+ Years of Excellence
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-soft border border-line">
              <Icon name="mapPin" className="w-5 h-5 text-primary" />
              <span className="font-semibold text-navy">
                Anakaputhur, Chennai, Tamil Nadu
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Our Story as a Label Manufacturer
              </h2>
              <div className="space-y-6 text-lg text-navy">
                <p className="leading-relaxed">
                  Janani Labels has been a leading <strong className="text-primary">label manufacturer in Chennai</strong> since 2006. Based in Anakaputhur, we have built a reputation for excellence in manufacturing custom labels and stickers for businesses across Chennai and Tamil Nadu.
                </p>
                <p className="leading-relaxed">
                  As a direct <strong className="text-primary">label manufacturer</strong>, we control every aspect of production from design to finishing. This allows us to maintain strict quality standards and deliver products that meet the exact specifications of our clients. Our manufacturing unit is equipped with modern technology to produce high-quality labels at competitive prices.
                </p>
                <p className="leading-relaxed">
                  Over the past 18+ years, we have served hundreds of clients across various industries including manufacturing, automotive, electronics, logistics, and industrial sectors. Our commitment to quality, timely delivery, and customer satisfaction has made us a preferred <strong className="text-primary">label manufacturer</strong> in the region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Manufacture */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Label Manufacturing Services
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              As a comprehensive label manufacturer in Chennai, we produce a wide range of custom labels and stickers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="card p-6 card-hover">
              <div className="w-12 h-12 rounded-lg bg-primary-soft flex items-center justify-center mb-4">
                <Icon name="shield" className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Polycarbonate Labels</h3>
              <p className="text-muted">
                Heat and chemical resistant labels for machinery, equipment, and control panels with 3M adhesive.
              </p>
            </div>

            <div className="card p-6 card-hover">
              <div className="w-12 h-12 rounded-lg bg-primary-soft flex items-center justify-center mb-4">
                <Icon name="layers" className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Polyester & Vinyl Labels</h3>
              <p className="text-muted">
                Waterproof, durable labels for product identification, asset tags, and branding applications.
              </p>
            </div>

            <div className="card p-6 card-hover">
              <div className="w-12 h-12 rounded-lg bg-primary-soft flex items-center justify-center mb-4">
                <Icon name="barcode" className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Barcode & Serial Labels</h3>
              <p className="text-muted">
                High-contrast scannable codes for inventory tracking, asset management, and product traceability.
              </p>
            </div>

            <div className="card p-6 card-hover">
              <div className="w-12 h-12 rounded-lg bg-primary-soft flex items-center justify-center mb-4">
                <Icon name="warning" className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Industrial Warning Labels</h3>
              <p className="text-muted">
                High-visibility caution and safety labels with custom wording and symbols for workplace safety.
              </p>
            </div>

            <div className="card p-6 card-hover">
              <div className="w-12 h-12 rounded-lg bg-primary-soft flex items-center justify-center mb-4">
                <Icon name="tag" className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Custom Stickers</h3>
              <p className="text-muted">
                Fully custom stickers in any size, shape, and design for branding, marketing, and identification.
              </p>
            </div>

            <div className="card p-6 card-hover">
              <div className="w-12 h-12 rounded-lg bg-primary-soft flex items-center justify-center mb-4">
                <Icon name="cpu" className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Equipment Labels</h3>
              <p className="text-muted">
                Durable identification labels for machinery, electronic devices, and industrial equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Why Choose Janani Labels as Your Label Manufacturer?
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              We deliver quality, reliability, and value in every label we manufacture
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center shrink-0">
                <Icon name="check" className="w-6 h-6 text-primary" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-2">18+ Years Experience</h3>
                <p className="text-muted">
                  Proven expertise as a label manufacturer serving businesses across Chennai and Tamil Nadu since 2006.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center shrink-0">
                <Icon name="check" className="w-6 h-6 text-primary" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-2">Direct from Manufacturer</h3>
                <p className="text-muted">
                  No middlemen – you deal directly with our manufacturing team for better prices and faster turnaround.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center shrink-0">
                <Icon name="check" className="w-6 h-6 text-primary" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-2">3M Adhesive Standard</h3>
                <p className="text-muted">
                  Strong, reliable 3M adhesive on every label for lasting performance on metal, plastic, and coated surfaces.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center shrink-0">
                <Icon name="check" className="w-6 h-6 text-primary" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-2">Multiple Materials</h3>
                <p className="text-muted">
                  Polycarbonate, polyester, vinyl, and paper substrates to match your specific application needs.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center shrink-0">
                <Icon name="check" className="w-6 h-6 text-primary" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-2">Custom Solutions</h3>
                <p className="text-muted">
                  Any size, shape, color, and artwork – fully customized to your brand and requirements.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center shrink-0">
                <Icon name="check" className="w-6 h-6 text-primary" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-2">Fast Delivery</h3>
                <p className="text-muted">
                  Standard orders dispatched within 3–5 working days with delivery across Chennai and Tamil Nadu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="card p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-primary">18+</div>
              <p className="font-bold text-navy">Years Experience</p>
              <p className="text-sm mt-1 text-muted">Label Manufacturer</p>
            </div>
            <div className="card p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-primary">500+</div>
              <p className="font-bold text-navy">Happy Clients</p>
              <p className="text-sm mt-1 text-muted">Across Tamil Nadu</p>
            </div>
            <div className="card p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-primary">10K+</div>
              <p className="font-bold text-navy">Orders Delivered</p>
              <p className="text-sm mt-1 text-muted">Custom Labels</p>
            </div>
            <div className="card p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-primary">100%</div>
              <p className="font-bold text-navy">Quality Focus</p>
              <p className="text-sm mt-1 text-muted">Every Label</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Visit Our Label Manufacturing Unit
            </h2>
            <p className="text-xl text-muted mb-8">
              Located in Anakaputhur, Chennai – easily accessible from Pallavaram, Chromepet, Tambaram, Guindy, and Meenambakkam
            </p>
            <div className="card p-8 inline-block">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Icon name="mapPin" className="w-6 h-6 text-primary" />
                <span className="text-lg font-semibold text-navy">
                  Anakaputhur, Chennai – 600070
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <Icon name="phone" className="w-6 h-6 text-primary" />
                <span className="text-lg font-semibold text-navy">
                  +91 98409 44808
                </span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Icon name="mail" className="w-6 h-6 text-primary" />
                <span className="text-lg font-semibold text-navy">
                  jananilabels@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
