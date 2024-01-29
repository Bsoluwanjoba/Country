import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

async function countries(){
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = response.json()
    return data
  }


  
  
  export default async function page() {
      const data = await countries()
      const oceania = data.filter(country => country.continents == 'Oceania')
      const oceaniaCard = oceania.map(country => (
        <aside key={country.ccn3} className='gap-4'>
          <Link href={country.name.common.split(' ').join('-')}>
          <Image src={country.flags.svg} width={80} height={150} className='rounded-lg ' /></Link>
          <h2 className='text-[15px]'>{country.name.common}</h2>
          <p className='text-[13px]'>{country.continents}</p>
          <Link href={country.maps.googleMaps} target='_blank' className='bg-[green] p-1 rounded-md leading-10'>Go to Map</Link>
          
        </aside>
      ))
      const countryTotal = oceania.length
  return (
    <div>
        <h1>Total Number of Countries: {countryTotal}</h1>


        <div className='grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-y-9 py-[2em] ml-[40px]'>{oceaniaCard}</div>
    </div>
  )
}
