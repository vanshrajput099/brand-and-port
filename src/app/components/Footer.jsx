import React from 'react'
import footerLogo from "@/assets/footerLogo.png"
import Image from 'next/image'

const Footer = () => {
    return (
        <>
            <div className='w-full px-2 xl:px-0 xl:w-[70%] mx-auto flex flex-col md:flex-row py-10 md:py-20 border-b-2 border-b-gray-800 gap-10'>
                <div className='w-full xl:w-1/2 px-5 space-y-7 body-text'>
                    <Image src={footerLogo.src} alt='brandLogo.png' height={200} width={300} className='' />
                    <p className='xl:text-xl font-light'>Want to see if we’re the right fit to work together? Schedule a quick 15 min zoom chat with Vineet Hawelia, to clear up any questions you may have.</p>
                    <button className="orange-bg py-3 px-7 w-full xl:w-fit text-sm xl:text-base rounded-3xl">Schedule A Call </button>
                    <h1 className='text-xl font-light'>New Business Enquiries:</h1>
                    <p className='orange-text text-xl font-light'>info@thebrandandport.com</p>
                </div>
                <div className='w-full xl:w-1/2 px-5 xl:px-0 body-text space-y-7'>
                    <h1>Let us create an extraordinary brand that elevates your business. Please fill out the following form, and one of us will get back to you as soon as possible.</h1>
                    <div className='grid grid-cols-1 xl:grid-cols-2 gap-y-5'>
                        <input type="text" placeholder='Name*' className='border-b-2 w-[80%] py-2 xl:placeholder:text-xl' />
                        <input type="text" placeholder='Email*' className='border-b-2 w-[80%] py-2 xl:placeholder:text-xl' />
                        <input type="text" placeholder='Location*' className='border-b-2 w-[80%] py-2 xl:placeholder:text-xl' />
                        <input type="text" placeholder='Company Name*' className='border-b-2 w-[80%] py-2 xl:placeholder:text-xl' />
                    </div>
                    <div>
                        <h1 className='text-xl'>What do you want our help with? *</h1>
                        <div className='space-y-5 mt-5'>
                            {
                                [1, 2, 3, 4, 5].map((ele, idx) => {
                                    return (
                                        <div className='flex items-center gap-2'>
                                            <input type="checkbox" placeholder='Name*' className='border-b-2 w-6 h-6 placeholder:text-xl' />
                                            <label className='' htmlFor="">{ele === 5 ? "Other" : "Brand Identity Design."}</label>
                                        </div>
                                    )
                                })
                            }
                            <button className="orange-bg w-full xl:w-fit py-1 px-7 text-base rounded-3xl">Send</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className='text-center py-2'>
                <p className='text-sm xl:text-xl'>© 2025 The Brand & Port. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer