import React from 'react';
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexto/AppContext";
import '../estilos/Carrito.css';



export default function CarritoCompras() {

  const { carrito, vaciarCarrito, isAuthenticated, agregarCantidad, quitarCantidad,  eliminarDelCarrito} = useAppContext();
  
  const navigate = useNavigate();

  const irAPagar = () => {
    navigate("/pagar", { state: { carrito } });
  };

  const total = carrito.reduce((sum, item) => {
    const cantidad = item.cantidad || 1;
    return sum + item.precio * cantidad;
  }, 0);

  return (
    <div id="Carrito-compras">
      <div id="Detalle-carrito">
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {carrito.map((item) => (
            <div key={item.id}>
                <img src={item.portada} alt={item.titulo} />
                {item.titulo} - ${Number(item.precio).toFixed(3)} - 
                <button onClick={() => quitarCantidad(item.id)}>-</button>
                 {item.cantidad || 1} 
                <button onClick={() => agregarCantidad(item.id)}>+</button>
                <img id="eliminar-libro" src="eliminar.png" alt="eliminar" onClick={() =>  eliminarDelCarrito(item.id)}></img>
            </div>
          ))}

          <div>
            <hr />
            Total: ${Number(total).toFixed(2)}
          </div>
          <button id="vaciar-carrito" onClick={vaciarCarrito}>
            Vaciar Carrito
          </button>
          <button id="pagar-carrito" onClick={irAPagar}>
            Pagar
          </button>
        </>
      )}
      </div>
    </div>
  );
}
