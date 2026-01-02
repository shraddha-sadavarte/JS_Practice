import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ExpenseContext } from '../context/ExpenseContext'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts';

const Dashboard = () => {
    const {transactions, deleteTransaction, updateTransaction} = useContext(ExpenseContext);

    const totalIncome = transactions
        .filter(t => t.type === 'income')
        .reduce((acc, t) => acc + t.amount, 0); 
        //reduce() is used to combine array elements into a single value.
        //In this code, it adds all transaction amounts to calculate total income or expense, starting from 0.

    const totalExpenses = transactions
        .filter(t => t.type === 'expense')
        .reduce((acc, t) => acc + t.amount, 0);

    const totalBalance = totalIncome - totalExpenses;

    const [editingId, setEditingId] =useState(null);
    const [editAmount, setEditAmount] = useState(0);
    const [editedDescription, setEditedDescription] = useState('');

    {/* prepare data for showing pie chart */}
    // const pieChartData = [
    //   { name: 'Income', value: totalIncome },
    //   { name: 'Expenses', value: totalExpenses },
    // ];
    const categoryData = {};
    transactions
    .filter(t => t.type === 'expense')
    .forEach(t => {
      if(!categoryData[t.category]){
        categoryData[t.category] = 0;
      }
      categoryData[t.category] += t.amount;
    });

    const pieChartData = Object.entries(categoryData).map(([key, value]) => ({
      name: key,
      value: value,
    }));

    const COLORS = ["#22c55e", "#3b82f6", "#f97316", "#ef4444", "#a855f7"];

    {/* Bar chart to show monthly expenses */}
    const monthlyExpenses = {};
    transactions.forEach(t => {
      const month = new Date(t.date).toLocaleString('default', {month:"short", year:"numeric"});
      if(!monthlyExpenses[month]){
        monthlyExpenses[month] = {month, income:0, expense:0};
      }

      if(t.type === 'income'){
        monthlyExpenses[month].income += t.amount;
      } else {
        monthlyExpenses[month].expense += t.amount;
      }
    })

    const barChartData = Object.values(monthlyExpenses);

  return (
    <div className="w-full h-full flex flex-col justify-between p-5">
        <h1 className="text-2xl font-bold mb-4">Expense Tracker</h1>
        <div className='flex flex-row justify-between items-center gap-3'>
            <div className="flex-1 bg-white rounded-lg shadow-md p-4 w-50">
                <p>Current balance: ${totalBalance}</p>
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

        <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">All Transactions</h2>
            {/* If no transactions */}
            {transactions.length === 0 && ( <p className='text-gray-500'>No transactions yet</p>)}

            {/* List of transactions */}
            <ul className='space-y-3'>
                {transactions.map((t) => (
                    <li key={t.id} className="flex justify-between items-center bg-white p-3 rounded shadow">
            {/* EDIT MODE */}
            {editingId === t.id ? (
            <div className="flex items-center gap-2 w-full">
    
            {/* Edit Description */}
            <input type="text" value={editedDescription} 
                onChange={(e) => setEditedDescription(e.target.value)} 
                className="border px-2 py-1 rounded w-48" placeholder="Description" 
            />

            {/* Edit Amount */}
            <input type="number" value={editAmount}
                onChange={(e) => setEditAmount(e.target.value)}
                className="border px-2 py-1 rounded w-32"
            />

            {/* Save Button */}
            <button onClick={() => {updateTransaction({ ...t,description: editedDescription.trim(), amount: Number(editAmount),}); 
                setEditingId(null); setEditedDescription(''); setEditAmount(0);}}
                className="bg-green-500 text-white px-3 py-1 rounded">
                Save
            </button>

            {/* Cancel Button */}
            <button onClick={() => setEditingId(null)} className="bg-gray-400 text-white px-3 py-1 rounded" > Cancel </button>
        </div>
            ) : (

              /* VIEW MODE */
              <>
                <span>
                  <strong>{t.description}</strong> — ₹{t.amount} (
                  <span className={t.type === "income" ? "text-green-600": "text-red-600"}>
                    {t.type}
                  </span>
                  )
                </span>

                <div className="flex gap-2">
                  <button onClick={() => { setEditingId(t.id); setEditAmount(t.amount); setEditedDescription(t.description);}}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>{ const confirmDelete = window.confirm("Are yu sure you want to delete this transaction?");
                    if (confirmDelete) {
                        deleteTransaction(t.id);
                        }}
                    }
                    className="bg-red-500 text-white px-3 py-1 rounded">
                        Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
        </ul>
        </div>

        {/* PIE CHART */}
        <div className='mt-6 bg-white p-4 rounded shadow flex flex-col items-center justify-center h-96'>
          <h2 className='text-lg font-bold mb-4 text-center'>Expenses by Category</h2>
          {pieChartData.length === 0 ? ( <p className='text-gray-500'>No expense data to display</p> ) : (
            <div className='w-full h-72'>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius="60%" label={({name, value}) => `${name}: ${value}`} >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign='bottom'/>
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
          
        </div>
      

        {/* BAR CHART */}
        <div className='mt-6 bg-white p-4 rounded shadow'>
          <h2 className='text-lg font-bold mb-4 text-center'>Monthly Income vs Expenses</h2>
          <BarChart width={600} height={300} data={barChartData} >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="income" fill="#22c55e" />
            <Bar dataKey="expense" fill="#ef4444" />
          </BarChart>
        </div>

    </div>
  )
}

export default Dashboard
