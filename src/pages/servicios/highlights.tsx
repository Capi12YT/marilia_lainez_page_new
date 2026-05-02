import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Globe, Trophy, ThumbsUp, RefreshCcw, Instagram } from 'lucide-react';
import { ServicesDropdown } from '../../components/ServicesDropdown';
import { WhatsAppButton } from '@/components/whatsapp-button';

type Language = 'es' | 'en' | 'fr' | 'de' | 'it';

const languages: Language[] = ['es', 'en', 'fr', 'de', 'it'];

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
    title: 'Highlights & Style',
    beforeAfter: 'Después/Antes',
    after: 'Después',
    before: 'Antes',
    specialistsIn: 'Somos especialistas en highlights',
    description1: 'Los highlights son una técnica de coloración que consiste en aclarar mechones selectos del cabello para crear dimensión, luminosidad y un efecto natural. En María Lainez Hair Stylist dominamos las técnicas más avanzadas de highlights para realzar tu belleza natural.',
    description2: 'Nuestro equipo de coloristas profesionales estudia cuidadosamente tu tono de piel, color de ojos y estilo personal para crear highlights perfectamente personalizados. Utilizamos productos de máxima calidad que protegen y nutren tu cabello durante el proceso de aclarado.',
    description3: 'Ya sea que busques un cambio sutil con highlights finos o un look más dramático con mechones más gruesos, te asesoraremos para lograr el resultado perfecto. Nuestros highlights tienen una durabilidad excepcional y requieren mínimo mantenimiento.',
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
    aboutUs: 'About Us',
    brands: 'Brands',
    whereWeAre: 'Where we are',
    bookNow: 'Book Now',
    title: 'Highlights & Style',
    beforeAfter: 'After/Before',
    after: 'After',
    before: 'Before',
    specialistsIn: 'We are specialists in highlights',
    description1: 'Highlights are a coloring technique that consists of lightening selected strands of hair to create dimension, luminosity and a natural effect. At María Lainez Hair Stylist we master the most advanced highlighting techniques to enhance your natural beauty.',
    description2: 'Our team of professional colorists carefully studies your skin tone, eye color and personal style to create perfectly personalized highlights. We use the highest quality products that protect and nourish your hair during the lightening process.',
    description3: 'Whether you\'re looking for a subtle change with fine highlights or a more dramatic look with thicker streaks, we\'ll advise you to achieve the perfect result. Our highlights have exceptional durability and require minimal maintenance.',
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
    aboutUs: 'À propos',
    brands: 'Marques',
    whereWeAre: 'Où nous sommes',
    bookNow: 'Réserver',
    title: 'Highlights & Style',
    beforeAfter: 'Après/Avant',
    after: 'Après',
    before: 'Avant',
    specialistsIn: 'Nous sommes spécialistes en highlights',
    description1: 'Les highlights sont une technique de coloration qui consiste à éclaircir des mèches sélectionnées pour créer de la dimension, de la luminosité et un effet naturel. Chez María Lainez Hair Stylist, nous maîtrisons les techniques de highlights les plus avancées pour sublimer votre beauté naturelle.',
    description2: "Notre équipe de coloristes professionnels étudie soigneusement votre teint, la couleur de vos yeux et votre style personnel pour créer des highlights parfaitement personnalisés. Nous utilisons des produits de qualité maximale qui protègent et nourrissent vos cheveux pendant le processus d\'éclaircissement.",
    description3: "Que vous recherchiez un changement subtil avec des highlights fins ou un look plus dramatique avec des mèches plus épaisses, nous vous conseillerons pour obtenir le résultat parfait. Nos highlights ont une durabilité exceptionnelle et nécessitent un minimum d\'entretien.",
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
    aboutUs: 'Über uns',
    brands: 'Marken',
    whereWeAre: 'Wo wir sind',
    bookNow: 'Buchen',
    title: 'Highlights & Style',
    beforeAfter: 'Nachher/Vorher',
    after: 'Nachher',
    before: 'Vorher',
    specialistsIn: 'Wir sind Spezialisten für Highlights',
    description1: 'Highlights sind eine Färbetechnik, bei der ausgewählte Haarsträhnen aufgehellt werden, um Dimension, Leuchtkraft und einen natürlichen Effekt zu erzeugen. Bei María Lainez Hair Stylist beherrschen wir die fortschrittlichsten Highlight-Techniken, um Ihre natürliche Schönheit zu betonen.',
    description2: 'Unser Team professioneller Coloristen studiert sorgfältig Ihren Hautton, Ihre Augenfarbe und Ihren persönlichen Stil, um perfekt personalisierte Highlights zu kreieren. Wir verwenden Produkte höchster Qualität, die Ihr Haar während des Aufhellungsprozesses schützen und pflegen.',
    description3: 'Ob Sie eine subtile Veränderung mit feinen Highlights oder einen dramatischeren Look mit dickeren Strähnen suchen, wir beraten Sie, um das perfekte Ergebnis zu erzielen. Unsere Highlights haben eine außergewöhnliche Haltbarkeit und erfordern minimale Pflege.',
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
    aboutUs: 'Chi siamo',
    brands: 'Marchi',
    whereWeAre: 'Dove siamo',
    bookNow: 'Prenota',
    title: 'Highlights & Style',
    beforeAfter: 'Dopo/Prima',
    after: 'Dopo',
    before: 'Prima',
    specialistsIn: 'Siamo specialisti in highlights',
    description1: 'Gli highlights sono una tecnica di colorazione che consiste nello schiarire ciocche selezionate di capelli per creare dimensione, luminosità e un effetto naturale. Da María Lainez Hair Stylist padroneggiamo le tecniche di highlights più avanzate per esaltare la vostra bellezza naturale.',
    description2: 'Il nostro team di coloristi professionisti studia attentamente il vostro tono di pelle, il colore degli occhi e lo stile personale per creare highlights perfettamente personalizzati. Utilizziamo prodotti di massima qualità che proteggono e nutrono i vostri capelli durante il processo di schiarimento.',
    description3: 'Che cerchiate un cambiamento sottile con highlights sottili o un look più drammatico con ciocche più spesse, vi consiglieremo per ottenere il risultato perfetto. I nostri highlights hanno una durata eccezionale e richiedono una manutenzione minima.',
    stat1: 'Nº1 in Highlights',
    stat2: '100% Clienti Soddisfatti',
    stat3: '10/10 Tornano',
    designedBy: 'Progettato da CapJe © 2026',
    brandName: 'María Lainez Parrucchiere',
  },
};

export default function HighlightsPage() {
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
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
                  <div className="relative bg-gray-200 rounded-xl overflow-hidden shadow-xl h-[40vh] xl:h-[80vh]">
                    <img 
                      src={showAfter ? "/despues-highlights.jpeg" : "/antes-highlights.jpeg"} 
                      alt={showAfter ? t.after : t.before} 
                      className="w-full h-full object-cover"
                    />
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

