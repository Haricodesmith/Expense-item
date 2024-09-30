import Expenseitem from './Expenseitem';
import './Expense.css';
import Card from '../UI/Card'
import Expensesfilter from './Expensefilter.js';
import React, {useState} from 'react';
import './Expensedate.css';
import Expenseslist from './Expenseslist.js'

function Expense(props) {

  const [filteredYear, setFilterYear] = useState("2020");

  const filterChangeHandler = selectedYear => {
    setFilterYear(selectedYear);
  };
  const filteredExpenses  = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  return (
    <Card className="expenses">
      <Expensesfilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <Expenseslist items={filteredExpenses}/>
    </Card>
  );
};

export default Expense;
