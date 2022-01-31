import React, { useRef } from 'react';
import classes from './Input.module.css';

const Input = ({ id, type, label, value, isValid, onChange, onBlur }) => {
  const inputRef = useRef();
  const activate = () => {
    inputRef.current.focus();
  };
  return (
    <div className={`${classes.control} ${isValid === false ? classes.invalid : ''}`}>
      <label htmlFor={id}>{label}</label>
      <input ref={inputRef} type={type} id={id} value={value} onChange={onChange} onBlur={onBlur} />
    </div>
  );
};

export default Input;
