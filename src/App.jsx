import React, { useEffect, useState } from 'react';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import MainHeader from './Components/MainHeader/MainHeader';
import AuthContext from './store/AuthContext';

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Car Insurance', amount: 256.78, date: new Date(2021, 10, 29) },
  { id: 'e4', title: 'Grocery', amount: 150.99, date: new Date(2021, 11, 29) },
  { id: 'e2', title: 'Doctor', amount: 500, date: new Date(2020, 5, 26) },
  { id: 'e3', title: 'Food', amount: 16.75, date: new Date(2019, 1, 10) },
];

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn }}>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home expenses={expenses} onAddExpense={addExpenseHandler} onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
};

export default App;
