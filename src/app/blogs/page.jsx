"use client";
import React from 'react'
import mainFrame from "@/assets/mainFrame.png"
import world from "@/assets/world.png"
import { OUR_BLOGS } from '@/data'
import { useInView } from 'react-intersection-observer'
import Blog from './_components/Blog';

const page = () => {

  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const { ref: leftRef, inView: leftRefInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <>
      <div className='w-full px-2 xl:px-0 mx-auto bg-black flex flex-col items-center py-30 pb-20 xl:pb-15 space-y-5' style={{ background: `url(${mainFrame.src})`, backgroundPosition: "center", backgroundSize: 'cover' }}>
        <div className='flex flex-col space-y-3 lg:space-y-0 text-center lg:flex-row lg:justify-between w-[80%] xl:w-[60%] mx-auto mt-20'>
          <h1 ref={titleRef} className={`heading-text text-3xl md:text-5xl xl:text-7xl transtion-all duration-1000 delay-100 ease-out transform ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Blogs</h1>
          {/* <p className='body-text secondary-text-color text-base md:text-xl lg:w-[60%]'>OpenAI is an AI research and deployment company. Our mission is to ensure that artificial general intelligence benefits all of humanity.
          </p> */}
        </div>
      </div>

      <div className='w-[80%] xl:w-[65%] mx-auto py-10 md:py-10 md:mt-30 xl:mt-40'>
        <div className='flex justify-center gap-5 md:flex-row body-text relative'>

          <div ref={leftRef} className={`w-full md:w-[65%] lg:w-[50%] rounded-2xl space-y-5 bg-[#171717]/90 p-3 md:px-10 md:pr-20 xl:pr-40 md:py-5 relative overflow-visible transtion-all duration-1000 delay-100 ease-out transform ${leftRefInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className={`w-[90%] xl:w-full space-y-5`}>
              <h1 className='text-xl md:text-3xl lg:text-4xl xl:text-5xl font-medium heading-text'>
                The Benefits and Challenges of Sourcing from India
              </h1>
              <p className='secondary-text-color text-sm xl:text-base'>
                Discusses India's appeal as a sourcing destination due to competitive pricing and diverse manufacturing, while also addressing challenges like infrastructure and regulatory complexities.
              </p>
              <div className='flex items-center'>
                <p className='text-xs'>Judy Chen, November 28, 2024</p>
                <button className='ml-20 px-5 py-1 rounded-3xl bg-[#272423] text-xs'>Read</button>
              </div>
            </div>
            <img
              src={world.src}
              alt=""
              className={`w-full h-[100px] sm:h-[200px] object-cover md:absolute -top-10 -right-10 md:h-[180px] lg:h-[200px] xl:h-[300px] md:-top-[110px] md:-right-[50%] lg:-right-[70%]  md:object-contain z-10`}
            />
          </div>

        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-10 mt-20'>
          {
            OUR_BLOGS.map((ele, idx) => {
              return <Blog data={ele} key={idx} idx={idx} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default page