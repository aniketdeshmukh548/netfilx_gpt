import React from 'react'
import Header from './Header'
import useBrowsemovies from '../hooks/useBrowsemovies'
import Maincontainer from './Maincontainer'
import Secondarycontainer from './Secondarycontainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopratedMovies from '../hooks/useTopratedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'

const Browse = () => {
  useBrowsemovies()
  usePopularMovies()
  useTopratedMovies()
  useUpcomingMovies()
  return (
    <div>
      <Header />
      <Maincontainer />
      <Secondarycontainer />
    </div>
  )
}

export default Browse