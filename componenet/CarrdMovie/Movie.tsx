"use client"
import {  FaYoutube } from "react-icons/fa";
import type { IMovieApi } from "../../interfaces/moviesAPI"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


interface props{
    movie:IMovieApi,
    handleDelete:(id:number)=>void,
    showForm:(id:number)=>void
}
const Movie = ({movie,handleDelete,showForm}:props)=>{
    const [role,setRole]=useState()
    useEffect(()=>{
        const {role}=JSON.parse(localStorage.getItem("user") as string)
        setRole(role)
    },[])
    return(
        <>
            <div className="w-[250px] bg-white rounded-xl p-2 fede-up transition-all duration-300 hover:-translate-y-4 hover:scale-110">
                <div className="relative">
                            <Image width={300} height={400} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="img" className="rounded-xl" />
                            <Image width={300} height={400} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="img" className="absolute -bottom-10 left-4 w-[80px] roundaed-xl" />
                    <button title="youtube" className="absolute -bottom-5 right-4 bg-red-800 w-[50px] h-[50px] cursor-pointer text-white rounded-full"><FaYoutube className="mx-auto text-lg"/></button>
                </div>
                <div className="p-2">
                    <div className="text-right h-[30px] mt-3">
                        <h2 className="">{movie.title}</h2>
                    </div>
                    <div className="flex  items-start gap-3 mb-4">
                        <div  className="text-center">
                            <p className="textMovie">Length</p>
                            <p>01.37</p>
                        </div>
                        <div  className="text-center">
                            <p className="textMovie">Lang</p>
                            <p>{movie.original_language}</p>
                        </div>
                        <div  className="text-center">
                            <p className="textMovie">Rating</p>
                            <p>{movie.rate?movie.rate:4.5}</p>
                        </div>
                        <div className="text-center">
                            <p className="textMovie">Reviews</p>
                            <p>{movie.popularity?.toFixed(0) || 200}</p>
                        </div>
                    </div>
                    <div >
                        {role == "admin" &&
                            <div className="flex gap-2 mb-3">
                                <button onClick={()=>handleDelete(movie.id as number)} className="py-2 px-7 bg-red-800 text-white rounded-xl cursor-pointer border-2 border-red-800 transition-all duration-300 hover:bg-white hover:text-red-800">Delete</button>
                                <button onClick={()=>showForm(movie.id as number)} className="py-2 px-7 bg-sky-700 text-white rounded-xl cursor-pointer border-2 border-sky-700 transition-all duration-300 hover:bg-white hover:text-sky-700">Update</button>
                            </div>
                        }
                        <Link  href={`/blank/movies/${movie.id}`} className="bg-[#ee2132] text-white py-2 px-3 rounded-xl text-sm border border-[#ee2132]  block text-center transition-all duration-300 hover:bg-white w-full hover:text-[#ee2132]">Show More..</Link>
                    </div>
                </div>
            </div>
        </>
    )
}




export default Movie 