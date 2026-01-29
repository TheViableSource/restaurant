'use client';

import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ReservationCallout from '@/components/ReservationCallout';
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, ScaleIn } from '@/components/MotionWrapper';
import { Sparkles, Lightbulb, Heart, Sun } from 'lucide-react';

// Real Unsplash images for about page
const ABOUT_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop',
  founder: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1977&auto=format&fit=crop',
  chef1: 'https://images.unsplash.com/photo-1583394293214-28ez9db10f7a?q=80&w=1974&auto=format&fit=crop',
  chef2: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop',
  chef3: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070&auto=format&fit=crop',
};

export default function AboutPage() {
  const values = [
    {
      title: 'Exceptional Ingredients',
      description:
        'We source the finest fish from Tsukiji Market and partner with local Oregon farms to ensure every ingredient meets our exacting standards.',
      icon: Sparkles,
    },
    {
      title: 'Masterful Technique',
      description:
        'Our chefs have trained for decades in the art of Japanese cuisine, bringing authentic techniques refined over generations.',
      icon: Lightbulb,
    },
    {
      title: 'Warm Hospitality',
      description:
        'We embrace the Japanese spirit of omotenashi—anticipating our guests\' needs and creating moments of genuine connection.',
      icon: Heart,
    },
    {
      title: 'Seasonal Inspiration',
      description:
        'Our menu evolves with the seasons, celebrating the natural rhythms that have guided Japanese cuisine for centuries.',
      icon: Sun,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Our Story"
        subtitle="A journey of passion, tradition, and the relentless pursuit of culinary excellence"
        showCTA={false}
        imageUrl={ABOUT_IMAGES.hero}
        height="medium"
      />

      {/* Origin Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInLeft>
              <span className="text-gold text-sm tracking-widest uppercase font-medium">Est. 2015</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-burgundy mt-3 mb-6 leading-tight">
                Where Tradition Meets Innovation
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Ajisai was born from a simple yet profound vision: to create a space where the 
                artistry of authentic Japanese cuisine could flourish in the heart of Portland&apos;s 
                vibrant culinary scene. Our founder, trained in the prestigious kitchens of Tokyo 
                and Kyoto, brought decades of expertise across the Pacific with a dream to share 
                the true essence of Japanese gastronomy.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                The name &quot;Ajisai&quot;—the Japanese word for hydrangea—was chosen deliberately. Like 
                this beloved flower that transforms with the seasons, our cuisine celebrates the 
                beauty of change, the importance of timing, and the harmony between nature and 
                human craft.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Today, Ajisai stands as a testament to what happens when unwavering dedication 
                meets creative passion. Every dish that leaves our kitchen carries the weight of 
                tradition and the spark of innovation that defines our approach.
              </p>
            </FadeInLeft>
            <FadeInRight delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src={ABOUT_IMAGES.founder}
                    alt="Ajisai founder and master chef in Portland restaurant"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-burgundy/10 rounded-lg -z-10" />
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <span className="text-gold text-sm tracking-widest uppercase font-medium">Our Philosophy</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-burgundy mt-3">
              The Pillars of Excellence
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
              Four guiding principles shape every aspect of the Ajisai experience, from the 
              ingredients we select to the way we welcome our guests.
            </p>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <div className="bg-white p-8 rounded-lg shadow-lg flex items-start space-x-6 h-full">
                  <div className="bg-burgundy/10 rounded-full p-4 text-burgundy flex-shrink-0">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-burgundy mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <span className="text-gold text-sm tracking-widest uppercase font-medium">Our Team</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-burgundy mt-3">
              The Artisans Behind the Experience
            </h2>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Chef Takeshi Yamamoto',
                role: 'Executive Chef & Founder',
                bio: 'With over 25 years of experience and training at three-Michelin-starred establishments in Japan, Chef Yamamoto brings unparalleled expertise to every dish.',
                image: ABOUT_IMAGES.chef1,
              },
              {
                name: 'Chef Yuki Tanaka',
                role: 'Head Sushi Chef',
                bio: 'A master of knife work and fish preparation, Chef Tanaka spent a decade perfecting his craft in Tokyo before joining the Ajisai family.',
                image: ABOUT_IMAGES.chef2,
              },
              {
                name: 'Kenji Mori',
                role: 'Sake Sommelier',
                bio: 'Certified kikisake-shi with an encyclopedic knowledge of sake, Kenji curates our extensive collection and guides guests through perfect pairings.',
                image: ABOUT_IMAGES.chef3,
              },
            ].map((member, index) => (
              <StaggerItem key={index}>
                <div className="text-center">
                  <ScaleIn delay={index * 0.1}>
                    <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg mb-6 img-zoom">
                      <Image
                        src={member.image}
                        alt={`${member.name} - ${member.role} at Ajisai Portland`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </ScaleIn>
                  <h3 className="text-xl font-serif text-burgundy">{member.name}</h3>
                  <p className="text-gold text-sm tracking-wider uppercase mt-1">{member.role}</p>
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed">{member.bio}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-24 bg-burgundy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <span className="text-gold text-sm tracking-widest uppercase font-medium">Recognition</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mt-3">
              Awards & Accolades
            </h2>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { award: 'Best Sushi', source: 'Portland Monthly', year: '2024' },
              { award: 'Top 10 Japanese', source: 'Willamette Week', year: '2024' },
              { award: 'Excellence Award', source: 'OpenTable', year: '2023' },
              { award: "Diners' Choice", source: 'Yelp', year: '2023' },
            ].map((item, index) => (
              <StaggerItem key={index}>
                <div className="p-6">
                  <p className="text-gold text-sm font-medium">{item.year}</p>
                  <p className="text-2xl font-serif mt-2">{item.award}</p>
                  <p className="text-gray-300 text-sm mt-1">{item.source}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="py-24 bg-white">
        <FadeInUp className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-burgundy mb-6">
            Experience Ajisai for Yourself
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
            We invite you to join us and discover why Ajisai has become a beloved destination 
            for sushi enthusiasts and culinary adventurers alike.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservations"
              className="bg-burgundy text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-burgundy-dark transition-all duration-300 btn-primary rounded-sm"
            >
              Reserve Your Table
            </Link>
            <Link
              href="/menus"
              className="border-2 border-burgundy text-burgundy px-10 py-4 text-sm tracking-widest uppercase hover:bg-burgundy hover:text-white transition-all duration-300 rounded-sm"
            >
              Explore Our Menu
            </Link>
          </div>
        </FadeInUp>
      </section>

      {/* Reservation CTA */}
      <ReservationCallout />
    </>
  );
}
