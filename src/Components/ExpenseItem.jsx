import React from 'react';
import './ExpenseItem.sass';

/**
 * @param {String} title
 * @param {Number} amount
 * @param {Date} date
 * @returns {JSX.Element}
 * @constructor
 */
const ExpenseItem = ({ title, amount, date }) => {
  const month = date.toLocaleString('en-EN', { month: 'long' });
  const day = date.toLocaleString('en-EN', { day: '2-digit' });
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{date.getFullYear()}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
