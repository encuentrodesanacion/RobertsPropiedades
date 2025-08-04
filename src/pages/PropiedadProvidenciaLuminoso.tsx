// pages/PropiedadProvidenciaLuminoso.js
import React from "react";
import { useNavigate } from "react-router-dom";
import property5 from "../assets/Property5.mp4";
import balcon from "../assets/balcon.jpg";
import comedordepa from "../assets/Comedordepa.jpg";
import habitaciondepa from "../assets/Habitaciondepa.jpg";

function PropiedadProvidenciaLuminoso() {
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
          Moderno Departamento Luminoso en Providencia
        </h1>
        <p className="text-xl text-gray-700 mb-8 text-center">
          Descubre la vida urbana en su máxima expresión en este departamento
          con vistas inigualables y ubicación estratégica.
        </p>

        {/* Galería de Imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <video
            src={property5}
            // 'alt' is for images, for video use a text description or captions
            title="Recorrido virtual por la propiedad" // 'title' provides a tooltip on hover
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            controls // This is important: adds play/pause, volume, fullscreen controls
            autoPlay // Optional: plays automatically, but use with caution for user experience
            loop // Optional: loops the video
            muted // Recommended with autoPlay, otherwise it can be annoying
            playsInline // Important for iOS autoPlay in many cases
          >
            Tu navegador no soporta el elemento de video.
          </video>
          <img
            src={balcon}
            alt="Balcón con Vista Panorámica"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <img
            src={comedordepa}
            alt="Living Comedor Luminoso"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <img
            src={habitaciondepa}
            alt="Dormitorio Principal"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Detalles Principales */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Características del Departamento
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>
              <span className="font-semibold">Superficie Total:</span> 90 m²
            </li>
            <li>
              <span className="font-semibold">Habitaciones:</span> 2 amplias
              habitaciones con clósets empotrados
            </li>
            <li>
              <span className="font-semibold">Baños:</span> 2 baños completos
              (uno en suite)
            </li>
            <li>
              <span className="font-semibold">Estacionamiento:</span> 1
              subterráneo
            </li>
            <li>
              <span className="font-semibold">Bodega:</span> Sí, incluida
            </li>
            <li>
              <span className="font-semibold">Balcón:</span> Amplio balcón con
              vista despejada a la ciudad
            </li>
            <li>
              <span className="font-semibold">Orientación:</span> Norte,
              garantizando excelente luminosidad
            </li>
            <li>
              <span className="font-semibold">Equipamiento:</span> Cocina
              americana equipada, termopanel en ventanas
            </li>
            <li>
              <span className="font-semibold">Edificio:</span> Conserjería 24/7,
              gimnasio, sala multiuso, lavandería.
            </li>
          </ul>
        </div>

        {/* Descripción Detallada */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Descripción</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Este espectacular departamento destaca por su luminosidad y diseño
            moderno, ubicado en el vibrante corazón de Providencia. Ideal para
            profesionales jóvenes, parejas o pequeñas familias que buscan
            comodidad, conectividad y un estilo de vida dinámico. Sus amplios
            ventanales y su orientación norte aseguran una iluminación natural
            excepcional durante todo el día, creando un ambiente cálido y
            acogedor.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            El espacio interior cuenta con un funcional living-comedor integrado
            a una cocina americana totalmente equipada con encimera, horno y
            campana. Las dos habitaciones son de buen tamaño, con clósets
            empotrados, y la principal dispone de baño en suite. El balcón
            ofrece un espacio perfecto para relajarse y disfrutar de las vistas
            panorámicas de la ciudad.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            El edificio, de construcción reciente, ofrece una serie de
            comodidades pensadas para la vida moderna, incluyendo seguridad 24
            horas, gimnasio completamente equipado, sala de eventos y
            lavandería.
          </p>
        </div>

        {/* Ubicación Destacada */}

        {/* Precio y CTA */}
        <div className="text-center bg-blue-50 p-6 rounded-lg shadow-inner">
          <p className="text-3xl md:text-4xl font-extrabold text-amber-600 mb-4">
            Precio: UF 5.800
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-xl transition-colors duration-300 transform hover:scale-105">
            Agendar Visita Virtual
          </button>
          <p className="text-sm text-gray-600 mt-4">
            ¡Tu nuevo estilo de vida te espera en Providencia!
          </p>
        </div>
      </div>
    </div>
  );
}

export default PropiedadProvidenciaLuminoso;
