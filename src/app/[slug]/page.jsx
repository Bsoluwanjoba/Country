import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

async function countries (){
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = response.json()
    return data
  }
  
  export default async function page( {params} ) {
    const scode = await countries()

    const countryDetail = scode.find(country => country.name.common.split(' ').join('-') == params.slug)


  return (
    <div>
     <section className='m-auto'>
     <Image src= {countryDetail.flags.svg} width={500} height={500} className='rounded-lg' />
      <h2 className='text-5xl'>{countryDetail.name.common}</h2>
      <Link href={countryDetail.maps.googleMaps} target='_blank' className='bg-[green] p-1 rounded-md leading-10'>Go to Map</Link>

     </section>

      

      </div>
  )
}