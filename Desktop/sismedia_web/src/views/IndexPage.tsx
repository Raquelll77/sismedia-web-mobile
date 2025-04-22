
import BlogComponent from "../components/BlogComponent";
import ContactoComponent from "../components/ContactoComponent";
import PlanesSuscripcionComponent from "../components/PlanesSuscripcionComponent";
import TestimonioComponent from "../components/TestimonioComponent";
import Caracteristicas from "./Caracteristicas";


export default function IndexPage() {
    return (
        <>
            <div className="md:grid md:grid-cols-12 md:gap-8 flex flex-col-reverse items-center px-4 md:px-16 py-10 md:py-20 bg-white md:mb-20">
            {/* Columna de texto */}
            <div className="col-span-7 flex flex-col justify-center text-center md:text-left">
                <h1 className="text-lg md:text-5xl font-black text-blue-800 leading-snug tracking-tight mb-4">
                Transforma tu práctica médica con nuestro sistema de expediente digital e inteligencia artificial
                </h1>
                <h3 className="text-base md:text-2xl text-gray-700 mt-4 mb-6">
                Optimiza la gestión de tus pacientes con nuestra solución innovadora impulsada por IA
                </h3>
                <button className="bg-blue-800 text-white px-4 py-2 md:px-6 md:py-4 text-base md:text-2xl font-bold rounded-lg hover:bg-cyan-600 transition duration-300 w-fit mx-auto md:mx-0">
                Prueba Gratis
                </button>
            </div>

            {/* Imagen */}
            <div className="col-span-5 mb-6 md:mb-0">
                <img
                src="HistorialMedicoHeader.webp"
                alt="historial-medico"
                className="w-full max-w-sm md:max-w-full mx-auto mb-4"
                />
            </div>
            </div>


            <Caracteristicas />
            <PlanesSuscripcionComponent/>
            <BlogComponent/>
            
            <div className="mx-auto grid md:grid-cols-2 mt-20">
                <TestimonioComponent/>
                <ContactoComponent />
            </div>
           
            
        
        </>
    );
  }
  