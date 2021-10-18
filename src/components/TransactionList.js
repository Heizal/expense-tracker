import React, { useContext } from 'react'
import { Transaction } from './Transaction'
import { GlobalContext } from '../context/GlobalState'

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext); //this gives us the transaction list in the globalstate


    return (
        <>
            <h3>History</h3>
            <ul className="list">
                { transactions.map(transaction =>(<Transaction key={transaction.id} transaction={transaction}/>))}
            </ul>
        </>
    )
}
