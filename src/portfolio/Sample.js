import React from 'react';

const ContactCard = () => {
  const email = "prabhasoorya17@gmail.com"; // Replace with your actual email

  return (
    <div className="contact-card">
      <h3>Contact Me</h3>
      <p>Feel free to reach out via email:</p>
      <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
        Email Me
      </a>
    </div>
  );
};

export default ContactCard;
