import React from 'react'
import mainFrame from "@/assets/mainFrame.png"
import { OUR_WORKS_DATA2, OUR_WORKS_PAGE_DATA2 } from '@/data'

const page = () => {
    return (
        <>
            <div className='w-full px-2 mx-auto bg-black flex flex-col items-center py-30 space-y-5' style={{ background: `url(${mainFrame.src})`, backgroundPosition: "center", backgroundSize: 'cover' }}>
                <div className='flex flex-col space-y-3 lg:space-y-0 text-center lg:flex-row lg:justify-between w-[80%] xl:w-[60%] mx-auto mt-20'>
                    <h1 className='heading-text text-3xl md:text-5xl xl:text-7xl'>Our Work</h1>
                    <p className='body-text secondary-text-color text-base md:text-xl lg:w-[60%]'>OpenAI is an AI research and deployment company. Our mission is to ensure that artificial general intelligence benefits all of humanity.
                    </p>
                </div>
            </div>

            <div className="w-[90%] xl:w-[60%] mx-auto mt-10 columns-1 sm:columns-2 md:columns-3 gap-6">
                {
                    OUR_WORKS_PAGE_DATA2.map((ele, idx) => (
                        <div
                            key={idx}
                            className="mb-16 break-inside-avoid overflow-hidden rounded-xl bg-[#121212] shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <img
                                className="w-full object-cover object-center rounded-t-xl"
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


            <div className='w-full md:w-[90%] xl:w-[65%] mx-auto flex justify-end xl:mt-10 py-10 xl:py-20'>
                <h1 className='text-right px-5 sm:text-right xl:w-[80%] heading-text text-3xl sm:text-5xl xl:text-7xl'>Let’s Make You the <br /> Next Highlight.</h1>
            </div>

        </>
    )
}

export default page