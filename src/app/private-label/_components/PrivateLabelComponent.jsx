"use client";
import React from 'react'
import { useInView } from 'react-intersection-observer'

const PrivateLabelComponent = ({ data, idx }) => {

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    const title = data.name.split(" ");



    return (
        <div ref={ref} className={`flex flex-col items-center md:flex-row transtion-all duration-1000 delay-100 ease-out transform ${idx % 2 !== 0 ? `md:flex-row-reverse ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 lg:translate-x-30'}` : `${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 lg:-translate-x-30'}`} justify-between space-y-5`}>
            <div className='w-full md:w-1/2 mt-6 space-y-4'>
                <h1 className='text-xl md:text-3xl xl:text-5xl'>{title[0]} <span className='orange-text'>{title[1]}</span> {title[2]}</h1>
                <p className='secondary-text-color font-light text-xs xl:text-base'>{data.text}</p>
            </div>
            <img className='w-[100%] sm:w-[50%] md:w-[35%]' src={data.image.src} alt="" />
        </div>
    )
}

export default PrivateLabelComponent