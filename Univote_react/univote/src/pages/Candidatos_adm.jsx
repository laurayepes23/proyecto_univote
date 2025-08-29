import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles.css";

function Candidatos_adm() {
  return (
    <div className="index-page">
      <div className="logo_inicio">
        <a href="/administrador"><img src="/img/logo.png" alt="Logo" /></a>
      </div>

      {/* NAVBAR */}
      <nav className="navbar px-4">
        <ul className="nav-links d-flex ms-auto">
          <li className="nav-item">
            <a className="nav-link text-white" href="/Elecciones_adm">
              <img src="/img/elecciones.png" alt="Elecciones" className="nav-icon" />
              Elecciones
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/Candidatos_adm">
              <img src="/img/candidatos.png" alt="Candidatos" className="nav-icon" />
              Candidatos
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
        <h2 className="titulo">Gestión de Candidatos</h2>



        <table>
          <thead>
            <tr>
              <th>Nombre Candidato</th>
              <th>Tipo de documento</th>
              <th>Numero de doc</th>
              <th>correo</th>
              <th>Estado</th>
              <th>Foto</th>
              <th>Eleccion a la que se postula</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Manuela Marroquin</td>
              <td>Cedula de cuidadania</td>
              <td>1034287971</td>
              <td>manuela99@uni.edu.co</td>
              <td>Activa</td>
              <td>Foto</td>
              <td>Elección Representantes</td>
              <td>
                <button className="btn btn-editar">Aceptar</button>
                <button className="btn btn-eliminar">Eliminar</button>
              </td>
            </tr>
            <tr>
              <td>karol fernandez</td>
              <td>Cedula de cuidadania</td>
              <td>1032569877</td>
              <td>karol0099@uni.edu.co</td>
              <td>Activa</td>
              <td>Foto</td>
              <td>Elección Decanos</td>
              <td>
                <button className="btn btn-editar">Aceptar</button>
                <button className="btn btn-eliminar">Eliminar</button>
              </td>
            </tr>
            <tr>
              <td>Julian castro</td>
              <td>Cedula de cuidadania</td>
              <td>1026598788</td>
              <td>juian.millos@uni.edu.co</td>
              <td>Activo</td>
              <td>Foto</td>
              <td>Elección Decanos</td>
              <td>
                <button className="btn btn-editar">Aceptar</button>
                <button className="btn btn-eliminar">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </main>

      <footer>
        <p>Copyright © 2025 Univote. Todos los derechos reservados.</p>
      </footer>



    </div>
  );
}

export default Candidatos_adm;