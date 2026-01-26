import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ReservationCallout from '@/components/ReservationCallout';

export const metadata: Metadata = {
  title: 'About Us | Our Story & Philosophy',
  description:
    'Discover the story behind Ajisai Sushi & Steak in Portland, Oregon. Learn about our commitment to authentic Japanese cuisine, our master chefs, and our passion for creating unforgettable dining experiences.',
  keywords: [
    'About Ajisai Portland',
    'Japanese Restaurant Story',
    'Sushi Chef Portland',
    'Authentic Japanese Cuisine',
    'Portland Fine Dining',
  ],
  openGraph: {
    title: 'About Ajisai Sushi & Steak | Our Story',
    description:
      'Discover the story behind Ajisai - where Japanese tradition meets Pacific Northwest inspiration.',
    url: 'https://ajisaisushisteak.com/about',
    images: [
      {
        url: '/images/about-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Inside Ajisai Restaurant Portland',
      },
    ],
  },
};

export default function AboutPage() {
  const values = [
    {
      title: 'Exceptional Ingredients',
      description:
        'We source the finest fish from Tsukiji Market and partner with local Oregon farms to ensure every ingredient meets our exacting standards.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: 'Masterful Technique',
      description:
        'Our chefs have trained for decades in the art of Japanese cuisine, bringing authentic techniques refined over generations.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Warm Hospitality',
      description:
        'We embrace the Japanese spirit of omotenashi—anticipating our guests\' needs and creating moments of genuine connection.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'Seasonal Inspiration',
      description:
        'Our menu evolves with the seasons, celebrating the natural rhythms that have guided Japanese cuisine for centuries.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Our Story"
        subtitle="A journey of passion, tradition, and the relentless pursuit of culinary excellence"
        showCTA={false}
        imageUrl="/images/about-hero.jpg"
        height="medium"
      />

      {/* Origin Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-sm tracking-widest uppercase">Est. 2015</span>
              <h2 className="text-3xl md:text-4xl font-serif text-burgundy mt-2 mb-6">
                Where Tradition Meets Innovation
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Ajisai was born from a simple yet profound vision: to create a space where the 
                artistry of authentic Japanese cuisine could flourish in the heart of Portland&apos;s 
                vibrant culinary scene. Our founder, trained in the prestigious kitchens of Tokyo 
                and Kyoto, brought decades of expertise across the Pacific with a dream to share 
                the true essence of Japanese gastronomy.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The name &quot;Ajisai&quot;—the Japanese word for hydrangea—was chosen deliberately. Like 
                this beloved flower that transforms with the seasons, our cuisine celebrates the 
                beauty of change, the importance of timing, and the harmony between nature and 
                human craft.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, Ajisai stands as a testament to what happens when unwavering dedication 
                meets creative passion. Every dish that leaves our kitchen carries the weight of 
                tradition and the spark of innovation that defines our approach.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/founder.jpg"
                  alt="Ajisai founder and master chef in Portland restaurant"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-burgundy/10 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-widest uppercase">Our Philosophy</span>
            <h2 className="text-3xl md:text-4xl font-serif text-burgundy mt-2">
              The Pillars of Excellence
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Four guiding principles shape every aspect of the Ajisai experience, from the 
              ingredients we select to the way we welcome our guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg flex items-start space-x-6"
              >
                <div className="bg-burgundy/10 rounded-full p-4 text-burgundy flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-serif text-burgundy mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-widest uppercase">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-serif text-burgundy mt-2">
              The Artisans Behind the Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Chef Takeshi Yamamoto',
                role: 'Executive Chef & Founder',
                bio: 'With over 25 years of experience and training at three-Michelin-starred establishments in Japan, Chef Yamamoto brings unparalleled expertise to every dish.',
                image: '/images/chef-1.jpg',
              },
              {
                name: 'Chef Yuki Tanaka',
                role: 'Head Sushi Chef',
                bio: 'A master of knife work and fish preparation, Chef Tanaka spent a decade perfecting his craft in Tokyo before joining the Ajisai family.',
                image: '/images/chef-2.jpg',
              },
              {
                name: 'Kenji Mori',
                role: 'Sake Sommelier',
                bio: 'Certified kikisake-shi with an encyclopedic knowledge of sake, Kenji curates our extensive collection and guides guests through perfect pairings.',
                image: '/images/chef-3.jpg',
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg mb-6 img-zoom">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role} at Ajisai Portland`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif text-burgundy">{member.name}</h3>
                <p className="text-gold text-sm tracking-wider uppercase mt-1">{member.role}</p>
                <p className="text-gray-600 text-sm mt-3">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-burgundy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-widest uppercase">Recognition</span>
            <h2 className="text-3xl md:text-4xl font-serif mt-2">
              Awards & Accolades
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { award: 'Best Sushi', source: 'Portland Monthly', year: '2024' },
              { award: 'Top 10 Japanese', source: 'Willamette Week', year: '2024' },
              { award: 'Excellence Award', source: 'OpenTable', year: '2023' },
              { award: "Diners' Choice", source: 'Yelp', year: '2023' },
            ].map((item, index) => (
              <div key={index} className="p-6">
                <p className="text-gold text-sm">{item.year}</p>
                <p className="text-xl font-serif mt-2">{item.award}</p>
                <p className="text-gray-300 text-sm mt-1">{item.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-burgundy mb-6">
            Experience Ajisai for Yourself
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We invite you to join us and discover why Ajisai has become a beloved destination 
            for sushi enthusiasts and culinary adventurers alike.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservations"
              className="bg-burgundy text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-burgundy-dark transition-all duration-300 btn-primary"
            >
              Reserve Your Table
            </Link>
            <Link
              href="/menus"
              className="border-2 border-burgundy text-burgundy px-8 py-4 text-sm tracking-widest uppercase hover:bg-burgundy hover:text-white transition-all duration-300"
            >
              Explore Our Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <ReservationCallout />
    </>
  );
}
