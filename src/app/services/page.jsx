"use client";
import React from 'react'
import mainFrame from "@/assets/mainFrame.png"
import { FAQS, FAQs_2 } from '@/data';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import ServicePageData from './_components/ServicePageData';

const page = () => {

    return (
        <>
            <div className='w-full px-2 xl:px-0 mx-auto bg-black flex flex-col items-center py-30 pb-20 space-y-5' style={{ background: `url(${mainFrame.src})`, backgroundPosition: "center", backgroundSize: 'cover' }}>
                <div className='flex flex-col space-y-3 lg:space-y-0 text-center lg:flex-row lg:justify-between w-[80%] xl:w-[60%] mx-auto mt-20'>
                    <h1 className='heading-text text-3xl md:text-5xl xl:text-7xl'>Services</h1>
                    <p className='body-text secondary-text-color text-base md:text-xl lg:w-[60%]'>Whether you’re starting out or scaling up, we’ve got a package that fits. Choose the plan that meets your vision, budget, and momentum.
                    </p>
                </div>
            </div>
            <ServicePageData />
            <div className='w-full px-2 xl:px-0 xl:w-[75%] mx-auto bg-black flex flex-col items-center py-10 xl:py-20 space-y-5' style={{ background: `url(${mainFrame.src})`, backgroundPosition: "center", backgroundSize: 'cover' }}>
                <h1 className='heading-text text-3xl md:text-5xl xl:text-7xl'>FAQs</h1>
                <div className='w-full mx-auto flex flex-col md:flex-row gap-10 mt-10'>
                    <div className='w-full xl:w-1/2'>
                        <h1 className='text-center text-xl md:text-2xl lg:text-3xl'>Global Sourcing</h1>
                        <div className='w-full flex flex-col items-center gap-5 mt-10'>
                            {
                                FAQS.map((ele, idx) => {
                                    return (
                                        <Accordion key={idx} type="single" collapsible className={'bg-[#262120] rounded-4xl w-[90%] px-5 body-text'}>
                                            <AccordionItem value="item-1">
                                                <AccordionTrigger className={'orange-text text-xs sm:text-base'}>{ele.question}</AccordionTrigger>
                                                <AccordionContent className={'text-xs sm:text-base'}>
                                                    {ele.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='w-full xl:w-1/2'>
                        <h1 className='text-center text-xl md:text-2xl lg:text-3xl'>Branding</h1>
                        <div className='w-full flex flex-col items-center gap-5 mt-10'>
                            {
                                FAQs_2.map((ele, idx) => {
                                    return (
                                        <Accordion key={idx} type="single" collapsible className={'bg-[#262120] rounded-4xl w-[90%] px-5 body-text'}>
                                            <AccordionItem value="item-1">
                                                <AccordionTrigger className={'orange-text text-xs'}>{ele.question}</AccordionTrigger>
                                                <AccordionContent className={'text-xs'}>
                                                    {ele.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default page