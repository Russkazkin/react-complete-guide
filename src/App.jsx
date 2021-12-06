import React from 'react';
import Expenses from './Components/Expenses/Expenses';
import Card from './Components/UI/Card';
import NewExpense from './Components/NewExpense/NewExpense';

const App = () => {
  return (
    <div>
      <NewExpense />
      <Card className="expenses">
        <Expenses />
      </Card>
    </div>
  );
};

export default App;
