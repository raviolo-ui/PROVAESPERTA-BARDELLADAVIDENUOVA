// App.js
import React from 'react';
import Header from '@/app/component/header';
import OldGlassContentBlock from '@/app/component/servizi'; 
import Footer from '@/app/component/footer';

function App() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Servizi', href: '#',},
    { name: 'Contatti', href: '#' },
    { name: 'Info', href: '#' },
  ];

  // Dati per il nuovo componente (tutto qui dentro)
  const contentData = {
    breadcrumb: [
      { label: 'Home', href: '#' },
      { label: 'Servizi Aggiuntivi', href: '#' },
    ],
    title: 'VISION E MISSION',
    intro: 'Il centro diurno è un servizio territoriale di tipo semi-residenziale rivolto prevalentemente ad anziani con vario grado di non autosufficienza, con prevalente disturbo cognitivo. Gli obiettivi del servizio sono:',
    objectives: [
      'Sostegno e sollievo ai familiari e alla rete sociale di supporto',
      'Contrastare fenomeni di isolamento e solitudine',
      'Potenziale, mantenere e/o compensare abilità e competenze relative alla sfera dell’autonomia, dell’identità e dell’orientamento spazio-temporale, delle relazioni interpersonali e della socializzazione',
      'Potenziale la rete di servizi per le persone anziane, proponendo interventi personalizzati, con progetti specifici rispondenti ai bisogni dei singoli.',
    ],
    activitiesIntro: 'Le attività del servizio sono:',
    activities: [
      'Assistenza tutelare diurna',
      'Igiene e cura della persona, con stimolazione delle capacità residue',
      'Somministrazione di colazione, pranzo e merenda con aiuto nell’alimentazione',
      'Attività ricreative, culturali, occupazionali, per il mantenimento delle capacità espressive e relazionali, compatibilmente con le condizioni psico-fisiche',
      'Attività terapeutico riabilitativa-fisioterapica',
      'Supporto psicologico e sociale sia agli utenti che ai familiari',
      'Assistenza sanitaria',
    ],
    professionalsIntro: 'Le figure professionali:',
    professionals: [
      'Coordinatore responsabile',
      'Infermiere professionale',
      'Operatore socio-sanitario',
      'Assistente sociale',
      'Educatore professionale',
      'Fisioterapista',
      'Psicologo',
    ],
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
      {/* Sfondo sottile con texture */}
      <div className="absolute inset-0 z-0 opacity-40" style={{
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")',
        backgroundSize: '200px 200px'
      }}></div>
      {/* Elementi decorativi per un tocco classico */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 z-0 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-teal-300 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 z-0 transform translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10"> {/* Contenuto principale sopra gli effetti di sfondo */}
        <Header navItems={navItems} />
        <main className="container mx-auto px-4 py-8">
          <OldGlassContentBlock content={contentData} /> {/* Inserimento del nuovo componente */}
        </main>
        <Footer contactInfo={contactInfo} />
      </div>
    </div>
  );
}

export default App;