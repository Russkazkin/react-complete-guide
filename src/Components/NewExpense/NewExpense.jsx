import React, { useState } from 'react';
import './NewExpense.sass';
import { uniqueId } from 'lodash';
import ExpenseForm from './ExpenseForm';
import Button from '../UI/Button';

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);
  const startEditingHandler = () => setIsEditing(true);
  const stopEditingHandler = () => setIsEditing(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: uniqueId('e') };
    onAddExpense(expenseData);
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
      {!isEditing && (
        <Button type="button" onClick={startEditingHandler}>
          Add New Expense
        </Button>
      )}
    </div>
  );
};

export default NewExpense;
