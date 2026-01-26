'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className={`transition-colors duration-300 ${isScrolled ? 'text-burgundy' : 'text-white'}`}>
              <svg
                className="w-10 h-10"
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
            <span
              className={`text-2xl font-serif tracking-widest transition-colors duration-300 ${
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
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="bg-white rounded-lg shadow-lg p-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 text-sm tracking-wider uppercase hover:text-burgundy transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/reservations"
                onClick={() => setIsOpen(false)}
                className="block bg-burgundy text-white px-6 py-3 text-sm tracking-wider uppercase text-center hover:bg-burgundy-dark transition-colors"
              >
                Reserve Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
