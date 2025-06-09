import React from 'react';

// --- ICONE SVG (Stilizzate per il tema futuristico) ---
// Usiamo colori vivaci (cyan) e bianco per un look neon

const ArrowRightIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>);
const LockIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mb-3 text-cyan-400"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>);
const DocumentIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mb-3 text-cyan-400"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>);
const PhoneIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mb-3 text-cyan-400"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" /></svg>);
const PagoPALogo = () => (<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/PagoPA_logo.svg/2560px-PagoPA_logo.svg.png" alt="pagoPA" className="w-24 mb-3 filter invert brightness-200"/>);
const BackToTopIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg>);
const ChevronDownIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1.5 text-slate-400 group-hover:text-white transition-colors"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>);

// --- COMPONENTI RI-STILIZZATI ---

const GlassPanel = ({ children, className = '' }) => (
    <div className={`bg-slate-800/50 backdrop-blur-lg border border-slate-700 rounded-2xl shadow-2xl shadow-black/30 ${className}`}>
        {children}
    </div>
);

const FuturisticHeader = ({ logoSrc, logoInfo, navItems }) => (
    <nav className="p-4">
        <GlassPanel className="container mx-auto flex items-center justify-between p-4">
            <a href="#" className="flex items-center space-x-4"><img src={logoSrc} alt="Logo" className="h-14 w-14 rounded-full ring-2 ring-cyan-500/50 ring-offset-4 ring-offset-slate-900 transition-transform hover:scale-110" />
                <div className="flex flex-col"><span className="font-bold text-lg text-white">{logoInfo.title}</span><span className="text-xs text-cyan-400 tracking-widest uppercase">{logoInfo.subtitle}</span></div>
            </a>
            <ul className="flex items-center space-x-2">
                {navItems.map((item) => (<li key={item.name} className="group"><a href={item.href} className="flex items-center px-4 py-2 rounded-full text-sm font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-cyan-500/40">{item.name}{item.hasDropdown && <ChevronDownIcon />}</a></li>))}
            </ul>
        </GlassPanel>
    </nav>
);

const FuturisticContent = ({ presentationTitle, presentationText, eventsTitle, feedLink }) => (
     <div className="p-4">
        <GlassPanel className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
                <h2 className="text-3xl font-bold text-white">{eventsTitle}</h2>
                <hr className="border-t-2 border-cyan-500/50 w-20 my-4" />
                <a href={feedLink.href} className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/40">
                    {feedLink.text} <ArrowRightIcon />
                </a>
            </div>
            <div className="md:col-span-2">
                <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider">{presentationTitle}</h3>
                <p className="text-slate-300 leading-relaxed mt-4">{presentationText}</p>
            </div>
        </GlassPanel>
     </div>
);

const FuturisticActions = ({ buttons }) => (
    <div className="p-4">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {buttons.map(button => (
                <a key={button.text} href={button.href} className="group">
                    <GlassPanel className="p-6 flex flex-col items-center justify-center text-center h-full transition-all duration-300 hover:!border-cyan-400/80 hover:scale-105">
                        {button.icon}
                        <span className="font-semibold text-white transition-colors group-hover:text-cyan-300">{button.text}</span>
                    </GlassPanel>
                </a>
            ))}
        </div>
    </div>
);

const FuturisticFooter = ({ logoSrc, logoInfo, contacts, copyright }) => (
    <div className="p-4 mt-8">
        <GlassPanel className="container mx-auto p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                     <div className="flex items-center space-x-4 mb-6"><img src={logoSrc} alt="Logo" className="h-12 w-12 rounded-full"/><div><span className="font-bold text-lg text-white">{logoInfo.title}</span><p className="text-xs text-cyan-400 tracking-wider uppercase">{logoInfo.subtitle}</p></div></div>
                     <div className="space-y-2 text-sm"><p className="font-bold text-white uppercase mb-2">Contatti</p>{contacts.map(contact => (<p key={contact.label}><span className="font-semibold text-slate-300 uppercase text-xs">{contact.label}: </span><a href={contact.href} className="text-slate-300 hover:text-cyan-300 transition-colors">{contact.value}</a></p>))}</div>
                </div>
                 {/* Qui potresti aggiungere una seconda colonna con altri link */}
                 <div></div>
            </div>
            <hr className="border-slate-700 my-6" />
            <p className="text-center text-xs text-slate-500">{copyright}</p>
        </GlassPanel>
    </div>
);

const FuturisticBackToTop = () => (
    <a href="#" className="fixed bottom-5 right-5 bg-slate-800/50 backdrop-blur-lg border border-slate-700 hover:border-cyan-400 text-cyan-400 hover:text-white rounded-full h-12 w-12 flex items-center justify-center shadow-lg transition-all duration-300">
        <BackToTopIcon />
    </a>
);


// --- PAGINA PRINCIPALE FUTURISTICA ---
export default function FuturisticHomePage() {
    
    // --- DATI PER I COMPONENTI ---
    const logoUrl = 'https://i.imgur.com/eK492r1.png';
    const logoData = { title: 'I.P.A.B.', subtitle: 'San Donà di Piave' };
    const navLinks = [ { name: 'Homepage', href: '#', hasDropdown: false }, { name: 'Servizi', href: '#', hasDropdown: true }, { name: 'Extranet', href: '#', hasDropdown: false }, { name: 'Privacy', href: '#', hasDropdown: false }];
    const presentationText = "Qualche breve cenno alla Storia dell'IPAB “MONUMENTO AI CADUTI IN GUERRA. Dopo l'annessione del Veneto all'Italia, l'Amministrazione comunale di San Donà ebbe un diverso assetto, rispetto a quello avuto sino ad ora: organo principale divenne il Consiglio comunale...";
    const actionButtons = [ { text: 'Amministrazione Trasparente', href: '#', icon: <LockIcon /> }, { text: 'Albo Pretorio Online', href: '#', icon: <DocumentIcon /> }, { text: 'Contatti', href: '#', icon: <PhoneIcon /> }, { text: 'pagoPA', href: '#', icon: <PagoPALogo /> }];
    const contacts = [ { label: 'tel', value: '0421.338011', href: 'tel:0421338011' }, { label: 'e-mail', value: 'info@ipabmonumento.com', href: 'mailto:info@ipabmonumento.com' }, { label: 'PEC', value: 'ipabmonumento@halleypec.it', href: 'mailto:ipabmonumento@halleypec.it' }];
    const copyrightInfo = "© 2025 Halley Informatica & The Future. All rights reserved.";

    return (
        <div className="min-h-screen bg-slate-900 bg-[url('https://www.transparenttextures.com/patterns/gplay.png')] font-sans">
            <FuturisticHeader logoSrc={logoUrl} logoInfo={logoData} navItems={navLinks} />
            <main>
                <FuturisticContent eventsTitle="Eventi & News" feedLink={{ text: "Esplora il Feed", href: "#" }} presentationTitle="Presentazione" presentationText={presentationText} />
                <FuturisticActions buttons={actionButtons} />
            </main>
            <FuturisticFooter logoSrc={logoUrl} logoInfo={logoData} contacts={contacts} copyright={copyrightInfo} />
            <FuturisticBackToTop />
        </div>
    );
}