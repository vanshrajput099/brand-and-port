"use client";
import React from 'react'
import mainFrame from "@/assets/mainFrame.png"
import { HOW_WE_WORK_DATA } from '@/data'
import { useInView } from 'react-intersection-observer'
import HowWeWorkComponent from './HowWeWorkComponent';

const HowWeWork = () => {

    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    return (
        <div className='w-full xl:w-[75%] mx-auto bg-black flex flex-col items-center py-20' style={{ background: `url(${mainFrame.src})`, backgroundPosition: "center", backgroundSize: 'cover' }}>
            <div ref={ref} className={`text-center space-y-10 transition duration-1000 delay-200 ease-out transform ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h1 className='heading-text text-3xl md:text-5xl xl:text-7xl'>How We Work</h1>
                <p className='text-base md:text-xl xl:text-2xl w-[70%] mx-auto body-text'>Plan visually, collaborate in cross-team projects, and make better decisions with progress insights and project updates.</p>
            </div>
            <div className='w-[80%] mx-auto mt-20 xl:mt-30 space-y-12 xl:space-y-20'>
                {
                    HOW_WE_WORK_DATA.map((ele, idx) => {
                        return <HowWeWorkComponent key={idx} data={ele} idx={idx} />
                    })
                }
            </div>
        </div>
    )
}

export default HowWeWork