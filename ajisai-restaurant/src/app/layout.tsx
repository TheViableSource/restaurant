import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Ajisai Sushi & Steak | Fine Dining Sushi in Portland, Oregon',
    template: '%s | Ajisai Sushi & Steak Portland',
  },
  description:
    'Experience the finest sushi and Japanese cuisine in Portland, Oregon at Ajisai. Our master chefs craft exquisite sashimi, artisan rolls, and premium wagyu steak in an upscale yet welcoming atmosphere. Reserve your table today.',
  keywords: [
    'Fine Dining Sushi Portland Oregon',
    'Upscale Sushi Experience Portland',
    'Best Sushi Portland',
    'Japanese Cuisine Portland',
    'Sashimi Portland',
    'Omakase Portland',
    'Japanese Restaurant Portland',
    'Wagyu Steak Portland',
    'Ramen Portland',
    'Ajisai Portland',
  ],
  authors: [{ name: 'Ajisai Sushi & Steak' }],
  creator: 'Ajisai Sushi & Steak',
  publisher: 'Ajisai Sushi & Steak',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ajisaisushisteak.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ajisai Sushi & Steak | Fine Dining Sushi in Portland, Oregon',
    description:
      'Experience the finest sushi and Japanese cuisine in Portland at Ajisai. Master-crafted sashimi, artisan rolls, and premium wagyu in an upscale atmosphere.',
    url: 'https://ajisaisushisteak.com',
    siteName: 'Ajisai Sushi & Steak',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ajisai Sushi & Steak - Fine Dining in Portland, Oregon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ajisai Sushi & Steak | Fine Dining Sushi in Portland, Oregon',
    description:
      'Experience the finest sushi and Japanese cuisine in Portland at Ajisai.',
    images: ['/images/og-image.jpg'],
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
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Ajisai Sushi & Steak',
  image: 'https://ajisaisushisteak.com/images/restaurant-exterior.jpg',
  url: 'https://ajisaisushisteak.com',
  telephone: '+1-503-555-0142',
  email: 'hello@ajisaisushisteak.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1234 NW 23rd Avenue',
    addressLocality: 'Portland',
    addressRegion: 'OR',
    postalCode: '97210',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 45.528916,
    longitude: -122.699763,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '11:00',
      closes: '22:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday', 'Saturday'],
      opens: '11:00',
      closes: '23:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '12:00',
      closes: '21:00',
    },
  ],
  servesCuisine: ['Sushi', 'Japanese', 'Fusion', 'Asian'],
  priceRange: '$$$',
  hasMenu: 'https://ajisaisushisteak.com/menus',
  acceptsReservations: 'True',
  menu: 'https://ajisaisushisteak.com/menus',
  paymentAccepted: ['Cash', 'Credit Card', 'Debit Card'],
  currenciesAccepted: 'USD',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '487',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#722F37" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
