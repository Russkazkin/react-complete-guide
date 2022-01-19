import React, { useContext, useEffect, useReducer } from 'react';

import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import updateObject from '../../helpers/updateObject';
import authContext from '../../store/AuthContext';

const initialState = {
  enteredEmail: '',
  emailIsValid: null,
  enteredPassword: '',
  passwordIsValid: null,
  formIsValid: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'RESET':
      return initialState;
    case 'EMAIL_INPUT':
      return updateObject(state, { enteredEmail: action.value, emailIsValid: action.value.includes('@') });
    case 'PASSWORD_INPUT':
      return updateObject(state, { enteredPassword: action.value, passwordIsValid: action.value > 5 });
    case 'FORM_VALIDATION':
      return updateObject(state, { formIsValid: action.value });
    case 'EMAIL_VALIDATION':
      return updateObject(state, { emailIsValid: state.enteredEmail.includes('@') });
    case 'PASSWORD_VALIDATION':
      return updateObject(state, { passwordIsValid: state.enteredPassword > 5 });
    default:
      return state;
  }
};

const Login = (props) => {
  const [formState, dispatch] = useReducer(reducer, initialState, f=>f);
  const context = useContext(authContext);

  useEffect(() => {
    const validationTimeout = setTimeout(() => {
      dispatch({ type: 'FORM_VALIDATION', value: formState.emailIsValid && formState.passwordIsValid });
    }, 500);
    return () => {
      clearTimeout(validationTimeout);
    };
  }, [formState.emailIsValid, formState.passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatch({ type: 'EMAIL_INPUT', value: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatch({ type: 'PASSWORD_INPUT', value: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatch({ type: 'EMAIL_VALIDATION' });
  };

  const validatePasswordHandler = () => {
    dispatch({ type: 'PASSWORD_VALIDATION' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    context.onLogin(formState.enteredEmail, formState.enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={`${classes.control} ${formState.emailIsValid === false ? classes.invalid : ''}`}>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={formState.enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            formState.passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formState.enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formState.formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
