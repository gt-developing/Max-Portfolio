import React from 'react';

import logo from "../assets/svanna-logo.jpg"
import "../css/navbar.css"


const Navbar = () => {
  return (
    <div className="navbar">
        <div className='logoName-container'>
           <img src={logo} alt="Logo" className="logo" />
           <div NameAndDescription>
            <h3>Max</h3>
            <p>Software Developer</p>
           </div> 
        </div>
        
      <ul className="nav-links">
        <li><a href="#about">Sobre Mí</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </div>
    
  );
}

export default Navbar;