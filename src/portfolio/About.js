// src/components/AboutMe.js

import React from 'react';
import './About.css';

// Define details within the AboutMe component file
const details = [
  {
    title: 'Background',
    content: 'I am a front-end developer with a passion for creating intuitive and dynamic user experiences.',
    icon: '👨‍💻'
  },
  {
    title: 'Education',
    content: 'I hold a degree in Computer Science and have taken some online courses to hone my skills.',
    icon: '🎓',
    link: 'https://www.linkedin.com/in/soorya-prabha-m-16b115288/'
  },
  {
    title: 'Skills',
    content: 'Proficient in React, JavaScript, CSS, HTML, and familiar with backend technologies like Node.js.',
    icon: '🛠️'
  },
  {
    title: 'Hobbies',
    content: 'In my free time, I enjoy drawing, reading, and crafting an Art and surfing pinterest.',
    icon: '🌲'
  },
  {
    title: 'Contact',
    content: 'Feel free to reach out to me for collaboration or just to say hi!',
    icon: '📧',
    link: 'prabhasoorya17@gmail.com'
  }
];

const About = () => {
  return (
    <div className="about-me-container">
      <h1>About Me</h1>
      <div className="details-container">
        {details.map((detail, index) => (
          <div key={index} className="detail-card">
            <div className="icon">{detail.icon}</div>
            <h2>{detail.title}</h2>
            <p>{detail.content}</p>
            {detail.link && (
              <a href={detail.link} className="detail-link">
                Learn More
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
