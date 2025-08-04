import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ServiciosTasacionPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  }; // *** ESTADOS PARA LA SIMULACIÓN DE TASACIÓN (MÁS DETALLADOS)

  const [superficie, setSuperficie] = useState<number | "">("");
  const [ubicacion, setUbicacion] = useState("Las Condes");
  const [tipoPropiedad, setTipoPropiedad] = useState("Casa");
  const [habitaciones, setHabitaciones] = useState<number | "">("");
  const [banos, setBanos] = useState<number | "">("");
  const [anoConstruccion, setAnoConstruccion] = useState<number | "">("");

  const [valorEstimado, setValorEstimado] = useState<[number, number] | null>(
    null
  ); // Función para calcular la tasación (con lógica mejorada)

  const handleSimularTasacion = () => {
    if (
      superficie === "" ||
      superficie <= 0 ||
      habitaciones === "" ||
      banos === "" ||
      anoConstruccion === ""
    ) {
      setValorEstimado(null);
      alert("Por favor, completa todos los campos para la simulación.");
      return;
    } // Algoritmo de simulación simple: UF por m², con ajustes por características

    let ufPorMetroCuadrado = 0;
    switch (ubicacion) {
      case "Las Condes":
        ufPorMetroCuadrado = 80;
        break;
      case "Providencia":
        ufPorMetroCuadrado = 70;
        break;
      case "Santiago Centro":
        ufPorMetroCuadrado = 50;
        break;
      default:
        ufPorMetroCuadrado = 60;
    }

    let valorBase = (superficie as number) * ufPorMetroCuadrado; // Ajustes por número de habitaciones y baños
    valorBase += (habitaciones as number) * 50;
    valorBase += (banos as number) * 75; // Ajuste por antigüedad de la propiedad (ejemplo)

    const antiguedad = new Date().getFullYear() - (anoConstruccion as number);
    if (antiguedad > 30)
      valorBase *= 0.9; // Valor 10% menor para propiedades muy antiguas
    else if (antiguedad < 5) valorBase *= 1.1; // Valor 10% mayor para propiedades nuevas // Generamos un rango para enfatizar que es una estimación

    const rangoMin = Math.round(valorBase * 0.95);
    const rangoMax = Math.round(valorBase * 1.05);

    setValorEstimado([rangoMin, rangoMax]);
  }; // Estado y función para el formulario de contacto

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
    e.preventDefault(); // Aquí deberías integrar con un servicio de backend o Netlify Forms
    alert("Solicitud de tasación enviada. ¡Pronto te contactaremos!"); // En un entorno real, enviarías 'contactoData' a tu servidor // y luego limpiarías el formulario si el envío fue exitoso.
  };

  return (
    <div className="container mx-auto p-8 bg-gray-50 text-gray-800 min-h-screen pt-20">
           {" "}
      <div className="max-w-4xl mx-auto">
                {/* Botón de Retorno al Inicio */}       {" "}
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
                    Tasaciones Profesionales        {" "}
        </h1>
               {" "}
        <p className="text-xl text-gray-700 mb-8 text-center">
          Obtén una valoración precisa y justa de tu propiedad con nuestros
          expertos certificados.        {" "}
        </p>
                {/* Sección de Simulación de Tasación */}       {" "}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
                   {" "}
          <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">
                      Ingresa los datos para obtener una estimación inmediata. 
                     {" "}
          </h2>
                   {" "}
          <p className="text-lg text-gray-700 mb-6 text-center">
                               {" "}
          </p>
                   {" "}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                       {" "}
            <input
              type="number"
              placeholder="Superficie Construida (m²)"
              value={superficie}
              onChange={(e) => setSuperficie(parseInt(e.target.value) || "")}
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
                       {" "}
            <select
              value={ubicacion}
              onChange={(e) => setUbicacion(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                            <option value="Las Condes">Las Condes</option>     
                      <option value="Providencia">Providencia</option>         
                  <option value="Santiago Centro">Santiago Centro</option>     
                   {" "}
            </select>
                       {" "}
            <select
              value={tipoPropiedad}
              onChange={(e) => setTipoPropiedad(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                            <option value="Casa">Casa</option>             {" "}
              <option value="Departamento">Departamento</option>             {" "}
              <option value="Oficina">Oficina</option>           {" "}
            </select>
                       {" "}
            <input
              type="number"
              placeholder="N° de Habitaciones"
              value={habitaciones}
              onChange={(e) => setHabitaciones(parseInt(e.target.value) || "")}
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
                       {" "}
            <input
              type="number"
              placeholder="N° de Baños"
              value={banos}
              onChange={(e) => setBanos(parseInt(e.target.value) || "")}
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
                       {" "}
            <input
              type="number"
              placeholder="Año de Construcción"
              value={anoConstruccion}
              onChange={(e) =>
                setAnoConstruccion(parseInt(e.target.value) || "")
              }
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
                     {" "}
          </div>
                   {" "}
          <button
            onClick={handleSimularTasacion}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 transform hover:scale-105 shadow-lg"
          >
                        Simular Tasación          {" "}
          </button>
                 {" "}
        </div>
               {" "}
        {/* Resultado de la simulación y formulario de contacto integrado */}   
           {" "}
        {valorEstimado && (
          <div className="bg-white rounded-xl shadow-xl p-8 mb-8 text-center">
                       {" "}
            <h3 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4">
                            Tu Valor Referencial Estimado            {" "}
            </h3>
                       {" "}
            <p className="text-2xl md:text-4xl font-extrabold text-amber-600 mt-2 mb-4">
                            UF {valorEstimado[0].toLocaleString("es-CL")} - UF{" "}
              {valorEstimado[1].toLocaleString("es-CL")}           {" "}
            </p>
                       {" "}
            <p className="text-sm text-gray-600 italic">
                            *Este valor es solo una estimación basada en el
              promedio del mercado. Para una tasación oficial y precisa, es
              necesaria una visita técnica.            {" "}
            </p>
                        {/* Formulario de Contacto para el lead */}           {" "}
            <form
              onSubmit={handleFormSubmit}
              className="mt-8 bg-blue-50 p-6 rounded-lg shadow-inner"
              data-netlify="true"
              name="tasacion-form"
            >
                           {" "}
              <input type="hidden" name="form-name" value="tasacion-form" />   
                       {" "}
              <h4 className="text-2xl font-bold text-blue-700 mb-4">
                                Solicita tu tasación profesional              {" "}
              </h4>
                           {" "}
              <p className="text-gray-700 mb-6">
                                Un experto te contactará para agendar una visita
                y entregarte el informe completo.              {" "}
              </p>
                                         {" "}
              {/* Campos precargados para facilitar el llenado */}             {" "}
              <input type="hidden" name="superficie" value={superficie} />     
                      <input type="hidden" name="ubicacion" value={ubicacion} />
                           {" "}
              <input
                type="hidden"
                name="tipo_propiedad"
                value={tipoPropiedad}
              />
                           {" "}
              <input type="hidden" name="habitaciones" value={habitaciones} />
                            <input type="hidden" name="banos" value={banos} /> 
                         {" "}
              <input
                type="hidden"
                name="ano_construccion"
                value={anoConstruccion}
              />
                           {" "}
              <div className="space-y-4">
                               {" "}
                <input
                  type="text"
                  name="name"
                  placeholder="Tu Nombre"
                  value={contactoData.name}
                  onChange={handleContactoChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                               {" "}
                <input
                  type="email"
                  name="email"
                  placeholder="Tu Email"
                  value={contactoData.email}
                  onChange={handleContactoChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                               {" "}
                <input
                  type="tel"
                  name="phone"
                  placeholder="Tu Teléfono"
                  value={contactoData.phone}
                  onChange={handleContactoChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                             {" "}
              </div>
                           {" "}
              <button
                type="submit"
                className="mt-6 w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 transform hover:scale-105 shadow-lg"
              >
                                Enviar Solicitud              {" "}
              </button>
                         {" "}
            </form>
                     {" "}
          </div>
        )}
                        {/* Contenido general de la página de tasación */}     
         {" "}
        <div className="bg-white rounded-xl shadow-xl p-8 mt-8">
                   {" "}
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
                        Valoración Experta para tu Propiedad          {" "}
          </h2>
                   {" "}
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Una tasación profesional es fundamental para conocer el
            valor real de tu inmueble, ya sea para una venta, compra, herencia o
            cualquier otro propósito legal o financiero. Nuestro equipo de
            tasadores cuenta con amplia experiencia y certificaciones para
            ofrecerte un informe detallado y objetivo.          {" "}
          </p>
                   {" "}
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                       {" "}
            <li>Tasaciones residenciales, comerciales e industriales.</li>     
                  <li>Informes detallados y fundamentados.</li>           
            <li>Análisis de mercado comparativo.</li>           
            <li>Cumplimiento con normativas y estándares vigentes.</li>         
              <li>Asesoría personalizada sobre el valor de tu propiedad.</li>   
                 {" "}
          </ul>
                   {" "}
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
                        Confía en Inmobiliaria ROBERTS para obtener una tasación
            que te brinde la seguridad y la información necesaria para tomar las
            mejores decisiones.          {" "}
          </p>
               
        </div>
         
      </div>
         
    </div>
  );
};

export default ServiciosTasacionPage;
