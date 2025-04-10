import React, { useState, useEffect } from 'react';

const ConversorDolarLempira: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cantidad, setCantidad] = useState<string>('');
  const [resultado, setResultado] = useState<string | null>(null);
  const [tasaCambio, setTasaCambio] = useState<number | null>(null);

  useEffect(() => {
    const obtenerTasaCambio = async () => {
      try {
        const respuesta = await fetch(`https://v6.exchangerate-api.com/v6/110ae98c468815c6590d3199/latest/USD`);
        const datos = await respuesta.json();
        const tasa = datos.conversion_rates.HNL;
        setTasaCambio(tasa);
      } catch (error) {
        console.error('Error al obtener la tasa de cambio:', error);
      }
    };

    obtenerTasaCambio();
  }, []);

  const convertir = () => {
    const cantidadNumerica = parseFloat(cantidad);
    if (isNaN(cantidadNumerica) || cantidadNumerica <= 0) {
      setResultado('Por favor, ingrese una cantidad válida.');
      return;
    }
    if (tasaCambio) {
      const conversion = (cantidadNumerica * tasaCambio).toFixed(2);
      setResultado(`${cantidadNumerica} USD = ${conversion} HNL`);
    } else {
      setResultado('No se pudo obtener la tasa de cambio.');
    }
  };

  return (
    <>
      {/* Botón flotante */}
      <button
            onClick={() => setIsOpen(true)}
            className="fixed bottom-5 right-5 bg-gray-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-gray-700 z-50 flex items-center gap-2"
            title="Conversor USD a HNL"
            >
            {/* Texto visible solo en pantallas medianas en adelante */}
            <span className="hidden md:block">Conversor Moneda</span>

            {/* Ícono visible siempre */}
            <span className="text-xl">💱</span>
        </button>


      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-xl relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
              aria-label="Cerrar"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4 text-center">Conversor USD a HNL</h2>

            <input
              type="number"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              placeholder="Cantidad en USD"
              className="w-full border px-3 py-2 rounded mb-3"
            />

            <button
              onClick={convertir}
              className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600"
            >
              Convertir
            </button>

            {resultado && (
              <div className="mt-4 text-center font-semibold">
                {resultado}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ConversorDolarLempira;
