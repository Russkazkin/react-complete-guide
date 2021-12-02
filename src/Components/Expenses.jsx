import React from 'react';
import { uniqueId } from 'lodash';
import ExpenseItem from './ExpenseItem';
import './Expenses.sass';

const Expenses = () => {
  const expenses = [
    { title: 'Car Insurance', amount: 256.78, date: new Date(2021, 10, 29) },
    { title: 'Doctor', amount: 500, date: new Date(2021, 10, 26) },
    { title: 'Food', amount: 16.75, date: new Date(2021, 10, 10) },
  ];
  return (
    <div className="expenses">
      {expenses.map((item) => (
        <ExpenseItem key={uniqueId('expense')} title={item.title} amount={item.amount} date={item.date} />
      ))}
    </div>
  );
};

export default Expenses;
