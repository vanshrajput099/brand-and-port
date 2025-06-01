"use client";
import React from 'react'
import aboutUsGroup from "@/assets/aboutUsGroup.png"
import { useInView } from 'react-intersection-observer'

const AboutUs = () => {

    const { ref: descRef, inView: descInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    const { ref: titleRef, inView: titleInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    const { ref: imageRef, inView: imageInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    return (
        <div className='space-y-5 w-[80%] px-5 xl:px-0 xl:w-[60%] mx-auto xl:w-container py-10'>
            <h1 ref={titleRef} className={`heading-text text-3xl md:text-5xl xl:text-7xl bg-gradient-to-r from-white via-black via-80% xl:via-50% to-black bg-clip-text text-transparent transition duration-1000 delay-200 ease-out transform ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>About Us</h1>
            <div ref={descRef} className={`body-text space-y-2 xl:space-y-10 text-xs md:text-base xl:text-xl mt-5 xl:mt-10 transition duration-1000 delay-400 ease-out transform ${descInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <p>At The Brand and Port, we offer more than just services we deliver a complete journey for your product. With two powerful pillars at the core of our business Global Sourcing and Branding & Advertising we help you move from idea to impact, seamlessly and strategically. We begin at the source identifying and procuring high-quality, sustainable, and white-label products through our trusted global sourcing network. Whether you’re a startup exploring your first line or an established brand expanding into new categories, we help you source smarter and more responsibly.
                </p>
                <p className='orange-text'>But we don’t stop there!</p>
                <p>Our expert branding and creative teams then transform these products into meaningful, market-ready brands. From naming, logo creation, and packaging design to crafting the brand voice and visual identity we build stories that stick.
                    Finally, we bring your brand to life through impactful advertising connecting it with the right audience, at the right time, across digital and physical platforms.
                </p>
                <p>With us, your brand doesn’t just start strong, it grows, connects, and leads.</p>
            </div>
            <img ref={imageRef} src={aboutUsGroup.src} className={`mt-10 md:mt-15 xl:mt-20 transition duration-1000 delay-200 ease-out transform ${imageInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} alt="" />
        </div>
    )
}

export default AboutUs