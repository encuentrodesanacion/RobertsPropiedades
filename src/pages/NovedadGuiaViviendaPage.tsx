// src/pages/NovedadGuiaViviendaPage.tsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para la navegación

const NovedadGuiaViviendaPage: React.FC = () => {
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
          Guía para Comprar tu Primera Vivienda
        </h1>
        <p className="text-xl text-gray-700 mb-8 text-center">
          Consejos esenciales y pasos a seguir para adquirir tu primera casa o
          departamento.
        </p>

        {/* Imagen destacada de la guía */}
        <div className="mb-8 rounded-lg shadow-xl overflow-hidden">
          <img
            src="https://placehold.co/1000x600/3B82F6/FFFFFF?text=Guia+Vivienda+Ilustracion"
            alt="Ilustración de guía para comprar vivienda"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Contenido detallado de la guía */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Tu Camino Hacia la Propiedad Soñada
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Adquirir tu primera vivienda es un hito emocionante y, a menudo, el
            paso más importante en tu vida financiera. Esta guía está diseñada
            para acompañarte en cada etapa del proceso, desde la planificación
            inicial hasta la firma de las escrituras.
          </p>

          <h3 className="text-2xl font-bold text-blue-600 mb-3 mt-6">
            1. Define tu Presupuesto y Financiamiento
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Antes de empezar a buscar, es crucial saber cuánto puedes gastar.
            Considera tus ahorros para el pie, tu capacidad de endeudamiento y
            las opciones de crédito hipotecario. Consulta con bancos y asesores
            financieros.
          </p>

          <h3 className="text-2xl font-bold text-blue-600 mb-3">
            2. Investiga el Mercado y Ubicación
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Identifica las comunas y barrios que se ajustan a tus necesidades y
            estilo de vida. Investiga precios, servicios cercanos (colegios,
            supermercados, transporte) y proyecciones de plusvalía.
          </p>

          <h3 className="text-2xl font-bold text-blue-600 mb-3">
            3. Busca y Visita Propiedades
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Utiliza portales inmobiliarios y la ayuda de un corredor de
            propiedades para encontrar opciones. Realiza visitas exhaustivas,
            prestando atención a la estructura, instalaciones y estado general.
          </p>

          <h3 className="text-2xl font-bold text-blue-600 mb-3">
            4. Presenta una Oferta y Negocia
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Una vez que encuentres la propiedad ideal, presenta una oferta
            formal. Un buen corredor te ayudará a negociar el precio y las
            condiciones para obtener el mejor acuerdo.
          </p>

          <h3 className="text-2xl font-bold text-blue-600 mb-3">
            5. Proceso Legal y Financiero
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Esta etapa incluye el estudio de títulos, la tasación de la
            propiedad por parte del banco, la aprobación del crédito hipotecario
            y la firma de la promesa de compraventa. Es fundamental contar con
            asesoría legal.
          </p>

          <h3 className="text-2xl font-bold text-blue-600 mb-3">
            6. Firma de Escritura y Entrega
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Finalmente, se firma la escritura de compraventa en la notaría y se
            inscribe la propiedad a tu nombre en el Conservador de Bienes
            Raíces. Una vez completado, ¡recibirás las llaves de tu nuevo hogar!
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mt-6 font-semibold">
            En Inmobiliaria ROBERTS, estamos listos para ser tu guía en este
            emocionante viaje.
          </p>
        </div>

        {/* Sección de Contacto Rápido */}
        <div className="text-center bg-blue-50 p-6 rounded-lg shadow-inner mt-12">
          <p className="text-2xl md:text-3xl font-extrabold text-amber-600 mb-4">
            ¿Necesitas ayuda con tu primera vivienda?
          </p>
          <button
            onClick={() => navigate("/#contacto")} // Navega a la sección de contacto en la HomePage
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-xl transition-colors duration-300 transform hover:scale-105 shadow-lg"
          >
            Asesoría Gratuita
          </button>
          <p className="text-sm text-gray-600 mt-4">
            ¡Estamos aquí para hacer tu sueño realidad!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NovedadGuiaViviendaPage; // Exportación por defecto
