import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ExpenseForm from './ExpenseForm';
import ExpenseTable from './ExpenseTable';


function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('');

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const deleteExpense = (id) => {
    const updated = expenses.filter(exp => exp.id !== id);
    setExpenses(updated);
  };

  // Filter first
  const filteredExpenses = expenses.filter(
    exp =>
      exp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Then sort
  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (sortField === 'description') {
      return a.description.localeCompare(b.description);
    } else if (sortField === 'name') {
      return a.name.localeCompare(b.name);
    } else {
      return 0;
    }
  });

  return (
    <div className="app">
    <h1>Expense Tracker</h1>
    <SearchBar search={search} setSearch={setSearch} />
    <ExpenseForm onAdd={addExpense} />
    <ExpenseTable
      expenses={filteredExpenses}
      onDelete={deleteExpense}
    />
  </div>
  );
}

export default App;
