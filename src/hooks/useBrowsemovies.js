
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addBrowseMovies } from '../utils/movieSlice'
import { API_OPTIONS } from '../utils/constants'

const useBrowsemovies = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
      browseMovies()
    },[])
    const browseMovies=async()=>{
      const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const json= await data.json();
      //console.log(json)
      dispatch(addBrowseMovies(json.results))
    }
}

export default useBrowsemovies