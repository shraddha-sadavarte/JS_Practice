import React from 'react'
import { ArrowRight } from 'lucide-react'

const Rightcard = (props) => {
  return (
    <div className='h-full w-80 overflow-hidden relative rounded-4xl shrink-0'>
      <img
        src={props.img}
        alt="card image"
        className='w-full h-full rounded-4xl object-cover'
      />

      <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-between p-8'>

        {/* Number */}
        <h2 className='bg-white rounded-full text-2xl font-bold h-12 w-12 flex justify-center items-center'>
          {props.id}
        </h2>

        {/* Paragraph just above buttons */}
        <p className='text-xl text-white leading-normal mb-10'>
          {props.intro}
        </p>

        {/* Buttons at the bottom */}
        <div className='flex justify-between'>
          <button className='bg-blue-600 text-white font-semibold px-8 py-3 rounded-full'>
            {props.tag}
          </button>
          <button className='bg-blue-600 text-white font-semibold px-3 py-3 rounded-full'>
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Rightcard
