import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMovies=createAsyncThunk("movie/get",async()=>{
    const {results}=await(await fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7",{next:{revalidate:60*60}})).json();
    return results;
})

const moviesSlice=createSlice({
    name:"movie",
    initialState:{movies:[],loading:false,errors:""},
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getMovies.fulfilled,(state,action)=>{state.movies=action.payload;state.loading=false});
        builder.addCase(getMovies.pending,(state)=>{state.loading=true});
        builder.addCase(getMovies.rejected,(state,action)=>{state.errors=action.error.message;state.loading=false});
    }
})

export default moviesSlice
