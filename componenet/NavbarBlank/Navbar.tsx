"use client"
import Link from 'next/link'
import { usePathname  } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoPerson } from 'react-icons/io5'

const Navbar =  () => {
    const pathname= usePathname ();
    const router = useRouter();

    const [user,setUser]=useState()
      useEffect(()=>{
          const user=JSON.parse(localStorage.getItem("user") as string)
          setUser(user)
      },[])

    const handleLogout=()=>{
        if (typeof window !== 'undefined') {
            localStorage.clear()
        }
        setTimeout(()=>{
            router.push("/auth/login")
        },1000)
    }

  return (
    <div className='fixed top-0 left-0 w-full z-10 text-white backdrop-blur-sm '>
        <nav className='flex justify-between items-center container mx-auto py-5'>
            <Link className='text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r  from-[#9d2735] to-[#54060f] scale-y-125 border-0 outline-0 fade-in-up' href="/">Moviee</Link>
            <ul className='flex gap-7'>
                <li className='text-lg font-semibold transition-all duration-300 hover:scale-105 fede-up'>
                    <Link href='/blank/home' className={`${pathname == '/'?"active":""}`} >Home</Link>
                </li>
                <li className='text-lg font-semibold transition-all duration-300 hover:scale-105 fede-down'>
                    <Link href='/blank/movies' className={`${pathname == '/movies'?"active":""}`}>Movies</Link>
                </li>
                <li className='text-lg font-semibold transition-all duration-300 hover:scale-105 fede-up'>
                    <Link href='/blank/addmovie' className={`${pathname == '/addmovie'?"active":""}`}>Add Movie</Link>
                </li>

                {!user ?
                <li className='text-lg font-semibold transition-all duration-300 hover:scale-105 fede-up'>
                    <Link href={'/auth/login'} className={`${pathname == '/logout'?" active":""} cursor-pointer`}>Login</Link>
                </li>
                :
                <li className='text-lg font-semibold transition-all duration-300 hover:scale-105 fede-up'>
                    <button className={`${pathname == '/logout'?" active":""} cursor-pointer`} onClick={()=>handleLogout()}>Logout</button>
                </li>
                }
            </ul>
            <div className='flex gap-7 text-xl'>
                <CiSearch className='fade-in-up'/>
                <IoPerson className='fade-in-down'/>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
