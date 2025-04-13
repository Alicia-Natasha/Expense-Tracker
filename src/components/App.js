import React, { useState } from "react";
import './App.css';
import ExpenseTable from './ExpenseTable';
import ExpenseForm from './ExpenseForm';
import SearchBar from './SearchBar'

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const filteredExpenses = expenses.filter(
    exp => exp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           exp.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
      <div>
        <h1>Expense Tracker</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ExpenseForm addExpense={addExpense} />
        <ExpenseTable expenses={filteredExpenses} />
      </div>
    );
  }

export default App;
