"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from "@/assets/logo.png"
import Link from 'next/link'
import { HEADER_NAVS } from '@/data'
import { Menu } from 'lucide-react';
import NavSheet from './NavSheet'
import { usePathname } from 'next/navigation';

const Header = () => {

    const pathname = usePathname();

    return (
        <div className='flex absolute xl:-translate-x-1/2 xl:left-1/2 w-full xl:justify-between items-center xl:w-[80%] mx-auto py-10 border-b-2 border-b-gray-700'>
            <Link href={"/"}>
                <Image src={logo.src} alt='brandLogo.png' height={200} width={300} className='h-fit w-[70%] hidden xl:block hover:cursor-pointer' />
            </Link>
            <div className='flex justify-between items-center w-[90%] mx-auto xl:hidden'>
                <NavSheet>
                    <Menu className='xl:hidden' />
                </NavSheet>
                <Link href={"/"}>
                    <Image src={logo.src} alt='brandLogo.png' height={200} width={300} className='h-fit hover:cursor-pointer' />
                </Link>
            </div>
            <div className='gap-7 hidden xl:flex'>
                {
                    HEADER_NAVS.map((ele, idx) => {
                        return <Link key={idx} className={`body-text text-sm hover:cursor-pointer ${pathname === ele.href && "orange-text"}`} href={ele.href}>
                            {ele.name}
                        </Link>
                    })
                }
            </div>
        </div>
    )
}

export default Header