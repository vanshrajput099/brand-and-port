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
import { useInView } from 'react-intersection-observer';

const page = () => {

    const { ref: titleRef, inView: titleInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    const { ref: descRef, inView: descInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    const { ref: leftDiv, inView: leftDivInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    const { ref: rightDiv, inView: rightDivInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    return (
        <>
            <div className='w-full px-2 xl:px-0 mx-auto bg-black flex flex-col items-center py-30 pb-20 space-y-5' style={{ background: `url(${mainFrame.src})`, backgroundPosition: "center", backgroundSize: 'cover' }}>
                <div className='flex flex-col space-y-3 lg:space-y-0 text-center lg:flex-row lg:justify-between w-[80%] xl:w-[70%] mx-auto mt-20'>
                    <h1 ref={titleRef} className={`heading-text text-3xl md:text-5xl xl:text-6xl transtion-all duration-1000 delay-100 ease-out transform ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Services</h1>
                    <p ref={descRef} className={`body-text lg:text-left secondary-text-color text-base md:text-xl lg:w-[50%] transtion-all duration-1000 delay-100 ease-out transform ${descInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Whether you’re starting out or scaling up, we’ve got a package that fits. Choose the plan that meets your vision, budget, and momentum.
                    </p>
                </div>
            </div>
            <ServicePageData />
            <div className='overflow-x-hidden w-full px-2 xl:px-0 xl:w-[75%] mx-auto bg-black flex flex-col items-center py-10 xl:py-20 space-y-5' style={{ background: `url(${mainFrame.src})`, backgroundPosition: "center", backgroundSize: 'cover' }}>
                <h1 className='heading-text text-3xl md:text-5xl xl:text-7xl'>FAQs</h1>
                <div className='w-full mx-auto flex flex-col md:flex-row gap-10 mt-10'>
                    <div ref={leftDiv} className={`w-full xl:w-1/2 transtion-all duration-1000 delay-100 ease-out transform ${leftDivInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-15 lg:-translate-x-50'} `}>
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
                    <div ref={rightDiv} className={`w-full xl:w-1/2 transtion-all duration-1000 delay-100 ease-out transform ${rightDivInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-15 lg:translate-x-50'}`}>
                        <h1 className='text-center text-xl md:text-2xl lg:text-3xl'>Branding</h1>
                        <div className='w-full flex flex-col items-center gap-5 mt-10'>
                            {
                                FAQs_2.map((ele, idx) => {
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
                </div>

            </div>
        </>
    )
}

export default page