import React, { useState } from 'react'
import Button from './Button';
import { video } from 'motion/react-client';

const Product = ({ val, index, func }) => {

  let { title, para, live, cases, cf } = val;
  const [hovered, setHovered] = useState(false);
  let color = () => {
    return (`rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`)
  }

  return (
    <div style={{ backgroundColor: hovered ? color() : 'transparent' }} onMouseEnter={() => {
      func(index)
      setHovered(true)
    }} onMouseLeave={() => setHovered(false)} className={`relative flex justify-between h-[20vw] hover:bg-[rgb(140,39,13)] items-center`}>
      <h1 className='w-1/3 text-center text-6xl font-semibold'>{title}</h1>
      <div className='w-1/3'>
        <p className='w-1/2 text-sm capitalize mb-8'>{para}</p>
        <div className='flex items-center gap-2'>
          {live && <Button />}
          {cases && <Button title='Case Study' />}
        </div>
      </div>
    </div>
  )
}

export default Product;
