import React from "react";
import Expense from "./Expense";

function ExpensesList({ expenses }){
    const expenseList = expenses.map((expense) => (
        <Expense key={expense.id} name={expense.name} description={expense.description} category={expense.category} amount={expense.amount} date={expense.date}/>
    ))
    return <>{expenseList}</>
}
export default ExpensesList;