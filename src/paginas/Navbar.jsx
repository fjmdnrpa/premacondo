import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../contexto/AppContext';
import '../estilos/Navbar.css';

function Navbar() {

  const { isAuthenticated, usuario, carrito, cerrarSesion } = useAppContext();

  return (
    <nav id="nav-bar">
        <ul>
            <li><Link to="/"><h2>Inicio</h2></Link></li>
            <li><Link to="/libros"><h2>Libros</h2></Link></li>
            <li><Link to="/novedades"><h2>Novedades</h2></Link></li>
            <li><Link to="/masvendidos"><h2>Mas Vendidos</h2></Link></li>
            <li><Link to="/carrito"><h2>Carrito</h2></Link></li>
            <li >
            {isAuthenticated ? (
            <div id="parcial-carrito">
              <h3>{usuario.nombre}</h3>
              <h3 id="cantidad-carrito">{carrito.length}</h3>
              <button id="boton-cerrar"
                onClick={cerrarSesion}
              >
              Cerrar Sesion
              </button>
            </div>
            
          ) : (
            <Link to="/iniciar-sesion"><h2>Iniciar Sesión</h2></Link>
          )}
        </li>
        </ul>
                    
    </nav>
  )
}

export default Navbar