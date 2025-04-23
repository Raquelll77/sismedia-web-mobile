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
    <section className="relative bg-gradient-to-br from-white to-blue-50/10 py-16 px-4 md:px-20">
      {/* Fondo decorativo opcional */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/icono-medico-decorativo.svg')] bg-no-repeat bg-right-top opacity-5 hidden md:block pointer-events-none" />

      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-800 mb-16">Características</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              img: 'historial-medico-icono-azul.png',
              titulo: 'Gestión eficiente de expediente médico',
              texto: 'Accede y organiza historiales clínicos con rapidez, sin complicaciones.',
              anim: 'fade-right',
            },
            {
              img: 'cerebro-humano-icono.png',
              titulo: 'Diagnósticos impulsados por IA',
              texto: 'Recibe sugerencias automáticas basadas en inteligencia artificial médica.',
              anim: 'fade-left',
            },
            {
              img: 'acceso-remoto-icono.png',
              titulo: 'Acceso remoto y en tiempo real',
              texto: 'Consulta expedientes y resultados desde cualquier lugar con conexión segura.',
              anim: 'fade-right',
            },
            {
              img: 'seguro-icono.png',
              titulo: 'Privacidad y seguridad avanzada',
              texto: 'Protege los datos clínicos con encriptación y controles de acceso.',
              anim: 'fade-left',
            },
            {
              img: 'expediente-medico-icono.png',
              titulo: 'Expedientes digitales centralizados',
              texto: 'Centraliza toda la información médica en un solo sistema integrado.',
              anim: 'fade-right',
            },
            {
              img: 'experiencia-de-usuario-icono.png',
              titulo: 'Interfaz fácil de usar',
              texto: 'Diseñada para todos los niveles: intuitiva, clara y adaptable.',
              anim: 'fade-left',
            },
          ].map((item, i) => (
            <div key={i} data-aos={item.anim} className="flex gap-5 items-start">
              <img src={item.img} alt={item.titulo} className="w-16 h-16 md:w-20 md:h-20" />
              <div>
                <h3 className="text-lg md:text-2xl font-semibold text-blue-900 mb-2">{item.titulo}</h3>
                <p className="text-sm md:text-base text-gray-600">{item.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
