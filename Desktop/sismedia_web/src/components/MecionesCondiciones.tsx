export default function MencionesCondiciones() {
  return (
    <div className="max-w-5xl mx-auto px-5 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Menciones Legales y Condiciones de Uso</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Identificación del Titular del Sitio Web</h2>
        <p className="text-justify">
          Nombre de la Empresa: <strong>SISMEDIA</strong><br />
          Número de Registro: <strong>RTN-05031029202839</strong><br />
          Correo Electrónico: gruposistemdia@sismedia.com <br />
          Teléfono: <strong>+504 2525-4040</strong>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Propiedad Intelectual</h2>
        <p className="text-justify">
          Todos los contenidos presentes en este sitio web, incluyendo textos, gráficos, logotipos, código fuente,
          modelos de inteligencia artificial y cualquier otro material (en adelante, el "Contenido"), son propiedad
          exclusiva de SISMEDIA o de sus licenciantes y están protegidos por las leyes de propiedad intelectual aplicables
          en Honduras y a nivel internacional. Queda estrictamente prohibida su reproducción, distribución, modificación o
          cualquier forma de uso sin la autorización previa y por escrito de SISMEDIA.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Limitación de Responsabilidad</h2>
        <p className="text-justify">
          La información y los diagnósticos generados por nuestra inteligencia artificial se proporcionan con fines informativos
          y como una herramienta de apoyo para la gestión de expedientes médicos. Estos resultados no constituyen asesoramiento
          médico profesional y no deben interpretarse como un sustituto de la consulta y el criterio clínico de un profesional
          de la salud debidamente cualificado. SISMEDIA no garantiza la exactitud, integridad o utilidad de los diagnósticos
          generados por la IA y no asume responsabilidad alguna por las decisiones médicas tomadas basándose en dicha información.
        </p>
      </section>

      <h2 className="text-2xl font-bold mb-4 mt-10 text-center">Condiciones Legales de Uso</h2>

      {[
        {
          title: '1. Aceptación de los Términos',
          content:
            'Al acceder y utilizar este sitio web y los servicios ofrecidos por SISMEDIA, usted (en adelante, el "Usuario") acepta estar legalmente vinculado por estas Condiciones Legales de Uso y por nuestra Política de Privacidad.'
        },
        {
          title: '2. Uso del Servicio',
          content:
            'El servicio de expediente médico con diagnóstico basado en IA está diseñado para optimizar la gestión de información médica y proporcionar una asistencia inicial en el análisis de datos. El Usuario reconoce que los diagnósticos generados por la IA son una herramienta complementaria y no reemplazan la evaluación médica profesional.'
        },
        {
          title: '3. Privacidad y Protección de Datos',
          content:
            'La recopilación, el tratamiento y la protección de los datos personales del Usuario se rigen por nuestra Política de Privacidad, la cual forma parte integral de estas Condiciones Legales de Uso.'
        },
        {
          title: '4. Conducta del Usuario',
          content:
            'El Usuario se compromete a no realizar acciones que puedan comprometer la seguridad, funcionalidad o integridad del sitio web y del servicio.'
        },
        {
          title: '5. Enlaces a Terceros',
          content:
            'El sitio web podría contener enlaces a recursos de terceros. SISMEDIA no se responsabiliza por el contenido ni las políticas de privacidad de dichos sitios web externos.'
        },
        {
          title: '6. Modificaciones de las Condiciones',
          content:
            'SISMEDIA se reserva el derecho de modificar estas Condiciones Legales de Uso en cualquier momento. Se recomienda revisar periódicamente estos términos.'
        },
        {
          title: '7. Ley Aplicable y Jurisdicción',
          content:
            'Estas Condiciones Legales de Uso se regirán de acuerdo con las leyes de la República de Honduras. Cualquier disputa se resolverá en los tribunales de Tegucigalpa.'
        },
        {
          title: '8. Contacto',
          content:
            'Para consultas sobre estas Condiciones, puede contactar a SISMEDIA a través de los datos proporcionados en la sección de Identificación.'
        },
      ].map((section, index) => (
        <section key={index} className="mb-6">
          <h3 className="font-semibold text-lg mb-1">{section.title}</h3>
          <p className="text-justify text-sm">{section.content}</p>
        </section>
      ))}
    </div>
  );
}
