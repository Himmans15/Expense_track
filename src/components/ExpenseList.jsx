import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = ({expenses,onDelete,onEdit}) => {
  return (
    <div className='expense-list'>
     <div className="expense-header">
        <p><strong>Name</strong></p>
        <p><strong>Amount</strong></p>
        <p><strong>Date</strong></p>
        <p><strong>Category</strong></p>
        <p><strong>Actions</strong></p>
      </div>
      {expenses.length === 0 ? (
        <p className='no-expenses-message'>No expenses added yet.</p>
      ): (
        expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            onDelete={onDelete}
            onEdit={onEdit}
          />
            ))
        )
      }
    </div>
  )
}

export default ExpenseList
