import React from 'react';
import './ExpenseItem.sass';

const ExpenseItem = () => {
  const expanseDate = new Date(2021, 10, 29);
  const expanseTitle = 'Car Insurance';
  const expanseAmount = 256.78;
  return (
    <div className="expense-item">
      <div>{expanseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expanseTitle}</h2>
        <div className="expense-item__price">${expanseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
