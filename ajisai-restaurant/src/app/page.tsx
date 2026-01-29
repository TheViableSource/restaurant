'use client';

import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ReservationCallout from '@/components/ReservationCallout';
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, ScaleIn } from '@/components/MotionWrapper';
import { ChefHat, Utensils, Wine, Leaf } from 'lucide-react';

// Real Unsplash images for the restaurant
const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop',
  chefPreparing: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop',
  omakase: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1925&auto=format&fit=crop',
  sashimi: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?q=80&w=2069&auto=format&fit=crop',
  rolls: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?q=80&w=2070&auto=format&fit=crop',
  interior1: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop',
  interior2: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=1885&auto=format&fit=crop',
  interior3: 'https://images.unsplash.com/photo-1554679665-f5537f187268?q=80&w=1974&auto=format&fit=crop',
  sake: 'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?q=80&w=1887&auto=format&fit=crop',
  ramen: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=2080&auto=format&fit=crop',
};

export default function Home() {
  const featuredDishes = [
    {
      name: 'Omakase Experience',
      description: "Trust our master chef's selection of the season's finest delicacies, artfully presented in an unforgettable multi-course journey.",
      image: IMAGES.omakase,
    },
    {
      name: 'Signature Sashimi',
      description: 'Premium cuts of the freshest fish, flown in daily from Tokyo\'s Tsukiji Market, sliced with precision and served with house-made accompaniments.',
      image: IMAGES.sashimi,
    },
    {
      name: 'Artisan Rolls',
      description: 'Creative combinations that blend centuries-old tradition with Pacific Northwest innovation, featuring locally sourced ingredients.',
      image: IMAGES.rolls,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="The Art of Japanese Dining in the Heart of Portland"
        subtitle="Sushi. Steak. Ramen. Elegance. Where Japanese tradition meets Pacific Northwest inspiration in an atmosphere of refined sophistication."
        showCTA={true}
        imageUrl={IMAGES.hero}
        height="full"
      />

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInLeft>
              <span className="text-gold text-sm tracking-widest uppercase font-medium">Welcome to Ajisai</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-burgundy mt-3 mb-6 leading-tight">
                Artisan Rolls & Handcrafted Sashimi
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                At Ajisai, we believe that exceptional cuisine is born from the perfect harmony of 
                pristine ingredients, masterful technique, and heartfelt hospitality. Our name, 
                meaning &quot;hydrangea&quot; in Japanese, reflects our commitment to beauty, refinement, 
                and the changing seasons that inspire our menu.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                Each dish that leaves our kitchen tells a story—of fish sourced from the world&apos;s 
                finest waters, of vegetables grown by local Oregon farmers, and of recipes passed 
                down through generations of culinary artisans.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-burgundy hover:text-burgundy-dark transition-colors font-medium group"
              >
                Discover Our Story
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </FadeInLeft>
            <FadeInRight delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-2xl img-zoom">
                  <Image
                    src={IMAGES.chefPreparing}
                    alt="Master sushi chef preparing signature dishes at Ajisai restaurant in Portland"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-burgundy/10 rounded-lg -z-10" />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold/20 rounded-lg -z-10" />
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <span className="text-gold text-sm tracking-widest uppercase font-medium">Our Cuisine</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-burgundy mt-3">
              Signature Creations
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
              From traditional nigiri to innovative fusion rolls, each creation showcases our 
              dedication to excellence and the art of Japanese gastronomy.
            </p>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <StaggerItem key={index}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg menu-card h-full">
                  <div className="aspect-[4/3] relative img-zoom">
                    <Image
                      src={dish.image}
                      alt={`${dish.name} at Ajisai - Fine dining sushi in Portland`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-burgundy mb-3">{dish.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{dish.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp delay={0.4} className="text-center mt-12">
            <Link
              href="/menus"
              className="inline-block bg-burgundy text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-burgundy-dark transition-all duration-300 btn-primary rounded-sm"
            >
              View Full Menu
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* Ramen Highlight Section */}
      <section className="py-24 bg-burgundy text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 border border-white rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 border border-white rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInLeft>
              <span className="text-gold text-sm tracking-widest uppercase font-medium">Soul-Warming Comfort</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mt-3 mb-6 leading-tight">
                Handcrafted Ramen
              </h2>
              <p className="text-gray-200 leading-relaxed mb-6 text-lg">
                Our Tonkotsu Ramen features a rich, slow-simmered pork broth that takes over 12 hours 
                to perfect. Served with tender chashu, locally sourced garnishes, and house-made noodles 
                with just the right chew.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-gold font-serif text-2xl mb-1">$20</p>
                  <p className="text-sm text-gray-300">Tonkotsu Ramen</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-gold font-serif text-2xl mb-1">$24</p>
                  <p className="text-sm text-gray-300">Kakuni Ramen</p>
                </div>
              </div>
              <Link
                href="/menus#ramen"
                className="inline-block bg-gold text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300 btn-primary rounded-sm"
              >
                View Ramen Menu
              </Link>
            </FadeInLeft>
            <FadeInRight delay={0.2}>
              <div className="aspect-square relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={IMAGES.ramen}
                  alt="Steaming bowl of Tonkotsu Ramen at Ajisai Portland"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Ambiance Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <ScaleIn>
                  <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg img-zoom">
                    <Image
                      src={IMAGES.interior1}
                      alt="Elegant interior dining room at Ajisai Portland"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </ScaleIn>
                <ScaleIn delay={0.2}>
                  <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-lg img-zoom">
                    <Image
                      src={IMAGES.interior2}
                      alt="Sushi bar counter seating at Ajisai"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </ScaleIn>
              </div>
              <div className="space-y-4 pt-8">
                <ScaleIn delay={0.1}>
                  <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-lg img-zoom">
                    <Image
                      src={IMAGES.interior3}
                      alt="Private dining area at Ajisai restaurant"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </ScaleIn>
                <ScaleIn delay={0.3}>
                  <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg img-zoom">
                    <Image
                      src={IMAGES.sake}
                      alt="Premium sake selection at Ajisai"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </ScaleIn>
              </div>
            </div>
            <FadeInRight className="order-1 lg:order-2">
              <span className="text-gold text-sm tracking-widest uppercase font-medium">The Experience</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-burgundy mt-3 mb-6 leading-tight">
                Intimate Ambiance for Every Occasion
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                Step into a space where contemporary elegance meets Japanese minimalism. Our 
                thoughtfully designed interior creates the perfect backdrop for romantic dinners, 
                business gatherings, and celebratory occasions alike.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { icon: ChefHat, text: 'Intimate sushi bar with chef interaction' },
                  { icon: Utensils, text: 'Private tatami rooms available' },
                  { icon: Wine, text: 'Curated sake and wine selection' },
                  { icon: Leaf, text: 'Seasonal décor inspired by nature' },
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <item.icon className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                    {item.text}
                  </li>
                ))}
              </ul>
              <Link
                href="/reservations"
                className="inline-block bg-burgundy text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-burgundy-dark transition-all duration-300 btn-primary rounded-sm"
              >
                Book Private Dining
              </Link>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <span className="text-gold text-sm tracking-widest uppercase font-medium">Guest Reviews</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-burgundy mt-3">
              What Our Guests Say
            </h2>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The omakase experience at Ajisai was nothing short of extraordinary. Each course was a work of art that told a story of precision and passion.",
                author: 'Sarah M.',
                source: 'Google Review',
                rating: 5,
              },
              {
                quote: "Best sushi in Portland, hands down. The freshness of the fish, the attention to detail, and the warm service make this our go-to spot for special occasions.",
                author: 'Michael T.',
                source: 'Yelp',
                rating: 5,
              },
              {
                quote: "From the elegant ambiance to the exquisite flavors, Ajisai delivers an authentic Japanese dining experience that transports you to Tokyo.",
                author: 'Jennifer L.',
                source: 'OpenTable',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <StaggerItem key={index}>
                <div className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <svg className="w-10 h-10 text-burgundy/10 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-600 italic mb-6 flex-grow">&quot;{testimonial.quote}&quot;</p>
                  <div>
                    <p className="font-medium text-burgundy">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.source}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Hours & Location Quick Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <StaggerItem>
              <div className="p-8">
                <div className="w-16 h-16 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-burgundy mb-3">Hours</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Mon-Thu: 11AM - 10PM<br />
                  Fri-Sat: 11AM - 11PM<br />
                  Sunday: 12PM - 9PM
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="p-8">
                <div className="w-16 h-16 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-burgundy mb-3">Location</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  123 Pearl District<br />
                  Portland, OR 97209<br />
                  <Link href="/contact" className="text-burgundy hover:text-burgundy-dark">Get Directions</Link>
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="p-8">
                <div className="w-16 h-16 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-burgundy mb-3">Contact</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  (503) 555-0142<br />
                  hello@ajisaisushisteak.com<br />
                  <Link href="/contact" className="text-burgundy hover:text-burgundy-dark">Send a Message</Link>
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Reservation CTA */}
      <ReservationCallout />
    </>
  );
}
