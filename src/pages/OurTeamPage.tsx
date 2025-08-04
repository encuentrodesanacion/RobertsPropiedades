// src/pages/OurTeamPage.tsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para la navegación

const OurTeamPage: React.FC = () => {
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
          Nuestro Equipo
        </h1>
        <p className="text-xl text-gray-700 mb-8 text-center">
          Conoce a los profesionales que hacen posible tu éxito inmobiliario.
        </p>

        {/* Contenido detallado de la sección "Nuestro Equipo" */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Expertos Comprometidos con tus Metas
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            En Inmobiliaria Éxito, nuestro equipo es nuestro mayor activo.
            Contamos con profesionales altamente calificados y apasionados por
            el sector inmobiliario, cada uno aportando su experiencia para
            brindarte el mejor servicio y asesoría.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Miembro del Equipo: Ruben Basay */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <img
                src="https://placehold.co/150x150/60A5FA/FFFFFF?text=Ruben+B."
                alt="Ruben Basay"
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200"
              />
              <h3 className="text-xl font-bold text-blue-700 mb-1">
                Ruben Basay
              </h3>
              <p className="text-amber-600 font-semibold mb-2">
                Creador, Representante Legal
              </p>
              <p className="text-gray-600 text-sm">
                Visionario detrás de Inmobiliaria ROBERTS, Ruben lidera la
                estrategia y asegura el cumplimiento legal de todas nuestras
                operaciones.
              </p>
            </div>

            {/* Miembro del Equipo: Esteban Valdés */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <img
                src="https://placehold.co/150x150/3B82F6/FFFFFF?text=Esteban+V."
                alt="Esteban Valdés"
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200"
              />
              <h3 className="text-xl font-bold text-blue-700 mb-1">
                Esteban Valdés
              </h3>
              <p className="text-amber-600 font-semibold mb-2">
                Programador Web
              </p>
              <p className="text-gray-600 text-sm">
                Esteban es el arquitecto digital de nuestra plataforma,
                garantizando una experiencia de usuario fluida y
                tecnológicamente avanzada.
              </p>
            </div>

            {/* Puedes añadir más miembros del equipo aquí si es necesario
            {/* Si no hay más miembros, puedes eliminar los divs de ejemplo restantes o dejarlos como placeholders */}
            {/* Miembro del Equipo 3 (ejemplo, puedes eliminarlo si solo son 2) */}
            {/* <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <img
                src="https://placehold.co/150x150/2563EB/FFFFFF?text=Experto+I."
                alt="Experto Inmobiliario"
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200"
              />
              <h3 className="text-xl font-bold text-blue-700 mb-1">
                Nuestro Experto Inmobiliario
              </h3>
              <p className="text-amber-600 font-semibold mb-2">Asesor Senior</p>
              <p className="text-gray-600 text-sm">
                Conocimiento profundo del mercado para guiarte en cada decisión.
              </p>
            </div> */}

            {/* Miembro del Equipo 4 (ejemplo, puedes eliminarlo si solo son 2) */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <img
                src="https://placehold.co/150x150/1D4ED8/FFFFFF?text=Soporte+C."
                alt="Soporte al Cliente"
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200"
              />
              <h3 className="text-xl font-bold text-blue-700 mb-1">
                Soporte al Cliente
              </h3>
              <p className="text-amber-600 font-semibold mb-2">
                Atención Personalizada
              </p>
              <p className="text-gray-600 text-sm">
                Siempre disponibles para resolver tus dudas y brindarte la mejor
                atención.
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mt-10 text-center">
            Cada miembro de nuestro equipo comparte la pasión por el servicio y
            el compromiso de ayudarte a alcanzar tus objetivos inmobiliarios.
          </p>
        </div>

        {/* Sección de Contacto Rápido */}
        <div className="text-center bg-blue-50 p-6 rounded-lg shadow-inner mt-12">
          <p className="text-2xl md:text-3xl font-extrabold text-amber-600 mb-4">
            ¿Quieres conocer a nuestro equipo?
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

export default OurTeamPage; // Exportación por defecto
