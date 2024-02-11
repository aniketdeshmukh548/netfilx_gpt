import React from 'react'
import Header from './Header'
import useBrowsemovies from '../hooks/useBrowsemovies'
import Maincontainer from './Maincontainer'
import Secondarycontainer from './Secondarycontainer'

const Browse = () => {
  useBrowsemovies()
  return (
    <div>
      <Header />
      <Maincontainer />
      <Secondarycontainer />
    </div>
  )
}

export default Browse