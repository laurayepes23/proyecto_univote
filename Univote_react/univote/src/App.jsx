import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RegistroVotante from "./pages/RegistroVotante";
import Administrador from "./pages/Administrador";
import Candidatos_adm from "./pages/Candidatos_adm";  
import Elecciones_adm from "./pages/Elecciones_adm";
import Votante from "./pages/votante";
import Elecciones_Votante from "./pages/Elecciones_votante";
import Candidatos_votante from "./pages/Candidatos_votante"

export default function App() {
 return (
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Login" element={<Login/>}></Route>
    <Route path="/RegistroVotante" element={<RegistroVotante/>}></Route>
    <Route
        path="/Administrador"
        element={
          <Administrador
            usuario={{ nombre: "Laura", apellido: "Yepes" }}
            mensajes={[
              { categoria: "success", mensaje: "Registro exitoso" },
              { categoria: "danger", mensaje: "Error en la conexión" }
            ]}
          />
        }
      />
      <Route path="/Candidatos_adm" element={<Candidatos_adm/>}></Route>
      <Route path="/Elecciones_adm" element={<Elecciones_adm/>}></Route>
      <Route path="/Votante" element={<Votante/>}></Route>
      <Route path="/Elecciones_votante" element={<Elecciones_Votante/>}></Route>
      <Route path="/Candidatos_votante" element={<Candidatos_votante/>}></Route>
  </Routes>
 )
} 