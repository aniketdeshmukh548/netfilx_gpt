import React from 'react'
import Header from './Header'
import useBrowsemovies from '../hooks/useBrowsemovies'
import Maincontainer from './Maincontainer'
import Secondarycontainer from './Secondarycontainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopratedMovies from '../hooks/useTopratedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import GPTSearch from './GPTSearch'
import { useSelector } from 'react-redux'

const Browse = () => {
  const showgptSearch=useSelector(store=>store.gpt.showgptSearch)
  useBrowsemovies()
  usePopularMovies()
  useTopratedMovies()
  useUpcomingMovies()
  return (
    <div>
      <Header />
      {
        showgptSearch ? <GPTSearch /> :
        <>
          <Maincontainer />
          <Secondarycontainer />
        </>
      }
    </div>
  )
}

export default Browse