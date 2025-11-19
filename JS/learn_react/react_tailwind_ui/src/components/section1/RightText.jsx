import React from 'react'
import Rightcard from './Rightcard'

const RightText = (props) => {
  return (
    <div id='right' className='h-full w-3/4 p-4 flex flex-nowrap gap-10 overflow-x-auto'>
      {props.users.map((user, index) => (
        <Rightcard key={index} img={user.img} intro={user.intro} tag={user.tag} id={index+1}/>
      ))}
    </div>
  )
}

export default RightText
