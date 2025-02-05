import React,{ useState,useEffect} from 'react';
import './App.css'
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect (()=>{
    const savedExpenses=JSON.parse(localStorage.getItem('expenses'));
    if(savedExpenses){
      setExpenses(savedExpenses);
    }
  },[]);
  
  useEffect(()=>{
    localStorage.setItem('expenses',JSON.stringify(expenses));
  },[expenses]);

  // const balanceAmount=expenses.reduce((acc,expense)=> acc+parseFloat(expense.amount),0);

  const addExpense=(expense)=>{
    setExpenses([...expenses,{...expense,id:Date.now()}]);
  }
  
  const deleteExpense=(id)=>{
    setExpenses(expenses.filter((expense)=>expense.id !==id));
  }

  const editExpense=(id,updatedExpense)=>{
    setExpenses(
      expenses.map((expense)=>
        expense.id === id ? {...expense,...updatedExpense}: expense
      )
    )
  }

  return (
    <div className='App'>
    <header>
    <h1>Expense_Tracker</h1>
    </header>
    
    {/* <h3>Balance Amount: ${balanceAmount.toFixed(2)} </h3> */}
    <AddExpenseForm addExpense={addExpense}/>
    <ExpenseList expenses={expenses} onDelete={deleteExpense} onEdit={editExpense}/>
    </div>
     
  )
}

export default App;
