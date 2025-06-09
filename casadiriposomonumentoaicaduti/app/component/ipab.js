import React from 'react';

const OldGlassLoginForm = ({ content }) => {
  const { title, fields, buttonText, forgotPasswordLink } = content;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Qui puoi aggiungere la logica per la sottomissione del form
    console.log('Form submitted!');
    // Esempio di accesso ai valori dei campi:
    // const cognome = e.target.cognome.value;
    // const nome = e.target.nome.value;
    // const password = e.target.password.value;
    // console.log({ cognome, nome, password });
  };

  return (
    <div className="bg-white bg-opacity-30 backdrop-blur-sm rounded-xl shadow-lg p-8 md:p-10 w-full max-w-md mx-auto border border-gray-300">
      <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6 pb-2 border-b border-gray-400 leading-tight">
        {title}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {fields.map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id} className="block text-lg font-serif text-gray-700 mb-2">
              {field.label}
            </label>
            <input
              type={field.type}
              id={field.id}
              name={field.id}
              placeholder={field.placeholder}
              className="w-full px-4 py-3 bg-white bg-opacity-60 rounded-md border border-gray-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-200 text-gray-800 placeholder-gray-500 font-sans shadow-inner"
              required // Rende il campo obbligatorio
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full py-3 px-6 bg-gradient-to-r from-stone-700 to-stone-900 text-white font-semibold rounded-full shadow-lg hover:from-stone-800 hover:to-black transition-all duration-300 transform hover:scale-105 mt-6"
        >
          {buttonText}
        </button>
      </form>

      {forgotPasswordLink && (
        <div className="text-right mt-4">
          <a
            href={forgotPasswordLink.href}
            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm font-sans underline"
          >
            {forgotPasswordLink.text}
          </a>
        </div>
      )}
    </div>
  );
};

export default OldGlassLoginForm;