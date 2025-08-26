import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css"; // tu css personalizado

function RegistroVotante() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    tipo_documento: "",
    correo: "",
    clave: "",
    carrera: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    // Aquí harías el fetch/axios para enviar datos al backend Flask/Django/etc.
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-logo text-center">
          <a href="/"><img src="/img/logo.png" /></a>
        </div>
        <h2 className="text-center mb-4">Registro Univote</h2>

        {/* ALERTAS (simulando los mensajes flash de Flask) */}
        {/* Podrías manejar mensajes de validación con useState */}
        {/* <div className="alert alert-success">Registro exitoso</div> */}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="apellido" className="form-label">Apellido</label>
            <input
              type="text"
              className="form-control"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="tipo_documento" className="form-label">
              Tipo de Documento
            </label>
            <select
              className="form-select"
              id="tipo_documento"
              name="tipo_documento"
              value={formData.tipo_documento}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione</option>
              <option value="CC">Cédula de Ciudadanía</option>
              <option value="TI">Tarjeta de Identidad</option>
              <option value="CE">Cédula de Extranjería</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="correo" className="form-label">
              Correo Institucional
            </label>
            <input
              type="email"
              className="form-control"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="clave" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="clave"
              name="clave"
              value={formData.clave}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="carrera" className="form-label">Carrera</label>
            <input
              type="text"
              className="form-control"
              id="carrera"
              name="carrera"
              value={formData.carrera}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-custom w-100">
            Registrarse
          </button>
        </form>

        <div className="mt-3 text-center">
          {/* En React Router cambiarías por <Link> */}
          <a href="/login">¿Ya tienes cuenta? Inicia sesión</a>
        </div>
      </div>
    </div>
  );
}

export default RegistroVotante;
