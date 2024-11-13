import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import './Projects.css';
import html5 from './Assets/html5.png';
import cake from './Assets/cake4.png';
import { InputBase } from '@mui/material';

const Projects = () => {
  const projects = [
    {
      title: 'Drawing Tool',
      description: 'A project focused on securing healthcare data using blockchain technology.',
      technologies: ['HTML5', 'CSS', 'Events', 'Canvas'],
      image: html5,
      demoLink: 'https://drawitnow.vercel.app/',
      githubLink: 'https://github.com/username/blockchain-healthcare',
    },
    {
      title: 'Cake Corner',
      description: 'A front-end project built with HTML, CSS, and Bootstrap.',
      technologies: ['HTML', 'CSS', 'Bootstrap'],
      image: cake,
      demoLink: 'https://cake-corner-olive.vercel.app/',
      githubLink: 'https://github.com/username/cake-corner',
    },
    // More projects...
  ];

  return (
    <Box className="project-page" id="pr1">
      {projects.map((project, index) => (
        <Card key={index} className="project-card animated-card" sx={{ position: 'relative' }}>
          <Box className="image-container">
            <CardMedia
              component="img"
              image={project.image}
              alt={project.title}
              className="project-image"
            />
          </Box>
          <CardContent className="content-container">
            <Typography variant="h6">{project.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>
            <Box className="project-technologies">
              {project.technologies.map((tech, idx) => (
                <Box key={idx} component="span" className="tech">
                  {tech}
                </Box>
              ))}
            </Box>
            <Box className="project-links">
              <Button
                variant="contained"
                color="primary"
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link demo-link"
                sx={{ marginRight: '10px' }}
              >
                View
              </Button>
              <Button
                variant="contained"
                color="secondary"
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link github-link"
              >
                GitHub
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Projects;
