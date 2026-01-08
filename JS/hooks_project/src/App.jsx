import React, { useState, useCallback, useEffect, useRef, use} from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerate = useCallback(() => {
    let pass = "";
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*()_+~`|}{[]:;?><,./-=";

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
      setPassword(pass);
    }
    },[length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerate();
  }, [length, numberAllowed, charAllowed, passwordGenerate]);

  //to copy generated password use useRef hook
  const passwordRef= useRef(null);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]); 

  return (
    <>
      <h1 className="text-4xl text-center text-white mt-5">Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 py-6'>
        <div className='flex shadow roounded-lg overflow-hidden mb-4'>
          <input type="text" readOnly value={password} ref={passwordRef} className='w-full px-3 py-2 text-xl bg-white'/>
          <button onClick={copyToClipboard} className='bg-orange-500 text-white px-4 py-2 hover:bg-orange-600'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <label>Length</label>
            <input type="range" min="4" max="20" value={length} onChange={(e) => setLength(e.target.value)} className='w-16 px-2 py-1 border rounded cursor-pointer'/>
            <span>{length}</span>
            <input type="checkbox" id="number" className='ml-4' checked={numberAllowed} onChange={(e) => setNumberAllowed(e.target.checked)}/>
            <label htmlFor="number" className='ml-1'>Numbers</label>
            <input type="checkbox" id="char" checked={charAllowed} className='ml-4' onChange={(e) => setCharAllowed(e.target.checked)}/>
            <label htmlFor="char" className='ml-1'>Special Characters</label>
          </div>
          {/* <div>
            <button onClick={passwordGenerate} className='bg-orange-500 text-white px-4 py-2 hover:bg-orange-600 rounded'>Generate Password</button>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default App
