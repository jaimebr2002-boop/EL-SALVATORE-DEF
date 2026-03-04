export default function MenuSection() {
  const categories = [
    "Entradas",
    "Ensaladas",
    "Pizzas",
    "Pastas",
    "Pasta Rellena & Risotti",
    "Pescados",
    "Postres"
  ];

  return (
    <section id="carta" className="bg-bg-light text-bg-dark font-sans antialiased py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-bg-dark mb-6">
            Sabores que cuentan historias
          </h2>
          <p className="text-bg-dark/70 leading-relaxed font-light text-base md:text-lg">
            Cada plato es una celebración de la tradición italiana, elaborado con ingredientes seleccionados y el cuidado de las recetas de la nonna.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8 justify-center">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer border border-bg-dark/10 p-4 sm:p-8 hover:bg-bg-dark hover:text-white transition-all duration-500 flex flex-col items-center justify-center text-center aspect-[4/3] sm:aspect-square relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              <h3 className="font-display text-lg sm:text-2xl lg:text-3xl relative z-10">{category}</h3>
              <div className="w-8 sm:w-12 h-[1px] bg-primary mt-2 sm:mt-4 group-hover:w-16 sm:group-hover:w-24 transition-all duration-500 relative z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

