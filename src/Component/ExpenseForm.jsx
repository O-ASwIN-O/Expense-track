import React, { useState } from 'react'

function Expenseform(props) {
    const[title,setTitle]=useState("")
    const [amount,setAmount]=useState(0)
    const handlesubmit=(e)=>{
        e.preventDefault()
        props.addexpense(title,amount)
        setTitle("")
        setAmount(0)
    }
    const handletitlechange=(e)=>{
        setTitle(e.target.value)
    }
    const handleamountchange=(e)=>{
        setAmount(e.target.value)
    }
  return (
    <div className='expense-form'>
        <h3>Add Expense</h3>
    <form onSubmit={handlesubmit}>
        <div className='form-group'>
            <label htmlFor='title' className='from-label'>Title</label>
            <input type='text' id='title' name='title' value={title} onChange={handletitlechange}
            className='form-input'/>
        </div>
        <div className='form-group'>
            <label htmlFor='amount' className='form-label'>Amount(₹)</label>
            <input type='number' id='amount' name='amount' value={amount} onChange={handleamountchange}
            className='form-input'/>
        </div>
        <button type='submit' className='submit-button'>Add</button>
    </form>
    </div>
  )
}

export default Expenseform