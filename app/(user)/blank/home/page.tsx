"use client"
import Hero from '@/componenet/Hero/Hero'
import React, { useEffect, useState } from 'react'


const Page = () => {
  const [movies,setMovies]=useState<[]>([])
  useEffect(()=>{
  (async()=>{
      const results =await(await fetch(`/api/movies`,{
      cache: 'no-store'
    })).json();
    setMovies(results)
  })()
},[])

  return (
    <div>
      <Hero movies={movies}/>
    </div>
  )
}

export default Page
