import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';


export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext); 

    const amounts = transactions.map(transaction => transaction.amount); //gets us the amount

    const income = amounts
        .filter(item => item > 0) //filters and adds up everything greater than zero
        .reduce((acc, item) => (acc += item), 0) //adds it up
        .toFixed(2); //to the decimal of 2

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1 //anything thats less than 0 will be added up together with .reduce
    ).toFixed(2);


    return (
        <div>
            <div className="inc-exp-container">
                <div>
                <h4>Income</h4>
                <p className="money plus">{income}</p>
                </div>
                <div>
                <h4>Expense</h4>
                <p className="money minus">{expense}</p>
                </div>
            </div>
        </div>
    )
}
