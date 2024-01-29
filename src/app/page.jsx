import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'

async function countries(){
  const response = await fetch('https://restcountries.com/v3.1/all')
  const data = response.json()
  return data
}

export default async function Home() {
  const data = await countries()
  const names = data.map(country => (
    <aside key={country.ccn3} className='gap-4'>
      <Image src={country.flags.svg} width={80} height={150} className='rounded-lg ' />
      <h2 className='text-[15px]'>{country.name.common}</h2>
      <p className='text-[13px]'>{country.continents}</p>
      <Link href={country.maps.googleMaps} target='_blank' className='bg-[green] p-1 rounded-md leading-10'>Go to Map</Link>
      
    </aside>
  ))
  
  const countryTotal = data.length
  return (
    <div>
    <h2 className=''>Total Number of Countries: {countryTotal}</h2>

    <section className='grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-y-9 py-[2em] ml-[40px]'>
      {names}
    </section>
    </div>
  )
}
