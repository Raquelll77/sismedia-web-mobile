import { useState } from "react";

export default function TestimonioComponent() {
  const testimonios = [
    {
      nombre: "Dr. Laura Mantes",
      imagen: "testimonio-laura.jpg", // Reemplaza con la URL de la imagen
      texto: "'El diagnóstico de SISMEDIA ha sido muy útil. Altamente recomendado.'",
    },
    {
      nombre: "Dr. Javier Rios",
      imagen: "testimonio-javier.jpg", // Reemplaza con la URL de la imagen
      texto: "'La integración con IA ha mejorado significativamente el diagnóstico y atención al paciente.'",
    },
    {
      nombre: "Dr. Mariana Torres",
      imagen: "testimonio-mariana.jpg", // Reemplaza con la URL de la imagen
      texto: "'Excelente herramienta para gestionar pacientes, me ha facilitado mucho el trabajo diario.'",
    },
  ];

  const [currentTestimonio, setCurrentTestimonio] = useState(0);

  const nextTestimonio = () => {
    setCurrentTestimonio((prev) => (prev + 2) % testimonios.length);
  };

  const prevTestimonio = () => {
    setCurrentTestimonio(
      (prev) => (prev - 2 + testimonios.length) % testimonios.length
    );
  };

  return (
    <div className="mx-auto mb-10 w-full"> {/* Ajuste para móvil */}
      <h1 className="text-3xl md:text-5xl font-bold text-blue-800 mb-10 text-center">Testimonios</h1> {/* Ajuste para móvil */}
      <div className="flex flex-col md:flex-row items-center justify-center"> {/* Ajuste para móvil */}
        <button
          onClick={prevTestimonio}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition mb-4 md:mb-0 md:mr-4" // Ajuste para móvil
        >
          {"<"}
        </button>

        <div className="flex flex-col md:flex-row gap-4 max-w-md"> {/* Ajuste para móvil */}
          {/* Mostrar 2 testimonios a la vez */}
          <div className="flex flex-col items-center text-center border-2 border-gray-300 rounded-lg p-6 shadow-lg">
            <img
              className="w-24 h-24 rounded-full mb-4"
              src={testimonios[currentTestimonio].imagen}
              alt={testimonios[currentTestimonio].nombre}
            />
            <h3 className="text-xl font-semibold mb-2">
              {testimonios[currentTestimonio].nombre}
            </h3>
            <p className="text-lg italic">
              {testimonios[currentTestimonio].texto}
            </p>
          </div>

          <div className="flex flex-col items-center text-center border-2 border-gray-300 rounded-lg p-6 shadow-lg">
            <img
              className="w-24 h-24 rounded-full mb-4"
              src={testimonios[(currentTestimonio + 1) % testimonios.length].imagen}
              alt={testimonios[(currentTestimonio + 1) % testimonios.length].nombre}
            />
            <h3 className="text-xl font-semibold mb-2">
              {testimonios[(currentTestimonio + 1) % testimonios.length].nombre}
            </h3>
            <p className="text-lg italic">
              {testimonios[(currentTestimonio + 1) % testimonios.length].texto}
            </p>
          </div>
        </div>

        <button
          onClick={nextTestimonio}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition mt-4 md:mt-0 md:ml-4" // Ajuste para móvil
        >
          {">"}
        </button>
      </div>
    </div>
  );
}