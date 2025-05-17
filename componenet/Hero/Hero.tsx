import Image from 'next/image'
import { MdOutlineSlowMotionVideo } from 'react-icons/md'
import SliderImage from '../SliderImage/SliderImage'

const getMovies=async()=>{
    const results=await(await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies`,{next:{revalidate:60*60}})).json();
    return results;
}

const Hero = async() => {
    const movies=await getMovies()
  return (
    <div className=" min-h-[115vh] relative overflow-hidden ">
        
        <Image src={'/images/R1.jpg'} width={1000} height={700} alt='image' className='absolute top-0 left-0 w-full -z-10'/>
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-30'></div>
        <div className='absolute top-1/3 px-10 -translate-y-[60%] '>
            <h2 className='text-5xl font-bold uppercase text-white fede-down'>Caption Americane:</h2>
            <h2 className='text-5xl font-bold uppercase text-white fede-up'>The Wimter Soldier</h2>
            <p className='text-sm font-bold uppercase text-white my-1 fede-left'>chris Samuel L.jackson Scarlet  johanSSon</p>
            <p className='text-sm font-bold uppercase text-white mb-3 fede-rigth'>2HRS 16 mins - 14 Sept,2014</p>
            <p className=' text-white w-[600px] fede-up'>As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.</p>
        </div>
        <div className='absolute top-6/12 ] px-10  flex gap-7   '>
            <button className='fede-left bg-[#ee2132] text-white px-5 py-2 flex gap-2 items-center rounded-lg transition-all duration-300 hover:bg-black hover:text-white cursor-pointer'>TRAILER <MdOutlineSlowMotionVideo /></button>
            <button className='fede-rigth px-5 py-2  border-2 border-[#ee2132] text-white rounded-lg transition-all duration-300 hover:bg-[#ee2132] hover:text-white cursor-pointer'>TRAILER </button>
        </div>
        <div className='absolute top-[60%] overflow-x-scroll flex gap-7 w-full px-5 hide-scrollbar fede-down '>
            <SliderImage movies={movies} />
        </div>
    </div>
  )
}

export default Hero 
