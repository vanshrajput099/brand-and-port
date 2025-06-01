"use client";
import React from 'react'
import stats from "@/assets/stats.png"
import TestimonialCarousel from './TestimonialCarousel'
import { useInView } from 'react-intersection-observer'

const FewWords = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })
    return (
        <div ref={ref} className={`w-[98%] px-2 xl:px-0 xl:w-[70%] mx-auto py-20 relative transition-all duration-1000 delay-200 ease-out transform ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className='w-full px-5 mx-auto text-2xl sm:text-3xl md:text-5xl xl:text-7xl heading-text'>Few words about Us</h1>
            <TestimonialCarousel />
            <img className='absolute -top-[20%] right-0 md:right-[20%] xl:-top-[15%] xl:right-[15%] -z-10 h-[60%]' src={stats.src} alt="" />
        </div>
    )
}

export default FewWords