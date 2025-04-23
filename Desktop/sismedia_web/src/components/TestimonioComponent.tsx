import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const testimonios = [
  {
    nombre: "Dr. Laura Mantes",
    imagen: "testimonio-laura.jpg",
    texto: "El diagnóstico de SISMEDIA ha sido muy útil. Altamente recomendado.",
    rating: 5,
  },
  {
    nombre: "Dr. Javier Rios",
    imagen: "testimonio-javier.jpg",
    texto:
      "La integración con IA ha mejorado significativamente el diagnóstico y atención al paciente.",
    rating: 4.5,
  },
  {
    nombre: "Dr. Mariana Torres",
    imagen: "testimonio-mariana.jpg",
    texto:
      "Excelente herramienta para gestionar pacientes, me ha facilitado mucho el trabajo diario.",
    rating: 5,
  },
  {
    nombre: "Dr. Pedro Sanchez",
    imagen: "testimonio-pedro.png",
    texto:
      "Gracias a la implementación de historial medico en la nube puedo acceder a la informacion de mis pacientes de donde sea.",
    rating: 4.5,
  },
];

export default function TestimonioComponent() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 2) % testimonios.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill={i < rating ? "currentColor" : "none"}
        />
      ));
  };

  const first = testimonios[current];
  const second = testimonios[(current + 1) % testimonios.length];

  return (
    <div className="mx-auto mb-10 w-full max-w-5xl px-4">
      <h1 className="text-3xl md:text-5xl font-bold text-blue-800 mb-10 text-center">
        Testimonios
      </h1>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {[first, second].map((testimonio, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center border-2 border-gray-300 rounded-lg p-6 shadow-xl bg-white"
            >
              <img
                className="w-24 h-24 rounded-full mb-4 object-cover"
                src={testimonio.imagen}
                alt={testimonio.nombre}
              />
              <h3 className="text-xl font-semibold mb-2">
                {testimonio.nombre}
              </h3>
              <div className="flex justify-center mb-3">{getStars(testimonio.rating)}</div>
              <p className="text-lg italic text-gray-600">
                "{testimonio.texto}"
              </p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
