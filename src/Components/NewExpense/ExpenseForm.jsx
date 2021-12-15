import React, { useState } from 'react';
import './ExpenseForm.sass';
import { trim } from 'lodash';

const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  });
  const [isValid, setIsValid] = useState(true);

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
  const submitHandler = (event) => {
    event.preventDefault();
    if (trim(userInput.date) === '' || trim(userInput.amount) === '' || trim(userInput.title) === '') {
      setIsValid(false);
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
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            style={{ borderColor: !isValid && trim(userInput.title) === '' ? 'red' : 'transparent' }}
            id="title"
            type="text"
            onChange={titleChangeHandler}
            value={userInput.title}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            style={{ borderColor: !isValid && trim(userInput.amount) === '' ? 'red' : 'transparent' }}
            id="amount"
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={userInput.amount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            style={{ borderColor: !isValid && trim(userInput.date) === '' ? 'red' : 'transparent' }}
            id="date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={userInput.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={onCancel} type="button">
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
