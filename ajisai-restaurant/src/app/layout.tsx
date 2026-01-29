import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Ajisai | Premier Sushi & Steakhouse in Portland, OR',
    template: '%s | Ajisai Sushi & Steak Portland',
  },
  description:
    'Experience authentic Japanese fine dining in Portland. Serving exquisite Sushi, Premium Steak, and handcrafted Ramen in an elegant atmosphere. Reserve your table today.',
  keywords: [
    'Premier Sushi Portland Oregon',
    'Japanese Steakhouse Portland',
    'Best Sushi Portland',
    'Japanese Fine Dining Portland',
    'Sashimi Portland',
    'Omakase Portland',
    'Tonkotsu Ramen Portland',
    'Wagyu Steak Portland',
    'Upscale Japanese Restaurant Portland',
    'Ajisai Portland',
    'Pearl District Sushi',
    'Date Night Portland',
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
    title: 'Ajisai | Premier Sushi & Steakhouse in Portland, OR',
    description:
      'Experience authentic Japanese fine dining in Portland. Exquisite Sushi, Premium Steak, and handcrafted Ramen in an elegant atmosphere.',
    url: 'https://ajisaisushisteak.com',
    siteName: 'Ajisai Sushi & Steak',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ajisai - Premier Japanese Fine Dining in Portland, Oregon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ajisai | Premier Sushi & Steakhouse in Portland, OR',
    description:
      'Experience authentic Japanese fine dining in Portland. Sushi. Steak. Ramen. Elegance.',
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

// JSON-LD Structured Data - LocalBusiness > Restaurant Schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': 'https://ajisaisushisteak.com/#restaurant',
  name: 'Ajisai',
  alternateName: 'Ajisai Sushi & Steak',
  description: 'Experience authentic Japanese fine dining in Portland. Serving exquisite Sushi, Premium Steak, and handcrafted Ramen in an elegant atmosphere.',
  image: [
    'https://ajisaisushisteak.com/images/og-image.jpg',
    'https://ajisaisushisteak.com/images/restaurant-interior.jpg',
    'https://ajisaisushisteak.com/images/sushi-platter.jpg',
  ],
  url: 'https://ajisaisushisteak.com',
  telephone: '+1-503-555-0142',
  email: 'hello@ajisaisushisteak.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Pearl District',
    addressLocality: 'Portland',
    addressRegion: 'OR',
    postalCode: '97209',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 45.5267,
    longitude: -122.6836,
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
  servesCuisine: 'Japanese',
  priceRange: '$$$',
  hasMenu: {
    '@type': 'Menu',
    url: 'https://ajisaisushisteak.com/menus',
    hasMenuSection: [
      {
        '@type': 'MenuSection',
        name: 'Sushi & Sashimi',
        description: 'Premium cuts of the freshest fish, flown in daily',
      },
      {
        '@type': 'MenuSection',
        name: 'Ramen & Udon',
        description: 'Rich, slow-simmered broths with handcrafted noodles',
      },
      {
        '@type': 'MenuSection',
        name: 'Signature Rolls',
        description: 'Creative combinations blending tradition with innovation',
      },
    ],
  },
  acceptsReservations: true,
  reservations: 'https://ajisaisushisteak.com/reservations',
  paymentAccepted: ['Cash', 'Credit Card', 'Debit Card', 'Apple Pay', 'Google Pay'],
  currenciesAccepted: 'USD',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    bestRating: '5',
    worstRating: '1',
    reviewCount: '487',
  },
  review: [
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Sarah M.',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
      },
      reviewBody: 'The omakase experience at Ajisai was nothing short of extraordinary. Each course was a work of art.',
    },
  ],
  sameAs: [
    'https://instagram.com/ajisaisushisteak',
    'https://facebook.com/ajisaisushisteak',
    'https://yelp.com/biz/ajisai-portland',
  ],
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://ajisaisushisteak.com/reservations',
      actionPlatform: [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/MobileWebPlatform',
      ],
    },
    result: {
      '@type': 'Reservation',
      name: 'Table Reservation',
    },
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
