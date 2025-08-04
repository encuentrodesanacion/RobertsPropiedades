// src/pages/AboutUsPage.tsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para la navegación

const AboutUsPage: React.FC = () => {
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
          Sobre Nosotros
        </h1>
        <p className="text-xl text-gray-700 mb-8 text-center">
          Conoce la historia, misión y valores que nos impulsan a ser tu socio
          de confianza en bienes raíces.
        </p>

        {/* Contenido detallado de la sección "Sobre Nosotros" */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Nuestra Historia y Compromiso
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Inmobiliaria ROBERTS nació de la pasión por conectar a las personas
            con sus espacios ideales. Desde nuestros inicios, nos hemos dedicado
            a ofrecer un servicio inmobiliario de excelencia, basado en la
            transparencia, la ética y el profundo conocimiento del mercado.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Creemos firmemente que cada propiedad tiene una historia y cada
            cliente un sueño. Nuestra misión es hacer realidad esos sueños,
            brindando asesoría personalizada y soluciones integrales, ya sea que
            busques comprar, vender o arrendar.
          </p>

          <h3 className="text-2xl font-bold text-blue-600 mb-3 mt-6">
            Nuestra Misión
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Ser el puente confiable entre las personas y sus objetivos
            inmobiliarios, ofreciendo un servicio de calidad superior que supere
            las expectativas y construya relaciones duraderas.
          </p>

          <h3 className="text-2xl font-bold text-blue-600 mb-3">
            Nuestra Visión
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Consolidarnos como la inmobiliaria líder en el mercado, reconocida
            por nuestra innovación, profesionalismo y el impacto positivo en la
            vida de nuestros clientes.
          </p>

          <h3 className="text-2xl font-bold text-blue-600 mb-3">
            Nuestros Valores
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>
              **Transparencia:** Actuamos con honestidad y claridad en todas
              nuestras operaciones.
            </li>
            <li>
              **Profesionalismo:** Contamos con un equipo altamente capacitado y
              comprometido.
            </li>
            <li>
              **Confianza:** Construimos relaciones sólidas basadas en el
              respeto mutuo.
            </li>
            <li>
              **Innovación:** Buscamos constantemente nuevas y mejores formas de
              servirte.
            </li>
            <li>
              **Orientación al Cliente:** Tu satisfacción es nuestra máxima
              prioridad.
            </li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            En Inmobiliaria ROBERTS, no solo transaccionamos propiedades,
            construimos futuros.
          </p>
        </div>

        {/* Sección de Contacto Rápido */}
        <div className="text-center bg-blue-50 p-6 rounded-lg shadow-inner mt-12">
          <p className="text-2xl md:text-3xl font-extrabold text-amber-600 mb-4">
            ¿Quieres saber más de nosotros?
          </p>
          <button
            onClick={() => navigate("/#contacto")} // Navega a la sección de contacto en la HomePage
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-xl transition-colors duration-300 transform hover:scale-105 shadow-lg"
          >
            Contáctanos
          </button>
          <p className="text-sm text-gray-600 mt-4">
            Estamos listos para escucharte.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage; // Exportación por defecto
