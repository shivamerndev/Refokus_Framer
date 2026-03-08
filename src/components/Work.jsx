import React, { useState } from 'react'
import { motion, useSpring } from "framer-motion"
import { useMotionValueEvent, useScroll } from "motion/react"
const Work = () => {

    let Data = [
        { url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', top: '50%', left: '50%', isActive: false },
        { url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', top: '56%', left: '47%', isActive: false },
        { url: 'https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', top: '52%', left: '52%', isActive: false },
        { url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', top: '60%', left: '53%', isActive: false },
        { url: 'https://plus.unsplash.com/premium_photo-1669703777695-f8052a432411?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', top: '53%', left: '49%', isActive: false },
        { url: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', top: '58%', left: '53%', isActive: false },
    ];

    let [images, setImages] = useState(Data);

    const { scrollYProgress } = useScroll()

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        //   console.log("Page scroll: ", latest)
        let imageShow = arr => {
            setImages(prev => prev.map((e, i) =>  arr.indexOf(i) === -1 ? { ...e, isActive: false } : { ...e, isActive: true}))
        } // cdn code hai...
        
    // scrollYProgress.on("change", (latest) => {
    //     //   console.log("Page scroll: ", latest)
    //     let imageShow = arr => {
    //         setImages(prev => prev.map((e, i) => arr.indexOf(i) === -1 ? { ...e, isActive: false } : { ...e, isActive: true }))
    //     }
        switch (Math.floor(latest*50)) {  // * 100 = 1 scroll console.log
            case 0: imageShow([]); break;
            case 2: imageShow([0]); break;   //scroll 2 par 1 img into view.
            case 4: imageShow([0, 1,]); break;
            case 6: imageShow([0, 1, 2]); break;
            case 8: imageShow([0, 1, 2, 3]); break;
            case 10: imageShow([0, 1, 2, 3, 4]); break;
            case 12: imageShow([0, 1, 2, 3, 4, 5]); break;
        }
    })

    return (
        <div className='max-w-screen-xl  relative mx-auto text-center font-medium select-none '>
            <h1 className='text-[23vw]'>work</h1>
            <div className=' h-1/2  w-1/2  absolute top-50 left-[25%] bg-rd-500'>
                {images.map((image, index) => image.isActive && <img key={index} style={{ top: image.top, left: image.left }} className={`h-50 w-44 rounded-xl absolute  -translate-x-[50%] -translate-y-[50%]`} src={image.url} alt="" />)}
            </div>

        </div>
    )
}

export default Work;
