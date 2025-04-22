import React, { useState, useRef } from 'react';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import visaIcon from '/visa.png'; // Asegúrate de tener estos iconos en tu proyecto
import mastercardIcon from '/Mastercard.png';

export default function PlanesSuscripcionComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const modalRef = useRef<HTMLDivElement>(null); // Referencia para el modal
  const containerRef = useRef<HTMLDivElement>(null); // Referencia para el contenedor de las cards

  const handlePlanSelection = (plan: string) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setError('');
  };

  // Cerrar el modal si se hace clic fuera de él
  const handleOutsideClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleCloseModal();
    }
  };

  const handlePaymentSuccess = () => {
    iziToast.success({
      title: '¡Éxito!',
      message: `Pago realizado con éxito para el plan ${selectedPlan}. ¡Gracias por tu compra!`,
      position: 'topCenter',
      timeout: 5000,
    });
    setIsModalOpen(false);
    setIsLoading(false);
  };

  const handlePaymentError = () => {
    iziToast.error({
      title: 'Error',
      message: `Hubo un problema con tu pago. Por favor, revisa los datos e intenta nuevamente.`,
      position: 'topCenter',
      timeout: 5000,
    });
    setIsLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      const isSuccess = Math.random() > 0.2;
      if (isSuccess) {
        handlePaymentSuccess();
      } else {
        setError('Hubo un problema con la tarjeta. Intenta nuevamente.');
        handlePaymentError();
      }
    }, 2000);
  };

  // Función para desplazar las cards
  const scroll = (scrollOffset: number) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div className="mx-auto px-4 md:my-50">
      <h1 className="text-3xl md:text-5xl font-bold text-blue-800 mb-10 text-center">
        Planes de Suscripción
      </h1>

      <div className="relative">
        {/* Flechas de navegación para móviles */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full shadow md:hidden z-10"
          onClick={() => scroll(-300)}
        >
          {'<'}
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full shadow md:hidden z-10"
          onClick={() => scroll(300)}
        >
          {'>'}
        </button>

        {/* Contenedor de cards (responsive) */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto scroll-smooth gap-6 pb-4 md:overflow-x-visible md:justify-center"
        >
          {/* Card: Plan Básico */}
          <div className="flex-shrink-0 w-[280px] md:w-1/3 max-w-md text-center border-2 border-gray-300 rounded-lg p-5 shadow-lg bg-white md:hover:scale-105 ease-in-out duration-300">
            <h2 className="text-xl md:text-3xl font-semibold mb-2">Plan Básico</h2>
            <p className="text-xl mb-3"><span className="text-5xl font-bold">$29</span>/mes</p>
            <p className="text-base md:text-lg mb-5">Funciones esenciales para pequeñas prácticas</p>
            <button className="bg-blue-800 text-white text-lg px-5 py-2 rounded-lg hover:bg-cyan-600 transition md:hover:cursor-pointer" onClick={() => handlePlanSelection('Básico')}>Comenzar</button>
          </div>

          {/* Card: Plan Profesional */}
          <div className="flex-shrink-0 w-[280px] md:w-1/3 max-w-md text-center border-2 border-gray-300 rounded-lg p-5 shadow-lg bg-white md:hover:scale-105 ease-in-out duration-300">
            <h2 className="text-xl md:text-3xl font-semibold mb-2">Plan Profesional</h2>
            <p className="text-xl mb-3"><span className="text-5xl font-bold">$59</span>/mes</p>
            <p className="text-base md:text-lg mb-5">Herramientas avanzadas y análisis de IA</p>
            <button className="bg-blue-800 text-white text-lg px-5 py-2 rounded-lg hover:bg-cyan-600 transition md:hover:cursor-pointer" onClick={() => handlePlanSelection('Profesional')}>Comenzar</button>
          </div>

          {/* Card: Plan Empresarial */}
          <div className="flex-shrink-0 w-[280px] md:w-1/3 max-w-md text-center border-2 border-gray-300 rounded-lg p-5 shadow-lg bg-white md:hover:scale-105 ease-in-out duration-300">
            <h2 className="text-xl md:text-3xl font-semibold mb-2">Plan Empresarial</h2>
            <p className="text-xl mb-3"><span className="text-5xl font-bold">$99</span>/mes</p>
            <p className="text-base md:text-lg mb-5">Para grandes instituciones, características premium</p>
            <button className="bg-blue-800 text-white text-lg px-5 py-2 rounded-lg hover:bg-cyan-600 transition md:hover:cursor-pointer" onClick={() => handlePlanSelection('Empresarial')}>Comenzar</button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-20"
          onClick={handleOutsideClick} // Añadir el manejador de clics fuera del modal
        >
          <div
            ref={modalRef} // Referencia para el modal
            className="bg-white p-8 rounded-lg w-[90%] md:w-[400px]"
          >
            <h2 className="text-2xl font-bold mb-5">Formulario de Pago</h2>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="paymentMethod" className="block text-sm font-semibold">Método de Pago</label>
                <select
                  id="paymentMethod"
                  className="w-full p-2 border-2 border-gray-300 rounded-lg"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                >
                  <option value="creditCard">Tarjeta de Crédito</option>
                  <option value="paypal">PayPal</option>
                </select>
              </div>

              {paymentMethod === 'creditCard' && (
                <>
                  <div className="mb-4">
                    <label htmlFor="cardNumber" className="block text-sm font-semibold">Número de Tarjeta</label>
                    <div className="flex items-center border-2 border-gray-300 rounded-lg p-2">
                      <input
                        type="text"
                        id="cardNumber"
                        className="w-full"
                        placeholder="XXXX XXXX XXXX XXXX"
                        pattern="\d{4} \d{4} \d{4} \d{4}"
                        required
                      />
                      <img src={visaIcon} alt="Visa" className="h-6 ml-2" />
                      <img src={mastercardIcon} alt="Mastercard" className="h-6 ml-2" />
                    </div>
                  </div>
                  <div className="mb-4 flex gap-2">
                    <div className="w-1/2">
                      <label htmlFor="expiryDate" className="block text-sm font-semibold">Fecha de Expiración</label>
                      <input
                        type="text"
                        id="expiryDate"
                        className="w-full p-2 border-2 border-gray-300 rounded-lg"
                        placeholder="MM/YY"
                        pattern="\d{2}/\d{2}"
                        required
                      />
                    </div>
                    <div className="w-1/2">
                      <label htmlFor="cvv" className="block text-sm font-semibold">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        className="w-full p-2 border-2 border-gray-300 rounded-lg"
                        placeholder="XXX"
                        pattern="\d{3}"
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              {paymentMethod === 'paypal' && (
                <div className="mb-4">
                  <p className="text-center">Redirigiendo a PayPal...</p>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-cyan-600 transition"
                disabled={isLoading}
              >
                {isLoading ? 'Procesando...' : paymentMethod === 'paypal' ? 'Ir a PayPal' : 'Realizar Pago'}
              </button>
            </form>

            {error && (
              <div className="text-red-600 mt-4 text-sm text-center">
                {error}
              </div>
            )}

            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-xl text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
