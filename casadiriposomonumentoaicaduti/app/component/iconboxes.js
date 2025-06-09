import React from 'react';

const IconBox = ({ title, icon, link }) => {
  return (
    <a
      href={link}
      className="block bg-white bg-opacity-30 backdrop-blur-sm rounded-xl shadow-md p-8 text-center transform hover:scale-105 transition-all duration-300 border border-gray-300 group"
    >
      <div className="text-6xl mb-5 text-gray-700 group-hover:text-amber-600 transition-colors duration-300">{icon}</div> {/* Placeholder per l'icona reale */}
      <h3 className="text-xl font-serif font-semibold text-gray-800 group-hover:text-amber-700 transition-colors duration-300">{title}</h3>
    </a>
  );
};

const IconBoxes = ({ data }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      {data.map((box, index) => (
        <IconBox key={index} title={box.title} icon={box.icon} link={box.link} />
      ))}
    </section>
  );
};

export default IconBoxes;