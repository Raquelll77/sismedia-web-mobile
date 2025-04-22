
export default function Nosotros() {
  return (
    <div className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-800 mb-6">
          Sobre Nosotros
        </h2>
        <p className="text-base md:text-xl text-gray-700 leading-relaxed mb-4">
          Somos una compañía dedicada a revolucionar el sector salud con soluciones tecnológicas innovadoras.
          Nuestro software de historial clínico digital, basado en la nube, permite a clínicas y profesionales de la salud
          llevar un control detallado y seguro del expediente de sus pacientes desde cualquier lugar.
        </p>
        <p className="text-base md:text-xl text-gray-700 leading-relaxed mb-4">
          Incorporamos inteligencia artificial para asistir en el diagnóstico médico, agilizando el proceso de atención y
          mejorando la precisión en la toma de decisiones. Nuestra plataforma está diseñada pensando en la simplicidad, seguridad y eficiencia.
        </p>
        <p className="text-base md:text-xl text-gray-700 leading-relaxed mb-10">
          Con nosotros, transformas tu consulta en una experiencia moderna, segura y centrada en el paciente.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Misión */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <svg className="w-10 h-10 text-blue-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">Misión</h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Nuestra misión es empoderar a los profesionales de la salud mediante herramientas digitales
                inteligentes que optimicen la gestión clínica, fomenten decisiones médicas más acertadas y
                mejoren la experiencia del paciente a través de tecnología accesible y confiable.
              </p>
            </div>
          </div>

          {/* Visión */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <svg className="w-10 h-10 text-blue-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 
                3-1.343 3-3-1.343-3-3-3zm0 12c-4.418 0-8-4-8-9s3.582-9 8-9 
                8 4 8 9-3.582 9-8 9z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">Visión</h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Ser la plataforma líder en América Latina en sistemas de salud digital,
                reconocida por su innovación, precisión diagnóstica asistida por inteligencia artificial y
                su impacto positivo en la transformación del cuidado médico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
