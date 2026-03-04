import { Phone } from 'lucide-react';

export default function StickyCallButton() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-secondary border-t border-white/20 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
      <a 
        href="tel:+34985256578" 
        className="flex items-center justify-center gap-3 w-full py-4 px-6 text-white font-semibold tracking-wider uppercase text-sm active:bg-primary transition-colors duration-300"
      >
        <Phone className="w-5 h-5 animate-pulse" />
        Llamar para Reservar
      </a>
    </div>
  );
}
