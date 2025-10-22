import React, { useState } from 'react'
import Novedades from './paginas/Novedades'
import MasVendidos from './paginas/MasVendidos'
import Navbar from './paginas/Navbar'
import Libros from './paginas/Libros'
import Carrito from './paginas/Carrito'
import LibroDetalle from './paginas/DetalleLibros'
import Header from './paginas/Header'
import Footer from './paginas/Footer'
import Pagar from "./paginas/Pagar"
import Inicio from "./paginas/Inicio"
import RutaProtegida from "./paginas/RutaProtegida"
import IniciarSesion from "./paginas/IniciarSesion"
import { Routes, Route } from 'react-router-dom'
import { AppProvider } from './contexto/AppContext'

function App() {

  return (
    <AppProvider>
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/libros' element={<Libros />} />
        <Route path='/novedades' element={<Novedades />} />
        <Route path='/masvendidos' element={<MasVendidos />} />
        <Route path='/carrito' element={<Carrito />} />
        <Route path='/libros/:categoria/:isbn' element={<LibroDetalle />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />
          }
        />
        <Route path="/pagar" element={ <RutaProtegida>
              <Pagar  />
            </RutaProtegida>
          }
        />  
      </Routes>
      <Footer />
    </div>
    </AppProvider>
  )
}

export default App