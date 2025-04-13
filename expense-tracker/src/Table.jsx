import React, {useState} from "react";
import ExpensesList from "./ExpensesList";

function Table({expenses}){
    const [searchQuery, setSearchQuery] = useState("");

    function handleSearch(event){
        setSearchQuery(event.target.value);
    }

    const filteredExpenses = expenses.filter(expense =>
      expense.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return(
        <section className="expense-table">
            <div className="search-bar">
                <input type="text" value={searchQuery} onChange={handleSearch} placeholder="🔍︎ Search expenses"/>
            </div>
            <aside>
                <table>
                    <thead>
                        <tr>
                            <th>Expense</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ExpensesList expenses={filteredExpenses} />
                    </tbody>
                </table>
            </aside>
        </section>
    )
}
export default Table;