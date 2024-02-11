import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:'movies',
    initialState:{
        browseMovies:null,
        movieTrailer:null
    },
    reducers:{
        addBrowseMovies:(state,action)=>{
            state.browseMovies=action.payload
        },
        addMovieTrailer:(state,action)=>{
            state.movieTrailer=action.payload
        }
    }
})

export const {addBrowseMovies,addMovieTrailer}=moviesSlice.actions
export default moviesSlice.reducer