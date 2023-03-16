import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import SliderHome from '../SliderHome/SliderHome';
import './Home.css';

const Home = (props) => {
  return (
    <header>
        <Navbar/>
        <SliderHome/>
    </header>
  );
}

export default Home;