"use client";
import React from 'react'
import brand from "@/assets/brand.jpg"
import AboutUsBox from './AboutUsBox'
import { FEATURES_DATA } from '@/data'
import { useInView } from 'react-intersection-observer'

const WhyChooseUs = () => {

    const { ref: titleRef, inView: titleInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    const { ref: descRef, inView: descInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    const { ref: boxRef, inView: boxInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    return (
        <div className='w-full xl:w-[70%] mx-auto xl:py-20'>
            <div className='text-center space-y-10 xl:space-y-15 py-10 xl:py-20'>
                <h1 ref={titleRef} className={`text-3xl md:text-5xl xl:text-7xl text-center font-medium heading-text bg-gradient-to-r from-white via-black via-150% to-black bg-clip-text text-transparent transition duration-1000 ease-out transform ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Why Choose Us</h1>
                <img ref={titleRef} src={brand.src} className={`w-[80%] sm:h-[400px] lg:h-[500px] object-cover xl:w-[80%] xl:h-[450px] mx-auto transition duration-1000 ease-out transform ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} alt="" />
                <p ref={descRef} className={`w-[80%] text-sm lg:text-xl xl:text-2xl body-text mx-auto transition duration-1000 delay-200 ease-out transform ${descInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>With global experience and creative precision, we turn ideas into impactful market ready solutions.
                </p>
            </div>
            <div className='flex justify-center pb-10 xl:pb-0'>
                <div ref={boxRef} className={`w-[80%] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-5 gap-x-24 lg:gap-x-50 xl:gap-x-0 xl:mt-20 transition duration-1000 ease-out transform ${boxInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                    {
                        FEATURES_DATA.map((ele, idx) => <AboutUsBox data={ele} key={idx} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs