"use client"


import React, {useState} from 'react'
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx"
import { MdOutlineCancel } from "react-icons/md"


export default function Navbar() {
  const [showNav, setShowNav] = useState(false)


  function onClick(){
    setShowNav(!showNav)
  }


  return (
   <nav className='w-screen '>
    <div className='text-[35px]'>
    <RxHamburgerMenu  className={`${showNav ? 'hidden' : 'block md:hidden'} m-auto cursor-pointer text-white`} onClick={onClick} />
    <MdOutlineCancel className={`${showNav ? 'block md:hidden' : 'hidden'} m-auto cursor-pointer text-white`} onClick={onClick} />
    </div>
    <ul className={`md:flex md:flex-row ${showNav ? 'flex' : 'hidden'} flex-col justify-between md:h-20 h-[60vh] items-center md:w-screen w-[60%]`}>
      
       <Link href='/'> <li>All</li></Link>
       <Link href='/europe'> <li>Europe</li></Link>
       <Link href='/america'> <li>America</li></Link>
       <Link href='/africa'> <li>Africa</li></Link>
       <Link href='/asia'> <li>Asia</li></Link>
       <Link href='/oceania'> <li>Oceania</li></Link>
        
    </ul>
   </nav>
  )
}
