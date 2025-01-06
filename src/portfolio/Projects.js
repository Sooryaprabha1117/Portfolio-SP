import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import './Projects.css';
import html5 from './Assets/Projects/html5.png';
import cake from './Assets/Projects/cake4.png';
import Flip from './Assets/Projects/flip.png';
import Thozhil from './Assets/Projects/thozhil.png';
import NEWS from './Assets/Projects/news.png';
import Filter from './Assets/Projects/filter.png';
import Bill from './Assets/Projects/bill.png';
import New from './Assets/Projects/2024.png';
import Country from './Assets/Projects/country.png';

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
    {
      title: 'New Year 2024',
      description: 'A front-end for wishing a new year wish.',
      technologies: ['HTML', 'CSS', 'Events'],
      image: New,
      demoLink: 'https://birthday-prjt.vercel.app/',
      githubLink: 'https://github.com/Sooryaprabha1117/New-year',
    },
    {
      title: 'Thozhil clone',
      description: 'Built a clone website of Thozhil website achieving maximum features.',
      technologies: ['React', 'Carousel', 'CSS'],
      image: Thozhil,
      demoLink: 'https://clone-phi-one.vercel.app/',
      githubLink: 'https://github.com/Sooryaprabha1117/Clone',
    },
    {
      title: 'Filter Image',
      description: 'A front-end for applying filter to an image like contrast, brightness etc.',
      technologies: ['React', 'Events', 'CSS'],
      image: Filter,
      demoLink: 'https://filter-image-dun.vercel.app/',
      githubLink: 'https://github.com/Sooryaprabha1117/Filter-Image',
    },
    {
      title: 'NEWS Website',
      description: 'Built a NEWS Website that shows REAL TIME NEWS using API.',
      technologies: ['React', 'CSS', 'Events', 'API'],
      image: NEWS,
      demoLink: 'https://news-flame-theta.vercel.app/',
      githubLink: 'https://github.com/Sooryaprabha1117/NEWS',
    },
    {
      title: 'Bill Payment',
      description: 'Creating a website of Bill Payment for exhibition.',
      technologies: ['React', 'CSS', 'Events'],
      image: Bill,
      demoLink: 'https://bill-payment-nine.vercel.app/',
      githubLink: 'https://github.com/Sooryaprabha1117/BillPayment',
    },
    {
      title: 'Flip Card',
      description: 'Built a website using SaSS-CSS, a Flip Card.',
      technologies: ['React', 'CSS', 'SaSS'],
      image: Flip,
      demoLink: 'https://drawitnow.vercel.app/',
      githubLink: 'https://github.com/username/blockchain-healthcare',
    },
    {
      title: 'Country Detail Revealer',
      description: 'A project focused on revealing country information based on user selection.',
      technologies: ['React', 'CSS', 'Events', 'API'],
      image: Country,
      demoLink: 'https://country-details-eta.vercel.app/',
      githubLink: 'https://github.com/Sooryaprabha1117/Country-Details',
    },
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

      {/* Center-aligned Card at the Bottom */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px', marginBottom: '20px' }}>
        <Card className="bottom-center-card">
          <CardContent>
            <Typography variant="h6">Click the button above to explore all projects</Typography>
            <Box className="project-links" sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                variant="contained"
                color="secondary"
                href="https://github.com/Sooryaprabha1117?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Projects;
