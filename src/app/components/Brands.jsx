import React from 'react'
import Frame1 from "@/assets/Frame (1).png"
import Frame2 from "@/assets/Frame (2).png"
import Frame3 from "@/assets/Frame (3).png"
import Frame4 from "@/assets/Frame (4).png"
import Frame5 from "@/assets/Frame (5).png"
import Frame6 from "@/assets/Frame (6).png"
import Frame7 from "@/assets/Frame (7).png"
import Frame8 from "@/assets/Frame (8).png"
import Frame9 from "@/assets/Frame (9).png"
import Frame10 from "@/assets/Frame (10).png"

const Brands = () => {
    const images = [Frame1, Frame2, Frame3, Frame4, Frame5, Frame6, Frame7, Frame8, Frame9, Frame10];
    return (
        <div className='w-[98%] px-2 xl:px-0 xl:w-[70%] mx-auto bg-black py-10 space-y-10'>
            <div className='text-center body-text'>
                <h1 className='text-base md:text-xl xl:text-2xl secondary-text-color'>Powering the best products and services </h1>
                <h1 className='text-base md:text-xl xl:text-2xl'>From next-gen startups to established enterprises.</h1>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6'>
                {
                    images.map((ele, idx) => <img key={idx} src={ele.src} className='' alt="" />)
                }
            </div>
        </div>
    )
}

export default Brands