import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles.css";

function Home() {
  // Función para desplazarse a una sección específica
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });

      // Cerrar el dropdown después de hacer clic (opcional)
      const dropdownElement = document.getElementById('nosotrosDropdown');
      if (dropdownElement) {
        const bootstrapDropdown = window.bootstrap.Dropdown.getInstance(dropdownElement);
        if (bootstrapDropdown) {
          bootstrapDropdown.hide();
        }
      }
    }
  };

  return (
    <div className="index-page">
      <div className="logo_inicio">
        <a href="/"><img src="/img/logo.png" /></a>
      </div>
      {/* NAVBAR */}
      <nav className="navbar px-4">
        <ul className="nav-links d-flex ms-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-white"
              href="#"
              id="nosotrosDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Nosotros
            </a>
            <ul className="dropdown-menu" aria-labelledby="nosotrosDropdown">
              <li>
                <a className="dropdown-item" href="#quienes-somos"
                  onClick={(e) => { e.preventDefault(); scrollToSection('quienes-somos'); }}>
                  Quiénes somos
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="#vision"
                  onClick={(e) => { e.preventDefault(); scrollToSection('vision'); }}>
                  Visión
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#mision"
                  onClick={(e) => { e.preventDefault(); scrollToSection('mision'); }}>
                  Misión
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#contactanos"
                  onClick={(e) => { e.preventDefault(); scrollToSection('contactanos'); }}>
                  Contáctanos
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/RegistroVotante">Registrarse</a>
          </li>
        </ul>
      </nav>

      {/* CARRUSEL */}
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/img/imagen_de_inicio.png"
              className="d-block w-100"
              alt="Imagen 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/img/IMG-2.png"
              className="d-block w-100"
              alt="Imagen 2"
            />
          </div>
        </div>

        {/* Controles */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>

      {/* Añadir IDs a las secciones para que los enlaces funcionen */}
      <div id="quienes-somos" className="quienes-somos-container">
        <h2>¿Quiénes somos?</h2>
        <p>
          Somos una plataforma dedicada a transformar y facilitar los procesos electorales universitarios,
          garantizando seguridad, transparencia y accesibilidad para todos los miembros de la comunidad académica.
          Nuestra misión es integrar tecnologías modernas, como blockchain y validaciones digitales, para asegurar
          que cada voto sea confiable y cada proceso de elección sea legítimo. Nos enfocamos en la innovación tecnológica,
          la participación activa de estudiantes y docentes, y en fomentar la confianza en los sistemas de votación electrónica.
          Buscamos ser una herramienta que conecte a la comunidad universitaria, promoviendo la democracia y la transparencia
          en cada elección, y asegurando que los procesos electorales sean inclusivos, seguros y eficientes.
        </p>
      </div>

      <div className="split-vertical">
        <div id="vision" className="section vision">
          <h2>Visión</h2>
          <p>
            Ser la plataforma líder en votaciones electrónicas universitarias a nivel nacional e internacional, reconocida por su innovación tecnológica, confiabilidad y capacidad para fomentar la participación democrática en la comunidad académica.
          </p>
        </div>

        <div id="mision" className="section mision">
          <h2>Misión</h2>
          <p>
            Facilitar un proceso electoral universitario seguro, transparente y accesible, integrando tecnologías modernas como blockchain y validaciones digitales, para garantizar la participación confiable de estudiantes y docentes en la elección de sus representantes.
          </p>
        </div>
      </div>

      <div id="contactanos" className="contactenos-container">
        <h2>¡Tu opinión es muy importante, déjanos tu comentario!</h2>

        <div className="contact-info">
          <p>
            <span className="icon">📧</span>
            <a href="mailto:servicioalcliente@superwow.com.co">servicioalcliente@univote.com.co</a>
          </p>
        </div>

        <h2>¡Si estas buscando una plataforma para tus votaciones, contactanos!</h2>
        <a href="https://wa.me/573105675050" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
          💬 Escríbenos
        </a>
      </div>

      {/* FOOTER */}
      <footer>
        <p>Copyright &copy; 2025 Univote. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;