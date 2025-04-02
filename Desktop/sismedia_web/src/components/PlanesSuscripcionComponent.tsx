import { useState, useRef } from 'react';

export default function PlanesSuscripcionComponent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (scrollOffset: number) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollOffset;
      setScrollPosition(containerRef.current.scrollLeft);
    }
  };

  return (
    <div className="mx-auto">
      <h1 className="text-2xl md:text-4xl text-center font-bold mb-5 mt-10">Planes de Suscripción</h1>

      <div className="relative">
        {/* Flechas de navegación (ocultas en pantallas medianas y grandes) */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full md:hidden"
          onClick={() => scroll(-300)}
        >
          {'<'}
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full md:hidden"
          onClick={() => scroll(300)}
        >
          {'>'}
        </button>

        {/* Contenedor de cards (sin desplazamiento en pantallas medianas y grandes) */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto scroll-smooth gap-10 md:overflow-x-visible md:flex-row md:justify-center"
        >
          {/* Cards de suscripción */}
          <div className="flex-shrink-0 w-75 md:w-1/3 max-w-md text-center border-2 border-gray-300 rounded-lg p-4 shadow-lg md:hover:scale-105 transition-transform duration-400">
            <h1 className="text-xl md:text-3xl font-medium my-2">Plan Básico</h1>
            <p className="text-xl">
              <span className="text-8xl font-bold">$29</span>/mes
            </p>
            <p className="text-xl md:text-2xl my-2">Funciones esenciales para pequeñas prácticas</p>
            <button className="bg-blue-800 text-white text-2xl my-5 px-5 py-2 rounded-lg font-medium hover:cursor-pointer hover:bg-cyan-600">
              Comenzar
            </button>
          </div>

          <div className="flex-shrink-0 w-75 md:w-1/3 max-w-md text-center border-2 border-gray-300 rounded-lg p-6 shadow-lg md:hover:scale-105 transition-transform duration-400">
            <h1 className="text-xl md:text-3xl font-medium my-2">Plan Profesional</h1>
            <p className="text-xl">
              <span className="text-8xl font-bold">$59</span>/mes
            </p>
            <p className="text-xl md:text-2xl my-2">Herramientas avanzadas y análisis de IA</p>
            <button className="bg-blue-800 text-white text-2xl my-5 px-5 py-2 rounded-lg font-medium hover:cursor-pointer hover:bg-cyan-600">
              Comenzar
            </button>
          </div>

          <div className="flex-shrink-0 w-75 md:w-1/3 max-w-md text-center border-2 border-gray-300 rounded-lg p-6 shadow-lg md:hover:scale-105 transition-transform duration-400">
            <h1 className="text-xl md:text-3xl font-medium my-2">Plan Empresarial</h1>
            <p className="text-xl">
              <span className="text-8xl font-bold">$99</span>/mes
            </p>
            <p className="text-xl md:text-2xl my-2">Para grandes instituciones características premium</p>
            <button className="bg-blue-800 text-white text-2xl my-5 px-5 py-2 rounded-lg font-medium hover:cursor-pointer hover:bg-cyan-600">
              Comenzar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}