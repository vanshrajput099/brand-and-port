"use client";
import React from 'react'
import mainFrame from "@/assets/mainFrame.png"
import about1 from "@/app/about-us/_assets/about1.png"
import world from "@/app/about-us/_assets/world.png"
import { TARGET_AUDIENCE } from '@/data'
import { useInView } from 'react-intersection-observer'
import TargetAudience from './_components/TargetAudience';

const page = () => {

    const { ref: titleRef, inView: titleInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    const { ref: descRef, inView: descInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    const { ref: imageRef, inView: imageInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    const { ref: rightDiv, inView: rightDivInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    const { ref: worldTitle, inView: worldTitleInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    const { ref: worldImage, inView: worldImageInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    const { ref: targetAudience, inView: targetAudienceInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    const { ref: idealFor, inView: idealForInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    return (
        <>
            <div className='w-full px-2 xl:px-0 mx-auto bg-black flex flex-col items-center py-30 pb-20 space-y-5' style={{ background: `url(${mainFrame.src})`, backgroundPosition: "center", backgroundSize: 'cover' }}>
                <div className='flex flex-col space-y-3 lg:space-y-0 text-center lg:flex-row lg:justify-between w-[80%] xl:w-[60%] mx-auto mt-20'>
                    <h1 ref={titleRef} className={`heading-text text-3xl md:text-5xl xl:text-7xl transtion-all duration-1000 delay-100 ease-out transform ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>About Us</h1>
                    <p ref={descRef} className={`body-text text-left secondary-text-color text-base md:text-xl lg:w-[60%] transtion-all duration-1000 delay-100 ease-out transform ${descInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>We build brands that travel well across borders and browsers.
                        From sourcing the perfect product to shaping the perfect story.
                    </p>
                </div>
            </div>
            <div className='py-5 w-[80%] mx-auto flex flex-col sm:flex-row justify-between items-center body-text'>
                <img ref={imageRef}
                    className={`w-[400px] h-[450px] mx-auto sm:w-1/2 sm:h-1/2 object-cover aspect-[4/5] block transtion-all duration-1000 delay-100 ease-out transform ${imageInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-100'}`}
                    src={about1.src}
                    alt=""
                />
                <div ref={rightDiv} className={`space-y-5 px-2 w-[90%] mx-auto lg:mx-0 lg:w-1/2 transtion-all duration-1000 delay-100 ease-out transform ${rightDivInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-100'}`}>
                    <h1 className='font-medium text-xl md:text-3xl xl:text-5xl'>From factory floors to global shelves</h1>
                    <h1 className='orange-text font-medium text-xs sm:text-sm md:text-base xl:text-xl'>We don’t just build brands, we take them places.</h1>
                    <p className='text-xs sm:text-sm md:text-base xl:text-xl'>With an extensive experience in logistics, great minds thought of some potential endless ways of living a life with sustainable products. Born in Canada, where creativity collided with commerce, The Brand & Port was founded on a bold idea: that branding and global sourcing could become the ultimate partnership of vision and execution.
                        At The Brand & Port, we navigate the intricate worlds of branding and international business with precision. </p>
                    <p className='text-xs sm:text-sm md:text-base xl:text-xl'><span className='orange-text'>Our purpose?</span> To empower brands not just to look exceptional  but to perform powerfully across markets. We believe a great brand is like a masterfully built ship: enduring, elegant, and ready to chart new horizons.
                        Our roots are here, our ambition is worldwide. We guide brands across borders, steering them toward opportunity and impact. Because for us, success isn’t just about reaching the destination it’s about creating an unforgettable journey.</p>
                </div>
            </div>
            <div className='w-full px-2 mx-auto bg-black flex flex-col items-center py-10 space-y-5' style={{ background: `url(${mainFrame.src})`, backgroundPosition: "center", backgroundSize: 'cover' }}>
                <div className={`w-[80%] text-center space-y-5 `}>
                    <div ref={worldTitle} className={`space-y-5 transtion-all duration-1000 delay-100 ease-out transform ${worldTitleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h1 className='heading-text text-2xl md:text-5xl xl:text-7xl'>Our Global Footprint</h1>
                        <p className='body-text secondary-text-color text-sm md:text-xl lg:w-[60%] mx-auto'>From Asia to North America, our footprint is ever growing.
                            We connect people, products, and possibilities across the globe.
                        </p>
                    </div>
                    <img ref={worldImage} src={world.src} className={`w-[95%] md:w-[70%] lg:w-[70%] mx-auto mt-10 transtion-all duration-1000 delay-300 ease-out transform ${worldImageInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} alt="" />
                </div>
            </div>
            <div className='w-[80%] lg:w-[60%] mx-auto py-20 body-text space-y-6'>
                <div ref={targetAudience} className={`space-y-5 transtion-all duration-1000 delay-100 ease-out transform ${targetAudienceInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1 className='heading-text text-2xl md:text-5xl xl:text-7xl'>Target Audience</h1>
                    <p className='body-text secondary-text-color text-sm md:text-xl'>Canadian businesses across industries looking to strengthen their brand, expand their market reach, and source quality products globally.</p>
                </div>
                <div>
                    <h1 ref={idealFor} className={`body-text text-base md:text-xl transtion-all duration-1000 delay-200 ease-out transform ${idealForInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Ideal For:</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-2 mt-5'>
                        {
                            TARGET_AUDIENCE.map((ele, idx) => {
                                return <TargetAudience data={ele} key={idx} />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default page