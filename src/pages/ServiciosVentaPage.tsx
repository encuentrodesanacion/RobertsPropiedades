import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// *** NUEVA LISTA DE CIUDADES PARA EL SELECT
const CITIES_LIST = [
  { value: "Las Condes", label: "Las Condes" },
  { value: "Providencia", label: "Providencia" },
  { value: "Santiago Centro", label: "Santiago Centro" },
  { value: "Vitacura", label: "Vitacura" },
  { value: "Ñuñoa", label: "Ñuñoa" },
  { value: "La Florida", label: "La Florida" },
  { value: "San Bernardo", label: "San Bernardo" },
  { value: "Puente Alto", label: "Puente Alto" },
  { value: "Valparaíso", label: "Valparaíso" },
  { value: "Viña del Mar", label: "Viña del Mar" },
  { value: "otro", label: "Otra Ciudad" },
];

const ServiciosVentaPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const [superficie, setSuperficie] = useState<number | "">("");
  const [ubicacion, setUbicacion] = useState("Las Condes");
  const [tipoPropiedad, setTipoPropiedad] = useState("Casa");
  const [valorEstimado, setValorEstimado] = useState<[number, number] | null>(
    null
  );
  const [valorNetoEstimado, setValorNetoEstimado] = useState<number | null>(
    null
  );

  const handleSimularVenta = () => {
    if (superficie === "" || superficie <= 0) {
      setValorEstimado(null);
      setValorNetoEstimado(null);
      alert("Por favor, ingresa una superficie válida.");
      return;
    }

    // *** Lógica de simulación ajustada para usar la nueva lista de ciudades
    let ufPorMetroCuadrado = 0;
    switch (ubicacion) {
      case "Las Condes":
        ufPorMetroCuadrado = tipoPropiedad === "Casa" ? 85 : 75;
        break;
      case "Providencia":
        ufPorMetroCuadrado = tipoPropiedad === "Casa" ? 75 : 65;
        break;
      case "Santiago Centro":
        ufPorMetroCuadrado = tipoPropiedad === "Casa" ? 60 : 50;
        break;
      case "Vitacura":
        ufPorMetroCuadrado = tipoPropiedad === "Casa" ? 95 : 80;
        break;
      case "Ñuñoa":
        ufPorMetroCuadrado = tipoPropiedad === "Casa" ? 70 : 60;
        break;
      case "La Florida":
        ufPorMetroCuadrado = tipoPropiedad === "Casa" ? 55 : 45;
        break;
      case "San Bernardo":
        ufPorMetroCuadrado = tipoPropiedad === "Casa" ? 45 : 35;
        break;
      case "Puente Alto":
        ufPorMetroCuadrado = tipoPropiedad === "Casa" ? 40 : 30;
        break;
      case "Valparaíso":
        ufPorMetroCuadrado = tipoPropiedad === "Casa" ? 50 : 40;
        break;
      case "Viña del Mar":
        ufPorMetroCuadrado = tipoPropiedad === "Casa" ? 60 : 50;
        break;
      default:
        // Caso para "Otra Ciudad" o cualquier otro valor
        ufPorMetroCuadrado = 60;
        break;
    }

    const valorBase = (superficie as number) * ufPorMetroCuadrado;

    const rangoMin = Math.round(valorBase * 0.95);
    const rangoMax = Math.round(valorBase * 1.05);

    const comisionPorcentaje = 0.02;
    const valorNeto = Math.round(valorBase * (1 - comisionPorcentaje));

    setValorEstimado([rangoMin, rangoMax]);
    setValorNetoEstimado(valorNeto);
  };

  const [contactoData, setContactoData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleContactoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactoData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Solicitud de tasación y venta enviada. ¡Pronto te contactaremos!");
  };

  return (
    <div className="container mx-auto p-8 bg-gray-50 text-gray-800 min-h-screen pt-20">
      <div className="max-w-4xl mx-auto">
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

        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6 text-center">
          Servicios de Venta de Propiedades
        </h1>
        <p className="text-xl text-gray-700 mb-8 text-center">
          Te ayudamos a vender tu propiedad de forma rápida y al mejor precio.
        </p>

        <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">
            Simula el Valor de Venta de tu Propiedad
          </h2>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Ingresa los datos para obtener una estimación inmediata del valor y
            tu ganancia.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <input
              type="number"
              placeholder="Superficie Construida (m²)"
              value={superficie}
              onChange={(e) => setSuperficie(parseInt(e.target.value) || "")}
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* *** CAMBIO: Usamos un select para las ubicaciones predefinidas */}
            <select
              value={ubicacion}
              onChange={(e) => setUbicacion(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {CITIES_LIST.map((city) => (
                <option key={city.value} value={city.value}>
                  {city.label}
                </option>
              ))}
            </select>
            <select
              value={tipoPropiedad}
              onChange={(e) => setTipoPropiedad(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Casa">Casa</option>
              <option value="Departamento">Departamento</option>
              <option value="Oficina">Oficina</option>
            </select>
          </div>
          <button
            onClick={handleSimularVenta}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 transform hover:scale-105 shadow-lg"
          >
            Simular Valor de Venta
          </button>
        </div>

        {valorEstimado && valorNetoEstimado !== null && (
          <div className="bg-white rounded-xl shadow-xl p-8 mb-8 text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4">
              Tu Valor de Venta Estimado
            </h3>
            <p className="text-2xl md:text-4xl font-extrabold text-amber-600 mt-2 mb-4">
              UF {valorEstimado[0].toLocaleString("es-CL")} - UF{" "}
              {valorEstimado[1].toLocaleString("es-CL")}
            </p>
            <p className="text-xl font-bold text-gray-700 mb-6">
              Ganancia Neta Estimada (después de honorarios):
            </p>
            <p className="text-3xl md:text-4xl font-extrabold text-green-600 mb-4">
              UF {valorNetoEstimado.toLocaleString("es-CL")}
            </p>
            <p className="text-sm text-gray-600 italic">
              *Este valor es solo una estimación. Para una tasación y plan de
              venta oficial, por favor contáctanos.
            </p>

            <div className="mt-8 bg-blue-50 p-6 rounded-lg shadow-inner">
              <h4 className="text-2xl font-bold text-blue-700 mb-4">
                ¿Quieres validar este valor y vender tu propiedad?
              </h4>
              <p className="text-gray-700 mb-6">
                Agenda una asesoría gratuita y obtén un análisis de mercado
                completo, un plan de marketing personalizado y un informe de
                tasación oficial.
              </p>
              <form
                onSubmit={handleFormSubmit}
                data-netlify="true"
                name="venta-form"
              >
                <input type="hidden" name="form-name" value="venta-form" />
                <input type="hidden" name="superficie" value={superficie} />
                <input type="hidden" name="ubicacion" value={ubicacion} />
                <input
                  type="hidden"
                  name="tipo_propiedad"
                  value={tipoPropiedad}
                />
                <input
                  type="hidden"
                  name="valor_simulado_min"
                  value={valorEstimado[0]}
                />
                <input
                  type="hidden"
                  name="valor_simulado_max"
                  value={valorEstimado[1]}
                />
                <input
                  type="hidden"
                  name="ganancia_neta_simulada"
                  value={valorNetoEstimado}
                />

                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Tu Nombre Completo"
                    value={contactoData.name}
                    onChange={handleContactoChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Tu Email"
                    value={contactoData.email}
                    onChange={handleContactoChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Tu Teléfono (ej: +569...)"
                    value={contactoData.phone}
                    onChange={handleContactoChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  *Nos comprometemos a proteger su privacidad. Sus datos solo
                  serán utilizados para contactarlo y brindarle la asesoría
                  solicitada.
                </p>
                <button
                  type="submit"
                  className="mt-6 w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 transform hover:scale-105 shadow-lg"
                >
                  Obtener Asesoría Gratuita
                </button>
              </form>
            </div>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-xl p-8 mt-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Nuestro Enfoque en Ventas
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            En Inmobiliaria ROBERTS, nos dedicamos a maximizar el valor de tu
            propiedad y asegurar una venta rápida y eficiente. Ofrecemos una
            estrategia de marketing 360°, que incluye fotografía profesional,
            tours virtuales, promoción en portales inmobiliarios líderes y redes
            sociales.
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mt-4">
            <li>Valoración de mercado gratuita.</li>
            <li>Marketing digital avanzado.</li>
            <li>Asesoría legal y contractual.</li>
            <li>Gestión integral de visitas y negociaciones.</li>
            <li>Publicación en los principales portales inmobiliarios.</li>
            <li>Reportes de seguimiento y análisis de interesados.</li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Nuestro objetivo es simplificar el proceso de venta para ti,
            garantizando una experiencia sin estrés y resultados óptimos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiciosVentaPage;
