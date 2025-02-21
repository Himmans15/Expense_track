import React,{useState} from 'react'

const AddExpenseForm = ({addExpense}) => {
    const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!name || !amount || !date || !category){
          alert('Please fill all feilds');
          return;
        } 

        const newExpense={name,amount:parseFloat(amount),date,category};
        addExpense(newExpense);
        setName("");
        setAmount("");
        setDate("");
        setCategory("");
      
    };
  return (
      
      <form onSubmit={handleSubmit}>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Expense name'/>
      <input type='number' value={amount} placeholder='Amount' onChange={(e)=>setAmount(e.target.value)} />
      <input type='date' value={date} placeholder='Enter date' onChange={(e)=>setDate(e.target.value)}/>
      <select value={category} onChange={(e)=>setCategory(e.target.value)} >
      <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <button type='submit'>Add</button>
      </form>
      
     
  )
}

export default AddExpenseForm
