import { Flame, Wheat, Leaf } from 'lucide-react';
import Navbar from './Navbar';

export default function HeroSection() {
  return (
    <section 
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: "linear-gradient(to bottom, rgba(18, 16, 14, 0.6), rgba(18, 16, 14, 0.8)), url('https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=3269&auto=format&fit=crop')" }}
    >
      <Navbar />
      
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center h-full pt-20 pb-24 max-w-5xl mx-auto">
        <h2 className="text-primary font-sans text-sm md:text-base tracking-[0.3em] uppercase font-semibold mb-6">
          Cocina Italiana Auténtica desde 1995
        </h2>
        
        <h1 className="font-display text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] text-white tracking-tight mb-4" style={{ textShadow: '2px 2px 12px rgba(0, 0, 0, 0.8)' }}>
          El Salvatore
        </h1>
        
        <p className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-white tracking-tight mb-8" style={{ textShadow: '2px 2px 12px rgba(0, 0, 0, 0.8)' }}>
          El sabor auténtico<br/>de Italia en Oviedo.
        </p>
        
        <p className="text-white/90 font-sans font-light text-base md:text-lg max-w-2xl mb-12 leading-relaxed">
          Siente el crujido de la corteza recién salida del horno de leña. Descubre la pasión italiana en cada bocado de nuestra pasta fresca.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mb-16 w-full sm:w-auto">
          <a href="tel:+34985256578" className="bg-primary text-bg-dark px-8 py-4 font-semibold tracking-wider uppercase text-sm hover:bg-white transition-colors duration-300 text-center">
            Reservar Mesa
          </a>
          <a href="#carta" className="border border-white text-white px-8 py-4 font-semibold tracking-wider uppercase text-sm hover:bg-white hover:text-bg-dark transition-colors duration-300 text-center">
            Ver Carta
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16 border-t border-white/20 pt-8 w-full">
          <div className="flex flex-col items-center gap-3">
            <Flame className="w-8 h-8 text-secondary" strokeWidth={1.5} />
            <span className="text-xs uppercase tracking-widest text-white/80">Horno de leña</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Wheat className="w-8 h-8 text-primary" strokeWidth={1.5} />
            <span className="text-xs uppercase tracking-widest text-white/80">Pasta fresca</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Leaf className="w-8 h-8 text-accent" strokeWidth={1.5} />
            <span className="text-xs uppercase tracking-widest text-white/80">Ingredientes frescos</span>
          </div>
        </div>
      </div>
    </section>
  );
}

