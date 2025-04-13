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

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
