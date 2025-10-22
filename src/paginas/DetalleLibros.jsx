import { useAppContext } from "../contexto/AppContext";
import { Link, useParams, useLocation } from "react-router-dom";
import '../estilos/DetalleLibros.css'

// Contexto para el carrito
//const { agregarAlCarrito } = useAppContext();


const LibroDetalle = () => {

    // Contexto para el carrito
    const { agregarAlCarrito } = useAppContext();
 
    const { isbn } = useParams();
    const location = useLocation();
    const libro = location.state?.libro;
 
if (!libro) {
    return (
      <div>
        <p>No se pudo cargar el libro</p>
        <Link to="/libros">
          <button>Volver a Libros</button>
        </Link>
      </div>
    );
  }
 
  return(
    <>
      <div id="detalle-libros">
        <div id="tarjeta-detalle" key={libro.id}><h3>{libro.titulo}</h3>
            <p>{libro.sinopsis}</p>
            <Link to={`/libros`}><h4 id="precio-detalle" onClick={() => agregarAlCarrito(libro)}>${libro.precio}</h4></Link>
            <img src={libro.portada} alt={libro.titulo} width="30%" />
            <br/>
            <Link to={`/`}><button>Volver</button></Link>
        </div>     
    </div>
    </>
  );
}; export default LibroDetalle;