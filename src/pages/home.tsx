import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Instagram, Menu, X, Globe, Calendar, Users } from 'lucide-react';

type Language = 'ES' | 'EN' | 'FR' | 'DE' | 'IT';

const translations = {
  ES: {
    nav: {
      about: 'Nosotros',
      services: 'Servicios',
      brands: 'Marcas',
      contact: 'Donde estamos',
      reserve: 'Reservar',
    },
    hero: {
      title: 'María Lainez Hair Stylist',
      subtitle: 'Mejor peluquería de España, no lo decimos nosotros, nuestros',
      subtitleLink: 'Clientes',
      cta: 'Reservar Ahora',
    },
    history: {
      title: 'Nuestra Historia',
      text: 'María Lainez Hair Stylist nació con la visión de ofrecer servicios de peluquería de la más alta calidad utilizando las mejores marcas profesionales. Desde nuestros humildes comienzos, nos hemos convertido en un referente en estilismo capilar en Puerto Sotogrande, manteniendo siempre nuestro compromiso con la excelencia y la satisfacción del cliente. Cada día trabajamos con pasión para realzar tu belleza natural y crear looks únicos que reflejen tu personalidad.',
      yearsExperience: 'Años de Experiencia',
      satisfiedClients: 'Clientes Satisfechos',
    },
    reviews: {
      title: 'Lo Que Dicen Nuestras Clientes',
    },
    brands: {
      title: 'Nuestras Marcas',
    },
    location: {
      title: 'Nuestra Ubicación',
      phone: 'Teléfono',
      address: 'Dirección',
      addressText: 'Plaza del Agua, Puerto Sotogrande, C.P 11.310, San Roque, Cádiz',
      hours: 'Horario de apertura',
      monday: 'Lunes',
      tuesday: 'Martes',
      wednesday: 'Miércoles',
      thursday: 'Jueves',
      friday: 'Viernes',
      saturday: 'Sábado',
      sunday: 'Domingo',
      closed: 'Cerrado',
      time1: '10:00 - 18:00',
      time2: '10:00 - 14:00',
    },
    footer: {
      brandName: 'María Lainez Hair Stylist',
      designed: 'Diseñado por CapJe © 2026',
    },
  },
  EN: {
    nav: {
      about: 'About Us',
      services: 'Services',
      brands: 'Brands',
      contact: 'Where we are',
      reserve: 'Book Now',
    },
    hero: {
      title: 'María Lainez Hair Stylist',
      subtitle: 'Best hair salon in Spain, not our words, our',
      subtitleLink: 'Clients',
      cta: 'Book Now',
    },
    history: {
      title: 'Our Story',
      text: 'María Lainez Hair Stylist was born with the vision of offering the highest quality hairdressing services using the best professional brands. From our humble beginnings, we have become a benchmark in hair styling in Puerto Sotogrande, always maintaining our commitment to excellence and customer satisfaction. Every day we work with passion to enhance your natural beauty and create unique looks that reflect your personality.',
      yearsExperience: 'Years of Experience',
      satisfiedClients: 'Satisfied Clients',
    },
    reviews: {
      title: 'What Our Customers Say',
    },
    brands: {
      title: 'Our Brands',
    },
    location: {
      title: 'Our Location',
      phone: 'Phone',
      address: 'Address',
      addressText: 'Plaza del Agua, Puerto Sotogrande, C.P 11.310, San Roque, Cádiz',
      hours: 'Opening Hours',
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
      closed: 'Closed',
      time1: '10:00 - 18:00',
      time2: '10:00 - 14:00',
    },
    footer: {
      brandName: 'María Lainez Hair Stylist',
      designed: 'Designed by CapJe © 2026',
    },
  },
  FR: {
    nav: {
      about: 'À propos',
      services: 'Services',
      brands: 'Marques',
      contact: 'Où nous sommes',
      reserve: 'Réserver',
    },
    hero: {
      title: 'María Lainez Coiffeur',
      subtitle: 'Meilleur salon de coiffure d\'Espagne, ce ne sont pas nos mots, nos',
      subtitleLink: 'Clients',
      cta: 'Réserver Maintenant',
    },
    history: {
      title: 'Notre Histoire',
      text: "María Lainez Coiffeur est né avec la vision d'offrir des services de coiffure de la plus haute qualité en utilisant les meilleures marques professionnelles. Depuis nos modestes débuts, nous sommes devenus une référence en stylisme capillaire à Puerto Sotogrande, en maintenant toujours notre engagement envers l'excellence et la satisfaction client. Chaque jour, nous travaillons avec passion pour sublimer votre beauté naturelle et créer des looks uniques qui reflètent votre personnalité.",
      yearsExperience: 'Ans d\'Expérience',
      satisfiedClients: 'Clients Satisfaits',
    },
    reviews: {
      title: 'Ce Que Disent Nos Clientes',
    },
    brands: {
      title: 'Nos Marques',
    },
    location: {
      title: 'Notre Emplacement',
      phone: 'Téléphone',
      address: 'Adresse',
      addressText: 'Plaza del Agua, Puerto Sotogrande, C.P 11.310, San Roque, Cádiz',
      hours: 'Heures d\'ouverture',
      monday: 'Lundi',
      tuesday: 'Mardi',
      wednesday: 'Mercredi',
      thursday: 'Jeudi',
      friday: 'Vendredi',
      saturday: 'Samedi',
      sunday: 'Dimanche',
      closed: 'Fermé',
      time1: '10:00 - 18:00',
      time2: '10:00 - 14:00',
    },
    footer: {
      brandName: 'María Lainez Coiffeur',
      designed: 'Conçu par CapJe © 2026',
    },
  },
  DE: {
    nav: {
      about: 'Über uns',
      services: 'Dienstleistungen',
      brands: 'Marken',
      contact: 'Wo wir sind',
      reserve: 'Reservieren',
    },
    hero: {
      title: 'María Lainez Friseur',
      subtitle: 'Bester Friseursalon in Spanien, nicht unsere Worte, unsere',
      subtitleLink: 'Kunden',
      cta: 'Jetzt Buchen',
    },
    history: {
      title: 'Unsere Geschichte',
      text: 'María Lainez Friseur wurde mit der Vision gegründet, Friseurdienstleistungen höchster Qualität unter Verwendung der besten professionellen Marken anzubieten. Von unseren bescheidenen Anfängen an sind wir zu einem Maßstab im Haarstyling in Puerto Sotogrande geworden und haben dabei stets unser Engagement für Exzellenz und Kundenzufriedenheit beibehalten. Jeden Tag arbeiten wir mit Leidenschaft daran, Ihre natürliche Schönheit zu unterstreichen und einzigartige Looks zu kreieren, die Ihre Persönlichkeit widerspiegeln.',
      yearsExperience: 'Jahre Erfahrung',
      satisfiedClients: 'Zufriedene Kunden',
    },
    reviews: {
      title: 'Was Unsere Kundinnen Sagen',
    },
    brands: {
      title: 'Unsere Marken',
    },
    location: {
      title: 'Unser Standort',
      phone: 'Telefon',
      address: 'Adresse',
      addressText: 'Plaza del Agua, Puerto Sotogrande, C.P 11.310, San Roque, Cádiz',
      hours: 'Öffnungszeiten',
      monday: 'Montag',
      tuesday: 'Dienstag',
      wednesday: 'Mittwoch',
      thursday: 'Donnerstag',
      friday: 'Freitag',
      saturday: 'Samstag',
      sunday: 'Sonntag',
      closed: 'Geschlossen',
      time1: '10:00 - 18:00',
      time2: '10:00 - 14:00',
    },
    footer: {
      brandName: 'María Lainez Friseur',
      designed: 'Entworfen von CapJe © 2026',
    },
  },
  IT: {
    nav: {
      about: 'Chi Siamo',
      services: 'Servizi',
      brands: 'Marchi',
      contact: 'Dove siamo',
      reserve: 'Prenota',
    },
    hero: {
      title: 'María Lainez Parrucchiere',
      subtitle: 'Miglior salone di parrucchiere in Spagna, non sono le nostre parole, i nostri',
      subtitleLink: 'Clienti',
      cta: 'Prenota Ora',
    },
    history: {
      title: 'La Nostra Storia',
      text: 'María Lainez Parrucchiere è nato con la visione di offrire servizi di parrucchiere di altissima qualità utilizzando i migliori marchi professionali. Dai nostri umili inizi, siamo diventati un punto di riferimento nello styling dei capelli a Puerto Sotogrande, mantenendo sempre il nostro impegno per l\'eccellenza e la soddisfazione del cliente. Ogni giorno lavoriamo con passione per valorizzare la tua bellezza naturale e creare look unici che riflettono la tua personalità.',
      yearsExperience: 'Anni di Esperienza',
      satisfiedClients: 'Clienti Soddisfatti',
    },
    reviews: {
      title: 'Cosa Dicono Le Nostre Clienti',
    },
    brands: {
      title: 'I Nostri Marchi',
    },
    location: {
      title: 'La Nostra Sede',
      phone: 'Telefono',
      address: 'Indirizzo',
      addressText: 'Plaza del Agua, Puerto Sotogrande, C.P 11.310, San Roque, Cádiz',
      hours: 'Orari di apertura',
      monday: 'Lunedì',
      tuesday: 'Martedì',
      wednesday: 'Mercoledì',
      thursday: 'Giovedì',
      friday: 'Venerdì',
      saturday: 'Sabato',
      sunday: 'Domenica',
      closed: 'Chiuso',
      time1: '10:00 - 18:00',
      time2: '10:00 - 14:00',
    },
    footer: {
      brandName: 'María Lainez Parrucchiere',
      designed: 'Progettato da CapJe © 2026',
    },
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>('ES');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = translations[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setLangDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };

    if (langDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [langDropdownOpen]);

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
              <button
                onClick={() => scrollToSection('historia')}
                className="text-gray-900 hover:text-gray-700 font-medium transition-colors"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection('marcas')}
                className="text-gray-900 hover:text-gray-700 font-medium transition-colors"
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => scrollToSection('marcas')}
                className="text-gray-900 hover:text-gray-700 font-medium transition-colors"
              >
                {t.nav.brands}
              </button>
              <button
                onClick={() => scrollToSection('ubicacion')}
                className="text-gray-900 hover:text-gray-700 font-medium transition-colors"
              >
                {t.nav.contact}
              </button>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Link to="/descargar-app">
                <Button
                  className="bg-black text-white hover:bg-gray-800 font-semibold px-6"
                >
                  {t.nav.reserve}
                </Button>
              </Link>
              
              <div className="relative" ref={dropdownRef}>
                <div className="flex items-center gap-2 bg-white rounded-md p-1">
                  <button
                    onClick={() => handleLanguageChange('ES')}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      language === 'ES'
                        ? 'bg-yellow-400 text-gray-900'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    ES
                  </button>
                  <button
                    onClick={() => handleLanguageChange('EN')}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      language === 'EN'
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
                      onClick={() => handleLanguageChange('FR')}
                      className={`w-full px-4 py-2 rounded text-sm font-medium transition-colors text-left ${
                        language === 'FR'
                          ? 'bg-yellow-400 text-gray-900'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      FR
                    </button>
                    <button
                      onClick={() => handleLanguageChange('DE')}
                      className={`w-full px-4 py-2 rounded text-sm font-medium transition-colors text-left ${
                        language === 'DE'
                          ? 'bg-yellow-400 text-gray-900'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      DE
                    </button>
                    <button
                      onClick={() => handleLanguageChange('IT')}
                      className={`w-full px-4 py-2 rounded text-sm font-medium transition-colors text-left ${
                        language === 'IT'
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
              <button
                onClick={() => scrollToSection('historia')}
                className="text-left text-gray-900 hover:text-gray-700 font-medium text-lg transition-colors py-2"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection('marcas')}
                className="text-left text-gray-900 hover:text-gray-700 font-medium text-lg transition-colors py-2"
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => scrollToSection('marcas')}
                className="text-left text-gray-900 hover:text-gray-700 font-medium text-lg transition-colors py-2"
              >
                {t.nav.brands}
              </button>
              <button
                onClick={() => scrollToSection('ubicacion')}
                className="text-left text-gray-900 hover:text-gray-700 font-medium text-lg transition-colors py-2"
              >
                {t.nav.contact}
              </button>
            </nav>

            <Link to="/descargar-app" className="w-full">
              <Button
                className="bg-black text-white hover:bg-gray-800 font-semibold w-full mb-8"
              >
                {t.nav.reserve}
              </Button>
            </Link>

            <div className="border-t border-gray-900/20 pt-6">
              <p className="text-sm font-medium text-gray-900 mb-3">Idioma / Language</p>
              <div className="grid grid-cols-3 gap-2">
                {(['ES', 'EN', 'FR', 'DE', 'IT'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                      language === lang
                        ? 'bg-gray-900 text-white'
                        : 'bg-white text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="home">
        <section className="flex flex-col xl:flex-row h-[calc(100vh-64px)]">
          <div className="xl:hidden w-full h-1/2 bg-cover bg-center" style={{ backgroundImage: 'url(/hero.webp)', backgroundPosition: 'left top' }}></div>
          
          <div className="w-full xl:w-[55%] h-1/2 xl:h-full bg-black flex items-center justify-center px-8 py-12">
            <div className="text-center text-white max-w-2xl">
              <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 text-yellow-400">
                {t.hero.title}
              </h1>
              <p className="text-lg md:text-xl mb-10 text-gray-300">
                {t.hero.subtitle}{' '}
                <button
                  onClick={() => scrollToSection('reviews')}
                  className="text-yellow-400 underline hover:text-yellow-300 transition-colors cursor-pointer font-semibold"
                >
                  {t.hero.subtitleLink}
                </button>
              </p>
              <Link to="/descargar-app">
                <Button
                  size="lg"
                  className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 font-bold text-lg px-12 py-6"
                >
                  {t.hero.cta}
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="hidden xl:block xl:w-[45%] xl:h-full relative overflow-hidden">
            <img 
              src="/hero.webp" 
              alt="María Lainez Hair Stylist" 
              className="absolute inset-0 w-full h-full object-cover object-left-top"
            />
          </div>
        </section>

        <section id="reviews" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
              {t.reviews.title}
            </h2>
            <div className="flex justify-center mb-12">
              <div className="w-full max-w-4xl h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            </div>
            <div className="flex justify-center">
              <div className="elfsight-app-5443c9fc-9ef5-44d6-87f5-0a2790a260be" data-elfsight-app-lazy></div>
            </div>
          </div>
        </section>

        <section id="historia" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
              {t.history.title}
            </h2>
            <div className="flex justify-center mb-12">
              <div className="w-full max-w-4xl h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1">
                <img
                  src="/historia.webp"
                  alt="Nuestra Historia"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t.history.text}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-black rounded-xl p-8 border-2 border-black hover:border-yellow-400 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-yellow-400 rounded-full p-4">
                    <Calendar className="w-8 h-8 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-5xl font-bold text-white">25+</p>
                  </div>
                </div>
                <p className="text-xl font-semibold text-white">
                  {t.history.yearsExperience}
                </p>
              </div>

              <div className="bg-black rounded-xl p-8 border-2 border-black hover:border-yellow-400 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-yellow-400 rounded-full p-4">
                    <Users className="w-8 h-8 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-5xl font-bold text-white">10,000+</p>
                  </div>
                </div>
                <p className="text-xl font-semibold text-white">
                  {t.history.satisfiedClients}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="marcas" className="py-20 bg-black">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              {t.brands.title}
            </h2>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full">
              <div
                className="bg-black rounded-xl flex items-center justify-center hover:scale-105 hover:border-white hover:border-4 transition-all duration-300 w-full md:w-1/2 p-12 shadow-2xl border-4 border-transparent"
                style={{ minHeight: '280px' }}
              >
                <img
                  src="/marca-rica-new.png"
                  alt="RICA"
                  className="max-w-full max-h-48 object-contain"
                />
              </div>
              <div
                className="bg-black rounded-xl flex items-center justify-center hover:scale-105 hover:border-white hover:border-4 transition-all duration-300 w-full md:w-1/2 p-12 shadow-2xl border-4 border-transparent"
                style={{ minHeight: '280px' }}
              >
                <img
                  src="/marca-rossety.png"
                  alt="ROSSETY & SOLÁ BARCELONA"
                  className="max-w-full max-h-48 object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="ubicacion" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
              {t.location.title}
            </h2>
            <div className="flex justify-center mb-12">
              <div className="w-full max-w-4xl h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8 md:items-start">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t.location.phone}
                  </h3>
                  <a
                    href="tel:+34654642299"
                    className="text-lg text-gray-700 hover:text-yellow-600 transition-colors block"
                  >
                    +34 654 64 22 99
                  </a>
                  <a
                    href="tel:+34956790131"
                    className="text-lg text-gray-700 hover:text-yellow-600 transition-colors block"
                  >
                    +34 956 79 01 31
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t.location.address}
                  </h3>
                  <p className="text-lg text-gray-700">
                    {t.location.addressText}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {t.location.hours}
                  </h3>
                  <div className="space-y-2 text-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 font-medium">{t.location.monday}:</span>
                      <span className="text-red-600 font-semibold">{t.location.closed}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900 font-medium">{t.location.tuesday}:</span>
                      <span className="text-gray-700">{t.location.time1}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900 font-medium">{t.location.wednesday}:</span>
                      <span className="text-gray-700">{t.location.time1}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900 font-medium">{t.location.thursday}:</span>
                      <span className="text-gray-700">{t.location.time1}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900 font-medium">{t.location.friday}:</span>
                      <span className="text-gray-700">{t.location.time1}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900 font-medium">{t.location.saturday}:</span>
                      <span className="text-gray-700">{t.location.time2}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 font-medium">{t.location.sunday}:</span>
                      <span className="text-red-600 font-semibold">{t.location.closed}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-200 rounded-lg overflow-hidden" style={{ minHeight: '500px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814.642022879685!2d-5.27386742374792!3d36.29153689620704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0cc5f08ac3e69b%3A0xcfbcef2309f27000!2sMar%C3%ADa%20Lainez%20Hair%20Stylist%20Sotogrande!5e1!3m2!1ses!2ses!4v1766315224338!5m2!1ses!2ses"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de María Lainez Hair Stylist en Puerto Sotogrande"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-yellow-400 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-center md:text-left">
            <div className="md:flex-1">
              <p className="text-gray-900 font-medium text-sm">
                {t.footer.designed}
              </p>
            </div>
            
            <div className="md:flex-1 md:text-center">
              <p className="text-gray-900 font-bold text-lg">
                {t.footer.brandName}
              </p>
            </div>
            
            <div className="md:flex-1 flex justify-center md:justify-end">
              <a
                href="https://www.instagram.com/marialainezhairstylist/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={28} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="elfsight-app-5dc44478-8a64-4d4b-9d84-4fc7e17f9b8f" data-elfsight-app-lazy></div>
    </div>
  );
}
