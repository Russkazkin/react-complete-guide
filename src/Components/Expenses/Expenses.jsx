import React, { useState } from 'react';
import './Expenses.sass';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2021');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = expenses.filter((item) => item.date.getFullYear().toString() === filteredYear);
  return (
    <>
      <div>
        <ExpenseFilter onChangeFilter={filterChangeHandler} year={filteredYear} />
      </div>
      <ExpensesList filteredExpenses={filteredExpenses} />
    </>
  );
};

export default Expenses;
