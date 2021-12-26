import React, { useRef, useState } from 'react';
import './ExpenseForm.sass';
import { trim } from 'lodash';
import bem from '../../helpers/bem';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const bemClass = bem('new-expense');

const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
  const titleInputRef = useRef();
  const amountInputRef = useRef();
  const dateInputRef = useRef();
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState();
  const errorHandler = () => setError(null);
  const submitHandler = (event) => {
    event.preventDefault();
    const date = dateInputRef.current.value;
    const title = titleInputRef.current.value;
    const amount = amountInputRef.current.value;
    if (trim(date) === '' || trim(amount) === '' || trim(title) === '') {
      setIsValid(false);
      setError({
        title: 'Invalid Input.',
        message: 'Please fill all inputs with valid data.',
      });
      return;
    }
    if (+amount < 0.01) {
      setIsValid(false);
      setError({
        title: 'Invalid Amount.',
        message: 'Please enter valid amount (> 0.01).',
      });
      return;
    }
    const data = { title, amount, date: new Date(date) };
    onSaveExpenseData(data);
  };
  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <form onSubmit={submitHandler}>
        <div className={bemClass('controls')}>
          <div className={bemClass('control')}>
            <label htmlFor="title">Title</label>
            <input
              className={bemClass('control-input', { error: !isValid })}
              id="title"
              type="text"
              ref={titleInputRef}
            />
          </div>
          <div className={bemClass('control')}>
            <label htmlFor="amount">Amount</label>
            <input
              className={bemClass('control-input', { error: !isValid })}
              id="amount"
              type="number"
              ref={amountInputRef}
            />
          </div>
          <div className={bemClass('control')}>
            <label htmlFor="date">Date</label>
            <input
              className={bemClass('control-input', { error: !isValid })}
              id="date"
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              ref={dateInputRef}
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
