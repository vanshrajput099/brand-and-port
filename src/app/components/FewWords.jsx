import React from 'react'
import stats from "@/assets/stats.png"
import TestimonialCarousel from './TestimonialCarousel'

const FewWords = () => {
    return (
        <div className='w-[98%] px-2 xl:px-0 xl:w-[70%] mx-auto py-20 relative'>
            <h1 className='text-3xl md:text-5xl xl:text-7xl heading-text'>Few words about Us</h1>
            <TestimonialCarousel />
            <img className='absolute -top-[20%] right-0 md:right-[20%] xl:-top-[15%] xl:right-[15%] -z-10 h-[60%]' src={stats.src} alt="" />
        </div>
    )
}

export default FewWords