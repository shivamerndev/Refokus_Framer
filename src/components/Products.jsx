import React, { useState } from 'react'
import Product from './Product';
import { motion } from 'motion/react';

const Products = () => {

  let productData = [
    { title: 'Arqitel', para: 'Different across different build tools. Check our framework guides to see if we have more specific instructions for your particular setup.', live: true, cases: false },
    { title: 'TTR', para: 'your framework might handle this for you), then start using Tailwind’s utility classes to style your content.', live: true, cases: false },
    { title: 'YIR 2022', para: 'Tailwind CSS works by scanning all of your HTML files, JavaScript components, styles and then writing them to a static CSS file.', live: true, cases: true },
    { title: 'Yahoo!', para: 'In some cases, you may need to disable native CSS linting/validations if your editor is very strict about the syntax it expects in your CSS files.', live: true, cases: true },
  ];

  let [pos, setPos] = useState(0);
  let [vpos, setVpos] = useState(0);

  let videoSwift = (index) => {
    // console.log(index)
    switch (index) {
      case 0:
        setPos(index * 21);
        setVpos(0);
        break;
      case 1:
        setPos(index * 21);
        setVpos(index * 23);
        break;
      case 2:
        setPos(index * 21);
        setVpos(index * 23);
        break;
      case 3:
        setPos(index * 21);
        setVpos(index * 23);
        break;
    }
  }

  let color = () => {
   return (`rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`)
  }
  console.log('color', color())

  return (
    <div className='w-full  flex flex-col gap-4 mt-[10vw] relative bg-black'>
      {productData.map((p, i) => {
        return <Product key={i} val={p} index={i} func={videoSwift} />
      })}
      <motion.div
        initial={{ y: pos }}
        animate={{ y: pos + 'vw' }}
        className='h-80 flex flex-col gap-6  w-1/3 pointer-events-none overflow-hidden  bg-zinc-80 text-green-500 font-bold text-5xl uppercase rounded-xl absolute left-[30%] content-center text-center'>
        <motion.div animate={{ y: -vpos + 'vw' }} className='w-full h-full '>
          <video className='rounded-2xl' src='src/assets/keystone-43.webm' autoPlay loop muted></video>
        </motion.div>
        <motion.div animate={{ y: -vpos + 'vw' }} className='w-full h-full '>
          <video className='rounded-2xl' src='src/assets/sevdesk-43.webm' autoPlay loop muted></video>
        </motion.div>
        <motion.div animate={{ y: -vpos + 'vw' }} className='w-full h-full '>
          <video className='rounded-2xl' src='src/assets/singularity-43.webm' autoPlay loop muted></video>
        </motion.div>
        <motion.div animate={{ y: -vpos + 'vw' }} className='w-full h-full '>
          <video className='rounded-2xl' src='src/assets/botify-43.webm' autoPlay loop muted></video>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Products;
