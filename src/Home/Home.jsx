import React, { useState, useEffect } from 'react';
import SliderHome from '../SliderHome/SliderHome';
import './Home.css';
import Navbar from '../Navbar/Navbar';

const Home = (props) => {
  return (
    <header>
        <Navbar toggleMenu ={props.toggleMenu} setToggleMenu={props.setToggleMenu}/>
        <SliderHome/>
    </header>
  );
}

export default Home;