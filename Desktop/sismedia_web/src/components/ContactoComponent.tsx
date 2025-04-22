export default function ContactoComponent() {
  return (
    <div className="mx-auto container px-4"> {/* Añadido padding horizontal */}
      <h1 className="text-3xl md:text-5xl font-bold text-blue-800 mb-10 text-center">Contáctanos</h1> {/* Ajuste para móvil */}
      <form action="" className="flex flex-col space-y-4">
        <input
          className="p-4 md:p-6 border-2 border-gray-300 w-full text-lg md:text-2xl rounded-lg" // Ajuste para móvil
          type="text"
          placeholder="Nombre"
        />
        <input
          className="p-4 md:p-6 border-2 border-gray-300 w-full text-lg md:text-2xl rounded-lg" // Ajuste para móvil
          type="text"
          placeholder="Correo Electrónico"
        />
        <textarea
          className="p-4 md:px-6 md:pt-6 md:pb-20 border-2 border-gray-300 w-full text-lg md:text-2xl rounded-lg" // Ajuste para móvil
          name=""
          id=""
          placeholder="Mensaje"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-800 text-white px-6 py-4 mt-10 text-lg md:text-2xl font-bold rounded-lg hover:cursor-pointer hover:bg-cyan-600 ml-auto" // Ajuste para móvil
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
}