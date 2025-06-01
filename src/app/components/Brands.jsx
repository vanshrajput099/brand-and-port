"use client";
import { BRANDS } from '@/data'
import React from 'react'
import { useInView } from 'react-intersection-observer'

const Brands = () => {
    const { ref: introRef, inView: introRefInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })
    return (
        <div ref={introRef} className={`overflow-hidden w-[80%] px-2 xl:px-0 xl:w-[60%] mx-auto bg-black py-10 space-y-10 transition duration-1000 delay-200 ease-out transform ${introRefInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-40'}`}>
            <div className='grid grid-cols-3 gap-y-4 sm:grid-cols-4 lg:grid-cols-6'>
                {
                    BRANDS.map((ele, idx) => <img key={idx} src={ele.src} className='' alt="" />)
                }
            </div>
        </div>
    )
}

export default Brands