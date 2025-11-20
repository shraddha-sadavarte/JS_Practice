import React, { useState } from 'react'
import NotesApp from './components/notesApp'

const App = () => {

  // const submitHandler = (e) => {
  //   e.preventDefault()
  //   console.log('Form submitted')
  //   setName('')
  // }
  // const [name, setName] = useState("");

  return (
    <>
      {/* <form onSubmit={submitHandler}>
        <input type="text" value={name} placeholder="Enter text" onChange={(e)=>{
          console.log(e.target.value)
          setName(e.target.value)
        }} />
        <button type="submit">Submit</button>
      </form> */}
      <NotesApp />
      
    </>
  )
}

export default App
