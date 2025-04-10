import { Link } from 'react-router-dom';

export default function Footer() {
    return (
      <footer className="bg-gray-100 text-black mt-10 border-t">
        <div className="max-w-screen-xl mx-auto px-5 sm:px-10 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          
          {/* Logo o Descripción */}
          <div>
            <img
              src="LogoSismediaHorizontal.png"
              alt="LogoSismedia"
              className="mx-auto sm:mx-0 w-32 sm:w-40 mb-2"
            />
            <p className="text-sm">
              © {new Date().getFullYear()} Sismedia. Todos los derechos reservados.
            </p>
          </div>
  
          {/* Enlaces de navegación */}
          <div>
            <h3 className="font-bold mb-2 uppercase">Navegación</h3>
            <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Inicio</Link></li>
            <li><Link to="/caracteristicas" className="hover:underline">Características</Link></li>
            <li><Link to="/suscripcion" className="hover:underline">Planes</Link></li>
            <li><Link to="/contactanos" className="hover:underline">Contáctanos</Link></li>
            <li><Link to="/legales" className="hover:underline">Términos y condiciones</Link></li>
            </ul>

          </div>
  
          {/* Redes sociales */}
          <div>
            <h3 className="font-bold mb-2 uppercase">Síguenos</h3>
            <div className="flex justify-center sm:justify-start gap-4">
              <a href="#" className="hover:text-blue-500" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12A10 10 0 1 0 12 22v-7H9v-3h3v-2c0-2.21 1.34-3.42 3-3.42h2v3h-1.5c-.83 0-1.5.67-1.5 1.5v1.92H18l-.5 3H15v7a10 10 0 0 0 7-10z" />
                </svg>
              </a>
              <a href="#" className="hover:text-pink-500" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-2a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  