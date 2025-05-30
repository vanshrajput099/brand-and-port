import React from 'react'
import mainFrame from "@/assets/mainFrame.png"
import { OUR_WORKS_PAGE_DATA2 } from '@/data'
import stats from "@/assets/stats.png"

const page = () => {
    return (
        <>
            <div className='w-full px-2 mx-auto bg-black flex flex-col items-center py-30 pb-20 space-y-5' style={{ background: `url(${mainFrame.src})`, backgroundPosition: "center", backgroundSize: 'cover' }}>
                <div className='flex flex-col space-y-3 lg:space-y-0 text-center lg:flex-row lg:justify-between w-[80%] xl:w-[60%] mx-auto mt-20'>
                    <h1 className='heading-text text-3xl md:text-5xl xl:text-7xl'>Our Work</h1>
                    <p className='body-text text-left secondary-text-color text-base md:text-xl lg:w-[60%]'>Showcasing the brands we’ve helped shape from concept to global shelf.
                    </p>
                </div>
                {/* <img className='absolute top-[20%] md:w-[60%] xl:w-[40%] -z-10' src={stats.src} alt="" /> */}
            </div>
            <div className="w-[80%] lg:w-[70%] xl:w-[60%] mx-auto mt-10 columns-1 sm:columns-2 md:columns-3 gap-6">
                {
                    OUR_WORKS_PAGE_DATA2.map((ele, idx) => (
                        <div
                            key={idx}
                            className="mb-16 break-inside-avoid overflow-hidden rounded-xl bg-[#121212] shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <img
                                className="w-full max-sm:max-h-[150px] object-cover rounded-t-xl"
                                src={ele.img.src}
                                alt={ele.name}
                            />
                            <div className="px-4 py-4">
                                <h1 className="px-3 py-1 text-xs rounded-md w-fit bg-white text-black mb-2">{ele.name}</h1>
                                <h2 className="text-sm font-medium">{ele.title}</h2>
                                <p className="text-xs orange-text">{ele.location}</p>
                                <button className="mt-4 px-4 py-1 text-xs border border-gray-600 bg-[#2a2a2a] rounded-xl hover:bg-[#333] transition">
                                    Explore
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="relative w-full md:w-[90%] xl:w-[65%] mx-auto xl:mt-10 py-10 xl:py-20">
                <h1 className="px-5 text-center heading-text text-3xl sm:text-5xl xl:text-7xl">
                    Let’s Make You the <br /> Next Highlight.
                </h1>
                <img
                    className="
      absolute 
      w-full 
      top-[-40px]          
      right-0 
      sm:top-[-150px]       
      md:right-0           
      md:w-[70%] 
      xl:top-[-60px]      
      xl:right-[-10%]      
      xl:w-[70%] 
      z-0                  
      transform
      will-change-transform
      backface-visibility-hidden
      "
                    src={stats.src}
                    alt=""
                />
            </div>
        </>
    )
}

export default page