import { User, Mail, MessageCircle, Phone, Building2 } from "lucide-react";

export default function ContactoComponent() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4">
      <div className="md:mx-20 bg-gradient-to-br from-white to-gray-100 shadow-lg border border-gray-100 pt-2 p-8 rounded-2xl">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-800 mb-8 text-center">Contáctanos</h1>
        <form action="#" className="space-y-6">
          {/* Nombre */}
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" />
            <input
              type="text"
              placeholder="Nombre"
              className="w-full pl-12 pr-4 py-3 md:py-4 rounded-lg border border-blue-800 bg-white text-lg md:text-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            />
          </div>

          {/* Correo */}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" />
            <input
              type="email"
              placeholder="Correo Electrónico"
              className="w-full pl-12 pr-4 py-3 md:py-4 rounded-lg border border-blue-800 bg-white text-lg md:text-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            />
          </div>

          {/* Empresa y Teléfono en una sola fila */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Empresa */}
            <div className="relative">
              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" />
              <input
                type="text"
                placeholder="Empresa"
                className="w-full pl-12 pr-4 py-3 md:py-4 rounded-lg border border-blue-800 bg-white text-lg md:text-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              />
            </div>

            {/* Teléfono */}
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" />
              <input
                type="tel"
                placeholder="Teléfono"
                className="w-full pl-12 pr-4 py-3 md:py-4 rounded-lg border border-blue-800 bg-white text-lg md:text-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              />
            </div>
          </div>

          {/* Mensaje */}
          <div className="relative">
            <MessageCircle className="absolute left-4 top-4 text-blue-600" />
            <textarea
              placeholder="Mensaje"
              className="w-full pl-12 pr-4 pt-4 pb-20 rounded-lg border border-blue-800 bg-white text-lg md:text-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition resize-none"
            />
          </div>

          {/* Botón */}
          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-800 hover:bg-cyan-600 text-white font-bold text-lg md:text-xl px-8 py-3 rounded-lg transition"
            >
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
