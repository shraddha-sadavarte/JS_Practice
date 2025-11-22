import React from 'react'
import { ThemeDataContext } from '../context/ThemeContext'
import { useContext } from 'react'

const Nav2 = () => {
    const [theme, setTheme]= useContext(ThemeDataContext)
    
    const changeTheme=()=>{
        {theme==='light' ? setTheme('dark') : setTheme('light')}
    }
    
  return (
    <div className='nav2'>
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Contact</h4>  
      <h4>Services</h4>
      <button onClick={changeTheme} className={theme==="light"?"light":"dark"}>{theme==="light"?"🌞":"🌛"}</button> 
    </div>
  )
}

export default Nav2
