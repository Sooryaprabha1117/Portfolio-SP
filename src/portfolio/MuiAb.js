import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box, Avatar } from '@mui/material';

// Import your logos directly
import logo1 from '../portfolio/Assets/redux.jpeg'; 
import logo2 from '../portfolio/Assets/REACT.png';
import logo3 from '../portfolio/Assets/css.png';
import logo4 from '../portfolio/Assets/JAVASCRIPT.png';
import logo5 from '../portfolio/Assets/html.png';
import logo6 from '../portfolio/Assets/sass.png';
import logo7 from '../portfolio/Assets/bootstrap.jpeg';

const AboutMeCard = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev === 1 ? 0 : 1));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card 
      sx={{
        maxWidth: { xs: '90%', sm: 1200 }, // Responsive max width
        margin: 'auto',
        mt: 5,
        p: 2,
        borderRadius: 4,
        bgcolor: 'rgba(255, 111, 97, 0.1)',
        border: '2px solid #FFFF',
      }}
    >
      <Box 
        display="flex" 
        alignItems="center" 
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Avatar 
          alt="Profile Picture"
          src="/path/to/your/profile.jpg" 
          sx={{ 
            width: { xs: 100, sm: 150 }, // Responsive size for Avatar
            height: { xs: 100, sm: 150 }, 
            mr: { sm: 2 }, 
            mb: { xs: 2, sm: 0 },
            border: '4px solid #fff',
            boxShadow: '0 0 15px #00FFFF',
          }} 
        />
        
        <CardContent>
          <Typography 
            variant="h4" 
            component="div" 
            sx={{ mb: 1, fontWeight: 'bold', color: '#FFFFFF', fontSize: { xs: '1.5rem', sm: '2rem' } }} // Responsive font size
          >
            About Me
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ color: '#FFFFFF', fontSize: { xs: '0.9rem', sm: '1rem' } }} // Responsive font size
          >
            Hello, I'm Soorya Prabha.
            <br />
            I'm from Tirunelveli and currently pursuing a degree in Computer Science Engineering at Thamirabharani Engineering College, with a CGPA of nearly 8/10. 
            I am skilled in CSS, JavaScript, Bootstrap, React, HTML5, React, Sass, and Material-UI (MUI). 
            I'm in the process of learning the MERN stack, with a current focus on React. 
            My main interest lies in front-end development and UI design, and I’ve applied these skills in my projects.
            <br />
            I’m eager to gain practical experience and apply what I’m learning. 
            I am available for work opportunities where I can contribute with my skills and dedication, and I’m committed to delivering my best to complete any task.
          </Typography>
        </CardContent>
      </Box>

      <Box 
        sx={{
          position: 'relative',
          height: '50px',
          overflow: 'hidden',
          mt: 2,
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        {logos.map((logo, index) => (
          <img 
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            style={{
              width: '35px', // Adjust logo size for responsiveness
              borderRadius: "50%",
              position: 'relative',
              top: offset === 0 ? '0px' : '1px',
              transition: 'top 0.3s ease',
            }}
          />
        ))}
      </Box>
    </Card>
  );
}

export default AboutMeCard;
