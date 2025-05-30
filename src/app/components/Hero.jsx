import React from 'react'
import mainFrame from "@/assets/mainFrame.png"
import Rectangle from "@/assets/Rectangle.png"

const Hero = () => {

    const handleSchedule = () => {
        window.open("https://calendly.com/salonitcn/30min?month=2025-05", "_blank")
    }

    return (
        <div className='px-2 xl:px-0 w-full mx-auto bg-black flex flex-col items-center pt-40 pb-10 space-y-5' style={{ background: `url(${mainFrame.src})`, backgroundPosition: "center", backgroundSize: 'cover' }}>
            <div className='bg-[#272423] px-3 py-1 body-text text-sm rounded-xl w-fit'>
                <h1>Introducing Brand & Port</h1>
            </div>
            <div className='text-center space-y-5'>
                <div className='heading-text text-3xl md:text-5xl xl:text-7xl text-center font-medium'>
                    <h1>Your Brand, Our Port</h1>
                    <h1 className='bg-gradient-to-b from-white via-black via-380% to-black bg-clip-text text-transparent'>Lets Navigate Success Together</h1>
                </div>
                <div className='body-text w-[90%] xl:w-[70%] mx-auto space-y-5'>
                    <p className='text-base md:text-xl xl:text-2xl font-light secondary-text-color'>From sourcing the right product to shaping the perfect branding, we craft the journey from shelf to spotlight.</p>
                    <button onClick={handleSchedule} className="hover:cursor-pointer orange-bg py-3 px-7 w-full xl:w-fit text-sm xl:text-base rounded-3xl">Schedule A Call </button>
                </div>  
            </div>
            <video
                src="/assets/mainVideo.mp4"
                className="w-full sm:w-[80%] xl:w-[55%] mt-5"
                controls
                autoPlay
                playsInline
            ></video>
            <div className='text-center body-text mt-5'>
                <h1 className='text-base md:text-xl xl:text-2xl secondary-text-color'>Powering the best products and services </h1>
                <h1 className='text-base md:text-xl xl:text-2xl'>From next-gen startups to established enterprises.</h1>
            </div>
        </div>
    )
}

export default Hero