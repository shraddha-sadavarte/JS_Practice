import { createContext } from "react";
import { useState, useEffect } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider =({children})=>{
    const [transactions, setTransactions] = useState(() => {
        const stored = localStorage.getItem("transactions");
        return stored ? JSON.parse(stored) : [];
    });

    const addTransaction = (transaction) => {
        setTransactions([...transactions, {...transaction, id: Date.now() + Math.random(),}]);
    }

    const deleteTransaction = (id) => {
        setTransactions(transactions.filter(t => t.id !== id));
    }

    const updateTransaction = (updatedTransaction) => {
        setTransactions(prevTransactions => prevTransactions.map(t => t.id === updatedTransaction.id ? updatedTransaction : t));
    }

    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactions));
    },[transactions]);

    return(
        <ExpenseContext.Provider value={{transactions, addTransaction, deleteTransaction, updateTransaction}}>
            {children}
        </ExpenseContext.Provider>
    )
}