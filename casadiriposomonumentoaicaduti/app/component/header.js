import React from 'react';

const Header = ({ navItems }) => {
  return (
    <header className="bg-white bg-opacity-30 backdrop-blur-sm shadow-md py-4 rounded-b-2xl border-b border-gray-300">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="https://www.cdrmonumento.com/ae2131/images/SFONDO%20BIANCO%20PICCOLO.jpg" alt="IPAB Logo" className="h-20 w-50 rounded-lg border border-gray-400 p-1 bg-white shadow-inner" /> {/* Sostituisci con il percorso del tuo logo stilizzato */}
          <div>
            <div className="text-2xl font-serif font-bold text-gray-800 tracking-wide drop-shadow-sm">I.P.A.B.</div>
            <div className="text-sm text-gray-600">SAN DONÀ DI PIAVE</div>
          </div>
        </div>

        {/* Navigazione */}
        <nav>
          <ul className="flex space-x-8">
            {navItems.map((item, index) => (
              <li key={index} className="relative group">
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200 flex items-center text-lg font-serif font-medium tracking-wide"
                >
                  {item.name}
                  {item.dropdown && (
                    <svg
                      className="ml-2 w-5 h-5 text-gray-500 group-hover:text-gray-700 transition-transform duration-200 transform group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  )}
                </a>
                {item.dropdown && (
                  <ul className="absolute left-1/2 -translate-x-1/2 mt-3 w-48 bg-white bg-opacity-50 backdrop-blur-md text-gray-800 rounded-lg shadow-lg border border-gray-300 opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 invisible overflow-hidden">
                    {item.dropdown.map((dropdownItem, dIndex) => (
                      <li key={dIndex}>
                        <a
                          href="#"
                          className="block px-5 py-3 hover:bg-gray-100 hover:bg-opacity-50 transition-colors duration-200 text-gray-700 font-serif"
                        >
                          {dropdownItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;