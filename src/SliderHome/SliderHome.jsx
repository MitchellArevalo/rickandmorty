import React from 'react'

export const SliderHome = () => {
  return (
    <>
    <div className="slideshow-container">

        <div className="mySlides fade">
        <div className="numbertext">1 / 3</div>
        <img src="" alt="" />
        <div className="text">Caption Text</div>
        </div>
    
        <div className="mySlides fade">
        <div className="numbertext">2 / 3</div>
        <img src="" alt="" />
        <div className="text">Caption Two</div>
        </div>
    
        <div className="mySlides fade">
        <div className="numbertext">3 / 3</div>
        <img src="" alt="" />
        <div className="text">Caption Three</div>
        </div>
    
        <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a className="next" onclick="plusSlides(1)">&#10095;</a>
    </div>

    <div >
        <span className='dot'></span>
        <span className='dot'></span>
        <span className='dot'></span>
    </div>
    </>
  )
}
