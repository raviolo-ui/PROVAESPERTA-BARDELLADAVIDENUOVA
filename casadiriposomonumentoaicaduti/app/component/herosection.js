import React from 'react';

const HeroSection = ({ title, description, buttonText, buttonLink }) => {
  return (
    <section className="bg-white bg-opacity-30 backdrop-blur-sm rounded-xl shadow-lg p-10 mb-12 border border-gray-300 z-1">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
        {/* Sezione sinistra: Titolo e pulsante */}
        <div>
          <h2 className="text-5xl font-serif font-bold text-gray-800 mb-6 leading-tight drop-shadow-md">
            {title}
          </h2>
          <a
            href={buttonLink}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
          >
            {buttonText}
            <svg
              className="ml-3 w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>

        {/* Sezione destra: Descrizione */}
        <div>
          <p className="text-gray-700 leading-relaxed text-lg font-serif">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;