"use client";
import React from 'react'
import mainFrame from "@/assets/mainFrame.png"
import { useInView } from 'react-intersection-observer';

const page = () => {

    const { ref: titleRef, inView: titleInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    const { ref: descRef, inView: descInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    return (
        <>
            <div className='w-full px-2 xl:px-0 mx-auto bg-black flex flex-col items-center py-30 pb-20 space-y-5' style={{ background: `url(${mainFrame.src})`, backgroundPosition: "center", backgroundSize: 'cover' }}>
                <div className='flex flex-col space-y-3 lg:space-y-0 text-center lg:flex-row lg:justify-between w-[80%] xl:w-[60%] mx-auto mt-20'>
                    <h1 ref={titleRef} className={`heading-text text-3xl md:text-5xl xl:text-7xl transtion-all duration-1000 delay-100 ease-out transform ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Contact Us</h1>
                    <p ref={descRef} className={`body-text lg:text-left secondary-text-color text-base md:text-xl lg:w-[60%] transtion-all duration-1000 delay-100 ease-out transform ${descInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Let us create an extraordinary brand that elevates your business. Please fill out the following form, and one of us will get back to you as soon as possible.
                    </p>
                </div>
            </div>
        </>
    )
}

export default page