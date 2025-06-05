"use client";
import React from 'react'
import { Check } from 'lucide-react';
import mainFrame from "@/assets/mainFrame.png"
import { useInView } from 'react-intersection-observer';

const ServiceBox = ({ data, idx }) => {

    const { ref, inView } = useInView({
        threshold: 0.2,
        rootMargin: '0px 0px 15% 0px',
        triggerOnce: true,
    })

    const handleSchedule = () => {
        window.open("https://calendly.com/salonitcn/30min?month=2025-05", "_blank")
    }

    return (
        <div ref={ref} key={idx} className={`w-full sm:w-[45%] rounded-4xl p-5 space-y-4 transtion-all duration-1000 delay-300 ease-out transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} `} style={{ background: `url(${mainFrame.src})`, backgroundPosition: "center", backgroundSize: 'cover' }}>
            <img className='w-full h-[150px] lg:h-[250px] mx-auto object-cover' src={data.image.src} alt="" />
            <h1 className='text-xl lg:text-3xl font-medium'>{data.title}</h1>
            <p className='text-sm lg:text-base'>{data.description}</p>
            {/* {
                data.price === "Schedule A Call" ?
                    <button onClick={handleSchedule} className='orange-bg px-2 py-1 xl:px-4 xl:py-2 rounded'>
                        <h1 className='hover:cursor-pointer text-sm lg:text-base font-medium'>{data.price}</h1>
                    </button>
                    : <h1 className='text-xl lg:text-xl font-medium text-gray-400'>{data.price}</h1>
            } */}
            <hr className='w-full lg:w-[70%]' />
            <p className='text-sm lg:text-base'>Key Features</p>
            <div>
                <ul className='space-y-2'>
                    {
                        data.keyFeatures.map((features, index) => {
                            return <li className='text-xs lg:text-base flex gap-2 items-center' key={index}>
                                <Check color="#c95d39" /> <span className=''>{features}</span>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default ServiceBox