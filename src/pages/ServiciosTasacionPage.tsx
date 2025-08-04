// src/pages/ServiciosTasacionPage.tsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para la navegación

const ServiciosTasacionPage: React.FC = () => {
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
          Servicios de Tasaciones Profesionales
        </h1>
        <p className="text-xl text-gray-700 mb-8 text-center">
          Obtén una valoración precisa y justa de tu propiedad con nuestros
          expertos certificados.
        </p>

        {/* Contenido específico para la página de tasación */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Valoración Experta para tu Propiedad
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Una tasación profesional es fundamental para conocer el valor real
            de tu inmueble, ya sea para una venta, compra, herencia o cualquier
            otro propósito legal o financiero. Nuestro equipo de tasadores
            cuenta con amplia experiencia y certificaciones para ofrecerte un
            informe detallado y objetivo.
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Tasaciones residenciales, comerciales e industriales.</li>
            <li>Informes detallados y fundamentados.</li>
            <li>Análisis de mercado comparativo.</li>
            <li>Cumplimiento con normativas y estándares vigentes.</li>
            <li>Asesoría personalizada sobre el valor de tu propiedad.</li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Confía en Inmobiliaria ROBERTS para obtener una tasación que te
            brinde la seguridad y la información necesaria para tomar las
            mejores decisiones.
          </p>
        </div>

        {/* Sección de Contacto Rápido */}
        <div className="text-center bg-blue-50 p-6 rounded-lg shadow-inner mt-12">
          <p className="text-2xl md:text-3xl font-extrabold text-amber-600 mb-4">
            ¿Necesitas una tasación?
          </p>
          <button
            onClick={() => navigate("/#contacto")} // Navega a la sección de contacto en la HomePage
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-xl transition-colors duration-300 transform hover:scale-105 shadow-lg"
          >
            Solicitar Tasación
          </button>
          <p className="text-sm text-gray-600 mt-4">
            Contáctanos para agendar una visita y obtener tu informe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiciosTasacionPage; // Exportación por defecto
