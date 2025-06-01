"use client";
import React from 'react'
import mainFrame from "@/assets/mainFrame.png"
import { OUR_WORKS_PAGE_DATA2 } from '@/data'
import stats from "@/assets/stats.png"
import { useInView } from 'react-intersection-observer'
import OurWorkComponent from '../components/OurWorkComponent';

const page = () => {
    const { ref: titleRef, inView: titleInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    const { ref: descRef, inView: descInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    const { ref: highlightRef, inView: highlightInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    return (
        <>
            <div className='w-full px-2 mx-auto bg-black flex flex-col items-center py-30 pb-20 space-y-5' style={{ background: `url(${mainFrame.src})`, backgroundPosition: "center", backgroundSize: 'cover' }}>
                <div className='flex flex-col space-y-3 lg:space-y-0 text-center lg:flex-row lg:justify-between w-[80%] xl:w-[60%] mx-auto mt-20'>
                    <h1 ref={titleRef} className={`heading-text text-3xl md:text-5xl xl:text-7xl transtion-all duration-1000 delay-100 ease-out transform ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Our Work</h1>
                    <p ref={descRef} className={`body-text lg:text-left secondary-text-color text-base md:text-xl lg:w-[60%] transtion-all duration-1000 delay-100 ease-out transform ${descInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Showcasing the brands we’ve helped shape from concept to global shelf.
                    </p>
                </div>
                {/* <img className='absolute top-[20%] md:w-[60%] xl:w-[40%] -z-10' src={stats.src} alt="" /> */}
            </div>
            <div className="w-[80%] lg:w-[70%] xl:w-[60%] mx-auto mt-10 columns-1 sm:columns-2 md:columns-3 gap-6">
                {
                    OUR_WORKS_PAGE_DATA2.map((ele, idx) => {
                        return <OurWorkComponent key={idx} data={ele} />
                    })
                }
            </div>
            <div className="relative w-full md:w-[90%] xl:w-[65%] mx-auto xl:mt-10 py-10 xl:py-20">
                <h1 ref={highlightRef} className={`px-5 text-center heading-text text-3xl sm:text-5xl xl:text-7xl transtion-all duration-1000 delay-100 ease-out transform ${highlightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    Let’s Make You the <br /> Next Highlight.
                </h1>
                <img
                    className={`absolute w-full top-[-40px] right-0 sm:top-[-150px] md:right-0 md:w-[70%] xl:top-[-60px] xl:right-[-10%] xl:w-[70%] z-0 will-change-transform backface-visibility-hidden transform`}
                    src={stats.src}
                    alt=""
                />
            </div>
        </>
    )
}

export default page