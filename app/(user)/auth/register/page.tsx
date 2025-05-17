"use client"
import { useReducer, useState } from "react"
import { inputregister } from "@/data/registerForm"
import { useRouter } from "next/navigation"
import { Bounce, toast, ToastContainer } from "react-toastify"

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
  const [role,setRole]=useState("")
  const initState={
    name:"",
    email:"",
    password:"",
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
      toast.success(`Registeration Success`, {
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
      toast.error(`Please Fill Your Fields`, {
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
    if(role && state.name && state.email && state.password){
      localStorage.setItem("user",JSON.stringify({...state,role:role}));
      notify()
      setTimeout(()=>{
        navgite.replace("/auth/login")
      },1500)
    }else{
      notify2()
    }
  }
  return (
    <div className="min-h-[80vh] bg-[#161a1e] flex justify-between items-center">
      <form onSubmit={submitDate} className="w-[90%] md:w-[50%] m-auto">
        <h1 className="text-center text-4xl font-semibold mb-10 text-[#9d2735] fede-up">Register Page</h1>
        {
          inputregister.map((item,index)=>{
            return(
              <div key={index} className="mb-7">
                <input type={item.type}  placeholder={item.name} name={item.name} className={`border-b-2 w-full text-white placeholder:text-lg placeholder:font-[400] placeholder:text-white border-white p-2 outline-0 ${item.animation}`} value={state[item.name]} onChange={getData} />
              </div>
            )
          })
        }   
          <h2 className="text-white text-lg mb-3 ml-2">Role:</h2>
          <div  className="mb-7 w-[90%] mx-auto text-center">
            <button type="button" onClick={()=>setRole("admin")}  className={` ${role == "admin" ? "bg-white text-[#9d2735]":"bg-[#781824] text-white "} py-2.5 mr-3 px-5 rounded-xl transition-all duration-300 hover:bg-white hover:text-[#9d2735] cursor-pointer w-[150px]`}>Admin</button>
            <button type="button"  onClick={()=>setRole("user")} className={` ${role == "user"? "bg-white text-[#9d2735]":"bg-[#781824] text-white "}  py-2.5 mr-3 px-5 rounded-xl transition-all duration-300 hover:bg-white hover:text-[#9d2735] cursor-pointer w-[150px]`}>User</button>
          </div>
        <input type="submit" value={'Submit'} className="bg-[#9d2735] text-white block w-full rounded-xl p-2 border-2 border-[#161a1e] transition-all duration-300 hover:bg-white hover:text-black cursor-pointer fede-up" />
      </form>
      <ToastContainer/>
    </div>
  )
}

export default Page
