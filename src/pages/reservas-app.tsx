import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Menu, X, Globe, Smartphone, Download, Calendar, Bell, Clock, Star, CheckCircle2, Gift } from 'lucide-react';

type Language = 'ES' | 'EN' | 'FR' | 'DE' | 'IT';

const translations = {
  ES: {
    nav: {
      backToHome: 'Volver al inicio',
      reserve: 'Reservar',
    },
    hero: {
      title: 'Reserva tu Cita',
      subtitle: 'Descarga nuestra app móvil y accede a un mundo de comodidad. Reserva tus citas en segundos, recibe ofertas exclusivas y gestiona tu historial desde tu smartphone.',
      downloadButton: 'Descargar App',
    },
    buttons: {
      googlePlay: 'Descargar en Google Play',
      appStore: 'Descargar en App Store',
    },
    howItWorks: {
      title: 'Cómo Funciona',
      step1Title: 'Descarga la App',
      step1Text: 'Disponible gratis en Google Play y App Store',
      step2Title: 'Regístrate',
      step2Text: 'Crea tu cuenta en menos de un minuto',
      step3Title: 'Elige tu Servicio',
      step3Text: 'Selecciona el tratamiento que deseas',
      step4Title: 'Reserva tu Cita',
      step4Text: '¡Listo! Confirma tu reserva al instante',
    },
    features: {
      title: 'Características de la App',
      feature1Title: 'Reservas Rápidas',
      feature1Text: 'Agenda tu cita en menos de 30 segundos',
      feature2Title: 'Ofertas Exclusivas',
      feature2Text: 'Accede a promociones solo para usuarios de la app',
      feature3Title: 'Notificaciones',
      feature3Text: 'Recordatorios automáticos de tus citas',
      feature4Title: 'Historial Completo',
      feature4Text: 'Consulta todos tus servicios anteriores',
      feature5Title: 'Recompensas',
      feature5Text: 'Acumula puntos con cada visita',
      feature6Title: 'Disponibilidad 24/7',
      feature6Text: 'Reserva cuando quieras, donde quieras',
    },
    cta: {
      title: '¿Listo para comenzar?',
      subtitle: 'Únete a miles de clientes satisfechos que ya usan nuestra app',
      button: 'Descargar Ahora',
    },
    footer: {
      brandName: 'María Lainez Hair Stylist',
      designed: 'Diseñado por CapJe © 2026',
    },
  },
  EN: {
    nav: {
      backToHome: 'Back to Home',
      reserve: 'Book Now',
    },
    hero: {
      title: 'Book Your Appointment',
      subtitle: 'Download our mobile app and access a world of convenience. Book your appointments in seconds, receive exclusive offers, and manage your history from your smartphone.',
      downloadButton: 'Download App',
    },
    buttons: {
      googlePlay: 'Get it on Google Play',
      appStore: 'Download on App Store',
    },
    howItWorks: {
      title: 'How It Works',
      step1Title: 'Download the App',
      step1Text: 'Available free on Google Play and App Store',
      step2Title: 'Sign Up',
      step2Text: 'Create your account in less than a minute',
      step3Title: 'Choose Your Service',
      step3Text: 'Select the treatment you want',
      step4Title: 'Book Your Appointment',
      step4Text: 'Done! Confirm your booking instantly',
    },
    features: {
      title: 'App Features',
      feature1Title: 'Quick Bookings',
      feature1Text: 'Schedule your appointment in less than 30 seconds',
      feature2Title: 'Exclusive Offers',
      feature2Text: 'Access promotions only for app users',
      feature3Title: 'Notifications',
      feature3Text: 'Automatic reminders for your appointments',
      feature4Title: 'Complete History',
      feature4Text: 'Check all your previous services',
      feature5Title: 'Rewards',
      feature5Text: 'Earn points with every visit',
      feature6Title: '24/7 Availability',
      feature6Text: 'Book whenever you want, wherever you are',
    },
    cta: {
      title: 'Ready to get started?',
      subtitle: 'Join thousands of satisfied customers already using our app',
      button: 'Download Now',
    },
    footer: {
      brandName: 'María Lainez Hair Stylist',
      designed: 'Designed by CapJe © 2026',
    },
  },
  FR: {
    nav: {
      backToHome: 'Retour à l\'accueil',
      reserve: 'Réserver',
    },
    hero: {
      title: 'Réservez votre Rendez-vous',
      subtitle: 'Téléchargez notre application mobile et accédez à un monde de commodité. Réservez vos rendez-vous en quelques secondes, recevez des offres exclusives et gérez votre historique depuis votre smartphone.',
      downloadButton: 'Télécharger l\'App',
    },
    buttons: {
      googlePlay: 'Télécharger sur Google Play',
      appStore: 'Télécharger sur App Store',
    },
    howItWorks: {
      title: 'Comment ça marche',
      step1Title: 'Téléchargez l\'App',
      step1Text: 'Disponible gratuitement sur Google Play et App Store',
      step2Title: 'Inscrivez-vous',
      step2Text: 'Créez votre compte en moins d\'une minute',
      step3Title: 'Choisissez votre Service',
      step3Text: 'Sélectionnez le traitement que vous souhaitez',
      step4Title: 'Réservez votre Rendez-vous',
      step4Text: 'C\'est fait ! Confirmez votre réservation instantanément',
    },
    features: {
      title: 'Caractéristiques de l\'App',
      feature1Title: 'Réservations Rapides',
      feature1Text: 'Planifiez votre rendez-vous en moins de 30 secondes',
      feature2Title: 'Offres Exclusives',
      feature2Text: 'Accédez aux promotions réservées aux utilisateurs de l\'app',
      feature3Title: 'Notifications',
      feature3Text: 'Rappels automatiques de vos rendez-vous',
      feature4Title: 'Historique Complet',
      feature4Text: 'Consultez tous vos services précédents',
      feature5Title: 'Récompenses',
      feature5Text: 'Accumulez des points à chaque visite',
      feature6Title: 'Disponibilité 24/7',
      feature6Text: 'Réservez quand vous voulez, où vous voulez',
    },
    cta: {
      title: 'Prêt à commencer ?',
      subtitle: 'Rejoignez des milliers de clients satisfaits qui utilisent déjà notre app',
      button: 'Télécharger Maintenant',
    },
    footer: {
      brandName: 'María Lainez Coiffeur',
      designed: 'Conçu par CapJe © 2026',
    },
  },
  DE: {
    nav: {
      backToHome: 'Zurück zur Startseite',
      reserve: 'Buchen',
    },
    hero: {
      title: 'Buchen Sie Ihren Termin',
      subtitle: 'Laden Sie unsere mobile App herunter und genießen Sie maximalen Komfort. Buchen Sie Ihre Termine in Sekunden, erhalten Sie exklusive Angebote und verwalten Sie Ihren Verlauf von Ihrem Smartphone aus.',
      downloadButton: 'App Herunterladen',
    },
    buttons: {
      googlePlay: 'Bei Google Play herunterladen',
      appStore: 'Im App Store herunterladen',
    },
    howItWorks: {
      title: 'Wie es funktioniert',
      step1Title: 'Laden Sie die App herunter',
      step1Text: 'Kostenlos verfügbar auf Google Play und im App Store',
      step2Title: 'Registrieren Sie sich',
      step2Text: 'Erstellen Sie Ihr Konto in weniger als einer Minute',
      step3Title: 'Wählen Sie Ihren Service',
      step3Text: 'Wählen Sie die gewünschte Behandlung',
      step4Title: 'Buchen Sie Ihren Termin',
      step4Text: 'Fertig! Bestätigen Sie Ihre Buchung sofort',
    },
    features: {
      title: 'App-Funktionen',
      feature1Title: 'Schnelle Buchungen',
      feature1Text: 'Planen Sie Ihren Termin in weniger als 30 Sekunden',
      feature2Title: 'Exklusive Angebote',
      feature2Text: 'Zugang zu Aktionen nur für App-Nutzer',
      feature3Title: 'Benachrichtigungen',
      feature3Text: 'Automatische Erinnerungen an Ihre Termine',
      feature4Title: 'Vollständiger Verlauf',
      feature4Text: 'Überprüfen Sie alle Ihre früheren Services',
      feature5Title: 'Belohnungen',
      feature5Text: 'Sammeln Sie Punkte bei jedem Besuch',
      feature6Title: 'Verfügbarkeit 24/7',
      feature6Text: 'Buchen Sie wann und wo Sie wollen',
    },
    cta: {
      title: 'Bereit anzufangen?',
      subtitle: 'Schließen Sie sich Tausenden zufriedener Kunden an, die unsere App bereits nutzen',
      button: 'Jetzt Herunterladen',
    },
    footer: {
      brandName: 'María Lainez Friseur',
      designed: 'Entworfen von CapJe © 2026',
    },
  },
  IT: {
    nav: {
      backToHome: 'Torna alla home',
      reserve: 'Prenota',
    },
    hero: {
      title: 'Prenota il tuo Appuntamento',
      subtitle: 'Scarica la nostra app mobile e accedi a un mondo di comodità. Prenota i tuoi appuntamenti in pochi secondi, ricevi offerte esclusive e gestisci la tua cronologia dal tuo smartphone.',
      downloadButton: 'Scarica l\'App',
    },
    buttons: {
      googlePlay: 'Scarica su Google Play',
      appStore: 'Scarica su App Store',
    },
    howItWorks: {
      title: 'Come Funziona',
      step1Title: 'Scarica l\'App',
      step1Text: 'Disponibile gratis su Google Play e App Store',
      step2Title: 'Registrati',
      step2Text: 'Crea il tuo account in meno di un minuto',
      step3Title: 'Scegli il tuo Servizio',
      step3Text: 'Seleziona il trattamento che desideri',
      step4Title: 'Prenota il tuo Appuntamento',
      step4Text: 'Fatto! Conferma la tua prenotazione all\'istante',
    },
    features: {
      title: 'Caratteristiche dell\'App',
      feature1Title: 'Prenotazioni Veloci',
      feature1Text: 'Pianifica il tuo appuntamento in meno di 30 secondi',
      feature2Title: 'Offerte Esclusive',
      feature2Text: 'Accedi a promozioni solo per utenti dell\'app',
      feature3Title: 'Notifiche',
      feature3Text: 'Promemoria automatici dei tuoi appuntamenti',
      feature4Title: 'Cronologia Completa',
      feature4Text: 'Consulta tutti i tuoi servizi precedenti',
      feature5Title: 'Ricompense',
      feature5Text: 'Accumula punti ad ogni visita',
      feature6Title: 'Disponibilità 24/7',
      feature6Text: 'Prenota quando vuoi, dove vuoi',
    },
    cta: {
      title: 'Pronto per iniziare?',
      subtitle: 'Unisciti a migliaia di clienti soddisfatti che già usano la nostra app',
      button: 'Scarica Ora',
    },
    footer: {
      brandName: 'María Lainez Parrucchiere',
      designed: 'Progettato da CapJe © 2026',
    },
  },
};

