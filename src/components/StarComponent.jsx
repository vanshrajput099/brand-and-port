import React from 'react'
import stats from "@/assets/stats.png"

const StarComponent = () => {
    return (
        <img className='absolute -top-[20%] right-0 md:right-[20%] xl:-top-[15%] xl:right-[15%] -z-10 h-[60%]' src={stats.src} alt="" />
    )
}

export default StarComponent