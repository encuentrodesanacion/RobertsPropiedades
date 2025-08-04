import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// * IMPORTAMOS LOS COMPONENTES DE GOOGLE MAPS
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";

// Importamos los videos/imágenes de propiedades
import Property4 from "../assets/Property4.mp4";
import Property5 from "../assets/Property5.mp4";
import Property3Video from "../assets/oficina_premium.mp4";

// * NUEVO: Mapeo de coordenadas para cada ubicación
const LOCATION_COORDS = {
  "Las Condes": { lat: -33.415, lng: -70.575 },
  Providencia: { lat: -33.435, lng: -70.62 },
  "Santiago Centro": { lat: -33.44, lng: -70.647 },
  default: { lat: -33.4489, lng: -70.6693 }, // Coordenadas por defecto (ej. Santiago)
};

// Definimos la data de propiedades fuera del componente para que no se re-cree en cada render
const propertiesData = [
  {
    type: "casa",
    video: Property4,
    title: "Casa Moderna en Las Condes",
    location: "Las Condes",
    description:
      "Amplia casa con 4 habitaciones, 3 baños, jardín y piscina. Excelente ubicación.",
    price: "UF 12.500",
    priceValue: 12500,
    transaction: "compra",
    link: "/propiedad/las-condes-moderna",
    lat: -33.415, // Coordenadas específicas de la propiedad
    lng: -70.575,
  },
  {
    type: "departamento",
    video: Property5,
    title: "Departamento Luminoso en Providencia",
    location: "Providencia",
    description:
      "Departamento de 2 habitaciones, 2 baños, balcón con vista panorámica. Cerca de metro.",
    price: "UF 5.800",
    priceValue: 5800,
    transaction: "compra",
    link: "/propiedad/providencia-luminoso",
    lat: -33.435,
    lng: -70.62,
  },
  {
    type: "oficina",
    video: Property3Video,
    title: "Oficina Premium en Santiago Centro",
    location: "Santiago Centro",
    description:
      "Espaciosa oficina con 3 privados, sala de reuniones y kitchenette. Ideal para tu negocio.",
    price: "UF 3.200",
    priceValue: 3200,
    transaction: "arriendo", // Ejemplo de una propiedad en arriendo
    link: "/propiedad/santiago-oficina",
    lat: -33.44,
    lng: -70.647,
  },
];

const ServiciosCompraPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  }; // ESTADOS PARA LOS FILTROS

  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [transactionFilter, setTransactionFilter] = useState("compra"); // Lógica de filtrado

  const filteredProperties = propertiesData.filter((property) => {
    const matchesTransaction =
      transactionFilter === "all" || property.transaction === transactionFilter;
    const matchesLocation =
      locationFilter === "all" || property.location === locationFilter;
    const matchesType = typeFilter === "all" || property.type === typeFilter;
    const matchesPrice =
      (!minPrice || property.priceValue >= minPrice) &&
      (!maxPrice || property.priceValue <= maxPrice);
    return matchesTransaction && matchesLocation && matchesType && matchesPrice;
  }); // * Lógica para el mapa: // Obtiene las coordenadas del filtro de ubicación o usa las por defecto

  const mapCenter =
    locationFilter !== "all"
      ? LOCATION_COORDS[locationFilter as keyof typeof LOCATION_COORDS]
      : LOCATION_COORDS.default;
  const mapZoom = locationFilter !== "all" ? 14 : 11; // Zoom más alto si se selecciona una ubicación específica

  return (
    <div className="container mx-auto p-8 md:px-8 bg-gray-50 text-gray-800 pt-20 min-h-screen">
           {" "}
      <div className="max-w-7xl mx-auto">
               {" "}
        <button
          onClick={handleGoHome}
          className="mb-8 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full flex items-center justify-center transition-colors duration-300 shadow-md"
        >
                   {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
                       {" "}
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
                     {" "}
          </svg>
                    Volver al Inicio        {" "}
        </button>
               {" "}
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6 text-center">
                    Propiedades en Venta        {" "}
        </h1>
               {" "}
        <p className="text-xl text-gray-700 mb-8 text-center">
                    Encuentra la propiedad ideal para ti utilizando nuestros
          filtros.        {" "}
        </p>
                {/* FILTROS DE BÚSQUEDA */}       {" "}
        <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 mb-12">
                   {" "}
          <h3 className="text-2xl font-bold text-blue-700 mb-4">
            Filtros de Búsqueda
          </h3>
                   {" "}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                       {" "}
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg"
            >
                            <option value="all">Tipo de Propiedad</option>     
                      <option value="casa">Casa</option>             {" "}
              <option value="departamento">Departamento</option>             {" "}
              <option value="oficina">Oficina</option>           {" "}
            </select>
                       {" "}
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg"
            >
                            <option value="all">Ubicación</option>             {" "}
              <option value="Las Condes">Las Condes</option>             {" "}
              <option value="Providencia">Providencia</option>             {" "}
              <option value="Santiago Centro">Santiago Centro</option>         
               {" "}
            </select>
                       {" "}
            <input
              type="number"
              placeholder="Precio Mín. (UF)"
              value={minPrice}
              onChange={(e) =>
                setMinPrice(
                  e.target.value === "" ? "" : parseInt(e.target.value)
                )
              }
              className="p-3 border border-gray-300 rounded-lg"
            />
                       {" "}
            <input
              type="number"
              placeholder="Precio Máx. (UF)"
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(
                  e.target.value === "" ? "" : parseInt(e.target.value)
                )
              }
              className="p-3 border border-gray-300 rounded-lg"
            />
                     {" "}
          </div>
                 {" "}
        </div>
                {/* * MAPA DE PROPIEDADES * */}       {" "}
        <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 mb-8">
                   {" "}
          <h3 className="text-2xl font-bold text-blue-700 mb-4">
            Ubicación en el Mapa
          </h3>
                   {" "}
          <div
            className="rounded-lg overflow-hidden border border-gray-300"
            style={{ height: "450px", width: "100%" }}
          >
                       {" "}
            <APIProvider
              apiKey="AIzaSyCfksahfFpi55mGqgh0iMYfe9qiiKZ04qk" // Tu API Key
              language="es"
              region="CL"
            >
                           {" "}
              <Map
                defaultCenter={mapCenter} // Centro dinámico del mapa
                zoom={mapZoom} // Zoom dinámico
                gestureHandling={"greedy"}
                disableDefaultUI={false}
                mapId={"YOUR_MAP_ID"}
              >
                               {" "}
                {filteredProperties.map((property, index) => (
                  <AdvancedMarker
                    key={index}
                    position={{ lat: property.lat, lng: property.lng }}
                    title={property.title}
                  >
                                       {" "}
                    <Pin
                      background={"#0F766E"}
                      borderColor={"#000"}
                      glyphColor={"#FFF"}
                    />
                                     {" "}
                  </AdvancedMarker>
                ))}
                             {" "}
              </Map>
                         {" "}
            </APIProvider>
                     {" "}
          </div>
                 {" "}
        </div>
                {/* LISTA DE PROPIEDADES FILTRADAS */}       {" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                   {" "}
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col"
              >
                               {" "}
                {property.type === "image" ? (
                  <img
                    src={property.video}
                    alt={property.title}
                    className="w-full h-56 object-cover"
                  />
                ) : (
                  <video
                    src={property.video}
                    title={property.title}
                    className="w-full h-56 object-cover"
                    controls={false}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                )}
                               {" "}
                <div className="p-6 flex flex-col flex-grow">
                                   {" "}
                  <h3 className="text-xl font-bold mb-2 text-blue-700">
                                        {property.title}                 {" "}
                  </h3>
                                   {" "}
                  <p className="text-gray-600 mb-4 text-sm flex-grow">
                                        {property.description}                 {" "}
                  </p>
                                   {" "}
                  <p className="text-amber-600 font-bold text-lg mb-4">
                                        {property.price}                 {" "}
                  </p>
                                   {" "}
                  <Link
                    to={property.link}
                    className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors duration-300 mt-auto"
                  >
                                        Ver Detalles →                  {" "}
                  </Link>
                                 {" "}
                </div>
                             {" "}
              </div>
            ))
          ) : (
            <p className="text-center text-lg text-gray-500 col-span-full">
                            No se encontraron propiedades que coincidan con la
              búsqueda.            {" "}
            </p>
          )}
                 {" "}
        </div>
                {/* Sección de Contacto Rápido */}       {" "}
        <div className="text-center bg-blue-50 p-6 rounded-lg shadow-inner mt-12">
                   {" "}
          <p className="text-2xl md:text-3xl font-extrabold text-amber-600 mb-4">
                        ¿No encuentras lo que buscas?          {" "}
          </p>
                   {" "}
          <button
            onClick={() => navigate("/#contacto")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-xl transition-colors duration-300 transform hover:scale-105 shadow-lg"
          >
                        Contáctanos y te ayudamos          {" "}
          </button>
                 {" "}
        </div>
             {" "}
      </div>
         {" "}
    </div>
  );
};

export default ServiciosCompraPage;
