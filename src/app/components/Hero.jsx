"use client"
import React from 'react'
import mainFrame from "@/assets/mainFrame.png"
import { useInView } from 'react-intersection-observer'

const Hero = () => {

    const handleSchedule = () => {
        window.open("https://calendly.com/salonitcn/30min?month=2025-05", "_blank")
    }

    const { ref: introRef, inView: introRefInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    const { ref: titleRef, inView: titleInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    const { ref: videoRef, inView: videoInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

  

    return (
        <div className='overflow-x-hidden px-2 xl:px-0 w-full mx-auto bg-black flex flex-col items-center pt-45 pb-10 space-y-5' style={{ background: `url(${mainFrame.src})`, backgroundPosition: "center", backgroundSize: 'cover' }}>
            <div ref={introRef} className={`bg-[#272423] px-3 py-1 body-text text-sm rounded-xl w-fit transition duration-1000 ease-out transform ${introRefInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1>Introducing Brand & Port</h1>
            </div>
            <div ref={titleRef} className={`text-center space-y-5 w-[80%] mx-auto transition duration-1000 delay-500 ease-out transform ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} `}>
                <div className='heading-text text-2xl md:text-5xl xl:text-7xl text-center font-medium md:leading-[3.5rem] xl:leading-[5.5rem]'>
                    <h1>Your Brand, Our Port</h1>
                    <h1 className='bg-gradient-to-b from-white via-black via-380% to-black bg-clip-text text-transparent'>Lets Navigate Success Together</h1>
                </div>
                <div className='body-text w-full mx-auto space-y-5'>
                    <p className='text-sm sm:text-base md:text-xl xl:text-2xl font-light secondary-text-color'>From sourcing the right product to shaping the perfect branding, we craft the journey from shelf to spotlight.</p>
                    <button onClick={handleSchedule} className="hover:cursor-pointer orange-bg py-2 w-[50%] md:w-[30%] lg:w-[20%] xl:py-3 xl:px-7 xl:w-fit text-xs xl:text-base rounded-3xl">Schedule A Call </button>
                </div>
            </div>
            <video
                ref={videoRef}
                src="/assets/mainVideo.mp4"
                className={`w-[80%] sm:w-[80%] xl:w-[55%] mt-5 transition duration-1000 delay-800 ease-out transform ${videoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                controls
                autoPlay
                playsInline
                muted
            ></video>
            
        </div>
    )
}

export default Hero