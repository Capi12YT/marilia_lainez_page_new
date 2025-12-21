import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, ChevronLeft, ChevronRight, Star } from 'lucide-react';

type Language = 'ES' | 'EN' | 'FR';

const translations = {
  ES: {
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      services: 'Servicios',
      contact: 'Contacto',
      reserve: 'Reservar',
    },
    hero: {
      title: 'CapJe Restaurante',
      subtitle: 'Experiencia culinaria única',
      cta: 'Reservar Ahora',
    },
    history: {
      title: 'Nuestra Historia',
      text: 'CapJe nació con la visión de ofrecer las mejores marcas y productos de calidad a nuestros clientes. Desde nuestros humildes comienzos, hemos crecido para convertirnos en un referente en el sector, manteniendo siempre nuestro compromiso con la excelencia y el servicio al cliente. Cada día trabajamos para superar las expectativas y crear experiencias memorables.',
    },
    reviews: {
      title: 'Lo Que Dicen Nuestros Clientes',
    },
    brands: {
      title: 'Nuestras Marcas',
    },
    location: {
      title: 'Nuestra Ubicación',
      phone: 'Teléfono',
      hours: 'Horario',
      weekdays: 'Lunes a Viernes: 9:00-18:00',
      saturday: 'Sábado: 10:00-14:00',
    },
    footer: {
      designed: 'Diseñado por CapJe © 2026',
      legal: 'Aviso Legal',
      privacy: 'Política de Privacidad',
    },
  },
  EN: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      contact: 'Contact',
      reserve: 'Book Now',
    },
    hero: {
      title: 'CapJe Restaurant',
      subtitle: 'Unique culinary experience',
      cta: 'Book Now',
    },
    history: {
      title: 'Our Story',
      text: 'CapJe was born with the vision of offering the best brands and quality products to our customers. From our humble beginnings, we have grown to become a benchmark in the sector, always maintaining our commitment to excellence and customer service. Every day we work to exceed expectations and create memorable experiences.',
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
      hours: 'Hours',
      weekdays: 'Monday to Friday: 9:00-18:00',
      saturday: 'Saturday: 10:00-14:00',
    },
    footer: {
      designed: 'Designed by CapJe © 2026',
      legal: 'Legal Notice',
      privacy: 'Privacy Policy',
    },
  },
  FR: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      contact: 'Contact',
      reserve: 'Réserver',
    },
    hero: {
      title: 'CapJe Restaurant',
      subtitle: 'Expérience culinaire unique',
      cta: 'Réserver Maintenant',
    },
    history: {
      title: 'Notre Histoire',
      text: "CapJe est né avec la vision d'offrir les meilleures marques et produits de qualité à nos clients. Depuis nos modestes débuts, nous sommes devenus une référence dans le secteur, en maintenant toujours notre engagement envers l'excellence et le service client. Chaque jour, nous travaillons pour dépasser les attentes et créer des expériences mémorables.",
    },
    reviews: {
      title: 'Ce Que Disent Nos Clients',
    },
    brands: {
      title: 'Nos Marques',
    },
    location: {
      title: 'Notre Emplacement',
      phone: 'Téléphone',
      hours: 'Horaires',
      weekdays: 'Lundi au Vendredi: 9:00-18:00',
      saturday: 'Samedi: 10:00-14:00',
    },
    footer: {
      designed: 'Conçu par CapJe © 2026',
      legal: 'Mentions Légales',
      privacy: 'Politique de Confidentialité',
    },
  },
};

const testimonials = [
  {
    name: 'María González',
    text: 'Una experiencia gastronómica excepcional. La atención al detalle y la calidad de los ingredientes son insuperables. ¡Definitivamente volveremos!',
    rating: 5,
    avatar: 'MG',
  },
  {
    name: 'Carlos Martínez',
    text: 'El mejor restaurante de la zona sin duda. El ambiente es acogedor y la comida simplemente deliciosa. Muy recomendado.',
    rating: 5,
    avatar: 'CM',
  },
  {
    name: 'Ana López',
    text: 'Quedé encantada con el servicio y la presentación de cada plato. Una joya culinaria que hay que descubrir.',
    rating: 5,
    avatar: 'AL',
  },
  {
    name: 'David Fernández',
    text: 'Excelente relación calidad-precio. El personal es muy atento y profesional. Una experiencia memorable.',
    rating: 5,
    avatar: 'DF',
  },
];

