import React from 'react'
import '../estilos/Footer.css';

function Footer() {
  return (
    <div id="pie-pagina" class="pie-pagina">
            <ul class="enlacespie">
                <li><a href="https://facebook.com" target="_blank"><img class="iconos" src="facebook.svg" alt="facebook"/></a></li>
                <li><a href="https://instagram.com" target="_blank"><img class="iconos" src="instagram.svg" alt="instagram"/></a></li>
                <li><a href="https://whatsapp.com" target="_blank"><img class="iconos" src="whatsapp.svg" alt="whatsapp"/></a></li>
                <li><a href="mailto:libreria-macondo@gmail.com"><img class="iconos" src="mail.svg" alt="mail"/></a></li>
                <li class="menuitem" id="botonContacto">Contacto</li>
            </ul>
            <p class="parrafo">Â© 2025 Libreria Macondo - Todos los derechos reservados</p>
      </div>
  )
}

export default Footer