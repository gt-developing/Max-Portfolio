import React, { useEffect, useState } from 'react';
import graffpreview from "../assets/graffpreview.png";
import todopreview from "../assets/todopreview.png";
import weatherpreview from "../assets/weatherpreview.png";
import portfoliopreview from "../assets/portfoliopreview.png"
import npmpreview from "../assets/npmpreview.png";

import "../css/presentation.css";
import { FaPython, FaGithub, FaInstagram, FaExternalLinkAlt, FaReact, FaGitAlt, FaBootstrap, FaSass, FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

// Importa el archivo JSON
import projectsData from '../json/projects.json';

// Asocia las imágenes a los nombres de los archivos
const images = {
  graffpreview,
  todopreview,
  weatherpreview,
  npmpreview,
  portfoliopreview
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
              <a target='_blank' href={project.link}>
                <img src={images[project.image]} alt={project.title} />
              </a>
              <div className='info-container'>
                <div className='name-description'>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className='date-links'>
                  <div className='links-app'>
                    {project.link && (
                      <a target='_blank' href={project.link}><FaExternalLinkAlt /></a>
                    )}
                    {project.github && (
                      <a target='_blank' href={project.github}><FaGithub /></a>
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

      <section className='tech' id='tech'>

       <div className='section-title'>
        <h1>Tecnologias</h1>
        <p>Habilidades</p>
        </div>
        <div className='tech-container'>

          <div className='tech-card'>
            <FaReact className='icon-card' />
            <p>React</p>
          </div>
          <div className='tech-card'>
            <FaBootstrap className='icon-card' />
            <p>Bootstrap</p>
          </div>
          <div className='tech-card'>
            <FaSass className='icon-card' />
            <p>Sass</p>
          </div>
          <div className='tech-card'>
            <FaHtml5 className='icon-card' />
            <p>HTML5</p>
          </div>
          <div className='tech-card'>
            <FaCss3 className='icon-card' />
            <p>CSS3</p>
          </div>
          <div className='tech-card'>
            <FaNodeJs className='icon-card' />
            <p>Node.js</p>
          </div>
          <div className='tech-card'>
            <IoLogoFirebase className='icon-card' />
            <p>Firebase</p>
          </div>
          <div className='tech-card'>
            <IoLogoJavascript className='icon-card' />
            <p>Javascript</p>
          </div>
          <div className='tech-card'>
            <RiTailwindCssFill className='icon-card' />
            <p>Tailwind CSS</p>
          </div>
          <div className='tech-card'>
            <FaPython className='icon-card' />
            <p>Python</p>
          </div>
          <div className='tech-card'>
            <GrMysql className='icon-card' />
            <p>MySQL</p>
          </div>


        </div>
      </section>

      <section className='contact' id='contact'>
        <h1>Contacto</h1>
      </section>
    </div>
  );
}

export default Presentation;
