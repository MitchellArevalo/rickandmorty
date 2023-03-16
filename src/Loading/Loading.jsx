import React, { useState, useEffect } from 'react';
import './Loading.css';
import backgroundimage from"../Recursos/BackgroundCarga.gif";
import title from "../Recursos/Rick-And-Morty-Logo-Transparent.png";

const Loading = (props) => {
    
    useEffect(() => {
        // Simula una carga de datos
        setTimeout(() => {
          props.setLoading(false);
        }, 8000);
      }, []);

  return (
    <div className="loading-screen">
        <figure>
            <img className='backgroundImage' src={backgroundimage} alt="background" />
        </figure>        
        <div className='loading'>
            <img className= 'title' src={title} alt="titulo" />
            <div className="loader"></div>
        </div>
    </div>
  );
}

export default Loading;