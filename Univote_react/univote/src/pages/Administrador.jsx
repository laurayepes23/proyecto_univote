import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles.css"; // tu CSS personalizado


function Administrador() {
    return (
        <div className="index-page">
            <div className="logo_inicio">
                <a href="/"><img src="/img/logo.png" alt="Logo" /></a>
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


            <>

                <main className="contenedor">
                    <h2 className="titulo">Bienvenido</h2>

                    <section className="acciones">
                        <div className="card">
                            <h3>Gestión Elecciones</h3>
                            <p>Crea una nueva elección con fechas y candidatos.</p>
                            <a href="/Elecciones_adm" className="btn">
                                Gestionar
                            </a>
                        </div>

                        <div className="card">
                            <h3>Gestión Candidatos</h3>
                            <p>Edita, agrega o elimina candidatos de la elección.</p>
                            <a href="/candidatosAdmin" className="btn">
                                Gestionar
                            </a>
                        </div>

                        <div className="card">
                            <h3>Reportes</h3>
                            <p>
                                Una vez cerrada la elección, aquí verás los resultados y podrás
                                exportarlos.
                            </p>
                            <a href="/resultados" className="btn">
                                Ver Resultados
                            </a>
                        </div>
                    </section>

                    <div className="noticias">
                        <h2>Novedades</h2>
                        <div className="tarjetas">
                            <div className="tarjeta">
                                <h3>Próxima Elección</h3>
                                <p>
                                    La elección de Rector comenzará el <strong>15 de septiembre</strong>. No olvides configurar candidatos.
                                </p>
                            </div>

                            <div className="tarjeta">
                                <h3>Seguridad</h3>
                                <p>
                                    Recuerda cerrar sesión al terminar tus gestiones para mantener
                                    la seguridad del sistema.
                                </p>
                            </div>

                            <div className="tarjeta">
                                <h3>Reportes</h3>
                                <p>
                                    Los resultados de la elección de Decanos ya están disponibles en
                                    la sección de reportes.
                                </p>
                            </div>
                        </div>
                    </div>
                </main>

                <footer>
                    <p>Copyright © 2025 Univote. Todos los derechos reservados.</p>
                </footer>
            </>

        </div>
    )
};

export default Administrador;
