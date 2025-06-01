"use client";
import React from 'react'
import { useInView } from 'react-intersection-observer'

const TargetAudience = ({ data }) => {

    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    return (
        <div ref={ref} className={`transtion-all duration-1000 delay-100 ease-out transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className='text-xs lg:text-base'>
                <span className='orange-text'>{data.span} </span>
                {data.text}
            </h1>
        </div>
    )
}

export default TargetAudience