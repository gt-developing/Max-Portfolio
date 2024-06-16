import React, { useState, useEffect } from 'react';

import logo from "../assets/svanna-logo.jpg"
import "../css/navbar.css"

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/dropdown";
import { Link } from "react-router-dom";

import { FaBars } from "react-icons/fa";



const Navbar = () => {

  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scroll hacia abajo
        setIsHidden(true);
      } else {
        // Scroll hacia arriba
        setIsHidden(false);
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // Para evitar números negativos
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <div className={`navbar ${isHidden ? 'hidden' : ''}`}>
      <div className='logoName-container'>
        <a href="#"><img src={logo} alt="Logo" className="logo" /></a>
        <div NameAndDescription>
          <h3>Alexis Maximiliano </h3>
          <p>Software Developer</p>
        </div>
      </div>

      <ul className="nav-links">
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#tech">Tecnologias</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      
        <Dropdown>
          <DropdownTrigger className='menu-trigger'>
            <button className='menu-button'><FaBars /></button>
          </DropdownTrigger>
          <DropdownMenu className='menu-dropdown'>
            <DropdownItem className='item' key="new"><a href="#projects">Proyectos</a></DropdownItem>
            <DropdownItem className='item' key="copy"><a href="#tech">Tecnologias</a></DropdownItem>
            <DropdownItem className='item' key="edit"><a href="#contact">Contacto</a></DropdownItem>
          </DropdownMenu>
        </Dropdown>
    

    </div>

  );
}

export default Navbar;