import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle?: string;
  showCTA?: boolean;
  imageUrl?: string;
  height?: 'full' | 'large' | 'medium';
}

const Hero = ({
  title,
  subtitle,
  showCTA = true,
  imageUrl = '/images/hero-sushi.jpg',
  height = 'full',
}: HeroProps) => {
  const heightClasses = {
    full: 'min-h-screen',
    large: 'min-h-[80vh]',
    medium: 'min-h-[60vh]',
  };

  return (
    <section className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt="Exquisite sushi presentation at Ajisai restaurant in Portland"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
        {/* Decorative Element */}
        <div className="flex justify-center mb-6">
          <svg
            className="w-16 h-16 text-gold"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <circle cx="50" cy="35" r="8" />
            <circle cx="35" cy="45" r="6" />
            <circle cx="65" cy="45" r="6" />
            <circle cx="30" cy="55" r="5" />
            <circle cx="70" cy="55" r="5" />
            <circle cx="40" cy="55" r="6" />
            <circle cx="60" cy="55" r="6" />
            <circle cx="50" cy="50" r="7" />
            <rect x="48" y="60" width="4" height="25" />
          </svg>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-wide mb-6 text-shadow">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}

        {showCTA && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservations"
              className="bg-burgundy text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-burgundy-dark transition-all duration-300 btn-primary"
            >
              Reserve Your Table
            </Link>
            <Link
              href="/menus"
              className="bg-transparent border-2 border-white text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-white hover:text-burgundy transition-all duration-300"
            >
              Explore Our Menu
            </Link>
          </div>
        )}

        {/* Scroll Indicator */}
        {height === 'full' && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-white/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
