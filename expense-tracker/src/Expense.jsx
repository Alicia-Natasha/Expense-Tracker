import React from "react";
function Expense({ name, description, category, amount, date}){
 return (
    <tr>
        <td>{name}</td>
        <td>{description}</td>
        <td>{category}</td>
        <td>{amount}</td>
        <td>{date}</td>
    </tr>
 )
}
export default Expense;