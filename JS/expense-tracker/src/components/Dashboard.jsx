import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-5">
        <h1 className="text-2xl font-bold mb-4">Expense Tracker</h1>
        <div className='flex flex-row justify-between items-center gap-3'>
            <div className="flex-1 bg-white rounded-lg shadow-md p-4 w-50">
                <p>Total balance: $10000</p>
            </div>
            <div className="flex-1 bg-white rounded-lg shadow-md p-4 w-50">
                <p>Total Expenses: $5000</p>
            </div>
            <div className="flex-1 bg-white rounded-lg shadow-md p-4 w-50">
                <p>Total Income: $20000</p>
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
