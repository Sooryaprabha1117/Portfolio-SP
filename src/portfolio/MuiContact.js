import React, { useState } from 'react';
import { TextField, Button, Grid, Box } from '@mui/material';
import './MuiContact.css'; // Ensure you have this CSS for layout
import linked from "./Assets/linkedin.gif";
import git from "./Assets/git.gif";
import mail from "./Assets/mail.gif";
import crop from "./Assets/Contact us-amico.png";

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <Grid container className="contact-container">
      {/* Right side contact form */}
      <Grid item xs={12} md={6}>
        <Box className="contact-form">
          <h2>CONTACT ME</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              margin="normal"
              required
              sx={{
                '& .MuiInputBase-root': {
                  height: '43px', // Set height for the text field
                },
              }}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              margin="normal"
              type="email"
              required
              sx={{
                '& .MuiInputBase-root': {
                  height: '43px', // Set height for the text field
                },
              }}
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              margin="normal"
              multiline
              rows={2} // Reduced rows for a smaller height
              required
              sx={{
                '& .MuiInputBase-root': {
                  height: '70px', // Set height for the text field
                },
                '& .MuiTextareaAutosize-root': {
                  minHeight: '80px', // Adjust the min height of the textarea
                },
              }}
            />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                marginTop: '21px',
                backgroundColor: '#470439', // Default background color
                '&:hover': {
                  backgroundColor: '#8b1e87', // Custom background color on hover
                  color: "#fff",
                }
              }}
            >
              Send Message
            </Button>
          </form>
        </Box>
      </Grid>

      {/* Left side image */}
      <Grid item xs={12} md={6} className="contact-image">
        <img
          src={crop}
          alt="Contact visual"
          style={{
            width: '60%', // Adjusted to reduce image size
            height: 'auto', // Maintain aspect ratio
            objectFit: 'cover',
            marginLeft: '15%',
          }}
        />
      </Grid>

      {/* Social Media Section at the Bottom */}
      <Grid item xs={12}>
        <div className="social-media">
          <ul>
            <li>
              <img src={linked} alt="LinkedIn" />
              <a href="https://www.linkedin.com/in/soorya1727/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li>
              <img src={git} alt="GitHub" />
              <a href="https://github.com/Sooryaprabha1117" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
            <li>
              <img src={mail} alt="Email" />
              <a href="mailto:prabhasoorya17@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            </li>
          </ul>
        </div>
      </Grid>
    </Grid>
  );
};

export default Contact;
