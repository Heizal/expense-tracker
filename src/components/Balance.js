import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount); //this maps the transaction amount
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2); //this adds up everything and fixes it to decimal of 2


    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1> 
        </> //we then just put the total here
    )
}
