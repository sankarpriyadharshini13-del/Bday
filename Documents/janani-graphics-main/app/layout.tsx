import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ClickTracker from "./components/ClickTracker";
import MotionProvider from "./components/MotionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jananilabels.in"),
  title: "Sticker Manufacturer Chennai | Polycarbonate Stickers and Labels - Janani Labels",
  description: "Leading sticker manufacturer in Chennai with 18+ years experience. Custom polycarbonate stickers, industrial labels and vinyl decals. Call +91 98409 44808",
  keywords: ["polycarbonate stickers chennai", "polycarbonate labels chennai", "polyester labels", "polyester labels chennai", "vinyl stickers", "custom vinyl labels", "custom vinyl labels chennai", "barcode labels chennai", "warning labels", "industrial stickers chennai", "3M adhesive labels", "Anakaputhur", "label manufacturer chennai", "sticker manufacturer chennai"],
  authors: [{ name: "Janani Labels" }],
  creator: "Janani Labels",
  publisher: "Janani Labels",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jananilabels.in/",
    siteName: "Janani Labels",
    title: "Sticker Manufacturer Chennai | Polycarbonate Stickers and Labels - Janani Labels",
    description: "Leading sticker manufacturer in Chennai with 18+ years experience. Custom polycarbonate stickers, industrial labels and vinyl decals.",
    images: [
      {
        url: "https://jananilabels.in/brandbird-1.png",
        width: 1200,
        height: 630,
        alt: "Polycarbonate Stickers Chennai - Janani Labels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sticker Manufacturer Chennai | Polycarbonate Stickers and Labels - Janani Labels",
    description: "Leading polycarbonate sticker manufacturer in Chennai with 18+ years experience. Fast delivery.",
    images: ["https://jananilabels.in/brandbird-1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://jananilabels.in/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ PRIMARY FAVICON */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        
        {/* ✅ FAVICON SIZES */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* ✅ APPLE TOUCH ICON (For iOS home screen) */}
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        
        {/* ✅ WEB APP MANIFEST (For PWA support) */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* ✅ THEME COLORS (For browser UI) */}
        <meta name="msapplication-TileColor" content="#FF6B6B" />
        <meta name="theme-color" content="#FF6B6B" />
        
        {/* ✅ PRECONNECT LINKS (For performance) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* ✅ STRUCTURED DATA - LOCAL BUSINESS (For SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "name": "Janani Labels",
                  "alternateName": "Janani Graphics",
                  "image": "https://jananilabels.in/brandbird-1.png",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://jananilabels.in/jglogo.png",
                    "width": 472,
                    "height": 472
                  },
                  "@id": "https://jananilabels.in",
                  "url": "https://jananilabels.in",
                  "telephone": "+919840944808",
                  "email": "jananilabels@gmail.com",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Anakaputhur",
                    "addressLocality": "Chennai",
                    "addressRegion": "Tamil Nadu",
                    "postalCode": "600070",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 12.9808023,
                    "longitude": 80.1270947
                  },
                  "hasMap": "https://maps.google.com/?cid=10151427423140694889",
                  "sameAs": ["https://maps.app.goo.gl/6EYnHMaEzPUPcsqj7"],
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday"
                    ],
                    "opens": "09:00",
                    "closes": "18:00"
                  },
                  "areaServed": ["Chennai", "Anakaputhur", "Pallavaram", "Chromepet", "Tambaram", "Guindy", "Meenambakkam", "Tamil Nadu"],
                  "priceRange": "$$",
                  "description": "Leading sticker manufacturer and industrial label printer in Chennai with 18+ years experience"
                },
                {
                  "@type": "WebSite",
                  "@id": "https://jananilabels.in/#website",
                  "url": "https://jananilabels.in",
                  "name": "Janani Labels",
                  "inLanguage": "en-IN",
                  "publisher": { "@id": "https://jananilabels.in" }
                }
              ]
            })
          }}
        />
      </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <MotionProvider>{children}</MotionProvider>
        <ClickTracker />
        
        {/* ✅ GOOGLE ANALYTICS */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-WXSR6LD30Z"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WXSR6LD30Z');
              gtag('config', 'G-8QFBTMK9CT');
            `,
          }}
        />
      </body>
    </html>
  );
}