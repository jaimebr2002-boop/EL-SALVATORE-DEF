import { Flame, Wheat, Leaf, Sun } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-white font-sans antialiased py-16 lg:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-12 mb-16">
          
          <div className="space-y-6 lg:col-span-2">
            <div className="flex items-center gap-4">
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
            <p className="text-white/70 font-light text-sm leading-relaxed mt-6 max-w-sm">
              Auténtica cocina italiana en el corazón de Oviedo desde 1995. Un viaje de sabores a través de las recetas tradicionales de la nonna.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-primary">Contacto</h4>
            <ul className="text-sm text-white/70 font-light space-y-3">
              <li>
                <a href="tel:+34985256578" className="hover:text-white transition-colors duration-300">+34 985 25 65 78</a>
              </li>
              <li>
                <a href="mailto:info@restaurantesalvatore.es" className="hover:text-white transition-colors duration-300">info@restaurantesalvatore.es</a>
              </li>
              <li className="pt-2">
                Calle Miguel Ángel Blanco, 26<br />
                33013 Oviedo, Asturias
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-primary">A Domicilio</h4>
            <div className="text-sm text-white/70 font-light space-y-2">
              <p><strong className="text-white">Oviedo:</strong> Coste de salida: 2,50 €.</p>
              <p><strong className="text-white">Alrededores:</strong> Coste de salida: 3 €.</p>
              <p className="pt-2 text-xs italic opacity-80">En casa también puedes pagar tu pedido con tarjeta de crédito o bizum.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-primary">Enlaces</h4>
            <ul className="text-sm text-white/70 font-light space-y-3">
              <li><a href="#nosotros" className="hover:text-white transition-colors duration-300">Nosotros</a></li>
              <li><a href="#carta" className="hover:text-white transition-colors duration-300">Carta</a></li>
              <li><a href="#visitanos" className="hover:text-white transition-colors duration-300">Ubicación</a></li>
              <li><a href="#reservar" className="hover:text-white transition-colors duration-300">Reservar</a></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-wrap justify-center gap-8 border-t border-white/10 pt-12 mb-8">
          <div className="flex items-center gap-2 text-white/50 hover:text-primary transition-colors duration-300 cursor-default">
            <Leaf className="w-5 h-5" />
            <span className="text-xs uppercase tracking-widest">Ingredientes frescos</span>
          </div>
          <div className="flex items-center gap-2 text-white/50 hover:text-secondary transition-colors duration-300 cursor-default">
            <Flame className="w-5 h-5" />
            <span className="text-xs uppercase tracking-widest">Horno de leña tradicional</span>
          </div>
          <div className="flex items-center gap-2 text-white/50 hover:text-primary transition-colors duration-300 cursor-default">
            <Wheat className="w-5 h-5" />
            <span className="text-xs uppercase tracking-widest">Pasta artesanal</span>
          </div>
          <div className="flex items-center gap-2 text-white/50 hover:text-accent transition-colors duration-300 cursor-default">
            <Sun className="w-5 h-5" />
            <span className="text-xs uppercase tracking-widest">Terraza exterior</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-xs font-light">
          <div>&copy; {new Date().getFullYear()} El Salvatore. Todos los derechos reservados.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors duration-300">Aviso Legal</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
