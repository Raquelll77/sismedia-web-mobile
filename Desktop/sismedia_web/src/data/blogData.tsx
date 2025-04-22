// blogData.ts
import { ReactNode } from "react";

export type BlogEntry = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  image: string;
  content: ReactNode;
};

export const blogPosts: BlogEntry[] = [
  {
    slug: "importancia-digitalizar-expediente-clinico",
    title: "La importancia de digitalizar el expediente clínico",
    summary:
      "Descubre cómo los sistemas digitales están transformando la gestión de información médica.",
    date: "20 Abril 2025",
    image: "/importancia-expediente-medico.png",
    content: (
      <div className="space-y-6 text-gray-700 text-lg">
        <p>
          El expediente clínico es una herramienta fundamental en la atención médica. Tradicionalmente, este se manejaba en papel, lo que generaba numerosos problemas: pérdida de información, falta de acceso remoto y dificultad para compartir datos entre médicos.
        </p>
        <div>
          <h3 className="text-2xl font-bold text-blue-800 mb-2">¿Por qué digitalizarlo?</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Accesibilidad:</strong> Los médicos pueden acceder al historial desde cualquier lugar.</li>
            <li><strong>Seguridad:</strong> Datos encriptados, respaldos automáticos.</li>
            <li><strong>Eficiencia:</strong> Se eliminan tareas repetitivas y se agiliza la atención.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-blue-800 mb-2">Casos de éxito</h3>
          <p>
            En países como Estonia y Dinamarca, la digitalización ha mejorado indicadores de salud pública y ha reducido drásticamente los tiempos de atención.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-blue-800 mb-2">Desafíos comunes</h3>
          <p>
            Algunos retos incluyen la resistencia al cambio, la necesidad de capacitación continua y la inversión inicial en tecnología e infraestructura.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-blue-800 mb-2">Conclusión</h3>
          <p>
            Digitalizar no es una moda: es una necesidad para brindar una atención más humana, eficiente y segura.
          </p>
        </div>
      </div>
    ),
  },
  {
    slug: "ia-revoluciona-diagnostico-medico",
    title: "Cómo la inteligencia artificial está revolucionando el diagnóstico médico",
    summary:
      "Casos reales de cómo la IA mejora la atención y la toma de decisiones clínicas.",
    date: "15 Abril 2025",
    image: "/transformacion-expediente-IA.png",
    content: (
      <div className="space-y-6 text-gray-700 text-lg">
        <p>
          La inteligencia artificial (IA) está cambiando el panorama de la medicina moderna. Desde algoritmos que detectan cáncer con precisión hasta asistentes virtuales que ayudan con diagnósticos preliminares, la IA se está convirtiendo en una aliada imprescindible.
        </p>
        <div>
          <h3 className="text-2xl font-bold text-blue-800 mb-2">Aplicaciones reales</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Diagnóstico por imagen:</strong> Algoritmos que detectan anomalías en estudios radiográficos.</li>
            <li><strong>Análisis predictivo:</strong> IA que prevé complicaciones futuras en pacientes crónicos.</li>
            <li><strong>Chatbots médicos:</strong> Asistencia básica al paciente con respuestas rápidas.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-blue-800 mb-2">Casos de éxito</h3>
          <p>
            En hospitales de Japón y Estados Unidos, la IA ha reducido el tiempo de diagnóstico en emergencias y ha mejorado la precisión de los tratamientos.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-blue-800 mb-2">Desafíos éticos</h3>
          <p>
            Surgen preguntas sobre la responsabilidad en caso de error, la privacidad de los datos clínicos y la dependencia tecnológica.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-blue-800 mb-2">Futuro</h3>
          <p>
            Se espera que la IA contribuya aún más en áreas como oncología, neurología y medicina personalizada, identificando patrones invisibles para los humanos.
          </p>
        </div>
      </div>
    ),
  },
  {
    slug: "beneficios-consulta-en-la-nube",
    title: "Beneficios de llevar tu consulta a la nube",
    summary:
      "Explora cómo la nube puede ayudarte a crecer, ser más eficiente y seguro.",
    date: "10 Abril 2025",
    image: "/beneficios-expediente-en-nube.png",
    content: (
      <div className="space-y-6 text-gray-700 text-lg">
        <p>
          La nube se ha convertido en una herramienta esencial en la transformación digital de las clínicas. Permite operar desde cualquier lugar, reduciendo costos y aumentando la eficiencia.
        </p>
        <div>
          <h3 className="text-2xl font-bold text-blue-800 mb-2">¿Qué beneficios obtengo?</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Acceso remoto:</strong> Gestiona tu consulta desde casa o en visitas médicas externas.</li>
            <li><strong>Escalabilidad:</strong> Aumenta funcionalidades sin cambiar de sistema.</li>
            <li><strong>Seguridad avanzada:</strong> Copias de seguridad automáticas y cifrado de datos.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-blue-800 mb-2">Impacto económico</h3>
          <p>
            Se estima que el uso de servicios en la nube reduce hasta un 30% los costos en infraestructura, mantenimiento y personal técnico.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-blue-800 mb-2">Integración con otros sistemas</h3>
          <p>
            Puedes enlazar tu sistema con laboratorios, farmacias, aseguradoras y facturación electrónica de manera simple y centralizada.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-blue-800 mb-2">Conclusión</h3>
          <p>
            Llevar tu consulta a la nube te brinda libertad, seguridad y una ventaja competitiva clave en el mercado actual.
          </p>
        </div>
      </div>
    ),
  },
];
