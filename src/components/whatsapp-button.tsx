import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = '34644297391';
  const message = encodeURIComponent('Hola, me gustaría reservar una cita');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce hover:animate-none group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" strokeWidth={2} />
    </a>
  );
}
