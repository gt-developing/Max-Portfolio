import React from 'react';

import logo from "../assets/svanna-logo.jpg"
import "../css/navbar.css"

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/dropdown";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { FaBars } from "react-icons/fa";

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

      <div className='menu-visible'>
        <Dropdown>
          <DropdownTrigger className='menu-trigger'>
            <button className='menu-button'><FaBars /></button>
          </DropdownTrigger>
          <DropdownMenu className='menu-dropdown'>
            <DropdownItem className='item' key="new"><Link to="/">AA</Link></DropdownItem>
            <DropdownItem className='item' key="copy">Proyectos</DropdownItem>
            <DropdownItem className='item' key="edit">Contacto</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

    </div>

  );
}

export default Navbar;