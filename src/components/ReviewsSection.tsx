import { useState, useEffect, useRef } from 'react';
import { Star, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  { name: "Hugo Yow", text: "Sitio brutal para comer italiano en Oviedo. La pasta carbonara es una pasada, súper cremosa y con sabor auténtico. La pizza paesana está de locos. Todo casero y con muy buena relación calidad-precio. ¡Repetimos seguro!" },
  { name: "Sara González", text: "Sin duda, el mejor italiano de Oviedo. Pastas y pizzas con masa de elaboración casera, cocinadas en horno de leña. Carta variada y todo riquísimo." },
  { name: "Manuel León", text: "La mejor pizza que he comido en Asturias sin lugar a duda. La pasta es extremadamente buena. Son muy atentos y tienen buen precio." },
  { name: "Carlos Cruz", text: "Pedimos la calzone y no podía ser más brutal. Sitio de máxima confianza donde te sientes en familia desde el primer momento." },
  { name: "Yousra Alyli", text: "El mejor restaurante italiano que he probado. Comida exquisita, raciones generosas y servicio de 10." },
  { name: "Ali Mg", text: "La pizza Donatello se ha convertido en una de las mejores que he probado. Ingredientes de calidad y perfectamente equilibrada. INCREÍBLE." },
  { name: "Indira", text: "Excelente. Lugar acogedor, carta muy completa, porciones generosas y el tiramisú para repetir. Atención inmejorable." },
  { name: "dcabielles", text: "Si quieres comer en un verdadero italiano, este es tu sitio. El mejor restaurante italiano de toda Asturias." },
  { name: "Paula Muñiz Blanco", text: "No he probado en mi vida una calzone tan rica." },
  { name: "L", text: "La comida y el servicio fueron excepcionales. Todo nos encantó. Recomendado 100%." },
  { name: "Raúl Cazorla", text: "Uno de mis restaurantes favoritos de Oviedo. Destaca por sus pizzas de horno de leña y su pasta casera. No defrauda." },
  { name: "Jose Cerra", text: "El tiramisú puede que sea el mejor que he comido nunca. La pasta y las pizzas todas muy ricas." },
  { name: "Angel López Dorado", text: "Extraordinario restaurante con un servicio y atención estupendas. Muy recomendable." },
  { name: "Iván Martínez Enríquez", text: "Gran amante de las pizzas y hemos dado en el clavo. Muy recomendable." },
  { name: "Silvia", text: "Comida siciliana deliciosa. Las pizzas, el provolone, los postres… riquísimo. Recomendamos 100%." },
  { name: "Natalia", text: "La mejor carbonara que probé. Servicio muy bueno. Lo recomiendo." },
  { name: "Mawi M", text: "Trato excelente. Comimos genial y repetimos esa misma noche. La comida de 10." },
  { name: "Tamara Cl", text: "Todo riquísimo, calidad-precio inmejorable, platos generosos y personal súper amable." },
  { name: "Fabada", text: "Una pizza muy buena. No me extraña que haya recibido premio. Servicio atento. Repetiré." },
  { name: "Carlos Garrido", text: "Muy buen sitio, tanto para comer allí como para pedir. Siempre llega rápido y calentito." },
  { name: "Lucía Fidalgo", text: "Un 10 tanto en atención como en comida. Pizzas en horno de leña muy ricas. Personal muy atento y amable." }
];

