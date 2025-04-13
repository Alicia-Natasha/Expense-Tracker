import React, { useState } from 'react'
import Header from './Header'
import AddExpense from './AddExpense'
import expensesData from './data/expenses'


function App() {
  const [expenses, setExpenseData] = useState(expensesData); 

  return (
    <>
      <div>
        <Header />
        <AddExpense expenses={expenses} setExpenseData={setExpenseData}/> 
      </div>
    </>
  )
}

export default App;