import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Importamos íconos adicionales de Lucide-React
import {
  ChevronsRight,
  ShieldCheck,
  Search,
  FileText,
  DollarSign,
  Briefcase,
  Home as HomeIcon,
  HelpCircle,
  Clock,
  ArrowRight,
} from "lucide-react";

// Datos para la línea de tiempo
const ARRIENDO_STEPS = [
  {
    id: 1,
    title: "Valoración y Estrategia de Mercado",
    icon: HomeIcon,
    description:
      "Realizamos un análisis de mercado exhaustivo para determinar el precio de arriendo óptimo de tu propiedad, maximizando tu rentabilidad y atrayendo a los arrendatarios ideales.",
  },
  {
    id: 2,
    title: "Marketing y Promoción 360°",
    icon: Search,
    description:
      "Promocionamos tu propiedad en los principales portales inmobiliarios, redes sociales y nuestra cartera de clientes. Utilizamos fotografía profesional y tours virtuales para destacar sus mejores atributos.",
  },
  {
    id: 3,
    title: "Selección Rigurosa de Candidatos",
    icon: Briefcase,
    description:
      "Realizamos un proceso de filtro exhaustivo, incluyendo análisis de riesgo comercial, solvencia económica y validación de referencias, para encontrar un arrendatario confiable y responsable.",
  },
  {
    id: 4,
    title: "Gestión de Contratos y Asesoría Legal",
    icon: FileText,
    description:
      "Nos encargamos de la redacción y firma de contratos, garantizando que todos los acuerdos cumplan con la normativa legal vigente y protejan tus intereses como propietario.",
  },
  {
    id: 5,
    title: "Administración Mensual Completa",
    icon: DollarSign,
    description:
      "Olvídate de la gestión diaria. Nos ocupamos del cobro de rentas, pago de gastos comunes, coordinación de reparaciones y te entregamos informes periódicos del estado de tu inversión.",
  },
];

// Datos para el FAQ
const FAQ_DATA = [
  {
    question: "¿Cuál es el costo del servicio de administración?",
    answer:
      "Nuestros honorarios de administración corresponden a un porcentaje de la renta mensual, el cual se define en el contrato de forma transparente. Este servicio incluye todas las gestiones para tu tranquilidad.",
  },
  {
    question: "¿Qué pasa si el arrendatario no paga la renta?",
    answer:
      "Nuestro servicio incluye la gestión de cobranza. En caso de impago, activamos inmediatamente los protocolos de asesoría legal para proteger tu inversión y resolver la situación de manera eficiente.",
  },
  {
    question: "¿Quién se encarga de las reparaciones de la propiedad?",
    answer:
      "Nosotros coordinamos y supervisamos las reparaciones necesarias. En caso de emergencias, actuamos rápidamente para solucionar cualquier problema, informándote de cada paso.",
  },
  {
    question: "¿Cómo seleccionan a los arrendatarios?",
    answer:
      "Nuestros criterios de selección son rigurosos. Realizamos un estudio comercial completo y validamos referencias para asegurarnos de que el arrendatario sea solvente y confiable, minimizando riesgos para tu propiedad.",
  },
];

const ServiciosArriendoPage: React.FC = () => {
  const navigate = useNavigate();
  const [openStep, setOpenStep] = useState<number | null>(null); // Estado para la línea de tiempo
  const [openFaq, setOpenFaq] = useState<number | null>(null); // Estado para el FAQ

  const handleGoHome = () => {
    navigate("/");
  };

  const toggleStep = (id: number) => {
    setOpenStep(openStep === id ? null : id);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="container mx-auto p-8 bg-gray-50 text-gray-800 min-h-screen pt-20">
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

        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6 text-center">
          Servicios de Arriendo y Administración
        </h1>
        <p className="text-xl text-gray-700 mb-8 text-center">
          Gestionamos el arriendo de tu propiedad y nos encargamos de la
          administración para tu tranquilidad.
        </p>

        {/* *** CTA ESTRATÉGICO 1 *** */}
        <div className="text-center bg-blue-50 p-6 rounded-lg shadow-inner mb-12">
          <p className="text-xl md:text-2xl font-extrabold text-amber-600 mb-4">
            ¿Listo para rentabilizar tu propiedad sin preocupaciones?
          </p>
          <button
            onClick={() => navigate("/#contacto")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-xl transition-colors duration-300 transform hover:scale-105 shadow-lg"
          >
            Agenda una Asesoría Gratuita
          </button>
        </div>

        {/* *** LÍNEA DE TIEMPO INTERACTIVA *** */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
            Nuestro Proceso de Gestión de Arriendos
          </h2>
          <div className="relative border-l-4 border-blue-200 ml-4">
            {ARRIENDO_STEPS.map((step) => (
              <div key={step.id} className="mb-8">
                <div className="flex items-center -ml-6">
                  <div className="bg-blue-700 text-white p-2 rounded-full z-10">
                    <step.icon size={20} />
                  </div>
                  <div
                    className="ml-4 cursor-pointer"
                    onClick={() => toggleStep(step.id)}
                  >
                    <h3 className="text-xl font-bold text-blue-800 hover:text-blue-600 transition-colors duration-200">
                      {step.title}
                    </h3>
                  </div>
                </div>
                {openStep === step.id && (
                  <p className="ml-10 mt-2 text-gray-700 leading-relaxed transition-all duration-300 ease-in-out">
                    {step.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* *** SECCIÓN DE GARANTÍAS Y PROMESAS *** */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            Garantías y Compromisos que te dan Tranquilidad
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
              <Clock size={40} className="text-amber-500 mb-2" />
              <h4 className="text-xl font-bold text-blue-800">
                Búsqueda Rápida
              </h4>
              <p className="text-gray-700 text-sm mt-2">
                Encontramos al arrendatario ideal en tiempo récord.
              </p>
            </div>
            <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
              <ShieldCheck size={40} className="text-amber-500 mb-2" />
              <h4 className="text-xl font-bold text-blue-800">
                Garantía de Cobro
              </h4>
              <p className="text-gray-700 text-sm mt-2">
                Nos aseguramos de que recibas tu renta a tiempo, cada mes.
              </p>
            </div>
            <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
              <FileText size={40} className="text-amber-500 mb-2" />
              <h4 className="text-xl font-bold text-blue-800">
                Informes Detallados
              </h4>
              <p className="text-gray-700 text-sm mt-2">
                Mantente informado con reportes claros y transparentes.
              </p>
            </div>
          </div>
        </div>

        {/* *** SECCIÓN DE PREGUNTAS FRECUENTES (FAQ) *** */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
            Preguntas Frecuentes
          </h2>
          {FAQ_DATA.map((item, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-semibold text-blue-800">
                  {item.question}
                </h3>
                <span>
                  {openFaq === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </span>
              </div>
              {openFaq === index && (
                <p className="mt-2 text-gray-700 transition-all duration-300 ease-in-out">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* *** CTA ESTRATÉGICO 2 *** */}
        <div className="text-center bg-blue-50 p-6 rounded-lg shadow-inner mt-12">
          <p className="text-2xl md:text-3xl font-extrabold text-amber-600 mb-4">
            ¿Listo para que tu inversión trabaje para ti?
          </p>
          <button
            onClick={() => navigate("/#contacto")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-xl transition-colors duration-300 transform hover:scale-105 shadow-lg"
          >
            Obtener un Plan de Gestión
          </button>
          <p className="text-sm text-gray-600 mt-4">
            Déjanos manejar tu inversión con profesionalismo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiciosArriendoPage;
