"use client"
import Link from 'next/link'
import { usePathname  } from 'next/navigation'
import { CiSearch } from 'react-icons/ci'
import { IoPerson } from 'react-icons/io5'

const Navbar =  () => {
    const pathname= usePathname ();


  return (
    <div className='fixed top-0 left-0 w-full z-10 text-white backdrop-blur-sm '>
        <nav className='flex justify-between items-center container mx-auto py-5'>
            <Link className='text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r  from-[#9d2735] to-[#54060f] scale-y-125 border-0 outline-0 fade-in-up' href="/">Moviee</Link>
            <ul className='flex gap-7'>
                <li className='text-lg font-semibold transition-all duration-300 hover:scale-105 fede-up'>
                    <Link href='/blank/home' className={`${pathname == '/'?"active":""}`} >Home</Link>
                </li>
                <li className='text-lg font-semibold transition-all duration-300 hover:scale-105 fede-down'>
                    <Link href='/auth/login' className={`${pathname == '/login'?" active":""}`}>Login</Link>
                </li>
                <li className='text-lg font-semibold transition-all duration-300 hover:scale-105 fede-up'>
                    <Link href='/auth/register' className={`${pathname == '/register'?" active":""}`}>Register</Link>
                </li>
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
