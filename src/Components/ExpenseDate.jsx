import React from 'react';

/**
 * @param {Date} date
 * @returns {JSX.Element}
 * @constructor
 */
const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString('en-EN', { month: 'long' });
  const day = date.toLocaleString('en-EN', { day: '2-digit' });
  return (
    <div>
      <div>{month}</div>
      <div>{day}</div>
      <div>{date.getFullYear()}</div>
    </div>
  );
};
export default ExpenseDate;
