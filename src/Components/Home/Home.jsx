import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import NewExpense from '../NewExpense/NewExpense';
import Expenses from '../Expenses/Expenses';

const Home = ({ expenses, onAddExpense }) => {
  return (
    <Card className={classes.home}>
      <NewExpense onAddExpense={onAddExpense} />
      <Card className="expenses">
        <Expenses expenses={expenses} />
      </Card>
    </Card>
  );
};

export default Home;
