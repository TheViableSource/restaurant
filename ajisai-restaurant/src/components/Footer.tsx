import Link from 'next/link';

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

const Footer = () => {
  return (
    <footer className="bg-burgundy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4 group">
              <AjisaiFlower className="w-10 h-10 text-gold group-hover:scale-110 transition-transform duration-300" />
              <span className="text-2xl font-serif tracking-[0.2em]">AJISAI</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Experience the artistry of authentic Japanese cuisine in the heart of Portland. 
              From meticulously crafted sushi to soul-warming ramen, every dish tells a story.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold text-sm tracking-wider uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Menus', 'Reservations', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-gold text-sm tracking-wider uppercase mb-4">Hours</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>11AM - 10PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>11AM - 11PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>12PM - 9PM</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold text-sm tracking-wider uppercase mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Pearl District<br />Portland, OR 97209</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(503) 555-0142</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>hello@ajisaisushisteak.com</span>
              </li>
            </ul>
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://instagram.com/ajisaisushisteak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition-colors"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition-colors"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://yelp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition-colors"
                aria-label="Find us on Yelp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206 9.194 9.194 0 012.364 3.252 1.073 1.073 0 01-.694 1.459zm-3.708 5.14l-4.89-1.792c-.942-.347-.942-1.63 0-1.976l4.89-1.792a1.072 1.072 0 011.419.704 9.194 9.194 0 010 4.152 1.072 1.072 0 01-1.42.704zm-8.708-1.433l-4.995-1.433a1.073 1.073 0 01-.694-1.459 9.194 9.194 0 012.364-3.252 1.072 1.072 0 011.596.206l2.905 4.308c.564.83-.216 1.906-1.176 1.63zm.001-8.602L4.84 12.007c-.962.276-1.74-.8-1.176-1.63L6.57 6.07a1.072 1.072 0 011.596-.206 9.194 9.194 0 012.364 3.252 1.073 1.073 0 01-.694 1.459l-1.091.124zM12 2.982a9.194 9.194 0 014.015.915 1.072 1.072 0 01.373 1.629L13.48 9.834c-.564.83-1.885.83-2.449 0L8.123 5.526a1.072 1.072 0 01.373-1.629A9.194 9.194 0 0112 2.982z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-burgundy-light mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Ajisai Sushi & Steak. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
