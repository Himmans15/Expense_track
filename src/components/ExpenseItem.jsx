import React, { useState } from "react";

function ExpenseItem({ expense, onDelete, onEdit }) {
  const { id, name, amount, date, category } = expense;

  const [isEditing, setIsEditing] = useState(false);
  const [updatedExpense, setUpdatedExpense] = useState({
    name,
    amount,
    date,
    category,
  });

  const handleEditClick = () => {
    if (isEditing) {
      if (!updatedExpense.name || !updatedExpense.amount || !updatedExpense.date || !updatedExpense.category) {
        alert('Please fill out all fields');
        return;
      }
      onEdit(id, updatedExpense);
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="expense-item">
      {isEditing ? (
        <>
        
          <input
            type="text"
            name="name"
            value={updatedExpense.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="amount"
            value={updatedExpense.amount}
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            value={updatedExpense.date}
            onChange={handleChange}
          />
          <select
            name="category"
            value={updatedExpense.category}
            onChange={handleChange}
          >
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </>
      ) : (
        <>
          <p>{name}</p>
          <p>{amount}</p>
          <p>{date}</p>
          <p>{category}</p>
        </>
      )}

      <div className="actions">
        <button className="edit-btn" onClick={handleEditClick}>
          {isEditing ? "Save" : "Edit"}
        </button>
        <button className="delete-btn" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ExpenseItem;
