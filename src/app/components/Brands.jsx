"use client";
import { BRANDS } from '@/data'
import React from 'react'
import brandBG from "@/assets/brandBG.png"
import { useInView } from 'react-intersection-observer'

const Brands = () => {
    const { ref: introRef, inView: introRefInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })
    return (
        <div ref={introRef} style={{ background: `url(${brandBG.src})`, backgroundPosition: "center", backgroundSize: 'contain',backgroundRepeat:'no-repeat' }} className={`overflow-hidden w-full px-2 xl:px-0 mx-auto bg-black py-10 space-y-10 transition duration-1000 delay-200 ease-out transform ${introRefInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-40'}`}>
            <div className='w-[80%] xl:w-[60%] mx-auto grid grid-cols-3 gap-y-4 sm:grid-cols-4 lg:grid-cols-6'>
                {
                    BRANDS.map((ele, idx) => <img key={idx} src={ele.src} className='' alt="" />)
                }
            </div>
        </div>
    )
}

export default Brands