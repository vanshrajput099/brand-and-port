import { BRANDS } from '@/data'
import React from 'react'


const Brands = () => {
    return (
        <div className='w-[98%] px-2 xl:px-0 xl:w-[60%] mx-auto bg-black py-10 space-y-10'>
           
            <div className='grid grid-cols-3 gap-y-4 sm:grid-cols-4 lg:grid-cols-6'>
                {
                    BRANDS.map((ele, idx) => <img key={idx} src={ele.src} className='' alt="" />)
                }
            </div>
        </div>
    )
}

export default Brands