import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: 'Reservations | Book Your Table',
  description:
    'Reserve your table at Ajisai Sushi & Steak in Portland, Oregon. Book online for intimate dinners, special celebrations, or private events. Walk-ins welcome.',
  keywords: [
    'Ajisai Reservations',
    'Book Table Portland Sushi',
    'Portland Restaurant Reservations',
    'Private Dining Portland',
    'Special Events Portland',
  ],
  openGraph: {
    title: 'Reserve Your Table | Ajisai Sushi & Steak Portland',
    description:
      'Book your unforgettable dining experience at Ajisai. Reservations available for dinner service.',
    url: 'https://ajisaisushisteak.com/reservations',
    images: [
      {
        url: '/images/reservations-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Ajisai Restaurant Interior - Reserve Your Table',
      },
    ],
  },
};

export default function ReservationsPage() {
  const privateEvents = [
    {
      name: 'Intimate Dining',
      capacity: '2-4 guests',
      description: 'Perfect for romantic dinners or small celebrations at our sushi bar.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      name: 'Group Dining',
      capacity: '5-12 guests',
      description: 'Semi-private area ideal for birthday parties, work gatherings, or family celebrations.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      name: 'Private Tatami Room',
      capacity: '8-20 guests',
      description: 'Traditional Japanese tatami room for corporate events and special occasions.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      name: 'Full Buyout',
      capacity: '40-60 guests',
      description: 'Exclusive restaurant buyout for weddings, galas, and milestone celebrations.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Reserve Your Table"
        subtitle="Join us for an unforgettable culinary journey"
        showCTA={false}
        imageUrl="/images/reservations-hero.jpg"
        height="medium"
      />

      {/* Reservation Widget Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-gold text-sm tracking-widest uppercase">Book Online</span>
              <h2 className="text-3xl md:text-4xl font-serif text-burgundy mt-2 mb-6">
                Secure Your Spot
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We recommend making reservations in advance, especially for weekend dining and 
                special occasions. Our online booking system allows you to select your preferred 
                date, time, and party size.
              </p>

              {/* Reservation Form Placeholder */}
              <div className="bg-cream rounded-lg p-8">
                <h3 className="text-xl font-serif text-burgundy mb-6">Make a Reservation</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                        Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-burgundy transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                        Time
                      </label>
                      <select
                        id="time"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-burgundy transition-colors"
                      >
                        <option>5:00 PM</option>
                        <option>5:30 PM</option>
                        <option>6:00 PM</option>
                        <option>6:30 PM</option>
                        <option>7:00 PM</option>
                        <option>7:30 PM</option>
                        <option>8:00 PM</option>
                        <option>8:30 PM</option>
                        <option>9:00 PM</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="party" className="block text-sm font-medium text-gray-700 mb-2">
                      Party Size
                    </label>
                    <select
                      id="party"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-burgundy transition-colors"
                    >
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                      <option>5 Guests</option>
                      <option>6 Guests</option>
                      <option>7+ Guests (Call for availability)</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-burgundy transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-burgundy transition-colors"
                        placeholder="(503) 555-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-burgundy transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                      Special Requests
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-burgundy transition-colors resize-none"
                      placeholder="Allergies, special occasions, seating preferences..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-burgundy text-white py-4 px-8 text-sm tracking-widest uppercase hover:bg-burgundy-dark transition-all duration-300 btn-primary"
                  >
                    Request Reservation
                  </button>
                </form>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  You will receive a confirmation email within 24 hours.
                </p>
              </div>
            </div>

            <div>
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl mb-8">
                <Image
                  src="/images/dining-room.jpg"
                  alt="Elegant dining room at Ajisai restaurant in Portland"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Quick Info */}
              <div className="bg-burgundy text-white rounded-lg p-8">
                <h3 className="text-xl font-serif mb-6">Important Information</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Please arrive 10 minutes before your reservation time</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Tables are held for 15 minutes past reservation time</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>For parties of 7+, please call (503) 555-0142</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Cancellations must be made 24 hours in advance</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-burgundy-light">
                  <p className="text-gray-300 text-sm">
                    Prefer to book by phone?
                  </p>
                  <a href="tel:+15035550142" className="text-gold text-lg font-serif hover:text-gold-light transition-colors">
                    (503) 555-0142
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Events Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-widest uppercase">Private Events</span>
            <h2 className="text-3xl md:text-4xl font-serif text-burgundy mt-2">
              Host Your Special Occasion
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we offer customized dining experiences 
              tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privateEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="bg-burgundy/10 rounded-full p-4 text-burgundy inline-block mb-4">
                  {event.icon}
                </div>
                <h3 className="text-xl font-serif text-burgundy mb-2">{event.name}</h3>
                <p className="text-gold text-sm mb-3">{event.capacity}</p>
                <p className="text-gray-600 text-sm">{event.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-block bg-burgundy text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-burgundy-dark transition-all duration-300 btn-primary"
            >
              Inquire About Private Events
            </Link>
          </div>
        </div>
      </section>

      {/* Takeout & Delivery */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/takeout.jpg"
                  alt="Ajisai takeout packaging with sushi and bento"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-burgundy/10 rounded-lg -z-10" />
            </div>
            <div>
              <span className="text-gold text-sm tracking-widest uppercase">Take Home</span>
              <h2 className="text-3xl md:text-4xl font-serif text-burgundy mt-2 mb-6">
                Catering, Delivery & Takeout
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Enjoy the Ajisai experience in the comfort of your home. Our takeout and delivery 
                options bring the same quality and care to your doorstep.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-gold mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Order online at ajisaisushisteak.com
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-gold mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Delivery available within 5 miles
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-gold mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Corporate catering for any occasion
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-gold mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Party platters available with 24-hour notice
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+15035550142"
                  className="bg-burgundy text-white px-8 py-4 text-sm tracking-widest uppercase text-center hover:bg-burgundy-dark transition-all duration-300 btn-primary"
                >
                  Order by Phone
                </a>
                <Link
                  href="/menus"
                  className="border-2 border-burgundy text-burgundy px-8 py-4 text-sm tracking-widest uppercase text-center hover:bg-burgundy hover:text-white transition-all duration-300"
                >
                  View Takeout Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
