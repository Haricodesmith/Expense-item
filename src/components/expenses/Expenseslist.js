import React from "react";
import Expenseitem from "./Expenseitem";
import './Expenseslist.css';

function Expenseslist(props){
   
  if(props.items.length === 0){
    return <h2 className="expense-list__fallback">Found no expenses.</h2>
    }
    return(
      <ul className='expenses-list'>
      {props.items.map((expense) => (
        <Expenseitem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
    )
}

export default Expenseslist;