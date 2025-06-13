"use client";
import React from 'react'
import { useInView } from 'react-intersection-observer'

const OurWorkComponent = ({ data }) => {

    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: '0px 0px 1% 0px',
        triggerOnce: true,
    })

    return (
        <div
            ref={ref}
            className={`mb-16 break-inside-avoid overflow-hidden rounded-xl bg-[#121212] shadow-md hover:shadow-lg transition duration-500 ease-out transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}
        >
            <img
                className="w-full max-sm:max-h-[150px] object-cover object-center rounded-t-xl bg-white"
                src={data.img.src}
                alt={data.name}
            />
            <div className="px-4 py-4">
                <h1 className="px-3 py-1 text-xs rounded-md w-fit bg-white text-black mb-2">{data.name}</h1>
                <h2 className="text-sm font-medium">{data.title}</h2>
                <p className="text-xs orange-text">{data.location}</p>
                <button className="mt-4 px-4 py-1 text-xs border border-gray-600 bg-[#2a2a2a] rounded-xl hover:bg-[#333] transition">
                    Explore
                </button>
            </div>
        </div>
    )
}

export default OurWorkComponent