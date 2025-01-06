import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box, Avatar } from '@mui/material';
import DP from "./Assets/A12.png"
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
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',  // Center horizontally
        alignItems: 'center',      // Center vertically
        minHeight: '100vh',         // Take full height of the viewport
        padding: 2,
        width: '100%',              // Make sure it takes full width
        boxSizing: 'border-box',    // Include padding in width calculations
      }}
    >
      <Card 
        sx={{
          maxWidth: { xs: '90%', sm: 1200 }, // Responsive max width (90% for xs, 1200px for sm and up)
          margin: 'auto',
          p: 2,
          borderRadius: 4,
          bgcolor: 'rgba(255, 111, 97, 0.1)',
          border: '2px solid #FFFF',
          width: '100%',             // Ensure the card takes up full width available
        }}
      >
        <Box 
          display="flex" 
          alignItems="flex-start"  // Align items to the top
          flexDirection={{ xs: 'column', sm: 'row' }} // Stack on small screens, row on larger
          gap={2}  // Add spacing between the avatar and text
          justifyContent="center" // Center content for small screens
        >
     <Avatar
  alt="Profile Picture"
  src={DP}
  style={{
    width: "11%", // Default width for larger screens
    height: "auto", // Maintain aspect ratio
    margin: "0 auto", // Center horizontally
    display: "block", // Ensure the element behaves like a block-level element for centering
  }}
  sx={{
    width: { xs: '15%', sm: '11%' }, // Responsive width: 15% for small screens, 11% for larger screens
    height: 'auto', // Maintain aspect ratio
    borderRadius: '50%',
    boxShadow: '0 0 15px #00FFFF',
    border: '4px solid #fff',
    mx: 'auto', // Material-UI shorthand for centering horizontally (margin-left and margin-right auto)
  }}
/>

          
          <CardContent>
            <Typography 
              variant="h4" 
              component="div" 
              sx={{ 
                mb: 1, 
                fontWeight: 'bold', 
                color: '#FFFFFF', 
                fontSize: { xs: '1.5rem', sm: '2rem' }, // Responsive font size
                textAlign: { xs: 'center', sm: 'left' }, // Center text on small screens
              }} 
            >
              About Me
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#FFFFFF', 
                fontSize: { xs: '0.9rem', sm: '1rem' }, 
                textAlign: { xs: 'center', sm: 'left' }, // Center text on small screens
              }}
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
            justifyContent: 'center',  // Center logos
            flexWrap: 'wrap',  // Allow logos to wrap on smaller screens
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
                margin: '5px', // Add margin for spacing between logos
              }}
            />
          ))}
        </Box>
      </Card>
    </Box>
  );
}

export default AboutMeCard;
