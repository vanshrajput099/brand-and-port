"use client";
import React from 'react'
import mainFrame from "@/assets/mainFrame.png"
import { PRIVATE_LABEL_PAGE_DATA } from '@/data'
import { useInView } from 'react-intersection-observer'
import PrivateLabelComponent from './_components/PrivateLabelComponent';

const page = () => {

    const { ref: titleRef, inView: titleInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    const { ref: descRef, inView: descInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    return (
        <>
            <div className='w-full px-2 xl:px-0 mx-auto bg-black flex flex-col items-center py-30 pb-20 space-y-5' style={{ background: `url(${mainFrame.src})`, backgroundPosition: "center", backgroundSize: 'cover' }}>
                <div className='flex flex-col space-y-3 lg:space-y-0 text-center lg:flex-row lg:justify-between w-[80%] xl:w-[70%] xl:gap-10 mx-auto mt-20'>
                    <h1 ref={titleRef} className={`heading-text text-3xl md:text-5xl xl:text-7xl transtion-all duration-1000 delay-100 ease-out transform ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Private label</h1>
                    <p ref={descRef} className={`body-text lg:text-left secondary-text-color text-base md:text-xl lg:w-[60%] transtion-all duration-1000 delay-100 ease-out transform ${descInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>We are passionate about exploring possibilities of classically modern-day lifestyles. And we leave no gap while working towards making that available to people via our range of products.</p>
                </div>
            </div>

            <div className='w-[80%] xl:w-[70%] mx-auto body-text space-y-10 py-5 mb-15 xl:mb-30 xl:mt-20 xl:py-10 px-2'>
                {
                    PRIVATE_LABEL_PAGE_DATA.map((ele, idx) => {
                        return <PrivateLabelComponent data={ele} key={idx} idx={idx} />
                    })
                }
            </div>
        </>
    )
}

export default page