import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Portfolio.css'; // Import the CSS file

// Import images
import html from './Assets/html.png';
import css from './Assets/css.png';
import boot from './Assets/bootstrap.jpeg';
import js from './Assets/JAVASCRIPT.png';
import react from './Assets/REACT.png';
import redux from './Assets/redux.jpeg';
import python from './Assets/python.png';
import ui from './Assets/ui.png';

const Portfolio = () => {
  const settings = {
    vertical: true,
    slidesToShow: 4, // Show 4 images at a time for larger screens
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 900, // Adjust for screens smaller than 900px
        settings: {
          slidesToShow: 1, // Show 1 image at a time for mobile
          vertical: false, // Change to horizontal scrolling for better mobile experience
        },
      },
    ],
  };
  

  const images = [
    html,
    css,
    boot,
    js,
    react,
    redux,
    python,
    ui,
  ];

  return (
    <div className="container">
      <div className="text-section">
        <span className="custom-apostrophe">,</span>
        <h3 id='hi'>Hi, I am</h3> 
        <h1 id='h1'>Soorya Prabha M</h1>
        <h4>Front-end Developer / React Developer</h4>
      </div>
      <div className="swiper-container">
        <div className="swiper">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`Slide ${index + 1}`} />
              </div>
            ))}
            
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
