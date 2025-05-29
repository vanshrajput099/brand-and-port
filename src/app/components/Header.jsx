import Image from 'next/image'
import React from 'react'
import brandLogo from "@/assets/brandLogo.png"
import Link from 'next/link'
import { HEADER_NAVS } from '@/data'
import { Menu } from 'lucide-react';

const Header = () => {
    return (
        <div className='flex absolute xl:-translate-x-1/2 xl:left-1/2 w-full xl:justify-between items-center xl:w-[60%] mx-auto py-10 border-b-2 border-b-gray-700'>
            <Image src={brandLogo.src} alt='brandLogo.png' height={200} width={300} className='w-[180px] h-[30px] hidden xl:block' />
            <div className='flex justify-between items-center w-[90%] mx-auto xl:hidden'>
                <Menu className='xl:hidden' />
                <Image src={brandLogo.src} alt='brandLogo.png' height={200} width={300} className='w-[180px] h-[30px]' />
            </div>
            <div className='gap-7 hidden xl:flex'>
                {
                    HEADER_NAVS.map((ele, idx) => {
                        return <Link className='body-text text-sm' key={idx} href={ele.href}>{ele.name}</Link>
                    })
                }
            </div>
        </div>
    )
}

export default Header