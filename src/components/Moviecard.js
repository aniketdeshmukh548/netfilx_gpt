import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const Moviecard = ({poster_path}) => {
    return (
        <div className=' w-48 pr-3'>
            <img src={IMG_CDN_URL+poster_path} alt="" />
        </div>
      )
}

export default Moviecard