// src/pages/PrivacyPolicyPage.tsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para la navegación

const PrivacyPolicyPage: React.FC = () => {
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
          Política de Privacidad
        </h1>
        <p className="text-xl text-gray-700 mb-8 text-center">
          Información sobre cómo recopilamos, usamos y protegemos tus datos
          personales.
        </p>

        {/* Contenido detallado de la Política de Privacidad */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Compromiso con tu Privacidad
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            En Inmobiliaria ROBERTS, nos tomamos muy en serio la privacidad de
            nuestros usuarios. Esta política de privacidad describe cómo
            recopilamos, utilizamos y protegemos la información personal que nos
            proporcionas a través de nuestro sitio web y servicios.
          </p>

          <h3 className="text-2xl font-bold text-blue-600 mb-3 mt-6">
            1. Información que Recopilamos
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Recopilamos información personal que nos proporcionas directamente,
            como tu nombre, dirección de correo electrónico, número de teléfono
            y detalles sobre tus intereses inmobiliarios cuando te registras,
            nos contactas o utilizas nuestros servicios. También podemos
            recopilar información no personal, como datos de uso del sitio web,
            a través de cookies y tecnologías similares.
          </p>

          <h3 className="text-2xl font-bold text-blue-600 mb-3">
            2. Uso de la Información
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Utilizamos la información recopilada para:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-4">
            <li>Proveer y mejorar nuestros servicios inmobiliarios.</li>
            <li>
              Comunicarnos contigo sobre propiedades, ofertas y novedades.
            </li>
            <li>Personalizar tu experiencia en nuestro sitio web.</li>
            <li>Cumplir con nuestras obligaciones legales.</li>
            <li>
              Realizar análisis internos para entender mejor a nuestros
              usuarios.
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-blue-600 mb-3">
            3. Compartir Información
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            No vendemos, alquilamos ni compartimos tu información personal con
            terceros, excepto cuando sea necesario para operar nuestros
            servicios (por ejemplo, con agentes inmobiliarios asociados para
            coordinar visitas) o cuando la ley lo exija. Siempre nos aseguramos
            de que cualquier tercero que tenga acceso a tus datos cumpla con
            estrictos estándares de privacidad.
          </p>

          <h3 className="text-2xl font-bold text-blue-600 mb-3">
            4. Seguridad de los Datos
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Implementamos medidas de seguridad técnicas y organizativas para
            proteger tu información personal contra el acceso no autorizado, la
            alteración, la divulgación o la destrucción.
          </p>

          <h3 className="text-2xl font-bold text-blue-600 mb-3">
            5. Tus Derechos
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Tienes derecho a acceder, rectificar, cancelar y oponerte al
            tratamiento de tus datos personales. Para ejercer estos derechos,
            por favor, contáctanos a través de los canales indicados en nuestra
            sección de contacto.
          </p>

          <h3 className="text-2xl font-bold text-blue-600 mb-3">
            6. Cambios en la Política de Privacidad
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Podemos actualizar esta política de privacidad periódicamente. Te
            notificaremos sobre cualquier cambio significativo publicando la
            nueva política en nuestro sitio web.
          </p>
          <p className="text-sm text-gray-500 mt-6 text-right">
            Última actualización: 17 de Julio de 2025
          </p>
        </div>

        {/* Sección de Contacto Rápido */}
        <div className="text-center bg-blue-50 p-6 rounded-lg shadow-inner mt-12">
          <p className="text-2xl md:text-3xl font-extrabold text-amber-600 mb-4">
            ¿Tienes preguntas sobre nuestra política de privacidad?
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

export default PrivacyPolicyPage; // Exportación por defecto
