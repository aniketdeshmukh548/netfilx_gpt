import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [signinform,setSigninform]=useState(false)
    const signupHandler=()=>{
        setSigninform(!signinform)
    }
  return (
    <div>
        <Header />
        <div className=' absolute bg-transparent'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="bg-img" />
        </div>
        <form className=' w-3/12 absolute my-36 right-0 left-0 mx-auto p-12 bg-black text-white rounded-lg bg-opacity-80'>
            <h1 className=" font-bold text-3xl py-4">{signinform ? 'Sign In' :'Sign Up'}</h1>
            {!signinform && <input type="text" placeholder='Username' className=' bg-gray-600 w-full p-4 my-4 border-gray-50 rounded-sm'/>}
            <input type="text" placeholder='Email address or phone number' className=' bg-gray-600 w-full p-4 my-4 border-gray-50 rounded-sm'/>
            <input type="text" placeholder='Password' className=' bg-gray-600 w-full p-4 my-4 border-gray-50 rounded-sm'/>
            <button type='submit' className=' p-4 my-6 bg-red-600 w-full rounded-lg'>{signinform ? 'Sign In' :'Sign Up'}</button>
            <p onClick={signupHandler} className=' py-4 cursor-pointer'>
            {signinform ? 'New to Netflix? Sign Up Now' :'Already a user? Sign In Now'}
                </p>
        </form>
    </div>
  )
}

export default Login