import React from 'react';

const fields = [
  { label: 'Cognome', name: 'cognome', type: 'text', placeholder: 'Cognome' },
  { label: 'Nome', name: 'nome', type: 'text', placeholder: 'Nome' },
  { label: 'Password', name: 'password', type: 'password', placeholder: 'Password' },
];

export default function LoginForm({ theme = 'glass' }) {
  const isGlass = theme === 'glass';

  return (
    <div
      className={`max-w-md mx-auto mt-10 p-6 rounded-xl shadow-lg border
        ${isGlass
          ? 'bg-white/10 backdrop-blur-md border-white/20'
          : 'bg-gray-100 border-gray-300'
        }`}
    >
      <h2 className="text-xl font-medium border-b pb-2 mb-6">Accedi alla intranet</h2>

      <form className="space-y-4">
        {fields.map(({ label, name, type, placeholder }) => (
          <div key={name}>
            <label htmlFor={name} className="block font-semibold mb-1">
              {label}
            </label>
            <input
              id={name}
              name={name}
              type={type}
              placeholder={placeholder}
              className={`w-full p-2 rounded border
                ${isGlass
                  ? 'bg-white/30 text-black border-white/30 placeholder-gray-300'
                  : 'bg-white border-gray-300'
                }`}
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-2 font-bold rounded hover:bg-gray-800"
        >
          ACCEDI
        </button>

        <div className="text-right mt-2 text-sm">
          <a href="#" className="text-gray-600 hover:underline">
            Cambia password
          </a>
        </div>
      </form>
    </div>
  );
}
