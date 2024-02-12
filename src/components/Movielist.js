import React from 'react'
import Moviecard from './Moviecard'

const Movielist = ({title,movies}) => {
    console.log(title,movies)
  return (
    <div className=' px-6'>
        <h1 className=' text-3xl py-2 text-white'>{title}</h1>
        <div className=' flex overflow-x-scroll'>
            <div className=' flex'>
                {movies?.map((movie)=><Moviecard key={movie.id} poster_path={movie.poster_path}/>)}
            </div>
        </div>
    </div>
  )
}

export default Movielist