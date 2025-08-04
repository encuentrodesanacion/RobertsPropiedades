import { useState } from "react";

const ReservaHora = () => {
  const [servicio, setServicio] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  const servicios = [
    "Finde de talleres y terapias grupales",
    "Tratamiento Holístico",
    "@ipal",
  ];
  const especialidades = [
    "Regresiones",
    "Tarot",
    "Terapia Respuesta Espiritual (TRE)",
    "Tameana",
    "Péndulo Hebreo",
    "Cruz de Anhk",
    "Carta Natal",
    "Clarividencia",
    "Registros Akáshicos",
    "Liberación Emociones Atrapadas",
    "Lectura de Runas",
    "Lectura de Oráculos",
    "Constelaciones Familiares",
  ];
  const horasDisponibles = ["10:00", "11:00", "12:00", "13:00"];

  // Define la función para fijar los valores predeterminados
  const handleReservarTratamiento = () => {
    setServicio("Tratamiento Holístico");
    setEspecialidad("Terapia Respuesta Espiritual (TRE)");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Reserva realizada con éxito");
  };

  return (
    <section
      id="reserva"
      className="bg-white py-8 px-4 max-w-3xl mx-auto rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-semibold text-center text-cyan-600 mb-6">
        Reserva tu Hora
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="servicio"
            className="block text-sm font-medium text-gray-700"
          >
            Servicio
          </label>
          <select
            id="servicio"
            name="servicio"
            value={servicio}
            onChange={(e) => setServicio(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value="">Selecciona un servicio</option>
            {servicios.map((srv, index) => (
              <option key={index} value={srv}>
                {srv}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="especialidad"
            className="block text-sm font-medium text-gray-700"
          >
            Especialidad
          </label>
          <select
            id="especialidad"
            name="especialidad"
            value={especialidad}
            onChange={(e) => setEspecialidad(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value="">Selecciona una especialidad</option>
            {especialidades.map((esp, index) => (
              <option key={index} value={esp}>
                {esp}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="fecha"
            className="block text-sm font-medium text-gray-700"
          >
            Fecha
          </label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div>
          <label
            htmlFor="hora"
            className="block text-sm font-medium text-gray-700"
          >
            Hora
          </label>
          <select
            id="hora"
            name="hora"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value="">Selecciona una hora</option>
            {horasDisponibles.map((h, index) => (
              <option key={index} value={h}>
                {h}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="nombre"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div>
          <label
            htmlFor="correo"
            className="block text-sm font-medium text-gray-700"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          onClick={handleReservarTratamiento} // Asegúrate de llamar a la función al hacer clic
        >
          Confirmar Reserva
        </button>
      </form>
    </section>
  );
};

export default ReservaHora;
