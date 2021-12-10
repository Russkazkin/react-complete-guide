import React, { useState } from 'react';
import Expenses from './Components/Expenses/Expenses';
import Card from './Components/UI/Card';
import NewExpense from './Components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Car Insurance', amount: 256.78, date: new Date(2021, 10, 29) },
  { id: 'e2', title: 'Doctor', amount: 500, date: new Date(2020, 10, 26) },
  { id: 'e3', title: 'Food', amount: 16.75, date: new Date(2019, 10, 10) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Card className="expenses">
        <Expenses expenses={expenses} />
      </Card>
    </div>
  );
};

export default App;
