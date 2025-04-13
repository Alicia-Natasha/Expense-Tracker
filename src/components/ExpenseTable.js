import React from 'react'

function ExpenseTable({ expenses }) {
  return (
    <table border="1" cellPadding="10" cellSpacing="0">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Amount ($)</th>
      </tr>
    </thead>
    <tbody>
      {expenses.length === 0 ? (
        <tr>
          <td colSpan="3" style={{ textAlign: 'center' }}>
            No expenses found.
          </td>
        </tr>
      ) : (
        expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.name}</td>
            <td>{expense.description}</td>
            <td>{expense.amount.toFixed(2)}</td>
          </tr>
        ))
      )}
    </tbody>
  </table>
  )
}

export default ExpenseTable
