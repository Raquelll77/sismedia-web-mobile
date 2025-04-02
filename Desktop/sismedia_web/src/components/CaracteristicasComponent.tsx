
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

export default function CaracteristicasComponent() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="md:mx-20 mt-10">
      <div className="mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 md:mt-4">
          <div className="flex flex-col items-center justify-center m:p-15 text-center" data-aos="fade-up">
              <img className="w-25 h-25 md:w-40 md:h-40" src="historial-medico-icono-azul.png" alt="historial-medico" />
              <h3 className="mt-2 text-lg md:text-2xl text-center">Gestion eficiente de expediente médico </h3>
          </div>
          <div className="flex flex-col items-center justify-center m:p-15 text-center" data-aos="fade-up">
              <img className="w-25 h-25 md:w-40 md:h-40" src="cerebro-humano-icono.png" alt="cerebro-humano" /> 
              <h3 className="mt-2 text-lg md:text-2xl text-center">Diagnosticos realizados por IA</h3>
          </div>
          <div className="flex flex-col items-center justify-center m:p-15 text-center" data-aos="fade-up">
                <img className="w-25 h-25 md:w-40 md:h-40" src="acceso-remoto-icono.png" alt="acceso-remoto" />
                <h3 className="mt-2 text-lg md:text-2xl text-center">Acceso remoto a los datos</h3>
          </div>
          <div className="flex flex-col items-center justify-center m:p-15 text-center" data-aos="fade-up">
              <img className="w-25 h-25 md:w-40 md:h-40" src="seguro-icono.png" alt="seguro-icono" />
              <h3 className="mt-2 text-lg md:text-2xl text-center">Seguridad y privacidad</h3>
          </div>
        </div>

        <h1 className="text-2xl md:text-4xl text-center font-bold my-5">Características</h1>

        <div className="grid md:grid-cols-3 md:gap-7">
          <div className="flex flex-col items-center justify-center m:p-15 text-center" data-aos="fade-right">
            <img className="w-25 h-25 md:w-40 md:h-40" src="expediente-medico-icono.png" alt="expediente-medico" />
            <h2 className="mt-2 text-lg md:text-2xl text-center font-bold">Expedientes Medicos Digitales</h2>
            <p className="mt-2 text-md md:text-2xl text-center">Gestion de informacion clínica de manera segura</p>
          </div>
          <div className="flex flex-col items-center justify-center m:p-15 text-center" data-aos="fade-up">
            <img className="w-25 h-25 md:w-40 md:h-40" src="cerebro-humano-icono.png" alt="cerebro-humano" />
            <h2 className="mt-2 text-lg md:text-2xl text-center font-bold">Inteligencia Artificial</h2>
            <p className="mt-2 text-md md:text-2xl text-center">Herramientas avanzadas y recomendaciones sobre posibles tratamientos</p>
          </div>
          <div className="flex flex-col items-center justify-center m:p-15 text-center" data-aos="fade-left">
            <img className="w-25 h-25 md:w-40 md:h-40" src="experiencia-de-usuario-icono.png" alt="experiencia-usuario" />
            <h2 className="mt-2 text-lg md:text-2xl text-center font-bold">Interfaz Amigable</h2>
            <p className="mt-2 text-md md:text-2xl text-center">Navegación intuitiva y fácil de entender, diseñada para cualquier usuario, sin importar su nivel de experiencia</p>
        </div>

        </div>
      </div>
    </div>
  );
}