import React from 'react'
import { useSelector } from 'react-redux'
import useGetMovies from '../hooks/useGetMovies'

const Videobackground = ({movie_id}) => {
    const trailerVideo=useSelector(store=>store.movies?.movieTrailer)
    useGetMovies(movie_id)
  return (
    <div className=' w-screen'>
        <iframe className=' w-screen aspect-video' src={"https://www.youtube.com/embed/"+ trailerVideo?.key + "?&autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default Videobackground