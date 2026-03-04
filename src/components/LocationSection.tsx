import { MapPin, Sun, Clock, ShoppingBag } from 'lucide-react';

export default function LocationSection() {
  return (
    <section id="visitanos" className="bg-bg-light text-bg-dark font-sans antialiased py-20 lg:py-32">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-bg-dark mb-6">
            Encuéntranos en Oviedo
          </h2>
          <p className="text-bg-dark/70 leading-relaxed font-light text-base md:text-lg flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5 text-secondary" />
            Calle Miguel Ángel Blanco, 26, 33013 Oviedo, Asturias
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="order-2 lg:order-1 space-y-12">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-sm uppercase tracking-wider">Horario</h4>
                <div className="text-sm text-bg-dark/70 font-light space-y-1">
                  <p><strong className="font-medium">Martes a Domingo:</strong></p>
                  <p>De 13:00 a 16:00h</p>
                  <p>De 20:00 a 24:00h</p>
                  <p>Lunes cerrado, excepto festivos</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                  <ShoppingBag className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-semibold text-sm uppercase tracking-wider">Servicio a Domicilio</h4>
                <div className="text-sm text-bg-dark/70 font-light space-y-1">
                  <p><strong className="font-medium">Oviedo:</strong> Coste de salida: 2,50 €.</p>
                  <p><strong className="font-medium">Alrededores:</strong> Coste de salida: 3 €.</p>
                  <p className="mt-2 text-xs italic">En casa también puedes pagar tu pedido con tarjeta de crédito o bizum.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-2">
                  <Sun className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-semibold text-sm uppercase tracking-wider">Terraza</h4>
                <p className="text-sm text-bg-dark/70 font-light">Amplia terraza climatizada disponible todo el año.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-bg-dark/5 rounded-full flex items-center justify-center mb-2">
                  <MapPin className="w-6 h-6 text-bg-dark" />
                </div>
                <h4 className="font-semibold text-sm uppercase tracking-wider">Ubicación</h4>
                <p className="text-sm text-bg-dark/70 font-light">Situados en una zona tranquila de Oviedo, ideal para disfrutar de una velada relajada.</p>
              </div>
            </div>

          </div>

          <div className="order-1 lg:order-2 w-full h-[400px] lg:h-[500px] bg-gray-200 relative overflow-hidden">
            {/* Placeholder for Google Maps iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.406981155919!2d-5.8635959!3d43.3629976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd368d034ddd7c97%3A0x152f6c16194891e0!2sRestaurante%20-%20Pizzer%C3%ADa%20Salvatore!5e0!3m2!1ses!2ses!4v1698765432109!5m2!1ses!2ses" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-4 border-bg-light"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
