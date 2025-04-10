import PlanesSuscripcionComponent from "../components/PlanesSuscripcionComponent";

interface Plan {
  name: string;
  price: number;
  features: Record<string, boolean | string>;
}

export default function PlanesSuscripcion() {
  // Definir los planes y sus características detalladas
  const plans: Plan[] = [
    {
      name: 'Plan Básico',
      price: 29,
      features: {
        'Acceso al historial de pacientes': 'Básico',
        'IA para diagnósticos': 'Sencilla',
        'Soporte': 'Email',
        'Generación de reportes médicos': false,
        'Consultas ilimitadas': false,
        'Límite de usuarios': '1 usuario',
        'Integración con otros sistemas de hospitales': false
      }
    },
    {
      name: 'Plan Profesional',
      price: 59,
      features: {
        'Acceso al historial de pacientes': 'Completo',
        'IA para diagnósticos': 'Avanzada',
        'Soporte': '24/7',
        'Generación de reportes médicos': true,
        'Consultas ilimitadas': true,
        'Límite de usuarios': 'Hasta 5 usuarios',
        'Integración con otros sistemas de hospitales': 'Parcial'
      }
    },
    {
      name: 'Plan Empresarial',
      price: 99,
      features: {
        'Acceso al historial de pacientes': 'Completo',
        'IA para diagnósticos': 'Avanzada',
        'Soporte': '24/7 dedicado',
        'Generación de reportes médicos': true,
        'Consultas ilimitadas': true,
        'Límite de usuarios': 'Ilimitado',
        'Integración con otros sistemas de hospitales': 'Completa'
      }
    }
  ];

  // Obtener todas las características únicas de todos los planes
  const allFeatures = Array.from(
    new Set(plans.flatMap(plan => Object.keys(plan.features)))
  );

  return (
    <div className="mx-auto px-4">
      <PlanesSuscripcionComponent/>
      <h1 className="text-2xl md:text-4xl text-center font-bold mb-5 mt-10 md:mt-20">
        Características Planes
      </h1>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Características</th>
              {plans.map((plan) => (
                <th key={plan.name} className="border border-gray-300 px-4 py-2 text-center">{plan.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allFeatures.map((feature) => (
              <tr key={feature}>
                <td className="border border-gray-300 px-4 py-2">{feature}</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="border border-gray-300 px-4 py-2 text-center">
                    {plan.features[feature] !== undefined ? (
                      typeof plan.features[feature] === 'boolean' ? (
                        plan.features[feature] ? '✔' : '×' // Muestra el check o cross para valores booleanos
                      ) : (
                        plan.features[feature] // Muestra el valor como texto (ej. límite de usuarios o IA)
                      )
                    ) : (
                      '×' // Si el plan no tiene esa característica, mostramos una "X"
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
