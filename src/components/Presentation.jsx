import React, { useEffect, useState } from 'react';
import graffpreview from "../assets/graffpreview.webp";
import todopreview from "../assets/todopreview.webp";
import weatherpreview from "../assets/weatherpreview.webp";
import portfoliopreview from "../assets/portfoliopreview.webp";
import npmpreview from "../assets/npmpreview.webp";

import "../css/presentation.css";
import { FaPython, FaGithub, FaInstagram, FaExternalLinkAlt, FaReact, FaGitAlt, FaBootstrap, FaSass, FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { SiGnubash, SiVite } from "react-icons/si";


import projectsData from '../json/projects.json';

const images = {
  graffpreview,
  todopreview,
  weatherpreview,
  npmpreview,
  portfoliopreview
};


const technologies = [
  { icon: <FaReact className='icon-card' />, name: 'React' },
  { icon: <FaBootstrap className='icon-card' />, name: 'Bootstrap' },
  { icon: <FaSass className='icon-card' />, name: 'Sass' },
  { icon: <FaHtml5 className='icon-card' />, name: 'HTML5' },
  { icon: <FaCss3 className='icon-card' />, name: 'CSS3' },
  { icon: <RiTailwindCssFill className='icon-card' />, name: 'Tailwind' },
  { icon: <FaNodeJs className='icon-card' />, name: 'Node.js' },
  { icon: <IoLogoFirebase className='icon-card' />, name: 'Firebase' },
  { icon: <IoLogoJavascript className='icon-card' />, name: 'Javascript' },
  { icon: <FaPython className='icon-card' />, name: 'Python' },
  { icon: <GrMysql className='icon-card' />, name: 'MySQL' },
  { icon: <FaGitAlt className='icon-card' />, name: 'Git' },
  { icon: <SiGnubash className='icon-card' />, name: 'Bash' },
  { icon: <SiVite className='icon-card' />, name: 'Vite' },
];



const Presentation = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
   
    setProjects(projectsData);
  }, []);



  return (
    <div className='pre-container'>
      <section>
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
          <h1>Skills</h1>
          <p>Frameworks y herramientas fundamentales de mi día a día en el desarrollo de aplicaciones web.</p>
        </div>
        <div className='tech-container'>
          <div className='tech-scroll'>
            {technologies.map((tech, index) => (
              <div className='tech-card' key={index}>
                {tech.icon}
                <p>{tech.name}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className='contact' id='contact'>
        <div className='section-title'>
          <h1>¿Interesado?</h1>
        </div>
        <a className='contact-button' target="_blank" href="mailto:balexismaximiliano@gmail.com">Contactame</a>
      </section>

      <section className='footer'>
        <p>Diseñado y desarrollado por <u>Max</u></p>
        <div className='redes'>
          <a target='_blank' href="https://github.com/gt-developing"><FaGithub className='icon' /></a>
          <a target='_blank' href="https://www.instagram.com/max_gtdev/"><FaInstagram className='icon' /></a>
          <a target='_blank' href="mailto:balexismaximiliano@gmail.com"> <MdEmail className='icon' /></a>
        </div>
      </section>
    </div>


  );
}

export default Presentation;
