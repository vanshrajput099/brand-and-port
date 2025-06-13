"use client";
import React from 'react'
import mainFrame from "@/assets/mainFrame.png"
import stats from "@/assets/stats.png"
import { OUR_WORKS_PAGE_DATA2 } from '@/data'
import OurWorkComponent from '../components/OurWorkComponent'
import { useInView } from 'react-intersection-observer'

const Page = () => {

    const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.2, triggerOnce: true });
    const { ref: descRef, inView: descInView } = useInView({ threshold: 0.2, triggerOnce: true });
    const { ref: highlightRef, inView: highlightInView } = useInView({ threshold: 0.2, triggerOnce: true });

    return (
        <>
            <div
                className="w-full px-2 mx-auto bg-black flex flex-col items-center py-30 pb-20 space-y-5"
                style={{
                    backgroundImage: `url(${mainFrame.src})`,
                    backgroundPosition: "center",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    WebkitBackgroundSize: 'cover', // Safari compatibility
                }}
            >
                <div className='flex flex-col space-y-3 lg:space-y-0 text-center lg:flex-row lg:justify-between w-[80%] xl:w-[70%] mx-auto mt-20'>
                    <h1
                        ref={titleRef}
                        className={`heading-text text-3xl md:text-5xl xl:text-6xl transition-all duration-1000 ease-out transform will-change-transform
                            ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    >
                        Our Work
                    </h1>
                    <p
                        ref={descRef}
                        className={`body-text lg:text-left secondary-text-color text-base md:text-xl lg:w-[50%] transition-all duration-1000 ease-out transform will-change-transform
                            ${descInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    >
                        Showcasing the brands we’ve helped shape from concept to global shelf.
                    </p>
                </div>
            </div>

            <div className="w-[80%] sm:w-[70%] lg:w-[70%] xl:w-[60%] mx-auto mt-10 xl:mt-10 columns-1 sm:columns-2 md:columns-3 gap-6">
                {
                    OUR_WORKS_PAGE_DATA2.map((ele, idx) => (
                        <OurWorkComponent key={idx} data={ele} />
                    ))
                }
            </div>

            <div className="relative w-full md:w-[90%] xl:w-[65%] mx-auto xl:mt-10 py-10 xl:py-[72px] overflow-hidden">
                <h1
                    ref={highlightRef}
                    className={`px-5 text-center leading-tight heading-text text-3xl sm:text-5xl xl:text-7xl transition-all duration-1000 ease-out transform will-change-transform 
                        ${highlightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    Let’s Make You the <br /> Next Highlight.
                </h1>

                <img
                    className="absolute w-full top-[-40px] right-0 sm:top-[-120px] md:right-0 md:w-[70%] xl:top-[-60px] xl:right-[-10%] xl:w-[70%] z-[-1]"
                    src={stats.src}
                    alt="Stats background"
                    style={{
                        WebkitBackfaceVisibility: 'hidden',
                        backfaceVisibility: 'hidden',
                        WebkitTransformStyle: 'preserve-3d',
                        transform: 'translateZ(0)',
                    }}
                />
            </div>
        </>
    )
}

export default Page
