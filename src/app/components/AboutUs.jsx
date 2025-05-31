import React from 'react'
import aboutUs1 from "@/assets/aboutUs1.png"
import aboutUs2 from "@/assets/aboutUs2.png"
import aboutUs3 from "@/assets/aboutUs3.png"
import aboutUs4 from "@/assets/aboutUs4.png"
import aboutUs5 from "@/assets/aboutUs5.png"
import aboutUs6 from "@/assets/aboutUs6.png"
import aboutUs7 from "@/assets/aboutUs7.png"
import aboutUsGroup from "@/assets/aboutUsGroup.png"

const AboutUs = () => {
    const images = [aboutUs6, { image1: aboutUs4, image2: aboutUs2 }, aboutUs7, { image1: aboutUs5, image2: aboutUs3 }, aboutUs1]
    return (
        <div className='space-y-5 w-[80%] px-5 xl:px-0 xl:w-[60%] mx-auto xl:w-container py-10'>
            <h1 className='heading-text text-3xl md:text-5xl xl:text-7xl bg-gradient-to-r from-white via-black via-80% xl:via-50% to-black bg-clip-text text-transparent'>About Us</h1>
            <div className='body-text space-y-2 xl:space-y-10 text-xs md:text-base xl:text-xl mt-5 xl:mt-10'>
                <p>At The Brand and Port, we offer more than just services we deliver a complete journey for your product. With two powerful pillars at the core of our business Global Sourcing and Branding & Advertising we help you move from idea to impact, seamlessly and strategically. We begin at the source identifying and procuring high-quality, sustainable, and white-label products through our trusted global sourcing network. Whether you’re a startup exploring your first line or an established brand expanding into new categories, we help you source smarter and more responsibly.
                </p>
                <p className='orange-text'>But we don’t stop there!</p>
                <p>Our expert branding and creative teams then transform these products into meaningful, market-ready brands. From naming, logo creation, and packaging design to crafting the brand voice and visual identity we build stories that stick.
                    Finally, we bring your brand to life through impactful advertising connecting it with the right audience, at the right time, across digital and physical platforms.
                </p>
                <p>With us, your brand doesn’t just start strong, it grows, connects, and leads.</p>
            </div>
            <img src={aboutUsGroup.src} className='mt-10 md:mt-15 xl:mt-20' alt="" />
            {/* <div className='mt-20 grid grid-cols-3 xl:grid xl:grid-cols-5 gap-x-5'>
                {
                    images.map((ele, idx) => {
                        if (idx % 2 !== 0) {
                            return (
                                <div className='flex flex-col justify-center gap-2 xl:gap-5'>
                                    <img className='rounded-xl' src={ele.image1.src} alt="" />
                                    <img className='rounded-xl' src={ele.image2.src} alt="" />
                                </div>
                            )
                        }
                        return <div className='flex items-center'>
                            <img className='rounded-xl' src={ele.src} alt="" />
                        </div>
                    })
                }
            </div> */}
        </div>
    )
}

export default AboutUs