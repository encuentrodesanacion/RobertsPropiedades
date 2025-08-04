import { useState, useEffect } from "react"; // Added useState, useEffect for consistency if needed later, and removed 'React'
import { useNavigate } from "react-router-dom"; // Importa useNavigate para la navegación

// Importa las imágenes y videos
import Casa5 from "../assets/Casa5.jpg";
import Salaestar from "../assets/Salaestar.jpg";
import piscina from "../assets/piscina.png";
import property4 from "../assets/Property4.mp4";

// Importa los componentes de Google Maps API
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";

// Define las coordenadas específicas para esta propiedad en Las Condes
const LAS_CONDES_PROPERTY_LOCATION = { lat: -33.415, lng: -70.575 }; // Ejemplo: Una ubicación en Las Condes

function PropiedadLasCondesModerna() {
  const navigate = useNavigate(); // Inicializa el hook useNavigate

  // Función para manejar el clic del botón "Volver al Inicio"
  const handleGoHome = () => {
    navigate("/"); // Navega a la ruta raíz (inicio)
  };

  return (
    // Agregamos pt-20 para dar espacio para el navbar fijo si lo tienes
    <div className="container mx-auto px-4 py-8 md:px-8 bg-gray-50 text-gray-800 pt-20">
      {/* Botón de Retorno al Inicio - Ajustado para ser más responsivo y visible */}
      <button
        onClick={handleGoHome}
        className="mb-8 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full flex items-center transition-colors duration-300 shadow-md text-sm md:text-base" // Responsive font size
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
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6 text-center leading-tight">
          Lujosa Casa Moderna en Las Condes
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 text-center leading-relaxed">
          Una oportunidad única para vivir con estilo y comodidad en uno de los
          barrios más exclusivos de Santiago.
        </p>

        {/* Galería de Imágenes y Video - Grid responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <video
            src={property4}
            title="Recorrido virtual por la propiedad"
            className="w-full h-auto object-cover rounded-lg shadow-lg aspect-video"
            controls
            autoPlay
            loop
            muted
            playsInline
          >
            Tu navegador no soporta el elemento de video.
          </video>
          <img
            src={Casa5}
            alt="Exterior Casa Moderna Las Condes"
            className="w-full h-auto object-cover rounded-lg shadow-lg aspect-video"
          />
          <img
            src={Salaestar}
            alt="Sala de Estar de Lujo"
            className="w-full h-auto object-cover rounded-lg shadow-lg aspect-video"
          />
          <img
            src={piscina}
            alt="Jardín con Piscina y Quincho"
            className="w-full h-auto object-cover rounded-lg shadow-lg aspect-video"
          />
        </div>

        {/* Detalles Principales */}
        <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
            Características de la Propiedad
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-lg text-gray-700">
            <li>
              <span className="font-semibold">Superficie Total:</span> 500 m²
            </li>
            <li>
              <span className="font-semibold">Superficie Construida:</span> 280
              m²
            </li>
            <li>
              <span className="font-semibold">Habitaciones:</span> 4 amplias
              (incluyendo 1 suite principal)
            </li>
            <li>
              <span className="font-semibold">Baños:</span> 3 baños completos y
              1 baño de visitas
            </li>
            <li>
              <span className="font-semibold">Estacionamientos:</span> 2
              techados y 2 descubiertos
            </li>
            <li>
              <span className="font-semibold">Áreas Verdes:</span> Amplio jardín
              paisajístico con riego automático
            </li>
            <li>
              <span className="font-semibold">Piscina:</span> Sí, temperada y
              con sistema de auto-limpieza
            </li>
            <li>
              <span className="font-semibold">Seguridad:</span> Sistema de
              alarma integrado y portón eléctrico
            </li>
            <li>
              <span className="font-semibold">Otros:</span> Quincho techado,
              sala de estar familiar, oficina/estudio, lavadero.
            </li>
          </ul>
        </div>

        {/* Descripción Detallada */}
        <div className="mb-8 bg-white rounded-xl shadow-xl p-6 sm:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
            Descripción
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            Descubra esta impresionante casa moderna ubicada en el corazón de
            Las Condes, diseñada con un estilo arquitectónico vanguardista y
            acabados de primera calidad. Cada espacio ha sido meticulosamente
            pensado para ofrecer el máximo confort y funcionalidad, ideal para
            familias que buscan un estilo de vida sofisticado.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            La propiedad cuenta con luminosos espacios interiores, amplios
            ventanales que permiten la entrada de luz natural durante todo el
            día y una distribución inteligente que optimiza cada metro cuadrado.
            La cocina, de diseño gourmet, está completamente equipada con
            electrodomésticos de alta gama y una isla central perfecta para el
            entretenimiento.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            El exterior no se queda atrás, ofreciendo un oasis privado con un
            hermoso jardín paisajístico, una piscina temperada y un quincho
            completamente equipado, creando el ambiente perfecto para reuniones
            familiares y con amigos. La ubicación es inmejorable, cercana a
            colegios de prestigio, centros comerciales, parques y con excelente
            conectividad.
          </p>
        </div>

        {/* Ubicación Destacada con Mapa */}
        <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
            Ubicación Estratégica
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            Situada en un sector residencial privilegiado de Las Condes, esta
            propiedad ofrece fácil acceso a las principales avenidas, transporte
            público (cercana a Estación de Metro Manquehue), y una amplia gama
            de servicios.
          </p>
          <ul className="list-disc list-inside text-base md:text-lg text-gray-700 space-y-2">
            <li>A pasos de Parque Araucano y Parque Juan Pablo II.</li>
            <li>Cercana a los malls Parque Arauco y Apumanque.</li>
            <li>
              Variedad de restaurantes, cafés y boutiques en los alrededores.
            </li>
            <li>Acceso rápido a clínicas y centros de salud.</li>
          </ul>

          {/* Google Maps API Integration */}
        </div>

        {/* Precio y CTA */}
        <div className="text-center bg-blue-50 p-6 rounded-lg shadow-inner">
          <p className="text-3xl md:text-4xl font-extrabold text-amber-600 mb-4">
            Precio: UF 12.500
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-xl transition-colors duration-300 transform hover:scale-105">
            Agendar Visita
          </button>
          <p className="text-sm text-gray-600 mt-4">
            ¡No pierdas la oportunidad de conocer tu próximo hogar!
          </p>
        </div>
      </div>
    </div>
  );
}

export default PropiedadLasCondesModerna;
