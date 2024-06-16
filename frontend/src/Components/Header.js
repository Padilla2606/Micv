import React, {useState} from "react"
import {Link} from "react-router-dom"





export const Header =(props)=>{
  var icona = <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="2.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 6l16 0" />
  <path d="M4 12l16 0" />
  <path d="M4 18l16 0" />
</svg>;
  
  
  const [estado, setEstado] = useState(false);
  

    return(
      <header>
      <h1 className='iconpadilla'>Padilla <span>Web<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-html5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path></svg></span></h1>
      
      
      
      <button onClick={()=>{setEstado(!estado)}} id="botonactivar" className="botonmenu">{icona}
      </button>

      <nav>
        <ul id= "ulmenu" className= {`botonactivamenu ${estado ? "isActive" : "botoncierramenu"}`}>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="Equipo">Tecnologías(Que uso)</Link></li>
            <li><Link to="Contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
    )
}

