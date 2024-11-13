import React from 'react';
import CardsPage from './CardsPage';
import { Card } from '@mui/material';


const Card = () => {
  const email = "your_email@example.com"; // Replace with your email

  return (
    <div>
      <h1>About Me</h1>
      <CardsPage email={email} />
      <CardsPage/>
    </div>
  );
};

export default Card;
