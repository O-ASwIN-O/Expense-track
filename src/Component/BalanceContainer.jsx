import React from 'react'
import CurrentItem from './CurrentItem'
function BalanceContainer(props)
{
    const {expense}=props;
    let income=0;
    let expenses=0;
    expense.forEach((item)=>{
        let {amount}=item;
        if(amount>0)
        {
            income+=parseInt(amount)
        }
        else{
            expenses+=parseInt(amount)
        }
    })

    return(
        <div className='balance-container'>
        <CurrentItem  title="Income" amount={income} type="income" />
        <CurrentItem title="Expense" amount={expenses} type="expense" />
        <CurrentItem title="Balance" amount={income+expenses} type="balance" />
        </div>
    )
}
export default BalanceContainer; 