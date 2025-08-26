import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

function Login() {
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [mensaje, setMensaje] = useState(null); // para simular los mensajes flash

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí va tu lógica de login (fetch/axios al backend)
    if (correo === "test@univote.com" && clave === "1234") {
      setMensaje({ tipo: "success", texto: "Inicio de sesión exitoso 🎉" });
    } else {
      setMensaje({ tipo: "danger", texto: "Correo o contraseña incorrectos ❌" });
    }
  };

  return (
    <div className="login-page">
      <div className="login-container text-center">
        {/* Logo */}
        <div className="login-logo">
          <a href="/"><img src="/img/logo.png" /></a>
        </div>

        <h2 className="mb-4">Iniciar Sesión</h2>

        {/* Mensajes (simulan los flash de Flask) */}
        {mensaje && (
          <div className={`alert alert-${mensaje.tipo} mt-2`}>
            {mensaje.texto}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label htmlFor="correo" className="form-label">
              Correo:
            </label>
            <input
              type="email"
              className="form-control"
              id="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="Escribe tu correo Institucional"
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label htmlFor="clave" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="clave"
              value={clave}
              onChange={(e) => setClave(e.target.value)}
              placeholder="Escribe tu contraseña"
              required
            />
          </div>

          <button type="submit" className="btn btn-custom w-100">
            Ingresar
          </button>
        </form>

        <div className="mt-3 text-center">
          <a href="/RegistroVotante">¿Aún no tienes una cuenta? Registrarse</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
