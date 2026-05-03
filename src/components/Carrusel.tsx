import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarruselProps {
  images: string[];
}

export function Carrusel({ images }: CarruselProps) {
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
