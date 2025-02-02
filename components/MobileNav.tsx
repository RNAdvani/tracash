"use client"
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Link from 'next/link'
  
const MobileNav = ({user}:MobileNavProps) => {
    const pathName = usePathname();
  return (
    <section className='w-full max-w-[264px]' >
        <Sheet>
  <SheetTrigger>
    <Image src='/icons/hamburger.svg'height={30} width={30} alt='nav-logo' className='cursor-pointer'/>
  </SheetTrigger>
  <SheetContent side={"left"} className='border-none bg-white' >
  <Link href="/" className='mb-12 flex cursor-pointer items-center gap-2' >
        <Image src={"/icons/logo.svg"} width={34} height={34} alt='logo' className='size-[24px] max-xl:size-14' />
        <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Tracash</h1>
    </Link>

    <div className="mobilenav-sheet">
      <SheetClose asChild >
      <nav className="flex flex-col h-full gap-6 pt-16 text-white">
            {
                sidebarLinks.map((i)=>{
                    const isActive = pathName === i.route || pathName.startsWith(`${i.route}/`);
                    return <SheetClose asChild >
                        <Link href={i.route} key={i.label} className={cn("mobilenav-sheet_close w-full",{"bg-bank-gradient":isActive})}>
                        <Image src={i.imgURL} alt={i.label} width={20} height={20} className={cn({'brightness-[3] invert-0':isActive})} />
                    <p className={cn("text-16 font-semibold text-black-2", { "!text-white": isActive })}>
                        {i.label}
                    </p>
                </Link>
                    </SheetClose>})
            }   
        </nav>
      </SheetClose>
    </div>

  </SheetContent>
</Sheet>

    </section >
  )
}

export default MobileNav