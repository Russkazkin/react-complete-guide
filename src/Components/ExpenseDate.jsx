import React from 'react';
import './ExpenseDate.sass';

/**
 * @param {Date} date
 * @returns {JSX.Element}
 * @constructor
 */
const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString('en-EN', { month: 'long' });
  const day = date.toLocaleString('en-EN', { day: '2-digit' });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{date.getFullYear()}</div>
    </div>
  );
};
export default ExpenseDate;
