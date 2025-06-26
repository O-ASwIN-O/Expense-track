import React from 'react'
function CurrentItem(props)
{
    return(
        <div className='currency-item'>
            <div className='title'>{props.title}</div>
            <div className={`amount ${props.type}`}>₹ {props.amount}</div>
        </div>
    )
}
export default CurrentItem