import { Metadata } from 'next';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import MapEmbed from '@/components/MapEmbed';

export const metadata: Metadata = {
  title: 'Contact Us | Get in Touch',
  description:
    'Contact Ajisai Sushi & Steak in Portland, Oregon. Find our location, hours, phone number, and send us a message. We\'d love to hear from you.',
  keywords: [
    'Contact Ajisai Portland',
    'Ajisai Phone Number',
    'Ajisai Location',
    'Portland Sushi Restaurant Address',
    'Japanese Restaurant Contact',
  ],
  openGraph: {
    title: 'Contact Ajisai Sushi & Steak Portland',
    description:
      'Get in touch with us. Find our location, hours, and contact information.',
    url: 'https://ajisaisushisteak.com/contact',
    images: [
      {
        url: '/images/contact-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Ajisai Restaurant Location in Portland',
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Contact Us"
        subtitle="We'd love to hear from you"
        showCTA={false}
        imageUrl="/images/contact-hero.jpg"
        height="medium"
      />

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <span className="text-gold text-sm tracking-widest uppercase">Get in Touch</span>
              <h2 className="text-3xl md:text-4xl font-serif text-burgundy mt-2 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Have a question, comment, or special request? We&apos;re here to help. Fill out the form 
                below and our team will get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info & Map */}
            <div>
              <span className="text-gold text-sm tracking-widest uppercase">Visit Us</span>
              <h2 className="text-3xl md:text-4xl font-serif text-burgundy mt-2 mb-6">
                Find Our Location
              </h2>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-cream rounded-lg p-6">
                  <div className="bg-burgundy rounded-full p-3 inline-block mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-lg text-burgundy mb-2">Address</h3>
                  <p className="text-gray-600 text-sm">
                    1234 NW 23rd Avenue<br />
                    Portland, OR 97210
                  </p>
                </div>

                <div className="bg-cream rounded-lg p-6">
                  <div className="bg-burgundy rounded-full p-3 inline-block mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-lg text-burgundy mb-2">Phone</h3>
                  <p className="text-gray-600 text-sm">
                    <a href="tel:+15035550142" className="hover:text-burgundy transition-colors">
                      (503) 555-0142
                    </a>
                  </p>
                </div>

                <div className="bg-cream rounded-lg p-6">
                  <div className="bg-burgundy rounded-full p-3 inline-block mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-lg text-burgundy mb-2">Email</h3>
                  <p className="text-gray-600 text-sm">
                    <a href="mailto:hello@ajisaisushisteak.com" className="hover:text-burgundy transition-colors">
                      hello@ajisaisushisteak.com
                    </a>
                  </p>
                </div>

                <div className="bg-cream rounded-lg p-6">
                  <div className="bg-burgundy rounded-full p-3 inline-block mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-lg text-burgundy mb-2">Hours</h3>
                  <p className="text-gray-600 text-sm">
                    Mon-Thu: 11AM - 10PM<br />
                    Fri-Sat: 11AM - 11PM<br />
                    Sun: 12PM - 9PM
                  </p>
                </div>
              </div>

              {/* Map */}
              <MapEmbed />
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-sm tracking-widest uppercase">Follow Along</span>
          <h2 className="text-3xl md:text-4xl font-serif text-burgundy mt-2 mb-6">
            Connect With Us
          </h2>
          <p className="text-gray-600 mb-8">
            Stay updated on seasonal specials, behind-the-scenes moments, and more.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://instagram.com/ajisaisushisteak"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-burgundy text-white p-4 rounded-full hover:bg-burgundy-dark transition-colors"
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
              className="bg-burgundy text-white p-4 rounded-full hover:bg-burgundy-dark transition-colors"
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
              className="bg-burgundy text-white p-4 rounded-full hover:bg-burgundy-dark transition-colors"
              aria-label="Find us on Yelp"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206 9.194 9.194 0 012.364 3.252 1.073 1.073 0 01-.694 1.459zm-3.708 5.14l-4.89-1.792c-.942-.347-.942-1.63 0-1.976l4.89-1.792a1.072 1.072 0 011.419.704 9.194 9.194 0 010 4.152 1.072 1.072 0 01-1.42.704zm-8.708-1.433l-4.995-1.433a1.073 1.073 0 01-.694-1.459 9.194 9.194 0 012.364-3.252 1.072 1.072 0 011.596.206l2.905 4.308c.564.83-.216 1.906-1.176 1.63zm.001-8.602L4.84 12.007c-.962.276-1.74-.8-1.176-1.63L6.57 6.07a1.072 1.072 0 011.596-.206 9.194 9.194 0 012.364 3.252 1.073 1.073 0 01-.694 1.459l-1.091.124zM12 2.982a9.194 9.194 0 014.015.915 1.072 1.072 0 01.373 1.629L13.48 9.834c-.564.83-1.885.83-2.449 0L8.123 5.526a1.072 1.072 0 01.373-1.629A9.194 9.194 0 0112 2.982z"/>
              </svg>
            </a>
            <a
              href="https://google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-burgundy text-white p-4 rounded-full hover:bg-burgundy-dark transition-colors"
              aria-label="Find us on Google Maps"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C7.802 0 4 3.403 4 7.602 4 11.8 7.469 16.812 12 24c4.531-7.188 8-12.2 8-16.398C20 3.403 16.199 0 12 0zm0 11a3 3 0 110-6 3 3 0 010 6z"/>
              </svg>
            </a>
          </div>
          <p className="mt-6 text-gray-500 text-sm">
            @ajisaisushisteak on Instagram
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-gold text-sm tracking-widest uppercase">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-serif text-burgundy mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'Do you take reservations?',
                answer: 'Yes! We highly recommend reservations, especially for weekend dining. You can book online through our reservations page or call us directly at (503) 555-0142.',
              },
              {
                question: 'Is there parking available?',
                answer: 'Street parking is available on NW 23rd Avenue and surrounding streets. There is also a public parking garage located on NW 24th Avenue, about a block from the restaurant.',
              },
              {
                question: 'Do you accommodate dietary restrictions?',
                answer: 'Absolutely. We offer vegetarian and vegan options, and our kitchen can accommodate many allergies and dietary needs. Please inform your server or note any restrictions when making your reservation.',
              },
              {
                question: 'Do you offer catering or private events?',
                answer: 'Yes, we offer full catering services and can accommodate private events of various sizes, including full restaurant buyouts. Please contact us directly to discuss your needs.',
              },
              {
                question: 'Is there a dress code?',
                answer: 'We maintain a smart casual atmosphere. While we don\'t have a strict dress code, we encourage guests to dress appropriately for an upscale dining experience.',
              },
              {
                question: 'Do you offer takeout and delivery?',
                answer: 'Yes! You can place takeout orders by phone or through our website. Delivery is available within a 5-mile radius through our delivery partners.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-cream rounded-lg p-6">
                <h3 className="font-serif text-lg text-burgundy mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
