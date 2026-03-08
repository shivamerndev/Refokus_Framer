import React from 'react'

const Button = ({title = 'Start a Project'}) => {
    return (
        <div className='flex items-center justify-end gap-2 font-extralight'>
            <div className='flex cursor-pointer items-center justify-end gap-4 bg-white px-3 py-1 rounded-2xl'>
                <p className='text-xs text-black'>{title}</p>
                <i className="ri-corner-up-left-double-line font-[300] text-sm rotate-180  text-black"></i>
            </div>
        </div>
    )
}

export default Button;
