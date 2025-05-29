import React from 'react'
import quote from "@/assets/quote.png"
import TestimonialCarousel from './TestimonialCarousel'

const FewWords = () => {
    return (
        <div className='w-[98%] px-2 xl:px-0 xl:w-[70%] mx-auto py-20'>
            <h1 className='text-3xl md:text-5xl xl:text-7xl heading-text'>Few words about Us</h1>
            <TestimonialCarousel />
            {/* <div className='flex gap-5 mt-10'>

                <div className='bg-[#1a1a1a] w-[550px] px-5 py-10 space-y-10 rounded-3xl'>
                    <img className='h-[20px] w-[30px] xl:h-[60px] xl:w-[80px]' src={quote.src} alt="" />
                    <p className='xl:text-xl body-text'>The discovery phase was incredibly insightful. The team really took the time to understand our vision, and the strategy call helped us align our goals from day one. We felt heard and supported throughout the entire journey.</p>
                    <div className='body-text'>
                        <h1 className='font-medium xl:text-xl'>Albert Flores</h1>
                        <h1 className='xl:text-xl'>Founder; CREATIWISE</h1>
                    </div>
                </div>


            </div> */}

        </div>
    )
}

export default FewWords