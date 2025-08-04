// src/pages/NovedadVitacuraLujoPage.tsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para la navegación

const NovedadVitacuraLujoPage: React.FC = () => {
  const navigate = useNavigate(); // Inicializa el hook useNavigate

  // Función para manejar el clic del botón "Volver al Inicio"
  const handleGoHome = () => {
    navigate("/"); // Navega a la ruta raíz (inicio)
  };

  return (
    <div className="container mx-auto p-8 bg-gray-50 text-gray-800 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Botón de Retorno al Inicio */}
        <button
          onClick={handleGoHome}
          className="mb-8 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full flex items-center justify-center transition-colors duration-300 shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Volver al Inicio
        </button>
        {/* --- */}

        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6 text-center">
          Nueva Propiedad Exclusiva en Vitacura
        </h1>
        <p className="text-xl text-gray-700 mb-8 text-center">
          Descubre esta impresionante residencia con diseño de vanguardia y
          acabados de lujo.
        </p>

        {/* Imagen destacada de la propiedad */}
        <div className="mb-8 rounded-lg shadow-xl overflow-hidden">
          <img
            src="https://placehold.co/1000x600/60A5FA/FFFFFF?text=Vitacura+Lujo+Interior"
            alt="Interior de Propiedad de Lujo en Vitacura"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Contenido detallado de la novedad */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Un Oasis de Exclusividad y Confort
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Presentamos una oportunidad única para adquirir una de las
            propiedades más destacadas de Vitacura. Esta residencia redefine el
            concepto de lujo y comodidad, con una arquitectura moderna que se
            integra armoniosamente con su entorno y acabados de la más alta
            calidad.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Cada espacio ha sido diseñado pensando en la funcionalidad y el
            bienestar, con amplios salones, cocina gourmet equipada con
            tecnología de punta, y habitaciones en suite que ofrecen privacidad
            y vistas espectaculares. Disfruta de un jardín paisajístico, piscina
            temperada y áreas de entretenimiento que te invitan a vivir
            experiencias inolvidables.
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Diseño arquitectónico de vanguardia.</li>
            <li>Materiales y acabados de lujo.</li>
            <li>Amplios espacios interiores y exteriores.</li>
            <li>Ubicación privilegiada en Vitacura.</li>
            <li>Sistemas de seguridad y automatización integrados.</li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Esta propiedad es ideal para quienes buscan un estilo de vida
            sofisticado en uno de los barrios más exclusivos de Santiago.
          </p>
        </div>

        {/* Sección de Contacto Rápido */}
        <div className="text-center bg-blue-50 p-6 rounded-lg shadow-inner mt-12">
          <p className="text-2xl md:text-3xl font-extrabold text-amber-600 mb-4">
            ¿Interesado en esta propiedad exclusiva?
          </p>
          <button
            onClick={() => navigate("/#contacto")} // Navega a la sección de contacto en la HomePage
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-xl transition-colors duration-300 transform hover:scale-105 shadow-lg"
          >
            Agendar Visita
          </button>
          <p className="text-sm text-gray-600 mt-4">
            ¡No pierdas la oportunidad de conocerla!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NovedadVitacuraLujoPage; // Exportación por defecto
