import React from 'react'
import Dashboard from './components/Dashboard'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AddExpenseIncome from './components/AddExpenseIncome'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-expense-income" element={<AddExpenseIncome />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
