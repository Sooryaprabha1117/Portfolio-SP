import React from 'react';
import './Card.css'; // Make sure to include the CSS file
import images from "./Assets/cake4.png";
const CardsPage = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-card">
        <div className="about-me-text">
          <h2>BACKGROUND</h2>
          <p>
            I am a student who has knowledge and interest in front-end development with a passion for creating intuitive and dynamic user experiences.
          </p>
        </div>
        <img src={images} id='img' alt="Background" />
      </div>
    </div>
  );
};

export default CardsPage;
