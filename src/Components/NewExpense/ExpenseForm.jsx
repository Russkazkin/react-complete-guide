import React, { useState } from 'react';
import './ExpenseForm.sass';
import { trim } from 'lodash';
import bem from '../../helpers/bem';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const bemClass = bem('new-expense');

const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  });
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState();

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };
  const errorHandler = () => setError(null);
  const submitHandler = (event) => {
    event.preventDefault();
    if (trim(userInput.date) === '' || trim(userInput.amount) === '' || trim(userInput.title) === '') {
      setIsValid(false);
      setError({
        title: 'Invalid Input.',
        message: 'Please fill all inputs with valid data.',
      });
      return;
    }
    if (+userInput.amount < 0.01) {
      setIsValid(false);
      setError({
        title: 'Invalid Amount.',
        message: 'Please enter valid amount (> 0.01).',
      });
      return;
    }
    const data = { ...userInput, date: new Date(userInput.date) };
    onSaveExpenseData(data);
    setUserInput({
      title: '',
      amount: '',
      date: '',
    });
  };
  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <form onSubmit={submitHandler}>
        <div className={bemClass('controls')}>
          <div className={bemClass('control')}>
            <label htmlFor="title">Title</label>
            <input
              className={bemClass('control-input', { error: !isValid && trim(userInput.title) === '' })}
              id="title"
              type="text"
              onChange={titleChangeHandler}
              value={userInput.title}
            />
          </div>
          <div className={bemClass('control')}>
            <label htmlFor="amount">Amount</label>
            <input
              className={bemClass('control-input', { error: !isValid && trim(userInput.amount) === '' })}
              id="amount"
              type="number"
              onChange={amountChangeHandler}
              value={userInput.amount}
            />
          </div>
          <div className={bemClass('control')}>
            <label htmlFor="date">Date</label>
            <input
              className={bemClass('control-input', { error: !isValid && trim(userInput.date) === '' })}
              id="date"
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
              value={userInput.date}
            />
          </div>
        </div>
        <div className={bemClass('actions')}>
          <Button onClick={onCancel} type="button">
            Cancel
          </Button>
          <Button type="submit">Add Expense</Button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
