import React, { useState } from 'react';
import './ExpenseItem.sass';
import ExpenseDate from './ExpenseDate';

/**
 * @param {String} title
 * @param {Number} amount
 * @param {Date} date
 * @returns {JSX.Element}
 * @constructor
 */
const ExpenseItem = ({ title, amount, date }) => {
  const [expenseTitle, setExpenseTitle] = useState(title);
  const clickHandler = () => {
    setExpenseTitle(`New ${title}`);
  };
  return (
    <>
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </>
  );
};

export default ExpenseItem;
