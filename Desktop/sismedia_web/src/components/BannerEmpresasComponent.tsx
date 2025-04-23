// BannerEmpresas.tsx
import '../styles/scroll.css';


const logos = [
    "/empresas/mayo-clinic.png",
    "/empresas/cleveland-clinic.png",
    "/empresas/mount-sinai.png",
    "/empresas/cedar-sinai.png",
    "/empresas/johns-hopkins.png",
    "/empresas/kaiser-permanente.png",
    "/empresas/albert-einstein.png",
  ];
  
  export default function BannerEmpresas() {
    return (
      <div className="md:mt-20 overflow-hidden bg-white py-10 border-t border-gray-200">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-800 mb-6">
          Instituciones médicas que confían en nosotros
        </h2>
        <div className="relative w-full">
          <div className="flex gap-12 w-max animate-scroll px-4">
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-12 md:h-16 object-contain hover:grayscale-1 transition duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  // Tailwind CSS custom animation in tailwind.config.js
  // Add this inside `extend`:
  // animation: {
  //   scroll: 'scroll 40s linear infinite',
  // },
  // keyframes: {
  //   scroll: {
  //     '0%': { transform: 'translateX(0)' },
  //     '100%': { transform: 'translateX(-50%)' },
  //   },
  // },
  