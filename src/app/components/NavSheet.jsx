"use client";
import React, { useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { HEADER_NAVS } from '@/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const NavSheet = ({ children }) => {

    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    console.log(pathname)

    const handleOpen = () => {
        setTimeout(() => {
            setOpen(false);
        }, 100)
    }

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>{children}</SheetTrigger>
            <SheetHeader ></SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
            <SheetContent side='left' className={'w-[200px] bg-black border-none'}>
                <div className='flex flex-col items-center mt-10 text-center'>
                    {
                        HEADER_NAVS.map((ele, idx) => {
                            return <Link onClick={handleOpen} className='body-text text-sm w-full border-b-1 border-b-gray-800 py-5' key={idx} href={ele.href}>
                                <span className={`${pathname === `${ele.href}` && "orange-text"}`}>{ele.name}</span>
                            </Link>
                        })
                    }
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default NavSheet