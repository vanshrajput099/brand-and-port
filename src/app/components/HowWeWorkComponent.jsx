"use client";
import React from 'react'
import { useInView } from 'react-intersection-observer'

const HowWeWorkComponent = ({ data, idx }) => {

    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    return (
        <div ref={ref} className={`flex transition duration-1000 delay-300 ease-out transform ${idx % 2 !== 0 ? `flex-col md:flex-row-reverse ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}` : `flex-col md:flex-row ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} gap-5 md:gap-0  md:justify-between`}>
            <div className='md:w-1/2 space-y-2 xl:space-y-7'>
                <h1 className='heading-text text-2xl xl:text-6xl'>{data.title}</h1>
                <p className='xl:text-xl font-light body-text secondary-text-color'>{data.description}</p>
                <div>
                    <h1 className='orange-text body-text xl:text-xl'>Deliverables:</h1>
                    <p className='xl:text-xl font-light body-text secondary-text-color'>{data.deliverables}</p>
                </div>
            </div>
            <img className='h-[250px] xl:h-[400px] object-contain' src={data.image.src} alt="" />
        </div>
    )
}

export default HowWeWorkComponent