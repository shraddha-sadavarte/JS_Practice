import React from 'react'
import {MoveUpRight} from 'lucide-react'

const LeftText = () => {
  return (
    <div className='h-full w-1/4 p-10 flex flex-col justify-between'>
      <div className='p-6'>
        <h3 className='text-4xl font-bold mb-5'>Prospective<br /> <span className='text-gray-700'>Customer</span><br/> Segmentation</h3>
        <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolorum harum mollitia sequi, esse sint enim eum voluptatibus saepe magni, odit quidem animi, blanditiis laboriosam consequatur. Saepe, vel. Corrupti, harum?</p>
      </div>
      <div>
        <MoveUpRight strokeWidth={3}  size={40}/>
      </div>
    </div>
  )
}

export default LeftText
