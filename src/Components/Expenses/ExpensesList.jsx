import React from 'react';
import { isEmpty } from 'lodash';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.sass';

const ExpensesList = ({ filteredExpenses }) => {
  if (isEmpty(filteredExpenses)) {
    return <div className="expenses-list__fallback">No expenses yet.</div>;
  }
  return (
    <ul className="expenses-list">
      {filteredExpenses.map((item) => {
        return <ExpenseItem title={item.title} amount={item.amount} date={item.date} key={item.id} />})}
    </ul>
  );
};

export default ExpensesList;
