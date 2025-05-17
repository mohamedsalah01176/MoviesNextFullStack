"use client"

import { useEffect, useState } from "react"


const Daishboar = () => {
  const [movies,setMovies]=useState();
  useEffect(()=>{
    (async()=>{
      const {results}=await(await fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7")).json();
      setMovies( results)
    })()
  },[])

  console.log(movies)
  return (
    <div>
      dashboard
    </div>
  )
}

export default Daishboar
