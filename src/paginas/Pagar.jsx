import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexto/AppContext";
import '../estilos/Pagar.css';

export default function Pagar() {
  //const location = useLocation();
  const { usuario, cerrarSesion, carrito, vaciarCarrito } = useAppContext();
  const navigate = useNavigate();


  const total = carrito.reduce((sum, item) => {
    const cantidad = item.cantidad || 1;
    return sum + item.precio * cantidad;
  }, 0);

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
            <img src={libro.portada} alt={libro.titulo} width="60" /> &nbsp;&nbsp;&nbsp; {libro.titulo} &nbsp;&nbsp;&nbsp; ${libro.precio} &nbsp;&nbsp;&nbsp; ({libro.cantidad}) &nbsp;&nbsp;&nbsp; ${libro.precio * libro.cantidad}
            <br/>
          </div>
        ))}
          <br/>
          <br/>
          <hr />
          <h3>Total a pagar: ${total}</h3>
        <div>
          <button id="Boton-pagar" onClick={comprar}>Confirmar y Pagar</button>
          <button id="Boton-cancelar" onClick={() => navigate("/")}>Cancelar</button>
        </div>
        </div>
      </div>
      
    </div>
  );
}
