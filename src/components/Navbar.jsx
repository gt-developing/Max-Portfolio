import React from 'react';

import logo from "../assets/svanna-logo.jpg"
import "../css/navbar.css"

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/dropdown";


import { FaBars } from "react-icons/fa";



const Navbar = () => {

  return (
    <div className='navbar'>
      <a className='icon-href' href="#">
        <div className='logoName-container'>
          <img src={logo} alt="Logo" className="logo" />
          <div NameAndDescription>
            <h3>Alexis Maximiliano </h3>
            <p>Software Developer</p>
          </div>
        </div></a>

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