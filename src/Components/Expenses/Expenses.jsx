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
  return (
    <>
      <div>
        <ExpenseFilter onChangeFilter={filterChangeHandler} year={filteredYear} />
      </div>
      {expenses.map((item) => (
        <Card className="expense-item" key={uniqueId('expense')}>
          <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
        </Card>
      ))}
    </>
  );
};

export default Expenses;
