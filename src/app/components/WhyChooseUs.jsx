import React from 'react'
import brand from "@/assets/brand.jpg"
import AboutUsBox from './AboutUsBox'
import { FEATURES_DATA } from '@/data'

const WhyChooseUs = () => {
    return (
        <div className='w-full xl:w-[70%] mx-auto xl:py-20'>
            <div className='text-center space-y-10 xl:space-y-15 py-10 xl:py-20'>
                <h1 className='text-3xl md:text-5xl xl:text-7xl text-center font-medium heading-text bg-gradient-to-r from-white via-black via-150% to-black bg-clip-text text-transparent'>Why Choose Us</h1>
                <img src={brand.src} className='w-[80%] sm:h-[400px] lg:h-[500px] object-cover xl:w-[80%] xl:h-[450px] mx-auto' alt="" />
                <p className='w-[80%] text-sm lg:text-xl xl:text-2xl body-text mx-auto'>With global experience and creative precision, we turn ideas into impactful market ready solutions.
                </p>
            </div>
            <div className='flex justify-center pb-10 xl:pb-0'>
                <div className='w-[80%] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-5 gap-x-24 lg:gap-x-50 xl:gap-x-0 xl:mt-20'>
                    {
                        FEATURES_DATA.map((ele, idx) => <AboutUsBox data={ele} key={idx} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs