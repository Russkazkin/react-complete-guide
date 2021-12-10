import React from 'react';
import './ExpenseItem.sass';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

/**
 * @param {String} title
 * @param {Number} amount
 * @param {Date} date
 * @returns {JSX.Element}
 * @constructor
 */
const ExpenseItem = ({ title, amount, date }) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
