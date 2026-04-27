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
    aboutUs: 'Nosotros',
    brands: 'Marcas',
    whereWeAre: 'Donde estamos',
    bookNow: 'Reservar',
    title: 'Corte de Caballero',
    beforeAfter: 'Después/Antes',
    after: 'Después',
    before: 'Antes',
    specialistsIn: 'Somos especialistas en cortes de caballero',
    description1: 'El corte de caballero requiere técnica, precisión y conocimiento de las tendencias masculinas actuales. En María Lainez Hair Stylist ofrecemos servicios especializados de barbería y estilismo masculino con atención al detalle.',
    description2: 'Desde cortes clásicos hasta estilos modernos, fade, undercut, degradados y todo tipo de estilos masculinos, nuestro equipo domina las técnicas que mejor se adaptan a cada tipo de cabello y preferencia personal.',
    description3: 'Incluimos perfilado de barba, arreglo de cejas y tratamientos capilares específicos para hombres. Creamos looks profesionales que son fáciles de mantener en casa y que realzan la masculinidad y el estilo personal de cada cliente.',
    stat1: 'Nº1 en Cortes de Caballero',
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
    title: "Men's Haircut",
    beforeAfter: 'After/Before',
    after: 'After',
    before: 'Before',
    specialistsIn: "We are specialists in men's haircuts",
    description1: "Men's haircuts require technique, precision and knowledge of current masculine trends. At María Lainez Hair Stylist we offer specialized barbershop and men's styling services with attention to detail.",
    description2: 'From classic cuts to modern styles, fade, undercut, graduated and all types of masculine styles, our team masters the techniques that best adapt to each hair type and personal preference.',
    description3: 'We include beard shaping, eyebrow grooming and specific hair treatments for men. We create professional looks that are easy to maintain at home and that enhance masculinity and personal style of each client.',
    stat1: "Nº1 in Men's Haircuts",
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
    title: 'Coupe Homme',
    beforeAfter: 'Après/Avant',
    after: 'Après',
    before: 'Avant',
    specialistsIn: 'Nous sommes spécialistes en coupes homme',
    description1: 'La coupe homme nécessite technique, précision et connaissance des tendances masculines actuelles. Chez María Lainez Hair Stylist, nous offrons des services spécialisés de barbier et de stylisme masculin avec attention aux détails.',
    description2: "Des coupes classiques aux styles modernes, fade, undercut, dégradés et tous types de styles masculins, notre équipe maîtrise les techniques qui s'adaptent le mieux à chaque type de cheveux et préférence personnelle.",
    description3: "Nous incluons le profilage de la barbe, l'arret des sourcils et des traitements capillaires spécifiques pour hommes. Nous créons des looks professionnels faciles à entretenir à la maison et qui rehaussent la masculinité et le style personnel de chaque client.",
    stat1: 'Nº1 en Coupes Homme',
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
    whereWeAre: "Wo wir sind",
    bookNow: 'Buchen',
    title: 'Herrenschnitt',
    beforeAfter: 'Nachher/Vorher',
    after: 'Nachher',
    before: 'Vorher',
    specialistsIn: 'Wir sind Spezialisten für Herrenschnitten',
    description1: 'Herrenschnitte erfordern Technik, Präzision und Kenntnis aktueller männlicher Trends. Bei María Lainez Hair Stylist bieten wir spezialisierte Barbershop- und Herren-Styling-Dienstleistungen mit Liebe zum Detail.',
    description2: 'Von klassischen Schnitten bis zu modernen Stilen, Fade, Undercut, Verläufen und allen Arten von maskulinen Stilen beherrscht unser Team die Techniken, die sich am besten an jeden Haartyp und jede persönliche Vorliebe anpassen.',
    description3: 'Wir bieten Bartkonturierung, Augenbrauenpflege und spezielle Haarbehandlungen für Männer an. Wir kreieren professionelle Looks, die zu Hause leicht zu pflegen sind und die Männlichkeit und den persönlichen Stil jedes Kunden hervorheben.',
    stat1: 'Nº1 in Herrenschnitte',
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
    title: 'Taglio Uomo',
    beforeAfter: 'Dopo/Prima',
    after: 'Dopo',
    before: 'Prima',
    specialistsIn: 'Siamo specialisti in tagli uomo',
    description1: 'I tagli uomo richiedono tecnica, precisione e conoscenza delle tendenze maschili attuali. Da María Lainez Hair Stylist offriamo servizi specializzati di barbiere e styling maschile con attenzione ai dettagli.',
    description2: 'Dai tagli classici agli stili moderni, fade, undercut, sfumature e tutti i tipi di stili maschili, il nostro team padroneggia le tecniche che meglio si adattano a ogni tipo di capelli e preferenza personale.',
    description3: 'Includiamo sagomatura della barba, sistemazione delle sopracciglia e trattamenti capillari specifici per uomini. Creiamo look professionali facili da mantenere a casa e che esaltano la mascolinità e lo stile personale di ogni cliente.',
    stat1: 'Nº1 in Tagli Uomo',
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
                  <div className="relative bg-gray-200 rounded-xl overflow-hidden shadow-xl h-[50vh] xl:h-[70vh]">
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

