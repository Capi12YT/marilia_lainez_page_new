import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface Service {
  nameKey: string;
  path?: string;
}

interface ServicesDropdownProps {
  translations: {
    services: string;
    highlights: string;
    balayages: string;
    color: string;
    hairstyles: string;
    updos: string;
    permanentCurls: string;
    cut: string;
    menCut: string;
    event: string;
  };
  isMobile?: boolean;
}

const services: Service[] = [
  { nameKey: 'highlights', path: '/servicios/highlights' },
  { nameKey: 'balayages', path: '/servicios/balayages' },
  { nameKey: 'color', path: '/servicios/color' },
  { nameKey: 'hairstyles', path: '/servicios/peinados' },
  { nameKey: 'updos', path: '/servicios/recogidos' },
  { nameKey: 'cut', path: '/servicios/corte' },
  { nameKey: 'event', path: '/servicios/eventos' },
  { nameKey: 'permanentCurls'},
  { nameKey: 'menCut' },
];

export function ServicesDropdown({ translations, isMobile = false }: ServicesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150); // 150ms delay before closing
  };

  if (isMobile) {
    return (
      <div className="space-y-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-gray-900 hover:text-gray-600 transition-colors text-lg font-medium"
        >
          <span>{translations.services}</span>
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
        {isOpen && (
          <div className="pl-4 space-y-3 mt-3">
            {services.map((service) =>
              service.path ? (
                <Link
                  key={service.nameKey}
                  to={service.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {translations[service.nameKey as keyof typeof translations]}
                </Link>
              ) : (
                <span
                  key={service.nameKey}
                  className="block text-gray-500 cursor-default transition-colors"
                >
                  {translations[service.nameKey as keyof typeof translations]}
                </span>
              )
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center gap-1 text-gray-900 hover:text-gray-700 font-medium hover:border-b-2 hover:border-black transition-all pb-1 border-b-2 border-transparent">
        {translations.services}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50">
          {services.map((service) =>
            service.path ? (
              <Link
                key={service.nameKey}
                to={service.path}
                className="block px-4 py-3 text-gray-900 hover:bg-yellow-400 transition-colors"
              >
                {translations[service.nameKey as keyof typeof translations]}
              </Link>
            ) : (
              <span
                key={service.nameKey}
                className="block px-4 py-3 text-gray-500 cursor-default transition-colors"
              >
                {translations[service.nameKey as keyof typeof translations]}
              </span>
            )
          )}
        </div>
      )}
    </div>
  );
}
