import React, { useState } from 'react';
import "./AddExpense.css";
import Table from "./Table";

function AddExpense({ expenses, setExpenseData }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: expenses.length + 1,
      name,
      description,
      category,
      amount,
      date,
    };


    setExpenseData((expenses) => [...expenses, newExpense]);

    setName('');
    setDescription('');
    setCategory('');
    setAmount('');
    setDate('');
  };

  return (
    <div className="add-expense-container">
      <aside className="add-expense-form">
        <form onSubmit={handleSubmit}>
          <h3>Add Expense</h3>
          <p>Enter your expense details below</p>
          <input
            type="text"
            placeholder="Enter expense name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter expense description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter expense category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="date"
            placeholder="mm/dd/yyyy"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </aside>
      <Table expenses={expenses}/>
    </div>
  );
}

export default AddExpense;