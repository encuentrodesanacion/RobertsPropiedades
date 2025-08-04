// pages/PropiedadSantiagoOficina.js
import React from "react";
import { useNavigate } from "react-router-dom";

function PropiedadSantiagoOficina() {
  const navigate = useNavigate(); // Inicializa el hook useNavigate

  // Función para manejar el clic del botón "Volver al Inicio"
  const handleGoHome = () => {
    navigate("/"); // Navega a la ruta raíz (inicio)
  };
  return (
    <div className="container mx-auto p-8 bg-gray-50 text-gray-800">
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
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6 text-center">
          Oficina Premium en Santiago Centro
        </h1>
        <p className="text-xl text-gray-700 mb-8 text-center">
          La oportunidad perfecta para potenciar tu negocio en el corazón
          financiero y comercial de Santiago.
        </p>

        {/* Galería de Imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <img
            src="https://via.placeholder.com/800x600?text=Oficina+Vista+General"
            alt="Vista General Oficina Santiago Centro"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <img
            src="https://via.placeholder.com/800x600?text=Sala+Reuniones"
            alt="Sala de Reuniones Equipada"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <img
            src="https://via.placeholder.com/800x600?text=Area+Trabajo"
            alt="Área de Trabajo Amplia"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <img
            src="https://via.placeholder.com/800x600?text=Recepcion+Oficina"
            alt="Recepción y Acceso"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Detalles Principales */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Características de la Oficina
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>
              <span className="font-semibold">Superficie Total:</span> 120 m²
            </li>
            <li>
              <span className="font-semibold">Privados:</span> 3 amplios
              privados o despachos individuales
            </li>
            <li>
              <span className="font-semibold">Sala de Reuniones:</span> Sí,
              espaciosa y equipada
            </li>
            <li>
              <span className="font-semibold">Área Abierta:</span> Gran espacio
              para estaciones de trabajo colaborativo
            </li>
            <li>
              <span className="font-semibold">Kitchenette:</span> Equipada con
              lavaplatos y espacio para refrigerador
            </li>
            <li>
              <span className="font-semibold">Baños:</span> 2 baños internos
              (uno de ellos para personal)
            </li>
            <li>
              <span className="font-semibold">Climatización:</span> Aire
              acondicionado centralizado
            </li>
            <li>
              <span className="font-semibold">Seguridad:</span> Acceso
              controlado 24/7 y circuito cerrado de TV
            </li>
            <li>
              <span className="font-semibold">Conectividad:</span> Fibra óptica
              disponible
            </li>
          </ul>
        </div>

        {/* Descripción Detallada */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Descripción</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Descubre esta excepcional oficina premium en pleno Santiago Centro,
            diseñada para empresas que buscan un espacio funcional, moderno y
            con una ubicación estratégica inmejorable. Con 120 m² de superficie,
            ofrece una distribución inteligente que incluye tres privados o
            despachos, una amplia sala de reuniones ideal para presentaciones o
            sesiones de brainstorming, y un generoso espacio abierto adaptable a
            diversas configuraciones de trabajo.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            La oficina cuenta con una kitchenette bien equipada para el personal
            y visitas, así como baños internos que garantizan comodidad y
            privacidad. La climatización centralizada asegura un ambiente
            agradable durante todo el año. Los grandes ventanales permiten una
            excelente entrada de luz natural, contribuyendo a un entorno de
            trabajo productivo y confortable.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Ubicada en un edificio corporativo de alto estándar, esta propiedad
            ofrece seguridad 24/7 y fácil acceso, siendo el lugar ideal para
            establecer o expandir tu negocio.
          </p>
        </div>

        {/* Ubicación Destacada */}

        {/* Precio y CTA */}
        <div className="text-center bg-blue-50 p-6 rounded-lg shadow-inner">
          <p className="text-3xl md:text-4xl font-extrabold text-amber-600 mb-4">
            Precio: UF 3.200
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-xl transition-colors duration-300 transform hover:scale-105">
            Solicitar Información
          </button>
          <p className="text-sm text-gray-600 mt-4">
            ¡Dale a tu empresa la dirección que se merece!
          </p>
        </div>
      </div>
    </div>
  );
}

export default PropiedadSantiagoOficina;
