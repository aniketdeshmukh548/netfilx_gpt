import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const dispatch=useDispatch()
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
            })
            .catch((error) => {
                alert(error);
            });
    };
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName,photoURL} = user;
                dispatch(addUser({uid,email,displayName,photoURL}))
                navigate('/browse')
              // ...
            } else {
              // User is signed out
              // ...
              dispatch(removeUser())
                navigate('/')
            }
          });
          return ()=>unsubscribe();
    },[])
    return (
        <div className='flex justify-between w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
            <img className='w-44' src={LOGO} alt="logo" />
            {user && (
                <div className='flex items-center'>
                    <div className='flex flex-col items-center'>
                        <img className='w-12 h-12 rounded-full' alt="user-icon" src={user?.photoURL} />
                        <p className='text-red-500 font-bold'>{user?.displayName || 'Add Username'}</p>
                    </div>
                    <button onClick={handleSignOut} className='ml-4 text-white bg-red-500 px-4 py-2 font-bold border rounded-md'>
                        SignOut
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
