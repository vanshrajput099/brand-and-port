"use client";
import React from 'react'
import { useInView } from 'react-intersection-observer'

const Blog = ({ data, idx }) => {

    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })


    return (
        <div ref={ref} className={`w-full md:w-[350px] xl:w-[500px] transtion-all duration-1000 delay-100 ease-out transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <img src={data.image.src} className='h-[200px] xl:h-[300px] w-full object-cover rounded-2xl' alt="" />
            <div className='mt-5 space-y-2'>
                <h1 className='text-xl xl:text-2xl font-medium heading-text'>{data.name}</h1>
                <p className='secondary-text-color text-sm xl:text-base'>{data.text}</p>
                <div className='flex justify-between'>
                    <p className='text-xs'>{data.time}</p>
                    <button className='px-5 py-1 rounded-3xl bg-[#272423] text-xs'>Read</button>
                </div>
            </div>
        </div>
    )
}

export default Blog