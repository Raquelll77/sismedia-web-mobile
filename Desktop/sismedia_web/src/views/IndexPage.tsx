
import BannerEmpresasComponent from "../components/BannerEmpresasComponent";
import BlogComponent from "../components/BlogComponent";
import ContactoComponent from "../components/ContactoComponent";
import CountComponent from "../components/CounComponent";
import PlanesSuscripcionComponent from "../components/PlanesSuscripcionComponent";
import TestimonioComponent from "../components/TestimonioComponent";
import Caracteristicas from "./Caracteristicas";

import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';




export default function IndexPage() {
    return (
        <>  

                <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="col-span-7 flex flex-col justify-center text-center md:text-left"
                >
                <div className="md:grid md:grid-cols-12 md:gap-8 flex flex-col-reverse items-center px-4 md:px-16 py-10 md:py-20 bg-white md:mb-10">
                {/* Columna de texto */}
                    <div className="col-span-7 flex flex-col justify-center text-center md:text-left">
                        <h1 className="text-lg md:text-5xl font-black text-blue-800 leading-snug tracking-tight mb-4">
                        Transforma tu práctica médica con nuestro sistema de expediente digital e inteligencia artificial
                        </h1>
                        {/* <h3 className="text-base md:text-2xl text-gray-700 mt-4 mb-6">
                        Optimiza la gestión de tus pacientes con nuestra solución innovadora impulsada por IA
                        </h3> */}
                        
                        <h3 className="text-base md:text-2xl text-gray-700 mt-4 mb-6 h-[60px]">
                        <Typewriter
                            words={[
                            'Optimiza la gestión de tus pacientes...',
                            'Inteligencia artificial al servicio médico...',
                            'Transforma tu consulta en minutos...',
                            ]}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={50}
                            deleteSpeed={30}
                            delaySpeed={1500}
                        />
                        </h3>
                        <button className="bg-blue-800 text-white px-4 py-2 md:px-6 md:py-4 text-base md:text-3xl font-bold rounded-lg hover:bg-cyan-600 transition duration-300 w-fit mx-auto md:mx-0 md:hover:cursor-pointer">
                        Prueba Gratis
                        </button>
                    </div>

                    <div className="col-span-5 mb-6 md:mb-0">
                        {/* <img
                        src="HistorialMedicoHeader.webp"
                        alt="historial-medico"
                        className="w-full max-w-sm md:max-w-full mx-auto mb-4"
                        /> */}

                        <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto mb-4 rounded-2xl shadow-xl transition duration-500 hover:scale-105"
                        >
                        <source src="/expedientemedico2.mp4" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                        </video>
                    </div>
                    
                    
                    
                </div>

                <CountComponent/>
                
                </motion.div>

            


            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            >
            <Caracteristicas />
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            >
            <BannerEmpresasComponent />
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            >               
            <PlanesSuscripcionComponent/>
            </motion.div> 

            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            ><BlogComponent/></motion.div>
            
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            >
                <div className="mx-auto grid md:grid-cols-2 mt-20">
                <TestimonioComponent/>
                <ContactoComponent />
                </div>

            </motion.div>
            
            
           
           
        
        </>
    );
  }
  