import React from 'react'
const VidTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className=' text-6xl font-bold'>{title}</h1>
        <p className=' w-1/2 text-lg py-6'>{overview}</p>
        <div>
            <button className=' bg-white text-black  p-4 mx-2 px-14 text-xl font-semibold rounded-lg hover:bg-opacity-70'>▶️ Play</button>
            <button className=' bg-gray-500 text-white  p-4 px-14 text-xl font-semibold rounded-lg hover:bg-opacity-70'>ℹ️ More Info</button>
        </div>
    </div>
  )
}

export default VidTitle