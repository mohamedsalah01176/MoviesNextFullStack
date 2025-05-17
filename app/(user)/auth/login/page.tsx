"use client"
import { useEffect, useReducer, useState } from "react"

import { useRouter } from "next/navigation"
import { inputlogin } from "@/data/loginForm"
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



type IState={
  [key:string]:string
}

type IAction={
  type:string,
  field:string,
  value:string
}

const Page = () => {
  const navgite=useRouter()
  const [user,setUser]=useState<{name:string}>();
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem("user")as string))

  },[])

  const initState={
    name:"",
    email:"",
    password:""
  }
  const reducer=(state:IState,action:IAction)=>{
    if(action.type == "input"){
      return {...state,[action.field]:action.value}
    }
    else{
      return state
    }
  }

  const [state,disptich]=useReducer(reducer,initState);

  const getData=(e:React.ChangeEvent<HTMLInputElement>)=>{
    disptich({
      type:"input",
      field:e.target.name,
      value:e.target.value
    })
  }
  const notify = () =>{
      toast.success(`Welcome ${user?.name}`, {
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
      toast.error(`Your Email or Passwor Incorrect`, {
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
  const submitDate=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const {email,password}=JSON.parse(localStorage.getItem("user") as string);
    if(email == state.email && password == state.password){
      setTimeout(()=>{
        navgite.replace("/blank/home")
      },1500)
      notify()
    }else{
      notify2()
    }
  }
  return (
    <div className="min-h-[80vh] bg-[#161a1e] flex justify-between items-center">
      <form onSubmit={submitDate} className="w-[90%] md:w-[50%] m-auto">
        <h1 className="text-center text-4xl font-semibold mb-10 text-[#9d2735] fede-up">Login Page</h1>
        {
          inputlogin.map((item,index)=>{
            return(
              <div key={index} className="mb-7">
                <input type={item.type} required placeholder={item.name} name={item.name} className={`border-b-2 w-full text-white placeholder:text-lg placeholder:font-[400] placeholder:text-white border-white p-2 outline-0 ${item.animation}`} value={state[item.name]} onChange={getData} />
              </div>
            )
          })
        }
        <input type="submit" value={'Submit'} className="bg-[#9d2735] text-white block w-full rounded-xl p-2 border-2 border-[#161a1e] transition-all duration-300 hover:bg-white hover:text-black cursor-pointer fede-up" />
      </form>
      <ToastContainer/>
    </div>
  )
}

export default Page
