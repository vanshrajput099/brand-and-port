import React from 'react';
import mainFrame from "@/assets/mainFrame.png";
import services1 from "@/assets/services1.png";
import services2 from "@/assets/services2.png";
import services3 from "@/assets/services3.png";
import services4 from "@/assets/services4.png";
import Link from 'next/link';

const OurServices = () => {
    return (
        <div className='w-full min-h-screen mx-auto bg-black py-15 space-y-5' style={{ background: `url(${mainFrame.src})`, backgroundPosition: "center", backgroundSize: 'cover' }}>
            <div className='w-[80%] xl:w-[60%] mx-auto'>
                <div className='space-y-5'>
                    <h1 className='heading-text text-3xl md:text-5xl xl:text-7xl font-medium heading-text bg-gradient-to-r from-white via-black via-80% xl:via-60% to-black bg-clip-text text-transparent'>Our Services</h1>
                    <p className='text-base md:text-xl xl:text-2xl body-text'>Our services cover every step of your brand’s journey.</p>
                </div>

                <div className='mt-10 xl:mt-20 space-y-5'>

                    <div className='flex flex-col sm:flex-row gap-5'>
                        <div className='w-full xl:w-2/3 rounded-4xl p-5 xl:p-10 heading-text text-center bg-[#332b28]/50'>
                            <img src={services1.src} className='mx-auto w-[90%] h-[120px] xl:h-[200px] object-cover' alt="" />
                            <div className='space-y-5 mt-5'>
                                <h1 className='text-xl sm:text-2xl'>Global Sourcing</h1>
                                <p className='w-[90%] mx-auto text-sm md:text-base'>Years of working with trusted manufacturers worldwide, we know where to find the right product and how to get it to you.</p>
                            </div>
                        </div>

                        <div className='w-full xl:w-1/3 rounded-4xl p-5 xl:p-10 heading-text text-center bg-[#332b28]/50'>
                            <img src={services2.src} className='mx-auto w-[90%] h-[120px] xl:h-[200px] object-cover' alt="" />
                            <div className='space-y-5 mt-5'>
                                <h1 className='text-xl sm:text-2xl'>Branding</h1>
                                <p className='w-[90%] mx-auto text-sm md:text-base'>We build brands with depth, names, stories, and visuals that hold meaning and stay consistent across every touchpoint.</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col sm:flex-row gap-5'>

                        <div className='w-full xl:w-1/3 rounded-4xl p-5 xl:p-10 heading-text text-center bg-[#332b28]/50'>
                            <img src={services3.src} className='mx-auto w-[90%] h-[120px] xl:h-[200px] object-cover' alt="" />
                            <div className='space-y-5 mt-5'>
                                <h1 className='text-xl sm:text-2xl'>Website Development</h1>
                                <p className='w-[90%] mx-auto text-sm md:text-base'>Clean, functional websites that do what they’re supposed to, tell your story clearly and work across devices.</p>
                            </div>
                        </div>

                        <div className='w-full xl:w-2/3 flex flex-col rounded-4xl p-5 xl:p-10 heading-text text-center bg-[#332b28]/50'>
                            <div className='space-y-5 mt-5 sm:mt-0'>
                                <h1 className='text-xl sm:text-2xl'>Social Media Management</h1>
                                <p className='w-[90%] mx-auto text-sm md:text-base'>We don’t chase trends. We build steady, thoughtful presence that speaks to your audience and aligns with your brand.</p>
                            </div>
                            <img src={services4.src} className='mx-auto mt-5 w-[90%] h-[120px] xl:mt-13 xl:h-[200px] object-cover sm:mt-5' alt="" />
                        </div>
                    </div>

                </div>

                <div className='flex justify-center mt-10'>
                    <Link href={"/services"}>
                        <button className="hover:cursor-pointer orange-bg py-2 px-4 w-full xl:py-3 xl:px-7 xl:w-fit text-xs xl:text-base rounded-3xl">Know More</button>
                    </Link>
                </div>


            </div>
        </div>
    )
}

export default OurServices