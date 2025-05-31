"use client";
import React from 'react'
import { SERVICES_PAGE_DATA } from '@/data';
import { Check } from 'lucide-react';
import mainFrame from "@/assets/mainFrame.png"

const ServicePageData = () => {

    const handleSchedule = () => {
        window.open("https://calendly.com/salonitcn/30min?month=2025-05", "_blank")
    }

    return (
        <div className='w-[80%] md:w-[80%] lg:w-[70%] mx-auto py-10 body-text space-y-10 flex justify-between flex-wrap lg:gap-10'>
            {
                SERVICES_PAGE_DATA.map((ele, idx) => {
                    return (
                        <div key={idx} className='w-full sm:w-[45%] rounded-4xl p-5 space-y-4' style={{ background: `url(${mainFrame.src})`, backgroundPosition: "center", backgroundSize: 'cover' }}>
                            <img className='w-full h-[150px] lg:h-[250px] mx-auto object-cover' src={ele.image.src} alt="" />
                            <h1 className='text-xl lg:text-3xl font-medium'>{ele.title}</h1>
                            <p className='text-sm lg:text-base'>{ele.description}</p>
                            {
                                ele.price === "Schedule A Call" ?
                                    <h1 onClick={handleSchedule} className='hover:cursor-pointer hover:text-[#C95D39] text-xl lg:text-xl font-medium text-gray-400'>{ele.price}</h1>
                                    : <h1 className='text-xl lg:text-xl font-medium text-gray-400'>{ele.price}</h1>
                            }
                            <hr className='w-full lg:w-[70%]' />
                            <p className='text-sm lg:text-base'>Key Features</p>
                            <div>
                                <ul className='space-y-2'>
                                    {
                                        ele.keyFeatures.map((features, index) => {
                                            return <li className='text-xs lg:text-base flex gap-2 items-center' key={index}>
                                                <Check color="#c95d39" /> <span className=''>{features}</span>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ServicePageData