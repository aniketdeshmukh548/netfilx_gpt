
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addMovieTrailer } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const useGetMovies = (movie_id) => {
    const dispatch=useDispatch()
    const getMovieVideos=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/'+movie_id+'/videos?language=en-US',API_OPTIONS);
        const json=await data.json();
        console.log(json)
        const filterdata=json.results.filter((video)=>video.type==="Trailer");
        const trailer= filterdata.length ? filterdata[0] : json.results[0]
        console.log(trailer)
        dispatch(addMovieTrailer(trailer))
    }
    useEffect(()=>{
        getMovieVideos()
    },[])
}

export default useGetMovies