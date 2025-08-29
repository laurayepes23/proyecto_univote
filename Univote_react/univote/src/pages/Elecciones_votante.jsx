import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles.css"; // tu CSS personalizado

function Elecciones_Votante() {
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

            {/* CONTENIDO */}
            <main className="contenedor">
                <h2 className="titulo">Gestión de Elecciones</h2>

                <table>
                    <thead>
                        <tr>
                            <th>Nombre de la Eleccion</th>
                            <th>Fecha Inicio</th>
                            <th>Fecha fin (Dia de las votaciones) </th>
                            <th>Estado</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Elección Consejo Estudiantil</td>
                            <td>12/09/2025</td>
                            <td>30/09/2025</td>
                            <td>Activa</td>
                            <td>
                                <button className="btn btn-editar">Ver candidatos</button>
                                <button className="btn btn-eliminar">Votar</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Elección Representantes</td>
                            <td>20/10/2025</td>
                            <td>12/11/2025</td>
                            <td>Programada</td>
                            <td>
                                <button className="btn btn-editar">Ver candidatos</button>
                                <button className="btn btn-eliminar">Votar</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Elección Decanos</td>
                            <td>21/07/2025</td>
                            <td>13/08/2025</td>
                            <td>Finalizada</td>
                            <td>
                                <button className="btn btn-editar">Ver candidatos</button>
                                <button className="btn btn-eliminar">Ver resultados</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </main>

            {/* FOOTER */}
            <footer>
                <p>Copyright © 2025 Univote. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}

export default Elecciones_Votante;
