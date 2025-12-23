import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Globe, Trophy, ThumbsUp, RefreshCcw, Instagram } from 'lucide-react';
import { ServicesDropdown } from '../components/ServicesDropdown';
import { WhatsAppButton } from '@/components/whatsapp-button';

type Language = 'es' | 'en' | 'fr' | 'de' | 'it';

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
    aboutUs: 'Nosotros',
    brands: 'Marcas',
    whereWeAre: 'Donde estamos',
    bookNow: 'Reservar',
    title: 'Alisados Profesionales',
    beforeAfter: 'Antes/Después',
    after: 'Después',
    before: 'Antes',
    specialistsIn: 'Somos especialistas en alisados',
    description1: 'En María Lainez Hair Stylist ofrecemos los mejores tratamientos de alisado profesional con las técnicas más avanzadas del mercado. Nuestro equipo de expertos ha sido entrenado en las últimas tendencias y utiliza productos de primera calidad para garantizar resultados duraderos.',
    description2: 'El alisado brasileño, keratina y otros tratamientos de alisado que ofrecemos no solo suavizan tu cabello, sino que también lo nutren profundamente, eliminando el frizz y proporcionando un brillo espectacular. Cada tratamiento está personalizado según tu tipo de cabello y necesidades específicas.',
    description3: 'Nuestros alisados tienen una duración de 3 a 6 meses dependiendo del tipo de tratamiento elegido y los cuidados posteriores. Te asesoramos sobre el mejor tratamiento para ti y te proporcionamos las recomendaciones necesarias para mantener tu cabello perfecto por más tiempo.',
    stat1: 'Nº1 en Alisados',
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
    menCut: 'Men\'s Cut',
    aboutUs: 'About Us',
    brands: 'Brands',
    whereWeAre: 'Where we are',
    bookNow: 'Book Now',
    title: 'Professional Smoothing',
    beforeAfter: 'Before/After',
    after: 'After',
    before: 'Before',
    specialistsIn: 'We are specialists in smoothing',
    description1: 'At María Lainez Hair Stylist we offer the best professional smoothing treatments with the most advanced techniques on the market. Our team of experts has been trained in the latest trends and uses top quality products to guarantee long-lasting results.',
    description2: 'Brazilian smoothing, keratin and other smoothing treatments we offer not only smooth your hair, but also deeply nourish it, eliminating frizz and providing spectacular shine. Each treatment is personalized according to your hair type and specific needs.',
    description3: 'Our smoothing treatments last 3 to 6 months depending on the type of treatment chosen and aftercare. We advise you on the best treatment for you and provide the necessary recommendations to keep your hair perfect for longer.',
    stat1: 'Nº1 in Smoothing',
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
    aboutUs: 'À propos',
    brands: 'Marques',
    whereWeAre: 'Où nous sommes',
    bookNow: 'Réserver',
    title: 'Lissages Professionnels',
    beforeAfter: 'Avant/Après',
    after: 'Après',
    before: 'Avant',
    specialistsIn: 'Nous sommes spécialistes en lissages',
    description1: 'Chez María Lainez Hair Stylist, nous offrons les meilleurs traitements de lissage professionnel avec les techniques les plus avancées du marché. Notre équipe d\'experts a été formée aux dernières tendances et utilise des produits de première qualité pour garantir des résultats durables.',
    description2: 'Le lissage brésilien, la kératine et autres traitements de lissage que nous proposons non seulement lissent vos cheveux, mais les nourrissent également en profondeur, éliminant les frisottis et apportant une brillance spectaculaire. Chaque traitement est personnalisé selon votre type de cheveux et vos besoins spécifiques.',
    description3: 'Nos lissages durent de 3 à 6 mois selon le type de traitement choisi et les soins ultérieurs. Nous vous conseillons sur le meilleur traitement pour vous et vous fournissons les recommandations nécessaires pour garder vos cheveux parfaits plus longtemps.',
    stat1: 'Nº1 en Lissages',
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
    aboutUs: 'Über uns',
    brands: 'Marken',
    whereWeAre: 'Wo wir sind',
    bookNow: 'Buchen',
    title: 'Professionelle Glättungen',
    beforeAfter: 'Vorher/Nachher',
    after: 'Nachher',
    before: 'Vorher',
    specialistsIn: 'Wir sind Spezialisten für Glättungen',
    description1: 'Bei María Lainez Hair Stylist bieten wir die besten professionellen Glättungsbehandlungen mit den fortschrittlichsten Techniken auf dem Markt. Unser Expertenteam wurde in den neuesten Trends geschult und verwendet hochwertige Produkte, um lang anhaltende Ergebnisse zu garantieren.',
    description2: 'Die brasilianische Glättung, Keratin und andere Glättungsbehandlungen, die wir anbieten, glätten nicht nur Ihr Haar, sondern nähren es auch tiefgehend, beseitigen Frizz und verleihen einen spektakulären Glanz. Jede Behandlung wird nach Ihrem Haartyp und Ihren spezifischen Bedürfnissen personalisiert.',
    description3: 'Unsere Glättungen halten 3 bis 6 Monate, abhängig von der gewählten Behandlung und der Nachpflege. Wir beraten Sie über die beste Behandlung für Sie und geben Ihnen die notwendigen Empfehlungen, um Ihr Haar länger perfekt zu halten.',
    stat1: 'Nº1 in Glättungen',
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
    aboutUs: 'Chi siamo',
    brands: 'Marchi',
    whereWeAre: 'Dove siamo',
    bookNow: 'Prenota',
    title: 'Lisciature Professionali',
    beforeAfter: 'Prima/Dopo',
    after: 'Dopo',
    before: 'Prima',
    specialistsIn: 'Siamo specialisti in lisciature',
    description1: 'Da María Lainez Hair Stylist offriamo i migliori trattamenti di lisciatura professionale con le tecniche più avanzate del mercato. Il nostro team di esperti è stato formato nelle ultime tendenze e utilizza prodotti di prima qualità per garantire risultati duraturi.',
    description2: 'La lisciatura brasiliana, la cheratina e altri trattamenti di lisciatura che offriamo non solo lisciano i vostri capelli, ma li nutrono anche profondamente, eliminando il crespo e fornendo una luminosità spettacolare. Ogni trattamento è personalizzato secondo il vostro tipo di capelli e le esigenze specifiche.',
    description3: 'Le nostre lisciature durano da 3 a 6 mesi a seconda del tipo di trattamento scelto e delle cure successive. Vi consigliamo sul miglior trattamento per voi e vi forniamo le raccomandazioni necessarie per mantenere i vostri capelli perfetti più a lungo.',
    stat1: 'Nº1 in Lisciature',
    stat2: '100% Clienti Soddisfatti',
    stat3: '10/10 Tornano',
    designedBy: 'Progettato da CapJe © 2026',
    brandName: 'María Lainez Parrucchiere',
  },
};

