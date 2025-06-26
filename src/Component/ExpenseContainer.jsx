import React, { useState,useEffect } from 'react'
import Expenseform from './ExpenseForm.jsx'
import History from './History.jsx'
import BalanceContainer from './BalanceContainer.jsx'
import {v4 as uid} from "uuid";

function ExpenseContainer() {
    const EXPENSE=[ ]   

    
    function fetchExpense()
    {
      
          fetch('https://expense-track-1.onrender.com/Expense')
      .then(res => res.json())
      .then(data => setExpense(data))
      .catch(err => console.error('Error fetching:', err));
        
    }

    useEffect(() => {
          fetch('https://expense-track-1.onrender.com/Expense')
      .then(res => res.json())
      .then(data => setExpense(data))
      .catch(err => console.error('Error fetching:', err));
        

  }, []);


    const addexpensedb = (title, amount) => {
    fetch('https://expense-track-1.onrender.com/Expense', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, amount }),
    })
      .then(res => res.json())
      .then(data => {
        setExpense([...expense, data.data]); // append new item
      })
      .catch(err => console.error('Error adding:', err));
  };

    
    

    const[expense,setExpense]=useState(EXPENSE);


    const addexpense=(title,amount)=>{
        addexpensedb(title,amount);
        setExpense([
            ...expense,{
                id: uid(),
                title,
                amount,
            },
        ]);
    }

   async function deleteExpensedb(id){
    try{
  const response = await fetch(`https://expense-track-1.onrender.com/Expense/${id}`, {
    method: 'DELETE',
  })
  
  if(!response.ok){
    throw new Error('Network error')
  }
    }
    catch(error){
      console.error('Error ');
    }

    fetchExpense();
};
    
    function deleteExpense(u_id){
        console.log('button clicked')
        deleteExpensedb(u_id);
        
        

    }


  return (  
    <div className='expense-container'>
    <h1>Expense Tracker</h1>
         <BalanceContainer expense={expense}/>
         <History expense={expense} deleteExpense={deleteExpense}/>    
        <Expenseform addexpense={addexpense}/>
    </div>
  )
}
export default ExpenseContainer
