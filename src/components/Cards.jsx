import React from 'react'
import Card from './Card'

const Cards = () => {
    return (
        <div className='max-w-screen-xl m-auto h-[25vw] flex gap-2 mt-[10vw]'>
            <Card width={"basis-1/3"} start={false} para={true} />
            <Card width={"basis-2/3"} start={true} para={false} />
        </div>
    )
}

export default Cards
