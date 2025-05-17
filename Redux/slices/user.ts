import { createSlice } from "@reduxjs/toolkit";



const userSlice=createSlice({
    name:"user",
    initialState:{token:""},
    reducers:{
        checkToken:(state,action)=>{
            state.token=action.payload
        },
        clearLocalStorage:(state)=>{
            localStorage.clear();
            state.token="";
        }
    }
})


export default userSlice
export const {checkToken,clearLocalStorage}=userSlice.actions