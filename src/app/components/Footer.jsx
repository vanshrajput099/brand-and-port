"use client"
import React, { useState } from 'react'
import footerLogo from "@/assets/footerLogo.png"
import Image from 'next/image'
import { FOOTER_OPTIONS } from '@/data'
import { usePathname } from 'next/navigation'
import axios from 'axios'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'

const Footer = () => {

    const [selectedOption, setSelectedOption] = useState('');
    const [otherInput, setOtherInput] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const pathname = usePathname();

    const [formData, setFormData] = useState({});

    const addDataInForm = (e) => {
        setErros({});
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const sendForm = async () => {
        const errors = {};
        if (!formData.name) {
            errors.name = "*Enter your name";
        }

        if (!formData.email) {
            errors.email = "*Enter your email";
        } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))) {
            errors.email = "*Enter a valid email address";
        }

        if (!formData.location) {
            errors.location = "*Enter your location";
        }

        if (!formData.companyName) {
            errors.companyName = "*Enter your company name";
        }

        if (selectedOption.trim() === "") {
            errors.helpWith = "*Choose an option";
        }

        if (selectedOption === "Other" && otherInput.trim() === "") {
            errors.helpWith = "*Fill the input";
        }

        if (Object.keys(errors).length > 0) {
            setErros(errors);
            return;
        }

        try {
            await axios.post("/api/contact", { ...formData, helpWith: selectedOption === "Other" ? otherInput : selectedOption });
            toast("Mail has been sended successfully !!");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
            setFormData({}); setSelectedOption(''); setOtherInput('');
        }


    }

    const handleSchedule = () => {
        window.open("https://calendly.com/salonitcn/30min?month=2025-05", "_blank")
    }

    return (
        <>
            <div className='w-full px-2 xl:px-0 xl:w-[70%] mx-auto flex flex-col md:flex-row py-10 md:py-20 border-b-2 border-b-gray-800 gap-10'>
                <div className='w-full xl:w-1/2 px-5 space-y-7 body-text'>
                    <Image src={footerLogo.src} alt='brandLogo.png' height={200} width={300} className='h-[150px] w-[250px] mx-auto' />
                    <p className='text-sm xl:text-xl font-light'>Want to see if we’re the right fit to work together? Schedule a quick 15 min zoom chat with us to clear up any questions you may have.</p>
                    <div className='flex justify-center'>
                        <button onClick={handleSchedule} className="hover:cursor-pointer orange-bg px-4 py-2 w-[70%] mx-auto xl:py-3 xl:px-7 xl:w-fit text-sm xl:text-base rounded-3xl">Schedule A Call </button>
                    </div>
                    <div>
                        <h1 className='text-xl font-light'>New Business Enquiries:</h1>
                        <p className='orange-text text-base xl:text1-xl font-light'>contact@thebrandandport.com</p>
                    </div>
                </div>
                <div className={`w-full xl:w-1/2 px-5 xl:px-0 body-text space-y-7 md:mt-12 ${pathname === "/contact-us" && "md:mt-12"}`}>
                    {pathname !== "/contact-us" && <h1>Let us create an extraordinary brand that elevates your business. Please fill out the following form, and one of us will get back to you as soon as possible.</h1>}
                    <div className='grid grid-cols-1 xl:grid-cols-2 gap-y-5'>
                        <div className='space-y-2'>
                            <input value={formData.name || ""} onChange={addDataInForm} type="text" name='name' placeholder='Name*' className='border-b-2 w-[80%] py-2 xl:placeholder:text-base' />
                            {errors.name && <p className='text-red-500 text-xs'>{errors.name}</p>}
                        </div>
                        <div className='space-y-2'>
                            <input value={formData.email || ""} onChange={addDataInForm} type="email" name='email' placeholder='Email*' className='border-b-2 w-[80%] py-2 xl:placeholder:text-base' />
                            {errors.email && <p className='text-red-500 text-xs'>{errors.email}</p>}
                        </div>
                        <div className='space-y-2'>
                            <input value={formData.location || ""} onChange={addDataInForm} type="text" name='location' placeholder='Location*' className='border-b-2 w-[80%] py-2 xl:placeholder:text-base' />
                            {errors.location && <p className='text-red-500 text-xs'>{errors.location}</p>}
                        </div>
                        <div className='space-y-2'>
                            <input value={formData.companyName || ""} onChange={addDataInForm} type="text" name='companyName' placeholder='Company Name*' className='border-b-2 w-[80%] py-2 xl:placeholder:text-base' />
                            {errors.companyName && <p className='text-red-500 text-xs'>{errors.companyName}</p>}
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl'>What do you want our help with? *</h1>
                        <div className='flex flex-col space-y-5 mt-5'>
                            {FOOTER_OPTIONS.map((ele, idx) => {
                                return (
                                    <div key={idx} className='flex items-center gap-2'>
                                        <input
                                            type="checkbox"
                                            name="helpWith"
                                            className='border-b-2 w-6 h-6 placeholder:text-base'
                                            checked={selectedOption === ele}
                                            onChange={() => {
                                                setErrors({})
                                                setSelectedOption(prev => prev === ele ? '' : ele);
                                            }}
                                        />
                                        <label className='text-sm'>{ele}</label>
                                    </div>
                                );
                            })}

                            <div className='w-full space-y-2'>
                                {selectedOption === 'Other' && (
                                    <input
                                        type="text"
                                        placeholder="Query..."
                                        className=" p-2 border border-gray-300 rounded"
                                        value={otherInput}
                                        onChange={(e) => { setOtherInput(e.target.value); setErrors({}); }}
                                    />
                                )}

                                {errors.helpWith && <p className='text-red-500 text-xs'>{errors.helpWith}</p>}
                            </div>


                            <button disabled={loading} onClick={sendForm} className="orange-bg w-full xl:w-fit py-1 px-7 text-base rounded-3xl hover:cursor-pointer">{loading ? <div className='flex gap-2'><Loader2 className='animate-spin' /> Sending..</div> : "Send"}</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className='text-center py-2 md:pb-10'>
                <p className='text-sm xl:text-base'>© 2025 The Brand & Port. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer