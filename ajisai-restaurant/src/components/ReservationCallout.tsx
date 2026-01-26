import Link from 'next/link';

const ReservationCallout = () => {
  return (
    <section className="relative py-24 bg-burgundy overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 border border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 border border-white rounded-full translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-white rounded-full" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
          Reserve Your Table Today
        </h2>
        <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Whether celebrating a special occasion or enjoying an intimate dinner, 
          our team is ready to create an unforgettable dining experience for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/reservations"
            className="bg-gold text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300 btn-primary"
          >
            Make a Reservation
          </Link>
          <a
            href="tel:+15035550142"
            className="bg-transparent border-2 border-white text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-white hover:text-burgundy transition-all duration-300"
          >
            Call (503) 555-0142
          </a>
        </div>
        <p className="mt-8 text-gray-300 text-sm">
          Walk-ins welcome • Private dining available • Catering & takeout
        </p>
      </div>
    </section>
  );
};

export default ReservationCallout;
