import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./Expensedate";
import './Expenseslist.css';
import Expenseitem from "./Expenseitem";

function Expenseslist(props){
   
  if(props.items.length === 0){
    return(
        <h2 className="">Found no expenses</h2>
    );
    }
    return(
      <ul className="expense">
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