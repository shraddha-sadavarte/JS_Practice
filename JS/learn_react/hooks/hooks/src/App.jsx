import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState();
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Number: {num}</h1>
      <button onClick={() => setNum(Math.floor(Math.random()*10))}>Generate Random Number</button> 

      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={() => count<=0 ? setCount(count) : setCount(count-1)}>Decrease</button>
    </>
      
  )
}

export default App