export default function Home() {
  const [language, setLanguage] = useState<Language>('ES');
  const [currentReview, setCurrentReview] = useState(0);
  const t = translations[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % testimonials.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-yellow-400 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="text-2xl font-bold text-gray-900">CapJe</div>
              
              <nav className="hidden md:flex items-center gap-6">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-900 hover:text-gray-700 font-medium transition-colors"
                >
                  {t.nav.home}
                </button>
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
                  onClick={() => scrollToSection('ubicacion')}
                  className="text-gray-900 hover:text-gray-700 font-medium transition-colors"
                >
                  {t.nav.contact}
                </button>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <Button
                className="bg-gray-900 text-white hover:bg-gray-800 font-semibold px-6"
                onClick={() => scrollToSection('ubicacion')}
              >
                {t.nav.reserve}
              </Button>
              
              <div className="flex items-center gap-1 bg-white rounded-md p-1">
                {(['ES', 'EN', 'FR'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      language === lang
                        ? 'bg-yellow-400 text-gray-900'
                        : 'text-gray-600 hover:text-gray-900'
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
        <section className="flex flex-col md:flex-row min-h-[600px]">
          <div className="md:hidden w-full h-[300px] bg-cover bg-center" style={{ backgroundImage: 'url(/hero-establecimiento.png)' }}></div>
          
          <div className="w-full md:w-[65%] bg-black flex items-center justify-center px-8 py-20 md:py-0">
            <div className="text-center text-white max-w-2xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                {t.hero.title}
              </h1>
              <p className="text-2xl md:text-3xl mb-10 text-gray-300">
                {t.hero.subtitle}
              </p>
              <Button
                size="lg"
                className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 font-bold text-lg px-12 py-6"
                onClick={() => scrollToSection('ubicacion')}
              >
                {t.hero.cta}
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block md:w-[35%] bg-cover bg-center" style={{ backgroundImage: 'url(/hero-establecimiento.png)' }}></div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              {t.reviews.title}
            </h2>
            
            <div className="relative bg-white rounded-lg shadow-xl p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-2xl mb-6">
                  {testimonials[currentReview].avatar}
                </div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentReview].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-lg text-gray-700 mb-6 italic max-w-2xl">
                  "{testimonials[currentReview].text}"
                </p>
                
                <p className="text-xl font-semibold text-gray-900">
                  {testimonials[currentReview].name}
                </p>
              </div>
              
              <button
                onClick={prevReview}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 p-2 rounded-full shadow-lg transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextReview}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 p-2 rounded-full shadow-lg transition-colors"
                aria-label="Next review"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentReview ? 'bg-yellow-400' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="historia" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              {t.history.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="/historia-imagen.png"
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
          </div>
        </section>

        <section id="marcas" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              {t.brands.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { src: '/marca-cafe.png', alt: 'Marca Café' },
                { src: '/marca-te.png', alt: 'Marca Té' },
                { src: '/marca-panaderia.png', alt: 'Marca Panadería' },
                { src: '/marca-restaurante.png', alt: 'Marca Restaurante' },
              ].map((brand, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                  style={{ minHeight: '200px' }}
                >
                  <img
                    src={brand.src}
                    alt={brand.alt}
                    className="max-w-full max-h-40 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ubicacion" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              {t.location.title}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t.location.phone}
                  </h3>
                  <a
                    href="tel:+34912345678"
                    className="text-lg text-gray-700 hover:text-yellow-600 transition-colors"
                  >
                    +34 912 345 678
                  </a>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t.location.hours}
                  </h3>
                  <p className="text-lg text-gray-700">{t.location.weekdays}</p>
                  <p className="text-lg text-gray-700">{t.location.saturday}</p>
                </div>
              </div>

              <div className="h-80 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48377.675315092675!2d-3.7466947871582027!3d40.416775571365895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Spain!5e0!3m2!1sen!2ses!4v1234567890123!5m2!1sen!2ses"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de CapJe en Madrid"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-yellow-400 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-900 font-medium">
              {t.footer.designed}
            </p>
            
            <div className="flex items-center gap-6">
              <a
                href="/legal"
                className="text-gray-900 hover:text-gray-700 font-medium transition-colors"
              >
                {t.footer.legal}
              </a>
              <span className="text-gray-900">|</span>
              <a
                href="/privacy"
                className="text-gray-900 hover:text-gray-700 font-medium transition-colors"
              >
                {t.footer.privacy}
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
