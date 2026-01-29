'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Hydrangea flower SVG matching the brand
const AjisaiFlower = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="currentColor"
  >
    <circle cx="50" cy="32" r="9" opacity="0.9" />
    <circle cx="38" cy="40" r="7" opacity="0.85" />
    <circle cx="62" cy="40" r="7" opacity="0.85" />
    <circle cx="32" cy="50" r="6" opacity="0.8" />
    <circle cx="68" cy="50" r="6" opacity="0.8" />
    <circle cx="38" cy="56" r="7" opacity="0.85" />
    <circle cx="62" cy="56" r="7" opacity="0.85" />
    <circle cx="50" cy="48" r="8" opacity="0.9" />
    <circle cx="50" cy="60" r="6" opacity="0.8" />
    <rect x="48" y="66" width="4" height="22" rx="2" />
    <ellipse cx="42" cy="78" rx="6" ry="3" transform="rotate(-30 42 78)" opacity="0.7" />
    <ellipse cx="58" cy="78" rx="6" ry="3" transform="rotate(30 58 78)" opacity="0.7" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/menus', label: 'Menus' },
    { href: '/reservations', label: 'Reservations' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className={`transition-colors duration-300 ${isScrolled ? 'text-burgundy' : 'text-white'}`}>
              <AjisaiFlower className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span
              className={`text-2xl font-serif tracking-[0.2em] transition-colors duration-300 ${
                isScrolled ? 'text-burgundy' : 'text-white'
              }`}
            >
              AJISAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wider uppercase transition-colors duration-300 hover:text-gold ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/reservations"
              className="bg-burgundy text-white px-6 py-2 text-sm tracking-wider uppercase hover:bg-burgundy-dark transition-colors duration-300 btn-primary"
            >
              Reserve Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-burgundy' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden mt-4 pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-4 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-gray-700 text-sm tracking-wider uppercase hover:text-burgundy transition-colors py-2"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                >
                  <Link
                    href="/reservations"
                    onClick={() => setIsOpen(false)}
                    className="block bg-burgundy text-white px-6 py-3 text-sm tracking-wider uppercase text-center hover:bg-burgundy-dark transition-colors rounded-sm"
                  >
                    Reserve Now
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
