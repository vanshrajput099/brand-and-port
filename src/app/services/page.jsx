"use client";
import React from 'react'
import mainFrame from "@/assets/mainFrame.png"
import { FAQS, SERVICES_PAGE_DATA } from '@/data'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import stats from "@/assets/stats.png"

const page = () => {
    return (
        <>
            <div className='w-full px-2 xl:px-0 mx-auto bg-black flex flex-col items-center py-30 space-y-5' style={{ background: `url(${mainFrame.src})`, backgroundPosition: "center", backgroundSize: 'cover' }}>
                <div className='relative flex flex-col space-y-3 lg:space-y-0 text-center lg:flex-row lg:justify-between w-[80%] xl:w-[60%] mx-auto mt-20'>
                    <h1 className='heading-text text-3xl md:text-5xl xl:text-7xl'>Services</h1>
                    <p className='body-text secondary-text-color text-base md:text-xl lg:w-[60%]'>Whether you’re starting out or scaling up, we’ve got a package that fits. Choose the plan that meets your vision, budget, and momentum.
                    </p>
                </div>
                <img className='absolute top-[20%] md:w-[60%] xl:w-[40%] -z-10' src={stats.src} alt="" />
            </div>
            <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto py-10 body-text space-y-10 flex justify-between flex-wrap lg:gap-10'>
                {
                    SERVICES_PAGE_DATA.map((ele, idx) => {
                        return (
                            <div key={idx} className='w-full sm:w-[45%] rounded-4xl p-5 space-y-4' style={{ background: `url(${mainFrame.src})`, backgroundPosition: "center", backgroundSize: 'cover' }}>
                                <img className='w-full h-[150px] lg:h-[250px] mx-auto object-cover' src={ele.image.src} alt="" />
                                <h1 className='text-xl lg:text-3xl font-medium'>{ele.title}</h1>
                                <p className='text-sm lg:text-base'>{ele.description}</p>
                                <h1 className='text-xl lg:text-3xl font-medium'>{ele.price}</h1>
                                <hr className='w-full lg:w-[70%]' />
                                <p className='text-sm lg:text-base'>Key Features</p>
                                <div>
                                    <ul className='space-y-2'>
                                        {
                                            ele.keyFeatures.map((features, index) => {
                                                return <li className='text-sm lg:text-base' key={index}>✔️ <span className='ml-4'>{features}</span></li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='w-[98%] px-2 xl:px-0 xl:w-[75%] mx-auto bg-black flex flex-col items-center py-30 space-y-5' style={{ background: `url(${mainFrame.src})`, backgroundPosition: "center", backgroundSize: 'cover' }}>
                <h1 className='heading-text text-3xl md:text-5xl xl:text-7xl'>FAQ</h1>
                <div className='w-full flex flex-col items-center gap-5 mt-10'>
                    {
                        FAQS.map((ele, idx) => {
                            return (
                                <Accordion key={idx} type="single" collapsible className={'bg-[#262120] rounded-4xl w-[90%] px-5 body-text'}>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className={'orange-text'}>{ele.question}</AccordionTrigger>
                                        <AccordionContent >
                                            {ele.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default page