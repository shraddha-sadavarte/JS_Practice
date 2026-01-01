import React from 'react'

const AddExpenseIncome = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-5">
      <h1 className="text-2xl font-bold mb-4">Add Expense/Income</h1>
      <form className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
                Type
            </label>
            <select id="type" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option value="expense">Expense</option>
                <option value="income">Income</option>
            </select>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                Amount
            </label>
            <input type="number" id="amount" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Description
            </label>
            <input type="text" id="description" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add
            </button>
        </div>
      </form>
    </div>
  )
}

export default AddExpenseIncome
