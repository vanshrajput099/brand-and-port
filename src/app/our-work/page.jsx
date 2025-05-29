import React from 'react'
import mainFrame from "@/assets/mainFrame.png"
import ourWork3 from '@/assets/ourWork3.png'
import { OUR_WORKS_DATA2 } from '@/data'

{/* <div key={idx} className='space-y-10'>
    
    <div className='lg:w-[300px] body-text overflow-hidden rounded-xl'>
        <img className='h-[200px] lg:h-[500px] w-full object-cover object-center' src={ele.arr[1].img.src} alt="" />
        <div className='px-3 py-3 bg-[#121212]'>
            <h1 className='px-4 rounded-lg text-xs bg-white py-1 w-fit text-black'>{ele.arr[1].name}</h1>
            <div className='mt-2'>
                <h1 className='font-medium text-sm'>{ele.arr[1].title}</h1>
                <h1 className='text-xs'>{ele.arr[1].location}</h1>
            </div>
            <button className='bg-[#2a2a2a] border border-gray-700 rounded-xl px-4 py-1 mt-4 text-xs'>Explore</button>
        </div>
    </div>
</div> */}

const page = () => {
    return (
        <>
            <div className='w-[98%] px-2 xl:px-0 xl:w-[75%] mx-auto bg-black flex flex-col items-center py-30 space-y-5' style={{ background: `url(${mainFrame.src})`, backgroundPosition: "center", backgroundSize: 'cover' }}>
                <div className='flex flex-col space-y-3 lg:space-y-0 text-center lg:flex-row lg:justify-between lg:w-[80%] mx-auto mt-20'>
                    <h1 className='heading-text text-3xl md:text-5xl xl:text-7xl'>Our Work</h1>
                    <p className='body-text secondary-text-color text-base md:text-xl lg:w-[60%]'>OpenAI is an AI research and deployment company. Our mission is to ensure that artificial general intelligence benefits all of humanity.
                    </p>
                </div>
            </div>

            <div className="w-[90%] xl:w-[60%] mx-auto mt-10 columns-1 sm:columns-2 md:columns-3 gap-6">
                {
                    OUR_WORKS_DATA2.map((ele, idx) => (
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


            <div className='w-full xl:w-[60%] mx-auto flex justify-end mt-15 pb-20'>
                <h1 className='w-full text-center px-5 sm:text-right sm:w-[80%] heading-text text-3xl sm:text-5xl xl:text-7xl'>Let’s Make You the Next Highlight.</h1>
            </div>

        </>
    )
}

export default page

//     < div
// key = { idx }
// className = "mb-5 break-inside-avoid overflow-hidden rounded-xl bg-[#121212] inline-block w-full"
//     >
//                             <img
//                                 className="w-full object-cover object-center rounded-t-xl"
//                                 style={{ height: `${200 + (idx % 3) * 60}px` }}
//                                 src={ourWork3.src}
//                                 alt=""
//                             />
//                             <div className="px-3 py-3">
//                                 <h1 className="px-4 rounded-lg text-xs bg-white py-1 w-fit text-black">
//                                     Lorem ipsum dolor sit amet.
//                                 </h1>
//                                 <div className="mt-2">
//                                     <h1 className="font-medium text-sm">Lorem ipsum dolor sit amet.</h1>
//                                     <h1 className="text-xs">Delhio</h1>
//                                 </div>
//                                 <button className="bg-[#2a2a2a] border border-gray-700 rounded-xl px-4 py-1 mt-4 text-xs">
//                                     Explore
//                                 </button>
//                             </div>
//                         </div >