import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user";
import moviesSlice from "./slices/movies";



const store=configureStore({
    reducer:{
        userReducer:userSlice.reducer,
        moviesReducer:moviesSlice.reducer
    }
})

export default store