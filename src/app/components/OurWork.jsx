import { OUR_WORKS_DATA2 } from '@/data'
import Link from 'next/link'
import React from 'react'

const OurWork = () => {
    return (
        <div className='w-full px-2 xl:px-0 xl:w-[65%] mx-auto py-10'>
            <h1 className='text-3xl md:text-5xl xl:text-7xl heading-text'>Our Work</h1>
            <div className="w-[90%] mx-auto mt-10 columns-1 sm:columns-2 md:columns-3 gap-6">
                {
                    OUR_WORKS_DATA2.map((ele, idx) => (
                        <div
                            key={idx}
                            className="mb-16 break-inside-avoid overflow-hidden rounded-xl bg-[#121212] shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <img
                                className="w-full max-sm:max-h-[150px] object-cover object-center rounded-t-xl"
                                src={ele.img.src}
                                alt={ele.name}
                            />
                            <div className="px-4 py-4">
                                <h1 className="px-3 py-1 text-xs rounded-md w-fit bg-white text-black mb-2">{ele.name}</h1>
                                <h2 className="text-sm font-medium">{ele.title}</h2>
                                <p className="text-xs text-gray-400">{ele.location}</p>
                                <button className="mt-4 px-4 py-1 text-xs border border-gray-600 bg-[#2a2a2a] rounded-xl hover:bg-[#333] transition">
                                    Explore
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='flex justify-center'>
                <Link href={"/our-work"}>
                    <button className="hover:cursor-pointer orange-bg py-3 px-7 w-full xl:w-fit text-sm xl:text-base rounded-3xl body-text">Explore More</button>
                </Link>
            </div>
        </div>
    )
}

export default OurWork