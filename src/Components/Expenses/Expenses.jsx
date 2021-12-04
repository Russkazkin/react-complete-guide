import React from 'react';
import { uniqueId } from 'lodash';
import ExpenseItem from './ExpenseItem';
import './Expenses.sass';
import Card from '../UI/Card';

const Expenses = () => {
  const expenses = [
    { title: 'Car Insurance', amount: 256.78, date: new Date(2021, 10, 29) },
    { title: 'Doctor', amount: 500, date: new Date(2021, 10, 26) },
    { title: 'Food', amount: 16.75, date: new Date(2021, 10, 10) },
  ];
  return (
    <>
      {expenses.map((item) => (
        <Card className="expense-item" key={uniqueId('expense')}>
          <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
        </Card>
      ))}
    </>
  );
};

export default Expenses;
