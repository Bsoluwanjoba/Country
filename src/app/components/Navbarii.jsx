"use client"
import React, { useState } from 'react'
import { MdCancel } from "react-icons/md";
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx"
import Image from 'next/image';

export default function Navbar() {
    const [showNav, setShowNav] = useState(false)
    

    function navbar(){
        setShowNav(!showNav)

    }
   
  return (
    <div>
        <nav>
           
            <div className='flex'> 
              <Image src='/android-chrome-512x512.png' width={50} height={50} alt="logo" className='md:hidden items-center'/>
            <ul className={`bg-[green] md:bg-transparent  md:text-white md:gap-3    md:relative md:flex md:flex-row flex flex-col fixed h-[100vh] md:h-[100%] w-[100%] top-0 bottom-0 left-0 items-center md:justify-center justify-between transition-transform transform ease-in-out duration-500 py-10 ${showNav ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
              
                <li><MdCancel className='cursor-pointer md:hidden text-3xl' onClick={navbar}/></li>
                <Link href='/' className='md:hover:bg-[green] md:p-3 md:rounded-lg md:duration-500 md:ease-in-out hover:bg-black p-3 rounded-lg duration-500 ease-in-out '> <li>All</li></Link>
       <Link href='/america' className=' md:hover:bg-[green] md:p-3 md:rounded-lg md:duration-500 md:ease-in-out hover:bg-black p-3 rounded-lg duration-500 ease-in-out '> <li>America</li></Link>
       <Link href='/africa' className='md:hover:bg-[green] md:p-3 md:rounded-lg md:duration-500 md:ease-in-out hover:bg-black p-3 rounded-lg duration-500 ease-in-out '> <li>Africa</li></Link>
       <Link href='/asia' className='md:hover:bg-[green] md:p-3 md:rounded-lg md:duration-500 md:ease-in-out hover:bg-black p-3 rounded-lg duration-500 ease-in-out '> <li>Asia</li></Link>
       <Link href='/europe' className='md:hover:bg-[green] md:p-3 md:rounded-lg md:duration-500 md:ease-in-out hover:bg-black p-3 rounded-lg duration-500 ease-in-out '> <li>North America</li></Link>
       <Link href='/oceania' className='md:hover:bg-[green] md:p-3 md:rounded-lg md:duration-500 md:ease-in-out hover:bg-black p-3 rounded-lg duration-500 ease-in-out '> <li>Oceania</li></Link>
            </ul>
            <RxHamburgerMenu onClick={navbar} className='text-4xl md:hidden cursor-pointer text-[green] ml-auto mt-[10px]' />

            </div>
            
        </nav>
    </div>
  )
}