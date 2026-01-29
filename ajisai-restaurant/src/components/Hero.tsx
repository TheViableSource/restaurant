'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle?: string;
  showCTA?: boolean;
  imageUrl?: string;
  height?: 'full' | 'large' | 'medium';
}

// Hydrangea flower SVG icon matching the Ajisai brand
const AjisaiFlower = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="currentColor"
  >
    {/* Center flower cluster - represents hydrangea petals */}
    <circle cx="50" cy="32" r="9" opacity="0.9" />
    <circle cx="38" cy="40" r="7" opacity="0.85" />
    <circle cx="62" cy="40" r="7" opacity="0.85" />
    <circle cx="32" cy="50" r="6" opacity="0.8" />
    <circle cx="68" cy="50" r="6" opacity="0.8" />
    <circle cx="38" cy="56" r="7" opacity="0.85" />
    <circle cx="62" cy="56" r="7" opacity="0.85" />
    <circle cx="50" cy="48" r="8" opacity="0.9" />
    <circle cx="50" cy="60" r="6" opacity="0.8" />
    {/* Stem */}
    <rect x="48" y="66" width="4" height="22" rx="2" />
    {/* Small leaf details */}
    <ellipse cx="42" cy="78" rx="6" ry="3" transform="rotate(-30 42 78)" opacity="0.7" />
    <ellipse cx="58" cy="78" rx="6" ry="3" transform="rotate(30 58 78)" opacity="0.7" />
  </svg>
);

const Hero = ({
  title,
  subtitle,
  showCTA = true,
  imageUrl = 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop',
  height = 'full',
}: HeroProps) => {
  const heightClasses = {
    full: 'min-h-screen',
    large: 'min-h-[80vh]',
    medium: 'min-h-[60vh]',
  };

  return (
    <section className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}>
      {/* Background Image with subtle zoom animation */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <Image
          src={imageUrl}
          alt="Exquisite sushi presentation at Ajisai restaurant in Portland"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        {/* Decorative Flower Element */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AjisaiFlower className="w-20 h-20 text-gold drop-shadow-lg" />
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-wide mb-6 text-shadow-lg leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p 
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {subtitle}
          </motion.p>
        )}

        {showCTA && (
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              href="/reservations"
              className="bg-burgundy text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-burgundy-dark transition-all duration-300 btn-primary rounded-sm"
            >
              Reserve Your Table
            </Link>
            <Link
              href="/menus"
              className="bg-transparent border-2 border-white text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-white hover:text-burgundy transition-all duration-300 rounded-sm"
            >
              Explore Our Menu
            </Link>
          </motion.div>
        )}

        {/* Scroll Indicator */}
        {height === 'full' && (
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
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
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
