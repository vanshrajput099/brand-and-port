import React from 'react'
import mainFrame from "@/assets/mainFrame.png"
import how1 from "@/assets/how1.png";
import how2 from "@/assets/how2.png";
import how3 from "@/assets/how3.png";

const HowWeWork = () => {
    return (
        <div className='w-full xl:w-[75%] mx-auto bg-black flex flex-col items-center py-30 space-y-5' style={{ background: `url(${mainFrame.src})`, backgroundPosition: "center", backgroundSize: 'cover' }}>
            <div className='text-center space-y-10'>
                <h1 className='heading-text text-3xl md:text-5xl xl:text-7xl'>How We Work</h1>
                <p className='text-base md:text-xl xl:text-2xl w-[70%] mx-auto body-text'>Plan visually, collaborate in cross-team projects, and make better decisions with progress insights and project updates.</p>
            </div>

            <div className='w-[95%] mx-auto mt-30 space-y-12 xl:space-y-36'>

                <div className='flex flex-col gap-5 md:gap-0 md:flex-row md:justify-between'>
                    <div className='md:w-1/2 space-y-2 xl:space-y-7'>
                        <h1 className='heading-text text-2xl xl:text-6xl'>Discovery</h1>
                        <p className='xl:text-xl font-light body-text secondary-text-color'>We begin with deep-dive discovery, understanding your brand vision, product needs and target markets.</p>
                        <h1 className='orange-text body-text xl:text-xl'>Deliverables:</h1>
                        <p className='xl:text-xl font-light body-text secondary-text-color'>Strategy call, Brand/Product brief, Market research</p>
                    </div>
                    <img className='md:h-[250px] xl:h-[400px] object-contain' src={how1.src} alt="" />
                </div>

                <div className='flex flex-col-reverse gap-5 md:gap-0 md:flex-row md:justify-between w-full'>
                    <img className='md:h-[250px] xl:h-[400px] object-contain' src={how2.src} alt="" />
                    <div className='md:w-1/2 space-y-2 xl:space-y-7'>
                        <h1 className='heading-text text-2xl xl:text-6xl'>Development</h1>
                        <p className='xl:text-xl font-light body-text secondary-text-color'>Our creative and sourcing teams work in parallel developing your brand identity and sourcing product solutions globally.</p>
                        <h1 className='orange-text body-text xl:text-xl'>Deliverables:</h1>
                        <p className='xl:text-xl font-light body-text secondary-text-color'>Brand concepts, Product samples, Prototypes</p>
                    </div>
                </div>

                <div className='flex flex-col gap-5 md:gap-0 md:flex-row md:justify-between'>
                    <div className='md:w-1/2 space-y-2 xl:space-y-7'>
                        <h1 className='heading-text text-2xl xl:text-6xl'>Refinement</h1>
                        <p className='xl:text-xl font-light body-text secondary-text-color'>We fine tune based on your feedback, ensure quality checks and finalize assets or supplier terms.</p>
                        <h1 className='orange-text body-text xl:text-xl'>Deliverables:</h1>
                        <p className='xl:text-xl font-light body-text secondary-text-color'>Final brand kit, QC reports, PO confirmations, Packaging deadlines</p>
                    </div>
                    <img className='md:h-[250px] xl:h-[400px] object-contain' src={how3.src} alt="" />
                </div>

            </div>
        </div>
    )
}

export default HowWeWork