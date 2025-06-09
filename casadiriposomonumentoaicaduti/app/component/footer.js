import React from 'react';

const Footer = ({ contactInfo }) => {
  return (
    <footer className="bg-white bg-opacity-30 backdrop-blur-sm py-8 mt-auto rounded-t-2xl border-t border-gray-300">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left text-gray-600">
        {/* Informazioni di contatto */}
        <div className="mb-6 md:mb-0">
          <div className="text-xl font-serif font-bold text-gray-800 mb-2 drop-shadow-sm">{contactInfo.name}</div>
          <div className="text-gray-700 space-y-1 font-serif">
            <p>Tel: <a href={`tel:${contactInfo.tel.replace(/\s/g, '')}`} className="hover:text-gray-900 transition-colors duration-200">{contactInfo.tel}</a></p>
            <p>E-Mail: <a href={`mailto:${contactInfo.email}`} className="hover:underline hover:text-gray-900 transition-colors duration-200">{contactInfo.email}</a></p>
            <p>PEC: <a href={`mailto:${contactInfo.pec}`} className="hover:underline hover:text-gray-900 transition-colors duration-200">{contactInfo.pec}</a></p>
            <p className="text-sm">Località: {contactInfo.location}</p>
          </div>
        </div>

        {/* Copyright e Links */}
        <div className="flex flex-col items-center md:items-end space-y-4 font-serif">
          <div className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} IPAB Monuments & The Future. Tutti i diritti riservati.</div>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="hover:text-gray-900 transition-colors duration-200">Condizioni di Servizio</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-gray-900 transition-colors duration-200">Informativa sulla Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;