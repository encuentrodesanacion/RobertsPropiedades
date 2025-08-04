// src/pages/NovedadInversionRentablePage.tsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para la navegación

const NovedadInversionRentablePage: React.FC = () => {
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
          Inversión Segura: Departamentos con Alta Rentabilidad
        </h1>
        <p className="text-xl text-gray-700 mb-8 text-center">
          Analizamos el mercado y te presentamos las mejores opciones para
          invertir en bienes raíces.
        </p>

        {/* Imagen destacada de la novedad */}
        <div className="mb-8 rounded-lg shadow-xl overflow-hidden">
          <img
            src="https://placehold.co/1000x600/2563EB/FFFFFF?text=Inversion+Rentable+Grafico"
            alt="Gráfico de inversión rentable"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Contenido detallado de la novedad */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Maximiza tus Ganancias con Inversiones Inteligentes
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            El sector inmobiliario sigue siendo uno de los pilares más sólidos
            para la inversión a largo plazo. En esta novedad, te ofrecemos un
            análisis profundo sobre las oportunidades actuales en departamentos
            con alta rentabilidad, ideales para diversificar tu portafolio y
            asegurar un flujo de ingresos pasivos.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Hemos identificado zonas estratégicas con crecimiento proyectado,
            alta demanda de arriendo y plusvalía constante. Te presentamos casos
            de éxito y te explicamos cómo nuestra asesoría puede guiarte para
            tomar las mejores decisiones de inversión, desde la selección de la
            propiedad hasta la gestión del arriendo.
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Análisis de zonas con alta demanda de arriendo.</li>
            <li>Proyecciones de rentabilidad y plusvalía.</li>
            <li>Opciones de departamentos nuevos y usados.</li>
            <li>Asesoría en financiamiento para inversores.</li>
            <li>Gestión integral de arriendo y administración.</li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            No dejes pasar la oportunidad de hacer crecer tu patrimonio de forma
            segura y eficiente con las mejores inversiones inmobiliarias.
          </p>
        </div>

        {/* Sección de Contacto Rápido */}
        <div className="text-center bg-blue-50 p-6 rounded-lg shadow-inner mt-12">
          <p className="text-2xl md:text-3xl font-extrabold text-amber-600 mb-4">
            ¿Listo para explorar oportunidades de inversión?
          </p>
          <button
            onClick={() => navigate("/#contacto")} // Navega a la sección de contacto en la HomePage
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-xl transition-colors duration-300 transform hover:scale-105 shadow-lg"
          >
            Conocer Más
          </button>
          <p className="text-sm text-gray-600 mt-4">
            Te ayudamos a encontrar tu próxima gran inversión.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NovedadInversionRentablePage; // Exportación por defecto
