'use client';
import { inputFormAddMovie } from '@/data/addMovieForm';
import { useRouter } from 'next/navigation';
import { useEffect, useReducer, useState } from 'react';
import { Bounce, toast, ToastContainer } from 'react-toastify';
type IState={
  [key:string]:string  
}
type IAction={
  type:string,
  field:string,
  value:string
}

const Page =() => {
  const [role,setRole]=useState()
  useEffect(()=>{
      const {role}=JSON.parse(localStorage.getItem("user") as string)
      setRole(role)
  },[])
  const navigate=useRouter()
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
    // const submit=(e:React.FormEvent<HTMLFormElement>)=>{
    //   e.preventDefault()
    //     const convertedMovie: IMovieApi = {
    //       ...state,
    //       rate: 0, 
    //     };
        
    // }
      const notify = () =>{
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
      const notify2 = (reason:string) =>{
      toast.error(reason, {
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

    const handleAddMovie=async(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      if(role == "admin"){
        if(state.rate && state.poster_path && state.title&& state.original_language ){
          console.log("sssssss")
          const res =await(await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies`,{
            method:"POST",
            body:JSON.stringify(state)
          })).json()
          console.log(res)
          notify()
          setTimeout(()=>{
            navigate.replace('movies')
          },1500)
        }else{
          notify2(`you must fill the fields`)
        }
      }else{
        notify2("You can't add the movie: Unauthorized access")
      }
    }
    return (
      <>
        {/* {errMessage && <div className="fixed top-32 right-0 bg-red-700 text-white p-2 px-5 w-fit rounded-l-xl">{errMessage} </div>} */}
        
        <h1 className="text-center text-4xl font-semibold mb-10 mt-25 text-[#9d2735]">{"Add New Movie"}</h1>
        <form onSubmit={handleAddMovie} className="w-[90%] md:w-[50%] m-auto text-white mb-25">
          {inputFormAddMovie.map((item,index)=>{
            return(
              <div key={index} className="mb-5" >
                <input placeholder={item.name} name={item.name} onChange={getDate} value={state[item.name]} type={item.type} className={`border-b-2 w-full placeholder:text-lg placeholder:font-[400]  p-2 outline-0 ${item.animation}`} />
              </div>
            )
          })}
            <input type="submit" value={"Add Movie"} className="bg-[#9d2735] text-white block w-full mt-7 rounded-xl p-2 border-2 border-[#9d2735] transition-all duration-300 hover:bg-white hover:text-[#9d2735] cursor-pointer fede-up" />
        </form>
        <ToastContainer/>
      </>
    )
}

export default Page
