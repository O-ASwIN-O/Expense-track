import React from 'react'
import Expenseitem from './ExpenseItem'
function History(props) {
  const deleteExpense = props.deleteExpense;
  console.log(props.expense)
  return (
    <>
    <h3>History</h3>
    <div className='history'>
      {props.expense.map((expense)=>
        (
        <Expenseitem deleteExpense={deleteExpense}
        key={expense._id}
        expense={expense}
        />

      ))}
      </div>
    </>

    )
}

export default History
