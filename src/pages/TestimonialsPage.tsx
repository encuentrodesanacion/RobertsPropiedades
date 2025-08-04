// src/pages/TestimonialsPage.tsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para la navegación

const TestimonialsPage: React.FC = () => {
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
          Testimonios
        </h1>
        <p className="text-xl text-gray-700 mb-8 text-center">
          Lo que nuestros clientes satisfechos tienen que decir sobre
          Inmobiliaria ROBERTS.
        </p>

        {/* Contenido detallado de la sección "Testimonios" */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            Experiencias Reales de Clientes Felices
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonio 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <p className="italic text-gray-700 mb-4">
                "Vender mi casa parecía una tarea abrumadora, pero el equipo de
                Inmobiliaria ROBERTS hizo que todo fuera increíblemente fácil.
                Su profesionalismo y dedicación son inigualables. ¡Vendimos en
                tiempo récord y al precio que esperábamos!"
              </p>
              <p className="font-semibold text-blue-800">
                - Andrea G., Vendedora
              </p>
            </div>

            {/* Testimonio 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <p className="italic text-gray-700 mb-4">
                "Encontrar mi primer departamento fue un sueño hecho realidad
                gracias a Inmobiliaria ROBERTS. Me guiaron en cada paso, desde
                la búsqueda hasta la firma. Su asesoría fue clave para tomar la
                mejor decisión."
              </p>
              <p className="font-semibold text-blue-800">
                - Ricardo M., Comprador
              </p>
            </div>

            {/* Testimonio 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <p className="italic text-gray-700 mb-4">
                "Necesitaba arrendar mi propiedad rápidamente y con garantías.
                Inmobiliaria ROBERTS superó mis expectativas, encontrando
                inquilinos excelentes y encargándose de toda la administración.
                ¡Totalmente recomendados!"
              </p>
              <p className="font-semibold text-blue-800">
                - Sofía L., Propietaria
              </p>
            </div>

            {/* Testimonio 4 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <p className="italic text-gray-700 mb-4">
                "La asesoría legal que recibí fue fundamental para sentirme
                seguro en mi inversión. El equipo de abogados de Inmobiliaria
                Éxito es muy competente y resolvió todas mis dudas con
                claridad."
              </p>
              <p className="font-semibold text-blue-800">
                - Javier P., Inversor
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mt-10 text-center">
            Tu satisfacción es nuestra prioridad. Nos enorgullece construir
            relaciones de confianza y ayudarte a alcanzar tus metas
            inmobiliarias.
          </p>
        </div>

        {/* Sección de Contacto Rápido */}
        <div className="text-center bg-blue-50 p-6 rounded-lg shadow-inner mt-12">
          <p className="text-2xl md:text-3xl font-extrabold text-amber-600 mb-4">
            ¿Quieres compartir tu experiencia o iniciar la tuya?
          </p>
          <button
            onClick={() => navigate("/#contacto")} // Navega a la sección de contacto en la HomePage
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-xl transition-colors duration-300 transform hover:scale-105 shadow-lg"
          >
            Contáctanos
          </button>
          <p className="text-sm text-gray-600 mt-4">
            Estamos listos para ayudarte.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage; // Exportación por defecto
