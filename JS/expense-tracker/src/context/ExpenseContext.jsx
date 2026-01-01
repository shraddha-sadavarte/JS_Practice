import { createContext } from "react";
import { useState } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider =({children})=>{
    const [transactions, setTransactions] = useState([]);

    const addTransaction = (transaction) => {
        setTransactions([...transactions, transaction]);
    }

    return(
        <ExpenseContext.Provider value={{transactions, addTransaction}}>
            {children}
        </ExpenseContext.Provider>
    )
}