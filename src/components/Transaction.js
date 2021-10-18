import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext) //brings in our deletetransaction function

    const sign = transaction.amount < 0 ? '-' : '+'; //this is a ternary operator that says that is the amount is less than 0 put the negative sign, else use the positive sign.

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}> 
            {transaction.text} <span>{ sign }${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li> //what math.abs did was return an aboslute positive number which then validates pur if/else statement.
        //with the className since we already put in our minus and plus in the css we make it dynamic but saying if the amount is less than 0 put the color of minus else put the color of plus
    )
}
