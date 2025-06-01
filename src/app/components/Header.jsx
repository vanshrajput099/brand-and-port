"use client";
import React from 'react'
import logo from "@/assets/logo.png"
import Link from 'next/link'
import { HEADER_NAVS } from '@/data'
import { Menu } from 'lucide-react';
import NavSheet from './NavSheet'
import { usePathname } from 'next/navigation';

const Header = () => {

    const pathname = usePathname();

    return (
        <div className='flex absolute xl:-translate-x-1/2 xl:left-1/2 w-full xl:justify-between items-center xl:w-[85%] mx-auto py-10 border-b-2 border-b-gray-700'>
            <Link href={"/"}>
                <img src={logo.src} alt='brandLogo.png' className='w-[300px] h-[60px] hidden xl:block hover:cursor-pointer' />
            </Link>
            <div className='flex flex-row-reverse justify-between items-center w-full px-5 mx-auto xl:hidden'>
                <NavSheet>
                    <Menu className='xl:hidden' />
                </NavSheet>
                <Link href={"/"}>
                    <img src={logo.src} alt='brandLogo.png' className='w-[200px] h-[40px] hover:cursor-pointer' />
                </Link>
            </div>
            <div className='gap-5 xl:w-[60%] hidden xl:flex xl:justify-between'>
                {
                    HEADER_NAVS.map((ele, idx) => {
                        return <Link key={idx} className={`body-text text-base hover:cursor-pointer ${pathname === ele.href && "orange-text"}`} href={ele.href}>
                            {ele.name}
                        </Link>
                    })
                }
            </div>
        </div>
    )
}

export default Header