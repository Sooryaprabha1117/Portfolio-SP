import React, { useState } from 'react';
import './Contact.css'; // Ensure you create this CSS file for styling
import linked from "./Assets/linkedin.gif";
import git from "./Assets/git.gif";
import mail from "./Assets/mail.gif";

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
    // You can handle form data here, e.g., log it or store it in local storage
    alert('Message sent!'); // This is just a placeholder for demonstration
  };

  return (
    <div className="contact-container">
      <div className="social-media">
        <h2 >Connect with me</h2>
        <p id='h2'>Feel free to connect with me in any social account</p>
        <ul>
          <li><img src={linked}/><a href="https://www.linkedin.com/in/soorya1727/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><img src={git}/><a href="https://github.com/Sooryaprabha1117" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><img src={mail}/><a href="mailto:prabhasoorya17@gmail.com"target="_blank" rel="noopener noreferrer">Email</a></li>
          {/* Add other social media links here */}
        </ul>
      </div>
      <div className="contact-form">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button id='but1' type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
