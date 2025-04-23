import { useRef } from 'react';
import { useCountUp } from 'react-countup';

export default function CountComponent() {
  const ref1 = useRef(null) as unknown as React.RefObject<HTMLElement>;
  const ref2 = useRef(null) as unknown as React.RefObject<HTMLElement>;
  const ref3 = useRef(null) as unknown as React.RefObject<HTMLElement>;

  useCountUp({ ref: ref1, end: 500 });
  useCountUp({ ref: ref2, end: 30 });
  useCountUp({ ref: ref3, end: 99.9, decimals: 1 });

  return (
    <div className="w-screen -mx-4 md:-mx-10 lg:-mx-16 bg-blue-50 text-center py-10 grid md:grid-cols-3 gap-6 text-blue-800 font-bold text-3xl">
      <div>
        <span ref={ref1} />+
        <p className="text-sm font-normal text-gray-600">Pacientes gestionados</p>
      </div>
      <div>
        <span ref={ref2} />+
        <p className="text-sm font-normal text-gray-600">Clínicas activas</p>
      </div>
      <div>
        <span ref={ref3} />%
        <p className="text-sm font-normal text-gray-600">Disponibilidad del sistema</p>
      </div>
    </div>
  );
}
