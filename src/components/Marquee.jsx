import React from 'react'

const Marquee = ({ imgd }) => {
  return (
    <div className='flex-shrink-0 items-center flex flex-col gap-20 justify-center' >
      <div className='flex items-center w-fit gap-16 animated'>
        <img className='w-30' src={imgd.url} alt="" />
      </div>
      <div className='flex gap-16 animate items-center' >
        <img className='w-30' src={imgd.url} alt="" />
      </div>
    </div>
  )
}

export default Marquee
