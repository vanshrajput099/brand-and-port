import React from 'react'
import route from "@/assets/route.png"

const AboutUsBox = () => {
    return (
        <div className='body-text space-y-1 px-4'>
            <div className='flex gap-2 items-center'>
                <img className='h-5 w-5' src={route.src} alt="" />
                <h1 className='font-medium text-sm md:text-xl'>Sustainable & Scalable Solutions</h1>
            </div>
            <p className='secondary-text-color text-sm md:text-xl'>Eco-friendly products that grow with your brand.</p>
        </div>
    )
}

export default AboutUsBox