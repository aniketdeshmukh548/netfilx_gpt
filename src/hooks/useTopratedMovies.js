
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addTopratedMovies } from '../utils/movieSlice'
import { API_OPTIONS } from '../utils/constants'

const useTopratedMovies = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
      topratedMovies()
    },[])
    const topratedMovies=async()=>{
      const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
      const json= await data.json();
      //console.log(json)
      dispatch(addTopratedMovies(json.results))
    }
}

export default useTopratedMovies