const MapEmbed = () => {
  return (
    <div className="bg-cream rounded-lg overflow-hidden shadow-lg">
      {/* Map Container */}
      <div className="relative h-80">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.8876544444!2d-122.69976312399548!3d45.52891597107565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549509fec4c6a96f%3A0x5f0a1c5a6e3d4c8b!2sNW%2023rd%20Ave%2C%20Portland%2C%20OR!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ajisai Restaurant Location in Portland, Oregon"
        />
      </div>

      {/* Address Info */}
      <div className="p-6 bg-white">
        <div className="flex items-start space-x-4">
          <div className="bg-burgundy rounded-full p-3 flex-shrink-0">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-serif text-lg text-burgundy mb-1">Visit Us</h4>
            <p className="text-gray-600">
              1234 NW 23rd Avenue<br />
              Portland, OR 97210
            </p>
            <a
              href="https://maps.google.com/?q=1234+NW+23rd+Avenue+Portland+OR+97210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-sm text-burgundy hover:text-burgundy-dark transition-colors"
            >
              Get Directions →
            </a>
          </div>
        </div>

        {/* Parking Info */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <svg className="w-5 h-5 text-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Street parking available • Nearby parking garage on NW 24th</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapEmbed;
