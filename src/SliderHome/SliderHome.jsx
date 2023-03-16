import React, { useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './SliderHome.css';

const SliderHome = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  return (
    <div className="slide-container">
      <Slide>
       {characters.map((slideImage, index)=> (
          <div key={index}>
            <div className='divStyle' >
              <img className="imgSlider" src={slideImage.image} alt={slideImage.url}/>
             
            </div>
          </div>
        ))} 
      </Slide>
    </div>
  );
};

export default SliderHome;
