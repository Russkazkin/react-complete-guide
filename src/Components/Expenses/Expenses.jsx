import React from 'react';
import { uniqueId } from 'lodash';
import ExpenseItem from './ExpenseItem';
import './Expenses.sass';
import Card from '../UI/Card';

const Expenses = ({ expenses }) => {
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
