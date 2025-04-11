import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mx-auto">
      <div className="flex items-center justify-between px-5 py-2 sm:px-10 md:px-15 md:pb-2 shadow-lg">
        
        {/* Logo (ocultar cuando el menú esté abierto en móvil) */}
        <Link to="/">
          <img
            className={`w-32 sm:w-40 md:w-48 ${isMenuOpen ? 'hidden' : 'block'}`}
            src="LogoSismediaHorizontal.png"
            alt="logoSismedia"
          />
        </Link>

        {/* Icono de menú hamburguesa */}
        <div className={`md:hidden ${isMenuOpen ? '' : 'block'} absolute top-5 right-5`}>
          <button onClick={toggleMenu} className="text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menú de navegación */}
        <nav
          className={`md:flex md:gap-8 ${isMenuOpen ? 'block pt-4 mt-8' : 'hidden'} sm:block w-full text-center md:justify-end`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-700 uppercase font-bold block mb-2 sm:mb-0'
                : 'text-black uppercase font-bold block mb-2 sm:mb-0'
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/caracteristicas"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-700 uppercase font-bold block mb-2 sm:mb-0'
                : 'text-black uppercase font-bold block mb-2 sm:mb-0'
            }
          >
            Características
          </NavLink>
          <NavLink
            to="/suscripcion"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-700 uppercase font-bold block mb-2 sm:mb-0'
                : 'text-black uppercase font-bold block mb-2 sm:mb-0'
            }
          >
            Planes de Suscripción
          </NavLink>
          <NavLink
            to="/contactanos"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-700 uppercase font-bold block mb-2 sm:mb-0'
                : 'text-black uppercase font-bold block mb-2 sm:mb-0'
            }
          >
            Contáctanos
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
