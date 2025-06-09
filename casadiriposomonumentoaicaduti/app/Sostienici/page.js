// App.js
import React from 'react';
import Header from '@/app/component/header';
import OldGlassLoginForm from '@/app/component/sostienici'; // Componente del form
import Footer from '@/app/component/footer';

function App() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Servizi', href: '#', },
    { name: 'Intranet', href: '#' },
    { name: 'Contatti', href: '#' },
  ];

  const loginFormData = {
    title: 'Accedi alla intranet',
    fields: [
      { id: 'cognome', label: 'Cognome', type: 'text', placeholder: 'Cognome' },
      { id: 'nome', label: 'Nome', type: 'text', placeholder: 'Nome' },
      { id: 'password', label: 'Password', type: 'password', placeholder: 'Password' },
    ],
    buttonText: '',
    forgotPasswordLink: {
      text: 'Cambia password',
      href: '#',
    },
  };

  const contactInfo = {
    name: 'I.P.A.B. SAN DONÀ DI PIAVE',
    tel: '+39 0421 339011',
    email: 'segreteria@ipabmonumento.com',
    pec: 'ipabmonumento@halyspec.it',
    location: 'San Donà di Piave, Italia',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-stone-200 to-stone-300 text-stone-800 font-sans antialiased relative overflow-hidden">
      {/* Sfondo sottile con texture e elementi decorativi */}
      <div className="absolute inset-0 z-0 opacity-40" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")', backgroundSize: '200px 200px' }}></div>
      <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 z-0 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-teal-300 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 z-0 transform translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10">
        <Header navItems={navItems} />
        <main className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[calc(100vh-200px)]">
          <OldGlassLoginForm content={loginFormData} />
        </main>
        <Footer contactInfo={contactInfo} />
      </div>
    </div>
  );
}

export default App;