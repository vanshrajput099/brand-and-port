import { OUR_WORKS_DATA2 } from '@/data'
import Link from 'next/link'
import React from 'react'
import OurWorkComponent from './OurWorkComponent'
import { useInView } from 'react-intersection-observer'

const OurWork = () => {

    return (
        <div className='w-full px-2 xl:px-0 xl:w-[65%] mx-auto py-10'>
            <h1 className='text-3xl ml-10 md:text-5xl xl:text-7xl heading-text'>Our Work</h1>
            <div className="w-[80%] mx-auto mt-10 columns-1 sm:columns-2 md:columns-3 gap-6">
                {
                    OUR_WORKS_DATA2.map((ele, idx) => {
                        return <OurWorkComponent data={ele} key={idx} />
                    })
                }
            </div>
            <div className='flex justify-center'>
                <Link href={"/our-work"}>
                    <button className="hover:cursor-pointer orange-bg py-2 px-4 w-full xl:py-3 xl:px-7 xl:w-fit text-xs xl:text-base rounded-3xl">Explore More</button>
                </Link>
            </div>
        </div>
    )
}

export default OurWork