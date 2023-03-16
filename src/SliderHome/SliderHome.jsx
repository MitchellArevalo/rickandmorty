import React, { useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './SliderHome.css';
import img1 from "../Recursos/IMG1.jpg"
import img2 from "../Recursos/img2.jpg"
import img3 from "../Recursos/img3.jpg"

const SliderHome = () => {
  const slideImages = [
    {
      url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      image: img1
    },
    {
      url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
      image: img2
    },
    {
      url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      image: img3
    },
  ];

  return (
    <div className="slide-container">
      <Slide>
       {slideImages.map((slideImage, index)=> (
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
