import React from 'react';

import "../css/presentation.css"
import { FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Presentation = () => {
  return (
   
    
    <div className='pre-container'>

    <section>
      <div className='background'>
        <div id='stars'></div>
      <div id='stars2'></div>
      </div>
    
      <div className='info'>
            <h1>Hola, soy Max</h1>
            <p>Desarrollador web especializado en crear aplicaciones modernas y eficientes con React y Node.js. Apasionado por el diseño funcional y la experiencia del usuario.</p>
            <div className='redes'>
              <a target='_blank' href="https://github.com/gt-developing"><FaGithub className='icon' /></a>
              <a target='_blank' href="https://www.instagram.com/max_gtdev/"><FaInstagram className='icon' /></a>
              <a target='_blank' href="mailto:balexismaximiliano@gmail.com"> <MdEmail className='icon'/></a>
              
              
             
            </div>
        </div>
    </section>

        


        <section className='projects'>
          <h1>Proyectos</h1>
        </section>
        
        <section className='about'>
          <h1>Sobre mi</h1>
        </section>

        <section className='contact'>
          <h1>Contacto</h1>
        </section>

    </div>
    
  );
}

export default Presentation;