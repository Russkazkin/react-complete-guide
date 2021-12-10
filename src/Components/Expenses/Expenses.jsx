import React, { useState } from 'react';
import { uniqueId } from 'lodash';
import ExpenseItem from './ExpenseItem';
import './Expenses.sass';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

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
      {filteredExpenses.map((item) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} key={item.id} />
      ))}
    </>
  );
};

export default Expenses;
