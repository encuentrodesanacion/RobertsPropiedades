import { useState, useEffect } from "react";
// No necesitamos "../styles/video.css" si solo era para el layout horizontal.
// Si tienes otros estilos personalizados en ese archivo que aún necesitas, déjalo.
// import "../styles/video.css";

import HeroImage from "../assets/RobertsF.png";
import Property4 from "../assets/Property4.mp4";
import Property5 from "../assets/Property5.mp4";
import Property3Video from "../assets/oficina_premium.mp4";
import RobertsLogo from "../assets/Roberts.jpg";

import { Link, useLocation } from "react-router-dom";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";

// Coordenadas para el mapa principal (ejemplo: oficina central en Vitacura)
const SIMULATED_PROPERTY_LOCATION = { lat: -33.3965, lng: -70.6074 };

import {
  Menu,
  X,
  Instagram,
  Facebook,
  Linkedin,
  Home as HomeIcon,
  Building,
  DollarSign,
  MapPin,
  Users,
  Mail,
} from "lucide-react";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    })); // Limpiar mensajes de error/éxito al empezar a escribir de nuevo
    setSubmitMessage("");
  }; // *** CORRECCIÓN: Se añade el tipo 'e' para solucionar el error de TypeScript

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setIsSuccess(false); // Validación básica

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitMessage("Por favor, completa todos los campos.");
      setIsSubmitting(false);
      return;
    }

    try {
      // *** CORRECCIÓN: Se usa la variable API_BASE_URL definida arriba
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage(result.message || "¡Mensaje enviado con éxito!");
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" }); // Limpia el formulario
      } else {
        setSubmitMessage(
          result.error ||
            "Error al enviar el mensaje. Por favor, inténtalo de nuevo."
        );
        setIsSuccess(false);
      }
    } catch (error) {
      setSubmitMessage("Error de conexión. No se pudo contactar al servidor.");
      setIsSuccess(false);
      console.error("Error al enviar el formulario:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative z-0 overflow-x-hidden font-inter"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      {/* Navigation */}
      <nav className="bg-blue-800/95 fixed w-full z-20 border-b border-blue-600/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-0 lg:px-8">
          <div className="flex justify-center h-16 items-center">
            {/* Logo
            <div className="flex-shrink-0"></div> */}

            {/* Menú de escritorio */}
            <div className="hidden md:flex space-x-20">
              <Link
                to="/#inicio"
                className="text-blue-200 hover:text-white font-semibold transition-colors duration-300"
              >
                Inicio
              </Link>
              <Link
                to="/#propiedades"
                className="text-blue-200 hover:text-white font-semibold transition-colors duration-300"
              >
                Propiedades
              </Link>
              <Link
                to="/#servicios"
                className="text-blue-200 hover:text-white font-semibold transition-colors duration-300"
              >
                Servicios
              </Link>
              <Link
                to="/#whyus"
                className="text-blue-200 hover:text-white font-semibold transition-colors duration-300"
              >
                Propuesta de Valor
              </Link>
              <Link
                to="/#contacto"
                className="text-blue-200 hover:text-white font-semibold transition-colors duration-300"
              >
                Contacto
              </Link>
            </div>

            {/* Menú móvil (botón de hamburguesa) */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white/70 hover:text-amber-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-300 rounded-md p-1"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-900/90 border-t border-blue-700/10 shadow-inner py-2">
            <div className="px-2 space-y-1">
              <Link
                onClick={() => setIsMenuOpen(false)}
                to="/#inicio"
                className="block px-3 py-2 text-white/80 hover:text-amber-300 transition-colors duration-300 rounded-md text-base"
              >
                Inicio
              </Link>
              <Link
                onClick={() => setIsMenuOpen(false)}
                to="/#propiedades"
                className="block px-3 py-2 text-white/80 hover:text-amber-300 transition-colors duration-300 rounded-md text-base"
              >
                Propiedades
              </Link>
              <Link
                onClick={() => setIsMenuOpen(false)}
                to="/#servicios"
                className="block px-3 py-2 text-white/80 hover:text-amber-300 transition-colors duration-300 rounded-md text-base"
              >
                Servicios
              </Link>
              <Link
                onClick={() => setIsMenuOpen(false)}
                to="/#whyus"
                className="block px-3 py-2 text-white/80 hover:text-amber-300 transition-colors duration-300 rounded-md text-base"
              >
                Propuesta de Valor
              </Link>
              <Link
                onClick={() => setIsMenuOpen(false)}
                to="/#contacto"
                className="block px-3 py-2 text-white/80 hover:text-amber-300 transition-colors duration-300 rounded-md text-base"
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="pt-32 pb-16 md:pt-48 md:pb-32 bg-gradient-to-r from-blue-800/60 to-blue-600/60 flex items-start justify-center min-h-screen relative"
        style={{ minHeight: "calc(var(--vh, 1vh) * 100)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 drop-shadow-lg leading-tight">
            Tu socio de confianza en bienes raíces.
          </h1>
          <p className="text-lg sm:text-xl mb-6 md:mb-10 leading-relaxed drop-shadow-md max-w-2xl mx-auto"></p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link
              to="/#propiedades"
              className="bg-amber-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap"
            >
              Ver Propiedades
            </Link>
            <Link
              to="/#servicios"
              className="bg-white text-blue-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap"
            >
              Servicios Inmobiliarios Integrales
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section
        id="propiedades"
        className="py-16 md:py-24 bg-gray-100 text-gray-800"
      >
               {" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                   {" "}
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12 text-blue-800">
                        Propiedades Destacadas          {" "}
          </h2>
                   {" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {" "}
            {[
              {
                type: "video",
                video: Property4,
                title: "Casa Moderna en Las Condes",
                description:
                  "Amplia casa con 4 habitaciones, 3 baños, jardín y piscina. Excelente ubicación.",
                price: "UF 12.500",
                link: "/propiedad/las-condes-moderna",
                isSold: true, // <-- AÑADE ESTA LÍNEA
              },
              {
                type: "video",
                video: Property5,
                title: "Departamento Luminoso en Providencia",
                description:
                  "Departamento de 2 habitaciones, 2 baños, balcón con vista panorámica. Cerca de metro.",
                price: "UF 5.800",
                link: "/propiedad/providencia-luminoso",
                isSold: true, // <-- AÑADE ESTA LÍNEA
              },
              {
                type: "video",
                video: Property3Video,
                title: "Oficina Premium en Santiago Centro",
                description:
                  "Espaciosa oficina con 3 privados, sala de reuniones y kitchenette. Ideal para tu negocio.",
                price: "UF 3.200",
                link: "/propiedad/santiago-oficina",
                isSold: true, // <-- AÑADE ESTA LÍNEA
              },
            ].map((property, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col relative" // <-- AÑADE 'relative' A LA CLASE
              >
                                {""}
                {property.isSold && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase z-10 animate-pulse">
                                        Vendido                  {""}
                  </div>
                )}
                             {" "}
                {property.type === "image" ? (
                  <img
                    src={property.video}
                    alt={property.title}
                    className="w-full h-56 object-cover"
                  />
                ) : (
                  <>
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-56 object-cover"
                    >
                      <source src={property.video} type="video/mp4" />
                      Tu navegador no soporta el tag de video.
                    </video>
                  </>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-blue-700">
                    {property.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm flex-grow">
                    {property.description}
                  </p>
                  <p className="text-amber-600 font-bold text-lg mb-4">
                    {property.price}
                  </p>
                  <Link
                    to={property.link}
                    className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors duration-300 mt-auto"
                  >
                    Ver Detalles →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="servicios"
        className="py-16 md:py-24 bg-gradient-to-r from-blue-700 to-blue-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-6 text-amber-300">
            Servicios Inmobiliarios Integrales
          </h2>
          <p className="text-lg md:text-xl text-center mb-16 max-w-4xl mx-auto leading-relaxed">
            Cubrimos desde la gestión transaccional (compra/venta) y la
            valoración técnica, hasta la administración de carteras de arriendo,
            asesoría legal especializada y análisis de inversión. Entregamos
            soluciones eficientes con un enfoque analítico y basado en
            evidencia, orientadas a potenciar la valorización de sus activos y a
            salvaguardar su inversión frente a las fluctuaciones del entorno
            inmobiliario.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Building className="w-10 h-10 mb-4 text-amber-400" />,
                title: "Venta de Propiedades",
                description:
                  "Te ayudamos a vender tu propiedad de forma rápida y al mejor precio, con una estrategia de marketing personalizada.",
                link: "/servicios/venta",
              },
              {
                icon: <HomeIcon className="w-10 h-10 mb-4 text-amber-400" />,
                title: "Compra de Propiedades",
                description:
                  "Encuentra la propiedad perfecta para ti. Te asesoramos en cada paso, desde la búsqueda hasta la firma.",
                link: "/servicios/compra",
              },
              {
                icon: <DollarSign className="w-10 h-10 mb-4 text-amber-400" />,
                title: "Tasaciones Profesionales",
                description:
                  "Obtén una valoración precisa y justa de tu propiedad realizada por expertos certificados.",
                link: "/servicios/tasacion",
              },
              {
                icon: <MapPin className="w-10 h-10 mb-4 text-amber-400" />,
                title: "Arriendo y Administración",
                description:
                  "Gestionamos el arriendo de tu propiedad y nos encargamos de la administración para tu tranquilidad.",
                link: "/servicios/arriendo",
              },
              {
                icon: <Users className="w-10 h-10 mb-4 text-amber-400" />,
                title: "Asesoría Legal Inmobiliaria",
                description:
                  "Contamos con un equipo de abogados especializados para resolver cualquier duda legal en tus transacciones.",
                link: "/servicios/legal",
              },
              {
                icon: <Mail className="w-10 h-10 mb-4 text-amber-400" />,
                title: "Inversiones Inmobiliarias",
                description:
                  "Descubre las mejores oportunidades de inversión en el mercado inmobiliario con nuestro análisis experto.",
                link: "/servicios/inversiones",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-blue-950 p-8 rounded-2xl shadow-xl border border-blue-800/50 text-center flex flex-col items-center"
              >
                {service.icon}
                <h3 className="text-2xl font-bold mb-4 text-amber-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="flex flex-col gap-2 mt-auto">
                  <Link
                    to={service.link}
                    className="inline-block bg-amber-500 text-blue-900 px-6 py-2 rounded-full text-sm font-semibold hover:bg-amber-600 transition-colors duration-300"
                  >
                    Ver más detalles
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="whyus" className="py-16 md:py-24 bg-blue-50 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12 text-blue-800">
            ¿Por Qué Elegir Roberts Propiedades?
          </h2>
          <p className="text-lg md:text-xl text-center mb-16 max-w-3xl mx-auto text-gray-700 leading-relaxed">
            Nuestra diferencia radica en un enfoque estratégico, el uso de
            tecnología avanzada y el compromiso inquebrantable con la excelencia
            y la rentabilidad de nuestros clientes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1: Expertise and Experience */}
            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
              <Users className="w-16 h-16 text-amber-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-blue-700">
                Experiencia Comprobada
              </h3>
              <p className="text-gray-700">
                Contamos con un equipo de profesionales altamente calificados y
                años de experiencia en el mercado inmobiliario chileno,
                garantizando conocimiento profundo y soluciones efectivas.
              </p>
            </div>

            {/* Feature 2: Data-Driven Strategies */}
            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
              <Building className="w-16 h-16 text-amber-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-blue-700">
                Estrategias Data-Driven
              </h3>
              <p className="text-gray-700">
                Nuestras decisiones están fundamentadas en análisis de mercado
                en tiempo real, utilizando herramientas tecnológicas para
                identificar tendencias y optimizar cada operación.
              </p>
            </div>

            {/* Feature 3: Customized Solutions */}
            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
              <HomeIcon className="w-16 h-16 text-amber-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-blue-700">
                Soluciones Personalizadas
              </h3>
              <p className="text-gray-700">
                Entendemos que cada cliente es único. Diseñamos estrategias a
                medida que se alinean perfectamente con sus objetivos y el
                perfil específico de su inversión o propiedad.
              </p>
            </div>

            {/* Feature 4: Transparency and Trust */}
            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
              <DollarSign className="w-16 h-16 text-amber-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-blue-700">
                Transparencia y Confianza
              </h3>
              <p className="text-gray-700">
                Operamos con total transparencia en cada fase del proceso,
                brindando comunicación constante y asesoría honesta para
                construir relaciones de confianza duraderas.
              </p>
            </div>

            {/* Feature 5: Comprehensive Market Reach */}
            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
              <MapPin className="w-16 h-16 text-amber-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-blue-700">
                Amplio Alcance de Mercado
              </h3>
              <p className="text-gray-700">
                Nuestra extensa red de contactos y plataformas de difusión
                aseguran que su propiedad o búsqueda alcance al público más
                relevante y calificado.
              </p>
            </div>

            {/* Feature 6: Long-Term Partnership */}
            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
              <Mail className="w-16 h-16 text-amber-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-blue-700">
                Relación a Largo Plazo
              </h3>
              <p className="text-gray-700">
                Buscamos ser su socio estratégico en el tiempo, ofreciendo
                acompañamiento y soporte continuo para todas sus futuras
                necesidades inmobiliarias.
              </p>
            </div>
          </div>

          {/* Call to Action Button - Centered */}
          <div className="text-center mt-16">
            <Link
              to="/contacto"
              className="inline-block px-8 py-4 bg-amber-400 text-blue-900 font-semibold rounded-full hover:bg-amber-500 transition-colors duration-300 shadow-lg text-lg"
            >
              Hablemos de su próximo proyecto inmobiliario
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section
        id="mapa-ubicacion"
        className="py-16 md:py-24 bg-gray-50 text-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12 text-blue-800">
            Nuestra Ubicación Central en Santiago
          </h2>
          <p className="text-lg md:text-xl text-center mb-16 max-w-3xl mx-auto text-gray-700">
            Visítanos en nuestra oficina principal o explora el mapa para ver
            nuestra presencia en las zonas clave de Santiago.
          </p>

          {/* Google Maps API Integration */}
          <div
            className="mt-6 rounded-lg overflow-hidden shadow-lg border border-gray-300"
            style={{ height: "450px", width: "100%" }}
          >
            <APIProvider
              apiKey="AIzaSyCfksahfFpi55mGqgh0iMYfe9qiiKZ04qk"
              language="es"
              region="CL"
            >
              <Map
                defaultCenter={SIMULATED_PROPERTY_LOCATION}
                zoom={14}
                gestureHandling={"greedy"}
                disableDefaultUI={false}
                mapId={"YOUR_MAP_ID"} // Optional: your custom Map ID
              >
                <AdvancedMarker
                  position={SIMULATED_PROPERTY_LOCATION}
                  title="Oficina Principal Roberts Propiedades"
                >
                  <Pin
                    background={"#0F766E"}
                    borderColor={"#000"}
                    glyphColor={"#FFF"}
                  />
                </AdvancedMarker>
              </Map>
            </APIProvider>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/#contacto"
              className="inline-block px-8 py-4 bg-blue-700 text-white font-semibold rounded-full hover:bg-blue-800 transition-colors duration-300 shadow-lg"
            >
              Ir a la Sección de Contacto →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-amber-300">
                Contáctanos
              </h2>
              <div className="space-y-4 mb-8">
                <Link
                  to="/sobre-nosotros"
                  className="block text-2xl md:text-3xl font-bold hover:underline cursor-pointer text-amber-300"
                >
                  Sobre Nosotros
                </Link>
                <Link
                  to="/nuestro-equipo"
                  className="block text-2xl md:text-3xl font-bold hover:underline cursor-pointer text-amber-300"
                >
                  Nuestro Equipo
                </Link>
                <Link
                  to="/testimonios"
                  className="block text-2xl md:text-3xl font-bold hover:underline cursor-pointer text-amber-300"
                >
                  Testimonios
                </Link>
              </div>

              <p className="text-gray-400 mb-8 leading-relaxed">
                Estamos aquí para ayudarte a encontrar la propiedad perfecta o a
                vender la tuya con la mayor eficiencia y profesionalismo.
              </p>
              <div className="space-y-4">
                <p className="flex items-center text-gray-400">
                  <Mail size={20} className="mr-2 text-amber-300" />
                  <span className="font-semibold mr-2">Email:</span>
                  <a
                    href="mailto:contacto@inmobiliariaROBERTS.com"
                    className="hover:text-amber-300 transition-colors duration-300"
                  >
                    contacto@inmobiliariaROBERTS.com
                  </a>
                </p>
                <p className="flex items-center text-gray-400">
                  <Building size={20} className="mr-2 text-amber-300" />
                  <span className="font-semibold mr-2">Teléfono:</span>
                  <a
                    href="tel:+56912345678"
                    className="hover:text-amber-300 transition-colors duration-300"
                  >
                    +569 1234 5678
                  </a>
                </p>
              </div>
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://www.instagram.com/inmobiliariaROBERTS/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-300 transition-colors duration-300"
                >
                  <Instagram size={28} />
                </a>
                <a
                  href="https://www.facebook.com/inmobiliariaROBERTS/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-300 transition-colors duration-300"
                >
                  <Facebook size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/company/inmobiliariaROBERTS/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-300 transition-colors duration-300"
                >
                  <Linkedin size={28} />
                </a>
              </div>
            </div>
            <form className="space-y-6 bg-gray-800 p-8 rounded-2xl shadow-xl">
              <h3 className="text-center text-2xl font-bold text-amber-300 mb-6">
                Envíanos un Mensaje
              </h3>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-300 mb-1"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-lg bg-gray-700 border border-gray-600 text-white p-3 focus:ring-amber-500 focus:border-amber-500 outline-none placeholder-gray-400"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-lg bg-gray-700 border border-gray-600 text-white p-3 focus:ring-amber-500 focus:border-amber-500 outline-none placeholder-gray-400"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-300 mb-1"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-lg bg-gray-700 border border-gray-600 text-white p-3 focus:ring-amber-500 focus:border-amber-500 outline-none resize-y placeholder-gray-400"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 text-gray-900 px-6 py-3 rounded-full text-lg font-bold hover:bg-amber-600 transition-colors duration-300 transform hover:scale-105 shadow-md"
              >
                Enviá Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-12 border-t border-blue-800/10 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="text-amber-300">Inmobiliaria</span> ROBERTS
              </h3>
              <p className="text-gray-400 text-sm">
                Tu aliado estratégico en el mercado inmobiliario, brindando
                soluciones integrales y personalizadas.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/#inicio"
                    className="text-gray-400 hover:text-amber-300 transition-colors duration-300"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#propiedades"
                    className="text-gray-400 hover:text-amber-300 transition-colors duration-300"
                  >
                    Propiedades
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#servicios"
                    className="text-gray-400 hover:text-amber-300 transition-colors duration-300"
                  >
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#whyus"
                    className="text-gray-400 hover:text-amber-300 transition-colors duration-300"
                  >
                    Propuesta de Valor
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#contacto"
                    className="text-gray-400 hover:text-amber-300 transition-colors duration-300"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Síguenos</h3>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a
                  href="https://instagram.com/inmobiliariaROBERTS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-300 transition-colors duration-300"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.facebook.com/inmobiliariaROBERTS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-300 transition-colors duration-300"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/company/inmobiliariaROBERTS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-300 transition-colors duration-300"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p className="mb-2">
              &copy; {new Date().getFullYear()} Inmobiliaria ROBERTS. Todos los
              derechos reservados.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 mt-4">
              <Link
                to="/politicas-de-privacidad"
                className="text-gray-400 hover:text-amber-300 transition-colors duration-300"
              >
                Políticas de Privacidad
              </Link>
              <Link
                to="/terminos-y-condiciones"
                className="text-gray-400 hover:text-amber-300 transition-colors duration-300"
              >
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
