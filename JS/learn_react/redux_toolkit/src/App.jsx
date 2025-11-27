import React from 'react'
import Header from './components/Header'
import Product from './components/Product'
import Cart from './components/Cart'

const App = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Header />
      <Product />
      <Cart />
    </div>
  )
}

export default App
