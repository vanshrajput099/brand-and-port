import React from 'react'
import mainFrame from "@/assets/mainFrame.png"
import { PRIVATE_LABEL_PAGE_DATA } from '@/data'

const page = () => {
    return (
        <>
            <div className='w-full px-2 xl:px-0 mx-auto bg-black flex flex-col items-center py-30 pb-20space-y-5' style={{ background: `url(${mainFrame.src})`, backgroundPosition: "center", backgroundSize: 'cover' }}>
                <div className='flex flex-col space-y-3 lg:space-y-0 text-center lg:flex-row lg:justify-between w-[80%] xl:w-[70%] xl:gap-10 mx-auto mt-20'>
                    <h1 className='heading-text text-3xl md:text-5xl xl:text-7xl'>Private label</h1>
                    <p className='body-text text-left secondary-text-color text-base md:text-xl lg:w-[50%]'>We are passionate about exploring possibilities of classically modern-day lifestyles. And we leave no gap while working towards making that available to people via our range of products.</p>
                </div>
            </div>

            <div className='w-[80%] xl:w-[70%] mx-auto body-text space-y-10 py-5 mb-15 xl:mb-30 xl:mt-20 xl:py-10 px-2'>
                {
                    PRIVATE_LABEL_PAGE_DATA.map((ele, idx) => {
                        return (
                            <div key={idx} className={`flex flex-col items-center md:flex-row ${idx % 2 !== 0 && "md:flex-row-reverse"} justify-between space-y-5`}>
                                <div className='w-full md:w-1/2 mt-6 space-y-4'>
                                    <h1 className='text-xl md:text-3xl xl:text-5xl'>{ele.name}</h1>
                                    <p className='secondary-text-color font-light text-xs xl:text-base'>{ele.text}</p>
                                </div>
                                <img className='w-[100%] sm:w-[50%] md:w-[35%]' src={ele.image.src} alt="" />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default page