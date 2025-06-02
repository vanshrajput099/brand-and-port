"use client"
import React from 'react'
import orange from "@/assets/orange&.png"

const Logo = () => {
    const handleSchedule = () => {
        window.open("https://calendly.com/salonitcn/30min?month=2025-05", "_blank")
    }
    return (
        <div
            onClick={handleSchedule}
            className="hover:cursor-pointer right-5 bottom-5 xl:right-10 xl:bottom-10 fixed z-[9999]"
        >
            <img
                className="h-20 w-20 xl:h-30 xl:w-30 animate-up-down"
                src={orange.src}
                alt="logo"
            />
        </div>

    )
}

export default Logo