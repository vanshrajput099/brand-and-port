import React from 'react';
import mainFrame from "@/assets/mainFrame.png";
import services1 from "@/assets/services1.png";
import services2 from "@/assets/services2.png";
import services3 from "@/assets/services3.png";
import services4 from "@/assets/services4.png";

const OurServices = () => {
    return (
        <div className='w-full xl:w-[75%] min-h-screen mx-auto bg-black py-20 space-y-5' style={{ background: `url(${mainFrame.src})`, backgroundPosition: "center", backgroundSize: 'cover' }}>
            <div className='w-[95%] xl:w-[80%] mx-auto'>
                <div className='space-y-5'>
                    <h1 className='heading-text text-3xl md:text-5xl xl:text-7xl font-medium heading-text bg-gradient-to-r from-white via-black via-80% xl:via-60% to-black bg-clip-text text-transparent'>Our Services</h1>
                    <p className='text-base md:text-xl xl:text-2xl body-text'>Our services cover every step of your brand’s journey.</p>
                </div>

                <div className='mt-10 xl:mt-20 space-y-5'>
                    <div className='flex flex-col sm:flex-row gap-5'>
                        <div className='w-full xl:w-2/3 rounded-4xl p-5 xl:p-10 heading-text text-center bg-[#332b28]'>
                            <img src={services1.src} className='mx-auto w-[90%] h-[120px] xl:h-[200px] object-cover' alt="" />
                            <div className='space-y-5 mt-5'>
                                <h1 className='text-xl sm:text-2xl'>Global Sourcing</h1>
                                <p className='w-[90%] mx-auto text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi officiis totam ipsam amet quam debitis consectetur sint magnam sunt temporibus!</p>
                            </div>
                        </div>

                        <div className='w-full xl:w-1/3 rounded-4xl p-5 xl:p-10 heading-text text-center bg-[#332b28]'>
                            <img src={services2.src} className='mx-auto w-[90%] h-[120px] xl:h-[200px] object-cover' alt="" />
                            <div className='space-y-5 mt-5'>
                                <h1 className='text-xl sm:text-2xl'>Global Sourcing</h1>
                                <p className='w-[90%] mx-auto text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi officiis totam ipsam amet quam debitis consectetur sint magnam sunt temporibus!</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col sm:flex-row gap-5'>

                        <div className='w-full xl:w-1/3 rounded-4xl p-5 xl:p-10 heading-text text-center bg-[#332b28]'>
                            <img src={services3.src} className='mx-auto w-[90%] h-[120px] xl:h-[200px] object-cover' alt="" />
                            <div className='space-y-5 mt-5'>
                                <h1 className='text-xl sm:text-2xl'>Global Sourcing</h1>
                                <p className='w-[90%] mx-auto text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi officiis totam ipsam amet quam debitis consectetur sint magnam sunt temporibus!</p>
                            </div>
                        </div>

                        <div className='w-full xl:w-2/3 flex flex-col rounded-4xl p-5 xl:p-10 heading-text text-center bg-[#332b28]'>
                            <div className='space-y-5 mt-5 sm:mt-0'>
                                <h1 className='text-xl sm:text-2xl'>Global Sourcing</h1>
                                <p className='w-[90%] mx-auto text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi officiis totam ipsam amet quam debitis consectetur sint magnam sunt temporibus!</p>
                            </div>
                            <img src={services4.src} className='mx-auto w-[90%] h-[120px] xl:h-[200px] object-cover sm:mt-5' alt="" />
                        </div>
                    </div>

                </div>

                <div className='flex justify-center mt-20'>
                    <button className="orange-bg py-3 px-7 w-full xl:w-fit text-sm xl:text-base rounded-3xl body-text">Know More</button>
                </div>


            </div>
        </div>
    )
}

export default OurServices