export default function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isProgrammaticScrollRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(reviews.length / itemsPerView);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalSlides);
    }, 10000);
    
    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  useEffect(() => {
    if (scrollRef.current) {
      isProgrammaticScrollRef.current = true;
      const clientWidth = scrollRef.current.clientWidth;
      const targetScroll = activeIndex * clientWidth;
      
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isProgrammaticScrollRef.current = false;
      }, 600);
    }
  }, [activeIndex]);

  const handleScroll = () => {
    if (isProgrammaticScrollRef.current) return;
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const clientWidth = scrollRef.current.clientWidth;
      const newIndex = Math.round(scrollLeft / clientWidth);
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < totalSlides) {
        setActiveIndex(newIndex);
      }
    }
  };

  const handleInteraction = () => {
    setIsPaused(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  const nextSlide = () => {
    handleInteraction();
    setActiveIndex((current) => (current + 1) % totalSlides);
  };

  const prevSlide = () => {
    handleInteraction();
    setActiveIndex((current) => (current - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    handleInteraction();
    setActiveIndex(index);
  };

  return (
    <section id="resenas" className="bg-[#181614] text-white font-sans antialiased py-20 lg:py-32">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl leading-[1.1] tracking-tight mb-6">
            Lo que opinan nuestros clientes
          </h2>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold">4,4</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-6 h-6 ${i < 4 ? 'fill-primary text-primary' : 'fill-primary/50 text-primary/50'}`} />
                ))}
              </div>
            </div>
            <p className="text-lg font-medium">sobre 5 en Google</p>
            <p className="text-white/60 text-sm mt-2">Más de 1.000 reseñas verificadas</p>
          </div>
        </div>

        <div 
          className="relative group"
          onMouseEnter={handleInteraction}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleInteraction}
        >
          <button 
            onClick={prevSlide}
            className="flex absolute left-2 lg:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white text-bg-dark rounded-full items-center justify-center shadow-xl z-50 hover:bg-primary hover:text-white transition-colors duration-300 opacity-100 lg:opacity-0 group-hover:opacity-100"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="flex absolute right-2 lg:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white text-bg-dark rounded-full items-center justify-center shadow-xl z-50 hover:bg-primary hover:text-white transition-colors duration-300 opacity-100 lg:opacity-0 group-hover:opacity-100"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>

          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 -mx-4 px-4 lg:mx-0 lg:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review, index) => (
              <div 
                key={index} 
                className="w-full md:w-1/2 lg:w-1/3 shrink-0 snap-start px-4"
              >
                <div className="bg-white text-bg-dark rounded-2xl p-8 shadow-lg h-full flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-green-700 bg-green-50 px-2 py-1 rounded-full border border-green-200">
                      <CheckCircle className="w-3 h-3" />
                      <span className="text-[10px] uppercase tracking-wider font-semibold">Verificada</span>
                    </div>
                  </div>
                  <p className="font-bold text-lg mb-4">{review.name}</p>
                  <p className="text-bg-dark/70 font-light leading-relaxed flex-grow">"{review.text}"</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {[...Array(totalSlides)].map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'bg-primary w-8' : 'bg-white/20 hover:bg-white/50'
                }`}
                aria-label={`Ir a la diapositiva ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-16">
          <a href="https://www.google.es/maps/place/Restaurante+-+Pizzer%C3%ADa+Salvatore/@43.3629976,-5.8635959,16z/data=!4m18!1m9!3m8!1s0xd368d034ddd7c97:0x152f6c16194891e0!2sRestaurante+-+Pizzer%C3%ADa+Salvatore!8m2!3d43.3629937!4d-5.861021!9m1!1b1!16s%2Fg%2F1vnrm9h2!3m7!1s0xd368d034ddd7c97:0x152f6c16194891e0!8m2!3d43.3629937!4d-5.861021!9m1!1b1!16s%2Fg%2F1vnrm9h2?hl=es&entry=ttu&g_ep=EgoyMDI2MDMwMS4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="bg-primary text-bg-dark px-8 py-4 rounded-full font-semibold tracking-wider uppercase text-sm hover:bg-white transition-colors duration-300 text-center shadow-lg hover:shadow-xl">
            Deja tu reseña en Google Maps
          </a>
          <a href="https://www.tripadvisor.es/UserReviewEdit-g187452-d1001856-Salvatore-Oviedo_Asturias.html" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/20 text-white px-8 py-4 rounded-full font-semibold tracking-wider uppercase text-sm hover:bg-white hover:text-bg-dark transition-colors duration-300 text-center">
            Ver opiniones en TripAdvisor
          </a>
        </div>
      </div>
    </section>
  );
}
