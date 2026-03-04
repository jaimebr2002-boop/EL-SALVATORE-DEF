import { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-6 z-50 lg:px-16">
        <div className="flex-shrink-0 flex items-center gap-4">
          <img 
            src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772615947/image-1764338230905_kmcifb.webp" 
            alt="El Salvatore Logo" 
            className="h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <a href="#" className="font-script text-4xl lg:text-5xl text-white tracking-wide relative inline-block">
            El Salvatore
            <div className="absolute h-[1px] w-[120%] bg-primary -bottom-1 -left-[10%] -rotate-2"></div>
          </a>
        </div>
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#nosotros" className="text-white text-xs lg:text-sm font-semibold tracking-[0.15em] hover:text-primary transition-colors duration-300 uppercase">Nosotros</a>
          <a href="#carta" className="text-white text-xs lg:text-sm font-semibold tracking-[0.15em] hover:text-primary transition-colors duration-300 uppercase">Carta</a>
          <a href="#resenas" className="text-white text-xs lg:text-sm font-semibold tracking-[0.15em] hover:text-primary transition-colors duration-300 uppercase">Reseñas</a>
          <a href="#visitanos" className="text-white text-xs lg:text-sm font-semibold tracking-[0.15em] hover:text-primary transition-colors duration-300 uppercase">Visítanos</a>
        </nav>
        <div className="hidden md:flex flex-shrink-0">
          <a href="tel:+34985256578" className="flex items-center gap-2 text-white hover:text-primary transition-colors duration-300">
            <Phone className="w-5 h-5" />
            <span className="font-semibold tracking-wider text-sm">985 25 65 78</span>
          </a>
        </div>
        <div className="flex md:hidden flex-shrink-0">
          <button onClick={() => setIsMenuOpen(true)} aria-label="Toggle menu" className="text-white hover:text-primary transition-colors duration-300 focus:outline-none">
            <Menu className="w-8 h-8" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-bg-dark z-[60] flex flex-col transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <img 
              src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772615947/image-1764338230905_kmcifb.webp" 
              alt="El Salvatore Logo" 
              className="h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="font-script text-3xl text-white">El Salvatore</span>
          </div>
          <button onClick={() => setIsMenuOpen(false)} className="text-white hover:text-primary transition-colors">
            <X className="w-8 h-8" strokeWidth={1.5} />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center flex-grow space-y-8 pb-20">
          <a href="#nosotros" onClick={() => setIsMenuOpen(false)} className="text-white text-xl font-semibold tracking-[0.15em] hover:text-primary uppercase">Nosotros</a>
          <a href="#carta" onClick={() => setIsMenuOpen(false)} className="text-white text-xl font-semibold tracking-[0.15em] hover:text-primary uppercase">Carta</a>
          <a href="#resenas" onClick={() => setIsMenuOpen(false)} className="text-white text-xl font-semibold tracking-[0.15em] hover:text-primary uppercase">Reseñas</a>
          <a href="#visitanos" onClick={() => setIsMenuOpen(false)} className="text-white text-xl font-semibold tracking-[0.15em] hover:text-primary uppercase">Visítanos</a>
          <a href="tel:+34985256578" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-primary mt-8 border border-primary/30 px-8 py-4 rounded-full">
            <Phone className="w-6 h-6" />
            <span className="font-semibold tracking-wider text-xl">985 25 65 78</span>
          </a>
        </nav>
      </div>
    </>
  );
}
