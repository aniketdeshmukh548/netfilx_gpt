import React from 'react'
import Videobackground from './Videobackground'
import VidTitle from './VidTitle'
import { useSelector } from 'react-redux'

const Maincontainer = () => {
    const movies=useSelector(store=>store.movies?.browseMovies)
    if (movies===null) return;
    const mainMovie=movies[7];
    console.log(mainMovie)
    const {original_title,overview,id}=mainMovie
  return (
    <div>
        <VidTitle title={original_title} overview={overview}/>
        <Videobackground movie_id={id} />
    </div>
  )
}

export default Maincontainer