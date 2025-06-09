import React from 'react';

const OldGlassContentBlock = ({ content }) => {
  const { breadcrumb, title, intro, objectives, activitiesIntro, activities, professionalsIntro, professionals } = content;

  return (
    <div className="bg-white bg-opacity-30 backdrop-blur-sm rounded-xl shadow-lg p-8 md:p-10 lg:p-12 mb-8 border border-gray-300">
      {/* Breadcrumb */}
      {breadcrumb && (
        <nav className="text-sm text-gray-600 mb-6 font-serif">
          {breadcrumb.map((item, index) => (
            <React.Fragment key={index}>
              <a href={item.href} className="hover:text-gray-800 transition-colors duration-200">
                {item.label}
              </a>
              {index < breadcrumb.length - 1 && <span className="mx-2">›</span>}
            </React.Fragment>
          ))}
        </nav>
      )}

      {/* Titolo Principale */}
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6 leading-tight drop-shadow-sm">
        {title}
      </h1>

      {/* Introduzione */}
      <p className="text-lg text-gray-700 mb-6 leading-relaxed font-sans">
        {intro}
      </p>

      {/* Sezione Obiettivi */}
      {objectives && objectives.length > 0 && (
        <div className="mb-8">
          <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4 border-b border-gray-300 pb-2">
            Gli obiettivi del servizio sono:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 font-sans pl-4">
            {objectives.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Sezione Attività */}
      {activities && activities.length > 0 && (
        <div className="mb-8">
          <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4 border-b border-gray-300 pb-2">
            {activitiesIntro || 'Le attività del servizio sono:'}
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 font-sans pl-4">
            {activities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Sezione Figure Professionali */}
      {professionals && professionals.length > 0 && (
        <div>
          <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4 border-b border-gray-300 pb-2">
            {professionalsIntro || 'Le figure professionali:'}
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 font-sans pl-4">
            {professionals.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OldGlassContentBlock;