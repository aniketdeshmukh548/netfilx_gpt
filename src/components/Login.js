import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateform } from '../utils/validate';
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_IMG } from '../utils/constants';
import { USER_IMG } from '../utils/constants';


const Login = () => {
    const [signinform,setSigninform]=useState(false)
    const [errormessage,setErrormessage]=useState(null)
    const dispatch=useDispatch()
    const email=useRef(null);
    const password=useRef(null);
    const username=useRef(null)

    const handleClick = () => {
        let message = null;
        if (signinform) {
            message = validateform(email.current.value, password.current.value);
        } else {
            message = validateform(email.current.value, password.current.value, username.current.value);
        }
        setErrormessage(message);
        
        if (message !== null) return; // Don't proceed if there are validation errors
    
        if (!signinform) {
            // SIGN UP
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                     const user = userCredential.user;
                      console.log(user)
                      updateProfile(user, {
                        displayName: username.current.value, photoURL:USER_IMG
                      }).then(() => {
                        const {uid,email,displayName,photoURL}=auth.currentUser;
                        dispatch(addUser({uid,email,displayName,photoURL}))
                        
                        // Profile updated!
                        // ...
                      }).catch((error) => {
                        // An error occurred
                        // ...
                        setErrormessage(error.message)
                      });
                    
                })
                .catch((error) => {
                    setErrormessage(error.message); // Set error message if sign-up fails
                });
        } else {
            // SIGN IN
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                       const user = userCredential.user;
                       console.log(user)
                })
                .catch((error) => {
                    setErrormessage(error.message); // Set error message if sign-in fails
                });
        }
    };
    
    const signupHandler=()=>{
        setSigninform(!signinform)
    }
  return (
    <div>
        <Header />
        <div className=' absolute bg-transparent'>
            <img src={BG_IMG} alt="bg-img" />
        </div>
        <form onSubmit={(e)=>(e.preventDefault())} className=' w-3/12 absolute my-36 right-0 left-0 mx-auto p-12 bg-black text-white rounded-lg bg-opacity-80'>
            <h1 className=" font-bold text-3xl py-4">{signinform ? 'Sign In' :'Sign Up'}</h1>
            {!signinform && <input ref={username} type="text" placeholder='Username' className=' bg-gray-600 w-full p-4 my-4 border-gray-50 rounded-sm'/>}
            <input ref={email} type="text" placeholder='Email address or phone number' className=' bg-gray-600 w-full p-4 my-4 border-gray-50 rounded-sm'/>
            <input ref={password} type="password" placeholder='Password' className=' bg-gray-600 w-full p-4 my-4 border-gray-50 rounded-sm'/>
            <button type='submit' className=' p-4 my-6 bg-red-600 w-full rounded-lg' onClick={handleClick}>{signinform ? 'Sign In' :'Sign Up'}</button>
            <p className=' font-semibold text-red-500 py-2 '>{errormessage}</p>
            <p onClick={signupHandler} className=' py-4 cursor-pointer'>
            {signinform ? 'New to Netflix? Sign Up Now' :'Already a user? Sign In Now'}
                </p>
        </form>
    </div>
  )
}

export default Login