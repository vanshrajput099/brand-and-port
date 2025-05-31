import React from 'react'
import mainFrame from "@/assets/mainFrame.png"
import { HOW_WE_WORK_DATA } from '@/data'


const HowWeWork = () => {
    return (
        <div className='w-full xl:w-[75%] mx-auto bg-black flex flex-col items-center py-20' style={{ background: `url(${mainFrame.src})`, backgroundPosition: "center", backgroundSize: 'cover' }}>
            <div className='text-center space-y-10'>
                <h1 className='heading-text text-3xl md:text-5xl xl:text-7xl'>How We Work</h1>
                <p className='text-base md:text-xl xl:text-2xl w-[70%] mx-auto body-text'>Plan visually, collaborate in cross-team projects, and make better decisions with progress insights and project updates.</p>
            </div>

            <div className='w-[80%] mx-auto mt-20 xl:mt-30 space-y-12 xl:space-y-20'>

                {
                    HOW_WE_WORK_DATA.map((ele, idx) => {
                        return (
                            <div key={idx} className={`flex ${idx % 2 !== 0 ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"} gap-5 md:gap-0  md:justify-between`}>
                                <div className='md:w-1/2 space-y-2 xl:space-y-7'>
                                    <h1 className='heading-text text-2xl xl:text-6xl'>{ele.title}</h1>
                                    <p className='xl:text-xl font-light body-text secondary-text-color'>{ele.description}</p>
                                    <div>
                                        <h1 className='orange-text body-text xl:text-xl'>Deliverables:</h1>
                                        <p className='xl:text-xl font-light body-text secondary-text-color'>{ele.deliverables}</p>
                                    </div>
                                </div>
                                <img className='h-[250px] xl:h-[400px] object-contain' src={ele.image.src} alt="" />
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default HowWeWork