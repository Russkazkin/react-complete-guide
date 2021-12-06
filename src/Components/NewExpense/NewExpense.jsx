import React from 'react';
import './NewExpense.sass';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ item }) => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
