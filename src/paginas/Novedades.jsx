import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../contexto/AppContext";
import '../estilos/Libros.css';
import CarritoCompras from "./Carrito";

export default function Novedades() {
  const [libros, setLibros] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  
  // Contexto para el carrito
  const { agregarAlCarrito } = useAppContext();

  useEffect(() => {
    fetch("https://68e1486a8943bf6bb3c3d07d.mockapi.io/api/libros")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setLibros(datos);
        setCargando(false);
      })
      .catch((error) => {
        {console.error("Error!,", error)}
        setError("Hubo un problema al cargar los libros.");
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando libros...</p>;
  if (error) return <p>{error}</p>;

    return (
    <>
    <ul id="lista-libros">
      {libros.filter(libro => libro.categoria == "Novedades")
      .map((libro) => (
        <li id="tarjeta-libros" key={libro.id}>
          <h3>{libro.titulo}</h3>
          <h4>{libro.autor}</h4>        
          <Link><h4 id="precio" onClick={() => agregarAlCarrito(libro)}>${libro.precio}</h4></Link>
          <Link to={`/libros/${libro.categoria}/${libro.isbn}`} state={{libro}}>
          <img src={libro.portada} alt={libro.titulo} />
          </Link>
        </li>
      ))}
    </ul>
    </>
  );
}
