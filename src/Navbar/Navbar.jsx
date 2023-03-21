import React, { useState, useEffect } from 'react';
import './Navbar.css';
import title from "../Recursos/Rick-And-Morty-Logo-Transparent.png";
import menu from "../Recursos/BotonMenu.png"

const Navbar = (props) => {

  function menuOpen() {
    console.log(props.toggleMenu);
    props.setToggleMenu(!props.toggleMenu);
  }
  return (
    <nav>
        <figure className='titulo'>
            <img  src={title} alt="titulo" />
        </figure>
        <figure className='menu'>
            <img onClick={menuOpen} src={menu} alt="Menú" />
        </figure>
    </nav>
  );
}

export default Navbar;