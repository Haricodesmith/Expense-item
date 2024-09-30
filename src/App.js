import React, { useState } from 'react';
import './App.css';
import Newexpense from './components/NewExpense/Newexpense.js';
import Expense from './components/expenses/Expense.js';

const dummy_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2',
     title: 'New TV',
     amount: 799.49,
      date: new Date(2021, 2, 12) }, 
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Casoline',
    amount: 500,
    date: new Date(2021, 6, 12),
  },
  {
    id: 'e6',
    title: 'Groceries',
    amount: 400,
    date: new Date(2022, 7, 12),
  },
];
function App() {

  const [expenses, setExpenses] = useState(dummy_expenses);
  

  const addExpenseHandler = (expense) => {
   setExpenses((preExpenses) => { 
    return [expense, ...preExpenses]
   });
  }; 
  return (
    <div className="App">
    <Newexpense onAddExpense={addExpenseHandler}/>
    <Expense items={expenses} />  
    </div>
  );
}

export default App;
