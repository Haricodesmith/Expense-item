import React, { useState } from 'react';

import Card from '../UI/Card';
import Expensefilter from './Expensefilter';
import Expenseslist from './Expenseslist';
import Expenseschart from './Expenseschart';
import './Expense.css';

function Expense(props){
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <Expensefilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <Expenseschart expenses={filteredExpenses} />
        <Expenseslist items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expense;