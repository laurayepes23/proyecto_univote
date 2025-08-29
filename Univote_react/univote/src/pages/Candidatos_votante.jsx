import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles.css";

function Candidatos_votante() {
  return (
    <div className="index-page">
      <div className="logo_inicio">
        <a href="/votante"><img src="/img/logo.png" alt="Logo" /></a>
      </div>

      {/* NAVBAR */}
      <nav className="navbar px-4">
        <ul className="nav-links d-flex ms-auto">
          <li className="nav-item">
            <a className="nav-link text-white" href="/Elecciones_votante">
              <img src="/img/elecciones_votante.png" alt="Elecciones" className="nav-icon" />
              Elecciones
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="">
              <img src="/img/resultados.png" alt="Resultados" className="nav-icon" />
              Resultados
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="">
              <img src="/img/mi-perfil.png" alt="Mi Perfil" className="nav-icon" />
              Mi Perfil
            </a>
          </li>
        </ul>
      </nav>

      <main className="contenedor">
        <h2 className="titulo">Bienvenido</h2>

        <section className="acciones">
          <div className="card">
            <img src="/img/Candidata_karol.png" alt="candidato" />
            <h1>Candidato a Decano</h1>
            <h3>karol fernandez</h3>
            <p>Me postulo a la decanatura con el compromiso de una facultad participativa, académicamente fuerte y cercana a estudiantes y docentes.</p>
            <a href="/Elecciones_adm" className="btn">
              Ver mas
            </a>
          </div>

          <div className="card">
            <img src="/img/candidato_2.png" alt="candidato 2" />
            <h1>Candidato a Decano</h1>
            <h3>Manuela Marroquin</h3>
            <p>Me postulo como Representante para ser tu voz, defender tus intereses y promover una comunidad más justa e inclusiva.</p>
            <a href="/Elecciones_adm" className="btn">
              Ver mas
            </a>
          </div>

          <div className="card">
            <img src="/img/candidato_3.png" alt="candidato 2" />
            <h1>Candidato a Decano</h1>
            <h3>Julian castro</h3>
            <p>Aspiro a la decanatura con el compromiso de liderar una facultad participativa, innovadora y cercana a toda la comunidad universitaria.</p>
            <a href="/Elecciones_adm" className="btn">
              Ver mas
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>Copyright © 2025 Univote. Todos los derechos reservados.</p>
      </footer>



    </div>
  );
}

export default Candidatos_votante;