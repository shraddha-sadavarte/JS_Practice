import React from 'react'
import LeftText from './LeftText'
import RightText from './RightText'

const Page1Content = () => {
  return (
    <div className='py-10 px-18 h-[90vh] mt-5 flex justify-between gap-10 items-center'>
      <LeftText />
      <RightText />
    </div>
  )
}

export default Page1Content
