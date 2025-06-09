// App.js
import React from 'react';
import Header from '@/app/component/header';
import HeroSection from '@/app/component/herosection';
import IconBoxes from '@/app/component/iconboxes';
import Footer from '@/app/component/footer';

function App() {
  const navItems = [
    { name: 'Homepage', href: '#' },
    { name: 'Servizi', href: 'Servizi',  },
    { name: 'PERCHE L IPAB', href: '#',  },
    { name: 'I.P.A.B informa', href: '#',  },
    { name: 'Sostienici', href: '#',},
    { name: 'Extranet', href: '#',},
    { name: 'Accessi Riservati', href: '#',},
    { name: 'PRIVACY', href: '#',},
  ];

  const iconBoxData = [
    { title: 'Amministrazione Trasparente', icon: '📜', link: '#' }, // Icone più neutre/classiche
    { title: 'Albo Pretorio Online', icon: '🏛️', link: '#' },
    { title: 'Contatti', icon: '✉️', link: '#' },
    { title: 'pagoPA', icon: '💳', link: '#' },
  ];

  const contactInfo = {
    name: 'I.P.A.B. SAN DONÀ DI PIAVE',
    tel: '+39 0421 339011',
    email: 'segreteria@ipabmonumento.com', // E-mail più formale
    pec: 'ipabmonumento@halyspec.it',
    location: 'San Donà di Piave, Italia',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-stone-200 to-stone-300 text-stone-800 font-serif antialiased relative overflow-hidden">
      {/* Sfondo sottile con texture */}
      <div className="absolute inset-0 z-0 opacity-40" style={{
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")', // Esempio di texture carta, puoi sostituire
        backgroundSize: '200px 200px'
      }}></div>
      {/* Elementi decorativi per un tocco classico */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 z-0 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-teal-300 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 z-0 transform translate-x-1/2 translate-y-1/2"></div>


      <div className="relative z-10"> {/* Contenuto principale sopra gli effetti di sfondo */}
        <Header navItems={navItems} />
        <main className="container mx-auto px-4 py-8">
          <HeroSection
            title="Archivi Storici & Cronache Attuali: I.P.A.B."
            description="Con riverenza presentiamo il portale dell'I.P.A.B. 'Monumento ai Caduti in Guerra' di San Donà di Piave. Qui potrete consultare gli annali della nostra istituzione e le più recenti deliberazioni, in un connubio di storia e trasparenza."
            buttonText="Consulta gli Annali"
            buttonLink="#"
          />
          <IconBoxes data={iconBoxData} />
        </main>
        <Footer contactInfo={contactInfo} />
      </div>
    </div>
  );
}

export default App;