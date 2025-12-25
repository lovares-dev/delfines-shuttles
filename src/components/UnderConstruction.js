import React, { useEffect, useState } from 'react';

import logo from '../assets/icono.png';

const UnderConstruction = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div
        className={`max-w-2xl w-full text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img
            src={logo}
            alt="Los Delfines Shuttles Logo"
            // className="h-12 sm:h-16 md:h-20 w-auto"
            // className="h-16 sm:h-24 md:h-32 w-auto"
            className={`h-16 sm:h-20 md:h-24 w-auto mx-auto object-contain transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          ></img>
        </div>

        {/* Company Name */}
        <h1 className="text-5xl font-bold text-blue-900 mb-4 font-sans">
          Delfines Shuttles
        </h1>

        {/* Under Construction Message */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-900 text-white rounded-full p-4">
              <svg
                className="size-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-blue-900 mb-3">
            Under Construction
          </h2>

          <p className="text-gray-600 text-lg mb-4">
            We're working hard to bring you the best transportation experience
            in Costa Rica.
          </p>

          <div className="flex justify-center gap-2 mb-4">
            <div className="size-3 bg-blue-900 rounded-full animate-bounce [animation-delay:0s]"></div>
            <div className="size-3 bg-blue-900 rounded-full animate-bounce [animation-delay:0.2s]"></div>
            <div className="size-3 bg-blue-900 rounded-full animate-bounce [animation-delay:0.4s]"></div>
          </div>

          <p className="text-gray-500">
            Our website will be launching soon. Thank you for your patience!
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-blue-900 text-white rounded-2xl shadow-xl p-6">
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <div className="space-y-3 text-blue-100">
            <div className="flex items-center justify-center gap-2">
              <svg
                className="size-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href="mailto:adventuretravelscr@gmail.com?subject=Booking%20Inquiry%20-%20Delfines%20Shuttles&body=Hello%20Delfines%20Shuttles,%0A%0AI%20would%20like%20more%20information%20about%20your%20transportation%20services.%0A%0AThank%20you."
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white/60 rounded"
              >
                info@delfineshuttles.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg
                className="size-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a
                href="https://wa.me/50687436768?text=Hello%20Delfines%20Shuttles%2C%20I%20would%20like%20to%20book%20a%20transfer."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white/60 rounded"
              >
                Contact us on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-8 text-gray-500 text-sm">
          © 2025 Delfines Shuttles. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;
