import Expenseitem from './Expenseitem';
import './Expense.css';
import Card from '../UI/Card'
import Expensesfilter from './Expensefilter.js';
import React, {useState} from 'react';
import './Expensedate.css';

const Expense = (props) => {
  const [filteredYear, setFilterYear] = useState("2020");

  const filterChangeHandler = selectedYear => {
    setFilterYear(selectedYear);
  };
  const filteredExpenses  = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  })
  return (
    <Card className="expenses">
      <Expensesfilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
       {}
      {filteredExpenses.map((expense) => (
        <Expenseitem  
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expense;
