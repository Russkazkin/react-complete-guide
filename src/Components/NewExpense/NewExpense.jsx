import React from 'react';
import './NewExpense.sass';
import { uniqueId } from 'lodash';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: uniqueId('e') };
    onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
