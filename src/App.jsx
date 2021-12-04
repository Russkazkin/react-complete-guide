import React from 'react';
import Expenses from './Components/Expenses/Expenses';
import Card from './Components/UI/Card';

const App = () => {
  return (
    <div>
      <h2>Let&apos;s get started!</h2>
      <Card className="expenses">
        <Expenses />
      </Card>
    </div>
  );
};

export default App;
