import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ExpenseContext } from '../context/ExpenseContext'

const Dashboard = () => {
    const {transactions} = useContext(ExpenseContext);

    const totalIncome = transactions
        .filter(t => t.type === 'income')
        .reduce((acc, t) => acc + t.amount, 0); 
        //reduce() is used to combine array elements into a single value.
        //In this code, it adds all transaction amounts to calculate total income or expense, starting from 0.

    const totalExpenses = transactions
        .filter(t => t.type === 'expense')
        .reduce((acc, t) => acc + t.amount, 0);

    const totalBalance = totalIncome - totalExpenses;

  return (
    <div className="w-full h-full flex flex-col justify-between p-5">
        <h1 className="text-2xl font-bold mb-4">Expense Tracker</h1>
        <div className='flex flex-row justify-between items-center gap-3'>
            <div className="flex-1 bg-white rounded-lg shadow-md p-4 w-50">
                <p>Total balance: ${totalBalance}</p>
            </div>
            <div className="flex-1 bg-white rounded-lg shadow-md p-4 w-50">
                <p>Total Expenses: ${totalExpenses}</p>
            </div>
            <div className="flex-1 bg-white rounded-lg shadow-md p-4 w-50">
                <p>Total Income: ${totalIncome}</p>
            </div>
        </div>
        <div className="mt-4">
            <Link to="/add-expense-income">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Add Expense/Income
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Dashboard
