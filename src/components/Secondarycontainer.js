import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'

const Secondarycontainer = () => {
  const movies=useSelector(store=>store.movies)
  return  (
    movies.browseMovies && (
    <div className=' bg-black w-screen'>
      <div className=' -mt-52 pl-12 relative z-20'>
      <Movielist title={"Now Playing"} movies={movies.browseMovies}/>
      <Movielist title={"Top Rated"} movies={movies.topratedMovies}/>
      <Movielist title={"Popular"} movies={movies.popularMovies}/>
      <Movielist title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
    </div>
    </div>
    )
  )
}

export default Secondarycontainer