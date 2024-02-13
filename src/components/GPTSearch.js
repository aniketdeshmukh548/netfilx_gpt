import React from 'react'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import GptsearchBar from './GptsearchBar'
import { BG_IMG } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>
        <div className=' absolute -z-20'>
            <img src={BG_IMG} alt="bg-img" />
        </div>
        <GptsearchBar />
        <GPTMovieSuggestion />
    </div>
  )
}

export default GPTSearch