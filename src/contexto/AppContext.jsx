import React, { createContext, useContext, useState } from "react";
// Crear el contexto
export const AppContext = createContext();
// Proveedor del contexto
export function AppProvider({ children }) {
    // Estado de autenticación
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [usuario, setUsuario] = useState({ nombre: "", email: "" });
    
    // Estado del carrito
    const [carrito, setCarrito] = useState([]);
    
    // Funciones para el carrito
    //Agregar libro al carrito
    const agregarAlCarrito = (libro) => {
    setCarrito([...carrito, libro]); 
    alert(`Producto ${libro.titulo} agregado.`);
    };
    //Vaciar carrito
    const vaciarCarrito = () => {
    setCarrito([]);
    };
    //Eliminar libro del carrito
    const eliminarDelCarrito = (productoId) => {
      setCarrito(carrito.filter(item => item.id !== productoId));
    };
    //Quitar una unidad
    const quitarCantidad = (idLibro) => {
      const carritoActualizado = carrito.map(libro => {
        if (libro.id === idLibro) {
          const cantidadActual = libro.cantidad || 1;
          if (cantidadActual === 1) {
            return null;
          }
          return { ...libro, cantidad: cantidadActual - 1 };
        }
        return libro;
      }).filter(libro => libro !== null);

      setCarrito(carritoActualizado);
    };
    //Agregar una unidad
    const agregarCantidad = (idLibro) => {
      const nuevoCarrito = carrito.map(libro => {
        if (libro.id === idLibro) {
          return {
            ...libro,
            cantidad: (libro.cantidad || 1) + 1
          };
        
        }
        return libro;
      });
      setCarrito(nuevoCarrito);
    };

  // Función para cerrar sesión
  const cerrarSesion = () => {
    setIsAuthenticated(false);
    setUsuario({ nombre: "", email: "" });
    vaciarCarrito(); 
  };

  // Valor que se provee a todos los componentes
  const value = {
    // Autenticación
    isAuthenticated,
    setIsAuthenticated,
    usuario,
    setUsuario,
    cerrarSesion,
   
    // Carrito
    carrito,
    agregarAlCarrito,
    vaciarCarrito,
    eliminarDelCarrito,
    agregarCantidad,
    quitarCantidad
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
    
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext debe usarse dentro de AppProvider");
  }
  return context;
}

