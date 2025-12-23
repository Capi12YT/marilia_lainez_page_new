import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Globe, Trophy, ThumbsUp, RefreshCcw, Instagram } from 'lucide-react';
import { ServicesDropdown } from '../../components/ServicesDropdown';
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
    title: 'Rizos Permanentes',
    beforeAfter: 'Antes/Después',
    after: 'Después',
    before: 'Antes',
    specialistsIn: 'Somos especialistas en rizos permanentes',
    description1: 'Los rizos permanentes, también conocidos como permanentes o perms, son una excelente opción para añadir volumen, textura y movimiento duradero a tu cabello. En María Lainez Hair Stylist utilizamos las técnicas más modernas y productos de calidad profesional.',
    description2: 'Las permanentes actuales han evolucionado significativamente, ofreciendo resultados mucho más naturales y saludables que las técnicas tradicionales. Podemos crear desde rizos definidos hasta ondas suaves, adaptando el resultado a tus preferencias.',
    description3: 'Nuestros tratamientos de permanente incluyen cuidados especiales que protegen la salud de tu cabello. Te proporcionamos un protocolo completo de mantenimiento para que tus rizos se mantengan hermosos y saludables por meses.',
    stat1: 'Nº1 en Rizos Permanentes',
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
    title: 'Permanent Curls',
    beforeAfter: 'Before/After',
    after: 'After',
    before: 'Before',
    specialistsIn: 'We are specialists in permanent curls',
    description1: 'Permanent curls, also known as perms, are an excellent option to add volume, texture and lasting movement to your hair. At María Lainez Hair Stylist we use the most modern techniques and professional quality products.',
    description2: "Today\'s perms have evolved significantly, offering much more natural and healthier results than traditional techniques. We can create from defined curls to soft waves, adapting the result to your preferences.",
    description3: 'Our perm treatments include special care that protects your hair health. We provide you with a complete maintenance protocol so your curls stay beautiful and healthy for months.',
    stat1: 'Nº1 in Permanent Curls',
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
    title: 'Boucles Permanentes',
    beforeAfter: 'Avant/Après',
    after: 'Après',
    before: 'Avant',
    specialistsIn: 'Nous sommes spécialistes en boucles permanentes',
    description1: 'Les boucles permanentes, également connues sous le nom de permanentes ou perms, sont une excellente option pour ajouter du volume, de la texture et du mouvement durable à vos cheveux. Chez María Lainez Hair Stylist, nous utilisons les techniques les plus modernes et des produits de qualité professionnelle.',
    description2: 'Les permanentes actuelles ont considérablement évolué, offrant des résultats beaucoup plus naturels et sains que les techniques traditionnelles. Nous pouvons créer des boucles définies aux ondulations douces, en adaptant le résultat à vos préférences.',
    description3: "Nos traitements de permanente incluent des soins spéciaux qui protègent la santé de vos cheveux. Nous vous fournissons un protocole complet d\'entretien pour que vos boucles restent belles et saines pendant des mois.",
    stat1: 'Nº1 en Boucles Permanentes',
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
    title: 'Dauerwellen',
    beforeAfter: 'Vorher/Nachher',
    after: 'Nachher',
    before: 'Vorher',
    specialistsIn: 'Wir sind Spezialisten für Dauerwellen',
    description1: 'Dauerwellen, auch bekannt als Perms, sind eine ausgezeichnete Option, um Ihrem Haar Volumen, Textur und dauerhafte Bewegung zu verleihen. Bei María Lainez Hair Stylist verwenden wir die modernsten Techniken und Produkte professioneller Qualität.',
    description2: 'Die heutigen Dauerwellen haben sich erheblich weiterentwickelt und bieten viel natürlichere und gesündere Ergebnisse als traditionelle Techniken. Wir können von definierten Locken bis zu sanften Wellen kreieren und das Ergebnis an Ihre Vorlieben anpassen.',
    description3: 'Unsere Dauerwellen-Behandlungen beinhalten spezielle Pflege, die die Gesundheit Ihres Haares schützt. Wir stellen Ihnen ein vollständiges Pflegeprotokoll zur Verfügung, damit Ihre Locken monatelang schön und gesund bleiben.',
    stat1: 'Nº1 in Dauerwellen',
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
    title: 'Ricci Permanenti',
    beforeAfter: 'Prima/Dopo',
    after: 'Dopo',
    before: 'Prima',
    specialistsIn: 'Siamo specialisti in ricci permanenti',
    description1: "I ricci permanenti, noti anche come permanenti o perms, sono un\'opzione eccellente per aggiungere volume, texture e movimento duraturo ai vostri capelli. Da María Lainez Hair Stylist utilizziamo le tecniche più moderne e prodotti di qualità professionale.",
    description2: 'Le permanenti attuali si sono evolute significativamente, offrendo risultati molto più naturali e sani rispetto alle tecniche tradizionali. Possiamo creare dai ricci definiti alle onde morbide, adattando il risultato alle vostre preferenze.',
    description3: 'I nostri trattamenti di permanente includono cure speciali che proteggono la salute dei vostri capelli. Vi forniamo un protocollo completo di manutenzione affinché i vostri ricci rimangano belli e sani per mesi.',
    stat1: 'Nº1 in Ricci Permanenti',
    stat2: '100% Clienti Soddisfatti',
    stat3: '10/10 Tornano',
    designedBy: 'Progettato da CapJe © 2026',
    brandName: 'María Lainez Parrucchiere',
  },
};

export default function ServicePage() {
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
