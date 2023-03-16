import React, { useState, useEffect } from 'react';
import './Navbar.css';
import title from "../Recursos/Rick-And-Morty-Logo-Transparent.png";
import menu from "../Recursos/BotonMenu.png"

const Navbar = (props) => {
  return (
    <nav>
        <figure className='titulo'>
            <img  src={title} alt="titulo" />
        </figure>
        <figure className='menu'>
            <img  src={menu} alt="Menú" />
        </figure>
    </nav>
  );
}

export default Navbar;