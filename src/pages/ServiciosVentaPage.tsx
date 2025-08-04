// src/pages/ServiciosVentaPage.tsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para la navegación

const ServiciosVentaPage: React.FC = () => {
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
          Servicios de Venta de Propiedades
        </h1>
        <p className="text-xl text-gray-700 mb-8 text-center">
          Te ayudamos a vender tu propiedad de forma rápida y al mejor precio,
          con una estrategia de marketing personalizada.
        </p>

        {/* Contenido específico para la página de venta */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Nuestro Enfoque en Ventas
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            En Inmobiliaria ROBERTS, nos dedicamos a maximizar el valor de tu
            propiedad y asegurar una venta rápida y eficiente. Ofrecemos una
            estrategia de marketing 360°, que incluye fotografía profesional,
            tours virtuales, promoción en portales inmobiliarios líderes y redes
            sociales.
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mt-4">
            <li>Valoración de mercado gratuita.</li>
            <li>Marketing digital avanzado.</li>
            <li>Asesoría legal y contractual.</li>
            <li>Gestión integral de visitas y negociaciones.</li>
            <li>Publicación en los principales portales inmobiliarios.</li>
            <li>Reportes de seguimiento y análisis de interesados.</li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Nuestro objetivo es simplificar el proceso de venta para ti,
            garantizando una experiencia sin estrés y resultados óptimos.
          </p>
        </div>

        {/* Sección de Contacto Rápido */}
        <div className="text-center bg-blue-50 p-6 rounded-lg shadow-inner mt-12">
          <p className="text-2xl md:text-3xl font-extrabold text-amber-600 mb-4">
            ¿Listo para vender tu propiedad?
          </p>
          <button
            onClick={() => navigate("/#contacto")} // Navega a la sección de contacto en la HomePage
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-xl transition-colors duration-300 transform hover:scale-105 shadow-lg"
          >
            Agendar Asesoría
          </button>
          <p className="text-sm text-gray-600 mt-4">
            ¡Déjanos ayudarte a alcanzar el éxito!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiciosVentaPage; // Exportación por defecto
