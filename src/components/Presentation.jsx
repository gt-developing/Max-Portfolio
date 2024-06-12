import React from 'react';

import graffpreview from "../assets/graffpreview.png"  

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
            <a target='_blank' href="mailto:balexismaximiliano@gmail.com"> <MdEmail className='icon' /></a>



          </div>
        </div>
      </section>




      <section className='projects' id='projects'>
        <h1>Proyectos</h1>

        <div className='projects-container'>

          <div className='card'>
            <a href="https://grafftest.netlify.app">
              <img src={graffpreview} alt="" />
            </a>
            <div className='info-container'>
            <div className='name-description'>
              <h3>Graff</h3>
              <p>Tienda en linea</p>
            </div>
            <div className='date-links'>
              <p>2024</p>
             
            </div>
            </div>
          </div>

          
          <div className='card'>
            <a href="https://grafftest.netlify.app">
              <img src={graffpreview} alt="" />
            </a>
            <div className='info-container'>
            <div className='name-description'>
              <h3>Graff</h3>
              <p>Tienda en linea</p>
            </div>
            <div className='date'>
              <p>2024</p>
            </div>
            </div>
          </div>

          
          <div className='card'>
            <a href="https://grafftest.netlify.app">
              <img src={graffpreview} alt="" />
            </a>
            <div className='info-container'>
            <div className='name-description'>
              <h3>Graff</h3>
              <p>Tienda en linea</p>
            </div>
            <div className='date'>
              <p>2024</p>
            </div>
            </div>
          </div>

        </div>

      </section>

      <section className='about' id='about'>
        <h1>Sobre mi</h1>
      </section>

      <section className='contact' id='contact'>
        <h1>Contacto</h1>
      </section>

    </div>

  );
}

export default Presentation;