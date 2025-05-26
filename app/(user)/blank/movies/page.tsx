"use client"
import Movie from '@/componenet/CarrdMovie/Movie';
import { inputFormAddMovie } from '@/data/addMovieForm';
import { IMovieApi } from '@/interfaces/moviesAPI';
import React, { useEffect, useReducer, useState } from 'react'
import { Bounce, toast } from 'react-toastify';


type IState={
  [key:string]:string  
}
type IAction={
  type:string,
  field:string,
  value:string
}
type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  rate:number;
  original_language:string;
  vote_count:number;
  genres?: { id: number; name: string }[]
};
  // //ISG
  // const GetMovies= async()=>{
  //   return results
  // }
  const Page = () => {
    const [movies,setMovies]=useState([])
    const [movie,setMovie]=useState<Movie>()
    const [movieId,setMovieId]=useState(0)
    useEffect(()=>{
      (async()=>{
          const results =await(await fetch(`/api/movies`,{
          cache: 'no-store'
        })).json();
        setMovies(results)
      })()
    },[])

    // useEffect(()=>{
    //     (async()=>{
    //         const results =await(await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/${movieId}`,{
    //         cache: 'no-store'
    //       })).json();
    //       setMovie(results)
    //       console.log(movie,"one")
    //     })()
    // },[movieId])

    const deleteMovie=async(id:number)=>{
          const res=await(await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/${id}`,{
              method:"DELETE"
          })).json()
          setMovies(res)
      }
    const showForm=async(id:number)=>{
      setMovieId(id);
      console.log(id,"one1")
            const results =await(await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/${id}`,{
            cache: 'no-store'
          })).json();
          setMovie(results)
          console.log(movie)
    }


  // update movie
    const initState={
      title:"",
      rate:"",
      poster_path:"",
      original_language:""
    }
    const reducer=(state:IState,action:IAction)=>{
      if(action.type == "input"){
        return {...state,[action.field]:action.value}
      }
      return state
    }
    const [state,dispatich]=useReducer(reducer,initState);
  
    const getDate=(e:React.ChangeEvent<HTMLInputElement>)=>{
      dispatich({
        type:'input',
        field:e.target.name,
        value:e.target.value
      })
    }

    useEffect(()=>{
      if(movie){
        dispatich({type:"input",field:"title",value:movie?.title ||""})
        dispatich({type:"input",field:"rate", value: movie?.rate !== undefined ? movie.rate.toString() : ""})
        dispatich({type:"input",field:"poster_path",value:movie?.poster_path || ""})
        dispatich({type:"input",field:"original_language",value:movie?.original_language || ""})
      }
    },[movie])

      const notify = () =>{
      toast.error(`you must fill the fields`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });;
    };
      const notify2 = () =>{
      toast.success(`Your Film Added`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });;
    };
    const handleUpdataMovie=async(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      if(state.rate && state.poster_path && state.title&& state.original_language ){
        const res =await(await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/${movieId}`,{
          method:"PUT",
          body:JSON.stringify(state)
        })).json()
        console.log(res,"resssssssssss")
        setMovies(res)
        notify2()
        setTimeout(()=>{
          setMovieId(0)
        },1500)
      }else{
        notify()
      }
    }
  return (
    <div className='min-h-[98vh] bg-[#161a1e] pb-20'>
      <div className='w-[90%] mx-auto pt-30 '>
        <h2 className='text-4xl font-bold text-white fede-left'>All Movies</h2>
        <div className=' flex justify-between flex-wrap gap-y-10 gap-x-3 mt-8'>
          {movies.map((item:IMovieApi)=> <Movie key={item.id} handleDelete={deleteMovie} showForm={showForm} movie={item}/>)}
        </div>
      </div>
      {movieId >0 &&
      <div className='bg-[#161a1e]  fixed top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[70%] rounded-2xl fade-in-up'>
        <h1 className="text-center text-4xl font-semibold mb-10 mt-25 text-[#9d2735]">Updata Movie</h1>
          <form onSubmit={handleUpdataMovie} className="w-[90%] md:w-[50%] m-auto text-white mb-25 relative">
            <button onClick={()=>setMovieId(0)} className='absolute -top-16 -right-5 text-white text-2xl transition-all duration-300 hover:text-red-700 hover:rotate-180 cursor-pointer '>X</button>
            {inputFormAddMovie.map((item,index)=>{
              return(
                <div key={index} className="mb-5" >
                  <input placeholder={item.name} name={item.name} onChange={getDate} value={state[item.name]} type={item.type} className={`border-b-2 w-full placeholder:text-lg placeholder:font-[400]  p-2 outline-0 ${item.animation}`} />
                </div>
              )
            })}
              <input type="submit" value={"Update Movie"} className="bg-[#9d2735] text-white block w-full mt-7 rounded-xl p-2 border-2 border-[#9d2735] transition-all duration-300 hover:bg-white hover:text-[#9d2735] cursor-pointer fede-up" />
          </form>
      </div>
      }
    </div>
  )
}

export default Page
