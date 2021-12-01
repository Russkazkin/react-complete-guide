import React from 'react';
import ExpenseItem from './Components/ExpenseItem';
import { uniqueId } from 'lodash';

const App = () => {
  const expenses = [
    { title: 'Car Insurance', amount: 256.78, date: new Date(2021, 10, 29) },
    { title: 'Doctor', amount: 500, date: new Date(2021, 10, 29) },
    { title: 'Food', amount: 16.75, date: new Date(2021, 10, 29) },
  ];
  return (
    <div>
      <h2>Let&apos;s get started!</h2>
      {expenses.map((item) => (
        <ExpenseItem key={uniqueId('expense')} title={item.title} amount={item.amount} date={item.date} />
      ))}
    </div>
  );
};

export default App;
