import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:'movies',
    initialState:{
        browseMovies:null,
        movieTrailer:null,
        popularMovies:null,
        topratedMovies:null,
        upcomingMovies:null
    },
    reducers:{
        addBrowseMovies:(state,action)=>{
            state.browseMovies=action.payload
        },
        addMovieTrailer:(state,action)=>{
            state.movieTrailer=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addTopratedMovies:(state,action)=>{
            state.topratedMovies=action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload
        }
    }
})

export const {addBrowseMovies,addMovieTrailer,addPopularMovies,addTopratedMovies,addUpcomingMovies}=moviesSlice.actions
export default moviesSlice.reducer