// src/pages/TermsAndConditionsPage.tsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para la navegación

const TermsAndConditionsPage: React.FC = () => {
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
          Términos y Condiciones
        </h1>
        <p className="text-xl text-gray-700 mb-8 text-center">
          Acuerdo legal entre tú y Inmobiliaria ROBERTS para el uso de nuestros
          servicios.
        </p>

        {/* Contenido detallado de los Términos y Condiciones */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Acuerdo de Uso de Servicios
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Bienvenido a Inmobiliaria ROBERTS. Al acceder y utilizar nuestro
            sitio web y servicios, aceptas cumplir y estar sujeto a los
            siguientes términos y condiciones de uso. Por favor, léelos
            detenidamente. Si no estás de acuerdo con estos términos, no debes
            utilizar nuestros servicios.
          </p>

          <h3 className="text-2xl font-bold text-blue-600 mb-3 mt-6">
            1. Aceptación de los Términos
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Este acuerdo establece los términos y condiciones generales
            aplicables al uso de los servicios ofrecidos por Inmobiliaria
            ROBERTS a través de su sitio web. La utilización del sitio web
            implica la aceptación plena y sin reservas de todos y cada uno de
            los términos y condiciones publicados por Inmobiliaria ROBERTS en el
            momento mismo en que el usuario acceda al sitio web.
          </p>

          <h3 className="text-2xl font-bold text-blue-600 mb-3">
            2. Modificaciones de los Términos
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Inmobiliaria ROBERTS se reserva el derecho de modificar estos
            términos y condiciones en cualquier momento. Las modificaciones
            serán efectivas inmediatamente después de su publicación en el sitio
            web. Es tu responsabilidad revisar periódicamente estos términos
            para estar al tanto de cualquier cambio. El uso continuado del sitio
            web después de la publicación de las modificaciones constituirá tu
            aceptación de dichos cambios.
          </p>

          <h3 className="text-2xl font-bold text-blue-600 mb-3">
            3. Uso del Sitio Web
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            El sitio web y sus contenidos están destinados únicamente para tu
            uso personal y no comercial. No puedes modificar, copiar,
            distribuir, transmitir, mostrar, realizar, reproducir, publicar,
            licenciar, crear obras derivadas, transferir o vender ninguna
            información, software, productos o servicios obtenidos del sitio
            web.
          </p>

          <h3 className="text-2xl font-bold text-blue-600 mb-3">
            4. Información de Propiedades
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            La información de las propiedades mostradas en este sitio web es
            proporcionada por los propietarios o sus representantes y se
            considera precisa, pero no está garantizada. Inmobiliaria ROBERTS no
            se hace responsable de la exactitud, integridad o actualidad de
            dicha información. Te recomendamos verificar cualquier detalle
            relevante antes de tomar decisiones.
          </p>

          <h3 className="text-2xl font-bold text-blue-600 mb-3">
            5. Limitación de Responsabilidad
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Inmobiliaria ROBERTS no será responsable de ningún daño directo,
            indirecto, incidental, consecuencial o especial que surja del uso o
            la imposibilidad de usar el sitio web o los servicios, incluso si
            Inmobiliaria ROBERTS ha sido advertida de la posibilidad de tales
            daños.
          </p>

          <h3 className="text-2xl font-bold text-blue-600 mb-3">
            6. Enlaces a Terceros
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Nuestro sitio web puede contener enlaces a sitios web de terceros.
            Estos enlaces se proporcionan únicamente para tu conveniencia.
            Inmobiliaria ROBERTS no tiene control sobre el contenido de estos
            sitios web y no asume ninguna responsabilidad por ellos.
          </p>

          <h3 className="text-2xl font-bold text-blue-600 mb-3">
            7. Ley Aplicable y Jurisdicción
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Estos términos y condiciones se rigen e interpretan de acuerdo con
            las leyes de Chile. Cualquier disputa que surja en relación con
            estos términos estará sujeta a la jurisdicción exclusiva de los
            tribunales de Santiago, Chile.
          </p>
          <p className="text-sm text-gray-500 mt-6 text-right">
            Última actualización: 17 de Julio de 2025
          </p>
        </div>

        {/* Sección de Contacto Rápido */}
        <div className="text-center bg-blue-50 p-6 rounded-lg shadow-inner mt-12">
          <p className="text-2xl md:text-3xl font-extrabold text-amber-600 mb-4">
            ¿Tienes preguntas sobre nuestros términos y condiciones?
          </p>
          <button
            onClick={() => navigate("/#contacto")} // Navega a la sección de contacto en la HomePage
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-xl transition-colors duration-300 transform hover:scale-105 shadow-lg"
          >
            Contáctanos
          </button>
          <p className="text-sm text-gray-600 mt-4">
            Estamos aquí para ayudarte.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage; // Exportación por defecto
