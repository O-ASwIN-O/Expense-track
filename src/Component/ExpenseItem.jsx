import React from 'react'
function ExpenseItem(props)
{
    const {_id,title,amount}=props.expense
    console.log(_id);
    const type=amount> 0?"income":"expense";
    return (
        <div className={`expense-item ${type}`}>
            <div className='expense-title '>{title}</div>
            <div className='expense-amount'>₹{amount}</div>
            <div> <button className='btn-del' onClick={()=>{props.deleteExpense(_id)}} >Delete</button></div>

        </div>
    )
}
export default ExpenseItem