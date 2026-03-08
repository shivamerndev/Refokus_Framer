import React from 'react'

const Stripe = ({d}) => {
  return (
    <div className='w-1/6 h-full flex justify-between px-4 items-center border-zinc-700 border-[2px] border-r-[.5px]'>
     <span><img className='h-5' src={d.url} alt="" /></span>
     <span className='font-bold'>{d.number}</span>
    </div>
  )
}

export default Stripe;
