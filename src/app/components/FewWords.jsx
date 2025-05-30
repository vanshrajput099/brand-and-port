import React from 'react'
import quote from "@/assets/quote.png"
import TestimonialCarousel from './TestimonialCarousel'

const FewWords = () => {
    return (
        <div className='w-[98%] px-2 xl:px-0 xl:w-[70%] mx-auto py-20'>
            <h1 className='text-3xl md:text-5xl xl:text-7xl heading-text'>Few words about Us</h1>
            <TestimonialCarousel />
        </div>
    )
}

export default FewWords