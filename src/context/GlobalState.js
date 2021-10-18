import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

//Initail state
const initialState = {
    transactions: []
}

//create context
export const GlobalContext = createContext(initialState);

//provider componenent
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions that will make calls to the reducer
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>
          {children}
        </GlobalContext.Provider>)

}