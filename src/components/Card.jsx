import React from 'react'

const Card = ({ width, start, para, hover }) => {
    return (
        <div className={`bg-zinc-700 relative h-full p-4 rounded-2xl ${width} hover:bg-${hover}`}>
            {/* <p className='capitalize'>up next: culture</p>
            <p className='absolute right-4'>➡️</p>
            <h1 className='text-4xl mt-12'>Who we are</h1>
            <p className='absolute bottom-4 text-sm capitalize text-gray-300'>explore what drives our team.</p> */}
            <p className='capitalize text-gray-300'>get in touch</p>
            <p className='absolute right-4'>➡️</p>
            <h1 className='text-4xl mt-12 w-1/3 text-gray-200 '>Let's get to it, together.</h1>
            {
                start && <div>
                    <h1 className='text-[5vw] font-semibold mt-12 leading-none'>Start a Project</h1>
                    <button className='border-[1px] rounded-2xl mt-4 px-4 py-1'>Contact Us</button>
                </div>
            }
            {
                para && <p className='absolute bottom-4 text-sm capitalize text-gray-300'>explore what drives our team.</p>
            }

        </div>
    )
}

export default Card;
