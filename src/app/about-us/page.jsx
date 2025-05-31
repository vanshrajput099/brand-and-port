import React from 'react'
import mainFrame from "@/assets/mainFrame.png"
import about1 from "@/app/about-us/_assets/about1.png"
import world from "@/app/about-us/_assets/world.png"
import { TARGET_AUDIENCE } from '@/data'

const page = () => {
    return (
        <>
            <div className='w-full px-2 xl:px-0 mx-auto bg-black flex flex-col items-center py-20 space-y-5' style={{ background: `url(${mainFrame.src})`, backgroundPosition: "center", backgroundSize: 'cover' }}>
                <div className='flex flex-col space-y-3 lg:space-y-0 text-center lg:flex-row lg:justify-between w-[80%] xl:w-[60%] mx-auto mt-20'>
                    <h1 className='heading-text text-3xl md:text-5xl xl:text-7xl'>About Us</h1>
                    <p className='body-text secondary-text-color text-base md:text-xl lg:w-[60%]'>We build brands that travel well across borders and browsers.
                        From sourcing the perfect product to shaping the perfect story.
                    </p>
                </div>
            </div>
            <div className='w-full py-5 lg:w-[80%] mx-auto flex flex-col sm:flex-row justify-between items-center body-text'>
                <img
                    className='w-[400px] h-[450px] mx-auto sm:w-1/2 sm:h-1/2 object-cover aspect-[4/5] block'
                    src={about1.src}
                    alt=""
                />
                <div className='space-y-5 px-2 w-[90%] mx-auto lg:mx-0 lg:w-1/2'>
                    <h1 className='font-medium text-xl md:text-3xl xl:text-5xl'>From factory floors to global shelves</h1>
                    <h1 className='orange-text font-medium text-sm md:text-base xl:text-xl'>We don’t just build brands, we take them places.</h1>
                    <p className='text-sm md:text-base xl:text-xl'>With an extensive experience in logistics, great minds thought of some potential endless ways of living a life with sustainable products. Born in Canada, where creativity collided with commerce, The Brand & Port was founded on a bold idea: that branding and global sourcing could become the ultimate partnership of vision and execution.
                        At The Brand & Port, we navigate the intricate worlds of branding and international business with precision. </p>
                    <p className='text-sm md:text-base xl:text-xl'><span className='orange-text'>Our purpose?</span> To empower brands not just to look exceptional  but to perform powerfully across markets. We believe a great brand is like a masterfully built ship: enduring, elegant, and ready to chart new horizons.
                        Our roots are here, our ambition is worldwide. We guide brands across borders, steering them toward opportunity and impact. Because for us, success isn’t just about reaching the destination it’s about creating an unforgettable journey.</p>
                </div>
            </div>
            <div className='w-full px-2 mx-auto bg-black flex flex-col items-center py-25 space-y-5' style={{ background: `url(${mainFrame.src})`, backgroundPosition: "center", backgroundSize: 'cover' }}>
                <div className='text-center space-y-10'>
                    <h1 className='heading-text text-3xl md:text-5xl xl:text-7xl'>Our Global Footprint</h1>
                    <p className='body-text secondary-text-color text-base md:text-xl lg:w-[60%] mx-auto'>From Asia to North America, our footprint is ever growing.
                        We connect people, products, and possibilities across the globe.
                    </p>
                    <img src={world.src} className='w-[90%] md:w-[70%] lg:w-[50%] mx-auto mt-10' alt="" />
                </div>
            </div>
            <div className='w-[90%] lg:w-[60%] mx-auto py-20 body-text space-y-6'>
                <h1 className='heading-text text-3xl md:text-5xl xl:text-7xl'>Target Audience</h1>
                <p className='body-text secondary-text-color text-base md:text-xl'>Canadian businesses across industries looking to strengthen their brand, expand their market reach, and source quality products globally.</p>
                <div>
                    <h1 className='body-text text-base md:text-xl'>Ideal For:</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-2 mt-5'>
                        {
                            TARGET_AUDIENCE.map((ele, idx) => {
                                return <div key={idx} className=''>
                                    <h1 className='text-sm lg:text-base'>
                                        <span className='orange-text'>{ele.span} </span>
                                        {ele.text}
                                    </h1>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default page