"use client";
import React from 'react'
import { SERVICES_PAGE_DATA } from '@/data';
import ServiceBox from './ServiceBox';

const ServicePageData = () => {

    return (
        <div className='w-[80%] md:w-[80%] lg:w-[70%] mx-auto py-10 body-text space-y-10 flex justify-between flex-wrap lg:gap-10'>
            {
                SERVICES_PAGE_DATA.map((ele, idx) => {
                    return (
                        <ServiceBox data={ele} idx={idx} key={idx} />
                    )
                })
            }
        </div>
    )
}

export default ServicePageData