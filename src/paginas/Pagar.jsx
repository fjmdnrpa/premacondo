import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexto/AppContext";
import '../estilos/Pagar.css';

export default function Pagar() {
  //const location = useLocation();
  const { usuario, cerrarSesion, carrito, vaciarCarrito } = useAppContext();
  const navigate = useNavigate();


  // Calculo del total
  const total = carrito.reduce(
    (suma, libro) => suma + Number(libro.precio),
    0
  );

  // Función para finalizar compra
  const comprar = () => {
    alert("¡Compra realizada con éxito!");
    vaciarCarrito(); // Limpiar carrito después de comprar
    navigate("/");
  };

  return (
    <div>
      <div id="Pagar-compras">
        <div id="Detalle-pagar">
          <h2>Tu compra:</h2>
          {carrito.map((libro) => (
          <div key={libro.id}>
            <br/> 
            <img src={libro.portada} alt={libro.titulo} width="60" /> --- {libro.titulo} --- ${libro.precio}
            <br/>
          </div>
        ))}
          <br/>
          <h3>Total a pagar: ${total}</h3>
          <br/>
        <div>
          <button id="Boton-pagar" onClick={comprar}>Confirmar y Pagar</button>
          <button id="Boton-cancelar" onClick={() => navigate("/")}>Cancelar</button>
        </div>
        </div>
      </div>
      
    </div>
  );
}