export default function ReservasApp() {
  const [language, setLanguage] = useState<Language>('ES');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const t = translations[language];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-yellow-50 via-white to-yellow-50">
      <header className="bg-yellow-400 py-4 px-4 sm:px-6 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-600 rounded-full cursor-pointer"
            aria-label="María Lainez Hair Stylist Logo"
          >
            <img
              src="/logo.webp"
              alt="María Lainez Logo"
              className="h-12 w-12 rounded-full"
            />
            <span className="text-xl font-bold text-gray-900">María Lainez</span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-900 hover:text-gray-700 font-medium transition-colors"
            >
              {t.nav.backToHome}
            </Link>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setLanguage('ES')}
                className={`font-medium transition-colors ${
                  language === 'ES' ? 'text-gray-900 underline' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                ES
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => setLanguage('EN')}
                className={`font-medium transition-colors ${
                  language === 'EN' ? 'text-gray-900 underline' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                EN
              </button>

              <div className="relative" ref={langDropdownRef}>
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                  aria-label="More languages"
                >
                  <Globe className="h-5 w-5" />
                </button>

                {langDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <button
                      onClick={() => {
                        setLanguage('FR');
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                        language === 'FR' ? 'bg-yellow-50 text-gray-900 font-semibold' : 'text-gray-700'
                      }`}
                    >
                      FR - Français
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('DE');
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                        language === 'DE' ? 'bg-yellow-50 text-gray-900 font-semibold' : 'text-gray-700'
                      }`}
                    >
                      DE - Deutsch
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('IT');
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                        language === 'IT' ? 'bg-yellow-50 text-gray-900 font-semibold' : 'text-gray-700'
                      }`}
                    >
                      IT - Italiano
                    </button>
                  </div>
                )}
              </div>
            </div>
          </nav>

          <button
            className="md:hidden text-gray-900"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={handleMobileMenuClose}
          />
          <div className="fixed top-0 right-0 h-full w-80 bg-yellow-400 shadow-2xl z-50 p-6 flex flex-col gap-6 animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between">
              <img
                src="/logo.webp"
                alt="María Lainez Logo"
                className="h-10 w-10 rounded-full"
              />
              <button
                onClick={handleMobileMenuClose}
                className="text-gray-900"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={handleMobileMenuClose}
                className="text-gray-900 hover:text-gray-700 font-medium text-lg transition-colors"
              >
                {t.nav.backToHome}
              </Link>
            </nav>

            <div className="mt-auto">
              <p className="text-sm text-gray-700 mb-3 font-medium">Idiomas:</p>
              <div className="grid grid-cols-3 gap-2">
                {(['ES', 'EN', 'FR', 'DE', 'IT'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      handleMobileMenuClose();
                    }}
                    className={`px-3 py-2 rounded-lg font-medium transition-colors ${
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
        </>
      )}

      <main className="flex-grow">
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-yellow-100 via-white to-yellow-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                {t.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                {t.hero.subtitle}
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mt-12">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-3xl blur-2xl opacity-30"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 w-72 h-[580px] shadow-2xl">
                  <div className="bg-yellow-400 rounded-2xl h-full flex items-center justify-center">
                    <div className="text-center px-6">
                      <Smartphone className="h-24 w-24 text-gray-900 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        María Lainez
                      </h3>
                      <p className="text-sm text-gray-700 font-medium">Hair Stylist App</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 w-full max-w-sm">
                <a
                  href="#"
                  className="flex items-center justify-center gap-4 bg-black text-white px-8 py-5 rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
                >
                  <svg className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-xs opacity-80">Disponible en</p>
                    <p className="text-lg font-bold">Google Play</p>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center gap-4 bg-black text-white px-8 py-5 rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
                >
                  <svg className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-xs opacity-80">Descargar en</p>
                    <p className="text-lg font-bold">App Store</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-16">
              {t.howItWorks.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="relative mx-auto w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-bold text-gray-900">1</span>
                  </div>
                </div>
                <Download className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t.howItWorks.step1Title}
                </h3>
                <p className="text-gray-600">
                  {t.howItWorks.step1Text}
                </p>
              </div>

              <div className="text-center group">
                <div className="relative mx-auto w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-bold text-gray-900">2</span>
                  </div>
                </div>
                <CheckCircle2 className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t.howItWorks.step2Title}
                </h3>
                <p className="text-gray-600">
                  {t.howItWorks.step2Text}
                </p>
              </div>

              <div className="text-center group">
                <div className="relative mx-auto w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-bold text-gray-900">3</span>
                  </div>
                </div>
                <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t.howItWorks.step3Title}
                </h3>
                <p className="text-gray-600">
                  {t.howItWorks.step3Text}
                </p>
              </div>

              <div className="text-center group">
                <div className="relative mx-auto w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-bold text-gray-900">4</span>
                  </div>
                </div>
                <Calendar className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t.howItWorks.step4Title}
                </h3>
                <p className="text-gray-600">
                  {t.howItWorks.step4Text}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-yellow-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-4">
              {t.features.title}
            </h2>

            <div className="flex justify-center mb-12">
              <div className="h-1 w-48 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-yellow-400">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Calendar className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t.features.feature1Title}
                </h3>
                <p className="text-gray-600">
                  {t.features.feature1Text}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-yellow-400">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Gift className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t.features.feature2Title}
                </h3>
                <p className="text-gray-600">
                  {t.features.feature2Text}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-yellow-400">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Bell className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t.features.feature3Title}
                </h3>
                <p className="text-gray-600">
                  {t.features.feature3Text}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-yellow-400">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Clock className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t.features.feature4Title}
                </h3>
                <p className="text-gray-600">
                  {t.features.feature4Text}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-yellow-400">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Star className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t.features.feature5Title}
                </h3>
                <p className="text-gray-600">
                  {t.features.feature5Text}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-yellow-400">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Smartphone className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t.features.feature6Title}
                </h3>
                <p className="text-gray-600">
                  {t.features.feature6Text}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-400">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.cta.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-800 mb-10">
              {t.cta.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="flex items-center justify-center gap-3 bg-black text-white px-10 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto text-lg font-bold"
              >
                <Download className="h-6 w-6" />
                {t.cta.button}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-yellow-400 py-8 px-4 sm:px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm text-gray-900 font-medium">
              {t.footer.designed}
            </p>
          </div>

          <div className="flex-1 text-center">
            <p className="text-lg font-bold text-gray-900">
              {t.footer.brandName}
            </p>
          </div>

          <div className="flex-1 flex justify-center md:justify-end">
            <a
              href="https://www.instagram.com/marialainezhairstylist/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-700 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-7 w-7" />
            </a>
          </div>
        </div>
      </footer>

      <div className="elfsight-app-2a85dfb5-5da4-4d3a-8c50-bdac5b091bb5" data-elfsight-app-lazy></div>
    </div>
  );
}
