import { Smartphone, Check, Calendar, Clock, Bell, Star, Instagram, Menu, X, Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

type Language = 'es' | 'en' | 'fr' | 'de' | 'it';

const translations = {
  es: {
    nav: {
      about: 'Nosotros',
      services: 'Servicios',
      brands: 'Marcas',
      contact: 'Donde estamos',
      reserve: 'Reservar',
    },
    backToHome: 'Volver al inicio',
    title: 'Descarga nuestra App Móvil',
    subtitle: 'Gestiona tus citas de belleza desde tu móvil de forma rápida y sencilla',
    downloadFor: 'Descarga para',
    features: {
      title: 'Características de la App',
      items: [
        'Reserva tus citas en segundos',
        'Historial completo de tus visitas',
        'Notificaciones de recordatorio',
        'Acceso a tu perfil y preferencias',
      ],
    },
    benefits: {
      title: '¿Por qué descargar la app?',
      subtitle: 'Disfruta de una experiencia premium diseñada para ti',
    },
    comingSoon: 'Próximamente disponible',
    footer: {
      brandName: 'María Lainez Hair Stylist',
      designed: 'Diseñado por CapJe © 2026',
    },
  },
  en: {
    nav: {
      about: 'About Us',
      services: 'Services',
      brands: 'Brands',
      contact: 'Where we are',
      reserve: 'Book Now',
    },
    backToHome: 'Back to Home',
    title: 'Download our Mobile App',
    subtitle: 'Manage your beauty appointments from your mobile quickly and easily',
    downloadFor: 'Download for',
    features: {
      title: 'App Features',
      items: [
        'Book your appointments in seconds',
        'Complete history of your visits',
        'Reminder notifications',
        'Access to your profile and preferences',
      ],
    },
    benefits: {
      title: 'Why download the app?',
      subtitle: 'Enjoy a premium experience designed for you',
    },
    comingSoon: 'Coming Soon',
    footer: {
      brandName: 'María Lainez Hair Stylist',
      designed: 'Designed by CapJe © 2026',
    },
  },
  fr: {
    nav: {
      about: 'À propos',
      services: 'Services',
      brands: 'Marques',
      contact: 'Où nous sommes',
      reserve: 'Réserver',
    },
    backToHome: 'Retour à l\'accueil',
    title: 'Téléchargez notre App Mobile',
    subtitle: 'Gérez vos rendez-vous beauté depuis votre mobile rapidement et facilement',
    downloadFor: 'Télécharger pour',
    features: {
      title: 'Fonctionnalités de l\'App',
      items: [
        'Réservez vos rendez-vous en quelques secondes',
        'Historique complet de vos visites',
        'Notifications de rappel',
        'Accès à votre profil et préférences',
      ],
    },
    benefits: {
      title: 'Pourquoi télécharger l\'app?',
      subtitle: 'Profitez d\'une expérience premium conçue pour vous',
    },
    comingSoon: 'Bientôt disponible',
    footer: {
      brandName: 'María Lainez Coiffeur',
      designed: 'Conçu par CapJe © 2026',
    },
  },
  de: {
    nav: {
      about: 'Über uns',
      services: 'Dienstleistungen',
      brands: 'Marken',
      contact: 'Wo wir sind',
      reserve: 'Buchen',
    },
    backToHome: 'Zurück zur Startseite',
    title: 'Laden Sie unsere Mobile App herunter',
    subtitle: 'Verwalten Sie Ihre Beauty-Termine schnell und einfach von Ihrem Handy aus',
    downloadFor: 'Herunterladen für',
    features: {
      title: 'App-Funktionen',
      items: [
        'Buchen Sie Ihre Termine in Sekunden',
        'Vollständige Historie Ihrer Besuche',
        'Erinnerungsbenachrichtigungen',
        'Zugriff auf Ihr Profil und Ihre Präferenzen',
      ],
    },
    benefits: {
      title: 'Warum die App herunterladen?',
      subtitle: 'Genießen Sie ein Premium-Erlebnis, das für Sie entwickelt wurde',
    },
    comingSoon: 'Demnächst verfügbar',
    footer: {
      brandName: 'María Lainez Friseur',
      designed: 'Entworfen von CapJe © 2026',
    },
  },
  it: {
    nav: {
      about: 'Chi siamo',
      services: 'Servizi',
      brands: 'Marchi',
      contact: 'Dove siamo',
      reserve: 'Prenota',
    },
    backToHome: 'Torna alla home',
    title: 'Scarica la nostra App Mobile',
    subtitle: 'Gestisci i tuoi appuntamenti di bellezza dal tuo cellulare in modo rapido e semplice',
    downloadFor: 'Scarica per',
    features: {
      title: 'Caratteristiche dell\'App',
      items: [
        'Prenota i tuoi appuntamenti in pochi secondi',
        'Storico completo delle tue visite',
        'Notifiche di promemoria',
        'Accesso al tuo profilo e preferenze',
      ],
    },
    benefits: {
      title: 'Perché scaricare l\'app?',
      subtitle: 'Goditi un\'esperienza premium progettata per te',
    },
    comingSoon: 'Disponibile a breve',
    footer: {
      brandName: 'María Lainez Parrucchiere',
      designed: 'Progettato da CapJe © 2026',
    },
  },
};

export default function DescargarApp() {
  const [lang, setLang] = useState<Language>('es');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const t = translations[lang];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    setLangDropdownOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const featureIcons = [Calendar, Clock, Bell, Star];

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-yellow-400 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={scrollToTop}
              className="focus:outline-none focus:ring-2 focus:ring-yellow-600 rounded-full transition-transform hover:scale-105"
              aria-label="Ir al inicio"
            >
              <img src="/logo-header.webp" alt="María Lainez Hair Stylist" className="h-12 w-12 object-cover rounded-full cursor-pointer" />
            </button>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/#historia" className="text-gray-900 hover:text-gray-700 font-medium transition-colors">
                {t.nav.about}
              </Link>
              <Link to="/#marcas" className="text-gray-900 hover:text-gray-700 font-medium transition-colors">
                {t.nav.services}
              </Link>
              <Link to="/#marcas" className="text-gray-900 hover:text-gray-700 font-medium transition-colors">
                {t.nav.brands}
              </Link>
              <Link to="/#ubicacion" className="text-gray-900 hover:text-gray-700 font-medium transition-colors">
                {t.nav.contact}
              </Link>
              <Link to="/" className="text-gray-900 hover:text-gray-700 font-medium transition-colors">
                {t.backToHome}
              </Link>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Link to="/reservas-app">
                <Button className="bg-black text-white hover:bg-gray-800 font-semibold px-6">
                  {t.nav.reserve}
                </Button>
              </Link>
              
              <div className="relative" ref={dropdownRef}>
                <div className="flex items-center gap-2 bg-white rounded-md p-1">
                  <button
                    onClick={() => handleLanguageChange('es')}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      lang === 'es'
                        ? 'bg-yellow-400 text-gray-900'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    ES
                  </button>
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      lang === 'en'
                        ? 'bg-yellow-400 text-gray-900'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                    className="px-2 py-1 text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label="More languages"
                  >
                    <Globe className="w-4 h-4" />
                  </button>
                </div>

                {langDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-md shadow-lg p-1 z-50 min-w-[100px] animate-in fade-in slide-in-from-top-2 duration-200">
                    <button
                      onClick={() => handleLanguageChange('fr')}
                      className={`w-full px-4 py-2 rounded text-sm font-medium transition-colors text-left ${
                        lang === 'fr'
                          ? 'bg-yellow-400 text-gray-900'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      FR
                    </button>
                    <button
                      onClick={() => handleLanguageChange('de')}
                      className={`w-full px-4 py-2 rounded text-sm font-medium transition-colors text-left ${
                        lang === 'de'
                          ? 'bg-yellow-400 text-gray-900'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      DE
                    </button>
                    <button
                      onClick={() => handleLanguageChange('it')}
                      className={`w-full px-4 py-2 rounded text-sm font-medium transition-colors text-left ${
                        lang === 'it'
                          ? 'bg-yellow-400 text-gray-900'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      IT
                    </button>
                  </div>
                )}
              </div>
            </div>

            <button
              className="md:hidden text-gray-900 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity md:hidden ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        <div
          className={`fixed top-0 right-0 h-full w-80 bg-yellow-400 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex items-center justify-between mb-8">
              <button 
                onClick={scrollToTop}
                className="focus:outline-none focus:ring-2 focus:ring-yellow-600 rounded-full transition-transform hover:scale-105"
                aria-label="Ir al inicio"
              >
                <img src="/logo-header.webp" alt="María Lainez Hair Stylist" className="h-10 w-10 object-cover rounded-full cursor-pointer" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-900 p-2"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 mb-8">
              <Link to="/#historia" onClick={() => setMobileMenuOpen(false)} className="text-left text-gray-900 hover:text-gray-700 font-medium text-lg transition-colors py-2">
                {t.nav.about}
              </Link>
              <Link to="/#marcas" onClick={() => setMobileMenuOpen(false)} className="text-left text-gray-900 hover:text-gray-700 font-medium text-lg transition-colors py-2">
                {t.nav.services}
              </Link>
              <Link to="/#marcas" onClick={() => setMobileMenuOpen(false)} className="text-left text-gray-900 hover:text-gray-700 font-medium text-lg transition-colors py-2">
                {t.nav.brands}
              </Link>
              <Link to="/#ubicacion" onClick={() => setMobileMenuOpen(false)} className="text-left text-gray-900 hover:text-gray-700 font-medium text-lg transition-colors py-2">
                {t.nav.contact}
              </Link>
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-left text-gray-900 hover:text-gray-700 font-medium text-lg transition-colors py-2">
                {t.backToHome}
              </Link>
            </nav>

            <Link to="/reservas-app" className="w-full" onClick={() => setMobileMenuOpen(false)}>
              <Button className="bg-black text-white hover:bg-gray-800 font-semibold w-full mb-8">
                {t.nav.reserve}
              </Button>
            </Link>

            <div className="border-t border-gray-900/20 pt-6">
              <p className="text-sm font-medium text-gray-900 mb-3">Idioma / Language</p>
              <div className="grid grid-cols-3 gap-2">
                {(['es', 'en', 'fr', 'de', 'it'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setMobileMenuOpen(false); }}
                    className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                      lang === l
                        ? 'bg-gray-900 text-white'
                        : 'bg-white text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-gradient-to-br from-gray-50 via-yellow-50 to-gray-100">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto mb-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-black/10 rounded-3xl blur-3xl"></div>
              <div className="relative bg-black rounded-3xl p-8 shadow-2xl">
                <div className="aspect-[9/19] bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 rounded-[2.5rem] flex items-center justify-center overflow-hidden border-8 border-black shadow-xl">
                  <div className="text-center px-8">
                    <Smartphone className="w-24 h-24 mx-auto mb-6 text-black" />
                    <div className="space-y-4">
                      <div className="h-3 bg-black/20 rounded-full w-3/4 mx-auto"></div>
                      <div className="h-3 bg-black/20 rounded-full w-full"></div>
                      <div className="h-3 bg-black/20 rounded-full w-2/3 mx-auto"></div>
                      <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="h-20 bg-black/20 rounded-2xl"></div>
                        <div className="h-20 bg-black/20 rounded-2xl"></div>
                        <div className="h-20 bg-black/20 rounded-2xl"></div>
                        <div className="h-20 bg-black/20 rounded-2xl"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {t.downloadFor}:
                </h2>
                
                <Link
                  to="/reservas-app"
                  className="flex items-center gap-4 bg-black text-white p-6 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg group"
                >
                  <div className="bg-white rounded-xl p-3">
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                      <path d="M3 20.5V3.5C3 2.4 3.9 1.5 5 1.5H19C20.1 1.5 21 2.4 21 3.5V20.5C21 21.6 20.1 22.5 19 22.5H5C3.9 22.5 3 21.6 3 20.5Z" fill="#34A853"/>
                      <path d="M3 3.5L13.5 12L3 20.5V3.5Z" fill="#EA4335"/>
                      <path d="M3 3.5L13.5 12L21 3.5H3Z" fill="#FBBC04"/>
                      <path d="M3 20.5L13.5 12L21 20.5H3Z" fill="#4285F4"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-300">Google Play</div>
                    <div className="text-lg font-semibold group-hover:text-yellow-400 transition-colors">
                      {t.comingSoon}
                    </div>
                  </div>
                  <Smartphone className="w-6 h-6 opacity-50" />
                </Link>

                <Link
                  to="/reservas-app"
                  className="flex items-center gap-4 bg-black text-white p-6 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg group"
                >
                  <div className="bg-white rounded-xl p-3">
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-300">App Store</div>
                    <div className="text-lg font-semibold group-hover:text-yellow-400 transition-colors">
                      {t.comingSoon}
                    </div>
                  </div>
                  <Smartphone className="w-6 h-6 opacity-50" />
                </Link>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t.benefits.title}
              </h2>
              <p className="text-lg text-gray-600">
                {t.benefits.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {t.features.items.map((feature, index) => {
                const Icon = featureIcons[index];
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-yellow-400"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-yellow-400 rounded-xl p-3 shrink-0">
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
                          <p className="text-gray-800 font-medium leading-relaxed">
                            {feature}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-20 text-center">
            <div className="inline-block bg-yellow-400 rounded-full px-8 py-4 shadow-xl">
              <p className="text-black font-bold text-lg">
                {t.footer.brandName}
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-yellow-400 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
            <div className="flex-1 text-center md:text-left">
              <p className="text-sm font-medium text-gray-900">{t.footer.designed}</p>
            </div>

            <div className="flex-1 text-center">
              <p className="text-lg font-bold text-gray-900">{t.footer.brandName}</p>
            </div>

            <div className="flex-1 flex justify-center md:justify-end">
              <a
                href="https://www.instagram.com/marialainezhairstylist"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="elfsight-app-5dc44478-8a64-4d4b-9d84-4fc7e17f9b8f" data-elfsight-app-lazy></div>
    </div>
  );
}
