import { PhoneCall, Clock, Users, CalendarHeart } from 'lucide-react';

export default function ReservationSection() {
  return (
    <section id="reservar" className="bg-[#0F1614] text-white font-sans antialiased py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2674&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-sm tracking-[0.3em] font-semibold uppercase text-primary mb-4">
            Atención Personalizada
          </h3>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-8">
            Reserva tu mesa
          </h2>
          <p className="text-white/90 leading-relaxed font-light text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Para garantizar la mejor atención y disponibilidad, gestionamos todas las reservas directamente por teléfono.
          </p>

          <a href="tel:+34985256578" className="inline-flex items-center justify-center gap-3 sm:gap-4 bg-white text-[#0F1614] px-4 sm:px-8 py-4 sm:py-6 rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-2xl hover:shadow-primary/50 group mb-16 w-full sm:w-auto whitespace-nowrap">
            <PhoneCall className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-300 shrink-0" />
            <span className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-wider shrink-0">+34 985 25 65 78</span>
          </a>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-white/20 pt-12">
            <div className="flex flex-col gap-4">
              <Clock className="w-8 h-8 text-primary" />
              <h4 className="font-semibold text-sm uppercase tracking-wider">Horarios</h4>
              <ul className="text-sm text-white/80 font-light space-y-2">
                <li><strong className="text-white">Martes a Domingo:</strong></li>
                <li>De 13:00 a 16:00h</li>
                <li>De 20:00 a 24:00h</li>
                <li><strong className="text-white">Lunes cerrado</strong>, excepto festivos</li>
              </ul>
            </div>
            
            <div className="flex flex-col gap-4">
              <Users className="w-8 h-8 text-primary" />
              <h4 className="font-semibold text-sm uppercase tracking-wider">Grupos Grandes</h4>
              <p className="text-sm text-white/80 font-light">
                Para reservas de más de 10 personas, por favor llámanos directamente para asegurar el espacio adecuado y ofrecerte opciones de menú cerrado si lo deseas.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <CalendarHeart className="w-8 h-8 text-primary" />
              <h4 className="font-semibold text-sm uppercase tracking-wider">Eventos Especiales</h4>
              <p className="text-sm text-white/80 font-light">
                ¿Celebras un cumpleaños, aniversario o evento de empresa? Llámanos para organizar los detalles y hacer de tu velada algo inolvidable.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <a href="tel:+34985256578" className="inline-block bg-primary text-bg-dark px-12 py-5 font-semibold tracking-wider uppercase text-sm hover:bg-white transition-colors duration-300 text-center shadow-xl">
              Llamar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
