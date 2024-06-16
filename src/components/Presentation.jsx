import React, { useEffect, useState } from 'react';
import graffpreview from "../assets/graffpreview.png";
import todopreview from "../assets/todopreview.png";
import weatherpreview from "../assets/weatherpreview.png";
import "../css/presentation.css";
import { FaGithub, FaInstagram, FaExternalLinkAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Importa el archivo JSON
import projectsData from '../json/projects.json';

// Asocia las imágenes a los nombres de los archivos
const images = {
  graffpreview,
  todopreview,
  weatherpreview
};

const Presentation = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Asigna los datos del JSON al estado
    setProjects(projectsData);
  }, []);

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
        <div className='section-title'>
          <h1>Proyectos</h1>
          <p>Estos son algunos de los proyectos que he trabajado recientemente</p>
        </div>
        
        <div className='projects-container'>
          {projects.map((project, index) => (
            <div className='card' key={index}>
              <a href={project.link}>
                <img src={images[project.image]} alt={project.title} />
              </a>
              <div className='info-container'>
                <div className='name-description'>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className='date-links'>
                  <div className='links-app'>
                    <a href={project.link}><FaExternalLinkAlt/></a>
                    {project.github && (
                      <a href={project.github}><FaGithub/></a>
                    )}
                  </div>
                  
                  <p>{project.year}</p>
                </div>
              </div>
              <div className='tags'>
                {project.tags.map((tag, i) => (
                  <p key={i}>{tag}</p>
                ))}
              </div>
             
            </div>
          ))}
        </div>

        <p className='more'>Encuentra aun mas en mi perfil de <a href="https://github.com/gt-developing">GitHub</a></p>
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
