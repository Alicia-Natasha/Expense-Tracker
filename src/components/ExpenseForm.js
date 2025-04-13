import React from 'react'

function ExpenseForm({ addExpense }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name && description && amount) {
        const newExpense = {
          id: Date.now(),
          name,
          description,
          amount: parseFloat(amount),
        };
        addExpense(newExpense);
        setName('');
        setDescription('');
        setAmount('');
           }
      };

return () {} }



export default ExpenseForm
