// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


// Importa tus componentes de página principales
import HomePage from "./pages/HomePage"; // El nuevo componente para la página de inicio
import PropiedadLasCondesModerna from "./pages/PropiedadLasCondesModerna";
import PropiedadProvidenciaLuminoso from "./pages/PropiedadProvidenciaLuminoso";
import PropiedadSantiagoOficina from "./pages/PropiedadSantiagoOficina";

// Importa los componentes para las otras páginas de detalle
import ServiciosVentaPage from "./pages/ServiciosVentaPage";
import ServiciosCompraPage from "./pages/ServiciosCompraPage";
import ServiciosTasacionPage from "./pages/ServiciosTasacionPage";
import ServiciosArriendoPage from "./pages/ServiciosArriendoPage";
import ServiciosLegalPage from "./pages/ServiciosLegalPage";
import ServiciosInversionesPage from "./pages/ServiciosInversionesPage";
import NovedadVitacuraLujoPage from "./pages/NovedadVitacuraLujoPage";
import NovedadGuiaViviendaPage from "./pages/NovedadGuiaViviendaPage";
import NovedadInversionRentablePage from "./pages/NovedadInversionRentablePage";
import AboutUsPage from "./pages/AboutUsPage";
import OurTeamPage from "./pages/OurTeamPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta para la Página de Inicio (HomePage) */}
        <Route path="/" element={<HomePage />} />

        {/* Rutas para las páginas de detalle de propiedades */}
        <Route
          path="/propiedad/las-condes-moderna"
          element={<PropiedadLasCondesModerna />}
        />
        <Route
          path="/propiedad/providencia-luminoso"
          element={<PropiedadProvidenciaLuminoso />}
        />
        <Route
          path="/propiedad/santiago-oficina"
          element={<PropiedadSantiagoOficina />}
        />

        {/* Rutas para las páginas de detalle de servicios */}
        <Route path="/servicios/venta" element={<ServiciosVentaPage />} />
        <Route path="/servicios/compra" element={<ServiciosCompraPage />} />
        <Route path="/servicios/tasacion" element={<ServiciosTasacionPage />} />
        <Route path="/servicios/arriendo" element={<ServiciosArriendoPage />} />
        <Route path="/servicios/legal" element={<ServiciosLegalPage />} />
        <Route
          path="/servicios/inversiones"
          element={<ServiciosInversionesPage />}
        />

        {/* Rutas para las páginas de detalle de novedades */}
        <Route
          path="/novedades/vitacura-lujo"
          element={<NovedadVitacuraLujoPage />}
        />
        <Route
          path="/novedades/guia-vivienda"
          element={<NovedadGuiaViviendaPage />}
        />
        <Route
          path="/novedades/inversion-rentable"
          element={<NovedadInversionRentablePage />}
        />

        {/* Rutas para otras páginas institucionales/legales */}
        <Route path="/sobre-nosotros" element={<AboutUsPage />} />
        <Route path="/nuestro-equipo" element={<OurTeamPage />} />
        <Route path="/testimonios" element={<TestimonialsPage />} />
        <Route
          path="/politicas-de-privacidad"
          element={<PrivacyPolicyPage />}
        />
        <Route
          path="/terminos-y-condiciones"
          element={<TermsAndConditionsPage />}
        />

        {/* Ruta comodín para cualquier path no encontrado, redirige al inicio */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
