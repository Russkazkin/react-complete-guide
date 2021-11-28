import React from 'react';
import './ExpenseItem.sass';

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>May 29th 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$256.78</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
