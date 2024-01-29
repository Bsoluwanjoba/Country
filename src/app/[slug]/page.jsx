import React from 'react'

async function countries(){
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = response.json()
    return data
  }
  
export default function page() {
  return (
    <div>page</div>
  )
}
