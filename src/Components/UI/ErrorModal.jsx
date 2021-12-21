import React from 'react';
import Card from './Card';
import Button from './Button';

const ErrorModal = ({ title, mesage }) => {
  return (
    <Card>
      <header>
        <h2>{title}</h2>
      </header>
      <div>
        <p>{mesage}</p>
      </div>
      <footer>
        <Button>Okay</Button>
      </footer>
    </Card>
  );
};

export default ErrorModal;
