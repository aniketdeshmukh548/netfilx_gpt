import React from 'react'
import lang from '../utils/langaugeConstants'
import { useSelector } from 'react-redux'

const GptsearchBar = () => {
    const selectedLang=useSelector(store=>store.lang.lang)
    console.log(selectedLang)
  return (
    <div className=' pt-[10%] flex justify-center'>
        <form className=' w-1/2 bg-black grid grid-cols-12'>
                <input className=' col-span-9 p-4 m-4 rounded-md' type="text" placeholder={lang[selectedLang].placeholder} />
                <button className=' px-2 py-4 col-span-3 bg-red-500 text-white rounded-lg p-2 m-4'>{lang[selectedLang].search}</button>
        </form>
    </div>
  )
}

export default GptsearchBar