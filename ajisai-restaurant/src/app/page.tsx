import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ReservationCallout from '@/components/ReservationCallout';

export default function Home() {
  const featuredDishes = [
    {
      name: 'Omakase Experience',
      description: "Trust our master chef's selection of the finest seasonal delicacies",
      image: '/images/omakase.jpg',
    },
    {
      name: 'Signature Sashimi',
      description: 'Premium cuts of the freshest fish, flown in daily from Japan',
      image: '/images/sashimi.jpg',
    },
    {
      name: 'Artisan Rolls',
      description: 'Creative combinations that blend tradition with innovation',
      image: '/images/rolls.jpg',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Experience Fine Dining Sushi in Portland, Oregon"
        subtitle="Where Japanese tradition meets Pacific Northwest inspiration. Discover meticulously crafted sushi, premium wagyu, and soul-warming ramen in an atmosphere of refined elegance."
        showCTA={true}
        imageUrl="/images/hero-sushi.jpg"
        height="full"
      />

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <span className="text-gold text-sm tracking-widest uppercase">Welcome to Ajisai</span>
              <h2 className="text-3xl md:text-4xl font-serif text-burgundy mt-2 mb-6">
                Artisan Rolls & Handcrafted Sashimi
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Ajisai, we believe that exceptional cuisine is born from the perfect harmony of 
                pristine ingredients, masterful technique, and heartfelt hospitality. Our name, 
                meaning &quot;hydrangea&quot; in Japanese, reflects our commitment to beauty, refinement, 
                and the changing seasons that inspire our menu.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Each dish that leaves our kitchen tells a story—of fish sourced from the world&apos;s 
                finest waters, of vegetables grown by local Oregon farmers, and of recipes passed 
                down through generations of culinary artisans.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-burgundy hover:text-burgundy-dark transition-colors font-medium"
              >
                Discover Our Story
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-2xl img-zoom">
                <Image
                  src="/images/chef-preparing.jpg"
                  alt="Master sushi chef preparing signature dishes at Ajisai restaurant in Portland"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-burgundy/10 rounded-lg -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold/20 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-widest uppercase">Our Cuisine</span>
            <h2 className="text-3xl md:text-4xl font-serif text-burgundy mt-2">
              Signature Creations
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              From traditional nigiri to innovative fusion rolls, each creation showcases our 
              dedication to excellence and the art of Japanese gastronomy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg menu-card"
              >
                <div className="aspect-[4/3] relative img-zoom">
                  <Image
                    src={dish.image}
                    alt={`${dish.name} at Ajisai - Fine dining sushi in Portland`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-burgundy mb-2">{dish.name}</h3>
                  <p className="text-gray-600 text-sm">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/menus"
              className="inline-block bg-burgundy text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-burgundy-dark transition-all duration-300 btn-primary"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Ambiance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg img-zoom">
                  <Image
                    src="/images/interior-1.jpg"
                    alt="Elegant interior dining room at Ajisai Portland"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-lg img-zoom">
                  <Image
                    src="/images/interior-2.jpg"
                    alt="Sushi bar counter seating at Ajisai"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-lg img-zoom">
                  <Image
                    src="/images/interior-3.jpg"
                    alt="Private dining area at Ajisai restaurant"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg img-zoom">
                  <Image
                    src="/images/sake-selection.jpg"
                    alt="Premium sake selection at Ajisai"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-gold text-sm tracking-widest uppercase">The Experience</span>
              <h2 className="text-3xl md:text-4xl font-serif text-burgundy mt-2 mb-6">
                Intimate Ambiance for Every Occasion
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Step into a space where contemporary elegance meets Japanese minimalism. Our 
                thoughtfully designed interior creates the perfect backdrop for romantic dinners, 
                business gatherings, and celebratory occasions alike.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Intimate sushi bar with chef interaction',
                  'Private tatami rooms available',
                  'Curated sake and wine selection',
                  'Seasonal décor inspired by nature',
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-gold mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/reservations"
                className="inline-block bg-burgundy text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-burgundy-dark transition-all duration-300 btn-primary"
              >
                Book Private Dining
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-widest uppercase">Guest Reviews</span>
            <h2 className="text-3xl md:text-4xl font-serif text-burgundy mt-2">
              What Our Guests Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The omakase experience at Ajisai was nothing short of extraordinary. Each course was a work of art that told a story of precision and passion.",
                author: 'Sarah M.',
                source: 'Google Review',
              },
              {
                quote: "Best sushi in Portland, hands down. The freshness of the fish, the attention to detail, and the warm service make this our go-to spot for special occasions.",
                author: 'Michael T.',
                source: 'Yelp',
              },
              {
                quote: "From the elegant ambiance to the exquisite flavors, Ajisai delivers an authentic Japanese dining experience that transports you to Tokyo.",
                author: 'Jennifer L.',
                source: 'OpenTable',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <svg className="w-10 h-10 text-burgundy/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-600 italic mb-6">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center">
                  <div>
                    <p className="font-medium text-burgundy">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.source}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Location Quick Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-burgundy mb-2">Hours</h3>
              <p className="text-gray-600 text-sm">
                Mon-Thu: 11AM - 10PM<br />
                Fri-Sat: 11AM - 11PM<br />
                Sunday: 12PM - 9PM
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-burgundy mb-2">Location</h3>
              <p className="text-gray-600 text-sm">
                1234 NW 23rd Avenue<br />
                Portland, OR 97210<br />
                <Link href="/contact" className="text-burgundy hover:text-burgundy-dark">Get Directions</Link>
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-burgundy mb-2">Contact</h3>
              <p className="text-gray-600 text-sm">
                (503) 555-0142<br />
                hello@ajisaisushisteak.com<br />
                <Link href="/contact" className="text-burgundy hover:text-burgundy-dark">Send a Message</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <ReservationCallout />
    </>
  );
}
