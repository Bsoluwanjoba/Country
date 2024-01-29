"use client"
import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { FaContao } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import Link from 'next/link';
// import styles from './main.module.css'

export default function Navbar() {
    const [showNav, setShowNav] = useState(false)
    

    function navbar(){
        setShowNav(!showNav)

    }
   
  return (
    <div>
        <nav>
           
            <div> 
            <ul className={`bg-[green] md:bg-transparent  md:text-white md:gap-9    md:relative md:flex md:flex-row flex flex-col fixed h-[100vh] md:h-[100%] w-[100%] top-0 bottom-0 left-0 items-center justify-around transition-transform transform ease-in-out duration-500 py-10 ${showNav ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} `}>
              
                <li><MdCancel className='cursor-pointer md:hidden text-3xl' onClick={navbar}/></li>
                <Link href='/' className='hover:bg-black p-3 rounded-lg duration-500 ease-in-out '> <li>All</li></Link>
       <Link href='/america' className='hover:bg-black p-3 rounded-lg duration-500 ease-in-out '> <li>America</li></Link>
       <Link href='/africa' className='hover:bg-black p-3 rounded-lg duration-500 ease-in-out '> <li>Africa</li></Link>
       <Link href='/asia' className='hover:bg-black p-3 rounded-lg duration-500 ease-in-out '> <li>Asia</li></Link>
       <Link href='/europe' className='hover:bg-black p-3 rounded-lg duration-500 ease-in-out '> <li>North America</li></Link>
       <Link href='/oceania' className='hover:bg-black p-3 rounded-lg duration-500 ease-in-out '> <li>Oceania</li></Link>
            </ul>
            <CiMenuFries onClick={navbar} className='text-5xl md:hidden cursor-pointer text-[green] ml-auto' />

            </div>
            
        </nav>
    </div>
  )
}