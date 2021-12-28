import React, { useState } from 'react';
import Expenses from './Components/Expenses/Expenses';
import Card from './Components/UI/Card';
import NewExpense from './Components/NewExpense/NewExpense';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import MainHeader from './Components/MainHeader/MainHeader';

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Car Insurance', amount: 256.78, date: new Date(2021, 10, 29) },
  { id: 'e4', title: 'Grocery', amount: 150.99, date: new Date(2021, 11, 29) },
  { id: 'e2', title: 'Doctor', amount: 500, date: new Date(2020, 5, 26) },
  { id: 'e3', title: 'Food', amount: 16.75, date: new Date(2019, 1, 10) },
];

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };
  return (
    <>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
        <div>
          <NewExpense onAddExpense={addExpenseHandler} />
          <Card className="expenses">
            <Expenses expenses={expenses} />
          </Card>
        </div>
      </main>
    </>
  );
};

export default App;
