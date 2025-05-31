import React from 'react'
import mainFrame from "@/assets/mainFrame.png"

const page = () => {
    
    return (
        <>
            <div className='w-full px-2 xl:px-0 mx-auto bg-black flex flex-col items-center py-30 pb-20 space-y-5' style={{ background: `url(${mainFrame.src})`, backgroundPosition: "center", backgroundSize: 'cover' }}>
                <div className='flex flex-col space-y-3 lg:space-y-0 text-center lg:flex-row lg:justify-between w-[80%] xl:w-[60%] mx-auto mt-20'>
                    <h1 className='heading-text text-3xl md:text-5xl xl:text-7xl'>Contact Us</h1>
                    <p className='body-text secondary-text-color text-base md:text-xl lg:w-[50%]'>Let us create an extraordinary brand that elevates your business. Please fill out the following form, and one of us will get back to you as soon as possible.
                    </p>
                </div>
            </div>
        </>
    )
}

export default page