export default function AlisadosPage() {
  const [language, setLanguage] = useState<Language>('es');
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAfter, setShowAfter] = useState(true);
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
            className="flex items-center gap-3 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-full"
            aria-label="Volver al inicio"
          >
            <img
              src="/logo-maria-lainez.jpg"
              alt="Logo María Lainez"
              className="h-12 w-12 rounded-full object-cover"
            />
            <span className="text-xl font-bold text-gray-900 hidden md:block">
              María Lainez Hair Stylist
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-900 hover:border-b-2 hover:border-black transition-all pb-1 border-b-2 border-transparent"
            >
              {t.home}
            </Link>
            <Link
              to="/alisados"
              className="text-gray-900 hover:border-b-2 hover:border-black transition-all pb-1 border-b-2 border-transparent"
            >
              {t.smoothing}
            </Link>
            <ServicesDropdown translations={t} />
            <button
              onClick={() => scrollToSection('historia')}
              className="text-gray-900 hover:border-b-2 hover:border-black transition-all pb-1 border-b-2 border-transparent"
            >
              {t.aboutUs}
            </button>
            <button
              onClick={() => scrollToSection('brands')}
              className="text-gray-900 hover:border-b-2 hover:border-black transition-all pb-1 border-b-2 border-transparent"
            >
              {t.brands}
            </button>
            <button
              onClick={() => scrollToSection('ubicacion')}
              className="text-gray-900 hover:border-b-2 hover:border-black transition-all pb-1 border-b-2 border-transparent"
            >
              {t.whereWeAre}
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => navigate('/reservas-app')}
              className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              {t.bookNow}
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage('es')}
                className={`px-2 py-1 rounded transition-colors ${
                  language === 'es' ? 'bg-yellow-300 font-semibold' : 'hover:bg-yellow-300'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded transition-colors ${
                  language === 'en' ? 'bg-yellow-300 font-semibold' : 'hover:bg-yellow-300'
                }`}
              >
                EN
              </button>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="p-2 hover:bg-yellow-300 rounded transition-colors"
                  aria-label="More languages"
                >
                  <Globe className="w-5 h-5" />
                </button>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl py-2 z-50">
                    <button
                      onClick={() => {
                        setLanguage('fr');
                        setShowDropdown(false);
                      }}
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-50 ${
                        language === 'fr' ? 'bg-yellow-100' : ''
                      }`}
                    >
                      FR
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('de');
                        setShowDropdown(false);
                      }}
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-50 ${
                        language === 'de' ? 'bg-yellow-100' : ''
                      }`}
                    >
                      DE
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('it');
                        setShowDropdown(false);
                      }}
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-50 ${
                        language === 'it' ? 'bg-yellow-100' : ''
                      }`}
                    >
                      IT
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-yellow-300 rounded transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-80 bg-yellow-400 z-50 md:hidden transform transition-transform duration-300 overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <img
                  src="/logo-maria-lainez.jpg"
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
                    navigate('/reservas-app');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-center"
                >
                  {t.bookNow}
                </button>

                <div className="pt-6 border-t border-yellow-500">
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setLanguage('es')}
                      className={`px-3 py-2 rounded transition-colors ${
                        language === 'es' ? 'bg-yellow-300 font-semibold' : 'hover:bg-yellow-300'
                      }`}
                    >
                      ES
                    </button>
                    <button
                      onClick={() => setLanguage('en')}
                      className={`px-3 py-2 rounded transition-colors ${
                        language === 'en' ? 'bg-yellow-300 font-semibold' : 'hover:bg-yellow-300'
                      }`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => setLanguage('fr')}
                      className={`px-3 py-2 rounded transition-colors ${
                        language === 'fr' ? 'bg-yellow-300 font-semibold' : 'hover:bg-yellow-300'
                      }`}
                    >
                      FR
                    </button>
                    <button
                      onClick={() => setLanguage('de')}
                      className={`px-3 py-2 rounded transition-colors ${
                        language === 'de' ? 'bg-yellow-300 font-semibold' : 'hover:bg-yellow-300'
                      }`}
                    >
                      DE
                    </button>
                    <button
                      onClick={() => setLanguage('it')}
                      className={`px-3 py-2 rounded transition-colors ${
                        language === 'it' ? 'bg-yellow-300 font-semibold' : 'hover:bg-yellow-300'
                      }`}
                    >
                      IT
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}

      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="relative aspect-[3/4] bg-gray-200 rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500 text-2xl font-medium">
                    {showAfter ? t.after : t.before}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowAfter(!showAfter)}
                className="w-full px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                {t.beforeAfter}
              </button>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{t.title}</h1>
              <h2 className="text-2xl font-semibold text-yellow-600">{t.specialistsIn}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{t.description1}</p>
              <p className="text-lg text-gray-700 leading-relaxed">{t.description2}</p>
              <p className="text-lg text-gray-700 leading-relaxed">{t.description3}</p>
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
