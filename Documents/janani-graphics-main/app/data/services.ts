// app/data/services.ts
// Service configuration for Janani Labels
import type { Metadata } from 'next';

export const SITE_URL = 'https://jananilabels.in';

export const AREAS_SERVED = [
  'Chennai',
  'Anakaputhur',
  'Pallavaram',
  'Chromepet',
  'Tambaram',
  'Guindy',
  'Meenambakkam',
];

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceConfig {
  slug: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  kicker: string;
  intro: string[];
  benefits: { title: string; text: string }[];
  /** Optional keyword sections rendered below the benefits grid. */
  spotlights?: { heading: string; body: string }[];
  useCases: string[];
  faqs: ServiceFaq[];
  image: string;
  imageAlt: string;
}

export const services: ServiceConfig[] = [
  {
    slug: 'polycarbonate-stickers-chennai',
    navLabel: 'Polycarbonate Stickers',
    metaTitle: 'Polycarbonate Stickers Chennai | Custom Labels Manufacturer – Janani Labels',
    metaDescription:
      'Custom polycarbonate stickers and labels made in Chennai by Janani Labels. 3M adhesive, heat and chemical resistant. Call +91 98409 44808 for a quote.',
    h1: 'Polycarbonate Stickers in Chennai',
    kicker: 'Polycarbonate stickers & labels manufacturer',
    intro: [
      'Janani Labels manufactures custom polycarbonate stickers and labels in Chennai for equipment, machinery, electronics and automotive parts. Polycarbonate is a tough, dimensionally stable plastic film that keeps its print sharp where paper and basic vinyl labels fade, curl or peel.',
      'Every sticker is made to your artwork, size and shape and fitted with 3M adhesive for a firm bond on metal, powder-coated and plastic surfaces. With 18+ years of experience from our unit in Anakaputhur, we supply polycarbonate nameplate stickers and control-panel labels to businesses across Chennai and Tamil Nadu.',
    ],
    benefits: [
      {
        title: 'Heat & chemical resistant',
        text: 'Holds up to oils, solvents and cleaning agents, and handles temperatures from -40°C to +120°C.',
      },
      {
        title: 'Scratch and abrasion resistant',
        text: 'The hard surface keeps text and logos readable on parts that are handled and wiped every day.',
      },
      {
        title: '3M adhesive bonding',
        text: 'Strong, long-lasting adhesion on metal, plastic and powder-coated surfaces.',
      },
      {
        title: 'Fully custom',
        text: 'Any size, shape, colour and artwork, including logos, barcodes and serial numbers.',
      },
    ],
    useCases: [
      'Machine nameplates',
      'Control-panel overlays',
      'Equipment identification',
      'Electronic device labels',
      'Automotive components',
      'Brand identity labels',
    ],
    faqs: [
      {
        question: 'What are polycarbonate stickers used for?',
        answer:
          'They are used where a label has to last: machinery nameplates, equipment identification, control panels, electronic devices and automotive components. Their hard, stable surface keeps printing readable in demanding conditions.',
      },
      {
        question: 'Can I get custom polycarbonate stickers in small quantities?',
        answer:
          'Yes. Share your artwork, size and quantity on +91 98409 44808 or at jananilabels@gmail.com and we will send you a quote.',
      },
      {
        question: 'Do you supply polycarbonate stickers outside Chennai?',
        answer:
          'Yes. We are based in Anakaputhur, Chennai, and supply customers across Chennai and the rest of Tamil Nadu.',
      },
      {
        question: 'What adhesive do you use on polycarbonate labels?',
        answer:
          '3M adhesive, chosen for strong bonding on metal, plastic and powder-coated surfaces and stable performance as temperatures change.',
      },
    ],
    image: 'brandbird-1',
    imageAlt: 'Custom polycarbonate stickers made by Janani Labels in Chennai',
  },
  {
    slug: 'polyester-vinyl-labels-chennai',
    navLabel: 'Polyester & Vinyl Labels',
    metaTitle: 'Polyester Labels Chennai | Custom Vinyl Labels – Janani Labels',
    metaDescription:
      'Polyester labels chennai and custom vinyl labels printed in Chennai. Waterproof, durable labels with 3M adhesive. Call +91 98409 44808 for a quote.',
    h1: 'Polyester & Vinyl Labels in Chennai',
    kicker: 'Polyester labels & custom vinyl labels',
    intro: [
      'Not every label needs polycarbonate. For product labelling, asset tags, packaging and general-purpose identification, polyester and custom vinyl labels give you excellent durability at a lower cost. Janani Labels makes polyester labels chennai in our Anakaputhur unit, printed to your design and cut to the size you need.',
      'Waterproof sticker printing in Chennai is one of our most requested jobs: polyester labels resist moisture, abrasion and many chemicals, and stay legible for years. Vinyl stickers are flexible and conform to curved surfaces, which makes them a good fit for branding, packaging and outdoor use. Our team will help you pick the right material for your surface and conditions.',
    ],
    spotlights: [
      {
        heading: 'Custom Vinyl Labels in Chennai',
        body: 'Custom vinyl labels are printed in-house in Anakaputhur to your artwork, size and shape. Every order is made to order, so you choose the vinyl grade, the finish, the die-cut shape and the adhesive: 3M adhesive for strong bonding on metal, plastic, glass and powder-coated surfaces. Because vinyl is flexible, custom vinyl labels sit flat on curved bottles, tubes, panels and uneven surfaces where a rigid label would lift or wrinkle. We supply them as individual stickers, sheets or rolls, in small runs for a product launch or in bulk for regular production, and the print resists water, sunlight and everyday handling. Common uses include product labels, brand logo stickers, packaging seals, promotional stickers, jar and bottle labels and outdoor signs, with optional lamination for extra gloss or a matt finish. Send your artwork, size and quantity on +91 98409 44808 and we will confirm the material, price and delivery date.',
      },
      {
        heading: 'Waterproof Sticker Printing in Chennai',
        body: 'Waterproof sticker printing in Chennai for anything that meets water: product labels, packaging, bottle and jar labels, outdoor stickers and equipment tags that get washed down. We print the stock in-house in Anakaputhur with a water-resistant finish, cut it to the shape you need and back it with 3M adhesive so it stays flat on damp, chilled or humid surfaces. Send your artwork, size and quantity and we will confirm the material, price and delivery date.',
      },
    ],
    benefits: [
      {
        title: 'Waterproof & durable',
        text: 'Both materials resist water, moisture and everyday wear, so labels stay in place and readable.',
      },
      {
        title: 'Flexible vinyl',
        text: 'Custom vinyl labels conform to curved and uneven surfaces, so they suit packaging, bottles and branding.',
      },
      {
        title: 'Stable polyester',
        text: 'Polyester labels stay dimensionally stable and are a popular choice for asset tags and product labels.',
      },
      {
        title: 'Custom printing',
        text: 'Your logo, text, colours and codes, in any size or shape, in quantities that match your order.',
      },
    ],
    useCases: [
      'Custom vinyl labels',
      'Product labels',
      'Asset tags',
      'Packaging stickers',
      'Brand logo stickers',
      'Outdoor labels',
      'Equipment labels',
    ],
    faqs: [
      {
        question: 'What is the difference between polyester and vinyl labels?',
        answer:
          'Polyester is a rigid, stable film that resists chemicals and abrasion well, so it suits asset tags and product labels. Vinyl is softer and more flexible, so it conforms to curved surfaces and suits branding and packaging. We can advise on the better choice for your surface.',
      },
      {
        question: 'Are vinyl stickers waterproof?',
        answer:
          'Yes, vinyl stickers resist water and moisture. For harsh chemical, heat or abrasion exposure we usually recommend polyester or polycarbonate instead.',
      },
      {
        question: 'Can you print my logo on vinyl stickers?',
        answer:
          'Yes. Send your logo or artwork and the size you need, and we will print and cut it to shape. Call +91 98409 44808 or email jananilabels@gmail.com.',
      },
      {
        question: 'What are custom vinyl labels used for?',
        answer:
          'Custom vinyl labels are used for product labels, brand logo stickers, packaging seals, bottle and jar labels, promotional stickers and outdoor signs. They are the flexible option in our range: they conform to curved and uneven surfaces, resist water and sunlight, and can be die-cut to any size or shape.',
      },
      {
        question: 'How do I order custom vinyl labels in Chennai?',
        answer:
          'Send your artwork, size, quantity and preferred finish on +91 98409 44808 or at jananilabels@gmail.com. We produce custom vinyl labels in Anakaputhur, Chennai, and supply them across the city and Tamil Nadu.',
      },
      {
        question: 'Do you deliver polyester labels across Chennai?',
        answer:
          'Yes, we supply polyester labels chennai across the city, including Anakaputhur, Pallavaram, Chromepet, Tambaram and Guindy, and across Tamil Nadu.',
      },
    ],
    image: 'brandbird-2',
    imageAlt: 'Custom vinyl labels and polyester stickers printed in Chennai by Janani Labels',
  },
  {
    slug: 'barcode-serial-number-labels-chennai',
    navLabel: 'Barcode & Serial Number Labels',
    metaTitle: 'Barcode Labels & Serial Number Stickers Chennai – Janani Labels',
    metaDescription:
      'Barcode labels, QR code stickers and serial number stickers printed in Chennai for inventory and asset tracking. Durable, scannable. Call +91 98409 44808.',
    h1: 'Barcode & Serial Number Labels in Chennai',
    kicker: 'Barcode, QR & serial number stickers',
    intro: [
      'Accurate tracking starts with a label that scans every time. Janani Labels prints barcode labels, QR code stickers and serial number stickers in Chennai for inventory control, asset tracking and equipment traceability.',
      'We print sharp, high-contrast codes on durable materials, so the label stays readable and scannable through handling, cleaning and years of use. Sequential numbering and custom layouts are supported, so each unit gets its own unique identity. Choose polyester, vinyl or polycarbonate depending on how harsh the environment is.',
    ],
    benefits: [
      {
        title: 'Scannable codes',
        text: 'Crisp, high-contrast printing so barcodes and QR codes scan reliably.',
      },
      {
        title: 'Sequential numbering',
        text: 'Unique serial numbers for each unit, in the sequence and format you specify.',
      },
      {
        title: 'Durable materials',
        text: 'Pick polyester, vinyl or polycarbonate, depending on how much wear and heat the label will see.',
      },
      {
        title: 'Custom layouts',
        text: 'Add your logo, product details and compliance text next to the code.',
      },
    ],
    useCases: [
      'Inventory labels',
      'Asset tags',
      'Serial number plates',
      'QR code stickers',
      'Warehouse labels',
      'Product traceability',
    ],
    faqs: [
      {
        question: 'Can you print serial numbers in sequence?',
        answer:
          'Yes. Tell us the starting number, format and quantity, and we will print each label with its own unique sequential number.',
      },
      {
        question: 'Which material is best for barcode labels?',
        answer:
          'For general inventory use, polyester or vinyl works well. For equipment exposed to heat, oils or heavy handling, we recommend polycarbonate. We will suggest one based on your use.',
      },
      {
        question: 'Can you print QR code stickers?',
        answer:
          'Yes. Send us the link or data you want encoded and the size you need, and we will print QR code stickers that scan cleanly.',
      },
      {
        question: 'How do I order barcode labels in Chennai?',
        answer:
          'Call +91 98409 44808 or email jananilabels@gmail.com with your design, quantity and size. We will send you a quote.',
      },
    ],
    image: 'brandbird-4',
    imageAlt: 'Barcode labels and serial number stickers printed by Janani Labels in Chennai',
  },
  {
    slug: 'industrial-warning-labels-chennai',
    navLabel: 'Industrial & Warning Labels',
    metaTitle: 'Industrial Stickers & Warning Labels Chennai | 3M Adhesive – Janani Labels',
    metaDescription:
      'Industrial stickers, caution and warning labels and equipment labels with 3M adhesive, made in Chennai. Custom, durable, high-visibility. Call +91 98409 44808.',
    h1: 'Industrial Stickers & Warning Labels in Chennai',
    kicker: 'Industrial, caution & warning labels',
    intro: [
      'Safety and equipment labels have to be seen and have to stay put. Janani Labels manufactures industrial stickers, caution and warning labels and equipment identification labels in Chennai, with 3M adhesive for a bond that holds through heat, vibration and moisture.',
      'We make high-visibility warning labels to your wording, symbols and colour scheme, and equipment labels for plants, workshops and machinery. Materials range from polyester to polycarbonate, so the label matches the conditions it will face.',
    ],
    benefits: [
      {
        title: 'High visibility',
        text: 'Bold colours and clear symbols so warnings are seen at a glance.',
      },
      {
        title: '3M adhesive',
        text: 'A strong bond on metal, plastic and powder-coated surfaces, even with vibration and temperature changes.',
      },
      {
        title: 'Weather & chemical resistant',
        text: 'Materials chosen to resist moisture, sunlight, oils and cleaning agents.',
      },
      {
        title: 'Made to your wording',
        text: 'Your safety text, symbols, languages and layout, in any size and quantity.',
      },
    ],
    useCases: [
      'Caution stickers',
      'Warning labels',
      'Safety signage stickers',
      'Equipment ID labels',
      'Machinery labels',
      'Electrical panel labels',
    ],
    faqs: [
      {
        question: 'Can you print warning labels in Tamil and English?',
        answer:
          'Yes. Send us your wording in the languages you need and we will lay out and print the labels.',
      },
      {
        question: 'Are your industrial stickers suitable for outdoor use?',
        answer:
          'Yes. We choose materials and adhesives that resist moisture and sunlight. Tell us where the labels will be used and we will recommend the right one.',
      },
      {
        question: 'Why use 3M adhesive on industrial labels?',
        answer:
          '3M adhesive gives a strong, dependable bond on metal, plastic and powder-coated surfaces and keeps its hold through temperature changes, moisture and vibration.',
      },
      {
        question: 'Do you supply industrial labels near Pallavaram and Tambaram?',
        answer:
          'Yes. We are in Anakaputhur and supply Pallavaram, Chromepet, Tambaram, Guindy and the rest of Chennai, as well as Tamil Nadu.',
      },
    ],
    image: 'brandbird-5',
    imageAlt: 'Industrial warning labels and caution stickers made in Chennai by Janani Labels',
  },
];

export const getService = (slug: string) => {
  const service = services.find((s) => s.slug === slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);
  return service;
};

export const buildServiceMetadata = (service: ServiceConfig): Metadata => {
  const url = `${SITE_URL}/${service.slug}`;
  const image = `${SITE_URL}/${service.image}.png`;
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url,
      siteName: 'Janani Labels',
      title: service.metaTitle,
      description: service.metaDescription,
      images: [{ url: image, width: 1200, height: 630, alt: service.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: [image],
    },
  };
};
