import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.sass';

const Backdrop = ({ onConfirm }) => {
  return <div onClick={onConfirm} className={classes.backdrop} />;
};

const Modal = ({ onConfirm, title, message }) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>
      <div className={classes.content}>
        <p>{message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({ title, message, onConfirm }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onConfirm={onConfirm} />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(
        <Modal onConfirm={onConfirm} title={title} message={message} />,
        document.getElementById('overlay-root'),
      )}
    </>
  );
};

export default ErrorModal;
