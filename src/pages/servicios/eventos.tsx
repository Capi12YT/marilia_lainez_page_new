import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Globe, ChevronLeft, ChevronRight, Instagram,RefreshCcw,Trophy,ThumbsUp } from 'lucide-react';
import { ServicesDropdown } from '../../components/ServicesDropdown';
import { WhatsAppButton } from '@/components/whatsapp-button';

const images = [
  '/evento.jpg',
  '/evento-2.jpeg',
];

const languages = ['es', 'en', 'fr', 'de', 'it'] as const;
type Language = typeof languages[number];

const translations = {
  es: {
    home: 'Inicio',
    smoothing: 'Alisados',
    services: 'Servicios',
    highlights: 'Highlights & Style',
    balayages: 'Balayages & Style',
    color: 'Color',
    hairstyles: 'Peinados',
    updos: 'Recogidos',
    permanentCurls: 'Rizos permanentes',
    cut: 'Corte',
    menCut: 'Corte Caballero',
    event: 'Eventos',
    aboutUs: 'Nosotros',
    brands: 'Marcas',
    whereWeAre: 'Donde estamos',
    bookNow: 'Reservar',
    title: 'Eventos',
    specialistsIn: 'Especialistas en peinados y estilismo para eventos',
    description1: 'En María Lainez Hair Stylist, creamos looks únicos para tus eventos más especiales. Desde bodas hasta celebraciones, nuestro equipo te acompaña para que brilles en cada ocasión.',
    description2: 'Ofrecemos asesoría personalizada, peinados, recogidos y estilismo para novias, invitadas y todo tipo de eventos. Utilizamos productos de alta calidad para garantizar un acabado impecable y duradero.',
    description3: 'Confía en nuestra experiencia para que tu día especial sea inolvidable. Reserva tu cita y déjate mimar por profesionales.',
    stat1: 'Nº1 en Highlights',
    stat2: '100% Clientes Satisfechos',
    stat3: '10/10 Vuelven a Repetir',
    designedBy: 'Diseñado por CapJe © 2026',
    brandName: 'María Lainez Hair Stylist',
  },
  en: {
    home: 'Home',
    smoothing: 'Smoothing',
    services: 'Services',
    highlights: 'Highlights & Style',
    balayages: 'Balayages & Style',
    color: 'Color',
    hairstyles: 'Hairstyles',
    updos: 'Updos',
    permanentCurls: 'Permanent Curls',
    cut: 'Cut',
    menCut: "Men's Cut",
    event: 'Events',
    aboutUs: 'About Us',
    brands: 'Brands',
    whereWeAre: 'Where we are',
    bookNow: 'Book Now',
    title: 'Events',
    specialistsIn: 'Specialists in event hairstyles and styling',
    description1: 'At María Lainez Hair Stylist, we create unique looks for your most special events. From weddings to celebrations, our team is with you so you shine on every occasion.',
    description2: 'We offer personalized advice, hairstyles, updos, and styling for brides, guests, and all kinds of events. We use high-quality products to ensure a flawless and long-lasting finish.',
    description3: 'Trust our experience to make your special day unforgettable. Book your appointment and let professionals pamper you.',
    stat1: 'Nº1 in Highlights',
    stat2: '100% Satisfied Customers',
    stat3: '10/10 Come Back',
    designedBy: 'Designed by CapJe © 2026',
    brandName: 'María Lainez Hair Stylist',
  },
  fr: {
    home: 'Accueil',
    smoothing: 'Lissages',
    services: 'Services',
    highlights: 'Highlights & Style',
    balayages: 'Balayages & Style',
    color: 'Couleur',
    hairstyles: 'Coiffures',
    updos: 'Chignons',
    permanentCurls: 'Boucles permanentes',
    cut: 'Coupe',
    menCut: 'Coupe Homme',
    event: 'Événements',
    aboutUs: 'À propos',
    brands: 'Marques',
    whereWeAre: 'Où nous sommes',
    bookNow: 'Réserver',
    title: 'Événements',
    specialistsIn: 'Spécialistes des coiffures et du stylisme pour événements',
    description1: 'Chez María Lainez Hair Stylist, nous créons des looks uniques pour vos événements les plus spéciaux. Des mariages aux célébrations, notre équipe vous accompagne pour que vous brilliez à chaque occasion.',
    description2: 'Nous offrons des conseils personnalisés, des coiffures, des chignons et du stylisme pour les mariées, les invitées et tous types d’événements. Nous utilisons des produits de haute qualité pour garantir une finition impeccable et durable.',
    description3: 'Faites confiance à notre expérience pour que votre journée spéciale soit inoubliable. Réservez votre rendez-vous et laissez-vous choyer par des professionnels.',
    stat1: 'Nº1 en Highlights',
    stat2: '100% Clients Satisfaits',
    stat3: '10/10 Reviennent',
    designedBy: 'Conçu par CapJe © 2026',
    brandName: 'María Lainez Coiffeur',
  },
  de: {
    home: 'Startseite',
    smoothing: 'Glättungen',
    services: 'Dienstleistungen',
    highlights: 'Highlights & Style',
    balayages: 'Balayages & Style',
    color: 'Farbe',
    hairstyles: 'Frisuren',
    updos: 'Hochsteckfrisuren',
    permanentCurls: 'Dauerwellen',
    cut: 'Schnitt',
    menCut: 'Herrenschnitt',
    event: 'Events',
    aboutUs: 'Über uns',
    brands: 'Marken',
    whereWeAre: 'Wo wir sind',
    bookNow: 'Buchen',
    title: 'Events',
    specialistsIn: 'Spezialisten für Eventfrisuren und Styling',
    description1: 'Bei María Lainez Hair Stylist kreieren wir einzigartige Looks für Ihre besonderen Anlässe. Von Hochzeiten bis zu Feiern begleitet Sie unser Team, damit Sie bei jedem Anlass strahlen.',
    description2: 'Wir bieten persönliche Beratung, Frisuren, Hochsteckfrisuren und Styling für Bräute, Gäste und alle Arten von Events. Wir verwenden hochwertige Produkte für ein makelloses und langanhaltendes Ergebnis.',
    description3: 'Vertrauen Sie auf unsere Erfahrung, damit Ihr besonderer Tag unvergesslich wird. Buchen Sie Ihren Termin und lassen Sie sich von Profis verwöhnen.',
    stat1: 'Nº1 in Highlights',
    stat2: '100% Zufriedene Kunden',
    stat3: '10/10 Kommen Zurück',
    designedBy: 'Entworfen von CapJe © 2026',
    brandName: 'María Lainez Friseur',
  },
  it: {
    home: 'Home',
    smoothing: 'Lisciature',
    services: 'Servizi',
    highlights: 'Highlights & Style',
    balayages: 'Balayages & Style',
    color: 'Colore',
    hairstyles: 'Acconciature',
    updos: 'Raccolti',
    permanentCurls: 'Ricci permanenti',
    cut: 'Taglio',
    menCut: 'Taglio Uomo',
    event: 'Eventi',
    aboutUs: 'Chi siamo',
    brands: 'Marchi',
    whereWeAre: 'Dove siamo',
    bookNow: 'Prenota',
    title: 'Eventi',
    specialistsIn: 'Specialisti in acconciature e styling per eventi',
    description1: 'Da María Lainez Hair Stylist creiamo look unici per i tuoi eventi più speciali. Dai matrimoni alle celebrazioni, il nostro team ti accompagna per farti brillare in ogni occasione.',
    description2: 'Offriamo consulenza personalizzata, acconciature, raccolti e styling per spose, invitate e ogni tipo di evento. Utilizziamo prodotti di alta qualità per garantire una finitura impeccabile e duratura.',
    description3: 'Affidati alla nostra esperienza per rendere indimenticabile il tuo giorno speciale. Prenota il tuo appuntamento e lasciati coccolare da professionisti.',
    stat1: 'Nº1 in Highlights',
    stat2: '100% Clienti Soddisfatti',
    stat3: '10/10 Tornano',
    designedBy: 'Progettato da CapJe © 2026',
    brandName: 'María Lainez Parrucchiere',
  },
};

function Carousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <img
        src={images[current]}
        alt={`Evento ${current + 1}`}
        className="w-full h-130 object-cover rounded-lg shadow-lg transition-all duration-500"
        style={{ aspectRatio: '4/3' }}
      />
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-yellow-400 text-gray-900 rounded-full p-2 shadow-md"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-yellow-400 text-gray-900 rounded-full p-2 shadow-md"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      <div className="flex justify-center gap-2 mt-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${current === idx ? 'bg-yellow-400' : 'bg-gray-300'}`}
            aria-label={`Ir a la imagen ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function EventosPage() {
  const [language, setLanguage] = useState<Language>('es');
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const t = translations[language];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

   const scrollToSection = (sectionId: string) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-yellow-400 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="focus:outline-none focus:ring-2 focus:ring-yellow-600 rounded-full transition-transform hover:scale-105"
            aria-label="Ir al inicio"
          >
            <img src="/logo-header.webp" alt="María Lainez Hair Stylist" className="h-12 w-12 object-cover rounded-full cursor-pointer" />
          </button>
          <nav className="hidden min-[820px]:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-900 hover:text-gray-700 font-medium hover:border-b-2 hover:border-black transition-all pb-1 border-b-2 border-transparent"
            >
              {t.home}
            </Link>
            <Link
              to="/alisados"
              className="text-gray-900 hover:text-gray-700 font-medium hover:border-b-2 hover:border-black transition-all pb-1 border-b-2 border-transparent"
            >
              {t.smoothing}
            </Link>
            <ServicesDropdown translations={t} />
            <button
              onClick={() => scrollToSection('historia')}
              className="text-gray-900 hover:text-gray-700 font-medium hover:border-b-2 hover:border-black transition-all pb-1 border-b-2 border-transparent"
            >
              {t.aboutUs}
            </button>
            <button
              onClick={() => scrollToSection('brands')}
              className="text-gray-900 hover:text-gray-700 font-medium hover:border-b-2 hover:border-black transition-all pb-1 border-b-2 border-transparent"
            >
              {t.brands}
            </button>
            <button
              onClick={() => scrollToSection('ubicacion')}
              className="text-gray-900 hover:text-gray-700 font-medium hover:border-b-2 hover:border-black transition-all pb-1 border-b-2 border-transparent"
            >
              {t.whereWeAre}
            </button>
          </nav>
          <div className="hidden min-[820px]:flex items-center gap-4">
            <button
              onClick={() => navigate('/descargar-app')}
              className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              {t.bookNow}
            </button>

            <div className="relative" ref={dropdownRef}>
              <div className="flex items-center gap-2 bg-white rounded-md p-1">
                <button
                  onClick={() => setLanguage('es')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    language === 'es'
                      ? 'bg-yellow-400 text-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    language === 'en'
                      ? 'bg-yellow-400 text-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="px-2 py-1 text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label="More languages"
                >
                  <Globe className="w-4 h-4" />
                </button>
              </div>

              {showDropdown && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-md shadow-lg p-1 z-50 min-w-[100px] animate-in fade-in slide-in-from-top-2 duration-200">
                    {(['fr', 'de', 'it'] as Language[]).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang);
                          setShowDropdown(false);
                        }}
                        className={`w-full px-4 py-2 rounded text-sm font-medium transition-colors text-left ${
                          language === lang
                            ? 'bg-yellow-400 text-gray-900'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        {lang.toUpperCase()}
                      </button>
                    ))}
                  </div>
              )}
            </div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-[820px]:hidden p-2 hover:bg-yellow-300 rounded transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 min-[820px]:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-80 bg-yellow-400 z-50 min-[820px]:hidden transform transition-transform duration-300 overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <img
                  src="/logo-header.webp"
                  alt="Logo"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-yellow-300 rounded transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="space-y-6">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-900 hover:text-gray-600 transition-colors text-lg font-medium"
                >
                  {t.home}
                </Link>
                <Link
                  to="/alisados"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-900 hover:text-gray-600 transition-colors text-lg font-medium"
                >
                  {t.smoothing}
                </Link>
                <ServicesDropdown translations={t} isMobile />
                <button
                  onClick={() => scrollToSection('historia')}
                  className="block text-gray-900 hover:text-gray-600 transition-colors text-lg font-medium text-left w-full"
                >
                  {t.aboutUs}
                </button>
                <button
                  onClick={() => scrollToSection('brands')}
                  className="block text-gray-900 hover:text-gray-600 transition-colors text-lg font-medium text-left w-full"
                >
                  {t.brands}
                </button>
                <button
                  onClick={() => scrollToSection('ubicacion')}
                  className="block text-gray-900 hover:text-gray-600 transition-colors text-lg font-medium text-left w-full"
                >
                  {t.whereWeAre}
                </button>

                <button
                  onClick={() => {
                    navigate('/descargar-app');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-center"
                >
                  {t.bookNow}
                </button>

                <div className="pt-6 border-t border-yellow-500">
                   <div className="grid grid-cols-3 gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setLanguage(lang)}
                        className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                         language === lang
                        ? 'bg-gray-900 text-white'
                        : 'bg-white text-gray-900 hover:bg-gray-100'
                        }`}
                      >
                        {lang.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex items-center justify-center min-h-[420px] md:min-h-[520px] lg:min-h-[600px]">
              <Carousel images={images} />
            </div>
            <div className="flex flex-col justify-center min-h-[420px] md:min-h-[520px] lg:min-h-[600px]">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h1>
              <h2 className="text-xl font-semibold text-yellow-600 mb-4">{t.specialistsIn}</h2>
              <p className="text-gray-700 mb-4">{t.description1}</p>
              <p className="text-gray-700 mb-4">{t.description2}</p>
              <p className="text-gray-700 mb-6">{t.description3}</p>
            </div>
          </div>
        </section>
         <section className="bg-yellow-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform">
                <div className="flex justify-center mb-4">
                  <div className="bg-yellow-400 p-4 rounded-full">
                    <Trophy className="w-8 h-8 text-gray-900" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900">{t.stat1}</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform">
                <div className="flex justify-center mb-4">
                  <div className="bg-yellow-400 p-4 rounded-full">
                    <ThumbsUp className="w-8 h-8 text-gray-900" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900">{t.stat2}</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform">
                <div className="flex justify-center mb-4">
                  <div className="bg-yellow-400 p-4 rounded-full">
                    <RefreshCcw className="w-8 h-8 text-gray-900" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900">{t.stat3}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    <footer className="bg-yellow-400 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
            <div className="flex-1 text-center md:text-left">
              <p className="text-sm font-medium text-gray-900">{t.designedBy}</p>
            </div>
            <div className="flex-1 text-center">
              <p className="text-lg font-bold text-gray-900">{t.brandName}</p>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
              <a
                href="https://www.instagram.com/marialainezhairstylist/"
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
      <WhatsAppButton />
    </div>
  );
}
