import { Flame, Wheat, Heart, UtensilsCrossed } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="nosotros" className="bg-bg-dark text-white font-sans antialiased py-20 lg:py-32">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-sm tracking-[0.3em] font-semibold uppercase text-primary">
                Nuestra Historia
              </h3>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
                Tradición italiana en el corazón de Asturias
              </h2>
            </div>
            
            <div className="space-y-6 text-white/80 leading-relaxed font-light text-base">
              <p>
                En <strong className="text-white font-medium">El Salvatore</strong>, cada plato cuenta una historia de pasión y tradición. Desde nuestros inicios, hemos traído el auténtico sabor de Italia a Oviedo, honrando las recetas de la nonna con ingredientes seleccionados y el cuidado que solo el amor por la cocina puede ofrecer.
              </p>
              <p>
                Nuestro horno de leña, el corazón de nuestra cocina, alcanza temperaturas que transforman la masa madre en pizzas con ese punto perfecto: crujiente por fuera, suave por dentro. La pasta fresca se elabora cada día con técnicas heredadas de generación en generación.
              </p>
              <p className="italic text-white/90 font-display text-lg">
                "No es solo comida. Es la experiencia de sentarse a una mesa italiana, compartir un buen vino y disfrutar de conversaciones que se alargan entre risas y el aroma del basilico fresco."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div className="flex items-start gap-4">
                <Flame className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wider mb-1">Horno de leña</h4>
                  <p className="text-xs text-white/60">Cocción tradicional</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Wheat className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wider mb-1">Masa madre</h4>
                  <p className="text-xs text-white/60">Fermentación lenta</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wider mb-1">Pasión italiana</h4>
                  <p className="text-xs text-white/60">Recetas de la nonna</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <UtensilsCrossed className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wider mb-1">Pasta fresca</h4>
                  <p className="text-xs text-white/60">Elaboración diaria</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[3/4] w-full relative">
              <img 
                src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772617205/pizza_pino_sfwulw.jpg" 
                alt="Pizza en El Salvatore" 
                className="w-full h-full object-cover rounded-sm shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-8 -right-8 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block">
              <div className="writing-vertical-rl rotate-180 font-script text-5xl text-white/10 tracking-widest">
                El Salvatore
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

